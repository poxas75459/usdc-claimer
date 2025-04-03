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
    "3r8XL5JqDN9qGLLS1VjYQh4A6WbC3viFkE83M7GQkfhoSV8VUTjT7oh2hFyKjZE2BQsX4k569NCAovagXEnEG2pP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MTDVh45TJ8NiXzL5u5hPGgStE3iEr3bocgMvsz1yN4TGnMJ1fAxQBgEMfc5sERFH78FBnyfJnZsiv87wyPEX6Wd",
  "key1": "2VZyUmDtDNYAYAy2ABnev6bkLJozLN2cB6Uj415MGMpuHsrxPTcxPenUoZBsCEuFUjph7rwV9YEzda8FYhQp2p4Q",
  "key2": "3JP8RxPh4iRGiVZ5s9H9YqfLVetsswMYsSftTVUGFnKCeLyCFJWD6dDaSjPesKUkYTAoJzCdPdmK118oUK1ow7WY",
  "key3": "3tLLLZcFdHn57u5LseHP2vrLngRTSZK1gU4pDrpBPMf79a4E422HBUvXuZE2k5goSnEvkR4L7RzLAcyJCz8ejUZx",
  "key4": "2MCQUKb1nL88n9cn3LoEY6UfkKtmdNyf8Qj6kNTjnVoVeEFbkzDsB843uip3AZ6vFP4ofGvs3DktjDmzs32BcEAE",
  "key5": "2d3TbqKV7iYUEHuusYEJXsprV4s1bVxCR3mXACvkXcFxM1qwmofcqjxQf1bgUKbefErUvkcgUTNcsucexh8hpwbA",
  "key6": "5kpqqXQhuJBKfRPdSKffCjsZjDcdWWd2A6xozoupF26x5nk5BRSBp3XrGRFZPriasvgMqA2L6nQd8PKEp1fz2kH9",
  "key7": "2YNesesDX7FiL4eDak5UaRMLeoNrUV4b8VNoyXVJC1ynpYdvjf8FRr53qUhNzoGAkKQXrhZHL1xBBK2phAz7S15F",
  "key8": "5og1AMVz152s9xxYtjK7CZKnyNidRFSuTV8b5V39rPs114MPVcQkSm44bKox3ZLXd3R4F1kCv6Px58oLQww9nWu",
  "key9": "PRpPqe8b6uPwN7qc6o8aggouLvcSHmrQ5pMigb4f33ouyXHrsejREprtT9UXgY61QtBMMN9wdoZKDeAHLbxqVtg",
  "key10": "4RF5829ftWc88DYYKwYECcHvQzmMkDqFdAdF6qnSfA86BvrthofSuqojyYSTyXAnqaZp8Ysbhk3LxdvGQuHRsNHK",
  "key11": "48MnNfsb6XaSRsuHusneQ1e2uXjt5fVScg7Yn66DApxTWyhaeXgnQhVaDGzpqhpM2S4J2uceKCeWWnxfNCUp3sWy",
  "key12": "4C1uha9kiB9QVoncAoEsirk2ijZtfYvpSMp5wRLyZ17y5ZJaPKePTQpgCxHjmwBYaxCisapAfgdBevSoRWeUYzJq",
  "key13": "dQvThvqX2PaH3ZtPGvU8bvpepXbnTfa3uppAVgSJdaPowfXQW2BdcQbBRBGR2ftC151ceavyNGwTvKbMykDkgSW",
  "key14": "3ND4EHL8U8KM7nEFejrtdyKDHyAYGQCqKC6cHyJ9F3iEkSHukqsnttjTvuYndQbbZWS5V91VrERZ1NapzspgydUR",
  "key15": "3BB9oAmdpAWG8kofqjRaNBkrFsffLUs1WMnxdkfgeiqQ2q4TSxfeyjA5HNYJ36hUkszMHJQCb8PDLjNEthku2W3Y",
  "key16": "MjB7otgXAVwG3foA23nqWVzEi9GnqVaUiPkRpJ5NjJBtSebmk15Kg9TquZYaNikZ6dkhEpeT6iSSzbRNBVu3Ybu",
  "key17": "2J2hj735bUQiUAU3o2f4R4XJSbsHJ1Zj9zxuvdpHBjY5Cv6b6sNiMU4QNQXdxuEByLcc1YC24vZqht1EPzcu5vis",
  "key18": "yHJQ2YKjuHUtzgvNgEbMibF99L5epU4RHaZiiCEzGCu65MBJBDiZypLF1ZF7eVm7drsQbUByqTWdArMSMPKtL4Z",
  "key19": "53oZWQk63meS1aYVKrHTuMvGAsAJELdWxxqSMsuwSLFa82ujGZ6PkRrYQ2xZPQXsLt2yveCf1HsP1TJNM4inb2ki",
  "key20": "5hxWcieZU9ZqFyjeozcDSFdG8NaZXCQqCuhsDZh8goGh6hypmox46DWqSeBHW9Xh9nNQXZPKoRGz7XraapwxpYSr",
  "key21": "42c9CZtbwkv66a4KPTshyxyHStRREzQLo5z46fLYVpmgfJTbpzc4vc1hd2EV83edwZiejzDYmeftc1y9vNFRioyY",
  "key22": "5BdYxgCt4Hb7k6n6WdXWq4K6DApKntPrT6ZWC1tRGNCWbjFyaGxg5Dkw5FWmN8H2Z8GdrHwXYvS8KYXBBF8k7P8X",
  "key23": "5iJ2uGhcc8qXYkN9NAc3cSSXRPcUpXgSFtcjuzR3BouuMit3bWPRqJ3eY8rxjuuNWHG1ciUH6aQ99AkXUr4FgXVj",
  "key24": "4uZaxf2DKZpfD5ARUSuVp8hZQff4vSXTGKNVQXMz8HUysVHfLykHeJXFZpXStEnK6KAnDajUZHnQzQ6PiGNGFLpP",
  "key25": "25pwySB9F3LeM12bVyUjctfZ9XE3S2WevXjbQbw73gmtoHjvKem9JCBfGsHifcszkLMWERi9RAXckJuzfzzPYZKc",
  "key26": "38rVkEVUR6YmTUutsKAXjjbveA4hJw16Bopqa9ybMvCYBrdWY3zJsxj1a1ameZmRaikk7q46BuEWCcCUvuH8GvuM",
  "key27": "5Tu5tL41siZCeuvW8VKaRBQsd6HvjmgmVCantbaD4Pe9yQaNksrkF5jcvneY3CLMxdd6inxfwhHEcRGEnMffhf8b",
  "key28": "37zGL16bj1pgomgpo47uHxi8sseyaDeKPdLyFoK6jPj5PmkUTCQhH5XcCHyJptyuZzSEd9nkj3Jp2nRc7vQiCphi",
  "key29": "4bLEEc2R56YZd8W7AcsQhY4LJcc2ZqrChoaqvVZRWX1Jrvh3ViuzNEVEvvFxAbDVFQpdSM8dzh3kNccRzmUbJHo8",
  "key30": "4hbVyxRE5vgLg8wwjA8BEYqSAZywGRDuCYu5aWht3CL9tGuQJUuWCzAEsuuDNGAC3zejjJ18m6KZta4A6owfsNx9",
  "key31": "QqPRTus1UdBb7HA4JM8CFSYdBXc4WZvfU8VZmzoFdRz6wmUEM9JyuhTZ5tvM7tyNnPNiR33xDV1K5GPUgCxASbA",
  "key32": "4u9GzSGsVcrSsf1U23vB92rSGyG3tS83bfUU1BRXYvLpuZT8hv7PCcgqTdGByeEcutSUf2RuX49QQkwb7Dg2Xmou",
  "key33": "5Fe5PwGw9PCmXpraaFxGdL2cBA7FEBEHbURUaoBYST8N3mtWZVnGyDkH1yGZNDdaAtDVWshQLzPmpF8nRMHLEonE",
  "key34": "552RA7xbuhjRBaWj8tJep22ZA37pggY4KyWtkUsy7AphX6WX69tL8e6corDMbx96ceBmrUNquxfc3mCGUjT5ZH8Q",
  "key35": "258WatmSYLfGDhNom88ZuGJHzCWe1Xkww7abeiGCAPYBZT95WQZnKYbLnQW1bBtBnMqvnQ7Q754ZRsdM7xpRvwXk",
  "key36": "2Hs32LVVaLuxTfWLT6tTsnUkYcbDT4ZawojLikNz5k2A2dmBdraWbGbFN24j4uUfauC8B4CnBVpNN3JaFFUygD9o",
  "key37": "9jDvZBrSibDCGZGJxByq2zeR1tjRBR8fqVMwmkMbpfrR1Hugcg1ViV3EfjCmZfD5GkxvCssftpe1hsUyjmfY9GB",
  "key38": "2zDNyMcj9SrcwmrayrHELRz5P6JAHhUqW5Xw7uSvRpBeE4Kr9wTD85Ms2uckKixXVCp71b19tzigQMegjGwjxXhe",
  "key39": "boeaPUpzBGjCVt7svD8JMu2L4nXjzw158PBLFwa73Gv1KT4zdKQsqdodgMbwnCWnHhvw3d3aPszRaT9t9gECbkK"
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
