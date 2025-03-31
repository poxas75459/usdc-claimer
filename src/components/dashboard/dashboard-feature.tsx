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
    "5SAwnT4rSCkKafBwnzAnQDtAdRjn7bD4aV6tkhfe6A23dhXbEXmNtyMMkhg4X8yDx41u1vs5Z8mSbD9nahyCbetr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XzSHiGnpEJyLzocbgVTypn5z8pTtjvefq3EVMcAR84CsgXhqqhnfcH1wGCBSWpxXQX1se6x3o6DVECtnj7YPx6u",
  "key1": "2nVhr8JjEfqAkCe6oroNKveLVgYZJGfZZFgQRR3RCLDqCtTjkQGuitUcPc6EDYQRRJux3LjStswKGY6uYR1twLd",
  "key2": "KbqiPtXAGUp8vrRdGYgKEHsruLaqJxSj79X3PdZg7TDwFz6h9yeYSLEDaktvTi8sFx2ThYDSFPiAQEsf8sxZWQx",
  "key3": "5xqqRuCLuNv6aEiqVwPjNehLNj3HYhYeeNGSWi4aJze28wKwHBeFrZZ3dMGEkcX6XP9natBddzsqTqH6vM8UzHEG",
  "key4": "4x5kA6Vxg4kXcbLPLE6TJZnBUTBZwN8AvcZshJgNsYvvka4SXPMsE13BR9rUKnrNzrvdzxTWCS3bXYXVGmknojrb",
  "key5": "KpiNzRJw2pQEd9NSom94G6PbbugETKUrmfHBL5RnqH1NYUoe2T8B6yCTVkp91GMAxWwRKgaWbFZvrfQx2J1fLix",
  "key6": "2z3eCVyuRaqoFyi1HqDjqdcB7HFruwqeUCKSaxGQAmVGeP8ghv7Bwu1XZCpGwzye8JC4Fm3MLALSPJ37kdQvoxhu",
  "key7": "2KobN1hZGbKR4WKxb1pdznohnGNCoBWrXnxW5vHpwW1bsk5Q1qT6GKEh22k9UgFwMfMUvVSF29w6iGK8dHPEcxC2",
  "key8": "3DjK6WmAV4PWNUbL3fw8tRLFNBXeQZZAVNbpMRb9XN4ysPE4iVZXeEAi6LkrUxZDstbDGvcRtVcHisBSBfQEvof2",
  "key9": "36P8n9rwVHCFz6Ld3dnrnvQ5qUeZ3oELExeNtiRKquuHnYH9X71VCUvXZdXeTjDkdXBJ6bhh8FYJeTwagMmcVAcq",
  "key10": "5wqSvtbxWTg9sLUm3mDuebcej2doZPP51QomCC2EVkBMhwRddGC4Z5rxCB2KSV8QDoiVhrSi5VxkQmXyeiMNUkYP",
  "key11": "491Nn3TtohgeUfTqnkMyQj46YKtDjNKuu9jPMyDa1Z7k6R6zqsnek3pZmBNqLM2MqAU3A1RgcDHgF65PzayhoET7",
  "key12": "3VtfxV6oQGD5BMWgGJLGvED3T5E8FHtZycEQkKLyDdWcTZxMC1v9eqPiv6y76TZWzPgsgggoYKBtNF3eV36SdumW",
  "key13": "4QV6ybfQDhiys7XRwm8fCAL5mqeQ3krf8ptGndWoZ5CRGEdpHswdUcMnM6aCdyms1oR9a396PfZW8qY36Le2SpoM",
  "key14": "KJ7hY2RmnoCQ8c8kvCa9PnakAtF6LgnsPpdR2ve8oUSDbA6PZpkw8q414sxCAwUuLSuWQYh2DofUsYKayMu6zfR",
  "key15": "3GXL5fiBw8wStftPV8ogAhQQKqe4hLFPRmNPufEyKLaennGKsb3HujCPNFw6MH8n8wLKa5hFy5piE727iGa4rVnm",
  "key16": "2aRxTdf36Wsq4KBbWZmhHyzuZpwks39hRhQVzB9VQGVxDfCUmD3XU3ztMAGPjiSWpKNB5WDUbj9WGVNWtYHQ9nFJ",
  "key17": "525DQariiCdHsnFwNkyo5Rpwe7phXbGTLXu9LGbvjgYwSeEGhXamKxGV6KERTirWU1nHeahepCwVocZhd9xYGp3d",
  "key18": "51fPiMMEyNW4TDA8UAKfASMrre1yt9XU7eRP2hu1yL3ietQSZ5i6s5dgyGKNWdptA8L35kXf3nFaoW8Mcojh6j7R",
  "key19": "4QUK8mtaZiJxnEGrqgqGCWALfVbpz1oJp1csJHJBy9KKLyMu2172yqikJrmiMeksaKqbw5VKsTLKHRatiRgU8iXb",
  "key20": "5Vzjdr6bBcFzH9DZ8mJYH8kGojDDhGH1Qd8Zf7ZcR2t7SjURFqB8R8xemoczdJtbzd5qQYh8wZrStHstJdwmKcLx",
  "key21": "4bbmuF4aGfAobX29GaQtrLYDNWHHEdJEuo3gqFToeCoCSpVRow988KXbfSrRDXYdGqwHE9cVTG2gXR9GSLpVNPqJ",
  "key22": "2UoYwDB2NPEEvwLWz5JZeEVxmXf8EXnfKgMPyUPPbXQ31y7MtrT39nLimfCC72x32EW4aQidKdSFXAhXNYAbPv7S",
  "key23": "3BT4CQgjQkiLPni65UzpekmQMvtmxZjMnH4yGC8Qfy2fvbuBXxWqeHX8AVFSm1UPpbXUWT95PJ9uqkHnBo8v512B",
  "key24": "3pQo8dwotCsdpDR8Cm51DXzTpF4RgGQQ5y6sgP2VhHhUq62XFDZmpf8Z2jLKfdzfUgtADfpC328xuMabEWfBZ713",
  "key25": "3zUz3tR92XyFhdUvhuob4HAgUZ12bMJbCcRbapmXmb1cAJahqch7kjPrAoH25a641eeMwuUvG9haF4aeTsnydNJ",
  "key26": "5cdoBiPWSqjWBnYjWXoXPAfNE6KZgyZQtqh2vP4eSAE71ZAdbFb8xRmB7PDFiCFYjAyWn9JzPFFSrHBxQA4EE3sg",
  "key27": "5jhtt2DQGBawzd74PcH75orqWExykQmhW5tAr7gKyTcL7PWvNHEXgKhWi2pM95we5LDEk2wc3N3hfczyrnsa1U6i",
  "key28": "5LP1WqJMAJn9owWDgfZgNt2mJ9EL7E7AZc95TY2xpRXRttJkYnix213VJtHCZjycSDVZyDA4T2d2FKSK84axCet5",
  "key29": "5tHzMVN3cVP4Zh3KysgNGS6ff8hVzBMzHZQA6utD1yvrgRoAsTUQp7oef5VQrzrZThGq82ovKdNPnayLtLhqxF4r",
  "key30": "4yBTZwsHAaupP874moqd1EHjhTwmUZF5K81gpHq3vRmqMQ6YzoSrP3pzLf4pPsfR8bXAbvnmD9YdSxXBtQ2GkBbQ",
  "key31": "44XRDdofvxQeCQ8p5RNTAV5cq2FMAzRxTdGtQuUPpm1rqKy8LB27gs9zUsmeHmcZhcb2AdX3Ke24N8kLGR7MYnrX",
  "key32": "37M8yZRm1WyKFTKZTzxwX9j2v4Rj1zqg78CSawcwvXpMf79KZRBRF6TTaf1MnWSKoese84dV6FVopZgtBSHwF8jD",
  "key33": "3txyg24DHuJqceqHMRrxMECbPK51rvpnhVaQzooLPwDGbduXQ13u4cFTJgdJRquBpRRudfjK1PFDKeEMepuEdryy",
  "key34": "2dZeEVr1wbUjx9qvmZy7jLzzYQgjgMGSEymf6hQHEfYP8XrFPbBxF2WbNJ6HqvK66ye4oeErUwJr9nFmzJ1XLQVx",
  "key35": "5vKPABHMWGRDr2ADbi5pUbXrU6SfP6U1Jbb1E6hTNaUGkTPfcix3QFwb2LuRCYMQYF1dq9dwfyL7ZFrE8knY6vg",
  "key36": "znkVaQayPPebJ8WuFkAexSQ2b5fbP8BwLY5C46TKZpqdEFcPxfTDJAHt2mLGyuEhZceesC4zA1jV8mVokXnDZzd",
  "key37": "48hpMkLfqYvmSj51xBZzjwSm5FDyo4HiuQkP2JDMR8gwgaJp7pcW6fNYzdaM1kW3GqmhEottTJX9k8Bcp1Wawhcf",
  "key38": "3tCxd1NBG1kYK91eTUE5aKpWYRsuQ45BPUsjQ8vQJFbY8aMneCWV8DrNkUHN6iyA8kVzkfXrz2TWhKDLZhGTNk93"
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
