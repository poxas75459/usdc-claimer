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
    "svggWwfHFJ6pBRbzKWP1FYXrcip4Tcak8KouVEDiEbpj4sxsUnZWLAQfTNBae5UYnAwDSijozPvXpHvgGTeBJUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXZzxAkFtStTf7KpzfSzaNKW16xEDXE9kZUzrZs67JmszZHvVQ1CUx14J1vzPYtxLYtx1vEc3bYyYP5Q1i1LqvB",
  "key1": "3Fu7eUSRYP3AfBSVdSBF4dYLr2PxhqRKcyCzUyu167SjdyCnqGQosroDctXfWVkmmD5fLRN6eg2bmVXcgfXZQzMo",
  "key2": "3PAEc7dDMXKtz5yDwD54GZuCS3onseFpCyJraFmQzLYcfzCceGjzLu4ffXWPfrAK8mHCnG4eYF48PH8S9ui7Qn18",
  "key3": "Srf9V3gm1jykQqK5MAVCayVFJbkq6M8iNbN7WDyecygiMoSdfnzrfhbWRug5hCdZNe7Dg6UmQe6ELfrBRrALuuh",
  "key4": "37yMyEQo5xiTecNv1XjBKWmT4NkqrTsmymweP9MkcUdzttrsdDo8wQR27dPxxvRKEJUm2gpSK2tTB9cTTHRWUTQH",
  "key5": "4k3LSNUW253tvcRJPFywe1TkZPfbGGggd5d2PgPjVMdkS8AmbBX5P6qBTsRsQRyXvdytvBFTaCCCCJ119f2LXnUy",
  "key6": "rjV8hyqYsQ1HTAWq4ejAjT1ZMX5RDArLUQQzmCA29Cuz2X9CwhuGyNmonNPLHZzyLfm4dZrVnXbNfurirveKSr8",
  "key7": "2dh7RwKW922iHvR9fchE3CUjmYr1UDjF5so3VV9QRYJQVTWXoz312LwvqzX3LWUF3wZowcYwmt9vHWDy2HQU95u2",
  "key8": "2naDZitynpxw4qLoni3xzhC8knLHkqVcxRV9WV3facqdRRVPzrsBhb87r1aAQfjUphNipmZWzuWfv9RyF6fm9r53",
  "key9": "32JQuy5W1QsZ1R87nsC87KkMgGNPxwcu6DUrcYVVnCsRXXGv4p4TMnDrvabeC69XbYq5WRn5pbkbFvE1M9UwKJwt",
  "key10": "4r2j2vV9CKWXFeYkQ5v2pyxSadH7rFZssa6CsQHx6WqPVPkbnt8L5r2SzYZkgFSVMEorxGmg5ch6KjxkQwZTWUn",
  "key11": "2vYbUtPeNSgPikgDBNGLSSyzUwu5cQaarQeQbMkKX7jd39dyFhtf5eoG1thbhhU38W6KsuATMMfjCpPEPahDfZxs",
  "key12": "2PX97AKxhzrfH8v8Um15KPoiU33DmHPne4KgcYevDn5FJyhRR5FNS7vxkPzBYYP6sRDxZeobVfzkpXfaq4DdBemi",
  "key13": "3ZKAWV2bmVApQCjsCNA4y4yApadYyS3VgYYsC2gtSi5RWLDMhzPnN4VAEiVe9MgXtp8xUz2JfgWpjj3BmyZfBZu5",
  "key14": "pwHmqebE76nycXkdx2k2BzT9AnhFs5ccEhhrAUVASo5FejyafyBhuoedKTnyGGhj6B7fc8nBQuUpA7da33taERL",
  "key15": "33jjyYDx2vuHWDHfFVQQhpSYG799GpQTMHNoA16Sz4cf8W5waMR23H7k72wE5yo9PnaVKJdk2sRr53Z8dB2xSE5D",
  "key16": "2Mpuxshd1HieGCmajuYbGG5d3WxWaAgca6PQdwFxiU1WJJZ2M2vZzkrW9zQZHhPkQMhsFtpRxgc5prrunJJmBXy4",
  "key17": "AmoxwPiJXuAtCyFdAppNgs6L16NW1SEgP86a7YLWfFhQbuhKiyPMFBL3A7rd2AoWv4vgbw1vG2r9pYn62DYzdHP",
  "key18": "RgMy9pwLhGNvH5turCfEKswLCuneAf8yc2XNPeUSfVsykq1JxBvCTvZKTtxYarpDwrAjyvmqm6LsJGPrddCGMNA",
  "key19": "4UhLVjVi3kSrUMRWKd7CdStndQdGSK8YfPDHfggC8smzg1dmH4KMdAf3wJj1u2U67BaDKUbKLFRRsMKDBkhSiXwC",
  "key20": "6p66SRVLT2eu592MwCx1T4a3ZsmHAREt1Z4juyESDKpZE2UsD542avcxAwfyYaaButZC5Gv76FqU2KGvr5dHiZB",
  "key21": "2uREW8XdSQYRYe2yZdBp1qVbJqX1vNLAwMEmqK6xMkq6194NNKXh4eYc19wAruGaGY27hfAJffMyunWyTPT9dyXa",
  "key22": "3TuPtFEU3ub7bA1Wn7sgghg5L3NEe6TmKRKjRtU7NyL1pA7rEeg9MiTQGBGdhZyW4GBzHDvuh6XBBjExyEMVT9sD",
  "key23": "gMJRgPtf9KC8sxAEtTFCXxx7bG2VNgTQBCG7j8g7s1cmZjGMW5C3aAeAYRaPDeMq3rqCV254xsJUMrRYXd1yibm",
  "key24": "5jSJ4pqbW5oYbvfWedQTNoLrHJxf34u7i5phoy3HgLYtzmNsVxMJKbxZRDqzvbf5pYenFftnMeNey1qFPWuzR8TH",
  "key25": "5ip1y1B4Xcsgf4hRPHweNerJSS5TGLUsKsmhMQ3GGuhgwaf3UQrJjc5c2pqgAtzpBhAhLhXbN1rC8fW4fVbbNhhf",
  "key26": "4SrR9KrkHzSFmjKBoHhph2eMAM5Fpz5YAdxhLVtCFfjjYtaw3zWZsqQzAhscUvkYBdLSPpLpYwjtiNf3Qs8sztKs",
  "key27": "mRvYa44ZrfqAj2HjiL9wdh7T3jqNszo7oyDkvZdNtYW9maQZK2mnLNk2128QxcpviRupJdPfiQaeMjJreVfp9zr",
  "key28": "3VUFSJcBQv6mhz8RmtMC9LKVXwU9geKqWd5oSJS8KyqqG2gZwYpywCZgaVmWzLWNtir8UscpZ1gtEHNDgP5zSJYM",
  "key29": "3qDR1WHtxjrZjzZmfYDswVYDZJbWiUQCJxdhvuVrUXbJxnbE45nTVzLXV2X82ZBToBKFT6DNA9SiGCpnyGkskiY8",
  "key30": "FUbKzshMJmr4pxantkxgNio16PmdGcjbAdYSdjS9hP14QHBXDoJh2N9Mts5eDp9zRsuDMrJyesubKo52DSko6hW",
  "key31": "5bRMoJ7qyZQuDrJpe4RqSFStmwLPWgR3aoMGi2dD1zjoaBZA65Wkuj5ViNKwbdZ1rEHqpe5DiCQidQap3apw2uX9",
  "key32": "22qrtZhWnRfvS5vYKCpGUZUwC39UuZaVneg6H7BFxa6WtirbMHvR49r1oAWTP4LKACEcFkJkA1KNSFfJMSN4t4ps"
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
