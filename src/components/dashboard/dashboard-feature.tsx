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
    "2rLiuZ79Ecu7hycLoZj6xtQwdszmqKdqa4n9b7kwae9sYNPuFe14jzGmK48z1bi5357EDMzRijfT8hzJZSaBBTuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUCxRXymp2yvB7P5mskJBX3TLHdWdyDfoF5yvSR9gpQKZvh9qxdp96EiSqD3Y43sDbDZ6r2NHf1GvHqNVvMHggd",
  "key1": "uE74zAPWLVay7sJC523PJQRreTVgvC4qdSz7Upd4xSJaCGsgEoeEbaojuiTSGmfcMXhEfbV7B1N8VDs6zEAxccw",
  "key2": "2xZiKGH9d5Z8yVuMYoarcdaHXEXNo6zXE96UUoyfC2MVem4yDf97R3F8qKmtkvoaZvK96Dr4GzWMXPkgobo3LimA",
  "key3": "3N19jMKNjQo7g1J1NK2CnVgerpjRysXuTJBTYUoG64r2dTopQa288wTviby8KknN7svDbDdcXgXQ17G3LSEtTiYq",
  "key4": "9RyVAFHPw9jaFPNSeqfnn29wojun1Z8iaydXmYjxPdDw7LaciHgwMVQCFKu8JD1wZ9Y816dUmUpo33uwEtrr8qE",
  "key5": "H243JrvC3QAoMuBdRjvMjMhQ93zPeFKxGsoxfYRn3Gph3ceuQDiptPso6FP6YmD25cxk9yfPteAJDU6geeeupPM",
  "key6": "39BkRuyVQuHyEaEmLQofMzBE7eXAW9aVXqJkhHMuYGzHCNoyuPngoHjAo9rSrtNNSwhpE2d1AEkvro7XA1XJhido",
  "key7": "2qAtGfE4u5X5DHscCE18WCnkCHT17royHMMcU4LeETDeiqwseau4sqcH2wBn9h42LyA973jTxyjHvfoJsgcAsfGv",
  "key8": "doHAk57ZotSXsFQua1kFqNJqpoQr9eBZ5AVfBx19RG2n7bFqzx3TXvRXmNCw5MatzFKpu2eJsEr5ktHTajrPcHm",
  "key9": "2FRy8yv6XHabFnASiM8PvkmxuxpspB6VL52QBiZCKDYhzDygDqC63CUd93S4LVdpSyRUNCatMm7BHN1rqV6HHbXF",
  "key10": "2drrHFEJqyhpUVvUCG16KXD9bJxgbeWDzhy8aQrCiicfQKT81uiyMkSUvjTtRT8UMiKHKsRA7H4z126vdqtycxog",
  "key11": "CCyoUL6M9VEfdyKeqWady8ZE22eot1aRFWhRhWSDY5iD5AP955xUfmoboR5LoqeCPi23hMd7YgEygjZ5trUFc3D",
  "key12": "4bdeo5sRUxHbPihHxFt3kxNzPaRu6rzHaDDKEWdJCnigv18oKWmw8ZTwTt7bNW6UATTYHw31wZZ5zNV8sWeLpBzj",
  "key13": "Tg3zseVQkXPCfVNomconqMREPiUKJQxatGr1y5RQbZkBNMhHvkoeDs5X83bAyC5EWtMwNJjNK54jw9iua6LRt4y",
  "key14": "2rHWfw6VEdyh2yNTjDkLfmxmFisYsBCLZu9abdbSXEBg2dAMnHUj9oj1VUuT4xXwinAHZD4e7149TCm9vSHBb86f",
  "key15": "iCutceMbZe719X3bohv1AnuwLUwKxyjgMainBKrkGLuWWoSePuAbw5n984XRxa9vjqUqbyjb8Y5LuzCUsxUrtjF",
  "key16": "2hRvo2fzCq8BgiWk9SUJH8ejtTP4CTcJxh7UT9rNt5ifvcz941iTEDJEswv9wk7SJL1UJQztUpMYXa8jnsiYiFdM",
  "key17": "56kK7aQXMWHjBDYDFwrryxpBagcfU9ksAtYAhZaQRWchN42fKTNY1x3K9N6D1uq1BXP39AonUZK2SQfyGHvqXc9C",
  "key18": "25oTBYJfkAFG4CoS631sCHeNYxctFvikLPViHvfDKML3751dn9zERTFAJuGu8TvjL2sfFQiimTuEKjKVBndJbuZa",
  "key19": "3yar56qkTnv2EswZnVN3NrhXMNTJtRVGDAwUms3debdRr5ppqQip6fEEFeVZEmGrxBoFWmhXNReZPDUKMMxUGxrJ",
  "key20": "2E1D2mw2RdDbAeKxbL2AeM9qend1kMCEJpHhq2fWjZm6hG4dcKAb2d2tUnoB991dvHdgi8S16mcZWY9xf5xQwgua",
  "key21": "4STCrdMLkMan3CMZHjbDCnCiC6pN7pmaSUK5fPV3ajmyGGRktngrdhVXbpZf9pyULbNG7VTv9tyHr54XAZJhKq77",
  "key22": "FhrmUHRpUqroFcBzXYQVFAfA1unJGWqamvaWL4Pa2rPThAiWrxB5mABFCWfcxVL654j95P7PVBVjAkqPfwW1JUp",
  "key23": "4oUs1RFaT8GJtedY11xYkRhB5vdwUm1tfsGjL7HKNsnQKXGvsd86C5s1QJLUtUWJwWjtDpfMCMAXdM2CZmKbaTgQ",
  "key24": "3jFNdWZRgfDGpUGoT1b3zhWp2mdon3xDUTYSJpKXAUgqMrXKjbeak7n3GwkuRthec3mbhfNGQCcPpxEcWLArnGLW"
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
