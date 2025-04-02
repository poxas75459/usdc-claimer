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
    "31CU9bBx5SMkgZqQMNXPNj9Q6Bn4rWE4jTTNQMiAGBvUCXJMQxf7r415Ep4uHL5CpF1TTs9Vx7X2o2gGaR8dNWrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EaQD8GUQJkYE6unfLk18ibYMF7W26VHyL9JpbmhsL1Djwg1EzNTQyedxaLytpvfKWpC6qcGMHvkd87TkNpoV9C",
  "key1": "2B54JsMtKnUidrnewEgLaizcEEKz6hchh2GdY1LXstApovm2MeRwUHNu8fkQuix6aRTwj7yA51oKwHZmpFpzTzoj",
  "key2": "5wB9PfeWRDztdFUdpbjFrLDrVPFNGBaCDg7DXeX4JpNr5Ldm3rw3FwjGBAGfgXaeaEgFHXbkbMaT4YequEFSSx91",
  "key3": "58bQA3C6LuukZj8ZggMrLNLgm33ZpnRrz2Ttq5th6s522Zw7dqG1jZ7X234WqMy7hq77c4YSDjHYAZfEK5yGR3Br",
  "key4": "5XzJE8LuiNQRvYUiRcvefHHxQaWAprvT8v3EhzuXhoXnb3AnvCNLX3cGEvGcH5SmFH3ZovVYKPoft6W9QeyykBBw",
  "key5": "4R95ZCuWxNCMhLAyQ4i7ssWsmvorM9h4ahs7nzFcrT9hM6TBRsbv1T2mFpkBLcLrtkDs43Qu2Jhz8ZbwrjAF7QcE",
  "key6": "3taViZkikhKYTJcvsoHMzYoaW9QU1D11gtvS9tfjXASyucXPQ9gfWSJUknomwJ728WmtELdviiFq3JoSFKD3sWe6",
  "key7": "4C3xqfuJFZ24aJNd4ibCXHVvrnznbhvuXmHTir7o6fxaZNbFZHgT5uQrivSidJbaZnbZaWax6uJdLZ9729A7ZGkb",
  "key8": "3pBXejyV5AbwnfN48ZTsvYtYyYiqPF72ipVFFBGAAce2QLVueTkLUcp5qvKNVYhwRuKB3baVHbzuJpXvPgsVbJkr",
  "key9": "3eyq2GQ8Vtx4bm4D4ymbfiD2ecfARyXgfJbeymTc1uuzHhW6XVjZTQiJJ8H9Dqvo41nes83JZ2N2rneqiPqYF878",
  "key10": "2BVw7ZwpjK7jFFuDkrwQt8YuD9niGnGgjsEipk4cGtkFnsPMQoU3KQ7JZTBsgn2HAMAy5FV57UR7hdryhMi3Ms4k",
  "key11": "3mt2xp4Zd9EP9gz3nt5FVwFDDE4WPadE3FrcjqQ82uiLAipbTHAQjXJjcfDo2WixkcesV9fuNqdo1C1fmqqgFwK4",
  "key12": "iMAwWvSrYg7Sm2c131ZpGf4nPUr7D3cB5nt8AX4PoTgUJVQSbNUyJhwA5QacD12GNh28DnvpgeM4hJSAicjzn14",
  "key13": "5sZwAbzbBFScdJuLLZvS2uTdTkUhpg2JDCW5s9LHYfmciqQuKgy5Mk4sByeitDHDpmcKxHQRmFRc9skc1uKcrQMy",
  "key14": "5sKM5c5fKfp5zZSLhfeva8NLuuZSrA1aKjtrUxwhQ9mT2GtjexX3CdBpWL6NaMuSqQMeXwHMk7rRb651ujsBp8ej",
  "key15": "5mHQb6etd25DEGZZfDVjVVW65Vo4FsgngdVEx2rWAHcwHg6ArAAveaHse2h12nTxchmoe27VKHciuk17g8dfFGVb",
  "key16": "5iWCgTpidkbuHVCC6t5EXBCNrPi5EGaMi2E9gcTFAhVzXe4cVY3Z6uRpx5p7uoUXfAdm4TTQTfdYgMSZqwsbsNnf",
  "key17": "5nWSSyPtcbACMTRGyrzK6Y8Gh82ZbkATUHWAVoovQZ9QL7TaxijFN9gNMreqHAYpMAn7R9Y9U8koMtZUL43sAkZ1",
  "key18": "2H9aQfXS1vQdZsbf4T8ZinncRbkn3wDTXpChZUzqRziDko3nxG5aUkJzYe4Z4daDjYkhHdnDdDQs9NMM26wEehRm",
  "key19": "3yxaRteUMJDyo1LAW8BRayLmDvg8W416Hc5dqGrHfccTaEAUvekyQ9UFcUD7H8xuRf2P9EExsY1UB4iJv9SS2Yup",
  "key20": "4nqEFF89o6xEnUoNDqZupm9uGWEzUhUjVJbAq4SLLZeDUkiYVTwEvUuHwsgodxFnRXztM3vySzNprACnvAQUkGHj",
  "key21": "51wHScmCbUCDkeGfpXVoefnrgaj4o6BBn3Mv2eskuRHCMeL5sFa5HE23BUHVxR1w2xB5MYw9uVymjwDVWxKCRSgx",
  "key22": "yrqGTnrf5ejLvc2p4SXSwZwXBsSASusk1nKoiiLzGJXB2RJTumRtsCbJ4QT2ysfTbtZtRcv9u7dfj7C8srh7rBk",
  "key23": "5sHYPyd3zvfneSE1pHmXQNExG5Ue3icfFdBaapQ69gzWk75fV2BEpw7pUSS19gzK1uhzBdnnakvmw1k7yRyVRzhn",
  "key24": "61RuC3MMALTEmf6VQJFD1Awad4rZw4QGpioUro532L9H4CTpGBBi7rBXy8zVhRSAD17dfXPLQsYTE1jDyNEdXtGV",
  "key25": "4JtJZtTXF1ZE8QGhwcNTfTZBfXXQ7EkzxvLnLtqJoKGUAGAt5bXUDNsBLnudSj22zH72WYw2SRQdrouBCLa3CqxE",
  "key26": "2BNsNraDcZKM86U499q1AmzJk1AyGcVTmZY9NWU8zc2wveVtLHBPtH7WHT4gRzUtwyZmW2ASUTDYeCcXbRvvund2",
  "key27": "2m6TnBTwhB1rJmbtWezzvKforHZKsTipqu9zk9EMZpbqEDcZabXAfxPENVVeiE2M12G1NoX3QdZZdg9tpHHNJMvc",
  "key28": "4Nkz189AaLgHM2u7735PJjHsQbheBLKHnN95ejGyxzDaPr6Yt5eLSrG8WYMCKXENX89yzv3AgQZvwUGqwfL6cmdi",
  "key29": "5hv8PCqGNaFyb9hkdmrXVNxdQZu1iqYGjjW9DXWuoyYocuaePqNTUNBi3D784mNiWuA3b2SkoPc6TnwK9VDttDG",
  "key30": "5y65qpue43Q9Es7UdYYquv4SBPCqDt8KZDy1UTGMUBXypFcrHvHVUpG4NFRH4DJiDstLRtdmMzTvXVHKGNAiWTst",
  "key31": "39kckxXF6S34eiLbEXFTw7eLgks9UoBMuss6Hcypwjpid4BzG6SZeZeX5XDNs9xs2wLy8TNeEowNy7nzxwfthA9w",
  "key32": "s4D1PYye8BPdw4mbqA6Vu2vxcPACgu13DmDa4RNDRaJtAbzYEeaFxLBbViNbjQGnxaYHhe5bt2vJmvHDv7h3wK8",
  "key33": "4oVwzE3mmLy6tgxZi8UcYdqvAGiSsSLwUStctQSt2B1GHqjgqhh6XLQAX3R7n2PaSTp6djPaV1G9QyD2sYJobDnm",
  "key34": "DUyqdtS361GmyqiBS7PS4MTE27iUk7Pc2fk9HumeSokTmucNJxrn4sCth4f7FEP7cFXknj8KNC55YtuziwtPsar",
  "key35": "5eY7fbCxTiwiKv6LDH52VNEntUfxg9T3RWJgymPkG23RvtMqZ5FDWy8pvBUh61JKATvggvNnz2iqRzmyZ7ioZC7x",
  "key36": "3wriyTUBQfrSBFVyFBNjBZDVV2SVZSx6MKKG2YWjP8iADWP1MwvCUdnrZfVhPY5jkVPmaNASwMn5hsygtNeBdUvL",
  "key37": "3oYHyTJPxtghMAoPR7qc66pwHGc67KRz2itfJK7qRWvFJnNsBCDCaeEDHRAammwNhyjWGfF7u9GAdxHaHkkHhoxw",
  "key38": "4APtmsW6Zjh8vBUDDaKJvS5B7uwkrg9v1dvrryYEf3YoVkFB36SNj3p6DyjZQaeX5Y8BP8RDxMrCD77StdWhAUjv",
  "key39": "5ZHGa61dN1vpVVwoAWyLYaCEHAoJvApG1up3MxXQzCBDsbuf6bpXow9QAKMxF1S6fKDAjY5p8dV5bUAHJS2uQBz",
  "key40": "3yvLznocLtSqyrgUKYAeDVhRW5YqW63YHoP1vMHeEPVNQCgHpvo2ZTDeACGHMCbQA4CXoyFJKAHEiMa9DBj1jHfN",
  "key41": "ZiwMSBzwJ5G8YmQhcQS7trMiXZfcAsTCMK6kxafNiqoWfMBrFvfSx9TJXcBQEsvqg7ApL6FuCwe13NHywVFzfHb",
  "key42": "4jjMWTzizRvtEunUrEChKg4rVLVpMHfH4VBM47eHB9VkUEwnto8YCvW7MP5dyztkgTEdVSAD1waZq7jkJjiuZXMY",
  "key43": "2HCKtNhLJPLFBYwkZAUhWLzSjWnvpiaoyrrNHtzCzZQBBaffnyPZbjj3njz8vKRji19HnhuxEjVxQjp3hb7W1HiM",
  "key44": "BBP3XUYUhPo6RH5Tc1sgWXUCDzeRhbfrdusVUJQRz44Sfu89FtKgSecYiHrzXcDUygid8hzZbhzmKeaN9orr6d2",
  "key45": "4sz19JHBcrzrGYwhFojhDzAqE6TpdZigznfj6CWh1FqvpDSvxnQq4yofQDMnBYZ1JyzzTq84T4drouJSu11JmSe7",
  "key46": "67BVbTm1W1ye9CTaBTCnzRb29bwZeGWe5gxoh8vkwLycqP5rtkeGtPDTWRZgh12XiyYMux9EjnHSaEZpba6QsLhP"
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
