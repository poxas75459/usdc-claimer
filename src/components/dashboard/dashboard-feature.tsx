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
    "3cRrcgcrnACvFqy572VZYaaS7iqeePb5FfAbooi1XEZcHLHqR21BZ4Wbfn2BSNJyRsv5QmqbGe4V1X79kk5EVpJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NkLe8gJcmwoMJaSQmGnoR2jHCVBs1iQMtKTv9zHQHvjLBf3gwLjvcDQGTaSGtz24dWmp2w8aXd3aYu9HwQ5QZj8",
  "key1": "4WrLKmVBLkrSVpJgpRKbDWZudCrsimMfoWSQxH5s7bv9Ziew47My42d6jW8yUHWdnWk9syiieDfTUXQSWpYAM5pb",
  "key2": "3sNAeVtZkBd4GCSz41E6oJqP78h7R3Dh63LEVVBBtphB2j3Vp6MNRaPTYS8cC9jDLQXhv79ngXQ5mCUkrNt9Pppr",
  "key3": "4uQAtwKiMVVueVgkhy7YCB2EqQXaZTchJHFDBz3cWhfQANpy6xjyJ4kHRAp2aAcNXZAgk2h5VLHmDQVs7VZKTmpH",
  "key4": "FtPSsz3s8T2yp3hQkJgsGdcMLeBq3ESqeLLTnbV9hkHFfuWkukRGtYnHVxQhhTEs8FaTTAgEEMaDtzvBmJMuEKF",
  "key5": "5WiMrLCaRBra86w8brKspGH1jr4tTMRGkYaLuffWJm5cLoG8nmvmZ71bJ48xtLYiqXaCFPXjewQASJmewZBCCUpx",
  "key6": "43SmC1aCU39FCqrycxhN5U4iC17W6Wfituv4EnbZ8QFDsq7sYp29jeD8pvaMisdtYJeqLQqX4GJTqgcmE2RxFj18",
  "key7": "25QkTWThhkvFTcKfXoP4NtS463RqPYsjxFQJQUy4VdsV3KmRYGWkxH1aDghuXvUCCSTk2QLAjrFumefywKzoa3yy",
  "key8": "uLxEXbGTBSLXYrPadDwadkfTWeDCjyf5SiJzZkydTieDg7QiXwHBUhL5menUqsHb8n8ow7pDPXgDrGKzc6meQWh",
  "key9": "5zNF1UEMbyfndiYM8gGJtQx8k1eNAhCw5BLX7s9xKLuWnyeEaWUvdg5ChZXyQN2Rt4QHh375PCbaYGknyYabE7zn",
  "key10": "3wwX81i8v7mzDLFKsF4GGkoMgdXvbBKXVyxbhCmEYCqDeAvKKGiSsRKPXRFjetsBE9v2GTGycWn4QtRNQrkYArf9",
  "key11": "3sekU2DxCK37w3j6nYnFtzs6AywiQrgfdwBvv6yM5ThfewH5CyQTP1oX2q2ZaWCEuJvx4cHb4vqg1VDVsTFTvVvq",
  "key12": "Ct7wtKXVfeZ7o92HAy3Q3xp3VoJ6HbCAeuYmmn2ac1wYXSu4LexVvJokw8mo43j51CoiqP7gY4mam6A9ZxWA1TV",
  "key13": "54Ti8DwBZRXFro2yBVvZBNPrN6SYMzz5WQQyAgwE19adRocbZJVzn8PAXSe1i7eCakmJsZhEaNXWK5GChRYXKeze",
  "key14": "34rowwx5eWKAxm6ez4fNFRRLW1GhhXVDfjP5aakJgKzTmUXMAtGUKXHnyb4gYnyRLZThQwzwRwiTxDAhRaFPCaEb",
  "key15": "3VGnPrcixz8MY2gTpoacXQXHmbmdHkMzCEzRUGrJ3eWFvJaWTMxyn4uhpaLXhswWr82JDmaiHgpRUoZgVPx4YsGv",
  "key16": "4grnbZiYEc8MeoGZMSuwwXpmVmgP8LiHwRyRpBGpx5jh1peap3MCPURT8VowZLciu1Ms91cJUwDEK7GQZn9rgCLD",
  "key17": "4vF3n5PTdA1cE6iATbmuGna5RjxfSvrWqUJmwBDtxVmV2Ua1xMkuAYpMh1RZV5XMMvrH9ZNEkdLzr73FuS4T3h8m",
  "key18": "34G46qQuFBpx9xHrAgKDrwgvsXf8yoXZVj5c4cWAvBhHRoKotjxq4HxDJHd6GXerocxVdXDeJWPAsQEb7fzvXptm",
  "key19": "4ehT1PRt1deLL2cwwLeBNUVNm1mfvJLDH8z5yCuYwaRKFPvpErdqPVUj2sZYyPgbrTzyEohDdafzr92G3ttKwaqq",
  "key20": "4M1aLpx1d2xJTEs4URdNxP1NAcuHrwPw91GNx6pg7f7XbxCuAQuSzZcGKvpEsJ3dZTzPjCoReE3wGozu1JvNKcMc",
  "key21": "4eLCNHFKLDbujaBeTnpwmshVtrHYfJQhHn2u5mJYhzv4Eybwhs5uYESsweFW4xXoBdXwrU4bU2tyvYrbojRfCPzZ",
  "key22": "AzgovP1YFWwSt5tWWagxiCGS5rWvk9WFQsouic7XGDn2XvhPxrDys79L8Pqbe8jwqqyYhiK76DfPVXB2i7fQJn7",
  "key23": "4m41hdJeaUV81WAPG7uJWSUiLJzm7WY9M2o2CQZn88ZLt1Rq14pe2dfq8bKeypmmdbtcBiLpg13bZXhUhwJwvTis",
  "key24": "5P7zsiGG9XUPwJtoDdpF9oHVXePs9LC4tdqFCRuddXdWibgX9uDYZDbGnhUMw3jXhuYjY1dLG2THLsQiWTKymVvK",
  "key25": "2FdRuTixPCHEmtWaRSJ8F8TU5tgubhGVjVmESpkZ6uvvfUmujcVs1QtLdx5Esti2vYk6ybJ2479uaUjAPnqwBd2T",
  "key26": "59uksUPu8ZZNdqkfnxGuhoHuV2tNp3voKD8tMNvuhmZNDzLD15ZgmFcVrzir6SrSeDfxvrqiRJkgJVPPH41m6bCn",
  "key27": "4bSJQKZHHd641ZQySj6Czye5v1g8vzyYjRDqvpZRhLf63gyqKb2vnpa6frsPLVEJLfZ3xQwMopFQrTfjteRL8weP"
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
