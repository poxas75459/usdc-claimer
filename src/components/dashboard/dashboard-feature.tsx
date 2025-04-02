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
    "5bFvySNVsEFkMTA9prgW9oVFtwyqrr158SJtnesUaR9a68VRXdZ7FjGJ9Tp94HffLAPHB8ofVx84tAPaDbRYxuep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9yf3qLbey9iRowPsTmWD9qVMCDtZfXbEawez7Bvd3JYa7vwGpyXYpvAQwNdtoyoGoR1CyN8ER5vnCbaXC6EcNzk",
  "key1": "5a6gKoiVpz8Yo3ZnXUs4CMbNUXCbnT3VBttCQdPDMUQiB4R8ZHPSAy5jpQiWBtye56QYynPGwo9gNNtfAF3AMbDh",
  "key2": "4o5xUxQziaLEMt57Lrao4eRgky7cDLj1kk2i3oFYJfPXgSn6LtTn3xv5QZcK2sepoCZpM9cwzoA2jjARxofBa3Lm",
  "key3": "2AT97iKmeACBSaENkcc9eL7WPFtH4iURsPsq1rqcRTbbgPQJaqhRoADep3QGQaK8VZqn7pFFhDraQpUMQfrq1Bja",
  "key4": "47JpSpE283Vfka4x6NafQ2Na5BewUg6PYrGCn6VnxGgtHR4fXLBB3XHQik6uwx4khaVADNfA749wFVf7V33yNAYQ",
  "key5": "4jaSonbALzwsGqz9Lq6Mke6mo1XKsaYqWbv8UP6RX5NpQNisE46mMLcsvieQsDzTMpefiibsP5NeXYLqgbGe5Dqz",
  "key6": "5qPgMjPo8dcFu5iyGBWWr9uKvSbGgKPg2i12yBMvtrRhdVj992xtWmPyjzxWVDD3Ysf25BXwPMZ2YtR9qotVHG2Y",
  "key7": "2ocJbJ5S1PoeAyDSCEGhG3EE3Jqdk6BHa6tTH3BA2qkgf1VWrBztW4Ng1x3HjV8TUGcaThJqbGdHFeWz846jGwrt",
  "key8": "3y6kkiq2b5tAqSQAtUZw8GvEE9cFjeLDKFpyTjGJfh4c3XvndNzSL964uYA7hE8ZhpTQsFjMHAztps6EY2byiCWN",
  "key9": "63pBRBbm7kEz14SQ7TdDjXhsBKKTzdT3QnUEu4EVTs2y2D2rQAPP63vxDpMgToArq3FWJn5u4JUGH6BSXL5KmnQk",
  "key10": "3L5PwXHeApXvgNG5UGTY9uDj99az9fHEBBDZQGQdGdirXZ8hRuwZ28CFD9Ln23mKDgZCquN4cudssbadumGUXx9Z",
  "key11": "KdUJ2hgP49obTPXZD5xzirStoPKiaZbgjpGeViBqFqp45kaCw57Hrd27YoXeC5JP9cHeex1LoafNRXKBCXtoURB",
  "key12": "3nJ8Fosswm4mze2F1dpaC9TBZXNupGg8Y7cWHqwew41SpZcR22NLntLJDgjQSgty27kuswrGKt9zBho3NeXCroeT",
  "key13": "3PcFkfUTeELFWnscdykE1DMHwohes5YmoNcMB2hw1vBGJ4hSMcyqTiDa89EJF3R9YBT6bm4UG4haYzVBZvYvh4b",
  "key14": "52gMpQd48ja26ZaVMwuqwdvhoYURxFeY9KbuTnLMssmzgBEF3DstDnnEsKQ6eN7EfDhtjtByaLgmjx2MSgPnG4hu",
  "key15": "47JkUHFWMpcG6KfnBhA3YY15h7bGyDTWZ5EugySrrkKFm6AffNumghN1v1iJfrNgtH7G4XxkQsNovRERiaKMCDuk",
  "key16": "65yjzwix9suFfpwzeFTiE8WPah1yXinNNW1PkBzdw4N63Z1qdPC62thKKsTTqjktXt3BEEvZe4B4LZhEu3F1UBGT",
  "key17": "d4MRHWxjdJwkH1a6Qxc6i9oUKKRXDNn9qhEmpfqoct7zCXo6GyMKg2CVEof3Euc3774UGm4YedzrMGXdBBdfyWa",
  "key18": "3WjtMPCVkk5Vf5XNnnCCX3wovWgemNpYTAcRhkgQpGcfbDnbP74iUNpZLjeJjBeygzgWLjAWMCCZxjx6XtfGfSgB",
  "key19": "4KRH3Do8UfqjA7TFfXx5jZ35xcMYciqtELdTYzkeWQ4MJvJQCHJwfprSXSvobVBeiLVDSDTeNeGNvQBwSRmWVMA3",
  "key20": "2Hdo7mgXAnc4VhXR1DZRpsLmWnHmB3dFpJfFKJZYKg4ZEaRsyGDjEJSQF7hRWrTtkE7BF4ZfY2PhXTPQAbbNyBty",
  "key21": "2bVWsXHRNkTaLNQHMAg4yikWtKa3PeZg7V3d2tnkWxffh8ox9e8dcESwkjhcMM4VeSVWhzGww63buQQUehFTYFGm",
  "key22": "4Y4oKaomC6nn6sUHqqqNL4Pp94QGJePBoUnpncTwf376carEgP2YQscPqNM8j66w4irzJsNAkbAc6nVGn6V63nYS",
  "key23": "38tNhV4MnBdhSHuF8pEtuS9agn7SXwMfuxpVD9CBjwjYBstEeZVRzhawhaFaX55bxVR2kSHdkCpr7BMj4TVtVyjE",
  "key24": "2oFqAjdKVdpNxi11gcBUcPp9EAdmprbcARgabegU4tQYpnYJDNoCVYuyYLrTTJaHpaNUEg1cmjcpdhjoX4HE6K4A",
  "key25": "pWjNBSq5bUUehTsgxeBzLhgXmWJFoRVdKBbaZDgYACHdiQgJf4q9Cedgt86tGfTxjbAE84dhVGmh9giRHsrmKsF",
  "key26": "9KCwB8YExRTKsGFN2zosFhKB4bTs72WLd2WLmTb9xCSBo2JXQULDghfbCZARF3a7ngmP8rmw5f5ebmhZWru31nT",
  "key27": "2ZFzJXojy3FbL57cgejcqiPe9WrUsUzzGo7b7hbiV1uy7bMVyGAcJpH23q4AyANCh6uKra2zm45UHMcmCTJ8RFQF",
  "key28": "532nw1CCWpWTPgzhT8Q7m6RYp9pahaGHdThEYXoc4fw1SV53ezLPyauEhTpiwqqs23jduuex2W3NAquxzzNA5EA3",
  "key29": "4VqDqqN8RKDGwsmJ7rDLXQV5Yz7tN2rD6R3qtStMfKAE7T5X2q41ExjLSgfkTTsDj83WXH9ZuQZJigcvDxZvvjRe",
  "key30": "3eBBQacZHuVomhRYmssQS5SBZXky9kwcAwqwtiVWESLFsCvdpFR7UFMoAuqRB66yjyRP9N4AGiimhghLfChB24Ma",
  "key31": "55SG3Hmh1q9Bc3X9t8nGT3B7eGqVJj6gZxDny5kytVJeQVPeg1Hvbp35aiaW62NkqE3DCkZgVCXG5CxRnLhheNJ7",
  "key32": "2USga5D6jL8xwLNCywmi9wEtosJzrobaT6GWvxMtreEmnPwvRdm5daEVCVYGBkPLJA9Cm2KYkriEgKmHMuVvpZSK",
  "key33": "mEzDzEGnaxoxxnD1Sv25oL8jWKMSpLSUymGXfrFJFzqFiqASdPJ4S7Gcw8nMF2cVoB5RBJ9brePavSjoxyyZMtc",
  "key34": "65GE2hcW2ta7UDDvMAH2coSqENeVKqjGGT6bQSDd8PW8a47cBugAUZD7YGuPfwg1zvf7kB2ZpCBBEx7okxHt7MJq",
  "key35": "3J543gCGdJ61ANGZU3ifUhAQSTBBK1JnhNdB4RTxwdug4Re7LH4tsSB8M14rzU8pPTPM6n3ahhJWpe19v6k9J9qP",
  "key36": "3c8n7KqZTj8SzSBBqXV7Q1c1oQLFpXCVgbEfPhST9zuKVDQ4DJSX4fPcSHo7YTHoY9M8ze1RijbxP3VRLMSwmmMt",
  "key37": "LviqKMUjjdDDx9mYMkSFeMKF8WvfFxTm6gK1vNXH5NHtQVxvMZ5bddMcMmZuk8BR7RWFQGsfGkNRR1RQ9haVaVK",
  "key38": "jZBVsfwpkkTk85PVwn5F75z8VxG39EDi7sqUsYrEtz4bzmHrGP56WJKvj5FMD6R4VTfyssLqULQRKK2mhMTtVRi",
  "key39": "4zVHKFQdrDKMMQccZDYurneuEZ5RXDGPusfkkJccvm4sWwdBF1yrGwSouCm4vhHv7oaTiKkqr44TXuN8jZRK1ULt",
  "key40": "5engvzzSNqTn17DWiuc4eFV4mnhS51wBPHLkxFbHqRa6SQjMTaLCqXwZSbS634wH3Vzv5Zpw7sRN7BneXFUwWaSa",
  "key41": "5ZB98ndfgGNi6HawPrzaVH9dAKwgh5fZQF1TXBoUQF8zuPZSpJR8fY9EjyH6dvBSkJehbPhwjyYx2onZcBS38re2",
  "key42": "3RLxtLtBDKfwjNpS8cAxKLDgkdMSBVbjrhqjrZuuskbCNTZ59yyLpw9VsrhbhF6q46wniCyq7rKoUPgmnEBFEDgJ",
  "key43": "2Ey5ZZPrD1LpCUCMhSGXKf9uLvVndPDFiNqyHdBHN98AuqZ9WR6EQs5o1LP7wYWguEf6RdUietvNP4EDYpU82sTu",
  "key44": "4HwSqTS3x2w2TXR9uXqMM3ybf7DzQ6vMNDj3Z1uvV6c2dUgCDueozYVFfext7K7f5JH1BANuZtFQN2wacARc6vwT",
  "key45": "2saniv3ZsxWrMLbkr1b1HZQFBn4SiSyso61LB5U7KRWLmpAhJAV9qRLvrrk9LS9gfMxD2RngheV2RHG3rHnoWFPE",
  "key46": "tqfNGpDbeg6AYXA4RxodLDEpaA6U52TaN3g2rGZjgEpmQg6keX1x2pKzu11aYqwbekyyiorRhRpTZFhjChUVKvq",
  "key47": "3ByHovXFgkHZUq5eUxa56eSHSQ8M4pvB881Q4Qpvpehi3z2PHSyoFn8qiGKwi5xvM9GmCQYZF7qknQBARDm2yG3d",
  "key48": "5dea7FW34QqfsvwXWY1KgJnpHLC1bJFpN9mR1AcBg1qpbm7Ni44Cg8Xy3Xkx3dNu9LvxTZf1KhQcTizohT8SDo9t"
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
