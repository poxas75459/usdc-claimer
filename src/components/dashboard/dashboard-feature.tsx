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
    "sPCx3oQE469j2QeVHDaNQjju5oP97LA7P7CZNMXHEVHy2Q3Xghzb7aqmQApsuA2VstBfFX4s7T6P79qXnnUEdkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVJNCrA1LZdi1SbQ8GgpjaJ2Ea1NBAooumiHFDx3gv8a8xxVXQ4Xo69TK5cMLfWNUfLTgk4Bn5XXRLFJFsU4DBr",
  "key1": "3K9PNZk1WmT3odmvRNedYbN3kbUF3Ld94C6yXfUMBVpknzvRuGRQEJroQvrr8ubsGTVxFcwCERUar5a1ybZaKBv5",
  "key2": "2frE7ycCZSxw66Z4VzdALpfFxPQiJfC1cqcRFJiHAex6k2LkqWmFgHQewRjvSSN5dbhuW8y8WgEFinZzGRSc8Cpv",
  "key3": "vjFaZUpwarSusjY6UehVCAf9TCRLyocdp4GmfhxAc6jEXsKQUE9qYfze3UNXVAHmUTNEbTKj5WBUkVHfed8FjiA",
  "key4": "Wo4rXtDqybw3SsKXKYAaX9b6s7dufksvzpEXADQDj1hKY7Tg4TRS9kS8Y4hABjSegLhVGhQDxQQVhuZpZ4ZNgmt",
  "key5": "3c9XXzpwS5NxjjRhGdsqJuXiHtHd3q2bgg2ZUdL1mFt9pBGAiKoJQXa3zN11j2ZSmJpKbzX9bQy8H6T9yUnqeLtP",
  "key6": "4DUvF7bRsoAgXUFFBU5AhZ2ooP2vaA97kR8ahgsg3e3QLx1SShpqftsnKm8y1ovh1tqnhaFZCBXJFma2KNJqxxYC",
  "key7": "kE3k1ZFzTggu6DEJZtTTaHKcMK11Cc7cZ2pkiEV3S1J4gNvgPEchiUtgWDENvYYt6kbCf8rrXYPSKPMkpLPPij1",
  "key8": "iyTDzstfoKjcaLT1TiLy5YtgCUuqdCNTqQJTwo7MEufsJ6XbL5miRsVwx6aiRdrNX8gmm2B2qvzDJds8xd7W5pY",
  "key9": "2KfHTm88Qxbxbm9spiKKXTJFHovRP9fGHcoQQM4RiS9onxySqBDCmkwZRTzj9kN14rtbcyKpcGgdoD3HZyar7xrZ",
  "key10": "2kYzTr4XYzHWgj8dWh83cQ8gPp4X8kQMgRQg93HCPNia8HNn6GmznXXpT5MNDaF45Ncj4PYE1YJA6JXi3uVf4G9Q",
  "key11": "2dRn32HHcKJ6nray9FtfV2T56FXCbiBSGQ6CECfUusVsDSYp8shcTJ8BeV3CDv44cJZ8em7hGB9UfeCzMszVT2GA",
  "key12": "5X4YjUmhzr3rMhDJpCuje8oah1Hy6emEkzXqWvkErnXsT4XiAnWryRb9ZXzo5vpYpESNHWfEd4PTyTbLuth9JPqd",
  "key13": "3aREPiUreraFFsZeYjiDaPXMaqFELLT5UFDCdU7KT2cGxZrZB6cMENXu2mz9zeCYsL6Kv2qMSkwYiuX53LZTWdGL",
  "key14": "4zU5RDxZi9Sm1KLU4CLh6XdHN7GoRi5HEYYkMxSM3Es6tgzkBbVpii6QosYiMHHpu4SpFoSbEY3ozhVz8sYxWJXR",
  "key15": "ZQ3hL5hcRYrBiPCzyb5bHdA8LWxm8fQzxsm9C77GiivddLD3ThRGoA266yi4omATh7DvdbvD6xtSrFwBZarr9GU",
  "key16": "3tw9rPGCdVdDn4TKjQE6CmedZmuRBRpMEzpM5g7aXL6MocnRCLv9tLF57k7XxtNBQzN5XcGfbXwrysYCW74b9Fyq",
  "key17": "4ZwVFcUiWxBVuEr418Qpbb9hm6rq6ES24uyhX2Hg7kEsZkeCikyDhe7pPF6umEvR7T5TMK7n448Pwg1njSXQ1CqM",
  "key18": "6k8Wi5mUGGeQQVGziVrquE5g8RcpiEJ9eGwfoA73TLe2v52sAo8wP71FYEnsFJWYEDTCbJnLES4xtB89C29XSgr",
  "key19": "3VauwxwKTpA4SWev4GuX5v4qWWwe5YUW83Npx5xNWF23ZzmWSnAkHrprHjje4KJBqnBqhHTmHBYZPxtrZigEpiFv",
  "key20": "5Kinf18uzRcvooWWrNK8Ek3wM6HohN4nyoRDtyrHPiBHqFVxnCAGDdc8HqwSAPcSazSVBRDGn47BkeBcsgnCVjj4",
  "key21": "2Z6pWtMpf3EKfhQcxAfvpRc7RHoXSgSRxDB6TucoU515aZLJnAqK3XuUvuMm5EZfSJ1UqfV7Zsg5VnoUy61xThZP",
  "key22": "238EPQqNGU1HP4ts48RZincicWXkdFJ9zLdwHfkZhZtWjJgHPFdPTry3RX5uy4mJFPp9VYzxfMAJ3VZftiB9rPFN",
  "key23": "2rPni24GC3PXveu4hENzUvfwZkXZA8WarBPvRxTfCr48wediMXeGEn1iK2gRRE3tG85e44ui6N32HbjN9tyjVaG",
  "key24": "5JJNv4TSkSFKsxzYXwzyrcGtmVHdeBvirqqRa8ZZejrv1mXrPHE8d73oYvijvDHpTem2VNEXuVfYfJu9sftoTQEw",
  "key25": "2gciUHMSEbZTW6ibi4LVS6XhzcRarRLMz5f8LPWsYSQepLiXj731AJUFfp7pC5hpmRApZ8fBYsMjta16LAaqG4gU"
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
