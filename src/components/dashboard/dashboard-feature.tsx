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
    "4Nd2iBTVjjVwRJ6X5R9uwogAubUor9VacqzKC4oHykYvR7WvxZcLSuAaE61oZHQoXDgLCTYJtPeGCMtFyz92myMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hNSiTXuKGXjmpG7qZqQpdctNnKYb94abyCE6dDqrA6r2mHSakhdeTkyVzqNBXTwvMccfKTEWyXEwPExJUL8a9r",
  "key1": "2GJJKvcTWvezb9CPWZ3FTCAiANmNSzM78ma5KkkqhCH8qcWnHoDDQwtQcGwWhHWePAMJPTusNC6cTD4xkVDCkT7g",
  "key2": "sqPBijPwk2CsaYtVW1vxfTSGdYkpCvh8BYt4SjNNUtyr2jcxKmNeXTWPpVwN27LWDESTjSCrnQJFdKYzRwPBZrh",
  "key3": "3iFR2DpwpmxwU7BoZigpka7pU5J9EsczvbhLnw5pzqDEJof2K7Uv9NvKnh9FLxc6KsqbRroXkcetVQCWXgCHyk4D",
  "key4": "2Av9nA7Wi8MxiwZJxAJDPtqxNRMs5pRz5NWjJvWcRysYsL6U1fkBfSSKNrJx7B4KKWa3qXBiFCZzAQsNWCy313Bf",
  "key5": "4gcLeAZFuM1p7tEMKJ29tGzqh6j1Prr6xr2VLbgNBmTCzGsbwAro2cU7o3eQVjvnx3HNGgB3HSTNpVQTs9yNgryf",
  "key6": "5WGuFJrtbm9cQA8gmDtWcHe8D4hReW6T8JnmEhdnPghPtjYrM3Egiio6VsFnYcbPGDgwvxyyXMhwFJ2k35PTA9yp",
  "key7": "2pkqDSadB1PCgjwPaAAxNHGaPZQajwVDGukPZ2JrAfjiZ2jN4QdRV26DspZJW5yJX2sfMK8LvJXcpGiHHFFFm3NP",
  "key8": "2rqfWgmAkVGV75tq7vqhiUrn96roe7uKwchTMhFf2Ueibx56Ag1K8E3hsDZ2WYXKznPWtCc3hDCxKHx1zy8G8ZZA",
  "key9": "3CnDQEyh5fJXuzDRAcqB3Yxd7LsHQEzTGY8wkNYwkazf344bJH3jApR945aTWEEphosVTqnicMAzTB8bjtxadMNJ",
  "key10": "jdyBEH7Y1f8Na2g12PX4bidUdBpz1LsSku2eTocLqWWZzDmXrF3uUv96kEnwtdZWUz3wwUHnj7CsBcuJCmhVVkF",
  "key11": "5zs92Nb5wqX7uUhKBpF9JE1Yk9WHm8mbB2m2yaQrckaAT45pHTvNJUxTRL9Ni7DgLNSdcFZjvfrxjwEMM2TJMvwi",
  "key12": "5ahmCDiRB9CCheENtjp9XkG4kJ81pkmjjhhHQ9f7epcJtDd1uAGjU6TiiqzeTpHL1biVpNNYLFk2Ltr3qYAwNu4a",
  "key13": "4TWtt3Z9Fz22k1NG3SUwpskEBbNXeAUxvTAVk53NJZQNJvZEMuqdtKdZoP4S3QhtbnECgr2Gp8tmTLWXTLXyds1x",
  "key14": "4SRgxNQAJSTSAZWVqnWUvZxhGdEGL7QE77cuWSdMaXbbtUS796Zmhjt8iPummAa1uFmssqaS6G7X7BbWJF55DWDF",
  "key15": "46ESeFEeeHyxWBLHK52vxPGJoG8PkNPLbMZxj8AC5EapsWMzoAvkbTeb6nbiAaCCh44apMbUMFkJrRgv6xwvErDd",
  "key16": "4LcwDdig4qEiHMBShzUvrz8FeJTPzp9g3hF1cm6EigRNMJ69nu1Lb2wBdcHkFwny1pWfoGgCXqmRkf2hbhJmjcBv",
  "key17": "3CpsKJAUcwzRCTwLkzormwERb4CQrhu1YkycNeAUaxjn4zkZ7tokbTEd7FmbK1idsZqGpaWDUu2Pn4Qh8G57642s",
  "key18": "2SFMmB2jGci5ytQHVbjZ5twqvnQ3JkWiR425dafZfNXQbAVMzbzGM2TE7Ba9rCHfsdSNzeXSgJUUg9BwzYpe8G5P",
  "key19": "Csz8wVcF6PNeeHTDbqJom8UZAuxrsBFnaUjLDM2hx53ix42qTkCTrUdNWpW2kZEBRrt4fwBig3DyYc3aFFsfRUR",
  "key20": "viFkQMrDzPfTMhJxeMK6CfDiWcLFZLVYY8iD69hEzdHba9Kmgv5jY3XkpSnoaoaLdeuPazGaLEe4NDJPB3HUDRw",
  "key21": "4UyKkTnsHzsTkuPfoamQZQphJp7ANmh7TtKe3wveLeEzxZq2okPsDLM5QLyEyKhc2EPRYbTnpYnuK3kseRysF5ME",
  "key22": "4WEPcRDaJmseMQRMR8nzLMBSrdzLGiTxhZwde9xmHUvynAKxbZ1sbNxfYknUDy2ktz41H48L1KXTwGzYyyU8v74U",
  "key23": "5MQM1fobtPFmvLdwDGfgvz8DGigNhX2vEz15VxBsFTp7o9N7rSzoaXE6toyVbp28j9jxMYdkBBoozRp9ZNcteNY5",
  "key24": "2UxTwRhgWsxsFEHx4K6PC7LbBQkP2faXThUketDLbjYVkm6urxxtLZrp4cfVj8AMcCfvL7wnWwPJCMWr3P5sPKLj",
  "key25": "2Nh3JagKFSvSbzjsNurcJnXasiVbVwnX8Ha6N9i12pM4LoiP2A1vD7SFZg8kAB3rMDrb9ipWCvfKy6v1ocDNttW8",
  "key26": "2tfBDgirPXfcVsneDquCoj4zYYpd9JyUoaPZaM77roB6PuvHZsLLNawJxKuxuNVNM1PwdMchsyzUZrBdjVu7G6Ka",
  "key27": "4Pq7qpNon7g4bzxK8cUbdeAPEiMyJTv1bZwHJ2GFdKfBPB7HnWZem1gbZg9z98zYU6CSNk5MtfrRUFrKMYFhfb3e",
  "key28": "3j7FVrJTrqzh7omRXk21ynmBikofEMwcqCADTLQfCACTJyuVH1wuBTQHY4a77BsyroHRv3G4QgeNHiDogfZp437N",
  "key29": "VUi8RdoB78Vip6bz9BtxwWbgdQG1Ko1aiCvAmuaUjL5vYb1k5SQ354bGGBhUkij3qaWS96iBqm9vCJL1ojtbTVK",
  "key30": "AWyNoiuNuyvpGs1SMEYKFmMBLt521EJfZ5BHvy8E4s9PvzB2ePo3hbvkgUj4RHTDk3GrGT8vUWZepYZouSAmvCE",
  "key31": "4tguwXDxmbg51fQcvigspTeSBGLADGmJDDXuYcZU7ximJk6j3MeznPLBgsY34iNgsoLrNwgBN95BJwAtTKmBzwQx",
  "key32": "4tRrJh5pTeSTz8s5hxWwZWwKzVm3BRTuqJTxTcHVZLsUM7pSzBj4QWzC3Rf7dTmTf9BBTQE3QLXmYFraZXXzA3oC",
  "key33": "2kvYSFq4MreG3v2Ant7qJbsUamhyXfNAccbR9NzWm6bJZU6HJ2opo3cCggXGzHMAPeDZvKMEa3ZeMeMsB6qoLGHF",
  "key34": "3p8dh62M21wwVG3fM3KJ2UK6kMe3pyo3bgqCFTity3S3XouLytfBnbrarYoueUNdTDaLy3Ta1uB63dkqECp8QQeY",
  "key35": "4acY47d3D38kuQAda6hRMQD3fe1XKF99TKdULEMkdeweSPq9PZqyybKre2W7qsJnqoRegX9iEoNDyuSZLbhtRdsQ",
  "key36": "5QuviYGULGwVaAyjZ8PSRf6t3UvFaDZzBr9Mv8yGCmiC6X1SPjQ8LLRrYheWfyKm4eczp2Fvhp8RfekuAevjiJoL"
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
