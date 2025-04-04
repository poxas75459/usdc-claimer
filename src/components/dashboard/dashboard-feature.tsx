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
    "2XYmpU3zLV4jd13Cnm8hFXgXZnLNaHeuhqHTQzKwHq6tpnmLMttasHjUY2PB1tu4zRP6CiVgeNaVcfTpz221PK8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LToeBb5hgXikfY7djGrgGDmmHXR8hwL8jCuCsUAhZN1FrhZab27RUiJokuN9f7KLdpQ1GBGmF7cque7XGZeDTwE",
  "key1": "sz4SyQDgq8xhAh1JA66i7XQZgqg7aAiRTm2HWk5h1Jfo1PHCbhdLK2q9H9HFG8tvmPdVkw1pCDrB1FGbboTfWXE",
  "key2": "2PJecG3g18muhuomhPLXSV2eQhxYAHmG1qQeJzF4NNd6fArvpGpJJboCu7MJoQqWEHEJs6d5eLS8PrEKAQEGbZcz",
  "key3": "aa8eKR55HVZPyAn3eH4ejnL11UCprWjyhVTkaotUFbXwVUp3fa2psC3FwX9jbdqq76cDdTepQZL6r9jrbe6NGFA",
  "key4": "29qis43LoNo98gyZdhUtT5jv5mjgyAtbzzqt6YMvkfkCfGCeYE2HW9nffG5HxDEuZDEVTTPHD7o3tQyWfyobtQoe",
  "key5": "2YonAth8ype7f4VapXwqqT16ei5C7oc8roWwcTeFXik3T8TXg57opvJA7UqGN3iv9qwaC1QREtCxghwugn49a8fF",
  "key6": "oYLtnsCNbanGBXCCeNjBvo2MGoQEbrPhJ9GhmxCGVyGocqZVKxkUnqnZeSoR7utXWhZbRCCBAYsY4Ki491CSguE",
  "key7": "2iXXsqrRJ9TPpmSvcE4uzbo5npM3uFmL3PyRmGqvjZ159KckTkMYnFfNebQmyYFjzQ66H4kCNoa5sT3WsLz5aZCm",
  "key8": "HVQjD9zno6us84m1gjwru7Xz21s3SVcW6jYjqiJtf123hhiEZuERTVKhujTQY9ce6j6HcSTv967vxME4m82JdgK",
  "key9": "3WaRY2QYAvEAdSo85xpS9WyM8zH8XSQ5Pi27rS24MYkg9L5DTcQ3QjCMXDiqgrgu7kFGrFgpqg2pqTzG5kZ4PQcn",
  "key10": "4nC3Qgjiqru2RMNW5juPrM1ETTe6ET5z7URaf4yEgbjM3KUJ6yabVenbCoeB5MwpmNn1QwWEVV9W3xkiXhG5nisa",
  "key11": "2YdK1qRQ2EraBA1sx9pSBZtSkyFc3ipRhCPdHHc8TbExKp4eyUaH64rZjpUb6pDCVRQDzU94M2iHXMZYZVYSBTbM",
  "key12": "3nKzMZQsERSHdVaoyivqPDxJKkFELZ4zkXFw7Rf9HShtudpZUevkj8VTJkLYXYeJfLPvLXfU8zTjPtbQGPtQoHKn",
  "key13": "52TcX5vwWf64v5eQsamADG1S5TxrepixGQKmTtG6x9boepQjxzDFkjDSpPiGr9MRH1t87KtverfzDZ5t74xTNySn",
  "key14": "XrzB24CBhSMyZewiw1CQzqPpbxJgN4c5c1je75djUAj4nUyJT2StVGxGvNb8YJDMrJ12K4x7SGuGeyJYj3QnNzC",
  "key15": "3tuowXv9M9snqLvNmMMUh1JayxLAgEdCZSsf8S3DwX95vbfNAjrAjA4BRGHkM5XDchFrWybhTvvsLZbnnCW5YSU6",
  "key16": "4D6VfJxpwtRVSjMscPqD9ExNcHWKeZgt1tiwHXxqBcGDYjZrtqG5sT49pLs6WgVqcWB5AjydC179k2ecga7c3Dps",
  "key17": "NhK33THXxf8CqvsLKC6hef6u7qaKddqNqo4gtVBzqFZAh4RAHTwkiLeJvavzAoAh4ny2Ltjd12FNZ29MnsfaPw7",
  "key18": "2RH23vh71wZFPb7csFxXRTmaxhJLX48ii5NjA35TqhQpFQwC2gLECtakTsZ2f6R26dQup3TucD7KywrPjoLTkzKb",
  "key19": "ia69cvvdArLcv7xg9pM4Y15AVSJfG2datvP3SrpVq2qdBTHUV25H6eMWjUGP4KEWSV41nDJpFC8RNyVCzn4oJfq",
  "key20": "bpjMyeJvm2fUpKDQRmznr8BP9RzKhdsaihzT2ggkE49HiavkiGL1depyRw54XpFe8Rv8Fw9YHjLpCv7385KCkdr",
  "key21": "eZEW1KfF3vWE5mrSAMHKVXmYZ9FwxZGFRdtGXDS6A4GFucaER7oSw1DDCuUaEekB8diTUPjXrDfKVBp1ATuFJGb",
  "key22": "5NJBsq4ArWxdTKiVQa2Y2G6W56Pqd4JP8pu9e91XmuDGRERVDMEvVXzdnLwjDzzhcq53W11bkzmB849Vd4nu77Sf",
  "key23": "4ZQisKtL616cVUTG49voanUw8cEoxg8EKaN8tJECeqRggVkFxRGzQ8n3ahBSiVRqJCWwb1dobvj3Gff8DQoJNFou",
  "key24": "2X8bQgusS1FfC9DTxktbue7ZLDqyrShULcK2MaAtnxy7oj2HZbCL5uzz5AGWgKwenpU6MMs71z2aYRU93tgJcsHt",
  "key25": "24TYCkeGxVRo58CR1G55u9n6Jrev5d754DWDShGSw65bcmsdaajUy9KSayXB3qqitXQE7V8S8kZLFft1R711fnR7",
  "key26": "sKuqzE6iM16JT8zzWtk2YVP83LGSjWkaNAuHJdarrxecHbGHvPunpyYGEJatZ63Hojd2oqtQ868Ksp6CYw5tWfR",
  "key27": "NY6BDnFShoLwLzbbwVtAnobynQkWcUtPAwY8kydLsL2jPxkU72Vcp5HS2TByahHN5iZr9hVm4wdarf7hXrjj7DB",
  "key28": "2RRHddU8ojsXPhkRFtBpvc9kZWFXMqL9Xim13STze6qaPTtChguTfRsbhAL2PDANMM5D5JA112WtotGoDLrsUw4e",
  "key29": "t7XPG3GYXKyebz9iuRuyRzNjqgYwB7vcj12i98eydeCURZSMh1juTmDt8Avr41SYTVmLKr2ZthStboqpzWKH8z2",
  "key30": "UA8U7EGUJJZQz9PEXYNnkmxFsQef7aSKBB7WArjDfphfPMmWRxDH3k8DHyPfAqY36VvEVVKx8LG2fy5NeCzSwHC"
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
