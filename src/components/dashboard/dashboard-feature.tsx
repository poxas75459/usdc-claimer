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
    "5AATX6HxG61Sfxma1wvsK6iHnrtHktEHpkKPsinb3Mw4t2oWKdN3PF8vUw2rNUs5iiWSDy3hBgQsexAW2pRctaea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxwTJPvnyJXH5z5PdkZPUFy8fjpP8GvXNFNRgx3Hjwy8e8gmWnBd8uAn6dNV5m9yCwXuLezUFm4UthjNoaCPSCV",
  "key1": "5wv2XyuKWamkcEykpgCBqBXftcaQAFQGHJAxk4kjRPfPokBvJnXBGKgwDEjaGxsyTmVWbJVaykiLnW9W7qoeeiU7",
  "key2": "5pAbSyYByXkuuL7b7oiz9aGZkp47LFQUvWSTJxGcTfsAmemAnVuyMGsmvDpEPhDzEL4zJ9ZVo2cgMiJ18dMpqzcY",
  "key3": "HtdKgoWghkTU9Aqmi6Gn7bmALg5C6kzxM5uRtbnWo5BcJwZUEiJB7q66qviMxEWDq7YLYMZsryVdQoXH1dhSHf2",
  "key4": "3f3S6uM8AXwyiCy4f6ydByKGMsYV1Xroikjph7KhF9bbZhgKnPdZpDr8Kf6H5n48ekLaaWWnw6zXNXJSu18QFTLy",
  "key5": "2mhTgJAbX3c8tDAuTTTQpN3YsmJbF3QWHP5S2SuEWphuNnW95qArov3J4sXt3fw85jo2KJfSL9XvBjUGdNspr2VF",
  "key6": "1hmvQ6BsXpoBduLa1KQxPdrHmGoXVCu7dNKRE74C5gi2qoEcQdhLjZGdbEymn1cDxWvdFznn9V4AnEhopjbsNu1",
  "key7": "3DBQ9pSU5uXShfU59EXx24c6K3AEyhQKhBbYF2n2AsZQHA4qqLLqxW2xWJJU4ab7N41LPp6HZWqhGkiJwnmL44Zs",
  "key8": "2fxjLEoPKyys3qbZR9DUnCZtqds9VKY9yWveDkwVmGByf88bfQuLewvGY7mhETMyAP9aP9PZCGtn7wrzDKDJ6nam",
  "key9": "3F4iyRNNnLNbZZjH9Jov6dBsVA7rf8qRcPE1iotAoTj93Y5zSbQxp1UHwpHHvQWokZUwLZamKN9QeCTQYpEJ7KX2",
  "key10": "2xawQV1sfLDPq5wXvDGFTgmySjDPM2225WoZDXVKYSFV4qxHdp75msFqk3ksxhqdpfsSjtjoGgeh457mzNdDNRX3",
  "key11": "3bMhTkgw5vHUthhPFgW7hDUa39kH5dxTSvJUGXGyRkmhn87rUsMzgjBb9JX2rVKv21EBrU6K4jhCLG6qS3rDdmaz",
  "key12": "5DsELjj6L7wPEkJkVkc3ATQb1eB5n8brTu4qvLnuHwu8oPTXYrJNjNCWNsndBjk5uDTc8thJxf9AxSxehL4GVgMQ",
  "key13": "541MFGKVkzDdUwGjhFvnGEBo7CyJh7yWb2oqfsVRusk4KwPqwGDwwG1FdamqhMaD2Z8p7aZg5iLNq7C3Sud9zXZx",
  "key14": "5y5V21J2nssJYSRbxNgRV1eeLE2Jnyp37WxzHVWc4zmyRi3CrXCUqwJCneYtQnD5e75JVggUts4SjeRvhkFDsReW",
  "key15": "3R8tNdFjhqEebhm1LcL6MAb5QfHP2kvZG36DZDCBBTzTrkM5aUvyfnLAeTmpy6npm7MTBukQcsQdv8L8GZ1kJhJ6",
  "key16": "dEJU5qATpbUW6U1FfdsMXXXEQ27LhdWxKmS5mWbEwMnH698pDFE1E76Mfo3xki6N7tPiQUBMNbUddys8BHUjzLB",
  "key17": "3J9L87NTkGQ5WobUxuH1mCT7joTDJdkfAhGzM34sgwBRGuZbTeG5WieBdMnADm7yahT3vrnpjDCojpjisBy57Siy",
  "key18": "2o1ePzBadArjkH4HHGxPV36BZbVuqdohFCeqQQScccKSm739yK7ooS9AW2Nf24DS3UGQrys2BEJCiBPZWyRU97p3",
  "key19": "21bAiRyksyrni9S6k6xpKWMUQrGeJr4hBGqiTxv65w89YsUSfrapM36Phrh95Pc6vuAcMRsvBsDuiagBosDwBwny",
  "key20": "ZCghVoRBmK3tZXDog1zot58rNdVyh6CeJixTKWkRkdnXdDqmqENUtczh1Am2Wp942dj6WrcttzHsczFnE3nkkSw",
  "key21": "3xBTGC5XsegTk8LmFqAQnrZtpzofk6M9MmU6ZgxZTqthJXJ2AjxcL7yxwdhYCWNE3AUG76u1rPFHaoZAXmDiJmGZ",
  "key22": "5Lqkgc43D3795VUuAt2LBSmD5Gtd159EnfWdYQJu9ZhPQVH2KywiKJ4Qorvjijg1ENgERXZiAyCSgbLTB9z1RCXQ",
  "key23": "8MYMdi15QYFtc44nhjtHELwV2veeAgWb8qpKLEFUuhmux9Y8SVWmLKqn9uEFqbcxcubUFJD3nVoTN5ZB9LAY4Fy",
  "key24": "ZuPMACBMq1YW8LXei8Ge1wrTPMDCuJgBi9NJRXmhHbikaHati6Wz4yZj14C95geoh19Q9gameCNHz3XqUPngy3N"
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
