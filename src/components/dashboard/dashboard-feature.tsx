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
    "2yVP3FBnseEsm8g8hP7HrrHW2oLW7W6XXwtQEkPWc9GqPbneN4Fm5tce8jS2rtjViAAaK2eoQ8sqaCTpxpNJgwH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gdamxEjKUQRzBxFxBP2oPubtct12YP5vTMPiYdL2gUX2RysDDnWS3daJZhKA7Xmdq6BVG9etZpD2e1qAXrYvEoS",
  "key1": "61L4LhveTtiT9xGTBfh2xwf5E8uMpABZL1rgX4WmE4rmDgY43R4nngCoqyXFjL4QfV35vtZsWvvTv5LkdEArwsZc",
  "key2": "25wW1ZxwrhmGzc6Mv68CoUmmzErf3PkCYhcrtwA5AGwaqgVYY814jw4hGDucSRyKztp7RDBpYkjEp4gkPDTMe2KN",
  "key3": "56u3g5xNbLrftkgpmBm525xWdY3LV7ZgHPRvGwRg4e3g4vCb69PPZVV3jbQTHGFhLe7QriLUhkvZPER3zGdQnaai",
  "key4": "4xD3h1tB3sxrKPdTqBVSo4CxycrgpQBufBJjV648nxspeRss81QJewt2vakD6gRWks61N1PCddAmnRDAbCrbTWU",
  "key5": "756iQUuyQCtbqSSvNrVv6yjAvp93CfKVpaVRfaYBK3YmrGbqfBsBexhyaGij7TKmkyXv8bNNQBU1gDqdAtmM6ew",
  "key6": "2St68No9XdAaroyyytAsBMsHJ3hk949wNJkRxwCXpBfYUTfMdX1FiyArCcSgUrLSVtsEbe3apCSYHDsLiobV3PUe",
  "key7": "UR3UydkN5gSfSWjUpR8VUwe5Tk4baAwEA5T9txVVow2RW7hM4HU7F4CnNrN4TFdgrm3MgtXHYCFkQQwfZWXpqLB",
  "key8": "2jAVvJtb8YHiLxEQW4ReSnYDGWqSUst5gR3H1ET67eapYPoH963o3kxmrjUjbUz3KTDLiaV7UkXPWFJyorJix4xr",
  "key9": "9KEk2TmGtCFSXE5KfyhSuDcDoGeva5tDFfKocgXhdeF6s5HD6WtEKjjJdUnJ9NbYPPViY62aMtcKWbjCdTb1yvu",
  "key10": "biEoQrsG7An7gia93xwWo24MRJjF4VvVaEUgduHyJsnzQ5UJ22nCVLhZwPZWDdpyYvEJwBdYTGggT1eyqcK3eSU",
  "key11": "5vKjDkEXgUfeYr8HHQXoGmFS7YtCXqyWauQCedFkMF5yLtXMrpMPWPexKQzqYBiDPgNZEtdtacsFqdXPrPc2z7Q",
  "key12": "5xDjXZfTwQTuHfuzgVA1DBCYxeRv4SfJQVCHvm49vWPCc8ac3w8fipbg6cMYqQXCv8mhatSJBf67uZt3EuUrbitu",
  "key13": "67cKXNtGtno9mBxqBYiS1FeMfU5f1kGC2gjWhTqHRiM7yPdEWxgs9YCopMqr8DK5iRCuB9Kyz8YaJprLgeVKNSMF",
  "key14": "35xra3tDLZj2DN9he7pqrQqCivUpwVL6G666AdQtR11UdtTHo3LuNQyUnNBewbvSTfjbhubPzCxdwd2bP1w8o3Mc",
  "key15": "5yMisMMMxLgBUySHPwxiAjtYfJXakkHNDpsp8bXMi2FDNEkcTZ9uwXeevrLdf4LJReWFT8xCnMmh45qjZGHJHBEh",
  "key16": "2nioHHc94i5MoqXKA4KZJhr3NyM9pfNaW4uJ1bouxKpkHffVHU5jxmjf1DuN1ntmuj3w2o1mKkGNUZVnAtjn5cgp",
  "key17": "2AahCoKgmdQuGDU77g9M6vfj7eXNoLJMWysvUQAYTV7HrYvV63FPkDEcZXQjZi2wz6eRT3Z7ykEAtFwgGzmCRfAo",
  "key18": "4G7Z5mSouWD51FddXbHs47X3brU6dCHo1J3rpdscnTTQKGyNu7yWQQ7Lhbg42TrxR3ktaiWAuQQwcFKcPtE7BhyY",
  "key19": "UWFwLVP3LY7bNP3b9vRpd37dYcyc8qZ7mAcC9Tv8Kk6R68SCBwmmTHyz3o7j4jfrRbiWMVWnDUvzi6DKJYFA1X6",
  "key20": "2FKCqzE1Vb9QgyGWNjrLA5togz4Wryr19D6br7Nk182zibYsH7EPbuGox8gjgbLcEtgPSBMp5EfE6ReMrfvEpFzp",
  "key21": "25j5cEz4EDBRKXtSopbTKmsG58sX4E3xonh2NZ8VR1SMz92VyAtQ35SCxVNbdwQHMiphbmmxukuYLTUdGRfvvRHd",
  "key22": "5jtByD6zdHRv5vb7tPHqG9Q3AX3ZAqDCUJszjiaHxv7rqreDNgowsUGRXAn5cGM1nZ1SgGLLxQhAxWVzD2W58EzF",
  "key23": "3RQXeC7WCzT3gSVMEwEeecT3SsPLbLfnivxMP4mpNf2nbd2bERqY6bMC9dwJ887ApZK5SjvzArWBvN6RKQCzpeXC",
  "key24": "2gK7UiHLTHBWVe78E9kj4EWBPU1frwsqugF87tQMsWoCmE8Ei3WHTNNjmJP8vMSgtQSSe6qoEZex5sY6LUHVwrR1",
  "key25": "HMtTT5gpCm8VGuMkqHpQ68zNRfYKQ3rwCUpyo7QZY6VmKbJdYfyNygTFpa86AkzbS6GsJqJ7HePrYgUWfQ6LGok",
  "key26": "CRc7vaE3t58gg68AGESBoPhQAsSPQK7HZsMkaarAbhYewEdU7GufxxXKzRvtLBVtmUGWfKeRg4ZaraX448TwfoB",
  "key27": "scJ5iUdK3uSrDv1H437oq7ip8XH1UM5MZ5qYid8JZkMnm3Yp1A6KXSwnemeyVtfrWXiypngpNrkt3qwymJesgBp",
  "key28": "5ce5PJw5c63UMeMUoqEvUyq7DfpUpkbSL1ovmYW89sfAeVQA5tgEXUEUjDn4hafLbni2oc6jNEnGwx711K3LKkeY",
  "key29": "4cz8GFtCzBfast4zkECmqkHStBVqNx46o2dDN3gUvrG1WwAfLGUVCKQdUMgrP86TnBkLajJbv4t175zNZzGCwHeB",
  "key30": "sPunA3icVo39Cf4iVCkhSbVH7TaXvcz5qpMagyhUfAFW9RokQ3276dKv8mHgdNrKrZCXtMxy1r8VGyjPNMsR4oh",
  "key31": "3ZPnsfvwRjdF2nq4nYKttS2B5FLtzs4c5eQMJzj2RF2WVXU26nJxFQaKWkcCHcYk1Z1MRvbDHszdNvLi7nitbNKt",
  "key32": "4F48pfEks3J6USJG7hoVcGYDTu6j9Ydj2zMLpeLZkNnzjzjSppqjSzp6iLZHsAgw6nZi8enz76NKmoEZ4Ek7Jqmq",
  "key33": "5gaTViPZwt8XECTwGThVbhkHUm5UA3UDq4qvWTi52vgkcdbL1QsWVCiGYgsTgrARV8Pk2EZtnBbg73bb3zAGJaF4",
  "key34": "3ESgjwz3vwC6p4AWGULwLLg1X2Q7fsKb8BJKk3sG9dAY1ZSQKwoBdhez3Kf9SWRzScak4gmiHLs8Gn9KqaMoBJXK",
  "key35": "3QbaF9XYQwzEdpRHJp9c1tf4Jz9opzNH6RiU5xSvoPwxATnS6SNcQLskxciMkmRrQMdVmgJhmCpnif6DS2gtUvTb",
  "key36": "vwtUqjAvvtrpU6BQn5ocY31RHz6AmCMPrkAjhrzcHFt33dL5mrovAyjRD7gQnPwxxfH6qD5wUUkNLmdviGzJVGR",
  "key37": "hfGWcYtcBktvVKgdU7xMcnAhctzwmChP52xeTG8QAtxuuYmCi2EfBAXW2PSMuLoTC7T4FPDFXAfwD5rUbCJe6je",
  "key38": "5YKVYnR9noGiLGNC3xTKj7AwhQY1HB7AydzDT9vJDno3qr1wBGFXFdm8TaGkepZgxKXvQuGGk94R8sXaSHskAw6h",
  "key39": "taoBEfJHUPkf8LaV3jYNuNRHEDJhn5fuXDknL2MY6swFSV7Qi9mMEExsd1YxWjA4cMApdJNTnS2EMbbvMUos6Xy",
  "key40": "2ydXZPxo3bcLGxthtohoYZy923NU65fT9b78CnePr6KnF89GiLvscCJEZNaeR5cm4VGzAHbhBpzNnhbpnuizyama",
  "key41": "46jdZ7Ht6sFavDtQKfCGP1nZtXwNWyzx8KPMgp7WaZtWJ5efNnfcqksA5BEzvaksZ1zGag5C7YsCSWSZvGFwQnqW",
  "key42": "jyG2bjqudyiU8kr2jsiNC7dbg4kYtRmMiA2gDZgTVnHAzLce4Tzz7chYZYkfCXz39t1W9dU5wTKXuYxefnkw56u",
  "key43": "4tjjgZEgpciPW7CvVzEqJ1EiEfm6YucJcxMPMkUzXgT5ibMR2icWKDxwZ6VchEik4yS3z4HU1NAyrAoy3as1i6YX",
  "key44": "v2DkhhjEhUfpUSGyrphryPLrAkyWwwAVNGpuFpn986gpmbTqK8XYdeYs4R2JTj89ZRvg3HJg3Rmf3PjREetUTMg",
  "key45": "3vk4LHThApfpDN8Yq6UwwnT85j1M8WqY4eB8Krc9XGPfhpgfU9KQeGmTmom6SeioFBypMz26fiCmChpA5x95cFnY",
  "key46": "5BX2AuLnvzPrKeGBzrgvTdGuchtw5PTKfxgFzoQN5GFwM7k6xV7qd7Vde3hRsqvSgNm7JvDt4xxTgTugBsE1QCQe",
  "key47": "ZnZA513vNnPT1ohu6ySyv6G7exBA61RDXsi853pJ2D7DrxxCJh9bHXPBaUaLm5pgJtcn7mbPuWtrNjiJJ1XenTS",
  "key48": "43B5UV9RaGbebkVADzhDrEHUExRyeefu1Tv8JajvVjyN7aerTf3kLnyGEpcAoeA9KpyCV3pJd9s6hh147QAntcgG"
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
