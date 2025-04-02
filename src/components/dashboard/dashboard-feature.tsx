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
    "4HHDwLr4MX99iuoWhW88NL6z517TuDwo6TQWTHswVLagz9E4iWwvbBgPDzuvTEKym62HX4XxfxV2q5Y1eG3GbkA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W8i46Guj7KhwpAZEjJ8bJ5o2vEWzebm284PBH7rcW3SzN5Z4pHrRYKdse7QavhUbG8nbwjd5AnZ1A3wDwY2DQee",
  "key1": "5KdKW8s1SDDSCD6HXPDMu5Asyye6rikwRFTu9RUeBfd1SJ3tcZYxwEP9hVFybGpstF3BPNAwpVVbXvwa58X7E4JP",
  "key2": "4e17C2qm3yfjUvtwZFBxcGwQHZBxWHvxmegZY4Qr9RBnDFx1xCASMwKXu1LmnkZuLZgbePvE7pyGkG7YFSSbFzJX",
  "key3": "45C8myAHViXbony7PJyKk9s7S2d12wpiEcdPoYyBkaaK99DNAXmQdjHi2HgX9DrBNyysBVWnCJpaGdbqbVd5cmtY",
  "key4": "2WiRMuv3iRAAqDHWpMALupGz5UjqWGe9e1jvQfq6YufoMKe4dMz7ajYFDANgh58eACHtBwM759qAg9UVTgJazgNe",
  "key5": "4NgGL35jXeQJ89fDvET2ZkV9KsusR9vpCxtuVP7uL7D14ziUhqU5W6zVcnxGQeRJqwHV6dENHiJnkTa6hRUYbqMt",
  "key6": "4wX3HU4pZskAj96f93qUDG5YT52Y7THFHPcXgVQSSXiJraeNcJQkNnMo6ThoW3Gxh7wW5ZSx7acwHgfuxLQiUvdy",
  "key7": "3MdKCKFm6HxjQExq3Bwqq1qza7qtuY5iWqUgr8ToUPGeqKnhMe884EoZUPbdY2P8HLaDrr2FNrAucfDbf6ggDRKd",
  "key8": "4k8Who5gW9aMXq1bwd5uVSnfgrXB2eUoseEMa7GZKMd82qVUqEhx9RaE48NVPCL4kWpoFu5YqEQkLGEYBvHVuA8k",
  "key9": "53smpcngf44CZ6bEP6mVoCAvgTPSSMT7dkr4LoK7HjA9AtsqJwWv3DcdeJgwR3Qewvfi5VHMQ5jUw2RsZwXu2KGg",
  "key10": "4bpfQDTBDt99tPRwDYazMyePFt4BpAwbUM2fQjVkmibWHvEDjQcMCbiBqea9ZVEsx2bPDysyuMmFW7tQS4K1NzB4",
  "key11": "3GdD2qwh6U9LMKMV5FoSYMyBQciKmzR2LdVjFyLNT4nue3GD2BhbMTxZ9kfEQ7HUohSYFeapJNzddBwT1mZ9mMPN",
  "key12": "2ydPgNXniGGmxkYcYkMuLEsywALKnd9aURgq36ZzQx4c5GFDL7NSYWEd5fBEvZzqgjcLJ6mQMqpz87YN4yC3j9TG",
  "key13": "5udS6fx6djTpgRPopAYGeBQvbSe7NpBLgdzYxekJUhuyFgTaw79FcN2a87GestJ4cticXWxnQD1dioijuZfqbcBu",
  "key14": "3DHCYmDJVKxH7YLeRQ9JEpkoMq26FrzuCbknpFLnqUvWeWRRCckKj7rBG9eb1fr9eRHQrwQuzbmkopGUZLe6i38d",
  "key15": "2Tf3q2qL9vWcAZxRV7BAaS3y5KyDjHAWkuRUbs56mAo7YDQ7QATYnr88HQZPjxH75b8Py1mMUE1mY3Wdssj4Mz4S",
  "key16": "VT5faszfdhKj5ewUFHvK5ts12SHdm2C6c4H7y6UrBgoRUkMjm4EAwCsMdVsHWkJ4ZELWUsaFGf9kKZKrEYEHTFB",
  "key17": "26UXLigKcK3HMrPjZjmUxqXu69nq5Z5TyuTF7RiAHrig9bCDzV3BTZzhVEmhzB6yfBH3ys2GsqePPvpuVhbKH512",
  "key18": "Mo6Wxsx5CKTme1acYE9Vpd1JV3QiR3DBFqHE14dQwMtwc2eat1UTcqTi6ev9kGWhtHiFD9hv2Brs5tNZPPDuHR6",
  "key19": "5vqsWmbtYox1pRMhC43yjUwcSnrJwQbZ2vFYKhCPWFPno3AC2n4hhXdGb7annhQoewA8BAJ53UtwAKDuCHdU6Nb",
  "key20": "UkkrvUV6sNkJte3mN6uHQB7fKgimeHoafwirf4J2Bj1t9vr2ZJK3PGrtNjwdZRGScVphvnSTNP21VyDBNTuu6aA",
  "key21": "2zo7PXxtYmYSBUCJgTb4b6mxJJLXPPsF5CYuxzFKKS2EBhnTLibAxkPij4fq9GKcvd3XKjHGz9TgJdkEbiqGEbQ1",
  "key22": "59xf6yjsEbfqpLEhD4wSggnmRghfqBdQShYAd6TrHQsDyzNGZD44UUFT232oczi83qSkdwevGuAq8QwHFijCzaAr",
  "key23": "X7RmfFBEgbBGneuV9RDKRrNkwuECErjQCwEQSqr4J5E3ApxkKLJdAK8rwWNE8szp7ahuTP6o3H9GfTTAuc1KDSD",
  "key24": "3u2PZnQEKCGXVXRdxRpLN1S63PxxZ3jAev8gWFVKXmEXaecCwK9L4pYkzqprafjSdhDXAN2QssjZqBau4eA7qaZ1",
  "key25": "aEURmJsQudSJsDtUrVopcyrPvEvuAWwYNS3ZwUSPP7fkL2UbnKXzkBy6aNVRwF6TWLBdcDXgqG2aWt2ZHf5q4XU",
  "key26": "5VTMwkq76uhgmb7CYEj5XoTDWJS5tswGLFDWyTowA1mR6zfREhCPmw1Jc26JteKfe5sDANUAiVF769vuUHkNLzkf",
  "key27": "2okGJiHiguzKFNDtsLzpqcyDhVDpG9UxbmCUJCkafZwmzNb7oPNd1g1hLXJzWkqEPUB6ZkRsVnEUMAhHf1QhjzVH",
  "key28": "4ywpb6vPWvpd2dbhu6zFg48fr8Ur8a9qVuf73zRz3B8S2KP8BBSphxd4wwQBkss5GS3H9KfRX3pR7xQHhXN1B4cV",
  "key29": "2gUANoUDusvuuAfoCG7RxvFPFwp39SJ43g76QvKeEiNtSNXkdrrskF1Gb87JacYc84aeMXdwTpcRzybt4wPv47AU"
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
