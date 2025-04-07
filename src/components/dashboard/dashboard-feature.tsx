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
    "24qkeq21v4tgjh7WXW9ugjYeVJKQooU6v6XVDJNKsvdvkiwLb93LtPBzSXU3uEU9FUQfFP3f5TUKnzFg79bEBC88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5iM3LyGSCH1VGBmTpSsFHnNwenDyZCcGjQU2brSLoQyRajgErqFPPLwPExoyQ2ViXpFfcL26EJA1CDFHfiL1nK",
  "key1": "58KoTNSTJ5Q2CgM3MRHZHGEeXGVFtUCV9wLv7MqEpS7V9JesutLD37KcRNEX133GachSYa9rr1sZrTn4DQeWetYt",
  "key2": "4sK9k6TSv4BK3dHZnY5c3pGTae49NtDbU6JBCaxezKLbdqtckVGyxHkMAUvpYpkY9j7buEXJiwr3hMWBfGYpUVPv",
  "key3": "5qJYEQGgn4Vjw5M8GSFwQHFqHuBAXaTAsmLFoKCZLyoppURpzv2NKYq6SP5RcbdyHvBrU1igNAGVyUJ9qWv7DT5L",
  "key4": "3fEkgMamDUxr2EwGpazrHEN8zGJYPTWiDmxkiiE4tPpJnMndBMxKaRZxRUb7jFryDGh983QHTHhmpoTYp2SUzm1v",
  "key5": "5sHRYbPNreqdUBn4unMXnVd8C8JrPc8HH9kpGcq8GtAKG3bB3Q4iaiZWX4v4D7J7FPVf5gJgwps2sWewvicWE1Ux",
  "key6": "ANm5GBqiQnXpLPu8GwTtugcUmZfPafxEdV51X9FuU3yH68L4PZRWRzxov6bbymuAUH6Pce7VWgowZQ4bALDk3Kh",
  "key7": "2XBPQf3sMy7Kx8RW5QTCyBwFK8Nsyk9KutuetA3bGFFx9miWbzgh6Lovf3e5K9RbPjS4HjhDZeG2k1kfB2Bb2hXJ",
  "key8": "3wvk3WVQctz4vYCwoxgnmHV3fdfGACebxukoJNRTA9aqf6Qw5DHY2Gj6xk7BAsACibtVK6zLnf9TBK99uY3E5bq1",
  "key9": "3p6i186JMERqB6YjwMrSPxZom4EXFX6EAG4fRWth4VX6dCGxUQ4sGgcBCbRTF4oRWNBDSRMYnXwRfnvQnf9gmrig",
  "key10": "SysTQB3icfNissFiEpid7GeWGtPPmYZqc5UaXUYpd9R49FNTuPBryG5goBodnEwjQHDLdsgj3mgW73rKk7g5FYL",
  "key11": "2njKxBca988khesQpQmntfQ49VH3sbz1b93N226wwgGZQQDu1q6jV84TLRY72bod5GdY9qQTDj61KhW7xVp1m6Dw",
  "key12": "3ekr2KwYiBfEeMgXx81Mbhm753675TepKmx3RT3qcG1mH98W75hY6dHP8QZVtKMaaQJ6EiKXn5qQjAwHcUs3cbCu",
  "key13": "4ZT3rAT3zbySiQZrWU55xCVAQQdoJTF6cL7r7kDX57SsRJzGF1MtYDpMhwSU7eS3VdmWN47yjwcMHw7tT9easM9o",
  "key14": "5S8ZMUDqKzC3HFvDURd68AwoksXKXZ5x1TB5eprFBcCxkqJnNTNT5tt88F3vsthv4zBZ8GU5KFjDkZCBPjnDbNYp",
  "key15": "5uajvLUgAQRoojCAJiEgFVV7Wkytr175ct5Wgyn17vEmc3xocjBtd3ERrjtPj6QnDCKNE9Lb6GFz8nW465fNDxnu",
  "key16": "28jtGZhqbkNKesKzBp5eLR4smmPat63BgGvzixKL7DsNFq6AsC9u37ktSFjf3EXKXQoNvuAWEykGwKGNEyvBcGbX",
  "key17": "5ioeFRHZBWCNe7iCC5tNRaCeXfTiVqJHzv2ESsbkE534DiJrGfLos6mj348x6Hzn2UxJYS8cQymPfjGauLkjbE4Z",
  "key18": "4t9ZHtr4KYRbdpba19QLRm9jDaUGxkZ1t8vbYF1UtP1Qk9X338dPoWHqgACqV4f6bgGhJXpnAESDtdoTPVAep5cn",
  "key19": "5sEHWN6jkGWHDtaPfxLB3p4fr2iZKJ2jStkJt4zBqockQgULzi5p5LTBTLmheNS63JFQkvJQS3QbvRvht7u9Umpw",
  "key20": "5rFLrCS9cVNepmN2ebRif1XFZSoQDNU8gfW4rEg8Ka4yuei5Fvh61vwFKbyciWwscrqxRF2dbrAQE3W8WqfaXuvS",
  "key21": "jD9qUQTfEW6LztcwEZMFsCSs1k8Sei3qZp3eaDzRnhf6V6S9u2EK8D5wyvFUvV9Yxz11ZH3pP8SxBA1ndmT3MwV",
  "key22": "5mPrZcyRcoJyYqzagC5SuQ4vK1vDFFurYAd5HRyyXBoeBNoGUgTLvcB1i25zxCg8GSoiMUg4vb6UfpeFhKfsWyNx",
  "key23": "3nZTAomQRKTUPTqtoFiJxP1THcUBFcLuZPypFLJiQh7TXVSB2JPR697t3gYYH5s1UvM8TM1XRZha7GQXJHpfvpnA",
  "key24": "5kzZnYPTbq56z5uRcBZ1HjWxZqXzXwJptxowiCgZev4ZLwHCTWkWaqGP5FmeaswW75bX9Ae5NVnpfa96nGZBPs72",
  "key25": "4sDqz1Ns4ySaVJAnw7W9qfsKBvLgWmZA5USi2ijWC9gYkskkPeVcN81EHfLGcBJ4p3VXC2aHdwiXaGP6yk3yTFdG",
  "key26": "4RwVkTjaNXcF5iVpcsWYvgRH5AUh2r3ABVtcXdHCZ9xvK9PAMJBv9w77z3R5qUTP5REEr1WHxfoeUN68T59UGLDJ",
  "key27": "5by72hZhzSnqdAvMNdAgytjr7WfRQet6ytP5ZF1iPtVSt78aHV1LSbrjAqpAF6d1CBVc1axaM1y6soELZhswzCG3",
  "key28": "2VUTdjpz1WwehaZVMm7drQd4Moh3UCVzssYSBnYAW8EhfwFujeBt6dbtkw1dafXfqVMC4iGbWkW1BCF4v76tiVb8",
  "key29": "2PtQNbyhXNHbNHsM3utsZGaycarLKF7ARQ13XrrDJgVN1KyVRNbjXygHcTK95kekaSL8BNMwp9Ue2kHcZ8BaMVs6",
  "key30": "3eKGirNhPyCHKNDbSw5irZ6RvK1iufATte5Q2pbxTaeHHdrA2xCX9EFMVXZBBMiXWVCdZxVm2DPK9R8LagmpiezS",
  "key31": "49ujB7SobwZc8Qz4wKp8G4k68cd9vcUz2JpaBtL4qTnXBzMuMAm3ML6vxZmsMZof7g7QRbdCBBz2aJWNZ12wNYMf",
  "key32": "4kehvSynkQLTzy8vdAcAniZNzuXionLdf8RYgecBkcpBqXSgyPB8B3uQDuvpeeEVUmNqvhuKakAV5zThc7gXwtVR",
  "key33": "2g7dg5tt73tEkKLrG9SJWsDzj5bNSYJkszmpmaSak3aMwRkawSNDBjAmCgvnxJZ7dSu39EX6vp6BHodUMPTAtYCC",
  "key34": "3qabDupedhjj4QMgrgD6JjndTGhNYWTdMmB1rwD6seujyA8C4j3VVhMvSRUAAS1mwsC9V2B9FaZjCHw5rkSNwtXY",
  "key35": "2XzeoiqwC9qJwSEwK5tNBmF5oudathpu26Ec2noCpfhyJCWQioVBn25N3nQmJvTWCzKuaY1dnbt8kHxhKZ6jQ2KT",
  "key36": "5hpjyQ8ohFSpUoca2R1ubSWYgegeK128YSFHdwjzTmCnbM1EoyHYzGmVarDQgq9vWSjcKrRxUBWF59qeRxt72cN9",
  "key37": "Ck9MiNLvGEB6g1xxJhJrcn63uYU5itRYG8AqCfFtybrMScQbkstfrjeyrivyAMdY31EFLGUnshyz2sJiREeKJfc",
  "key38": "si4hGtWvyQiqWVMoxWoYGUVZyJT8cZePyejKRwtkofUbqkqHZKGqgvqdWfLwftotva5ra22kEZQSdTBUnUj6cTX",
  "key39": "4dPn4QURxz5TDL18NGSYQRzxq6mCaTtQbx5Sd2bsXWKGuVtW9uhs2EBjPRz9NtKNdBtfthV5GVvSgyp4EszKgwEr",
  "key40": "2M9xaMpofDhJ4vN6HUXobhknf5LsU8zHjuDGtQ9smM9E4Qa4cetntQpCNaRUxF8fmvE8cHr1SUNDjC98YQtymTYu",
  "key41": "2cF9kFPcrcEstk18d8iPSdaRP3dLVZ7mVKB58saJTYFyc9af2xmLkKRfkNwpG4jYBu3UoarKamvKK6fYSqgmXmZn",
  "key42": "2xWzbTVyoeUd5jnbEyHoUdJ1NKmtsPobrHVdpmbWgFHQNCY3rH2P9Z1GDicMR8J1Za7iNBAGFCfRgtcSXxK2KDsN"
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
