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
    "2Bfo9PMoyCq2py2ojb74nMJndAGukdQibfLQc6xhyLdHr5GrjVotN1uQmnTkciRYpwcnZBtLVk1kNCUE3NbN1Px3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unhnxptBiz4S5jC2J8ZHY9pZAXkXwkp6PvgF8nUwx2fBHE7uELvyunPmB5uLQxiBJGPgRrhiuucnNjUTLBAw1Vv",
  "key1": "HNxhJfybZ7a4iBrkD5WiiTTEYcFoCmqVr63cwBpLjDsKVLp5aB1jZwJzqgBE2dZxf7J4kdyGkM7KhSaEPNCYgqy",
  "key2": "GTo76uGpaf9PX12JVevV83nmLSVC9G2WYgUg2sqwpnRkybJhPrjsdYrEPbGNHJveQiw1h3FnBC1TfsF7R8VXZVQ",
  "key3": "5sKzSD6gbRWgDGJttPhVcfWkXu94PhXMj6Xjz3cNWoa4dyjK6ru3srSX2KsgScsHURe6X9EDheNC7CUC7zTF5ctQ",
  "key4": "4eSZjxAx3o18YUmo4MyZungA6hLdKBgYv1QeaCxCzv5Uvt5pxedi1Z68wuBMYBPvMwdcNQ5M5xXxAKmoxCiqXjdr",
  "key5": "3Pbn3fCQmaS51av648HtkuSxtZnBX7rBHYCjkyfBwQqWqGSxy7xKa5kyPbYMLVJdJfPVn7fwZDY9YwTFM7XrfYBB",
  "key6": "2zgz76Eif2hQiku42s1ZzrtnRhzdiozLbZbbsWbvZS3WStVGmCd4g1ARtK1zjum1uhNtufGP3vkefJS5cxE5p5e1",
  "key7": "266eMNJra3FtBtGtmy4XgsV39V6rS3HCrMzqkHMzyGdS7aTA4JtGEwAH6B48gTQhjXgLxs7GCFSvP81aXVADoYjL",
  "key8": "5ZWnmTPr27ENxjtdLiZRGy5ZHNxZKQyvfJgt2a36XtcCRH3sFeeetLwvH9jc8ozvTNmNAEakQbEsbY58qHzMgJTh",
  "key9": "46X5AV9mjXYY1B37Hae63tYhAhp2fKMHvpiyFiRfKXmXqHu5FdSQqBzDVqPqCaHUXGuGxKWwTcVf6tVvuwwopG25",
  "key10": "3xrn6kqx7gc73zn8nwDEsgDWurNNRCopdn9vYCARNea2HMcWTysu4f8iWnrpJ3mBawnqQScL8TU5qMKNbVM1XEin",
  "key11": "2QvoSooP4tEgHwrVguZ5EWMTpGe3BaYosJXVTYoggbtFLzD5hv3ExQhJxprXj7p3eX4a2eoNKBMsEMkxfo4tY3hZ",
  "key12": "b479mEcCWnqn6otfMxj8Xg5UYf6RAy94iuMXWZMGNAwqquzrGTv7e5AtJijNTNGavJHn2SVPnPLvJNcsKHvMLu7",
  "key13": "3CMQZaghDoSEKMPRc67arA3HaLcr78WQCNqH6YJx4R3zs6D7sJbrJqUfEEajUhhvKPkHoRYMRS9MPqdrxoqhKzjG",
  "key14": "3QXSNtyeTTW3kbS9qpgeUpCF6wtkQX9VxykLSXC2bBAvELCqo6ei6Zb9C325teVfbDpuSsZa4Xh9KRBa7Lvk9j95",
  "key15": "43J8BjDQwDLzZsbZuSNPWiNddg3JCuaprZcudaa4ho7N8rNut5XdbCkGsh9RZo22QJBWeUD71RXPscMU4sPEc2Y3",
  "key16": "3mtk8J9AkbTVWEqCkZEaR39TRXGiEct5p8U21Q64w5QhgannHU4utCG5reeEKwunFFSRfcwKWpxtutqDH1mCzf4o",
  "key17": "cjj9zybHajMJES4cMxjFVUq9LXA91wCToDpeAvxrjAUrZLiPBEc9hzwwa8UCwYFisCYDHfLVCnpBRsCnt3h8XbZ",
  "key18": "4g72MxCWF2Qd8XxgGWVVMQArMAaXsQL2WmXm3HcMEDwVYxjUZ2h9BaECi8HGNFCwBCJUNAiFscA3kNXqKzqe4E7g",
  "key19": "hPRKNvn3KDSWfwmuaAwDie43kAW5Yt7bu1RReAo8up95C1iv3kz5cFsMcfatk8RNYyHfbVcmv8JgHYsDfJM8nnB",
  "key20": "4jg56ZdYRWSUrPM2tEbYo6pCXaTvcnHShSA9qBR5B1Y4FXYco9kobNv8z4jPSFBWp2XMeov8vKPvVFPtnqhsFgdq",
  "key21": "3oTT6XsQivUkGtrPw7hMKq9Kj9MLmhT3f3nNX3j5QNfWPhZFpDZYVvFw3KicFsDfM1GHbE625mjvZUPSHreHE8xY",
  "key22": "5K4t9WPZfsDB8YYStJ6XhBmr6eemfK1MS1zg7UoZD1ihvmuNrtMiVJyqcEQ5tFFiNAbsgyXtQoK9J1qajHy76Yn3",
  "key23": "2DmvESrazXvsQnH8Tux7a6bEzQhgTzP5CpUBHbcMKPispp9MMtk8iYFM2yYYecZ9fiTxw6nBPdDbYGu9bCyvfYrt",
  "key24": "2Dby6xRjaBypcRqFpvGcaMuXhMCymDNyLeMoLfTh9Nj6iwu7tiLpyuoBNp4HhgnqbETiLScheCCro1KEzTPbURVT",
  "key25": "5pamxN1JEgeJvPPp2AHjmMd694VHK9AmtmSPzeLDMSNf4mGwNsEKoXgiJDhRJYVCTrXJy2a2ZKaETknDvKiWATM6",
  "key26": "3FUzKTU17JUVuG88c2zbBCLnEtGtAAzPsRjALx7FJCEd4u13dZaTERGgaa3nQoLRvspMpv6FYf3JawnLujhCAULu",
  "key27": "VFDtaXoN3mzBxftXj1kZDBsYREMuEVQrzYzqPtgDV5c5bLCk6ZpKhSSmKmWnxAsxfXYJVavUSR73hJVMGsozwKj",
  "key28": "515XbLtaDoSZYgpBmmoT3toZ2AZuMUT6QdJ4BPEXH9JBvUpLBFe7Gf1ynqfKNwo1GAtqexnvahtMHXbSKqadZfTQ",
  "key29": "5vqXFCrHjqwisQKABruNuaYoYwszKQoqswhSXrBdkHUE7kBLX3t7BxVy2oSPCipZuTJQ8NKfVZ8ARqWuahELq65G",
  "key30": "5pCq5NGaT8s6zpoZQNXaVRbYxsZnU8SaTHLrCJUCeEgN6SQDYt6gSMiB7UX6dMPWNSf3sUHv6bhczeewK38dSoqf",
  "key31": "468oZ2xs5tpJXwZSyQC5hx2vini9GPUTpAQAkTagxhwuTwN8NAfeQG9TWQGF27WUqFwGf8dJrY1rHd4CAxk7q6uH",
  "key32": "2KgeoFasFjrwJSd6nGcXnUEvo7SfWQ7Fb77uCSnW3eofas8ctVfbURzUiGHiBGbDwNzp23iUJFXXuRP8sefH3Eh9",
  "key33": "2Sy1ytY2L5iznrCw2stSkdNvo1XjMaNUtYBCDHzPfLcP1rfDgfGB1NtL1HhU3gVo5i8YWqDwMofH7nFp78iLjrr1",
  "key34": "2KCRSXYCmKMmJVYiUu8kN7QiN38cz5R4VW1zNBLb1BoJunFsMFQgfHkvjCaMkEf2gmmjZLbBoXp5r8UtHFxVatSM",
  "key35": "2m2kZ2cp4vDtmkwbARLGJ2xJqmm3kGoX9y28ZBrPFn3fHfRp3UJjpYEZZi8gGcdrQ4Zry8bHmiR5QzAVfUor6zYu",
  "key36": "3XBNYPKMwwT3XUcYbVXtxA3B6yjKNSW2dHJdzaJ7JeGZX3oUMZGoZ7Mn18fdxW6Znp8yL8zvnw9zssdP5VPPBBsE",
  "key37": "Y2UHpQvAjuCLYMddLZpQvDDmQeDS57cjNe5in85FYGmLMWYe46gVW2hdRHYL2LCyrE43DqKvg2hRMLsvBQoTuqm",
  "key38": "3FF91PdcxCY5MuCcDaZDPbH4B44XbMduTCj5sVnDxeXQ82V2Ehn98fGsVDdwJMeukvnWeh7283MgF7Z855fiQiUi",
  "key39": "vYuT2LcCHxwPus6WHZAdHwzVJ33rFUbrouFx3pxg38xyZ7NtkmRzE72CowYiLJrbA2cbrbzDT93Jzga7DxJSkUb",
  "key40": "4k3DUqsrcx6AbXJuYFw4S49DHEDY4NJJVbHWtGNWe3EEhD9Lu3FREe97QrhpacxDb7Xng6mKtk2w2Vwz6h1dEn19",
  "key41": "2b7sGiZrXnh37kv4jkiAmJy9hHmkaLGmvJJ4fegnB3E9X68M1QcpQYKk1VuJ6BvMcxvebVgdMiYj2f2oAcNkDuw9",
  "key42": "KSmGAdf6qkS5xePdBV5KtsqejntiU2GVDkzsymiyqr9HVYHzmaARosNFp8jAjw6x5rSm7jZgm955oVbbuqo4K7H",
  "key43": "3tNsVvynztQeschKtf5Z7tK15pDF2Ch1zGfacttag1PpLdTZPsnWtZvsLnsjXbx2yoGi7VQgmDPcoHV9CwGRHatg",
  "key44": "49BxYxWXL7V439uZar7Qt4U7Qs6kxYmKrDUh6du4RAH7FKmZ3CmtsVJtAB4MCo2g8act1A7nDbTHF5dG2ZX2QDzp",
  "key45": "nneDReSR6Fygfgxq7gpYGimTMDsSpBqTkPXTfGY8iBHuxyeY1GswKwL7MyN9jqzDavoSxViWHqN7W2WZM7zJkpg",
  "key46": "62FUokV1QeTQEg73rSU4BjeNHnD9Dyo2Vamk8sdr4UpHfmgo3i978cbs9XKkH1Dw3EPgt6s3XQmwbMxiK51KNuDz"
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
