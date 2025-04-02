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
    "RzNXUbJGEkXmt76UA6u2Ehq832DfBxtfM9NQANZyFfeJDEumjqVWphFapR9Fdzqkq7WMjaRxFuUMbFGH6Mzi76j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WwF47wCKrrhWv1z8qiowi9zvFXwDWH2HwPCZzNHRKEfnv4ksfTPy537zySE8cKqDpzT4wxfSiqPMJewKhryshig",
  "key1": "2HwfHuSLQiuvifVUP1SazP9MsrNVzjSCUmMxSjUtwjHRjLKzHMV3EFjp5MAAQGJNJk1indo9YsMPhJ182rrSPVjL",
  "key2": "5LBBDPZztPnrWNWieeNLTG5K5ytHAyHgURJG5ao7DA9TReub1Y6VV1c73W1JAfMuXkWr6pyecdNmSrwzDuC1oq9f",
  "key3": "3HCwnq6qwvXpkBsLbEtp9NyfWrSFTEK9BJwgpPdedqRJwLAVY4KyMM8qvHZEaZre2hCDVc8j31so8CAcSY7Z5N86",
  "key4": "3AD978p1aZK5vpgm5MjGtVV79iExDhcmnGbHhSb723NHsWSimy1KWcs4YahXCpyT6haB4cixxot2gs5HrbAhJ1cE",
  "key5": "5UuUZGUXybkjS2q1Tti1GP8oDueaeq1DwadDhAHEEPpPEtpsY4KvCCR3BwRKjHUDZCuReHRuXpy5vZUqWanrntLR",
  "key6": "2XMELJD2rxZGtfKPaucbwwRT7JL169U487jJCiASoXRfRN8woT5BtuaYLbb6buCNRc5GfLbDRM5vMzrCrATYcbd8",
  "key7": "5a7ikFRzEpe2W2hFfpr6ff3eSw7HhGug1hSEq2tGED7avywh8mpqmwTQ4T7uko3NxUQ7GbDGw5CkWk9PsKyHLyEf",
  "key8": "641fcwuFeZpkapHA913yENstLLVHwUSMnBaamBZdESy2qbMn18Xm982xUeVEgiySiVKJX1oLC2Z4DYSmt5Nerz3o",
  "key9": "5RGZmgfiuk1yQJ9MPoj1CJtz4KzhbRJBcZR4MxAhphkZBHdWF24FrEJzEPHCbdTzadBqFXoJGT1SNBXTRzfHAwNG",
  "key10": "3sRLHXefQssRHxxSLL8LsgPVAxJEZufTBaa7vRKEWWuvPxUohBzFvDg1mkDQ7MeiF7BApupgLjSfNYbspJHQFMYu",
  "key11": "3b8XC7yKmPAJfcoT95uZo18Qnt2GzwPUXcnAA6G3h5nNNhFbFcjb1cv1ZwAaqSscejy8X77E3JxtWs6pRuzEJog5",
  "key12": "4rLsJqBUoRTmukrRkDvnUF3z5wRQt5G3p6WboBwsT2qGp3QRHXYWxm8D7zeLvDhMqft8ue7ThHSTixZHkr3XhD7Q",
  "key13": "4Y56arG8wzna3gLZ57q8RvvAfEvUYC2Mx2z81DxYLtjsjTzwKMw9GqayWhMxwNvJsAo6KM2DmsgRhaKGqwPpGJkv",
  "key14": "2JVxtcg91NT8qWRHWtnzRheExBTYMbigSrqogyD2nMfj8p4mLUyTsseyh2yNTDyp7kx1sdzcNYXDFtSSBba8Vp5a",
  "key15": "2qaHMTyhT4QSNaQMhJZHdV5rPbU2wHrSPLwMHuMBVcYzgXAP44EX6iVPvQi6bYSsUpVhr4gkm1MnLb3FjRKSyHsm",
  "key16": "62ZgS1h9jUBJFbQhj6w8tEhLNJmiodehaeg9HPUWyLhfod8AM46MzKCQvmVUekApfHX4moTZ6ZEPoqw2a5rc54m1",
  "key17": "5P5R7frfRbLu6KUo1uAkcejxYEQmyM76wctVoVhh7F6aDxSWP1CJCNYvJRZYicoNun7a3EKY8GmJ6AgvQbs3S6EC",
  "key18": "66aKaYvNBCaHZCZRau3KWYaVM5MbbZQtxt4itofsb6PU1VvXZPrYUTrJHY9RDUPAct2uT6krceoKZLzer9gGoJmN",
  "key19": "5pPM1ZdGfnYPH3xtwhXrL78ni6jXs7TFkHvnBULjn2GXfy2do7iqVeb1FNk6ZLUqr2gR3BcyxKrZTu3HaU3nCvmU",
  "key20": "4m91GcmQViQMGLKrJYj5aBitVcnQYoBA8SfdZLm6d89afGm1kXu7WttFs89j7PGo4SoRzE8eHNzhXY2x3WEDsx7m",
  "key21": "3dt2QeYQX6xQD1LaoJt9YT2tSFgG3JKygQhigfajWY3Aq6vY4fyYVdy64ZmNfaQwFgmRLW3hFY8iGPW3LEanAaJR",
  "key22": "awz5KQXP6xq1EAg26w6V7kQvsVT43JAxY6t5DCsKyx6vte5WcUkzqg7rvqMg3Lo1xo1yJTDoPs8xCfCb1s61m1T",
  "key23": "5FwRRk2HYi8AXeHcuokxLGbdcaLVu1VJRR5izftWuALizLsDX46Vm99gSVLKWXEgjqH1rGAxzzY1Y89J6Aci9MG9",
  "key24": "2EkrZsYvVdpCGpAm4r6TLyFALjbU4tK8KMH5Pp4AWBKoLjyLVtEexHWxFAQWE5be9GsDL3zScazbG4rRbZBmSBjX",
  "key25": "3qGxTTNPF1gNSpmiNtNp8jVgdTc68pwmRYkLtSJubr6qzSMTTqXGtP5cVd3Xjtt8cp7KW6jgQuy7D7AbrRMY9ymC",
  "key26": "2BP53v7u79azeoPm6XgAUzebyZAVSo7FF8eRED8pniut8YSTxWeLfkp9aDjsgPsGT893dzq9pStfB3Utp7RRhNVL",
  "key27": "2m9fvbtbp51MQNLfBKCnSgJgQDEGSoAeJVn4XCEZtwqtAVg1NUrCNWaV1VULfqiuKitsW6nhjpp4KR7hX7mFtWhJ",
  "key28": "5LD38bMrpFf8QECDSfg7A8tFyRFj4W8ye22mqPyFvq2rTexNmuBTGGstkjFkHkYdHFifoC11LbbhHW8Ses8zhwev",
  "key29": "nEv4YWw8BjLeSYWpHC6N3YogGHrRm2S8S6FtTzFrEvEmnpwkv8Nc3qHKiJndELoZh9anE7gzWBDikqZnKdJ8nDa",
  "key30": "ZjFEaHjTvqv3EmSLC78iP1QqiK6ZhgW6b3VdYQqFiZ7E8WxcYzXfxqAnRhciyAnjxQoMpmJ4CyaBWjoUGm6vYBx",
  "key31": "2Gp8H9mJ4kvoyxEC3WkgVLK5CsYmgMa1ARutfvqztpwDWwrkk7XEB8g5o124AyB75PzUurQFoeQ9Dvbb6gDA4NWZ",
  "key32": "CaVg4VZJEjjubTF8jAUcSFhWLBLJhcciw7sGFvRzZdnjBK4ic4D84vfzNm95GUbPswoMqDXMbU3qjCNFKivQ5xD",
  "key33": "5YK4KUxSmLwB5kGgkfVyXbDnX7F6xtmoUUJuUS6AXBunkeFmiRw4V5zPzheMLH6BEtwC8j88iS5YUQrhZJ9NvipG",
  "key34": "3WyqW6dAbwaQ5Rhm15LG2K6UTRZ2pjhJwU3nAVmBqQT2xzAKNrcAUzCv9xuv36emEkbstu4jSsBMdNv3ErwA2tuz",
  "key35": "3PPJqwuLoPpPHywoo2XAKy2kRsA1nDjxQuNTvhxkYPdtXwDsLqEMywmk4EVbPdEBhjfBjdUwvW1bRmqNTvW1tvVs",
  "key36": "2MQ1ao95dEYX7SNzGz4Q6CUNSkt37ikRnBesibYQifWQc2Mm8Zp13oqL1jz8mPNx8JzecKHBVGHDXUEJkzRPH98n",
  "key37": "3rxyeyB8Wb2ssD5cGqnTVGsyhpVnPC1uuPqAddbswX9QWxMp7ECSpg1EhNx7uGxjXnSezYpstVDADavFyTELgdRc",
  "key38": "h7dHMjE91xBe5Xne6bMHQZEPLbk698EZpjJxH9RTtpE5WgPTzyUAgX6yvXvQxa38CVyqUyCtcNaiGqyFqYzeXp4",
  "key39": "56cut9U2CWcgLfNwFpahyL52hHgxbesDv4uaRdTWejMrHuqActnYGWjiBrLnhE2CpHUhBjAcY7MoGBfbER8piunP",
  "key40": "Zm8iSHQHR28KNmQHhs66VMbc6ByS8EeRVknA6Z38WrfcAo488ZBWoa91Z6SmmYqrN8ZRXFHsUrdmK846dgdyKYv",
  "key41": "2GMG9HhJqKqs9okxPKLGBUxftQvqFzYUBgtMEa93o8h6JfTAuBaumtGXjaJn5jdFSh2bkivnebXgpq6fwGqtRR5M",
  "key42": "5fsGqcuxSCx58GsZqbPpXvvAPrUfgGAXburcLSfeFmsWifmkq5rDAAkcaL6WbxcnotfJgzjo9c6q6BHhmP4C956f",
  "key43": "3kV2ELd8W3SjqQpYVa3AiSJv89w8AhSFBLbnigXzofEJqaiG35D3sJv5N113o2h3WhWo91eysyHR94JQb8nXpgEf",
  "key44": "4mbVWBQDv4koTbdUycJSuqGB6Nn2ZRsnedipuaTcPz4VWsbU2aAq7ALhVPQpwUrifurjdSPUdNHwmHzXedGaBvL7",
  "key45": "5CoXBnPRm4kSHyocLbV3yW9APCqzEeYgJT8fh72JEgXofxRW7JnuWexLAVkz3hviatX4v8pjJFHNVtnvT1mwFQH7",
  "key46": "47UXeT5h8bqwCGjoxhQ4ySG6vNPiiTV4Sd82DMpQ3Mtm5jsWyhky7crbhuKLM3WZHvqU6L7ZXs3rcT8ZCfhUZ4QT",
  "key47": "5ghWa9QqDogiMX2pV6j63fwozVpKJhkXNWudet6eoY1kegkAo7XmGAZnRnGYpHtD6yyX9tNz2ArwpHtfU1XZxaeg",
  "key48": "2HjUJp1Nhof1V3wxNAVMfPuz39T16GidQtot4GbRANG8aWJXCUaYedRqnqnAKNY735WFHKri7fYG1z3Ph5Gd7KUK",
  "key49": "3E1XUKYwyqUDWp6AaJ9EzqPGTBpUjemnHxWftZJUwfeP1pEfhVbduxTri1gAi3KrF1n9Xj5cLVYhq9AmrZtkALDE"
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
