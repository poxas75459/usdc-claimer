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
    "3EzZoG2jGfKpBAZfRXigrEuD5USJZfsM156NobKtKWmAidQEGJUBecSRELW1DpP5P5sn7Bb76hcn3grvCHXAF5BH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJKBWtkj3kmSttKt664Ab5r7k3CxMXyD79Mq2CCBn3ZfBpMA7dSqsdmQTNgjPJUjQbEfX1yNEsZtB2mK9WGXvxq",
  "key1": "Hn5kQYa5FZ1qa8PfyPwgBsQjU7A5skctqGMsWjqvbdCQmi96b5yBHT3VMzThMfUpYLYjcmfctm46SgXWu5Mw9Gw",
  "key2": "5EJwZvskcU6BBRCkUXwC7fBHbv52Ux4DErBMZ87iRAwRb4hAVdVu1hSa7jq5ELW8WinxYnKkwpXxKBi6WA3XXsLW",
  "key3": "5n8p5Ve6uHr3LHa183KtVkq8HnWUWqYDdaSKuz4qNHs4YwxCQ3v5NAe1zziHwjYtp9rhRifHTGJbieGqvFTQVN8U",
  "key4": "5r6yyNUuu5MEYcKYYpLUoTYXqrNTzCaP9w7qMVDGkYK4GdKUapRUNgyxGdWpMEr71PUNPyfTifXvDobZPYrwAf2P",
  "key5": "4pS6eD1YapLPgcwJrAmB3JwaiRHHiyxmWqVWDnyuPq5XzhVb4UxFYRtRjGwMGKKss1MNQ1rgBE8sPaS6K4V2ze5d",
  "key6": "4P8PFvm9Fcj71GyHoVaK7VvdbwUbLHXwqt26ygkZDYcGAhtcNooiB5iKCp1mdSuF6MCNRf14aoHGZTpuEo2uBWPV",
  "key7": "qaRwDTNTWsMtPaipiKuuDmpUzkJihthd51QKP9KEsikzi4SyRUmqFUaH7j1zqJnoB9By6DXPjpQCiBa44k9GWJS",
  "key8": "4VWfjxT45w5SdcnXzCW7shEVKAvDDrMFDbgHgVwdL262Cn7SwL5GfFRqHjCPakPvCY7MBzmRAt5LCYp5QSB3A5fd",
  "key9": "5RmXNpQqypQsXcRexecJaHXnfSPGUkfVTVZ1btnSmJUDiUiXa5M9CieqHHnWdPQLDWZQA6zQbKVdY2iCWu4fWDY",
  "key10": "42ntUsnsYozHV1SBv7iREEbQtEQtp6JJt9qe39JjJLUF3Q4PdWdGK3EVgPqj4kqbQhcBJV2UWr2JxsAYQJQd2gBU",
  "key11": "3y8vFuL7eSSztWmLUEtRb7e9GFkMAonf2ZzeFuvCAaoSCmkycUBQPZXDnq9WXTjDXCE13X1PU7zJVqxr6Zwy693R",
  "key12": "LKCneMHPk5EDwPtKzMnnxFo7uaGUBjoZV3ByYb23FLxwmz8bwTZoBt86ypkyvots6t2AYps8czMr4PCCoPix3Bz",
  "key13": "5axpsnQBcxJhWqRnJhfCrsMHRS1g8YYjWDBx7WfgW3FUHXFz7yQiYwnWD1NyMsqUUeVS4KfJdcaevrty6owcv21m",
  "key14": "3f5F9mUBZ6cLhcq7E6Vm75u1sBoyeZPYYbRqqHDPwYY77wzSyuebj9MhHjXypzaVTLWABPhvsbo6zF5Nsh3fg1qF",
  "key15": "2hzfuAkKcepLWp79qVoVR9cLB2zDaC4WoyRnyqpKKJeqmpeGyp8EVF9QpnE726rSqFUMPcGiP8tALLtiHPZH9ML3",
  "key16": "4o4MpWT4dKGJGEa72XuqafeDLf4GXX683dNWzfhGvR71hRsQ4kvPoCmmvxi316a38oqZgMmHA5mrt4T9JvJMbRYN",
  "key17": "4KnS4nRrGZLJ7ab3JMm9dnwJ49k1jA8Eec88gXeuexynCEc25q8kkkLH1TQkjm6gPah2wZgxPmtcM5MxPxKE1E5n",
  "key18": "34GbCg9BN4N3Gtucz5vDyUuGxaSkPxPerFoqtJDQxhpguaqxN66x1uAGCWQBewxCZ1VdEeUigbSDFYyMV5GYSLEt",
  "key19": "4xXRFhmR2bSK2LkmPyqpLpXUUPAy2RVExT7FdfuupRi6D3CPJ9XVMHYrhNtSRrZUjGba78rbSmappSk1ePeJp5TE",
  "key20": "23BrwKkm62t8Q83WjfVaLtrfz5T6u7CWsZudscQoTzCaYsJC2Tcb14fC4aqbyCFGvcM1AvWjonfgeUDt9fRBzSV1",
  "key21": "5mAgkqfz3Nb3NoEPU4SRyweLRqWyRQKwjXXjyYP8KScTinWsyMxUEz4hYu8KVLPaFCcEZE98wEyJsAzb52XgCweX",
  "key22": "4LDHx7Q7U4auA7xE3i9iJ8d6g5B7EQKoCJ7wMtFoABPe82wH5mCCE6CC3LEkLD1diBzTFxzasiv7iw6LmNXMhMp",
  "key23": "2CnFmRvWRit2uYmN2zHz8z74RrUUH2u8PRsRrcpKSJfFCmBvsGEzrz81WJHLCcsKn2MhoLCnuCWRpTnMb44eiThS",
  "key24": "H2CHMh8NKZQmzGuR3x1sCfJtRbg4mH6QtTDNuXHHjGan2ZJM9sCxsBrrkdf1kmydhHzu1Yayvx748r96k13QTqV",
  "key25": "5qAtBVycu3cmeC7NYWZkUcvY4njzWGPV2LhaFFHG5hrNYp4XGUJM8QTXm6qcYzMvDdHT1NLcXF1E9b32FjZEAULm",
  "key26": "2f4PiXgs3hBp11HyXv6MMJtx2Dk3L55vecLiDRBYh23mVX8pzeK71FyyzWbJgHntb7jqegsR2P7Y5D8QfinVvqeX",
  "key27": "4zTAyAxFbJCxKbbjWjJLinvXMetTdscUReWuyLfX1qBJWLcUzjmyhrZwcYLx2V3A8kt2BnXg3czBu7G3pZN3u1LQ",
  "key28": "4mnenwBWgBsmZRUrAjw97kUozCvEzQpqEk8yv8yxBqpvC3BemasJnXgdkAKsiny5nzrMBNKqgykTWNtPD9FfgkNW",
  "key29": "45UH8mL7QC2LHQ3tyatPbUPf4rTL4CPw3ZkijJg2ASek3pcgGD5d79J8QXmBhg7WNDMMcSco9mCyMXHCvFjkKVh6",
  "key30": "2kwXyRbTWpSaEwRy3FhTh1Mjz8Kei1MPfjSLPJdWGQLhvXYJJi7arsqtgU6NNuaK4K57MtTWcWkcyct5sXh6VpVF",
  "key31": "oQkC28oSJrctpWcScBXtdGLmJZkWh2MqeijTNLTTwMRjkgM5nKsuHaMDWzXQVhHivzjxUFn5tYBe3ZWgurSedyB",
  "key32": "ACASRPGodWmtzWZAXLf1o8yATGvjdsaNwB2ZJxwoaEdyp3SFnWjFCjFMTRf1bBJG2fHrWoomZRJSMrbYytv3uJi",
  "key33": "2S8CxK63MTMi1xNME7yfowaPYGbjh3wboBTgarGm85Cs2juSKCjPeJD7vPTZdjGemnH39f8kynr1fkSwbjcf6Mue",
  "key34": "2a8M7gBYUkf9cv8QDsG6fjhv3azQCjtsksLd7djd96b36nMpDi5Z46G8Uq3Fhr3JcPWFqv3KNMZ57eLiYwYfCTQ8",
  "key35": "8R39HyUfseWi7hUWEb3rewuVdc4XuTzku8PVE3xq7tujPUQqrL9UM7jDW5zX58iPt4YvRLtCF2HLASbcLPWoYTX",
  "key36": "2g4Fze5saFosocLEd5oJ1kWVmpKpmorBHMx2kBvPMnMLEGW941fHKc6uYEy1iNR4iLc1rt8kzouv5gqb75xuBFuW",
  "key37": "rAwCw22fg5Eu64xXXE94wntZrZS4PWiqDX19HHaVxam3wPdAv84KemLxRLgFTGkb3GDDvRhhd4yTxtC5q7poidP",
  "key38": "2eAsEk9d9F7gH3VqGYi4d5H9KjtoR1GsC2ze5aVmf17ZXEaeQqse2a8JVj8cS72hsGA24GtJZrx9NiuPtbHW8BHN",
  "key39": "2JKp4dr4mDrDicXQC1sq4NvoiQwhBAvQhRgABU3qDRZF3g1uSHUSjm1xd5XStQHojJBZ9YUuFTuH1tgyo4GrKF8n",
  "key40": "5jZuTiTWogwFPa6Sfmcq8mQncywVMnmenkWVGi52J8Q1FWHB99K7XM4ZRdWUTB34Wc3qYvhzPZLUB9v1ASBQbfcZ",
  "key41": "5ximSv3vAmJqEd7VaVFkiw7L8K8fVHtscFBawcT4yxHtrEhtdoS4H2RAgWDZFnyZdbUEEntKLqz6y8z7rerd1oe2",
  "key42": "ZYnwizRkCTeCfsu67dtXGXNrxepT1W1jQSnSdyNkTZycFGWpL17BuQu1etpjiniyss9nn4ZaWAN3QVLr7Bhyf27",
  "key43": "2J1JxBK6ccBtnpEc9Rwbd9SsXaoLZNZB7MGj2npRibeoeTEChVzKVqfMgsn7d5sc5LEX7RZUHTY2a6iDkNyPWdTy",
  "key44": "3tKm5yMY643nuF7Zrukzw4bHBZByUV3MdvQh6kNX21Er2ut4fEcbrjbUeuFEUHwS14DWUhzMErNXfgsV5nXANxsB",
  "key45": "5NsezgjrnNzSHAegmdmwtHv4Urc1VUwN2TyRkyC46zZogV7UsCbqF3zDyV3sEhsBmHfECRGqRtfsRv9rdQGreZbj",
  "key46": "iDSH7Kqj6axJzSGsXhQWwBucS4mxVZjdF8LkJBDg8pDhKZZXx2A227JYMzsFnoYpwDwDhzSUwi8okAg2C9QbxZo",
  "key47": "52CEjbMtaXSw9iLmDwezEjRynaSD3HciWyAvhTCTjgi2ACHPWGG4XmoKXHKXRFikjB8kwyTCZ8QH6uCcUoE3udS1",
  "key48": "3v5XAB5AYKUQ8QgzoZCfwiKHUonEQSD7BkYojDKKGDHPoHKCWLCX3Q9se3TrDNdzMcKagPbBrcK4ybqgBCxmCMpv"
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
