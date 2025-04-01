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
    "BxJgzs87W29VahG9Vj3W7Mzqta9AamxNTRd22ovm5ezbLJ4VumLBDBWR42D4HqAk1B8xiQnNfLqd5Jf6u7PJL62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGrdHCaZyJ9ZcNHTJaniiTr8VegswRz8VUV2zYfPbwT13KLkovn1s7DGE5PpyrWYq6o9KSJPKSAXAXZNHJYMGr",
  "key1": "3SVaisKMMHpqSVSHDnHBifTS6x1ZZZuG5qnYpf6tFovRGUWnoVdpeEyrJTHihaqJuhtYdu6XUdYUoCQfzmFzc94W",
  "key2": "3jCvpyJJ3YWuYcwkmWdq5h3kHYh2sNagHH8geiVXX7ARxoWWzefzcbHjUw5zCJgPsMJcFae8SZDwqKBURNfQ1vrx",
  "key3": "2aLfxqpUoDNGnqxjBCdpmU52RYMt9NmDBPzAkMsPZezKU9jTo7umCYkYEZ8Zun4oTFFgNnXLegbMoEDpXPdLwwa8",
  "key4": "hJsy6bmX8Ay6zaaZf3G9Yq21Wa3Xnhw4y4FUuveifBFMuXYUWpcmXfiFwVJa24FJJnTN8cyRFjt35xc9PxBkRNY",
  "key5": "RnqJEiV4poNgawj6YSiTGqzKx1sjiXRvBX2yTAifbEEU2T1bYppaqb3nv9Xo92TEbnr5VuxSXqbXHXqR5XosqaE",
  "key6": "DaM3hewsG1M3fGUUMLpx9Y6HgGNQ6pD2dhmDWua4Y1wcReS68mPPKf3K8WQMS8XT4RMd2J66zL3C7bFoQoZ61pe",
  "key7": "4iL4Dq3pJj4vNdRAoGkVdjiuYfNqWRzNxa6swie2RTzydGev3MVMpskBPAMKgmf5SVjtmssBqjd8LjaYALZmp2g1",
  "key8": "2bsr7QQm3LfiHvA9Y4NviBSuupvx83TUaawtpdP138CyGNnBmW3y2J1n8hqQRdg1NinSoCknfxJzVo9mS2Ztm5nF",
  "key9": "5QtZ3BLte6bPwGYM4td6YjcfJ7e4Wai1JYP4dLcTsTdakKwLtvtN4rZ9vdEcgV2WZ9X6umykL4afn9CoxcLq4dWB",
  "key10": "KXog5JRJAcbeAPxAM4FPMgec5d8GPe1jLzwYpn1qUaHGVtkPaAycYKTKoUbeDRMUj1p486pE2WX1d4sg2U6W5aD",
  "key11": "3dKDTtuyR7RAbVo1XQ8cc5e3XbRbeUxcCyeUjMYuwcMfV9RVenT6GV6ZG9yJVSg6819DXCoHHymu1CzPQnRdjdqt",
  "key12": "2zrBUJBbe6qhVcRHwZ6DEnbt5Sc4vbohuD7XmVXytGyTM9oh1532D1Gq8vgbAZyCQVSZ3hKbMBbVJ7ZbqkwYP3Tu",
  "key13": "3N1C281D5iQL4r6T9EvnpNU2SuNHUUXgXeukRCupTjkVLjGqroYHYd16htwTQX8umARJKNSYcuGvJqWSSQzNMm9f",
  "key14": "4BVfHnyGQJE9fHqZef3mq9jtSjK1bqvRnujfZg9tzYHsBdjrByr6GvJZ4y7rdi4HWKYHvWGterjzpFKP7vzKsfXN",
  "key15": "4nzMTW17MmcSLASF6vaKaziToK1jht9wgBesu5NwLjvwexRyYgHxo5XW3u7nhUYYrKm9oaiHezJDsoXD28ATjzEm",
  "key16": "4WqDJxvHgUqoKhxdLACpVYZ6C3jKKpTJuNPJJiWNMkjJrfy7BWy5e6ewu8ZcF9whGGAKXcAnkpaXpZWGi5SLCzyE",
  "key17": "3Y8EzV3f9GAvGKVbZNDwjQEaXx9EKGtrKxnhezcSJmZn5rKnJp9oGgAfUime5ZPo4XoUGAvneg3crYXWeqj2PbJ1",
  "key18": "53Anginay5FWqZv1a2ZREpKHbfj5qzPgwRyHK41GuohAj2HXKNLJ1G5cUN2eeMWrPpXMZ21ymWn5SaTG4AJveXxy",
  "key19": "5DArYeH8aCV6wcFM3HTdKUrJS3SViiLBBb28QTDU8VpLiHoeWsL5dW2jUu2g3MpRq4xzwRQV9Zy1veaxd9gc8ac8",
  "key20": "WdqAmRxgq1t7H4JXd3JAuRD4XVUBSgV7zLYdayj3LYZTRudQS7KBAR5bs9xZoYoUsjATXZizS6rfCRys5xLeFva",
  "key21": "scGN6fcMqCY4vaZ45aQbcXCrkaNq1ZzLusi6bFxyFu4swPphEaRe33vvrCFj1HnzPaLVuEvh6vR9NJd1mfJTH4r",
  "key22": "HDAEbc3Wsh6Aieh1cV6FXAgNMHNuBoxaWbwTBfQ1q5kHdZwVV594DpeHkRd7AQDYg8cjSPxJdguD34RXgm3yFkU",
  "key23": "3qWEZZQqHXgbNrLME44Ff8XvGR2TJBwMUNxxg9DXhJuWE2TvYAmmytBXPFQyimhBxtqMm56Gju8MgN49iBQo5Yij",
  "key24": "33Lq5B2BJTsXb7MLk5CwViYdWVQh185EhNU2H6jJq7fUkqMt1e1nzB4ty1vpBfGuy69BK28gytCpU29rgPXYQARA",
  "key25": "2SeMjGxEYzBvN5of6aQ5Kn9FxNC8F1DjLtvWRRibfZcdFJnBdxANfDFsUYdRmEgRWH3qKXYip1Di6p3rrQsDRqg9",
  "key26": "61m9YR99sCH5LcZtH27LD6z6ZPweGoumhmdALFi9BTfRNBhRMmtf5CyvqRZPmfHn1ZXx3LRjDWaRcutrtSSctk55",
  "key27": "5vWDeE8RoY3YDMU3gx2i7DLfZqmBnnySRyeivNQzh7YqvFYYx2xYBZgibidSTUJzKMT4sVidj98PdtPmBxAJGCAf",
  "key28": "5YTVgxted5DNu4QUeHcKTSeSU2uVJuuGDq8Mkym1j3uxBAf8TatNojjDfEVtHEXFkcpvunqJMtG5AUZFcPBLGKRG",
  "key29": "2BY2XzcVmAhFmjgvToTqQoFUo44sXwXdwBHGucLLMQUyGT49gCT8WdMK5FeoMr2hDzV4yo9RdrVBGPPa5Cui2ifb",
  "key30": "5e782GwPT8nPdczu1YxTZHGfgdtxxCPBQDq3hGHPbzmBWzgzAdsMTM3PFQ3Te5cTXkjtL8afuFLjt6gMPPJjSaUw",
  "key31": "3AUzcg7nzEFzGC23wueeL6swmvmVyPTfLkrerewmWJqfNgeRgFGycrCRksnZ44i57jGrMZaa87btN1tFx1WVJEyk",
  "key32": "2JDJvAKz7eQmGPSfzS9w75DaD3zNZUE6Wejt6xPETBy1iwfN47D8r26r8ukHN7hGJS8hrBHUMjQ6CvbLN9ujTEXr",
  "key33": "265h69EKYFShrLQnYFxoYEkxFBEUX2ntL81JYSFDMPqba7M93cpcYJMaQ2tUcosvGrgdDWrPZkP9hKweeCaPQdWw",
  "key34": "2CEgnuESkQLXhGeQW3kBYwxHEFhAAwWE6LFpsAqQpT8r4cEr1M1NhZ97RndhuqEVd15PWWQm7Bkdh2yasPVnqwgj",
  "key35": "3cMPfTfj3UbThFGTc3kFndQr8vbtZCce9e2SuNEg3pBqRfJinLHTW1v7gwDQium9q5xtoxJuQYJyJSRyoK9mqy7Y"
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
