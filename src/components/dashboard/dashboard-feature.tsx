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
    "2eKX9DTRUReMwhnAutkUez6CHXYANoGUBxneodXPF3FhPkkm1Q3Hwjh2W84BvzJWAWR6ij9PcRPLHwtE2L8U8Kou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wyh2S9iKJogJsESfop7XkUioLtCvJgL2jzWTPTpQ2CR4aBrbUGSMNXoyK1b363xazCUdKngRYb4bjFHnDcR1fdK",
  "key1": "4aHFjyVkLsJwPt3iyz5meyvZnQq2vpLxTqgAF3rvynKuoVwwVrRf99LZq9kw1pwDWdKbVzztj3zd96B5oxnC3hmE",
  "key2": "2ZqCUNuLH2FB1VgTohQLkgQenHwu4Ra6yrDagreatQwghb6VenYFkYak64p8YttGHFGvBGrPSf8JWUYW6itgPX9g",
  "key3": "3Xqqs4mkqpUjbAWRGruzso658iC79MxzaHcP96AW5z2fGniE2MP1jUQJUKso4pCmx6wkzAEZy31Q6ZFzrDGbCmd4",
  "key4": "5zcMWTDqU7H2tJQXFAFmbur1zgndDbCFfBcSekv7rLzCs7LcbgeW4DQWhQZygMpzpmnuwyoDcNEf6Hg86JPNnYdG",
  "key5": "3WTuSmKcd65nGtW33empQoaB9L4phjQDUE8g4QNH7DaELz74cjiBmyaHWTYmwPY5gZ8CbrkqdLACJiPFfQdsA3K5",
  "key6": "3c45v4tcCxZSkf9zchjmoPennzChbzkzTBqKsUpKCk2LFANFt91BCMbQ8UfL6e2Tvbn5qR4DvFKsENzSWGSwfAPG",
  "key7": "3wc3fS6zi4datNY2XxfeW7YZZK1sP7S9hq1cu6YQUj2fkpx5biFA2i8SCc8eUnYCy3iTLYPcxXzLKsuwMLKArKQJ",
  "key8": "2jivzZ7QPyoXvtmRXvhW7ChremVm76DgguRh96FvQgZh3vsqyXt7ADoSSsU32hdJbdr91UTNDWdrpML4haxQD614",
  "key9": "z34BiACNoEvVh7VCXc5gJeB3khDrxtPyA2Lg7JaZGE9gEcg1EyzDfYuv5Em3Pw1SNYftB9qKjG5e7549oqQdnwA",
  "key10": "5jfgAhY1inoq8ejX4P153pxsPKNUMdV4M2qnvNKB74rnQ1rZQCimdqqUvqAicHrmV5rV7T4t9WUMGgcEUynHtGkt",
  "key11": "3wiEuP1Gf3QqKfrjnmu6xjGwt98RfjXwHcz8TfbscxXqHBxgnfxu4XFqxqr1yuDt9nnmdc74Wr5ADg1Q2jhrXzR6",
  "key12": "3gxD8YszsaYUHn2HeZYLeNRpJgppxoJHbHD4uxfkTHN6e4SdA5evYhBi1XZZ8Ax9tTJuDTvq3Tiy1vxLu66CenW8",
  "key13": "5EmRLTg5aYxVKHqEjiGsBQ9snkcCqsXpkVX9bBRjNSbwUyKnCtj633y2UsXb2HDq82jYo6opp2nUMneEFMxBiGb5",
  "key14": "2h1vBpuwUkVFgBeGhMi3r1MLZJS2buxctqJ5pQ1TN2sBcGagrLvthJubUwRPokDoNSAwtWd8M4Ug8KMjQFRqjfbc",
  "key15": "z3NrtKQAkfedSGov4Vc5CszK3wMubx1ogYpd8R6B2Jty1HWj2YzrvgC89JLxSDEAqQV69jtHf6FtmHPY41rwXTL",
  "key16": "2jRHXF7oMn6ddsJsXHUB7sppBynaP74s2XWXFMpLMF2sNSzhweQyUvkJv4gjhD6G2U48ZW9bfjvatNkuntaKPj1w",
  "key17": "4EYLGB9cphVr2HpsV8oho8wMQAAWFdHZeTrkMqJJQdVmqtxTKE4PT5RTnnipdnm5BsTFRm9oDXTcFL2nJDAvW9zX",
  "key18": "5BbXpApwWnkbdQX4GeRXRePS6F3DrchD7UD8Tc72ZCc7FidiTmctHbeL9c7V4adNusbjc6NuMeVh2qnpMuHb2V8q",
  "key19": "8xBnMYACoiLdincyYtPWznj4uzbhPotY4Ewq627NrPqphCZdQLSNw2zwszs1u1gsnM8eBqr1VJMb5ZAmYQxmBaj",
  "key20": "naSypNsyLahTx6euV5po2PAKugXTrCd65xNkdsiQWn7B7nhemRJCQDAYdtB6jsNAnx1CfYdFFpeevxc3dGu9wba",
  "key21": "3rHkqK77ZwxoKz3aXB3DpmTjfDTMhHBVpwjBrfFeu5KkVYK8sHLNu8L4nTxy5yH5EYh1Y1fQB5HPqVL4zRtgUzjs",
  "key22": "5QscsvAUypaQn5gg6SPv22SiRZpYfXStoAUmVT66FRALvk6DSPFWjELL6YFvqnyLZuGDzqF74CqbiATSWqCXcgEt",
  "key23": "5nX16ffMtBfKHEzmRoZgnpPtw4EabAt9CRyWSQ21Q78YGu8LoNdbRSbroKbgrE3DidLxT1HuwsQtfhwDWN7MXq2H",
  "key24": "4rSW29x3n8cVvxSEZGMFGDbEP7AZU7aa7v3UHE9JXwiK12NAtf4w7tJvUuaE6UFwUnfiRryrLr3SpG1RQc6xB2jd",
  "key25": "5NvvsKNrP7YPSDkyyUiKiYcTbNEN7iDCk5kGex9DNdsxVM6K9HbWQUNFWFvCL2NvCsksu8MSxptZ9iKP9eVu9dBa",
  "key26": "2fG5nikWRKjm5J7z7Y6XajDW2aAY1LXxpGEfy8PcemRtu2aei9fdgTHHwcCJX8hp29ZnZdRjJ8vTFpnWtxSVFvmP",
  "key27": "sbzQkqSbAzLgobxTvnRPcK7H5rwjDv1bkuefaCaEwaLBMjUemrediuA3H8pesj1B6jnYEMuoBydqHMexJpqeBYG",
  "key28": "4do7Xmbwna46dCkAst5fqK6MD4oveim1PVc2wELKPTUTbZW7aLVrsV4xxRU9chcwCqd9SYWPxuZWaAytknisdkcx",
  "key29": "3KtGzyR7BVe7aZs4UCTVLoQsNGVSd8VSrN3r4vGvsmQdmBxQFKVnZXbdBWfFsSXjKXTyhZ5KjRVnhT4CFonVYvuz",
  "key30": "3B8gBT6dHHEpMLpCuJtPX8vgCyLSkuVPYTwmvHbuyxRx1wfXcqmEUmW7Ty7USgZqcpb5XY2BFTCo1eigabKckwJJ",
  "key31": "Sssw5gV2Tivb2YLqY6na9ugtcebumjmcaWrd6KQPXhgwr7rhCiAHHYUcg6V4mh2B1bpxGNZ51r9yEjkbQyWWXYT",
  "key32": "44tGwPiFCRe2FYDfcMo7triZAJTfyVaMkvxGwbwk3PD1R5yWQLEstUKDNPRLptAip81DHfPKTvQAqrFjByvcwT9s",
  "key33": "2n3NnRuEcCCepmiuZzkVDmnr84RtSnDx69D4bXobausQqSMz1yHYbVv3b8er5TaZHB7cVuGmh2oNGhdRWmULh4RQ",
  "key34": "3kXk8KMiidXk9cm2t82Wnh5hW8BzUiTmBnna994KaWgWhs14C2P9xeQ2q2QmvfRkEiMCd426YNm5gZSRRRACAiAJ",
  "key35": "4CqfHwS1dnAZBLisWWC1yupryP7k9u5Uzn6mAumzR3x2tGxeZ1sQFLpwLhdeJ2vCffRCCc9GEze46RBytGdcGTyy"
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
