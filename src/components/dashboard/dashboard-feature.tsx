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
    "SWxWKKVnJBzDNKS19gmoph37JFPFA5DawLikSBzx8nW3mgLnh2a4CBzxd6UwhVACXgeq927tBRc6WtT1fsRjBzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCDh6hmeLprwTdRkiEdr9TpnJSJ6c7tEJ1Fhdvx3CaMW471uwJ9ut1TSKXEcPS4iNsQYS88U8bFDtCamkTUWhB2",
  "key1": "gJ8fZYWpX26DbxR6S1EpzYyYh31ZdNjDLoU1RhtUNk5Sa3hpuNVvenH19cThJNtDNfyAo1QG1NXVDk29bPgBsUn",
  "key2": "3yx6XbWgySgswyimoa2MiVHQJ7zK3koEZzVPbh5uQbeAivgACUxNLZ1taWdT3godQTsrz6dErUpeUQUGZXnFoH3Q",
  "key3": "2Dou41f1ndxdr7seyj336PdZj3RBgmWmuU3x4YPzymNND81DhdxEQ4uRKAypsZJXaCC4rpQgnzev5PxxSAPGvt9u",
  "key4": "5RX7a9RRHYgWANZoCmPKv93QbZqzVVLc21ySswku85pyKn1RDwoRZ1Py7qvR3tF5VdfZ2Xnh1ZBvmWByebJVw7Gd",
  "key5": "5UFEjywTxkfrpFfG6kvqT2viMeBZumr4QeSBYp4SLptBeYiZyUpugKVFpozyfpbpTUHrVmi1Hop8xCrJevNiNiEf",
  "key6": "5EufzXxHUtsXsErwLvUcLEtqYtA5ud5Z3F2799sdASepjibDRqr2HMYh6XRb2SG4aA26wdpYZkK3TCBgPTP1hK1n",
  "key7": "2sN9RQbpUEDsirLqcVyHPze9iqhmEx2v8F38GiWY1rR9Tphjvxe7w4KmsvRyiZvGgAujiXEQioj6HVFPrVdsk6kv",
  "key8": "dBWy2XTA7GS3WR2i5nK22cFQ9qc3CvzguDRkJfay76zX1nR5CRNn3Wm15tomCGXLeg8E2yg94u6CjCw9Rumh5Dd",
  "key9": "3LafZ6UthEq1oPVdp1Fov4SeRTz7Zvas8c4QWabmAZuUaVjrcFEtmLfjmq9KZfYiZEZ11ec2YXRmTwNV7Jc5HwWe",
  "key10": "52Uqj1GTcohcHZu1HNqseJPDuMKTY5csotZiHSAaZQg4fHW8q1RX4XqapaAChnxLSWqohdKwgPv7Qw1MM91VEtJq",
  "key11": "2nGekuE651KKWWXaBPKaYcKN5PzgAAttUNxviieMNqMWPfWQm66D49oswW2AwViX7WUASPXAxBxoQjX23DkPkivT",
  "key12": "5oXa9Mkc1sT4EEy8PDYJuTj5VLw6vkYtbk6v9BgnH2y4XJgd6Rx7YkLQVTBGxQ7foJwMpWNq8PYZmtXsNbkRxyB5",
  "key13": "3byrsWpwnhEsKTWPkoqz2CgPxLtryZqb81W4DvZU4M4pgUkzJgTnD6FmPfAFv8qgaKQj3D6QLZZBabox3Bw5imRB",
  "key14": "yQrYdXpHJnccMxBQptEtGmfnnYhb4PD9mk8LrzV3ysANrEBhtLMDTjXerH1Sv7Wc39zcvFDed3yidZ8CvcxHtzu",
  "key15": "4eC1wVtbjpdGzPPkbQcagoLkQHWZweN1iuPdZrHJqD24BVN16zECGFjcCZPp2dJpnUEzYNPrh1aSYK5nSgtM4UWT",
  "key16": "nTEg85SEmantgQiRMhDFmZQKkXHsiV9Eefw16wQ1GtGfWsb49oUTQsePXrmxUqeyicM2VL8appne4ZAdQZqca55",
  "key17": "5X8ZvL957UBgFqmJGsUdX8oy2cuyxh8vgt7y9VSWZrBbiwM8oi4JykU9Kb8SmW6impZ16aMfpXescifmJdcdnUkn",
  "key18": "5Sj5MRCBrbzizaFomDyLYLMkk5c2wLZKdUzBVR1dGtw1NF8m44hb9HT6VHUrHdTQW1KQft3YjE63dszvLC7rMLu6",
  "key19": "22GyxEgnHgyHwi7D99fwQpJ22Up6zWPhEtXd3ZAMoQbhSGCuxBsmu8CeBR9NSiAbyMjLV9S6bdFyqZkDMUCiiRTm",
  "key20": "65VpVs5K5odoyEZaAYggExC8Qp91jMQxz6ywA6QruWSJp4KUKhXjGY75ELDMfevB2VKbYb9BUPdKmoE3dePeCCgQ",
  "key21": "4rRJxMWFS9efUDU73CKbgEP6R565SfZUa8cVntiCjyPHkCLhw6K4CisRgY1f9T1QijgFgPyioocW9R7CtLdpD9vi",
  "key22": "2zHbxVPBP2qML9kq45zy1gDa9g8hgLwDXEwf8rwDGedyJikFejAWFa1f5wmduR2FsJTXiwChPfSs2UgnqH2TdKLg",
  "key23": "2rsYZiaEd71GDpfWHff43qccM5o9zvHzyF5AUjprrLWCXVQC1uFqRME24gJzWRoutp3m2eVvuKneaxuNRQMSb28F",
  "key24": "4TdHLJtKmJeHhcwy3FZNRvniyZeujEPdFmjCZLH5EaMc3j5XQ5e8cXQ7SVDGxL6i5wLN8HfPJAtbqAcKLjUfQrSP",
  "key25": "56Fjj8yZTwMHfyve7YgeCBbfH4zWiqYfWJ7WPCmKabsXSTYmKGtkAJWzLT3DxK5AhxJx28AKN8zGEnHRFv3wQ31U"
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
