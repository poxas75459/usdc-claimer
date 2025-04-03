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
    "5pK6gskJ2v2H5nuAQSZufRvARHXBB8tTcv3WZr2x4vDtcizkhFVdk6pB4S9M8uVqiKiuNEbytHFyvyyKQCKPUSbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5ukSwxvDdg1ftE2ao4vHvEyxvsXUdRfHofbZ7nDtckdEFFd9LWF3jRn3oGdEicLMNiiXPQWhjd961wc4UrEapw",
  "key1": "3B5BC6FRUxgFGNFdkV6ceDYVxy92n2NNXDJBaPMc3bXtkdt5f5X6Ry8vqddrUwnS3otxuWuqDaSyeZ5zMduxr3kj",
  "key2": "4b1VKDrG6KnvDEz5syTSzrUCkwXmSdtbh84fo7wf5PLUP2CcgGV1njuuAAH74cJRPNYfY4en7VvUKGLfanHWc6vG",
  "key3": "5BCiYn49CmV3hZrg6V7J9Xph4FYpuob9fXzxUG4KfTxawry4daHJrATbHU4QKNsYkoLnGAbuDVBi11HR5Emrf3hL",
  "key4": "L21nfnqybPmmi3iWMGPtwfokLzg8Lrz19HRgE4gso59j2cnwHuj9ZHCqQ3NEsoAzaRjWoFqnLYzdytABfmnpQR8",
  "key5": "5D3VcAjQDFM2r2NiCYZQ47eFW1tPU3CpcZA86VucqcZU7TpiwDhyJftTvXxGYZG698aq8TM5hYaU575UhSQxn7AU",
  "key6": "j8AooMv7idyTa1ZnGYMYXVaUTTCeNyi8tQ64bGsASB7pdxTZsko2sCfhvQdWMYBGuUUG5tCbfDQrHSDeCedqXy4",
  "key7": "4Gz9QRYakgNZV5b5eL7pzv8WJGuZqyLBzKWQ8gRkuCKGj5azJJgHTWXr9Vxcq8Dn1f9kZ4mn1rUc71gsXftEqdcZ",
  "key8": "2mgdAzQWDNiwfBqDQCvezyq5fZh5Zvre1U8U5GMz2eDfkxhzXkEcFf1PPdjPj23aL586UbBDanpBfNqFmgFDdFk2",
  "key9": "2nGZTqFyZEDZgx11dYyVYekvStC9jwmaikuv5Vrbv4wjratv6fjJigCfrPsN4weQjTknShrHFQuUdxY8Uh2HpAYu",
  "key10": "RW3khzJ8ab25kbLMoQwRcMtyobumASxo8s1sEkuQXE7wbMHezRUN2q2pDig5DNUp21p1xn2KYo6i7FKhgi2muZT",
  "key11": "2xEcMzxwmLooeqN9THT95fvkEyuWsbHfVZy6egbGaQaFTCRLE3YXFS4qayxuozfRXRVyEboh2dqdeZnomWy2C5QP",
  "key12": "nSFpDMDBcG7KaNgH7KqESZBLLQQtCYnFJhXpAqVzQCCfNyAJByMAG1cKx92S2FDNWPEEKvMb5XARxGUGskRJ14j",
  "key13": "4rFdxCMZZtHmN3ENesfMBcSVLwDp2sQTEASoevyBNqxKS2xhzchEp976cTnSEo5azW3iHkwCkvU5N6QvG9H28HDp",
  "key14": "2WzjXtmyEhYVnJzBRRQ9LXeKKj7fT4JLmiVGhMwsy565mLpgq3eLJ4vRFEwiLcZw6vynii4ucP5xbLw5aRUCGnd5",
  "key15": "4vH5YbEaQA3fSnn3UD4kDLEMfUTLyJcSsfrzTeErDf822SnntfPcxAgvC5dcwckpYSL9vm3szbtdq9zt9xgoZxCk",
  "key16": "2ZquXJ1EReKXNiZUSNPVgSgE56fvepnpnacXZSDCJJoeqcDB3pQcjs2xXkL5v6pfxnojtW8JxMr74aBgUUy4G2p9",
  "key17": "PhmJfQPNd8Bvuc5rgxVGvysBmSenDTkXsmsq2eSdVFePUHstXiVZsF9whqQYBXuyRZbuvfMTH82ibsiF1ve3Es5",
  "key18": "2rA8P757YnVN6jCxYn5QetbV4gYCpt5F6UcapyJBLCSSFoDcgh5AheCaR1aNX2uNVRL7Fv8YKH3feHTFYSwHKDBi",
  "key19": "5jVGjxabgwku89oWrNzXs5x951AJmsuDpgEE41zDR4kV5GEJEgj8aCgWeJWTWxp4PAMdvxhbB4Vy12KfB6p4ShAY",
  "key20": "5E3B8ZWSLQCQTdjXD2ArpL8B4fwTtNJ5B2QLEqT3YKLy91zvqXiytXUF8tQKy9gGrsA28nG3baZoaqRDuTb2Naj1",
  "key21": "4jrnStTdifmWaFaCHcQyM5rLRHBx4eMEa18LfkrAKnY5e2mwF4maZdQXm6jYnGQkiNaaRVXa1t5yzfDH15KMSTEM",
  "key22": "5aZCZHrQTppCVn7BfUGwtyhcj9fHnHCKbDseP8o5wBHZXNyKqjxN2CLftQ8tB1ooiXqadWUfiTNTu4CXP9v6nSbP",
  "key23": "A9qXJrezXZgdimiH8B61ACqdizjw5vGFeuYjBKzYWemjjWmAGfVj7SCkzdnxy5LAwGXoWE2oAAF2hNVvYqdNCE3",
  "key24": "2ihyrAjffu4YkDAY5qVCvHrUQGMpXqVYqzpNdv2656W4WwFHhXCaLjKoXnyDiAN1vJ8b29qgXtsCX8yoTZudH473"
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
