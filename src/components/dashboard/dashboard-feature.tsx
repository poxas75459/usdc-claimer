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
    "3Lq3am61tnCf8gpQqnrNJ6vp8btiQdtX99mKiL5vUQGGdw9a8iM8NRSHSRCq1Ct3EYwY7PAwvHTAweoT8e8fsra2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwBgcjrZ8ZvxALrjB1xfxNveMNAcNrLMS9uhSsonECvFGbnof9U1mu87PPZbLGHN4uRtmhNtq4W7PiKJpTiWBYr",
  "key1": "3LG8UioaNPKUozPRP2oZZST6dtq686ytP8dbNHpDdYyWZsiDRPDshmQmHqAL8DTMk36Fk95Gydj5ff1ActovGZGb",
  "key2": "4ZrQ78B1SEswkqPdUQw7VSkeHPf7EwyEvCNgwywHnYzLgMi6qPPHJoZ7eF6cv2jV2d8yaWhRU9F73qCEVhTAcntv",
  "key3": "4ox4hsoikMVFMCeS6Betshj1D4ZeiVoFRNv1EWJ3LFMCLdRu66NfCctKi4LMLhHrbHGNrPVz28gnBzpqbk8oZRHJ",
  "key4": "3sKRStc7mTXzHYgmRsnVqG4Lyhjy8uZX6Vb1Cj3j9gjXLFsVELMzZHe91iYxnhw1PqYDh944ZQd3kJv56Nk8hN5u",
  "key5": "3CpuJd78asExdfQrk2nzVKMopNGv24oTYxgdrwnQgSgXqvU4gWmfQet3job1cisH1sMRZ7FT74zrmSbQAvByRDxw",
  "key6": "4KiPYnmmuNpLN3AD4VrHpA7RMD4fXyzJpjXkPesraHtJtSQYztSUaBfPkiwKGUcFnnHsyJru68joKyLbqMWPtzUs",
  "key7": "37u29FhPZ6qGDrRbvBV36SvLYXWTmutJcAQrSu777S5Dg9TJb67E9eMg6STZ3hecUq1p6xqYTC9tYbySweD7j4ep",
  "key8": "4xEK85EFwY8Aye8Ef9NwTUWZqwbq4LNcDQj3bSRKiGB2FcrwZSRaekZAp1JCzu8CKagt1pjwYXfs7cjRXaMjEuYH",
  "key9": "5ZwUVFyUbkLKAAkF1GAwdB1wu8NERtv32LZdsLkrhYKqSqKSwND5449wBa5cfzdtuSjaYqYa1vvEwsodbLYHiWhr",
  "key10": "21x7jaDcGRrm1eVHTcgPDS16yR83GBPMmevGdHa5ka8ySXGX67Y1pHbcT2SwFbzAK5fcyZmv766c2pde28o9r88r",
  "key11": "5SsnNwgBGQhStVMM95NjJtWw1rxxhmLqebhacBMpy3zjNppZNWXVt1uZxNB1mPucHjXgtLLR7UrWxczPoZRBSRoE",
  "key12": "5Lk2vxArCbjHCogTcKKgj8TYEMdFGu7jQthsaFEB3t5rSzKHudUm8JUqxeEzwKy9EojUEvpLkeyhuKcos15fV1Xk",
  "key13": "5kHC24J3xdEh5GKvdHbioPVKrwDVCdpct7nRcvBrgTkJRRCo2TvvE2kzzqyYcVj4JztSfiejvCr54d6Mg9K1EWQ2",
  "key14": "vjP7jBy9cj6Wm3U9p8QZht8G9M4viwQ4zS69j9kEjufsseoapPoXD6QnRHWewBnL73ixpryXE3QPZ6YzA9V3jao",
  "key15": "4hjVFYTE86V3Q6s6DRG8Gtuxjsi9res5wXYUSErknhPS7w4AnRqjyWdP15jiMxcZn2ETkXAsN79CRq27X9jJoeBr",
  "key16": "5QThtLavCsxDmJ4NhNi1MRj6MjN93RVErJUny1TKV8ECBYqdZM4R5Jr6VUsmHivreKqY4U4KCLE6AgTpqrKck7nQ",
  "key17": "2WKb578yoRhjjarUoJdUPLZqJHqTjXxw1NSrDLW9udmr7yqgZ29BQpTDg7odcYWq46ibqLFDhhxRCdHuJ6i2yfw2",
  "key18": "gZULaN3pUueZ7nATbAeJxcMwzmbYNAmKdz52XriFGhzJeZK9r34XdHGY99PUzjUnCWhSCgDNq6kZJEo6xJMBPiP",
  "key19": "5uiApHb332dPuAhJFSfXghT7PmnHNj4dBuMckbhDGuCp1ZNmUtp66Uv13ScMrfBqFT75K2TUHSEbAhLQ9V4pJsvD",
  "key20": "3BGFpeMkeSvDLbLVyhZsZmDp3tirn7PPWspEvpCYapHQdmA2Qp8jGyfKeHK6ZTj28ad6eNqux317xCLqdPTXxi96",
  "key21": "3MeEtYLGBpAV2Gq7eXvF8PFEQX2SfZ7uNC7nKYvSpXb93BYcoZQqxWbih3WvvLhcECk4ZsMc73VZCmY9uf7cSg6T",
  "key22": "3tJbxj3qSDttGuiMBxWFp6uCzrAMToTcExm23BpMRmR9vpm6GjAZdJjEZpbadyMzSUfcpkeSyXwBjAWCbvN4wSL5",
  "key23": "292BDLiRnbWdXJLXC9dgK4iaFzhdDDfsuggSM3BQ2BvKizgru4GVaVed5GdKrMzgzgmjHNC7dftdjPY1B9e7Etpv",
  "key24": "3PjWFF4kV9hsSHcbv9dCfhqdTw3vuew5aUopJpx9zdJsXa5FRhfW8xarF5JjoFRqZbNiiPdsuXfdxYfZNvxoM1hc",
  "key25": "2Q9ezMhZfEWy4aL7x45e4RWYUCaVhahTc4ZMtXUbnWA8JMmu1Z6r4LyySs8vDrEWuGTHhgopjDMzM5o2PM8F4RRu",
  "key26": "sSATQjroLwjEzjcPYJtdMgzmLkWMcsCm5vqLf6uzPTvJAjvEBTvgJzgBuG5XCfh42CeGUmDhj9tYBavBEvQiGLK",
  "key27": "5Bc7embscFybm6dGP6hJ1bXJw1YM6oXRheYiJkNaz4FmCLULar3D2JNV1zDPgyzFgHfQ1o3Eph3VSgkRtJ2CwJyi",
  "key28": "2LUJ7BHJ4r6FHL6b3U9MfSAgsXUSFzFGpbiQWnR1r2bzgBK2YuWo1LZNAHtFLN8obQFmFthvHzwKmkRehDxLG5VG",
  "key29": "5xDwTXxc5aMq4hPEFsCaBYXHmEr3ixYZqzrH5HrNBiPdE2NRU1wzSNgwwzMNBZz9reVVvnLE3MWtuWQTBc5wiVqN",
  "key30": "4AwW4MFDb5CGf1u6Mo2mByVhwTXUarbawENH4X5JXrTBFNupKb7jdZJsX7Kybp3hYJP4D1bHKJjVo4PU9zt7sLXg",
  "key31": "5KXr7Ado8nWakdYPAXv26oMjGxpFcsFY9YVPKKrWLgjmiALJ4wiPcPLCULMX1ZowLS7RiFg1Cji35bG5yCEzjzLc",
  "key32": "2SJthCwbFn4T48oEPFr2PMne1suSvAKBJokv2a2XkKjsaLt6BpVn8HwcJL4ATqWV5G876JSyUHV35neDPMCMPB59",
  "key33": "hJYcehDbW9vouSQV2cYNoU4NCPabbV1jFxMbLgXSCmTdGZ2Ta5uVsiBZjKEnWhczwEAoFgpjF9VHsQ9NByzGNGV",
  "key34": "39eqwXJzLs5XLVDKtBABoc28nFdH74bjFPnr1hqDqsdt1dBeR1dYsXwvWB8gtpUvCcT9ZAXHCXCexgCKPTuEX6YQ",
  "key35": "3UdZWfu6LsGRTmVjweXxpTH4FmqA8qzEGymt9oy3HSNFVWPZKzcKaX7sEbNFvYnfpzirwboGPC2eeteQCVkesWA2",
  "key36": "2q5Ym3ofXbUG4zWUTnpYcNMzjWqZRVhgnjoMdEVKYVxZ5TMjZLHQQvAiQGkLtebk8oEZsTkdGCqyJawgV9wLCcmH",
  "key37": "5nDbUYph1pTGnar6ou8cihZWkN2ZQFzfGkEAPhxYHhLSN4Gm8vZ7L5AwMunhEsQrN9yAP17stn87CuHgshd2ftQ9",
  "key38": "wxAYsBHaCxXX3uZh9Lu67P3m3hH1JXxmzW5JkQ4w5DVRyWxRuGXYwivP3V31Dz5d5RfrxLx4QUX2J3Mi3ysnVAs"
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
