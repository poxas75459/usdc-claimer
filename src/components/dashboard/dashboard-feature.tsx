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
    "2YRWGCAE4dPNTiYbKZNW1bngmazCMZoRCuMBGKEiQr5k3CktQv4tfnnxyz1f8ZseQtkmyUguvUZauxNduB9Zut6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7EL33qgwiogYPqmKPPEXHLLSCqaxzh7nAtfKndjNyyuJoLjciYkJpSB7L2cYfH9dLihZ14fpfRGHwUEBsGQFRk",
  "key1": "HcGsKnfvWssC6yK9rS7m66urUU4GQRejrSJcYbdcrfHaY3FAfPnfTQArzL8JqciLCUoTmVSh58rV6if2ZWSEMdT",
  "key2": "5BL1TBxi5o3g2AsEissTA6vwzaXNoryLTS54wnTmXRJpHfjBEy1GkZ47hM1ws2Y63dCsBBy5FqezbtgTXEd6LvEU",
  "key3": "2hFgTDd9jYYUrfu9FMRNTqjDSsU19Asx1atfsMR1J8mPqepkmWJbhb5t1YZUNzgpSZgyVJfgBpHssYuAvpX7wpKm",
  "key4": "XycEqc3SELLFEPVdpQfNnyrQvCazMg1iy45ndTcGSXePgcPgZWkgCj6Cb2JHRzb53e2sQPSskDGgo9FCKbXQfYo",
  "key5": "48ej3MdZWDuMCgzFmhGctUBs1ZLZKHFdXX494aBkHxZ62X4NPdBE9r5s6EErop5sYfERXMSp4mAXuRzyYsCDMXux",
  "key6": "4a23nL3x6XradpK8oqAghxbAWgbJCnTQRm2eVRwZ18avtYSWCBACHeZeGiuDXJzxayk56gvCMZVLhEHGxDa3JpHf",
  "key7": "3QFkkC6MrUjutkD6rPBCXuTPj6bqKpQVZFc1xb5uFGJfe3ojWUmoabqA1u7KKMuVpZc1oeuNHwKLosYvULLSnGUC",
  "key8": "5kvLLV5AHjyj8yMxBNffZALK426xAkRGNXa2JD4Hekp5ViBTKW7Xc7GtjhoAq9JxTuzwAYdbBdurR43NSkjj4ytt",
  "key9": "2vcEGwCj1ftXLSMXaa6yWVmfiw5w9dZy2ytLMzStHtTWtK84beVYZozEakKmYovQfbiDtR4fgAUcGZiuaw3DDuwv",
  "key10": "Y6c8EkYEU3XzgyKKG4TL4r6X4gbAqVk6tdsWRoweoKoVMhXr9TrXTkJxzGwBtEcUDA3dswReMPajieWnMaKr671",
  "key11": "52Fuo1ukNBdVpvAzBPwFsnRjLDmbze4LFM4f4XQFhcDJd5ZBZ8AJ58SJRb771hd8qzJF5xQZ9MZnUXvqYVFMt45Y",
  "key12": "31b66z44XQv5X2kbBC1dmyBaEGnJjbso9zGG7DfxuaK6NyFvKr5dmKRaW1vaDpjxfRg3T17Akw9uZ8vgKNNKmVqw",
  "key13": "MtEsFAgjutL9aa86zRpqZdi86ZgEZJdzb9RKWZjhBJpeGPWrKUE9BYjcjnngB68FqhWCdtcTa8qzQzVAT1ysQqj",
  "key14": "4RhWZ9CxYC4D6doBjzGMYD5RKfWUgyVUmdAncN3z3RCPS8eNQMf6G8CjSSza11ro1oSptxha2a7FNZYDcAKPhDi6",
  "key15": "52SbQgyfcXfCUwe6KtSLPv7BWd4sziighZzMHn8dRFfhGE4HsrPPRDnUN5ZXkLaPhzEuxeyVRZrkAt2p3vqKkKdH",
  "key16": "HPRy8nQGR7oKHqtX3GexhLBxPzmx8RYDQ2Nn1g7mTz8ZSxmwsL4oixXSDJG81cqZnX19W2UYPinqKS5bdKu3HRs",
  "key17": "3EjCpFNbCEqXFmX6uCT5fFVQ4H2FHSp4omL3XDohHBimjrEMqUYGnp5gdLwvqWwKgmZ4WqTYoMeeP51B9qHadpx2",
  "key18": "2Zq4tMRomE8B3YVzzNr7qNweeav39gntPRbdTsigqkpNCvx3tbCmuTbfxpBKvUPxA85PjHxt6dvdsPQYsKykibm1",
  "key19": "4Y3d8i5yh4wBUXY5T5vhPrRntr3Zhsyu2r2r9DsWPxRyQ2SvHHB2SFL6nvWkP6YxYpojmoe1fQLCg5rqzj7KU1bQ",
  "key20": "qZZRFq5HLFnjshrk2QPpMPVDxLn7v2FJzEoGFC8hxFPKNTjFTWpqCZDk5E44P6Y9ts8oWgpkjgg6p2RTw8vb1Mw",
  "key21": "4szzH39TZwNAUcaeybHRVEWh4dGQ1yJ8nhWxY7Jr24cB1K34et7NRqGpvdibYpvZ4YyQ8EeD46cLJTAZBm6xvLHx",
  "key22": "uz1Nv8d4gcfbRB846em1aJLLoKvdGP21YoecXC7bfBnDLwb7r5hKjpj3TbSuDpVbFaxWvpx3GxigZvfiKrHdCGc",
  "key23": "5DF8S7WFPstahVMktZNpzrxkgAyqFhQejo1z3YZ2H7quYFMh8vUUJwaB22AWHXG9qPAVrkrKXXHqq4Xd3nLioFHP",
  "key24": "3ntBi5nJMiitCNryZVbNJ4XLe2hUmWEzfEmQzQ8HgrKUq4LBZMsocbRQDrbRTPywt5sUEtCJTL7H49P7BoERwVER"
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
