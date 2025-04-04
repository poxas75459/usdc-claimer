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
    "GxfgN1iJ1r5ghnArqc4mFc5zRyWsnpZ1RrKsC6Vc1LC6eAsrVr1GQRgBNonwrb1DKd3Y41wPRVBsNQg4nXgP2Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQwv1CXaNNDTze2NYyHBese5dFbGerpuSxugjnviz5EUDFKppx417D5SYDcG4UUiMEGqxD5LAgd1bitV5eJV4y9",
  "key1": "5sUYqvfSCv9K7RKm3985vVD52wGPLo1epSb1vXmzQzXhPX15qkLGWrFYWxts8g7ep6GUPqRvqJDxVGrke3zgvjkL",
  "key2": "43HkESnpsePH3tvZa8p1PcErKKR1r5hTngqW5bi74AVQ1yHJJtUhjZDyo3WhLz24fB8H2He9iqVQqiSGiUHRVHQD",
  "key3": "2mVji6aDjM7gqjM3AgSWr8jstmfFS33pGvRa9xzLYQDpwNafgHRgcyUne5M2cs66n48qqFEpprd7xMEo9rqg4qBG",
  "key4": "5C7JNpKJjGEokXyXqjmRAMyW1yFh6zNaiU7yvbSosmmWKPGixdptdJxjNecNVx1uZdFcGWJ5mxMagZXMaKK2p44U",
  "key5": "2wJY4hEtvTJfqxcHFF19sErG149wi9vyZReCD6hYpLF4dP3ZP4vNYi7iAjNBEKGhTn8RYn9Hgw86H6QFd3xTnNvS",
  "key6": "4Vf6Gz5K7SsJ9ARZPz6Yxw85MBRiK4iBY2rvL4Bvwnh3gbeWg2oe3DPvEcZEBaQnu4UfZ3Uods969foYJ81gsPN",
  "key7": "4U5be29hDiZmtBHyqCRRRRbnwUyiPLkcx4Fgy2jMezPtwkFHXzzpnube36rYdLEkc7osqWdLfALUkW2hRREPFY4b",
  "key8": "39JEwvX3QjogsZyqkachz3i9J78gAJZmoaBgwnd3UNbgfsg3wvbUT7XkZWsd3U3aUam2mA3ZPmf8UQg6HFuTneLw",
  "key9": "4Ju79312imZNSUu64zhkqFSFa3MGEdg6YQAtpjbwn3XBBoQufuev1mjGFweauBToXcQM6pKVnZNyfPRXMobZrRbC",
  "key10": "5Cd2nhdPbNKRhAs3q58VdEw5GB1LZuHzyNHeaEVh1EhRNt2NkmUyjtpT6gNHbnwYs3W8B9EGCcUwZqZKZyKncjmv",
  "key11": "3iaEb2jiKwkEr8Fk5w4R1cQvweLdS5GRUckQtxxpsAPCambZZobYj2kGesoTMJguMcLHeFyQmNt1tL8vCTMcpTR2",
  "key12": "5GQc5nCqwgA6PZGDPFcVgRvJk3Us1mrajJf2WPvNor4NVsg4CkTgEDQge3hjLDcUCL36uFbX37MU1mSstAXSA2NQ",
  "key13": "4piyupt2tZMvToTDQrNvNdeovMnAwKy1qd8JqSX1GvsSF13gMhhrfidtjNa3eTf7kHP5DZCZPoHKSfuQkVeGEbpx",
  "key14": "2rvzgeKfThTErWgqMEB9Nt2xNXS7ptbggtA1Jk1U6x1aLfJfpM7hBwaPFF4pcbT7YuYnYuT6ddAcL7iaHA3TPext",
  "key15": "5cgZpRb9NJbPRA6B49RP13xZmAc1SK3xtVsgw9SaepnY2r3WSiSpkxcqc72nyXDXtpVvf2H3D3BPLK8WsgEzsPKV",
  "key16": "frdsix6aekmUFsdFvsJaPxyGKP5sx6PJfGr8HasUexUYPvCPRjm9aKaxKpSRtdN7tHVubNNwccWaeJSCdXGiAWG",
  "key17": "4i3YHhXGAsZfjsdDvxLGs4VdLFKCQwBopa5UuWYHFChZgRGKRaQ7CfhbnsktwmgR4oEeFdSLb4kc7xAdZhWowND1",
  "key18": "PeotDdAYbFcMGFzNNgPKpFLyML1XS33dAp1urgQotVD85RFwirNN9xrvXbFFBPaWMg7GqZQompP28MMZea7YouX",
  "key19": "3cD9zjv1ct586LZgn7wvZKRWGaGtFhBnJPLUTLVxpna82WSGGLZZ9pY9gU4ujLXEagUv5Hm2MMv6gNf2mq8ioRTR",
  "key20": "26S1SnUuxjd5AWH3KNRqQuXDGa2vTksq8Kz9a7TEmux8zgTnMs3FewPjbfgWfXRg1VzqDCSrMEWBARbEsysBomp2",
  "key21": "5KbEnXBdBk3kyWS8pteygm2S8bzPU7i69eb4QYxx5m4wgAHejEW7wvvvvhkw6A3fCo4XEzBTkrj5YBaUSik9miGh",
  "key22": "5dQtoXf4fisCQT7Go5UL9FJStdL6veg8wbLVXArw355xbTgb4uBKQnz4Ndp3tCQaDi8hyZ5hZuzeBstH44tosDZD",
  "key23": "5Y9rYa8po6WL71a7vENgqjc2LSXsJPqw5Z6tnDPXb2NBNXXG8XxzpyuQuFVuyDdfkRQJBe24BThcg9bWYADhckrn",
  "key24": "5hzTBeSg43kE4YDB4eGvgikwt3aqY1En31MeqesjHd2mYAeUdjZYUijL8ed2ZAVP7fBUNcUXodZoCFxn8m7K7epM",
  "key25": "5MsRemNJgG2CfQbTjnyV4rRNdsq8hu4hWbuGGFozHQDnqazEyXjP7J8maoqQvsU3Z2JXe8cdxrxbvoYaNN67JmTu",
  "key26": "2SJNgn9XPVLaXUBXTZSYy782FsFvaAz6zTAnCH5xx8qFPfstLFwToExoeK138ZaESeEJXaqmnM7oibTtrGjYkEkm",
  "key27": "3MFpECRjVv7omzNFs6K8bELLSRynUyngFNPxBtzPRHhKuvkbMrUJ5i2t6LWM2tmQQ9v5tCZfEqfzTjkFrV5xcuZJ",
  "key28": "784B8s4LhQX1rtyJdRYX3HCAb5Seuf1YNYXNePGDWbn4uKaQSoHcEsXBPXQMSzB8jwn4VxRDxUKKnVhVRF7bLiU",
  "key29": "4jKQMwUhx5xVkdqsCuca3zVd8NX2HEaAYbX5Z7nuwRrKQ4Cwea1oeVNMr3zZvJZ6m6t266bscRxeBUDe3YzKEtqG"
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
