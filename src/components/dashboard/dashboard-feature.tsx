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
    "2fJSbHk9dUeHripgTDZZGchRxjbDDx9Y5FxFRawZ79cga4nAhMJDVCamXF8mdqnDWGPgpd7XvEndbxmqjgrGVGKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFuCHtfKsAzfy1RtG2W61GjtZEFnRMCz7T2oE8W9qbMmwuk8Yu2AweuFnL4nHYGepSoNBQBxs9NcaTFEVszyKnd",
  "key1": "3gjwQrQXC52V6qrfdEjfvNfgNbwVCAoNtU7cFm3ecAKFVoqksFrPMxN8EbZC3kKFgMESSt52bvHuFGmHNkSxkSnG",
  "key2": "5jbXXpkHNsYLHY4JjandLf5Q7f9n226My9dZAK7xEgqmrfp1CCSd5cXXanztVFJGExNg6Xp89qMCZbcsEjPQ578r",
  "key3": "3pAkVow44e4w1mgA9RBLdeJtw4Jwkfj5gCJnhZe7vr2FdFktcfMUFBNWVdGBsXv5uvqYRaZcDJ3RUqCHBAGwa5JT",
  "key4": "2iwH3emfR9KWbNbKiiWkR3LQVLyMXwUQ8fbL6PnfDLRt8vtf3wE3XFagh2X66YsHqR5LmG7GJob87i4QJVhR5ZgZ",
  "key5": "37ekNeVFEvnfLvVRbgRKRgh8Yz9gXQAYH6LxYucJmaP8t4amaEKREQeH9LTZXnSimwSnnAqHCruq4Ut7rsf6Lh9b",
  "key6": "srt9QSCh2fbSFWUc97stBhQaFeu4A7JUqZTh6cwnv4skaLoBgNNjtSZFwUHmSWmfKTv1PfoW1ZTqczADrwkNEyH",
  "key7": "482VMxuT9FvXxzFp4YQzBr218mpzNtc24Fkeq4bg1ig1QgxT3gz71EBSn93TULd9nLLeJ78qCvSPtHmmrCjZYwST",
  "key8": "3E6Jqq7ExqzXdxvE3b5ZspEGJ9n49AXYg3RK1xyUMQV1wWwsjMTriUtVe7odxFRUbkgP64fZHUViz5ZhXFoKoGg4",
  "key9": "2SpJXfgfvXdTQWwv1r3TZK4YQbkxoHA9A1PWEgSt7UF5ahrxg4BfEn5TvTeF4LZHsuvRQwvn1QjZqAp7fADFDbQj",
  "key10": "2sGuCe9A8BprfTwAqNHoi78WWTUaeCSMmX8PGfsQNu84JqNmSAFruvy48MSJEPXRcMosf4EsPBjC5quvLbikwk8X",
  "key11": "2iTdsdoeVEgVeNKB1qWazeDj8E93gsTNk2RCNizVftUahbkeKfVVSNkCfrrGb2ftoQjquBdYBDBigBnMwEK8eboR",
  "key12": "2eEZ3o3Bhs55UYwDkiS8NwFC6JHgvNiJSrey3g7YsHrQeNac64EJL96eaGT4SQ8JHDtJskMMnnF45uhtwFAv7Fds",
  "key13": "UqaxtJA9TY7yyCvo6damS2seQzjEiFJthzmmGngvxTQhmabrSkTWc1yKvJGMhLa57EDe4BUE4ZbZzoQAC63R38v",
  "key14": "43SePjHz8mcRPaTbGovapVPdQJRtAvgXjqYEvnryjkzJVFXS9mZNAnSL8SLwrfbdu4Czkq8289tJ85xtx7qVQWi8",
  "key15": "32tCVqa74CDaNd5Sh96QE7PoMea2VvXL7EPS7k72XsuzCtPjcs6jqtPiJsg7mRX7ojBzuHihh1f5WzuvbegokuJJ",
  "key16": "2cDFckujrjXwLuFSoLd1HzaScykoNE1pe5fRYdmaxwVPkcXqxfB1YuQBYv6JdNxK7muvE2ghnbxu44n16Bwc8PJm",
  "key17": "2Xvh21zwHxmhhUAFpEDGXj4LZeBFvjiAeAkY3oQKKpfYJwwWURbnhK5pXL8D2xJnaytUiy9sDtarumycMu1UiaPX",
  "key18": "ZEFouVPRURhYPjXuui271D6dBkiESSM2BRfbghV3AFtHcfBprjuLBLFekyp3Ub1hvSkDQEpiYrMne1Jwzqwqwkz",
  "key19": "2j93HySE4KrQn9hGihJ3xP34zpmrFc2arJ6n3QWVtya4RWyChe4x5j2DiuNpkz7wfoX5UvSoDRa9kBytgfHjnHe7",
  "key20": "3YfDNqzfGvvwPUR1z8DQmYsa4mvHNb58qyrXiL6um12cBTHiahjqtshbrHoZU6nUy6AkeevJT91Wp35vTQzj3npH",
  "key21": "buGcy7uP2UgGSpn3DohCVJCQBTtXuJoEccx3zS2rNtPV4N2WsFAjdRZBCudt57wF8uXizs4HNEnF8uajy2M4Pgh",
  "key22": "3Mb7YZ2uJ1Mg4fztrZMzVZeJWYLReeniToZGUZHJe388osrw5TiqsY91xAiZXYkzNHYByRH9FVoHh1TksJdFeUSs",
  "key23": "ag6W1ksUd51opmxTvfvePwK9A2Lh7ABpNpFviRfvLYQy3jnu6gpRX5irTMtoZF36pgafJZsjEBD6Rn3zyjbYGcz",
  "key24": "4VH94nvZHzyMeTruqvfKMcgwWoyduQJXqHX9eo2Kn1AUs4SapmwkKe6TCFvxoRkg3ENREPX4tJgQciXmR2WnWkqg",
  "key25": "3Rb9oe5T6uTNkvMouHdDGeNuuJrJCYWRH5XLu3KTEg7q9KP6w5S7XBSNwzdDevtnofMuJUvKFkCH1w1BNZsBnBJo",
  "key26": "5yw4xLhrwtFTLMgH4qg96b7VVtTuLtC5JtemHKfaGP2gqtWoVJazv1QRgBAvvABq8ivo9VEoxyjULNUJKaMFDAC",
  "key27": "r4294iNMyfDgmQEDFeknWQBpy2ffG6FkpaxAQbQyJa2TcrW3JbGBvNSrNXykFKQwhFvpm1JCYRN3ueQqxhEUdhk",
  "key28": "4oQ3CeNrnLQJj3XqZvV5QWC6u2yB1mZb1REPFTJaax3orDH5cDDHpuP59SRd8vfhcRRvsVdZaRranfLDiENfeCdB",
  "key29": "xzRKxLCbZ14zf5nN2x3utQvwx8epJcNR6QrDgjEpTFshJQ34ryAcWxWxdDLJ1hvrjG4sk7TiAkZPy2VoJGt7hQQ"
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
