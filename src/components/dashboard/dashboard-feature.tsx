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
    "4L5Mog9vhNR8VYFAxCNSVyaJgkPx4ZBW4dYjCp6pNTXkfCxjgYkSfNsSbjKxqaFARGG3JFgiAJXdqkaUNhxH5Pok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvDjBWXAqwCDicLxZN7NC4EM1XVQ6LacooEJ8V8QRkmx2YXUPquwB5LEMXrH2osWGcKChbo8fqUHdyZu4ymdB1y",
  "key1": "5ZLYfmXbyyCim7D1rZsMdZHjnCtUYyUYJ6YLgkbxiu8vvtdvR2tQMNh2pQXtvmBopPAYJbL5uvPMrEbr12fYXE5q",
  "key2": "5szw97q8h1WjiVaua5kFPFyzJE6wgW61XP897MTFJHDpiiKmf1VLnApxGuMf3LzUnuA5aNHu4hU41eRVvrQCVGqU",
  "key3": "2YjyWoeDmTCcvJXywyWPcBXiFMBZChkwj1tzaTLdXVtPLFTTe3f3tDkKbSXD7YfHgtAaccCbqUbory8xUEdkr1ae",
  "key4": "2jCgCbmysEB3fLQ8e6UvE4LJSREmgKYzgvb6fUG6DU4HAJijrV3Wt8ArTAuSagKagku9zDBP3NGhRvWz1Dy2si3z",
  "key5": "66iskMgwTjTi1ffnAQfU7NmFTux2tbypqaqZ1tc5yRdqJcUB8uQsMbRs5ae2YWW8XPrvmydg56gfJ7y2WuR1fquM",
  "key6": "22QtRME6jGVwyFQ3oM2Hf3LGt3nnhHVsATz7YQyd845N9dGKMCWDTnq82JsBDBTbxiVbswx8GFy45jrxzFZiurvS",
  "key7": "5BKyv52WCaEdZyXy6gpTJBc8g1ziirpZm4rGa9q1ZFnwfbJxe4PtK9MqJYka2DUnqpPB4S8vB1mLEHoVAJzttyoh",
  "key8": "2ZLqvzZ3DeUUtvHeVTnX8qv2b5xaXzPRSfyLTgiN55tE97NQUJNV1qPjtVvy6tuTV4B6spDCcHtwEUsrj6hhbKEH",
  "key9": "3uYPz7NuNS3yC5ELvWuECqtt4HzEoPVqXPwm46keQgVvmUrhQKpFf5VVvFwkTLv8h12KT7JCvDbdSHPRweXdNGP5",
  "key10": "65QxRhNb5jKKHJnhxcFdsFVdLUZuksSJaNdcGy7hexYKfJgw4VPdDNAGNhcMoDUSiANYUJgbtYQYBDCeGo3A2hDw",
  "key11": "33fZga6KAQEarEBRtWGQn6N5HtAVkttEEpvmoJoiPC9KRsRVKyF3Lhvi8Tb3YJhUw7MdzhwcLLvxtA5X3d5TiphD",
  "key12": "3a7qwn3pgC2dVhCtycG5hc6UwDVDgrwyzq2MpiU23LmiTEed6WEgu5VBuVK9ARKqGbRQoxhZfEDiDC8WBzdmptrN",
  "key13": "3h2yUbUHpzAbAD5qLXCEzP9zixk5RdzEL86dtKZWLsaH8ue3wi3Ydw9x1UGumyvWCik5drM72BWEMm7ob1W83iPh",
  "key14": "4F6PxUvUCKJxrVMwrF3kaUoWYBjg1VJyakMuzZCVSrHqKCmjCg3KvvUaNpJYyLKXJLJ9QJ1ynwo7ZGDe64xyj8ir",
  "key15": "4BWWmi35e5bAVw3zAcqTjR9Qhg7tuFumUyJv9ARtMtyawQrVYVpvr1FaHhUVCCKJNNMhWezzgPWjusGgaRX5F8dP",
  "key16": "3AbtGFPBk36WerJ3N4Fg9GqA7VquqDS3cjvv6dMFAvJu6wfAwD3KWtQHLhicjRgDd78ScVJrhaxSGHtdyErqkDC1",
  "key17": "21HUoMB5Xf15k8fiDTAkrxU2A73mM3fKCpJazscstHB6FDjcyWesYbV8ZZGfdXQfGJXxzSVRB72uAXUkTjR369W2",
  "key18": "23cdVGKxL3rNKuyQWDvDaE2bQD2YfsR6rpaU7WrsFqxNqsqPPDHAx1Dks5h58JzCLbuCs9TbJgJbgHCoviL6Siv9",
  "key19": "3uBavDwrtrJhsNMhpsTXUSZJhJwJ4ScRt3X6qnYQFPQ1CZPi384W6fk84ddnWpkj3TMquwadW5RUWjH4ThNcqTJ7",
  "key20": "2GXPRcS9TGnJH9YP88ocBYxem9KJ9rmCqFkAPXzuzbZpq5pR94LMKuEriw5T1q5GRPxPrXtyzujuyb8rvVxjatxd",
  "key21": "21iZG9f9wrtT5cKr2TSGUTBfPmChapdUSnYsDvC4S8CnYr3nwiPARy6uwSqEpGYUMysDhPjY3ekrJZRmKBvdPcmv",
  "key22": "58QqNsVFz9xxS4pPUbN9ES8epGLKmQ2LMra9T2shf1vGsmYjDzXWasitkYjdqz148wKRqkseaQ2LAVbGL68AoktX",
  "key23": "27FhqyP2m1ZtvJTkfBVSaLDRBy8vYeEhgh5BRauLAqdmFSAMFwxzTjkUcojwJuZuqyE3Trn7VVVyUFtT2vZyRshJ",
  "key24": "63e3YTJAbiuHuckZ4i6SCT2uTW6B2Qem4K1kYNTLf1p6VoiNbanrHm6N8Wh3wKuPfLdm8g5aAyVK2v3Ac4tVuMRk",
  "key25": "5gjEhWNuEbxKc7daeUa5rzrUacE8Rv6Tf49m8Acx3KuCvv3xJoAkiLf8yjoShBax8rUQQe6jDh86cuScjAyoXHWs",
  "key26": "3bERRdNn1cFhzK9iJ3xvUqvHK8K214sKa3W33TBfxQi8QjGf65Fbv95HGZ48kpX3188gNLwJGGWJnhHYp8vWT9yw",
  "key27": "5QUuGhHMYLAWVKHvzQwjWk8DccfZpaBCFTQ6kEMEqniMrtEug5PJEGc4zxaLaJWYE2qgSx5wL8mHjYPd5dcfTXFu",
  "key28": "2ftdybjWxgJiRx4LPtGXf2uFRfCgEG8rMQUq7Sq9x3QmMiLUtk3Z62PTjJRB444SRK8KE7AfeiqWkYxTSGVsBRLz",
  "key29": "5yBR2AP4y7KuycNdiXfCJfZCJb86N6JR7B55B5vvZ5L82Lf9o1utEMY4W8rxxkPGdqwZVFsJ6UqvQ2UppprgbMa5",
  "key30": "CY2VWEvu77XTko8Yg1GDWpdPpuKGmzhVidzNTQvga7jVZq5sTvp2ue9BmskhxrCX84TtsPqLo7b3K45Th7DhTHk",
  "key31": "ka59rvJXPZ1STAMvQPUyfTU88XVhTe7jLoqb3zfJUXKbFEDLxpc5ZHPKgWfHBSx3TQzCwiL8UrVntutAkAM5cTe",
  "key32": "4YSoN229i59ULNBrtcCuPphg9WQQ6cx5rdDo5E2eiWAiuxXn5KU8NC2EDsS31tYXcYr1Zn9jUz8VmQBHWaZ8FTWK",
  "key33": "5k3g9Lx9Bpd9FT9jNCRJT9rmQNeJFiSyuwR6HP1oYTeUn5smHdwWDGcyQmfKBbfY6nYKVZB3JukbMJB1z1NaJwDc",
  "key34": "2yosATcgAyhaL2XmCPDzFLKSJjY7Gu3n94sDhXJiUrGnZixnHXw8FZ4xq3prFxoCCgPL7aDJTpSHmQvfxFdsSkh4",
  "key35": "4RSu6ufyXydvLacHujo1ZHQeAZX8URqeRQou7Wfy6U4eiyJV5nHA6G3zmpiHUDnxnBfgJ44VQ5gy61vyJqCoJZC8",
  "key36": "4BcHsQndUfc1NJzwFGj6iaAy22T1PxLaEN7qvdMNT8aFoZ6EioAwkbbYPDjuqf8o69DdfDYMMKNgGNEgZoQZQd7s",
  "key37": "5QWvBarQEepNFR2FJYqJxgSetbU6HwFQuRragQiPNKnmhpx9ACzFS8SR7NQ6caD7SnsiPCYPuePrBPzKAKahfFEU",
  "key38": "2LutiqBsGUcLG3V4tj4AQihbNSMJQPigSpx2Kp5eDRGDLSmUC8gGnkvHTUG4SrUpqok78ZaTYE8uMqFV2Kp1Jiyf",
  "key39": "2bJuFfZMyqDPKTmQ5M7U2b3w9ceiUL5MtfpYP2YHKdG2MjtsUpf48CkSGgg6y1Y2bYu9w53xJtD3tps5onAiMkFh",
  "key40": "3AEuNhWugRQW333BecCobJDbxQuHAgUiwStmPTtWvcjPmBmHxGb4bxYgfn4NenN889sSpDsKGf1uHqk8eFuttU9A",
  "key41": "uugWgQhDaDn4YMiJM2XRgq4fTBeiGnguQarsZZNmxbNsNz4ts73fVH9wagb3Syi3AnVBSE1ej1gGbiLEJDCti4E",
  "key42": "3RvxTVS1Gk3oubvYgyKtVTfZk1pnQ7iN5PF1DorkwTEjVxhgyqceNajExm6LxMPN6DpewemjdCJ7L3zSno2NQ9DP",
  "key43": "eAdTmukyuqTvQv1rYkRZsa94jyMMNMu5suacg2feUTnwrYxkc4pM9ESon4ueBesZMtCz8gjWQTZZaRDSiLJsduT",
  "key44": "6DrpqwDjvQQXMs4dHVZVxUkxTLQSRzFEJaVwXkE2npgem4ei6CJ4SuGxwW6sGcqNm8btsnZMfYQUS39YoQVMoKc",
  "key45": "5tF6dBjB9KmEs9AqbHmwbsKvda6yke3Gsoda1rHEL9xaNWWxd8x7NFrTCV3zpqdd7L55rZhdzrh6gp55rsaMygjd"
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
