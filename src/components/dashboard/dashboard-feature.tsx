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
    "28eKvKG337chE82y7X3pTi6tiqrW4fgW9azoETtFvdoYQYe74zPrQMPoWM6trYTXcd9vgbQUc2ismx63PGYU8sGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XidyxaJuTtMBLvD5HENvdVnnFGjdSrcTrUWUEjMeLeK5hxFx773EsgwUDQuTpfSy7xqyRHvj5pgRbpseXX1i2da",
  "key1": "4XojhJuzD7hZ5cf4APFSUtzr3ExF8D22JDMQ7r4aREgGKXyoNKxRjBpBkYPxeh5qGuk8CDjXhiP2aE5Jb2iKzqEL",
  "key2": "59XTNZxaPajAruabqymVvq1H8b9JzMPvBq5SEw7gc1zHCYPZqbKXFPKQR69YT1Mir7oGBHnKw3RzpuNGqsgBFn62",
  "key3": "5N7XKur2MNVHEgVkD5goy3m3JGZbcv9SLGQEh341SrMFTZLkkaJENLANQPHtR9qiLWALuGxjqCTnhz8is1CfGrqu",
  "key4": "3Sq6a7YiVZwZfrscCbMfornRHW7a3HTvux4nU2cCFajLKjWCpw6Wr4DzexgBEHPS2kqzTi2PnBgYmcVo44dcEgDg",
  "key5": "5N44F6w3g2ULuJodpTgn2Hj6uanFSwVvWmPNdS4NNzVFC1qJsnRdQR9LY3rF2xkDpZLQgTt9LY9J9LAqipwL5gZY",
  "key6": "2j8ztsJfEhSZNR6jh7MLeHK2iHsFA3Aj2gWN61Hya97FgGkfnSesW6Rwncr2u8RjFiUuFN383aWVk6rwkcPrPhzk",
  "key7": "pz3SBrCLVi4kkc5Y3ugGaszD4dZGwyvKrYSAdMjNYaH4CqhLjKL1YwfHBuisMMYYvH2hF2gTSsbN3JFTSw7nQRF",
  "key8": "2daUSBv7x3UgJKAr8XN2ccq8RvSzGmyNeV4pjZA1dhLQkrFoN5pPK8wFTqz5bZALmMUeRRdjHkKwhHFcA3FyEq6",
  "key9": "3j9ULKcLtU5RbzGzmmagRUZVQMECrsYtpAAXRnME2Sw6auz2W747wchzKAibXdArP13NmB7fgVBQp5bJf2PBRaGx",
  "key10": "2LVLeGDPWhhKSjwpc1vXovcoXDWqdzdj4aCMhp5mZrYF2VKqqNbPSeVq4tqETvMHwyXoYXuLqC2kPCzoGu22cAuA",
  "key11": "UzQXJZVg7pQ3i2BMU9FQJjn8kX7Wfc87fKitDbay1BJcLh8UyrscLpQZq5cxwXgCekxWZJ5GddMpXydnZb8NiQt",
  "key12": "32Y5JMuShhDVzJuPjnf9bNwTzRqYWe7Nt8tAhLESSKWHMsNTuFa4iBv7hXeXa2nyRXi34jnMRjvwQjetBLdybv6j",
  "key13": "vaXG7ajZw3J14cMdYYt6CEfuAwXrk3uLtnMD7V3U4fn3bdh1F9bKv442VJ8QzGsgxKNNDdxkCh19Kb7XLgznmCU",
  "key14": "YjuWyn3f14DaTsFDeXfTarHiszuFQcUZZaoptPNmpCKGggw6SZaMT69KJZtiv3cU2zxTa2CZGtJEeEzCjrTr5vn",
  "key15": "j8vq5rdN2v4bAj4QuGfgVhqcJmzubdPs23ZTr2MRXtHV4m8XVTbmAemyZEdoTHAU5Vwy8qvyrzBR7Tdh64yZFyd",
  "key16": "2hZq2Y2b6Gxg4vHMKie4Zxf1G5kR5HZthUnBZfJj5C4ywnjHFotc3pdnCs2Db8d7MmQmVhrE6zXUCK29F988yL2t",
  "key17": "2zousVBs4Mk2Pvap3eRdbvpZdC7Dja2GgjwziAKZBL2mw2Y6L6rqRj5fWuB3LeQrqDjUuyFrMWVYkBFZdmwMmoXw",
  "key18": "43EZ4gkyxbqm5E85UrzM5mh6wmWWUCCt3jtQykHNpvDiqR156mRRXDf8Kqc9foQfj89ntBk94d4PSeRs1kExTrpD",
  "key19": "e1FH4SqGZmoCetw4xnuvVN61y4ec5NHvRqNmKVbCbmxtU7Vdve2nH4PLb6bCPdELMpzEoehvBPV4H6MkEdkgsJq",
  "key20": "2Pa3ZkvyYabTDsCXTrZ9vRotAohirxKJvdhRtaiHVhZzoZY32W6AQUUe8SBgLxTRSJqMVKv7uo1BfuBMWhh2cM16",
  "key21": "25ULPQko6hRyb35o8pthmu4MAxMqBYZ42AdKyxZqNCFyhFurqHvcppBSH7p45rXJceUFPqdynexzfoUxh4NZ1qSF",
  "key22": "3QZXjQbetiU4TDCQmn2gJgPoDaKCFH1PEznKarKVgC1gMaLxqvxhzitJ3SENF4d74EGDMUcC7sQRjD5MUHLJesPX",
  "key23": "4TYUAJUuwEYadGeRQexBmt8VwF8rQJN5ALak6PRM64dqe3zZmeNzJ119G7Wo8rtiMLzbEsCBMUTnMAWHJ475CNW6",
  "key24": "2XxoTc96BLpNuQvKLT7jcgBAbANjH6jZJf56J27t4iMzDrdVesUEnwzYS2BjewoDCps1L1GTTncvydaATmRPDjnQ",
  "key25": "5RUyMqKHNonFkre94ZejUftUP3bREDmSxjSdLfXfrgkCHHnTmvth2Zu4uBMaYRRz5xD3EAa2sruFC1eWMmEt8Fzk",
  "key26": "sesW7K3DJJCEfZn8NpaLzGErn4RaHsMoQooprHBqNXXs1U4V3hCDHD2jQFDF19VbFGpduRddsErysaDDSeemmYe",
  "key27": "5a3EwZUqY6BmArVoehgZQHzQCMnRbAK19MW9ySW8kMb6LYhE8CV3uQ9enR3khpEvz488doJZCMxv7DnALpGFUrVh",
  "key28": "53bMZu4UYPkMQ1Vz56SijkgLZKKpcdQKmAxNHBXkrPQtp2qAyKe3Y7PrTFhChmixZgw7kW6nx4RBdSg32WR8BHEE",
  "key29": "49VFLvaoE8ACfS5eW7yrNYjMRVYgJEBW2RjybSR5rHjRtckna7sdE3oERRiMWo6mmUvVph4FYHACfXZfEkbMFENw",
  "key30": "5Cir6zgzxTajsMV5v4EZTzveAhoKtQqdZFoNHTWccLb4NpUDWzB6pSTY24XPFjosTV6cVcxcUeM3LuwyYWW2TsxR",
  "key31": "124BzVMVA1VsF6VyEv8uLY28Kud5H4UQmDhRiSp4tTHvsyuZotNjsFDasP41JeWSXtuDubH8oSGNNTo1nQ6Jxp8K",
  "key32": "vm8GUZfPtFhdLaQ4TadXUC2m1hQbKSCR7xvjwpriUQazMtWTp3xfr9o7qyqhezFgdTsS3digoYuhhbqjnRZCkkY",
  "key33": "gsXJL4qLJQqkK67sMyP4EjwKM8GzuiUKnqtBwuAHQNu5jgjDV2dhr7VyZrxFFK45YjoMDpoXwdi67E6HH3HEgPK",
  "key34": "aa2TpX3LCUrNfoiJMPhKNuakGLJUcVcydSuXGvVN4tzxucHbt1K278gD1VrqrSjLb6G2CEt88y3DwYUdskQ9JNE",
  "key35": "4rArq8efkupk2Jz6jfjfN3PcQ9hAqSULbnT1BZey33U6K7BjspYNcJfQWo28A8PjsZnDifdn5LafKLyEypGLNrsL",
  "key36": "65TEkoMLxbL1YAu8cznfJHj6kjz12EoT8wdxw7sCEKKx3esVFNWGmFuYeUH1X6GFyGMLFnPCoqWZA5KkxxVmL8pp",
  "key37": "sLndvoZj51JuCr41V94gidq8XNHQnHtASBkZvmf3nre5YpM54ce1nQhmbaUtMUTqAkvMbHLCGuzu7YcmAVazs9X",
  "key38": "KxutQmkMWcGTCYigR6T9ViyFNQamYGDiosiDKxnEEQnKN5VRiaEZTYawdZ3oHfhNafWCuV46HPsNU4f4hozWjBs",
  "key39": "4GjtgtDzozjzrAire5h1CuDfhrKzbKzW5B84zQVdzzL4VHnmmz8ADge8HvYS7xLctdQTFsf3RcJaMhkK8PnR9S5K",
  "key40": "9Hw4tZAte3tSW3vbMPUc4n9LQajWUXqACgkXKjsxcE4ysiGZAcBKgKT7Uxqd8Msf15t2PACYdHY6inwaH1sn6gH",
  "key41": "2S9xEbvZ7nWLA49s7yp4CtRSDLsqo68R1PciknnHtNwKYYCJiUyDfbv4dJ6BxXavCo8z4GENchrUXEw4eY2UfpEW",
  "key42": "4MMEpqPTS4JsJhDegq9shzCMVm83FEyUhBUu6Ldtu9jbPvnVFY9NFpEAY77SFELgXVK8WXC65dKpUDhfMQaxFa4q",
  "key43": "4owFGAvYLgGNfoVFo99UsyAdKL8edaZKLYdRY2Nmw61cWfCYp9URHYjPmL5Huyavoutt6qUJsEBF5o3MBUDJkUKh",
  "key44": "3khnNyd8PD4vwVpwZa2VV3jXMNwe2fnnQfVDzMZhJtLh3dxbXLKc8coiVWLxzubjE6srQDwWmGbsVGH7xFCSACZj",
  "key45": "4sJsPCSgwi4WWxAqEet7eagNPkrgJq7oFTaSJ8hRYQLbRTLi4U4hakNJnrH65Q1gFCQGswGTghSaTbmAEzk5PC7F"
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
