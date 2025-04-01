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
    "5y5rgZdpVVp24Gjf5MoNPL3dv587N639gAi78xHQnqWmRi8tkqyMhjDU3u1Qjf27s5xqX7T4cL1mDHvA1zeS7byc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jiqSy9barL3PbsuhSSyLCEqPUWVg4sooPt2i6PSQ6ZMdKcMUbPPZieKubkFzT3mU2P8Dkm8gc3zz2STmpJ1fHoG",
  "key1": "eU5Z8Ahjkbk7xp896UcGWe983TwYUcwjy9jXN4maQQ2TuaHYFP1o8mv8UrXgmRTW5sa62WyBkSMkBZbuh5zgYig",
  "key2": "4nsxVt6L3kWt2aNyMCLasdEuK6W3KKDuxK9wXHtRZVRXzNRnwYBfNBLZ2PJgY6ZSVbrYebzF4FiEmJwxyy5LReLP",
  "key3": "MUDC7pVJdtgfed1sBVgZhMPNW1q3LZq9jyA16GT5iDUHuqVR8VAe7916FcJn5twAjAHQDF1wntQY5ZfyEQDSZD7",
  "key4": "XNTqARPQsJDXhWQB6aHfZvxVMoSjCgfAoXKgYqq36F5x9B1Mz7pjuGBEwfy1XFR3UUBvRq4X3bpgXj4ipLvnHz8",
  "key5": "2uaJEdk77y1Tez8QRKewaLqGMaVWuKLuHDZjS4jv6Heyt7z6TzaBhYxfaV12DgwkifkGDD4x8Gxxwe6UbGE8WJKa",
  "key6": "C5WxbKw8Xd38Ff83irWNfZN4XrPqkTzRob5oHT2DqygcNLMogkEpok9kqRWSoAk9AyY2vUQovYfP1dKzGCCLyaL",
  "key7": "42LfJrFdpC2YckdJGbroYudMbh2DDWy2eWGn8RwDWdJRJkgfj8hdrP6h7QRp1XjNSPyAdFPRcyLFTHkMakSdTmrv",
  "key8": "39TgtPSYt3i9g38vZJ5MSS7QQspVtFFuH97DPpCD1gBnPce9kRiJ2dUJSipbKuUxFbKQGtemzo24Eior7Zai6rLA",
  "key9": "yGQSnJQ8BvTZr19AEKpXyzHaSb1uLXzV84Uyn14PmC5Jrki2MwreBNEtBaw5KHffLkRpoWJDFVa5gTYkhnB2mQQ",
  "key10": "49MxVNcybaDEg6gpQ8a8f4j2o1Ckf6SS5i1fTRWFWPkkmS4cRqZPXToCxGShyxJph8Zc38a8wcefF3TSMqT3MeSY",
  "key11": "4AP3ziKtsjyzynusnQVtptFMusEW7zG4QPoTrNmfk3MxqjTiuCKbPr3ZB3NDyiXG2DqjegFzRHXZDXsM6SAErH7E",
  "key12": "4PipTWZfPY5sfaSjNoTf3o7ugAKyjmPQGH8jQ3VT1vRCgKB1TPu35pJ1ysDvGgKDrBErMWGtANQuQCB38aYk5Yzz",
  "key13": "376anh7Yxnx971qvdWRXkkj8jq55oYY5jFHSbRMp3PcbvuXLbyXQ9CUeRhkzCzKGLmt2nk73iGB1uGExS81FwMcM",
  "key14": "RZ289J7oYrArRxrxP482gAj8KfVmggEfCK5SMYv8WtiwLT3FC5ojZcK1V3BHwKvWShxMXZfEKk3RUpPnAjc9PKt",
  "key15": "4ar6MMLKgh84U5CFKD93Be82Z5Bn5FXqjKTFsyobGXbgS5jKfcHqE4qury5CzwHWXjoXMHEHHDqzDRimkVR7z7ry",
  "key16": "3M3ZssnK4iWWH8KTk8FUShW9iLY3czbZQtPoPceR6BQzz8oRTzcVvBYazkASUyoS3sJXzQPN5W6RKgnsSsCzeYsb",
  "key17": "3xLYNyvwo5LKv13YRTtL1bDP4ewV1rmQ5PhtJn48qjCvn6JV7JsGzuQthdy7dCQ2K2tfzQXfLAi8bJiaNMY68fve",
  "key18": "2sEN4f95uvYKumJuZWR4p2mPa21XYXGBhR6DHH13YLJu7MivT4a7AE3A3QuYSNf5p8rHUZMN1qQTroQXnaswbNYN",
  "key19": "3VMftn4Xen7q8wyvDJ4bi1FCzTKvui8thD2vsKmf6D2Tqx942r6XnGXabNEqCrNsyQVWri31yBz4AMgfbnhbsSYq",
  "key20": "5vWNvVPC1gWV7wPrXAYxTecUiPtSjkmzegegHim7uL9kEgWAbvrFLoDrnNUKbVA8x2MYUGYcJsaHYKZYJAPJrep",
  "key21": "67k3YXEgUqbK3MD75zg3fbi13eWy7pvJP43rGk7WtZJUw9UsCyNM3e9roo2JUrbSF8zHPYhYjHrtzkYK5qSAhRdC",
  "key22": "593nt3NgPyELXdZYBZRA4Tmzro2e8bT1p5eSr3DKjgVRtj7WDeRHGnqVApJuogdjP2zCYuqZuoghitvgedbAmorT",
  "key23": "4dyMiifwGGZ1fpXDgJo9FYxHAULmDQ3E41yokcHT2U1gybeXCY8huqd9sbPaMPZuaYfVDuYQa9VHj9QUT4MGYrpN",
  "key24": "5UKoMcLpN22vs3FqUwbJuTavGedu6wUgpmz6fzjSBnsxH1s7ZqLXa4K8pB5iMz1VFS4e8LJuZYH3HifQQ1N7wCxb",
  "key25": "XS31rUSgxQkib6Pu8k3Tnxj1Bav8SGiiXysd2ZvbusaU7vA7G96NfJzAVTLuemAaMh86tEfqeu8z1roYfqeLtou",
  "key26": "28h8Me7AoqoSdPbrNQCVgGUUpQFL9XHXBjwRRZPuuL66gJCSybUwiVvxZfyx9Vg7Hv9or5HgGg697dGspCq5bhGa",
  "key27": "2L9UXAtnwGZgYed6a2cz9hBMRKnpVDyF1xNsMY4kjetgkFpobdeKELx7UvrR1hLe6KUrc5peVhtyqhZhzyfzD7Qh",
  "key28": "4hJGKNMLJJCvMpBbS1JKj6774ohLNCWdm2kXu8RZo8us1N7FD5cLAQUnKoFRna6F5JCNL5PPsjHLKayd7dCUTLYQ",
  "key29": "3C6FRLz2s3D6eB7K7tzJ93wo8UaCmzwU58dcDkwnUQBGFxWknQcUu7iYVbryyf5yYtRUkipCMndT92HEgMKqhXkn"
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
