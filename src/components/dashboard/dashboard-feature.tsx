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
    "2pnptudbUuh7BvLu8THgcZoXTirb96VgZsPxWiuLbHUVaCLeoNFnPcetSJk1Ki4pUEz8DZG6AAzC5o8ZfRpC3EXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8qa5AnwxKzUyoKJ1rRCeV15syN7kya4fF7oBvtjN9qE681jQXTCmUq8joYrieHhNWpawcazcpfTwv6vqFhges5",
  "key1": "2HopAjkLC6qgzgdz5VxNS9MX7z3XE5x2dnZe9VruPBkHHPhde8f9ryZvTdq78zR9yqFnZqHx21m53CfTVHbChbwn",
  "key2": "3mLFSYcS8H9qRYwhXQ4MCdhaLSeJ8v5LX3rwZ2zgSBLGSkET5PTwpMkTitcZcsSZnsoB8RzhMAXeA5bFGFmcaC5j",
  "key3": "4B7xzuFrh1PV6yKMy484HkAnYHZk3JhTWxeDunMZgf2NQGLaa67HouwERKQ6oadNRDHYZqcWH5HHieZcPVM7Xojk",
  "key4": "62S5rGsrRP77cW1tLkQQuhziprj4HUkbh2fs3LdpPvU4yrDstTThtqQ4uYeRdQ5XJ8JKkCr3YaPFmWSmDMd1muYi",
  "key5": "qrd6Y2v15FU8erXx2nBSx8Zak7qhYen9a7FyfxXBxbC1Q53AEbbc5LwmkniDdBCZDhbVXpJ6ZN75Z7ii6dG18fG",
  "key6": "V6ToBjHfX2BLXFV4UTNTZtPvPESWSyRzV4NTnRmam1wtjFjDyGpaAQ3EutkbgSuSrLn5yR86aWrPVcvWKxezsRM",
  "key7": "3sDbG7J2w686ydC1Nteme8kL6EYkJf8rKiBsRQH6sC3cESSm44D1H8RwcZRQ6nTtziWhDwzuSmm6yNUnsboVM7ZP",
  "key8": "n42p3iCZwJXM8Am1wzWG1UGWB6tSGpmuP6d3Dx8j4nFUW6NiDisPdSqwBU5WZ6qWK6p6HXL7LKAiDWucfDWQDgz",
  "key9": "5bNhS2zeKK7UQyYjCkKpZXwDQaAKsJmWJYBdb86ZCgnHKLzmyWmkyjjUo6MjCytGbskKwyZ2ncqnnVJz4w6TVTqh",
  "key10": "66nvdQM3CCQP67Npuj4tqTNgGSdD4TuXAkJCLTURakwBrQesiJCJiPN25TrhrhK9yHCD9rkK8dAaEPVdep8nqm9T",
  "key11": "5AibBsP9LeVtLiAaDfnxePQiCHrkFohKB7MH97UAfythtZ84kfgiEexAMDZXvfZtSBDQBzhvAaAquFCXTmPkp7gW",
  "key12": "5gEzQQoaBph2paaX1AWTwWpbhRhMyZmNukiQgV4AMrNNVq7KhRguqrJ5Kzd2hb3ZcSXMkmkYhw98G8qpj25aWEsi",
  "key13": "4SU62bJpuV6pWufJv82tUewiRux7r2nouSfjPsReJ7z24GtxeE1badXziwoFz9NYgxXCjdcDGhGadP6aLhGCyjLH",
  "key14": "3XSkRSHoVvgR5jSChQ8G3N3VRD2YwmoAcY1tix9UmwN7uaWn3QMfwDgniufzskabZH3TwX7664NovQSAuGWmLv1G",
  "key15": "4Jf4vRsXox1wHQPV2N5TmVTzBtm3JSM8bywh2TZHmYFdxYaZDD23GML3nDjugU7NVUN1dSrh9XQ7WcLoffs9a5NW",
  "key16": "Y6QCu55CGxu9v5hYafgKieZC5bmfxKCzyZDTTZADWwT5TvVxhGC1wWW9JHznmLtJaszM35qSmrUVMVED14vnXSy",
  "key17": "5PgdaPRuc1TjEk9u2dBwm7ccPPbPjAnp53zYCqcqQvhXVcdqGVhiNwPNkFXgp1THoRkh2nFV83RcTp4RQfAeBHr5",
  "key18": "2aVyiTBDvJMLuTtQy2jQiWEt7urTpEczErSjUnGmFeeGPioaA1shCDNAx6eYmbBMn3jDQdrKYGxd8rEnj5WkDefA",
  "key19": "3boCioj2QrmhdWjvXrxYCyDwyEeH4Y2eBMWCRh7WYheZPhSnYDxr48ZcYWRK4o8NcGPvFczPfV63zhD6LJzJYLGy",
  "key20": "66qLLyoQx9qvt1xjgZ5FHHpsyvsojirYR8iJ8HgrFzEzPw6eeBeLECESEPpvLVPLtArvRUZFSoRmRW36JeyY29XQ",
  "key21": "2JAF9PEeRsoKykvmRPH2jwZp5g5e7t27LaPuCaQJxUQbczXcJCRUiMBFWZRFNv6amMZCJQ7M3kfrw4gtdwri5YDi",
  "key22": "4xEFCaQEgyAoQMAaUqjcvmMETy4RJy63zzqWCPN8PKXjW3vwMsTxegEw9u7VLR3BXBm7MWEubQ3i3kTyr6uHLzZ8",
  "key23": "5sES6GpFgAqwXX4q7yDYcjyoeH9v6gmk53VGRJ7qnVZRuPmXsbEgfda1pgwG1odtyzL24iTM1FnyWMij89R8QuC2",
  "key24": "3ex2aEfes8fUjatZkw9Xx7uUghQg1LPkXFynkduGJuzV9ShpCzDrwVFX993KrLVjpiZbg6ZRn2Ltmvb6uZyUp5WH",
  "key25": "UxTNRH5KfM6RyntCjFAtYa1vFmarCpqmvVQMhRtruUbLkXRwZKiA5PQFiixyKL6jvAHncCjD73UripWgZT8Ax8m",
  "key26": "25ToaRGGJpwDtV3dqsRePXnv6BJDeoZAuQBo7tCxczGWuWrQVLRqrEJdFeNZHEE4Uiy1XdUuNCxj7aGbZyeM18v1",
  "key27": "5J3159WbqHrqVvDR5XQQPZTCGDPB9vKfaLicRJxScpDFL6LZYpHRLez8rfyyDwXp7zU8Xrwqi1JHn2cMda26ZSJR",
  "key28": "5sXPheX9GVKgsgC5FY9rhzcSj474DsSMHNt1s6G3eDVtps6enHN9n73e365SGH5DpnuZXLBRJbu3YFWzEQnqpjDj",
  "key29": "4ADs9GmhxPq8sXz1wd54drmUDNqwUJUGUFkWgZHtM5y9CE1aHeV1RJw2U5jMJNYaRERMD8cdLM9A6MLdRcRDU1oV",
  "key30": "55BUs5K7wVYeAxg5vePBUQYzMnwMNP1ZafNckEzUCzBPLem9tY4Una7wMtYDre4wYwcenZg4YWGtoj1gQiWaGmkc",
  "key31": "51ciDuqHhsgvVEALwqNBt1Rb6YJZBErwa54XfdZqvjdNVz8DewxfyvNvrLQSChaNgHSkKkbQEjNDv8THK5FjDWtZ",
  "key32": "5MSHfByLE3qP9D9uFvdnAxjB9ZSUbnjS5AftJbaJLYgShBSRVZz9xWsAbFC2jzBgBdU4Dfwe3SRJjkjPiarpekXf",
  "key33": "4uV8tH1W4VrL6nKwJL3PqZ551ERJiYPkeoqNyHE8Pwt9KTJycA7qrfPV9hp3HmKpQDUGZb5K2VmH5yBvm8ZGGWMW",
  "key34": "2PG2tEwQkVHr24C7Ut5fjPzg9SPJzcurjFn7eVDrWqfv4zjLBvwfCqhEN5Rtf4AHzNpSL4QYFkESfTAPwAgMMpwh",
  "key35": "2e92wtWUuSdEQ2rsbvmTACEbnCk1A3LodvjY3PMemyk6hcofULWhW3p6vU8Zr3ZWttyqXGeoSqKZGSBSW7uGMaeD",
  "key36": "WeySMdK3gNYHdi4uxgKyCxgGCRYTcxo8ExUw3QpxqeuPcZMbERu4LCd1jVmUAKmxTEENWVUNfAtqKtjs7BPQe82",
  "key37": "2Fy8yPKaivoe6rcwbwRhGp98RV47ZkZgifkM2LM5dBjBB9VhoZQ7FJoaP7L8vJDcn1kBwomRiwpGDPccsFuPEaLe",
  "key38": "4KuhWLoZLnkE2L263UhbMFGDZYWHrUdNZz6jAx52WtqS7mbymD6yjtqZkt632oX3Fx9CXE3kPQcYg7J8bsTTadpB",
  "key39": "3xicc7d9Tx327f4nVVGwLiXn4E8yE2SHqRvHJi4KWrgosH7wyJrv2BjppeJUcdYCnRERcjVafw2tchojvfkHvjuX",
  "key40": "4h6oN1vrVG92xNwpztbz1HALg2hNM1yonGShKwzE84y4hnjLDbi9doimbvE22RpkYnDN8kKotYw8e53USVMhG449"
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
