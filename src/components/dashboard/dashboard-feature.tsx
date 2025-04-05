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
    "2PnTU2GvHUUKX637sANWMBFbMcWZQPkTTk4AhUAdNACjU5JzpGXJx5kNsoA7adD9va2aeVu2PsoQGh91QNPfVzXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRD1WAQpZn2QdyWQLuzPDmCiwXCujiWxLzwaNCksDhTtQaVMH3r5hckNefTUs8gyFNe75R5fVv86yaUCbgLDmjz",
  "key1": "nUxbRY6XZjidd1qmR9E3JGtwCsgvs4v5YkBeYJ7Sr9zHjoHi1XgPQY3o4ftV8kJBbsrSS9S9s3bFo9yEGxC7yQt",
  "key2": "5jebGwMmcBt6dRhdr455vgZwDhN5MRbGmdvKcaM4tTJd46C3gsCMGP2aaDErqN8oxv7sxrW6P8wNEC1KC8hC7vpT",
  "key3": "K44qfu1QNDqCg5NX1p1iP9rGG61ecCZwi6JMcVqHJx8mmpPt2NX3GaFkzNfDjfTGU2jgPsWAcP9dN1yWpAkDL9k",
  "key4": "5rusXFVqySHWBG1zfGMqKLiJAwojH1C7puyjQ4bAasCbRXsQkbdGpq38AtccN5i4F8vBZYXEcKMHC4369puzr1N7",
  "key5": "fgjJjHkeuRr3eJy83u6kzA1bsPMDBnzVVR1UuiaeUq1Ni31Q6EHZoyGL2C4YQRb43DFfLcsSnUi8iKRjxtFrtcu",
  "key6": "2RkYuSDGtrnbifMEe3gpi5JD55Mc4zhii96TmB5EyLT2GM2p2RtKdsVC5EpPq3SEH9EnNxrhAX6zyi5rAApNVzuH",
  "key7": "y7c72rKaRhXVrnqngCLPi3eeR7ED7mUMMH9gi6LoJq1nDsEcYCMMEAFQEHQCtiXL6Bodrdi7SDXQycdCpNXEkWH",
  "key8": "5ePQWf7mkPttjwECiQsdbMUHK3mpdmtuKurwg4ruf3pR9775qgdva9LbZYA3iuxyrpsqWSTux9LnuJWZ8hrr41R8",
  "key9": "4cwxArtRtufZujytCZdLWpvuJHM4ZEaJaG6NQSUvRmQDA54Kc3EB515Pba3qpFFAC1EnzBkwNshrxdALj62PPVQF",
  "key10": "67A4ASSSs5XktgMVz7eGhovzD3y5rsPpku3cczdpqH3igvaf1MgJM3nE2BwZD1ez4ZqtRtpSj9rkRaF6qdRBMc1A",
  "key11": "D8PdvDfTUMhuo86wFGWumSbypSCra9ntoEeCRMkv8LeDqEmD234YVgSNYJ35ETFqQ8ZykQ5T4F7ecwA4kWqrUP8",
  "key12": "4W2xBkkyFoeXD9hk7FhVERAEJhrXwi9qHTG746D1q9Fs1KgL7GAWcW4fuJ5bZAHnAH2g1o4DzsaH5LuDTRR2Kwji",
  "key13": "c5EvGmeTxXLm232ck5ZaXe2t6f19PtZJXzjdJnWfF17SX7wbQRicMr3jNSwhLQvpt6rwqApRjmLX3rQDoF8RpAc",
  "key14": "63j8tfU7dV8JJP1BWCrpH3F8SXh3uRNPZoTeh7SntgBrr2GFCRcuKkxdxV2MuzicVxcgQZD5r4ayR6VLxxbCMtsL",
  "key15": "55wB9FBCKees5mZenVRq2dCiLiDBiVxPTJdzdpXJAwFYctRXQ6LXxQ6CMiPSSdAMrmnHcUP6bvQcQQoEymN7FEer",
  "key16": "VurPomyZktKgA5j4AkPYViW8iPz3vurX6VynphB8kHVZvCDXtPhDbJqiDodsoVc7LSUWn1FYnHDsEmy7GY9vunY",
  "key17": "42K41qYSrjfhTj7grWxcsiRWMAUZQkftCuMbL9dr3wafCWkV8rFEB6zpBvRKpT9DJdDvs13VsmZAUqZ6GApqyRfB",
  "key18": "3urYYPmwPWWWHJURCCtXyrZrifzC4DKt93Ze8CdRYZxDbHsb9gPiTKWeyMW1ymLFGFSZe2gzKigj7bSJW78UVpW4",
  "key19": "34XmrxzwzByCCMydmCMfZXTP1aow8rMPUadtUGL5rJNSu198bh4E1e3GcUT1YnqvJahepoy17KAYKe9gjPV5GgCk",
  "key20": "3hm7LV3S7HZwP48GKg4FsQk1ceNTVdJCK55Lmnz2v2QYQnRCK98Rk5F2zwbv2DBpvHuYxX8tVqshwrFBHgvKYEUk",
  "key21": "YLNHrmBVihqnwyrp4ow8zDS7ovCin1W9a3wujNKivnwumJyR4JGYVFe3YaxtdWwETxmYbpQPHK7xCkdAQHhBSuL",
  "key22": "4UNkvtFNCpCvhppf5tbqz5sYwgrKeeb11pNGFASmaFiQ8agRRgNgtBktkR1JFHKQHNtZbRKqxCCrUw9i1usxcL7Q",
  "key23": "5cMg2Ayqi2ekBhwivmVvchzgRQMS71vcP7yc2wyzwJSyTRGCvLB3RTFwGc3xXqZVJeUcz5rRgnbjvsMjrQPxfYhb",
  "key24": "4UaiUoHxAiuiAvgSxPn2Csw8S3skCFFKbwSYrEnrHHtAUWxijnTmQDizCyGGcvfWc9NZUuWb28PNTh1ZS4XKnPDX",
  "key25": "44Tox7iPKNW4dCYjpNsKhKP8XgKZbw4gUdAVNMS7rA573kuWsNfjXkUWCwUFFqEQxzZCf2iMvYFcgNB2eDmWM6Ft",
  "key26": "3hxq9Bfb6RcdnzDkfRbsAfjy7d6BwPodWwZPmWbyEAx7MPAUGehTTDMHBgwh4iTKDUnUnzsc6rSLvpCFEhtZAhdG",
  "key27": "2gPSzEEb8kC9gJCdX6u8ZPtUxt2KocjmcidpDc9H99bF9aUVkDchTskxQR25AzY8s31QYa3hErUrYib4uM8DQ3Ke",
  "key28": "5rpTukKiAyR1Ef2M2eUgyqqK6z58rh9p95vgbXcNaUkM9bzbAbhqUHJ42ugzrPHzcEKg4HHspteYM3mxiowY8xmw",
  "key29": "61jNKA19ut2r52dcpzrJizU3jVCA25zKrHQsKgrLiCppnwG91zSxarrPJNJbSEqTw2zg4QmEAUioPLo7dP9nkGWB",
  "key30": "KrA21ebA1SkMySMVkhJYo1EPQs3FEXdZzuLGiFw4iSoKcQiAA2DSKXtPxsFswqtFtvnBmWaov7FdXDxUrZbMTiS"
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
