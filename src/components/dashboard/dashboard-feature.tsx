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
    "5HVpTwWSBAp5SzcU1i4642Kfw2hCCABWg6rApZuwXQaWg1W7fHsZYhVxpYCR52KiMnFMezWb5UXVFu4oYUMEKQm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLidLjrjLoq7y3k61RDEX1VNh4HPRzGRAe1Fkw2dL6DGbKrDSY1mUVWB9Y5SXjoQ8cpAyykWGm5YWhtBfT6axbT",
  "key1": "5F8REp3hkeBquHLfCQXCS5GE8t4S1JNGRnhM4YFGAZxWcsPgcfDAM3nid7gAw1pui9dtkxk3dkumurGr28Bwgny7",
  "key2": "5a3PeQpfS8DMPEShkE9gfV88R4yN5TnzmjrrZkCAWivA7RBcW5vCpX3N3gdRuua9ushGHwMdpXLqztQXFxj2nWG2",
  "key3": "4byPceXBNgCAvefrDXdpmFyqreDkkqacT3kLwwVYtv9qYXpZuV5ixYtNHPoj5hBguCmgYs9CbC75GU5yKFun7MDq",
  "key4": "KMjT2i2mZNWN4qGB2WAY7X5kUCVKZbfJcEX5kZ6NMZXAw7FG3Vpqt6ChCCRoPhgvEfiL41wTLgr7NhUk2AKxPan",
  "key5": "3ZQ8uAi6u9xGEABSWtySFxi5S3cZD4hZukabveUEe6LhJq5BCNgp6T88qa7ngFQ2oCcu3AZ2SLU3fq3NppHAQ7N1",
  "key6": "3q5t11zeoX4YRDxTgrCpC6dbGdnSfg46GwUHuDS48gm3WXbPugV8qJcpHqZ4Kewv3rmhHPC95AmfADpmSvWsms4a",
  "key7": "324VSpbKWR2vwdB7k2bWvqBiHZ8Bdi5v6tTwvyxAd7mVSktcv6UJ9oigtDWffMAQUefAudKbh5k4U4LezGEH5T3D",
  "key8": "3MRNjYEHzo3moXDPqrBPwiznnCcXsGnRqgWoLxiFENeYf2HHTkenV3ZXtxwh2UAEVCpWHmrKvpKCU85dAViU7EFk",
  "key9": "2S4JgPdfbCLhxLdFFborVSdjddMTVfA19t4z56x13qZBdtoWMuim4CzHYfZH6ghkoVFE2ahKGVmXEZUpZk5rvHyr",
  "key10": "44yjYpEYBjaT4e9LpL2ZyCp5ByKMXmwbXy52fX9r9SdPNw6PGDfqkunMuEYZRYvkZH2ow5veUTFRHRBeSwWgYvFE",
  "key11": "3WGx2R6r9J9sfHCL4ZDC8MxxXCwWm72KfWXvd1KZKaFPmtceQjgK36YTbbspmaLLV4fR3zdtuMNzVFeM8NSAe2pW",
  "key12": "5e1454feZ9j9dvKczHVo6UGqfNK85hAaPAnkAX2YkzQpN6Sq4dcPwqvCqHYCrCtC3rXEDiNjX8vsfc3Tkhop2NoX",
  "key13": "36bSCMr8tULS7fuLPzZknqgRMHJGw2kHWw6YRna7Virxu5s4JsSskptusWppi1J42ugSLKNuuvgHeEFNKnPg1tS4",
  "key14": "3ZQxXLS1r8a3HMw2iYGbbf6BxohwgCWfYYxszFoLvBXz6dDH9JE8ZyvtC7j5c3MrLsVUtPjRw2HDcn3rmCQWKpfj",
  "key15": "5k6YW7HZJfaRqibjScCev8HpLMqryzsHqapwA63vxJsDPJgtjEbC8xJwwLiDa3A593Q1bLifk9rezR4qB6q87fVX",
  "key16": "kthugMkgUXxuHztZitUktoL8k7XEjN9YcWVp9485xdCDoaWVX61DLxDcj1GPrLnggPPQ6QRkGm2cBK5bKzynXjp",
  "key17": "C4vzyMnJgW8Y26F6Rj3Xbf7Cft3LwjKK97Ba5nHJdr1MLKeJhyAnNeFKqZTvxrEVGgnrkhijjuQjK14XcojwbHq",
  "key18": "2vBTZ8MShawVFJ8XjBkdKNfBRdYis9jW8o8KUn6bHUW5ta2T8aUm3iLPULrAc42niCQUBxeR7xYmhwNv1fEg9568",
  "key19": "2ENrj7u3Fa6CpQzwqsPnMbM7qZSPAJjWpYoZQTVCkpeg3BGQXs2187qSSyCJyPaYaa9VQpJVgKLLx39BtsYNDjti",
  "key20": "67hh1bc1ko3CAfwx3LzVCQxRcj9RZckxUXMLyhaUBELR2NXcTSb5C3oM698ULZS2Gh1RZ7QF7TvejNTT3Mt1yCwr",
  "key21": "2SLScCv9Xu9WA9N8S1jkaS5r3xB4hgWKpRUSeJcbvMA1Z8en4Z7AhGqBmydsk1WCeqcuLA37grroPNTgr6PFfyTA",
  "key22": "n1mtALWRbq24jYVXzimysiwJU3ZjcAx6qHdK8rpUgHroacb3Reu2CqWe4xKN2Vay4KgoeWyickUBjtwE5vUnwKF",
  "key23": "4CYuLgSovatkq2pCrexfCACvRBeYSerRkA1g3FJWRykhWtjNUVNNPWjECcWSYriysqCDme5f5GJLuTvee65ffD79",
  "key24": "vjyVJiYPiNYtZ7472q81AvdgvVtmXSUFVMGiBDMvnygDJ5GkW2NeNyvRh8yjv6rxx7hpqLjQnDSwBz9tpzeMTBs",
  "key25": "4YGN4UJnp3mnPgN6U72CKVGiC5Cd4WnaMj1vB3Yv8uZA6fZy9rVCwNW9t4bAbdrV2FemwKXX4Ag7VCSCxq9pvt4V",
  "key26": "61rXNqJNJ5Ab7YVM5xFbGWGi7WnTmpBNhTxMevw67ZGGodPcqtgYPJ11hS2SgFwo9D9x4pBDrVuuR3YsCj9tJ8r8"
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
