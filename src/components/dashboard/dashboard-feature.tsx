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
    "2sLEEpppBdi2F3X1uYMJz4QKZjs4YzuyTiJKE6tDDR9EsTptnKA7ZF2e2Ejew6MpdqMEYJdQSiK1zkeqDXfDXrXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyXGkeCvv2n8xfxKS2uZDaHTHPJPzrMqAoaJjjQfJQphSBjM2GTuTV4JdhagvzZShnxh3dDtjXFTnq2HadqkzF5",
  "key1": "5YnYUSf1y8n8XPPGGNLJ6L5kgpzopdySPn4RqMhu4ju1tjYdV1J6Ypf5LT9j8BA8RN6sReijCd4z7jcGu7TF7J39",
  "key2": "2hDhiNsipLa4g2n1gKnibHAn2vpPfFBEHYLNsxNGMVNur5cpBSHCjKD3Kb1wH2jTZL2S4E23kCfMqA1DuRjcEj85",
  "key3": "rgm5tPnzYfd7nA8w6kWmF3QgD5oAjuWLBt6DcVUW1zpjSHN4Vv55UNGWWEoBUXM7mGsaoPjmiCskwEqdAtsRXyv",
  "key4": "2UbGSWPyMnoJevCpwa2fEYix4yZd7vYpgGqd7iqrU5WXw13n5Byiez8zEWReHTGzjckYFGXWcrH77ha6wxVr9nYa",
  "key5": "3dADNPiKK1CXv9aMVeHQL5u4ST7SCMJoXaTkhQrZ7yVzESdUEKtgfnDGAyTsTyBQQ2hzNhdXHuKk5g9Yv7DXptgn",
  "key6": "2p9bmXUKQFib23awiYTLRhGhwmGfkNEcckHGAd7LTV3YgwaVfS29MqPnLRuVcrUW2A8WHFe1QmhkVssUM2fQi8Pj",
  "key7": "4qFUZwKhESkQmD94ifqvZu635WxP5QtjZn23L3FUt3Sf7n2Z4kd3i7CB2AHcLE7T5EkbSrS6SXqYrnhZ2CLz6TxT",
  "key8": "2PU3ZcWzD5JNN8ibNBuUvQvDCxHtVPAfcstpViCD5fYzYnvSZSHKRCLR1LUXt6sdXst9HVy3yFL1eZP7DtutV4Xn",
  "key9": "4RKV1iNppoXptzmDrmvfSGTAzUbRbVZbypXvpxifxemUb8a8BmNcMzCSoLqAVHbFx9dYKNmjEzTYUby2rp9pFQVD",
  "key10": "2dCNLvW92rQm5CTeKdgE4owQgudta5nLR8cnB5x9o7XcARWCaybZtxXbGmaFFpkS64SAW6JqredAy4wdNmcYqVCq",
  "key11": "3aSQDrB1M1Nr4MzCsJUL8fTmi8bfoEtK1uL68HARExg3wtKfLZGGGBeJgKy768KpQpqxesSBZLVfTDKsRMVQSzJs",
  "key12": "4JpEPfw9PLEgLgFfJhhm9eCkrKxJi4EytX4DzVUMDwbjtJDHoo3gLQ3BKEpfMQTFiMkUZfmgJzUkTm9HCkoMmgUz",
  "key13": "4iawWWRqwfFYY2b924VHJSAyUkYnfQpC7BaafsefhYdEdbcrLa5wxWuWsyrFPyMFyPGy5uYf5c6Xy65oVoafkE7X",
  "key14": "2ZWXPRP5FXqRA1CSrwHeRYncHkMverKCZusRzDyXJcWj8Sy8vCbzJMwc4rck53xT4civU2sPEFhZKTTimJSdewgR",
  "key15": "nHAhG6fbWzGxkRuXPxSrCadLCU1b6Un42BCJB1bpsRxgqoekTXt3dkh1MCfnWZJJHpBj76vEZ9GJsgZE9dDAhP2",
  "key16": "mW7p9qduVRdhQpvRq1hJayink2ZE5oMfJspLuDXvj8MZx5wNLsgVLQ63Fsak7aPEMC8HizkYc9T17n1uJit5vUt",
  "key17": "4SB9zaTz9xUmTNW7NTJdBSMLJh9kZymw86WDTPhCYMgHHemUsT68EVBnejjEek5Htw9UqLECnHE8he8E6KmqGJpm",
  "key18": "3LAxhqjmX6zFj2AEUB74JD2bhoKPDvSocCUznBTtQtNFQ1oEXQ9HbwzVF268vJ19uzBut4YpRXba16KfMcMzrUzk",
  "key19": "3QMAFbrWbqYMfvhQ1bG8Tez8cBS2N8wVEE7NuZsa5ycSsQ5e5HHB7SZFQJVf2weCfPS7NrF9tqZYUQ2gVH3Uahwr",
  "key20": "48RX9DkgWp8g3a8VG4kxznieAnidV1yGHhQvBD6RbeTVptBFQScdwUrBHgKK3X4LcdzSG1epGYNaiQAxnmLqcEWo",
  "key21": "2Uy1c57P1D9kfVsRBZPBMtvRfNUedxdW1TM1noKSYR7PK8REQUBRxKrf3GijkxVh93a3mTc3bTch1hD2GxnZp4TK",
  "key22": "2eCsddCdKWsf4HxWVDtyGGVErbqkG2gFaFCX8TjbQrgLmPLk27j77Fo8HqsBqCcCZyjEmgoQKh4KczPpuwUa9vPk",
  "key23": "4ufZZ91fvrBADkkhskqXf67VasunA6ENhbYgDv64SYY5eMgenWP2EbqyfWBN9eHu8nh5oGSB9fc8vr7j5wZZaipn",
  "key24": "442fLQ1qAbZg4XSKRxBEgKgnKeBdshL2Axqf2RsvML452hqPkoFcz8pLYbxEmEhkXvHxi2chD5C4VgpRinMwoAYo",
  "key25": "23Rog3Yn7Y2d9hA2mqCRsRc9hQpnxTGToMdPmPtoQyfpAj9pjVqAJz32kkP2wA6vhJsaZbNkF4kBEguFB3bmLvZB",
  "key26": "2LTwA6DnUoLmxGKEWR1vYcpxrabL5VWXeM7bkmBRNqfhebYwuHUvQ4zeoxSMQ7kWNByyknnTNCehmurG5Z8bezvH",
  "key27": "5viqiqxUrjX15RSfiEYqpids5CNQVeqbaUP56FdiVXJAGqYZXdN8YCTvaTf1zwaf2S73DTMCe42WsYLHDTEZnnwh"
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
