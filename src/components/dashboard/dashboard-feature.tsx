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
    "4mi7WJhmDtu2JrxQ2qZRTzprdE8GN2SKexSLvnPqLHZ2B1XuUgFSpXiUnfPBux3ivsDE4rwJudQe1k9w99rErvhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kCyGQKYkrVLXJTjub1H3miqQAe2JPjM4xZtMTFeb9LPZm4NtYjJNLw1RfQGUpJ4LYVaYy5vPeGHT8BKCaL5wf44",
  "key1": "vWDE9ragZwGsbdCi98VjZkFF4cBk7fLezSebG5bpCou1Tondw9bPFFTgEBpaQhkduU8S6ZWPTXRY52XfeS4ge2L",
  "key2": "2P6yV1TE7CeVVLbWjFYrBw7v179cYnB3sjQzWBB58ee5YrYgcN5XTE9Q8bqnkkPjM1GMG4sm41khkS3y6tHB9t7U",
  "key3": "2pZXpSbPMj8AbYsT62GiKbpvF9CHsb75QVdYPmb8Rq1FN3YGspYre3pNpyDne7r1q16WWph9J1isrnjAkUvWXrho",
  "key4": "2Rze7nLaAmTVsx4WNgkpucNR4fPmppZCLa8kcY7P2ZivXrf7LFuqDAZhxPwJyKkjvYVbyLZTvBkFRn7wYJCc7GA7",
  "key5": "5tH2SK7v5XPBZ9Jy8xmKpJQ98KUB5cpnwuQXV4xCFMGbsUThQ7bZC3trK8xbZGVsMHKz4jW4zvwMDNr9uHzaHxhh",
  "key6": "4AzN4t1sjqst2Zs4twMcmSBFZNzZqh43Kng1oVkWVrDiiwpDK7hPgEPxCiT6VnAXRhaJu6x9wKkHdE4Kvm3t6pCr",
  "key7": "2qGUoAHeFBqZypCEcEvRg2gpb3qdsYfp7X264ky74ZdPRBfJPfExd9j2rsxMXAYiPk2aE4NPEsGKGSc3Jtuz7WMb",
  "key8": "5g3DFPYXRbLZyWpGkEsZ6nhCh3tyiEoaYts5aMSghSiG1V9Ks6u2UARkyWUdj5QQaf7fFXmcEc5kSp1YeXaDuBrd",
  "key9": "5dTbQpwDyBkHeT2eofJJWeKQLU42sT6hUKipamG1WrubEYvdfxNowQpmYMtYAave4pEyjQgML2BTsaemroZSfatS",
  "key10": "5amSSwH93kWgWQtEc9oJETRkhUmY7ELVSUbG46WxdYfdh1cwb2mcpW6c4UREpVXM7NJzaxucWh8wGs8hRCEdNYpv",
  "key11": "4JNRTUcmb1gLTAjGXfEjvqMBh97oSo5Ta2p2yiHCG1oTC3GGMAU5ZUCYbVonypvR6QUs6neV3mNmn3mpsJJEiqcg",
  "key12": "5QY6sUKVPvt6uE5F3woJZEKj4qFt9W6XdoRqRFuQacAxhSjcvnaqcexCZMRkGJtKLC3kmuhWbHU2w6AK2BdCaQV",
  "key13": "5HQJk2v6G5mS48pRA7X7EMCA1RbVPchNitCRregaX9gGY7HK43X7S9ZFwuzSwN8tkSxs5QPKxwpatEFP51fcKMs5",
  "key14": "xGdieHToCQM6eb6BrqdzYxwtrbwiL1qxoCnvRgSLukC5YYh5q8L1W9JhijjE5DsgGidsEpxsz3HjsbGt85rvsdR",
  "key15": "3T5eHuKcpQDw7CKfaFDHeuRpbkpKZEwPHmkuRabszjJChdmxt73wEpjA4zmp5b62sNKoFs5JLKTZ6dkHYTuiqjDU",
  "key16": "4uhXitqteHcX4XjnPdGhiPF41DHDqLPYqJeEWXv3uJf2z2Jq7bwD3vBhArcSiRvrZeFtE9j2phXZ5iBLkMRv3zNP",
  "key17": "5Ns5BsspuW9S9Y3ymntsKxiaSVuMYmSb8v6nkzKevN5nTAr71mNUnKHCT4KWLygjKz5H2S16tc24n2CvtbshYQqg",
  "key18": "55cnSrkYduR5eLuUFMckVkBHUcbzb8A7igx2kU3UGC9aundoGk4ezoaLCgBHmk2k9DvwR2NPs73xp6euFB61Qxaf",
  "key19": "3Rzior7exGezTi9cP1sSXrgUuwSoFjTfzr1QY8GWCWZfB9GUx4SQJu1yNgf4SjhLw4LNKkNHeWUSS3LPXNp28qNs",
  "key20": "HgsaUweG8VRZdZSiiLUTV3mPzN4JfLgw123KE3L8zwSRP5LJGASisBAyYR7EPaWrLHGMCJwr74XRSrFe8KoJh31",
  "key21": "3NX7BaJwFMCwqgZ4yvXzxuQPUseRmYNQJ3Xgmgij8RcyBQZ2wLF64kqLidVpmVXgi5CKb8B9TdqeZLd7vehRQPrc",
  "key22": "62tV9bvjV4cJ88cheHBwYLKo8voErawCyCe5RLK7QHFxAuY7tiaoE8qQoffvxumpNCRiJUpZFybNep62zVjQXcaN",
  "key23": "2uCBpEcqXTw3ND7cxWgq8mnzngcZjmgpo1kvhjd3pYHXu3tH8hzTXMyhpT6DrexHJK7J7TK9Wc14oANTsGguNXSq",
  "key24": "48TF1vuKnYgrNHT2N7rR3zbGAjPrADbAxodyuYz3oSkUd4vAUZhMKqGKUMux1GwCvCBtbRddmVqHs1oroWFS2tQd",
  "key25": "4Sn3pU2qWUGymD5sQ66TwLcn82YGPiPzh6TFEseocdZg5XtyAZ1oWKzrgkc3ukGr24k8Xb3zds33KyeGFzPseQLw",
  "key26": "5YgzWcMJZjvhJMiitiysJYJZJhhHmK3CkQfqK9M94SoRwonRJYAKnmk7bpZpe3YL49JWZ5H2zgXbRCXmq5Q4MGwJ",
  "key27": "3AWgvagHDk4hMsaJyExZ3MduCGXJ7tbt3pe67n9uBzixrBBvbGH3NTmuWGKc2ASMWyW9FzJz3SPxXo18ekLXReKP",
  "key28": "4VQKKAYbykFvQDpQfSvrUipCmCsukvWRR9WSqXYSxPhJnnLTxs7VjGS1eDCiLzp2P2sYXrPrwk4VsJMk6fMMQ9yu",
  "key29": "5zS5LrG6gT1XUxk17sg2m5tAoB2w3Rm2N91Dq1xsQmHcZHvn3DS4vPnBc2D6xB1JLBisVedmMqTEiPDhLu1iA187",
  "key30": "a9TnAXbztFe3T3cfSFqjnVhUpGVEFKko2MJPpvkXarzccXm49LWCvC4pbscrTSHGWCCZS6ZGVuy4p3dSqS8ZM44",
  "key31": "26VQr8GipB8pHvk1GimqyK47dj2dAvWERD2d8ZH4KQghUvdnjykQmHdRx4mX4DWAjXdGwRgVRJ5W4X8cVHveW4hV"
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
