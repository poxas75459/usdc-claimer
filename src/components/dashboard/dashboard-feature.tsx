/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "53dHuJDtkoopwR1gUJuwoShjo1ZQVqfUMAQPJWtqVTFMMAqZVafzZUvoHM6s5jCGTkss4KZZ3a1yAJJgLSS4ScBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQgBEokN97u2wefFKtZfjRPxftJYt59GvQF1bdfBYhgKKfwdPC3FjjU9wc5QmVNAofYeVkZFM7xWKNyT55enywi",
  "key1": "3YjTJ3mdhoTw2BYksLByhwwixaUksXnpjXR58haSqiGKzy2fo9iVBZB1HwKqJuGpUqZqtiE6aZEMx5kMXRxzjdcE",
  "key2": "2v12oJKu1Fa42d3gNk5UcgiYdEBT6tobKZgTCuwiWYh6EXzjpxoJizVYZxfH49TJqTnngCZmAmFSSgjcaCRMFs3s",
  "key3": "2UiJKCfzSUDPakEzH8kn2hRYZzazRh5ErS7zH8GJFFUKYfLi5W39jaY6GKjwXR4KeK1qeqSbSGDatgBhtxGuWLrr",
  "key4": "4KR1Rwb9vrtqah9N3BfszyXNMEhwEUvB7rtMR9rBDXhb7hWxepHZQACUApxgW8SzQFM8JqeWRVECh2HcdYiotzMB",
  "key5": "64RPRC55t13vX7CVoMuBC7ViGuwwY53Wn4F87RatXdAHCij5zfyfU2vAhPb98Yhzo1rEPh94jV8Tum8c2P1pViFp",
  "key6": "MgCWeMLjp9ALTnJLJtPgT4cM8nMEpE6Vk2uhBunuYoE3M97mfZQjSafMFu5QzAUX7ihEUCg9DdDHvBxPUt66dQu",
  "key7": "3FCuCWLp1LQgkhYvNCYGko3MM3rWXJLpxNHW8NfXRU4wkvGo3sqJfoX6K2i1ndCh6fxhaPoyWLNbD42ARJDqXCax",
  "key8": "4RmiSxUxpEvzsUhY2RnheWpcMcCkL3CT9pLZMuAxnsmRetY5uFuj76XTmNLpzvGUi1uMyDhAvG6zXybmJe65zHPq",
  "key9": "t8FaHUCYAnEUG3H7nwwRhcRZy6RtxmfrN8tjDSJdaDgHbNRduWxU1TT9CxnvUWpfeM2ifupCaNiyf8cf2agNo2J",
  "key10": "5YFKamqcCWf6a9ucPn6YZh54WndRuM6DuWZhraox46KkJ7Ha9SrXdeAQ9YQETjLqWMWm67ZTtDgmbwkuMQLiswHZ",
  "key11": "5CvMgzzNNuXu2dgYhWUyZkHCE6hnRWRfg4kJ7gpcjNHGDh96bhXwp5hzQAaTpPveoSYJvXekxQey5RwHqFY6J2qW",
  "key12": "24coU8YyjdLFPmKggGmkU2JdeBYWkkqVePoefdnmgYNe23n1t4FD1Lbo11cbWEFwciykWZfje7kGd4guETmALYy5",
  "key13": "uvGnJ2ifjSGjPJ9yLXeuuDL7BsvV34FSjBn5Gee5pAmuDCjWGp2VvpSTSqAe4kPpskYc9LLUwKvUyFiV4f94HEg",
  "key14": "3gpRQRJtDVy41pbsXzkhKr7L9aWUBYp7G9nwnoLjgViZrTSknmghoBF4SU9j7TWeLEzzarVKqAJcDmMp2RKeL3Ek",
  "key15": "9rrkbrqTj8RPZqsYEgm3oGKFKvPyARUSc6ewx1e6nzhCkpAjhjygSQYe1jZqnvaxHf2TNsxExBDy6chqJEcUrb7",
  "key16": "65Np5gTtmuBFNygEBpwpQpBoTC6WnhbThLTGM2xyBxE8a2Q2nrhmYUStPMzWaVyjk6m5R9qL2HSxx6pZuzuL5Eew",
  "key17": "5MSGTfEJ91Q4gBGuvVn1Pk4XdNeisDKAvocUgmRXaqaTfXiTtwcmfJCunhzgrsh1Npd2awxfRdePUvJTudy3vbiT",
  "key18": "z6D1SToDa2F4CBSsK8XxTt615LAZjpx75BsRMv7WZm5j2SvdBMGcK7iAs864y1k5HPoi7fEPXgj8P2pWgsw1Ugg",
  "key19": "3Sp8sQuLd2TorL8gQKtHdDbm3sroXMtBQcLoppg1Qoq7QVvKhNzCr1nc6moq6YMRH7axqB4WRnzrNZVhP5DYmcuc",
  "key20": "3qqotoxznRBcPtPD2f1QpEoKvbYREw53Y5gK5nsZi8MbkWDMFZ4TA88Yg9mW1ebUArP5bS5DhU4mSGnSei2XVnoU",
  "key21": "4R6kFNN2pv9EpDxbMRptQZT21PK4YuvBPUGqcSjqVsfb7s78N6N8sXWhqL8BTHXyFPKBgNjc5kQVvDxgGHPMfGaW",
  "key22": "cGD4oGh64xT9ckWaM9fUEgUmykLRnwToudWccyVzm3V8sdSkZfYz61CGqNYuYbmSbPM6r3QagttWFtRRkzLoBaG",
  "key23": "5iH6EVbpntxmHTaWagK2V38KsnAES8anm3oqLchKeLD8Wi5u36VAtwic4MXSNrMRpWSzbuauxE5qu7rBze5XVF2M",
  "key24": "51Dq8guoWTaQg4hHuqeCWTmmmo154GBSHAeQkmHFtn5HTSDya3x6r37MESqz3BX9C9Cjop1pYAEmvveSieNT3tmQ",
  "key25": "4Fn43BYfsAnYvydcGjiV2dc9G98GFPso1Jh3wpoY9g5XbdGNo7KG44FtYAd3X5wap1tJR2bvzVapSjtY6vxPR98K"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
