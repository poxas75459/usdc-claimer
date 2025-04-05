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
    "5gp3Y4KngSn8sVEaXyJRXgew3CBR6xqr3XyWwq2Sjjb4c9nZn1e1RtqQgfQsgbn9UNLovG9BpMvoMBuXNma6eRis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozsWNf3uV4nuwZCUG5u3k7Q32pqcEsh7Ym7uLAmKCvnarCPfE7HSfUHapxjFZhTjkrN5QrFY15Dt2jeKWSnCtSE",
  "key1": "4QRhYLr6wZXtSaMTmkpWiWgPgZE2dgecRwFfm2stTtu7kdArMRncASGqWxucE11HD3HVwdp5hfPiVcxAhXkmmZ32",
  "key2": "4wVAcp1UiqMHFFxTMynVZ78xdnrZoidXQRvQ1newMBJ1bJQDZAVLzuB3DpR9gMrBbLyxRoSQafE81hpDgAhuvJcQ",
  "key3": "581XTHH4yeF8kSK3j7TRMojXoqWtqCtUHsJFucTQidDxLSyY66HCsdWTdwzf7go61h2mf6NW1Ar8ZQrtpgqYeUv7",
  "key4": "4o53JjNmR8gGATkWeE4ymwTWQN7jstK3RiawE86Nwg59Sq7Ax5mRiyEkNcbsmNCC1ss8oKyv2n1brxtVFoXs3wfU",
  "key5": "2TomqjzqB3d4mt7ZevdEasnGxBg53A5bXyQj2MDY5zzDrtdXVEfy2AoABKLXxFp3wrMLHBGufQrMutqV9H5g1AEM",
  "key6": "9dNABMJtzCRyUB7oNxcGb9bg26xEsmhDM9T8b54V71jJBZRZCSArqUgveHgwMWn2dDifgZQhpaewt8BsSJy7yoy",
  "key7": "3KQB8nPH2uWxZD64FSSbvSae8eseLEMQD6fk31fFX2uze7JdrppcnKbpNi2pm5UZUbDocravkGasWh5oUUqxU8wv",
  "key8": "2gu17ZvJyywZxTPe28oy81q1MF1eHnMUuzyLHyVhPcBLFVsiUfKwJeTVswfiEmeKJHhJwziTxt6fUNHRiPcWavZ2",
  "key9": "6zEMimQuRNfZdrqPW8HomKwwh3xbR7hTmB76z5xFyViz7E8YCkNoBvYV4Tnh7oxJdKUrRQFzEanXacC7uwyTdjD",
  "key10": "PXBxp459gWNRN3AiHJEC2NfFh3ffooLytrTRo5E9SfeeSc97VMbhHsr5siUY2FFER17jGjxPsSVmkSX9skHqjh1",
  "key11": "3RCwiCp3kNNDt8E3XSEaTTAwwt8jvSpwQJszcus51gzkZYd8aFGVeRnkznoUy7RpHreuPa3p1rn7EVZiUEJp9nHW",
  "key12": "3eNK9wkkjnde2sfFGSDM3MZByioPp6KnjVpKYuKRbXuarTcd4iX2NtwtK5s7tdzgP5qJsDgc2M1QRtd3ds7hFFwF",
  "key13": "3Ddbo8r8kJXdDZbpjFRbhxKduriCEL6tzZokChZfuNJAHvDfJpFXHJxYsPLDRtYj3SL8z6d9x1MtXhe4cjnnV13",
  "key14": "4GWtY3qn1t3nfYpn3LwABBBzXeXMziYZFzjSXbgYZKDMtNrKWjcdAKSuzorgu8F6zmLkE57cNbjpgmoZrZCTiYjK",
  "key15": "GH93zjZkVX5f6vSeiYmYiKhpYBtJuL2swoAfhQvAomPgc4fxwadqnjTpN7crgd2Ud6s3sQkRcpvqxN3fSChSKBZ",
  "key16": "3XH8WzoVZWCfyg4Bab1UMMgzFWRpiaYQnMQKbyAqGYVfGraFLQjodHQvSbyrXGmP475onMcctdD7QJiJBVANEjaE",
  "key17": "5bes6oKhHn72CtkyWBSUELKzhP2fQBPKnFZUZEgnC5NULwi1eugptEdfTnQRZb6YPvwtWGf6uZKeyeeSsFGTaTVm",
  "key18": "5SsfXwBWGspG1gYssRmVnYkrFPChZVvuwCTuodopuB4jv6GZkniwei7aaoSSemGnB3SmhqiqNwv7RtwNjVqRaTE4",
  "key19": "5ZvADoS7WzLX1WUwD7RNLTetCLJSK8z5BRtsXndcDfZLYcnt5tiHxqkHSwymqMTAynX56JoSNLWWFKx1YR6FAUt4",
  "key20": "5HNGxWikZLB1FrBijwsqEvSEUUMrEHLPHsDoYeBNBCgfekoo3dDVh81YeYuDqj74hLM6hzsTa5RqSj3jCMQfkAY4",
  "key21": "261xY5CtG9HRZe73BjSXkLSUDQ9Zn6XXL7ULU9V92H7im7rjdwZXSxhT38pt4tuXYjEKtYHQNZYaNr72Mp7htWi9",
  "key22": "a9DRhuMNpG4gVHN3D6JCVtXewLPZXztzmA3FpwkgSRxTiEYi6Ch88qDQQ8A5pEbPWVcDg5eAD5tcX6mbJhzdjPY",
  "key23": "3XSrd8X6oMeZ4S8GNjkjWCPzCAY2Gh5iBgN65o4sqEDsvDPfhJgUXWwBvv5ttsKz76SffUp7sU7hbudq7nBgkXGs",
  "key24": "4jHvx7gqfePbgAZDNrx5bTAaF5LmXLDTYu7u9YJn1WhmUZLZUEMsextgArM8q9BmvBu7qRur4HYKE5qmTRfL9rD5",
  "key25": "5kBk2TMui55eA28r45f39KM2t54PZsnPkp58sSfDfz2QueM9rmdN44GQSHQApnw6ystTFZsVNnpbmwYC6YTKmbvv",
  "key26": "37yQTsAeHRxPCE649aouUF5vPHzNbVzuthMypvMvwYcLRAvYEfzjzhCVZkroZis25Ev5LKK3S9hKcoYPqJNbrph2",
  "key27": "5qiRk8oMa9DWL2EPBzaQUti5xr3n1Byc1c3Hs9cEAHhfz2xQAReiLKKax2eSqFbnVjEqddK2t8p2dxTd58gUhr3h",
  "key28": "4Yw15J7Eo3AMKPJg3D7Ezijq3HArXwP6M8nUfJw7MVAYncAUfRUrjURhPUNnWPnKKRGfrALYSfmf58jdE9p7mAxt",
  "key29": "5f55b3JGYC3gPF79FT9KehggeFTMLz1EMgyh56JDJJP68cby2heXBV178E3yofLwmZ8RDcUkxRCvRP61A7wK3Fzc",
  "key30": "2S2MeB3h6e95uYoRFDv2knzZRNvrqKqS8ZTkBkc3XBcRzxZFBKs6tMZ6D2oRXEkNhtnD1zDrKCuiVdFeXz1s8xRQ",
  "key31": "3sZHV2bGKoNvtK2dJ991e4CRU7fP3yKHawsgJE7kT5QvK9R6YKEFJTaPUgDp7wUERLe7te3tQrJiZDgeGtJTc9Cg",
  "key32": "2X1qDyz2C8NUnkMooW443yD767w13VnNxS9uvyxDDCfFVcnfSpYYV8ux47gTnejxPEP9F9gARPWMz4vbT4HvRyjL",
  "key33": "3uX8u5CYREJm47hp3MR137Ub4vF3358phsnuvrBQFTD4SCzuGmDerEAETc9kBxPNWy5dr9BR6mitqcytiWUH21Db",
  "key34": "J8JsBAXtkEgZi7g1fqf8iHRKNQEzHcn9zkDjtCrSZGQ2dE1tbAXDRyfyEWNn36cjywEDZRL5YL3hDNy1B3eKHdm",
  "key35": "3C6cKAwiuxQYEZrY67MXC7ncqaPFUyF9uobGeZpWS1dpc5MpNuT4Kp4gQjKPBf3RamouVc6pLrp59qoxjyuNtvDb",
  "key36": "4Ln2k9SxjuMn8HSm3KGTuUYPMgEmhRaUnFQkL9kYqqFYUCoZyCM8UdnS7x8HBMFnRbuMxE2jcJJQPXRFQQ3x8AaA",
  "key37": "4B22wSw7m8Vq7HFn2ka9KjHqvEjPZBnbPACXHiPZDt3LNrNZUNbKj18FEjwRpURTcMjuojjxn9DNYfQ3EfskruUW",
  "key38": "2u77j3pxjSxQu4vxr6uD4kFvELLbF3Y1RSdG2LYXVcjMFoahdqkpWoiVJYEsoqJtAHxGLXXy9wGrZeD8qkMY63yD",
  "key39": "4bi2pGLJPcPsyvK5tB6ypu7Fkprp2A6ZbMy4znvp7t9jhDuj3EtZRYnmNENoJArPLJ85AayyEDZJY47uXMX95aMT",
  "key40": "2c9hAVfTRuWB6AsSqLodHoXU2BtHdq5Y2mbqB8kn917tUMQDQpwbHefnTaY6781qmf9QumbLey5jED4EYZupggn8",
  "key41": "36QmrFff9pRN6WM4axKE9EaQCJaBRR2cn2cDkSCJXis6BJRSvfi6YseZvRaKom8pRdWAdA3X3K3y2qv9GuLQfBt5",
  "key42": "4uG7uv7qJyhL3WYncynckfNtWhCVPMM6fXKLZBcHvWxppSLftt5vP4MHHfozd3n44iokTrKEERzqy646ao926JFu",
  "key43": "5vHmEii2kv113etiBLZczDDtoj43Me3NnHk2uuWWAXrd8S47PP67c6pxf5t2PeEEBtviotxaN3YYnKec5qyNu4Jy",
  "key44": "5LJuk52V57yfeuHHdoGFnTNE9rNZE7RL5UYhc318rZtwnrigsg9BCYasQFyEnAWRRn8PX7PS6yp7wX1M4Pb6RzoT",
  "key45": "3LVD1Sfsv2uERuHsuLENVfSVrzYUc3YRJGXUT7KEUbeT3wZfTHRATrYUb6WJQHqbCG2L81mVZTe1t5gmA58TSRnD",
  "key46": "24nt8vWmUPDMgNE2WnJtaiQyTLUEj3xWX7Jhc3H4euzcVtVEtG7jimXxiafNZ4uE2FPcctAWxFBqJNyyqrVcKeB8"
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
