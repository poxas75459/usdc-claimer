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
    "3NAPHUMqGMD1kjKmGwrjynpWj4BoavG5hesPMhdGAP442Pginn13w8y9SyWXDUEYBt1Tm5XkUuhEtKUaVc9xNxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJV5XnqFMupuG48fbA5auN6Zi3uu6FHEpZf31niXbPiNHuLWEEptkAm6biyqiLyzCqU1vKWNZYffpNr5eLgzF5Z",
  "key1": "2wm9bk8UHhF5HyeKNAEH5Q2pTig6uvbpKbCXC4gaFbmMv7Nvb4ZRiotsZdZZiPT45dYkdHBryYbFGweU5WppaZvB",
  "key2": "3YRyLyZCo37HfHTfjEDzskubdRhJn2Xgxw8553TbfSZrZw5NyqDuNvAacRWV6TBnk5msMSRy7YY91rYxmp7U7xy6",
  "key3": "56Zif91Q5iWT9yq5m5v4eEHwhnhvRnwuWPd4kNuKrymX7WmsxbbPBNDR2LP3XUTWpLJPpZ1CPmuuEm5ijvZPZNiR",
  "key4": "hPLsE3ivg84gif4MKMKo8E7h9JuP4EVvH5E24Sz6Lhwj8ssn12dXyQGqyCsKUZhBezY3XY2jWCAb77hyGDLZsks",
  "key5": "5VPpCZr12EAjg2vgzjRBwjhE6LMvVLxM9hShYF5Nd1YTjRGoJ4LELAPvQa9mtHAyjRJL6aFw5SPCDcq4FVSfD6HA",
  "key6": "5igM9vvYZcH2PraVCqcHQYyn77DZa3uSDbVDsCHddkcjL3y6DGQWXxjQHPBujWQqJj7L77hBe3c9qz2EHyczKWD1",
  "key7": "5f8dwqtwbn4pXLumjC8SNTgFGRTjEmfjum49XbG6xBK5iYcGKN8aHSxLtCfnF9LZtsknWUeBXGFeH2YHtW22BDpU",
  "key8": "48f4zp6vcHF8mFW7QtcGx2PerxfanK354XogBboW4kSj6pCZd2MFsHaYyYr7qHaKVEJpFYhQ93pa4PCxdFaUGyct",
  "key9": "xgEzeu715Dup2q9ppfHk3ATpEMRvghAC1y4q64FYyRXGktPWidHMnuxkRyZw5sX4FrhrBBbngbMiyMT1jgtmWJ8",
  "key10": "2DmxEv9MsFWw6AemVyw9ekAgJS5hDP28LnN33u9R3zuAX9pqxxPA3833yPAamk7goq6JjT2E46N2pBwANHDqmHRJ",
  "key11": "4zvUHeSRoYq6x529YyMi5gRpigZhPpQjMKhcqDZSr4x8WGPB3nYBKsQDLcK1QSkWHmMUAoRJbGorQ6N9LsYB6Wx4",
  "key12": "2s6335B4oetmFvLKcCwcA8ytphvGbA9vMmnrMVZ6AThW6oAYAJffi6sxsKULqNUD3Y8Kw3pRB2qAibgNWbvDbRQm",
  "key13": "5VREo77pvoKmwLHSgTgdLcXswZNub1bGsK5MdnPRyCp8hgZmMRFCKNmoy6WD82SDfKsc3PpuVCWBJJrq1EDVwdht",
  "key14": "4HSyFfyLS97cNi2iykaB6RsYp9iSQ63hwDVeVc3k2YDU4EicZ3wkRfE8HwuGDmQ3mpChU8vRWomHQ7BomVyKrVNG",
  "key15": "5xdhqRGoGSKKtNnuL8WbkcskZxAGRbK1rdZD7YejK2MNsZv5Gng2jsugWFLLG5C8vXpCuYxjfh3JGECguy8Aqsp5",
  "key16": "4grH89GiR6PvBnWLranC5n3wcUW1NPXW6rbegVjtozEQoS9pa2417BUbP6wBU3Jz3bR4aQ2pZYfExU2Wi5y3uSoN",
  "key17": "3hFpWTYnkUbnbbvNTom8K9Q7kqivi6FyKttBch8CbqriSodwKy9aoCNAVMirS6DXEEfPGHDgLQwU8Jfnug7sCMsd",
  "key18": "2tv8owrgA5mEjxsh4efiRd18WZ1khk9GTawtQG3mb8Fgha4bJYTHE8DtFPeH4QD1rQonFTsjRP5LAkH4gxttv6rP",
  "key19": "5zbZUupTCFnahBRQXSFdFLreFvRW1TkCxQ4wREJnuArsoTbBvDz1Zt6PU9HwmZxSWxqSvDCktk7fTvkHBYbkhDx8",
  "key20": "5GbiP5QDzfsabVB9TAAUT3MDTXKuN9sVanfypnoSubU7qh2cyr5nK47UuzHvN27AtEpshbr5WrbhE6RmW7ZVoeHc",
  "key21": "5dEPWuT1PmxgUafUB1nDG55i759Chjdmug1w75Esf24njWZQ9ZpJXq33buotAjy8sctYYdNT6A8fFzGzzjNvAsXo",
  "key22": "21AbfVYBWRLhdVxWDWM8J7bxxd4zCkNoqVcijiYwTXfX3eBojjXo4exsu1QUWajDhe9Jdt6mMywmeTtbEE4intuT",
  "key23": "5GYarRTrcn783LPQrvBoZ1s7q991hbE7AxFGcyFehCMiEeTJZG245qNTZowpYG4yRTVqBZWeKHQoPhNuQfey9i3E",
  "key24": "bEHcBKbQMtNRNT6fgKcdgEwV2NxQc5ha8H47MjaWNDDf59vzUYz9YBU3adx216uUDv1AgdyB7Lwmaur5pketD78"
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
