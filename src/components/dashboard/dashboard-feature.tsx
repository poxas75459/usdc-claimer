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
    "eBtHz3xwEwycGUvtEAmviNBHsfpxJj3Qimwu9F3LAyFXYzEUYsL5mfFMTuUFZJmMaKKfhkL1qZfa1aZnqzHQW2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBEMhSa1uWTt7vWX6yhP64zsGGHxh6pH66c8zjxA7PJFKCogDNEs5hKzd5bn1KTbY7tiAqxr7PJCHJNvkCft2KD",
  "key1": "2txYDg4BewBaUootHDj5vFoj8QmQaRjBamHSVMeRhphNBAu1KnvxeAcJwHBuXED31ATGsTzknsYUHdrhNgr6fkmU",
  "key2": "3GmBqapTAr8PGRNUX1rMasbay496UR3yKQLAHLT1PuaMWXPB3S3QgaxBrQGdbyRHHsqoesBhKdum1CaxWYhNNSop",
  "key3": "4gummau6R19Gf9cPuyUkhTGPCYJo9dKi5pzvQ28ksCSL6rte5Lydb94vbKXR2APqnfEx2ywdzknwkQENwKufuQVJ",
  "key4": "25CirJqWxfwsufxkEzKWNfaFCCSFoMc8kCAnfmNPQaNajz1yPnJL2cQim1mtV7TX9aYEZE4rKiMp9vm8L8f43JVw",
  "key5": "FBoFz2Ykp7HskTWGD6rArpPVGA9Hb9fUMV9hkfCDcs8H2TomFB8scztqdgWxR164UQ9tYhycXoqR9VmV7BvtBs5",
  "key6": "XWSYoXBQkZXGc7LoeWy85tWJrAEmToyijgEwcFkwvFFwoDdb4ASMgogzFvAa9hBExFsgtiQmpTwyu4oBwerxRRF",
  "key7": "4hs7ieURcjPW2JMDuMPtqNuuoHa66RmV3oT3EPSJRDkK8E8KZ8Pi2KxH6yTudoiHhTfG291isd12tRPCgUg4UPKS",
  "key8": "5DKnWutkweun3RSTcA5HHe3H1ZAGWPg7D4hR7X4BrbwkfpL3KK4irBDdaX3fWWdutpF7GNk58pRZmUpdTZjsjeYU",
  "key9": "mzr4icZrz22sSxocMFPf6NwZAiDaTC5DTsY2QgWUJRxNbjcfoE5x5Lt9PNvTJFccyKWJNkEFgsp8a8QdYJ828hE",
  "key10": "7PRkQ2dA21XF5XP2Czz6oEoMaoYjipmLfinZYeghFKUdWsGt2hepBouCT76QVFYSn156QqRwFi4CKqWj8sXQBBd",
  "key11": "5g2kiwMsqc33C9cTGZSLTq5zwvyiJSPWA3tfNo2BEMeH5nwpSWVgfLXPwyAiYV9DXoGc74ugRhVKr9dgtgTAmQSB",
  "key12": "4FwrCY2CSmwUJ7jdULU18iNizo8yA3G2ss9skQzMLbVAK7XK9JVv8QzBxWLjHZeCci4suu6ZNjGRvW8J4u2ow5iA",
  "key13": "4Xc11kTuXNM14NKKYPAJgCJjqQTENKpkwZaZBgh1YGUN52pdk9qyrXqPX8TeyDPrbVcXLSxE365wzvDC3pnuNDQ9",
  "key14": "5jgB2JnMVT3BnYxAUp3EMJyCA1RC5DcR1uZmK7iuGMQTf4bB7cjpCHukhqLFswYz33VKSHk7YRDVGA7jKbhoQ4FW",
  "key15": "58dCHkZdtNpF5fNeYwx3PqEa5t7LCVXwkZNEsLkMkMYLigHvbDNm9PrgdbkaSnupKTJJEzphCyUmPVUx7riVte9i",
  "key16": "5TxBkFhLmPYMzbajfxb7eR3ADMVTRPUJAC4wouUUtkLjSP8KDTasYkks5gYwNLqw4WKpBB578JGVFy3SDp7CQCsv",
  "key17": "5rrKB1aUWBKgyMFqkmzfRoQgGq1GCoQvCRe8qmjKGiezCNjWmShVLq89VdYdUtxy5SoWUnNC5fHTV8Dxa6PbXYhx",
  "key18": "3c9rRKktY5woxt5Sb3C2rfLWihmHwnC6LahK5HoZoL8fCNqjksVXQXX7SENvyby2ot7E8wW9tzbQuyfoMrHrabjD",
  "key19": "4i5Y3T2RngQiVo6JoCXrAgSkPrQ7h3UmTQ2vCRJVZq6whMxfi6nhg8aJHnNH3karusKzDuoD5E81Mtg4NzziePQd",
  "key20": "2ienGU4Hxmi2br6JntdkdQVbfbHQejsjkcfViA3iddbdT2CyjcSVF1VaZVHrCToF4dFAHwzCpBWP6EPB1bpSAs4a",
  "key21": "3gX3WTWza7z8XgvQBKdrBNYQFovy8YYeXEkb6tmKcP9WwSMHSaV15E8R4CbE5pcA7PYXWqJgzRAdNsX7iSGduJQ3",
  "key22": "5G9ZrJpkKNeY1YrXTLcK1gT158WiEgUMsiDZgYDrBzrbBFJkzx9L3oSXgSQLT9JmVbgTNQantjN1SAnSHadyMHqw",
  "key23": "2wKwR4nCwTsS4bgJfCuweWybSV4dpUg6TbSKd1CHMjF1UEvK7Axcxd3aaqweFpFrmvT8Y2W7w64ucP119jM1nD1j",
  "key24": "2pPYMQD3qeNB1F73ZnDQ2u33gaY6gRv8bt9pbDhGWdRJGchgjno5Krf8tQHeZYRSn9gGRqNd8vewb5LNc7gj1nbw"
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
