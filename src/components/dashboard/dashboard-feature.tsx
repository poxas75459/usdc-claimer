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
    "66rEkyWUCNJXULXaVqs69TTHgSPGkz2Jzu3FD6GF2wCbdSWY9vMxhcfspLGTk7T1CtaJ7NMyxfzDMg6vQt4yczyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZZRmA5dQ9zpEyaEQKPJPeqK54AwkHiWeeThanZNbMMc1T84GZCNDL3VpxYGW52rm1iyoNLVzGAv1L29EaHGBQD",
  "key1": "3LudneFwrNFR655E3rVtrx6vCRp3DVjnALoFNrEXB2nVNeaFfKFnCAARUm2fhDwt2A7w1am3em8FpMwEDTMrEUBb",
  "key2": "2kRAZzYqiMBD1sEB6cMchQE1zMpk7Zj6QGdKKAzcYEvYXoVxKEQz6dBSWw5Drp5QoExPAdG76E4nSupyeDwo24Hy",
  "key3": "34VgJ6CYTUXvaKFqa56fEUzYNruKbMmuh35jDdnpoUWNBa4hEU2G6kC4YkrcYNRfdaAdBNUADcTfzFz5agRsCqge",
  "key4": "34eVJLmwbZmxFangwZMpdzJpEh7TMqmhfkGRwUc3hXpj4rYXVykwvrnDvnUr7yxVtGEXsTY9J5SiuJSAzXBf9YZP",
  "key5": "61eKfHLZrHTZCQXHBhpH79kii6fJNUBWQMdfcT4VRZbv5UsnPtwbU567NMaF3JfkgNQMi6BvUeRoAShKptyh8Bxp",
  "key6": "cKu6tQDFd5zaueV7gWn6i1yHCJnCjch632WGUYPpGBoWtdcsH6VVRPQY2w4Vzy3DR5CeGkFA86SN1yqser9rXc9",
  "key7": "G26Pt4cjrSnREXW2kJeagC4Smk7TZAVioEmRCSgaRpeRvjXnHPaqerGQSHHKc8b93nR97sLAYjQj6AvGdBNKYiM",
  "key8": "CVjtVaMFrXzZDzq1bNtEuZgj9WMAai5EiLYh7FH4DwcKcH1wFUGatg56ejMbuxfLfPPbB84AcTuaLf8bx47CMV9",
  "key9": "3SoyHM34qfgfyiqxY1zGLrG85rywgFsPUGQv9sVRHfdtswik2fKerhQTACPjicDcoJ5ZFxiLBJA6rLZERZCJpL2p",
  "key10": "fogEeMZjpxPuuktn9uRobMXdC3ExNRThJBb83T6mRU7AjkLG1uUvx8HQYdQNLiiHaMxpg9V75PJydKYjff2gumv",
  "key11": "25EtSwu7T73PHgcYrSGtvkxsRk8sRCg65xK3hFJ8LUS7dzfudpaUugiLpNWEULKMD3GBhLrHqzx9342Wh3Gydv4m",
  "key12": "4BUinnChz4hTBcqjsmuMHdkMpfKCKA2UFhhaw3L3y41GfsgJMpzDWTwRDkCN7HqZdyte1mogSmpKM3hMiMQqzmCQ",
  "key13": "VmJFLq8qq9ddpcsMr8FMjr2nnzSDHW18c7epPMtXQoPFNHSCUiQWdXgDyhnjm3JYTZWV5TwdsZZQ7SDPrvBo1Ly",
  "key14": "2CjD9DGYsS3mPTnTeno9Cdu4ddBbbFf12mg15s2AaSSEd2pM8zLSym9sV2gaPkufth6CvAYQ51Ja1c4sZt22Fuwx",
  "key15": "55CLyghTMMtLTe8g6ApPfRnBD7EVG9pW2gAZdda898gGVdEN29RJXtamHxHoMfJu6W2Tc2WHAHkTJ9x2pYfDFHfj",
  "key16": "2dZPpChod8yR17pzEXn8M8NRspzXaGYgrovUrR5HntUKuBdAU9udC6KzJnTtCqcXdVSJYsU9FphuZ8pwWL7q5qqE",
  "key17": "5wxmSQk599g6rqapD2XE5Xw1pRmUZxePitUYKgpRBhgmR8pQy8p8j5q9uQ5WHB18cquaKwy229NQS4u6kyqVbGkG",
  "key18": "3PbJKMJFFbTXCzEX29VsKPWaU63kobtYZNDVnUmidzzLKZfFMAL1d4gujL8VW3ZknazMbqsskneGwpecD6ELpxz8",
  "key19": "68PrjiR7uuYBZQwfHHyfF843wCKxw2H7EJphqPwVUq1f9D1bwwCN5EBXbh3rLmWSem2EARno7e7pcPQ7CRo4zvm",
  "key20": "2S9PPvywydtU5bsV7CkFHqoPi6svnUCe9mkBjFKn1mpoyrVBJKYwoufoxjAGEGqGchN87D65mCH4mbV27VQR2nZt",
  "key21": "5nsZ77AzTwnHteLput68psrWnpvLEwBeW1ssCxDaNhTgnjF3RwKf7zMxDy2RXyUU3wGuH3NmbLKnzppk59pjxW3d",
  "key22": "36vJrpbGyvQZyhoVwYbSjCScP6Ukj9DfDdew2WxRLRsRNDZ62Nq6BaWU2ovqdoUZLnCPX9Mx4a4Z4fgDucFCT3X5",
  "key23": "5mjckVUk9gTDXXfB2jpdRTM2rFV3HGvsbzew1AeCkWPiTHZeA4go653efRWDZXXCyVynFiPZ2bompijdbw8kJMXf",
  "key24": "3rwDP2W4ca3Hqdq9HChrg7xGp6A5iJpayMYbEHTPEX6GFKv1QEpAG6BWDksPFY6wvwWrXBQ7VwF3rCtfL3zXuYf",
  "key25": "2nDdFb3ss2euom4Xn4kdKgtq9ckdAmTrLhsK2V6rE2W9XkjKZ72fsgYB8ak7TPA4UDhxUwQZh8CHtHNyxEPQt3Sq",
  "key26": "rKS1ms5NA2ifB7yfrj9wVbJvw5HWALVdhHf6fa6iRgKy8YpV3TGfadCkyoniAbDVesd7V76bTwXHWLsKG5Hs9NW",
  "key27": "4RBcbrNE8PdPJKhP2WSizadBuioGq3aEjdric4EFFYNwt3LamKwrWJepLFycCWtYGp8YQWSz7cvtZ6w9Qe1VDnfk",
  "key28": "4zKnNJA5aVrXa17s727rGzTvwaQYm8tYDRvsKTtXoKEviZ7S2gCaiu5y2r3QeSSp6cjgnUfMasSTsxobLha4HZ3q",
  "key29": "3PPGXuJcQA4CjKoQv5zCHKL6UsmHxNiY4P146UxJ72UcUpZADQRq5AnJBHyYeaeL6qByN3bADwdYJCUE7aDCLQnf",
  "key30": "4kx8BueDPRni7ZVAbCBJRydy17UGU4uA2W8SHYBVNo18KeHrG388KfK84pLQeu6XzAtARX9JbqJfNkv97Li8Y78G",
  "key31": "3DjT334eBapCyR592EeF34hyLBqYnwJK7bNn5zWScLrwAjyYiRLSPn7pZmaLDYG49oNRewRXuEmiT6e5GFdPa9uV",
  "key32": "3vU5FtZwyLRqpUno48gofLz9LpE8sdw4Rf7U1jy2iJEVcszscJpKTkso5CEmhgDXzkfPTi9LPGup8tUrjpdCpRAx",
  "key33": "4NZFurTapC9TUzFPskfz3wyDqpgUeLPM36msqNgXbKK86DWxGVHfwc5vnvYFvx4F69nUG5i2TcVThxxgu8inkiGA",
  "key34": "5CrnykxMV1S9fwcY9f2stZBz7e9Pn4XrLK6Q9eQb6aWSsG75AnXeRoC51pvR42HM5CnxiSccCXzq5QFcjLMnputj",
  "key35": "5eGGaiJB29sTMz3mjPXYdxMCTgscgdwAxjbnPhFGJZ6H34B3wQMBbnqhzryL6ENSocVnS13L9Q9sy7U23TnpFKMk",
  "key36": "4mY2VHHSC5SXYsCefB5EuHu95E3VfyLbwRqgKeSk8JvvKx2BXGpfmurxCeh54E5ahfq8Vaarsn9my1gpPCJsxwvB",
  "key37": "4VPqqCXkQwf9LGTWYwWDzbRgAgb6P1dKf8SZsUezChUavWr3GBpmSq9QK8342dPjddASbcaXpDPEZ8LmKDysb7DH",
  "key38": "3eyzGrg2Aoda2YgTgohHS6gWfopaPzLAJBueNEeRqQKMcfxPMxekLNELKSLhRd7REontRZGE6d1Wao4d5BgChdsG",
  "key39": "4Q6hhDmWnAVeabsfnxbqvvN6awGQ2aVQZx9C2zXDT9Hru3Y9BAFrUzCaNJmd4hCfkHj5ds491Z3pzv4RCbN2awhn",
  "key40": "4BMTp95UGsPBLQc2UKx6zxer9RCk69Gim5HoZvMGUfdF3uqC6bAvCYtV5CsXw68dsm27uVJctEkpPS9KmPTACU2M",
  "key41": "3LRcfgVsCzE9w7uFEJNgwBGfxqpQavw95HmnWyUyQgzq1kheGt1mpJugGK6hwHEoCBDBst6ZB3wiAHcmMbcGHk1L",
  "key42": "5reUszWXchi19UzTtbkSBg4Wz1bEDTwv1sK39N2znWqKi2zG6QNbYUXRc6Z69Jrtu7dqBcjcXnWqS15DLbeWKBmE",
  "key43": "4ojESThGkqmU7J5e9Qp3yKVvVhP8q6WCS9Fz819H3EjJPs1iAyqwkXHefQTzZHGiFxswEpMKd8gaoS4mwQhzZ1Ye",
  "key44": "4H4aPqy8QRHiz8oH64CrLavC1ZRkUWAb9g3tVW9u6zoFYYxf4tQ6accx5hBDvybrLtkwxEHRDEsCLDM2FfeEBRhF",
  "key45": "4wNmk7C8P9Jrhk2rMV6e4miDuDF3ZsZxSkMm9XE68zjuKQvsJP4Jk7bFCwfPZpv3TBpiehu9tNSPHy4q5mD69f8x",
  "key46": "4o1rfTbxoCHzXnokhiTq7S193LfP8AzTWDNvWJ8h36XyAcePtpweAfT1FyCFk5w9q8kwg4oM9VqHyLUs8nFXN3j3"
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
