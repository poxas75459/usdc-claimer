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
    "2W2And8fXrcAk7rYhA2WvaZSQMsKcAixvdv3mXCTn1UH183Z4zfEoCHmzgwQ8EGEH7LWRuRavxyykw53Tg8qmFaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o1qqVBpXBdGEBCAENhkqSRpoEKhEk9qA2FuDKifvwVB9rpgTydJ5AJ2oFmitUJP985EeVQNAGQaCbPq68oxcsCH",
  "key1": "88mgxsAtYqb3G61HEtqAJ7D7Q2rvX4zeLvyNVoASUXJManxYnFPnHueAMmFWJPP1GVfbvsXMXwn7tXsPQ9oFByN",
  "key2": "2j3ghVW9SpLsG3KhH1fYCiMPRdeRS3kYwNNm31kSBsY6WtmZVdGcnxoTML2bE1EE5WVLbsdVHuQKuBxTre1KBiG5",
  "key3": "4BaZYjn61mXopcvg3Y8f1kzD4jpnWfazvmS6j6cUTf2saasRPgJrvRsAqLPvw7UAnQKpfxpVmPkgdUGc8CaP4ooW",
  "key4": "4SBS7gWfBXhuZSbo8NDQpgNMjprq8j24jaMWDev9Vy1ZJu31dHBFD7EbBxqw9jPogmu8cSkp9suwfdLRSdkoBUGj",
  "key5": "4mjN1NLo1A9CsCGDkV2F4sGLqQzDFw3AnKMzLkBXSMpePF1wXb6JhHYwNUkU4Le1BXrGBJGqEbA8fBtiRN8TNtsJ",
  "key6": "4CegCQZ4HTLbB9TxHvaxTquR5M6mnuPZ8Edu6gX8iJoCgoN9YFmjtzoFj9F1q5mSX2DFxzuEuky5sknKiR7fZLkw",
  "key7": "5oMctTfFqhRsC8wcU1rKVV1CHSsgPSHKD5SrJHmqYc12M2AHx4wMbmJsMdxSQ1AhRsxJs7B1mvPewfKYjw1hEqzm",
  "key8": "2unzF8YEg9ePHtq6pZdgbiiQgzUfxkUszJTEwyDgv6abwPgrqBtAVtUt83i6is7FhurpNfitbFC8KPioCwvCgQm8",
  "key9": "Wmhx45zPtHF8PPzyhyyYWAmb8sKdiyCbDpifByMpDuLgrkgaDyc44avM4WKTB1SQSESDPBKaAsMsYQU9YudJNS7",
  "key10": "3whg2NEiSuHxuLKDtX31jB4pJbhEQj35pTqX5XoF3aTTu7ywiiQQAD7MoaTfD1zc5eNeTsbtWJemWVNEzkFA2ebU",
  "key11": "44DmzNu9mmJiM79REd4Ww4GzMe7xtTxGB9jkUsLkmScP7NRKzdyARK61CTgLd55nAEnv8bXMEeFGzDpdy2pAYVqt",
  "key12": "5Z3shPRRDRrJp8uK3LhvFwhDv7ZS6Z64dnmpCxzeT1b7cBSuPo3Xrqoz8qkYty1hNccXHgbqzsaz8AjoCo5nEBNy",
  "key13": "3dfiJEqR6uCTCnb9oAQ2hUxRGnvbYsLf1iMpDr4zW4yUJ8Mgdeu4GQXFNqmhq5fcps2HN9Fevb6MeuNofriehUmc",
  "key14": "65LBbBwg1r8jaxUNiBeUGRu7XWW7kM3Up6jnjDacLFh3CXvYxasyRtCsYXQbrnyaRbpnoA5xssy7gy4Cv9BGBHry",
  "key15": "3uN8A9dmssxAzA7PLVLPPVPbTL8W2gTX4jUYVPLj8Rfg2j2E1DfAQooNhRp1CGoqAQqfzMsRCZrXU3ZaaHq7X9sc",
  "key16": "5dB3EzPv8Kuh6zXqUHxa2kEQodvXGhz7iV9cYQ9SjM1qrnmowSaNBParUjMXN6ZZz91u6RKePddzRJxibqLPwNj4",
  "key17": "2YuP5APvo5JJEkjQmGjrKTMVEUEpdVRzkJ1YrvmDpYuNwFan7bg3R6og7vQPdwcovZNAuvweDt69qio97ihoRzon",
  "key18": "3C5pQjwfaXy8X5WFJjXhJ79pVVAqP3yk7w3NDPZ1Dxabxm4pFtK1twGL2sGvPf7Y1z4Pwdy8dsajf3wM9UTVWWkN",
  "key19": "39RUsyD8kFVpFDk2ihUQXev1tjZmHipKVDqn9pYa9nqWo1pak3pCQrncywjjQ8Ue3eE1JvKi3dvqNRUhGLNbSAWn",
  "key20": "5bT4avPjAKnLiBwGxKqsu9HW8Jtc5pvfpxRiakHLW3jq5T3ndp9CKBpvsxA59RM1uX9mLjGGQb4TdU7BbqLrntw3",
  "key21": "3WsfK9wEUQntfxcu373rswDV6tEoVQzwTK5N69qBG5smHXWTwgqQsRDD8Cd2iAnBC8zo4HLcfskwJtcR17WUT2wS",
  "key22": "2jgiZU5nfYrAo271UQfCx9odHB73jUqXWsamNmqJPP6DSov3Z7Cnyh1LrNA9wk4Mu32AFJuJngvHoHLwGbDzVw9L",
  "key23": "nrwNjm2ttdXkxe3419hm8GwMnnTKUFLBjUzRZqCS24B3Mtp75f8K6Cstv6Nte1s3KCPko2mtSJB93FmzxAWjiFF",
  "key24": "4B7b8Eex8jfF7QY4DoZuGJmSYbeCtKywYYKN9E7EszCkXDpA9jnvp7wNakbo58bNAzqt5975kT6ttXDfrhrYBR9A",
  "key25": "2hKNLto6t4CrsQiiq5jPuPzSVQ6EAtTEfxyKLyNkfdm5nhCirJ3xA46hx6j9eomZNfJEF5JEkEFejqBeMBHpRey3",
  "key26": "2hNTqxQ17fc6yJoezLqGuDHuU1AAj3vWCFzRz1HF48J9gAQoVG28BG81EhnpEGYbE8zcJsDXTiCVjGDrubEsZBCa",
  "key27": "3JV3fabVaYE1ayCi4BLCL7Jjh2bmWEGs24fg1WvPLE4E7CLGUSD1hHzAyuM1Nnxw2b3snP14P6sWVt71fYnK3v8C",
  "key28": "4YBirzzFwgXppfG8RrvVBfVz56EWNgXb3WHbRD5PvLrXJ1uEPsLu9nHKJ11oGy2b2PXHY8CSq4k9Pdyz5bpoKXRj",
  "key29": "4xKccD621AoQjhHqSdW7ctvgGDPocow1VBPPKsWMtcHF5uzsDXJGJy5VSaeKKQWpQqdbgPYSAFgDtCqj5gQMg8ar",
  "key30": "8XwMwZFbqtvwSEvgQq9pCenh5wVN7f58J6aHHMEhFJHNGEnPZtRv6PjPRKC2Tw52HVzaT8PnUKPUNC3Lo5WPi4e",
  "key31": "2P4kkThfzw3FAFYU4b6qiBRpRrsLytpMfdC5m63qutaZAbfGnJ6TJCG1QQVGasy79dCY1R4bwXKVhfaAJRyZsuke",
  "key32": "2iesfafJ7cjSiLpbaGcBLXdtSUwanFt8YMQPSJVx1dDxfohdGyLVR7KQ6va7dcgCU6wNxLY7TAD6mxPHB1ghNhwf",
  "key33": "5zgX74d966u5kHXwETQ5z4hTtJ1ancFNswuUTn43UbgE5UBPSJcz7nvBWnm56jeJmePD811MKAZA9jucHk1WeCfA",
  "key34": "5xuH7iDGfsf9WotWPAHeaHTQHj5aXPpTWBztVAJr4yax43SjgZSCdyb76p4C18NnsNvPazx1huQ6VDcZmdTBBTQ9",
  "key35": "4mHauUeSuaAiuHue8d2iG3WEpmkdX7UvUSxdpiXUKK9hpA3owzQusabckPyUwYK7WKeh6bvs4hCq6g414AVL1mKw",
  "key36": "5jjwqB156EL1SD6ipJma5s29t5A4LjpLkwjSXUjoDpZxnmbn6RTwALBwPCsFWTWbykcud2gEm9nLkwodrF1YVwax",
  "key37": "2Zb8srBBat9SPqoSPrqenKHLighPcTSmWciLsHzkcdEtd9UKWEZYtHpcELHWMHh2DynaERxA39Xbnc22mTLwAfE7",
  "key38": "zCfUVZ1vUtCY9fYzGA86cbKkgqdBfjx67HrLQMh1bMp3ZYqvQQWFvTSQAnxB8GDgtaSNqkm2WBKyqrJJn7ffWZ3"
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
