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
    "2xGWjqhiHb7xqgyfeXRCz4XzuvCkagbnsfSdZTKvZKvvhR4nJ95MpNS3cKyu3LePEWLgfELDrSyCJr8iHjGB4DEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJess8Vw546UvrsDUMQgmKgBPvKnLGnURboLdekkty9LAaZFW7BK91gbF83S9wUZhSUt1qpCh1qkXnNE97Zqqwh",
  "key1": "466tU3yPcj9bQeKBehyLCj8nLHZfjow1yksugEAWGwBCQ4rhg1A5XxFme4DqPw8xzjBginrmoQCECjNwNbM7oKo1",
  "key2": "23AShxt1sYtWXYNqmkaFMRgXWAae9SNn4aeMaLZzNtG2cTAKmiBeBJxmPzN8Zy778P3nsRQfzXSQYBpWqvj8rs9v",
  "key3": "3ChWJTzFVP8r5R6RJ5ai1AMQAJbQPX7JA7mwNz9AV9kKPmdBKoUTGkb4Shxwrfc7WwBsV9vuw1tvciWJ7aZ7MvKn",
  "key4": "5XxSait6KCHmFMZcocRdA4Qs2ACDyUQUPGY2SjdQznyGmUAwrNo6xWC6Q2HEJxGZwn6TqQ3cSv8FTAoxQoRqbBjD",
  "key5": "3aZGcXeUW3tNa8MoeQ3xwvT5YnjGAnMMxYVK6mHbZ77z1jwF3y1zHHCzXjpZAD8rtPb5Vmro95axVSJamWJXxSqo",
  "key6": "w9r6CdFmp7ANXg2CTRPpNWes2LnLiLsRSwwF1SKX4iv4B6ZSd9bMUQGRqZ4FKbB23yGWbmqGEuAHgSLTBbmDDKj",
  "key7": "63YS8XMjBxjBHNi4PbmsxXvVD4iDmYLks8zsJsGjYmHbsPiiAKq3Z8s1N3JxnZbVb5rNsfwmSDqQBygRVn8bAGkr",
  "key8": "46kkNkfeejV9vc162Q7fp7woeYpNpKbvQgzBq7Vfetcu8W3Rbau42mb1DDzTbSUFQqMwGcSxni66u7ns7fFrWeNs",
  "key9": "3oSx7w5BBj23xjqeRWAUFp6jduDAK2JKsjKKPKWv4DiiXQYMx28xhpVz1RTkRUQrkBhr9DG2yTWiENvWVixfJG2W",
  "key10": "23gUVAbG7EbEhJmNE9LpZdwS9z8ujciczVmYTwBMaPv5XxFXdfYAbFFMKQU7R9ciFvME4uR8gAteZtKiWRC4peuN",
  "key11": "28vJLRvQjkpspCRHWuf6Kn2aWnMaVeHDTKNLGSSY17sbJmFieqyTaJ8cLgeoMxwTnXygGEvPx9HDtCLgztCGa9uh",
  "key12": "2K9u8XxHNbywiToms8ARS1KM26nyjCLQbs26pKJRC696Wzo2bcDz7uKuBp2ndEpNX3DA62SaYmCEunfNW3YCHqeT",
  "key13": "5LaGpNKo8hfHNVd7tVSwEPxAdh7KPuU4aRGvSRNmxTFESELNtZX32VX83gyTrqr2qTGW2TZeS2wupyhHVdoaTq6Q",
  "key14": "5E1f984NEgvfrt4FcwrxikGwQu4k6YDLBAtdchdiLfi65CMBXf4spjZhbrh1sDpL2QfkwUeSML63CHZnybgoVyoU",
  "key15": "36ZoZ7WqbjWkHK61gpVHxAqrAkPwmmqnPn3uHYqwXTyCXrZZzcWmhHzHWKcVievFa3AQhpJjZutigHxArkN1xtVw",
  "key16": "XWMRji2pG3LkTJSyAyrhXW97aBq4iPHQhNMgXvhQAFf64YzoFTvS9ZdcKcyMwWJb9MkigQcryr7kDS6REComZdu",
  "key17": "4U2p86aC3nGxYdE8AZWfHDpNZ2qQH2T7BQr3faS8fEpkUj564ZYvP5fv9jUmwBfhvPH4XMYUKmgUucEyNZW71Den",
  "key18": "6iNHZp86RHAFspNQVcG1XVyVwentjuC3qnfN9JxEQ6DVD4yoCUjkoLsuHU61uXXg75xXZKVArhpNpXXNXoeFbGo",
  "key19": "2tb5hkLRXg8eCM8kTTFYTjy8q469nP4BgTbvYAp69AawiHSdAx4i6XfNRqcrxkJk6tMm7dbqesskYP1YmEFJAzrT",
  "key20": "urDCNXjYXscZkLJJ5GqWGRTN1ko4qqcDvnxCMufpLnADDLqWtnEvM2GdiBKxWrGgUqw3d4VCC3SQ1edJb93xMvS",
  "key21": "2VGFJByn4qRAK6EZaZZmSvXLRdK1LDxpi53gTULd9YXfdKhtWGajN4agV68SVfRznyACAtQuGJc8msQyuNZSLcgM",
  "key22": "2HzUHhbRxadRwerJhctsNXubuVoxBrSFvrs7fLzyQSDTBQvX3xAXyzkfJL2nY3yQtjfxQFChNTgKsLRJc1pD9jXA",
  "key23": "4VPfhztUszBL22goFSRajKZfR2ijSCZMgRBxRoKPPEw9VMLPSy28GzmGd7qrN7QtBEyvbPQuTNcQeQdWp8LsJtfN",
  "key24": "2fBmHsf8GdXUPGGoGS13Jpg5fd4je68HJZbnaXiynjAz1guquUCvXFUXrU4MEuztjkGgPa9YF2CmLFbBkh9ecrKY",
  "key25": "37JJFxfokD2Jn4NFLmxByeywSWd2gmCZGjMQqHUC79ctd4QZXzLnMS7yyP5m1hiMD5TAzdWM5UAnt4tauyEV6nAK",
  "key26": "34R38mCDLneJuB5RWM9ue7UscBFTUQqiQgXDbNicdnopuNVvVwp1HZT5ipwL6sf1tsvx88k6RMfFK3ZazhvyMeUN",
  "key27": "5oeptFLGt4hrUXdYXC4NQf6VoiB6k4Uf5VsJ5fgz4wqjXFTNrmCr5Aiay6Qt3RT7viiTG191LrhqSpfJNK39Kfmj",
  "key28": "5eHyPPEmdKiozx3pi3GMd7ns24dryRqqPmR6jNm1RdDHDnQsFVk7QSgrfCGY9mzyimYvxV3v2XxWGe99osixGGfQ"
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
