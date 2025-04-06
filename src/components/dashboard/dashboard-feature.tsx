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
    "2qzVpiG1NkJ8DgGEsuJUVxbn8fjq6r2nHdqG6sFbmngTipmoSDZp278gSA7zQLf7tGJ1Kn7an5HGtV9BbNsfZthk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e49XHcSrC23rd1FaUWVeBWq73EGAZDP9ZdjSDfNLE97frTSGYcqJJskabrEYYQZkVqNXfLUuoUbAJZvDF8h5uau",
  "key1": "d44ZC6YWpGm2yfa4E1mrFHB8zS4pHE4yf2awZmhAcDiy7vqDQoyRpZoYYmKGHBdjGvz6F73XzLXxofrqr3rpmnT",
  "key2": "5Y614rFh5N6CW1jfvwWXfUsCx2NV2cj91u1BG3TEKvd9eCLvTLyHdss5oTSqpP2hbYcDb8mgMEKhkFYW92WsT853",
  "key3": "4Nvke7ZzXQLY9ywLjVEgPmCAdjdourGrTU1oo92mL7HctQNw46VWtmtHG47xnU9duBusz5aZqcsv6PQ6ZkBXsshy",
  "key4": "2cpVEUu6tpM3wytV6q5Yo5fdPF3dGXEFRybwrcYKpJWYpb17Bs39vEPJeVA6wftz4cwTMjs3Qcg3H7SkR2Ez81Ez",
  "key5": "24VBK5FhQS8tEMnFWjBy6LAdVYcDu3QxY8zX5E7sb9dMxyNpQYzhnQktk8hWTLwseFTAMyEfA8eAhe2bMhjCuujV",
  "key6": "3t7g1Cg28WEoCmqGLpyiEYNYduyfnKjexrjRaWDwfKE749wBqSiWDjD2EpP8jCTtuhGtKBc6s1eNMFzvzPMUtNHD",
  "key7": "rPEuECd3CE82KG3V5pSLQajDXgMp9t4HndArme9yQ7kRneDCBoZV5Qxpf8AuXA8gTnHwVp1iGKVjxfC37T7Cy7m",
  "key8": "2JKBR1upPoRsiX6FHQ56XqqVR7AH5HkQDWRrfK7YSvGxeV1X5D8x2rvX3cm9Rxp7MCPxgQD3HrqovmC7PG27Hdyp",
  "key9": "2xnW3i9DhJRptFtzJj2RCBxqoQdDaJ5MRfENjBxZUNqDN8ZEPkQmXiuba6a5AnXTPsfPdBB3FNQpUAcp5KYqtJKp",
  "key10": "5HGGvA6iP7Dh8eMu2Y2QRF3n1HHyUZtagE4cL9PLGQHFbaM9EVUmdAUcUU54o6gmCy1ofCh1mCkZbCMqLmDcp3s7",
  "key11": "4pAMfDsEBQndQFkvqxmxx2kiwPQE2PRHRf4LVb7JkNh7ojhS7mtmNZxN33a35LUxrEg5fmgt5GTuBfbU9GCiJpsb",
  "key12": "3egE91sxfC48nrpwyD7mkEv4EbT75VUmm9L1UuDUt7VmPezFB1Na2tpfzbByfvmTFrbmXd25yfnaPrPDRyBTKu5",
  "key13": "3v4SvrazXmJDZtSpG1FabsMyRN18qLc8GQXyadonodhvTUzNCntQKpH9DRXPQEUKU9rEdLKo5BifhB77sqh3fGoj",
  "key14": "XG11Q6dejm7NdPNhKSj7KAwA7MbyLdZR7Ur8aWf6SgfVDMxvz8NtfWdTacDcYtyeQqAskAThHVyJ1z6p1zdYSLd",
  "key15": "dEMFzTEhMcqxWCrNbfeiuzgAeuyukW8VgFPkgFYnmtxpKmSDiwxEdR9b1Zxz2qGDHCYTsh2okDTzkgJpc3xZZ5f",
  "key16": "3H6jR4pXyuHgokiu7anon6xjaNhtSWGzqjYNS9KnkBAdGDMueGQVb2oqYavtHXT8FyzomqQrCyUasq4sTfardN8t",
  "key17": "55KHKNZoqwimtjDmY3tTkkY2zsmTRy2FHnbvTaaHDkZ9cZMfXtsCyjzx3PzprYgGHcCHQQFiFVgzZcVi63QaRdzX",
  "key18": "t5TKrCFr64oAW7bV3ddGVmSginYLZjEWxvcsUsf85r6RcD9QL3y6tD7a9Hnb2XxXaDNP5MNNPbgpsH7QwB83XtP",
  "key19": "3iYZscZq9C3eEPuP34Z2L3au7ncrqc676WbeXye9fdgZJYmsuksKYLpKggq8iqa3C326x2xfMwgYHN54rW3JKFm2",
  "key20": "5Vc2qHTj1kMzDxeSfpvN5t3AHibsCgiEekEukBpp1AQ1K9i493nQgPVovpN8nC9LWVs7yMaT7LtsgmHhW223hxJR",
  "key21": "V1HbunaAbu969kULYaQkX4uV5pjMtwd2huqhay2MfcPJMNnswUrB1epMR8K6HtzN1k26CZ1M7Gq9J7vDU3XUgrw",
  "key22": "3v7oNkvGejPy2ScUegr4j5WEb7f6kiP4hFwpwc16fau1mgK7sBHoqX3TqGJ7e4ngNVs4WcDRRS9yrPJr1aQrxkE2",
  "key23": "3BRirKtaMoyKCL6WxGJAbEUgG7Y8inntBPSGCGhbsypTxihcpc6k8uYFWszBEoSnSspPdttgAW9dicnXRnkn7JL2",
  "key24": "5cjDfZtStiuEWZPD9zhtwJMuqiSqVe1UR6LeUhPg4x34YLHPHvH4uN8rdUE9C5Tms4WLwp9K3TqBLCXkPNA2mVJg",
  "key25": "2Rfh1RGjbo2Dm6WSd9Yg7yZvL5r5XRKqK4RUp1bwaZAz99ZA3NtWksvB3WukALYy5JDZv9ZHgWyC8yFz9bBULtVe",
  "key26": "RJtdR7eV5dQwT8trp2ABA28R9qJiHGHwCRRUjvNRPeobGZod6SPwTNHJaiRTJnkpVhH9ouo9noSdCn34UCQvbsf",
  "key27": "4bGi3DrearmsiaDvk2ca1LzFtS4BGRraLg5Ggmd6ThMDoNXcx4LVpfDnp3tmbxLexYFYeB5rcwLCbAbFmRvKjp8g",
  "key28": "5H9uQQcE2nQfFYPxpV6zJmiAZ42g2kGKZr2deW1BZqLGVgFmsDjvR7EvtQyx8m8kv5CYBnfQmqy7BZajXkdCghpJ"
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
