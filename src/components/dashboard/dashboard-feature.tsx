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
    "Fa8mjyaxkTArqswUn8oCxx95A1SBRnfxWqyy31whqcaYxe9VgFjtfovjsNh5s5Wd5UtaEouFYfnknfja992otRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCxDVUXeu97Rr2H2Furf7Ya3k5ZpA7LtdBWbd4ASM75Kza5vHYmCVvdVs6d9AYK5QEP1ZcpHfdCEjmLYkjbytR",
  "key1": "5Kwhou48Nyd6YdKMR1i3sjrpM57xc94wQXYm1vSobR6DTm55QZC2TT6WbXccHBF2KS5LEM9wBirJD1hheqACHCZa",
  "key2": "3uafPzL9PvpsCibVf48ShGwGE5zjz3GXxJfZnaWwWC1QiP788nmn2nN65FmQJ5wVFHEUhV7ZaYGwfHQWwLswQ26V",
  "key3": "pfZDqQAkxWkcFhUKXbwJdqnKLgdNHJbYrEg2DhXSZww7chirFDQgReYfiBJCiepRdvD6zKkEYHYEF49eUSwZY6o",
  "key4": "4jdzhnwmjzYP7xpcVU6yfoNz3toCgP7VFVoDw35L2YqmpPQGzdn7hMPDyVWzBuAmzJPDchVM2SuxRHRgoGg9bx8E",
  "key5": "pMdWtMWpaEyFL4VfsnroVdXYC33HTTLNMkA24XhPFcYMLqoUbGNA6f59kg1bwWgd5Tt6m2QQ5BG3YNmhsjA3hoc",
  "key6": "4ehufXpSttfNC7HSuS5musp6o9heVMcgT2nDVX2hDDxSdV5pJrY49mA5JzAUoCtgEQZy1jJcatHu42TuCFPUqjqq",
  "key7": "cEFECKVF4rFuTc9icAEZ1nFfZqE2ks61L9f5RqieVFnU9Zq6wZ3DEN8RP26hadfESDoZMf6nYq5xyccwJM5mAn6",
  "key8": "5C2qQnTv5BDpXnuGE2KJTKqaw9PJAu5cujFi2r6PCGXzDrNu9v9JsfLeNnWcnrr91pFtZ11t3uAUPQEmokKQWCRF",
  "key9": "6CugJzcA7ZpwPbnUqYGqA7KSdUsnu2A14pVhEoVEQoCrVikt5EvGsN3PsTsgjx1BbxPXFGdUTERGSzBQ1yGuyJP",
  "key10": "4g3n8iAFUTUTQ7ooFnZbdzNaQqwQGuz6Jab18ndZ75bEBZJ23sb7pXxbpcnwamvFZr3LQ1qx7sxGrRVbiGtv59wj",
  "key11": "28w7LkEQFuBjNrTZJiewGL5EuVJpgH5p39pHGcnDSFLgf4cXQfteZ6A7YiuaBzywE1fWkBaeeBY4EL3khwArPJAQ",
  "key12": "nNg1FgKkPVNTDBPg9nNBAhepiAjCuGkrABhBkDVsrQiU5v3fkUwt2YXWje3n4piAossps25Setj9a7MHYXPDY9e",
  "key13": "5RanksCRuFqhjvgtfDjtdjswx6G1axa46A1Uk6dXvmUYn4NzABXggF8haSpzdLZ2iTC15pTX3UcduCBUiWmGAoTs",
  "key14": "NxJX5EKP67hVifAycRGsDC3asSyh4GELEzJsDL7c4vgXBJnUpHaQepzT9tr8tDmZW4ApYPVSB37ZNEWWLg5ViP8",
  "key15": "3g8MHNZnsNCiM5Ufhi6U7M7kvW5FaNhZL96P2hPeDjefDxBg2uoKaauqU2XVDcHWX9d5s6yUBcrwL1vueHDABYoe",
  "key16": "49X3aYzWsvzqw8p9oSMfkhD18xyMB5cNGDKyYcEDL3Mu7XKmhyXH9d2NMjyeL8Ypfyb2kq5d58coCGWecpiHMTWG",
  "key17": "5nmKE6qc1vpnaaA7BWZKTeudRjLYdWNZsnrdSr4MuRoKW5YWcYDhj9bEm5vu9B1Fkb7egsGFqdW92LNPZ67g9VCw",
  "key18": "46V2eDUGQqrsVxDeg59Sm9CzLuwrner4mrMzRrcvKbvjBUD3xQvH7Gu18UfxvZnzumhzLdbfzgUDLXY9xVjHuipp",
  "key19": "4rxnSsLhsexoAs8DFXFNLQ4K6Zephwe5HDKGcR95dThXvFmi39WPWnnu5zBHBtXnBmVVz2PFQSNTdQCDgD2x8Phr",
  "key20": "45oshPEFDhvhVZpx4Upwa5JktJbQirX1vGJrwrpHrw9tMJpFRv2wmVRQ6PFZwHL2vw58s4axzxb1SWNop6ZaDcBr",
  "key21": "2f3BTyFwG1qagCuAt8KPCY3pkhJpSsyGHUcT8HTkr4LzYu9mW7GuMGtjJFcN33wyjXHdCdefsRx7QY8xD3zC128E",
  "key22": "3EnKPvZQ5tJibbPuMPxPZF67oncbx51Dht7S9j5CYwup4anrqyFvVaZNqUMp83qVB4KXo8t4nL7MjvxLwWCtY3yZ",
  "key23": "39XF6aMv4tyVCV4neD5cZqEN9bHt9KWuJD2ELnySS6gT6kDt56Vt8SgscsYLuXZmsi7Cf9MTwaiLk69YkNkcTXKU",
  "key24": "61vkFqGe7sBUZfxsdTGwWhtbWXcMVb1KpBQpBoPUCZB97kF8wRpFB1xbrz7pvyzifyCLWnn2Lnn9nHTtm1TiuSU9",
  "key25": "2MHcYPP75JZSFtGCUduVHCUWYsccKnqeUckZizfCKqPytHyioSDnzZn583jQEe2bFuLLRVN8nTR1iHbp4aLShh6v",
  "key26": "4N38iPi68HFQ1iQWWXZvtCf7cPaVWopAPEi4ZnvUZAvDnEyCvftBWmMd3LqusT6iZw2CWpfpyF2cxVG7BSL4CcmF"
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
