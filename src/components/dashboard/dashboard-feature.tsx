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
    "24KNhxxFZpciiDWMNLnpoRkWSkWzCRYjzFfQaWSVDXt5sq2ZjfgMWG9HPaTKqjTzCGJnnpEBZxgKkSTYuFK53Kny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZmeBEqFMKPcvw1BEKpfjDjaYVCQkyV8tgND1yN38N6p5jnRu7LzcEqDcSFpMfSP6cU9JhFDMiCxE3tKNWyVLLgK",
  "key1": "3AAYsLaXhKWj9KjwYdmcYk6eNWpzmheetMnEGX7q5YYEMhsuCZJvHmbTg2b3vrSyPeWjdLtJ4R2qxJkhAjFU5yjk",
  "key2": "3esawrozTEsY19rjm3hWLVpeoS9waELUGqy1FhqGne25FcAMcXZ161pmBN9aWAeLTCwvMJggNTHV9FqZBTY1Hzgb",
  "key3": "2YuksEJLCTEdQoTQskAHxJzW6ifaSdUmTekDaUtv7G9mpbhG9AeK8BXraMhmYfy8EHGxDuLT9PX1wmH2XPwj4cMo",
  "key4": "2AfQgchMmDRfJausBTtVweBfPG9VqKBJGCWeta15KSEKtVDSmb4ZvYr3ngdiCZuC1MNATLyTpykgRANMKRbW5gTb",
  "key5": "3Qp7XUGe42sQ4suxb6X64gxN2kAy7EH7iqy4ZTTWcf3aYeeyPyJpXSt3neWc81JTAKVLDqsGPBy5Rm7wLC2nhcyt",
  "key6": "2E2xZCXPNrtgpJUB5YMVeMRzmKozTVyvrf1ShWcj5AVr78k3C78uZQTKMj9k5YGSjSb91LuoEFNkEEadaJvbxJUA",
  "key7": "2npziamaz6jw9LxZpie8SmBU5RUvY2kTY4Z656NJP4iBU6WQuLo55zSC3yQpp8AgTzyQ1vZau4tPre8uXN3SAH34",
  "key8": "2avYFHsKo4FD8XqLPupRZ6jtSGj5ZpBNeF9m27ZHxHigJ7W4oyzcKkT9SfmmPA8TZ3SCtYwGXfQaG3sjggVqwBpB",
  "key9": "2CJmxCkyQLxL8hAvEXqqAN1XLUGssvpEa5QHNH3dAj2Z4Utgf2egErKXW2W8tohJMiCfQEuAHZnCpavFPeacq1Y2",
  "key10": "3Q6uZ1gEtbhnPTwptiUZDerZrX5c1Vq3at3UHAZJVTYX6g8973cnwFQNZGMGC7SrHMaEST4QJkVcBvngHnKE31gG",
  "key11": "61WXyanezi6ryjC2Fgkttg7Evqjk6K72rX2byB5LvLqS55rGbwfa5k2SjLfFRX8LGy6jP41cmLiHAUVzanzdKft8",
  "key12": "4VWzLhhkywRmYkJAZCQYPxtcpyjBXVjyaPafcZaxnDDqeQPb9eUNVBXKvs3gFJb4zDqXAH59sUspUMLFzHhMJepi",
  "key13": "2efsYPoZpk9B58sPBxcbX3EuNpV3jCiTYfKFpukwf6CUUq5KGchyYBdg4Wtxp5eoQcA4WSxPEwiGRSuy18ELfYFX",
  "key14": "vdcpMvjkQL33NELG1siQ1QeKN2rPuJjkZGob7Y1dR68kMg2WMJTeeKHD2qBGLbt7erNxzMc5wkdBihsf9HBpSv1",
  "key15": "4Tr1MNDTXK5uvidYYY4Dm8LxWJuGrsX5YNpEzYVufT4Am5Gsp6HLUJnvBiNaEvoXis3K61AjC9wwAy41DFRhmU8d",
  "key16": "5pssgZhqLTHtkiJy3EnRmuiB1WUGoqkjz91VAkdva16F5FcTYVbvLDnYm8oarBWPRhRyZU5zoXMH8oe7nxv1ihaK",
  "key17": "5uyRNmNETjN5VJGrZczXZB7CNmMszKWChbtpJ6fxx7L8zA1pjh8up38VZVtg7X5n11LAzUZgTNqPhNHeYwxVeLqx",
  "key18": "3GDijF9hCbrygmVmRGcSbPuajgutbABJYtTmCBryTdhYPYMnWd1ZapV4SggJANFNae8mhhdoKMPKnkaH1Yd12HsX",
  "key19": "eKEUEjXSakJ6afm7FrpGHUanyPLbdwuFQpmuTnPYwCd2ve3YuLssNWVrBCeM8nfNw5kJBr1SRPj4tV2mbGbSUYq",
  "key20": "2R1cC7Vm1TuvVE5r49E8Py43TH4GbVmind8jgKpYoaxFWhYFBVmmc5MVwGCBt72kdE1fPDXo6grkdrQDrK8kduNL",
  "key21": "ChtMKwgCF1BW5qTZvfkM2jTqX2WEsFFMdkEVVwu2SpA94ZbvKLkRTbWf1dqw4PmLKFJbKtoq9RxZHDBzUPHdfxQ",
  "key22": "2n7caEACvK4m2L5SnXGn7jXnaf419KgAQUkTw7vYmEBR47nxcy7nrNw4xb9HeBKWTGLZGsQaMTYDLgM1tAXfHQH4",
  "key23": "3XypRT4M2CfSK5C1YzX1oWDdoTvN8sS6hU3q2pMj85LsJbkkBcEVQBnJB9JyCtDXqJ7hiMNbdjhZ75AugsKiaZxb",
  "key24": "3Lkk1rFv5YibN2W6wMZeH5FTzTPQQy3dXjaUxM9RzNadpFr4jaSckHNv4gDuQ2DwgbJ7qd9ErJD1ZeuA1w2QteY6",
  "key25": "5qYHsAwbRDeH1Jy1jV1nEkjeu6hZPWUEooWv2t1ZNxhVwLc5e73i7M3Ej4pToZWT6b1BdDMXd1zc6sHrDTt4qbzX",
  "key26": "3sWfhtAteGSZFrnuRNXiC9TKzMvkVGwVZqFT7cg7PBJWEQmtLakXWieu6WaPhU9XqxQzyqYQqZDVmbt9xcWTppW1",
  "key27": "248mrMRevyGVZEw9EwzE4Z1ozmMDgwjzn4edVTnqXvbtSA9HzT7vwSPoARHEm9CKvkmWU1jsTFA6i2SnC4F3vMFh",
  "key28": "4JUn3LsBRgznHjeDaawg9vGQGmUmDr1rLo86pc1N8j2yhaGWUgSGXZvdYUhcdJhxzqxW4dbJ4YXJMnZknB9RPUCz"
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
