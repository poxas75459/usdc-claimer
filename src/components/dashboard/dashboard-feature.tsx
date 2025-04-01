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
    "KLL8MHpdTwp3DdLypBPZhi3wscoq7Z6oakiNz22arGNRy3JYNMNaTou1jB2Yjd5p7F1ihc5peSQ4FqsjHfxLgfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHLFrpiVnFwsdJwCpVMHvREF2WHM5wQX6WawmJC7d2fsse6XSxsTFUmivAvXKez3DXbN3b4XDENHnNCBhFNn3Tp",
  "key1": "4qTvENMzQUyc2DrKWwWN3sxARiSNuSRs53sKobPSWcfzencFhsHHhApiPd6guHvjYyF1YU9mjGPZr5FomHpP4YTG",
  "key2": "5qmhUzZ347EFsiCZumPdJEtVBPFB2gYQsXLuqAu7mBVoZjhxEDFPVRk5eFrhvq2S2Tq6zhh7EMkn3wvMpfxDhdiu",
  "key3": "4d3vRDzUAuUMqcFG8aaWJjNPFgt9giHDisBPKUTLmb5jtLQ648joqZCa9R16WPdafxJ3w2hmH6FYoaiqoVPGe636",
  "key4": "5g9PfhqCFFSNBufd49DSsX6UTdF6GFLykgEhn7ySvUbhdrCBS9f126gyYDrxFDC6Sy816Zveb3s5ciQUVoZFuJk5",
  "key5": "5GKGgDhPX8iDVRpvr6Dvpw3rCuYwVSBChQnE1Uzr4nf5ip6TFPJctExasgymdDVoaYdtBVzVp7v4GmtUZyYT8EJP",
  "key6": "4YuyJAjDEze6CH7FxvSpVDjJuiEHkaCAcsuFVyoobJVPAMG2gWKoiULD6gD2Ch1poFKYaMUTFmHaEhzVRkkvxnPM",
  "key7": "4Bzqstz7SL4JQywqLxGRx2MC5aq8GwLjz69UBdU3Ygncpqm5dnshfzmWJ6Mi6JNay7YwCgrSfD23MhTbceQfVo6r",
  "key8": "5ikUnAaoZsuG2aFYdokdzEFjPVnogFJpEBPFtyyn9uRTPRBTGLMcs2edeVyX2GpAKqfguu5iwrsWNwQTBViJLKg2",
  "key9": "2XT2KkBvZPg295k4MSvgL2bUNA6w9d3MoPqcjudb6w9djQfMraht3uCMFGoLon3Yb7UvLr73uhnnH3T2wQzwvXK5",
  "key10": "46TBow9w49LydbtMv5TTDwXm67FkY6dU1SvPsjSxA5ec7GFoJX1womaCmztRKGKmPP98Y6wfPAqvYfg7apThyyG9",
  "key11": "4ZpUYDjrYZEEmYBzvVeMjqybeUnjHNvNey3uyXEjrBuBwYBoVGCr9H6cuA1QKgmPQHcDsv2V4LQkHWbkkjsNwcro",
  "key12": "41n7LnP4BsmXipyszySSqbHC4zsnPcKV4AbaFvyGSpG49NpPaSFj5JUEr9adD9mYuqh4nqiWWWiLHpj4JmC5iYcs",
  "key13": "37gtpJi6mKE98ZzPrU43ze4c7P9w11RrDa28uAqxbNHpnDJhBBXWN1ZQ1fHBenCGRFHLocjx8U4H7znLMLhBL4c3",
  "key14": "4nj3hVGk3Uh84kVk1nkNQy3iiBv5tmLJ4kyX6GFHsnF9qChwEx8fuQ1Tvioq2rxXveVCp7pdJaLQgjgLJCA5KUXv",
  "key15": "2UioeFr73hjWa7xv7Q8rBpcNRHz7LFTZ7YiuQoU9SDwtrbKChviek5ZfYmjXMfUD7p1PgdcPEkp5H2EbsVqoTYS",
  "key16": "2sRrE5vuzfYKgi4Gt97Putct79Rp9tmZcEr7akNquMQoEozFmdhuoKc1Ye9AUXy1fq5HXd7t5ijeoDFs8sGrhRMs",
  "key17": "48Q1gYJyYAUGcHaNopHH16QRodG2JqqZxg4TaskgNx1RmgRutxLBEoofc5iiFARHM9SZBCGA1469RrsgxoMLKxhD",
  "key18": "EQWprJ6VvDGQboXESWnkZkhcnLHJCceGR2UCfDEV6Xi3zjUFwUNXSiqqK5HEVjnoVEh7aFwEAsAuLgjvmyABg7o",
  "key19": "42KCcq4VVrycgNL6x1y1EsLtEtRJKDQXuV5RMqEuyGgFNQkukuNC21hxPnGmhuaXMPjwwtL8DFwQRLCVGyvhx5hB",
  "key20": "3SWBJMEbDLQVKYqVp2UczN5Sh2RLdbRiBFeCNEuK5MeFfkXQ8B8iXxL5N2J8pQ4PhZjAgUpmYXZRcWSb39JFk7nT",
  "key21": "5KYV6S91N4zzgFMS4f2ESKoqdN8nrnobY7a1VjjN9thJRPwwgn5NCBe66jxarsna24j7VLHnZw2RqAJtKtuVm4SQ",
  "key22": "5QBiiWtQZm9deTd9R1zNDVLmYH3ENXzyQGDB4J5xprXHRxjJD6YGcYfq7Uz1gFqiXso9Z8XiNJtpQrb91ByLgcD1",
  "key23": "2rdushekwk9L57nVG7x74rG4rQ5WoZSApLNDgqniXz2VYaj9m9yEQgsFuBjg1zXe7rxc9ZtrStfPvtDPnaJGPiKo",
  "key24": "3A4JBEV4vQMB65jSx5QLNLb3ngpmfqnxXavwF4ck3EMNFh9VfhVjsADcMRS3trtuz8RRKKsLSzSNx7gwCFQuFE3g",
  "key25": "4xn2jzmpsoKYyMtQzYwa3uKWnf4Gr4JQgwBkqCxzcHZDr2afu9iUnrta2FkpqKkTiVfnRaE6R8hvNrwFfmSzqXnb",
  "key26": "4JaCVCcFk7Lr9bvDcnTzsut5Py1GH4yqomBaK275M2r7WBXAQESvhBd1Gj2wt7GaxKakyT5X66vkY4PwoWsqqG2r",
  "key27": "4otzqVG8b2AgU6ywzE2UJi6yhWtDCUH8tH2UBuwS83ghcPevxeo1JxtByNHBca3qD77LB8msowW8FKWin31XavtP",
  "key28": "4jH7vg7eHC8hhZy4hFqdZXVgHpkH7uywF7wkZp8aFyfXZzZsHgQAVDZuUuekZU1WPaSebHq33uG34sG9D3zttdPv",
  "key29": "5xzTNm2cEyPv4GWfD3zKdUBeAYXLPLPTd1RsoEtqDcht81agZqXngYsx89j83CNmu6TJvSKgeUGJhudwKiMuqNUj",
  "key30": "5RofR7sWRF6iu84ow2CDQSm7NdBAsHHAoppGniMXUKuBLXfDHxQR65un13WYgPYVHqqrPkUCifjAWGtQusSU58BF",
  "key31": "LwDWFkj6SkuFmd1PdEsZcv9rQwEFkyG28qGAPb8xmMj5fo1GHUDpBxUHYSHGepxKjNyMkxMdwdGejFDcqj88pGw",
  "key32": "5XqevSWrEiZLTm3Jn7cEA8c4x4qLBEKw1KE7pAorcGzcpCa9gdPy2ovMF1WaAY78FgaEuFSTgTuX6BsffnHYkVLH"
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
