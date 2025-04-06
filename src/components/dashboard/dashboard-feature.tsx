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
    "28aKs7oCYvUoTjwLAqAhabaBNr5RvVAXV9RGFMHqzVrPmJmdJs92fK8N1YSBtqxCBkZiMddVfUH4z5qJt7pkf6Nb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhcXGQtpJPTJXHMJG9tWhXxBT6tNjJADeLApSPEHTn6hQGGD3bu4CFKQzpr65CnyPNimQT9eB4YXT9XmDd1UYLr",
  "key1": "5qgMWwLC9tsottireud6j67RqS9qtEhfN9HNmpvhKHn6iEeoA13Ngi3eKffe1BvG6yUV66g11yxLFeNN8GudH85N",
  "key2": "2nxrmm5mbfGmC34yxzESNuMttU4bPUAw631No5gAhexivTT5or5RWnmTMRVKnpKixFyZHPDHj5cwxQxxK4WPuHcu",
  "key3": "JxTQPyNp82ioaz6xABEBwA1BB57WLLpJRrg81hYvJB3JZ4wZieijCN9htyeuLYGvx13NWk63XrNYUQS8e9wo3PC",
  "key4": "5sqBCS4Mn4QcrqvKwjt7FEZwHRnNkfFgkPCDYdbPxdpTqZL27WA1AVeJ5spK7LJUH3u7CRuuMqYimLdgBq6dxAfm",
  "key5": "5v762intLMNTgLBWe92aZJSMswGM3JB45hnUuiw4L5z7o4hfhXYu1yxum1LhYfezxzY9GWjbJUp3q36xbGmPsoT6",
  "key6": "56VS5cLVkBFy5oDC5zWpWo8vovo3ipJLuABb6JQzpGebE6UZTy2y4JomHzGGjWi6TEvkrnLMoKwyHXPznkjvyrWs",
  "key7": "3iBd5Y9Apb2TAaZcExyNdWJQLzGuL6Vt2DJK6BRu4uEiKqg9gU1SUvcXmDJGLLuqeUE3fuojUKkQciPibYLntDKf",
  "key8": "5nurGEvPxZ4mPeKNrjChxfLytPq3S3F44EtVMCDLERVEZQMhQMioFpLAngTdJahTURMN94fNX3RQXYTeLmGhT4i2",
  "key9": "BKTp6h9aPooehSNUksjypLxKTS7eyVuaai4MXNCqDSMd9FHyxyFCxcStiQmgoJgoQEAR5Qmwvnsfb4VZdZR4wW7",
  "key10": "2QTihfwpMF1HqJtayLStdSVzEVz92x3NVGA2jMrBamasbZAKcNWXY2TKJ7TJo9Hr3VHFRodEGdxa5Fu3j2YLw5aZ",
  "key11": "2Dhzp6n4TA4kPH52hquaLjYcXB44QXHgWnYtFHEBjRChedzHLzzJHDWGruX5ya6ig1cxqAk1tWr7RQmefPzqLkto",
  "key12": "4pGkZJjVcRfxucsh6KnPFfUt4bfE7zxsau2nAUVjeWRKv5GKUP1nYhcxpcxJgpfk7CiGuEbBC8mJyUoSkU3bfDW9",
  "key13": "5keFfb1UP9uP4bmHGdDvutPEaQdsmyDqwtGdBCrfAnapz1Kfksx677VCyGFmfAijt1BbEFEfKJNsjMQJSHdasXUH",
  "key14": "2NAbZSbB53pgnEvvWesyxaCQfMYUUGKpJCPz4unLD5NDWfEUgQEhNiSNK2UbnUw4mB9cAmZy7pz65zRS87oY8cG7",
  "key15": "48xBY3vzDufLBJWCLwx3Pz342Fj7mZ4ardBFczmoiYJ3cYmgceNqgPxoKk1WxH9saifdnb48MGitdu74bshHJTeK",
  "key16": "59k2yQBJnjNJPgB96Vxd7yVNLDUjve2LQEV8cBA6NSpmxkmsT754SVgmrv6wGHPuKqs8Z6qVaz9B4rgFQVBJiGEv",
  "key17": "2oYet338DgXmd2FjvSgmAVafP46Na461aQzvKngEdsBNwk8Gw4msLUdaY7LXbo5fXGwcFQifBAC6s9tDC1KhHNP9",
  "key18": "5fhW2ehp15HNY89a1Xoj2dkJZsJYacFcfzRtQfRMgNzY4x2tf2FRt11KM8HCBfdWdiggGdt9wHjT21NQnxW9G24U",
  "key19": "24T6iYwEGKBXVBSuXkpF2oMy3MTe9DFKMf2RWzGjoYnxYeMoWsYD2H1SN1Dm3mKCiYSzK6isYswURhSmDmXerJpn",
  "key20": "2DgesEQKWKZGd2fVoVc8X6GgpYBwPPXzT4LgRphF6Uuvd7s5a8opvMp4cspCC7oGDeKvzJHUZXoYrWj6upChxvqV",
  "key21": "wUXto2PxPSsmB5Qkg6irDkMav1br2uRH1g9QpTPAK5q5TBpsd4e6v5A4HMMgPUffTgd3e1ZHfM8H9sa5Nzy7cu9",
  "key22": "32g5XoC19xbjbwXoFD5wAhTnf6cQRtuDJJpFwgMUZjBXKcKPx64r7XcA1eK4QpbzdC5JasiVWqXxUp6GXiLoNyvf",
  "key23": "4XqkDBXto7HakMYNFjKVz6JymSKDjkpYcKR9K27FgM9qR2LCqgcB7G5ctwmhTDG89GRbaknAFYu4hjBpX4fWmqD5",
  "key24": "3r4ccPosCLdj8MXoPxvy1cFGYWNijeyMcGnhqJ2bpVMzKZkhDFaTHsB9YNmwcdA6DoWwtpiBYCWdfVvEgRA6DLZg",
  "key25": "jmAX62PZevFKYBYDWC1ceAToRM4tCFMhgJVAoc5mDM1eKsKeNBNbxCxbez9BwvgqGR8iwd4pRWvGrfEUapXXfSz",
  "key26": "4vjcxt16wy19T3Bp7zyoegrywoYNTJemmWHPind5iwv6XrDwFWp5kBvGY7ahy9YgLHRyN8n35aznYKJ7nLZ1hLP6",
  "key27": "CtQ1rXYmjfAup7sFWJaCyMxhrEDoJouj2YkKfY2pdgzmn9ELbuuUuKcsAGoQo59HAehfQCBb2ceF6xWnVKvsqar",
  "key28": "2uNZb1f7xxFeUymDSCcSTBvayZQjWbi2dtG8v4KJwHdY2q2nRTwPihF2dm66QUxEYkpGJSD63FJpqzocszy9D3uZ",
  "key29": "3W7bsaBCzkZawGHg9UWMuFcS4CcTJAgAiHF8WML2TKGfSHZiVVaSgbHurKKitPh9WNWXBeotthVYkq5k9xwfzF4B",
  "key30": "4yqHbut6DgAnXYxDGAcwtdMAQ9qiGimAodeexorDuPru9spdCNXbK9ttk1Hr5iZQkzRiV1Desg52Qxq5cRKKveeM",
  "key31": "JcPy1C9XCzywjLDRN6FjXo4nu2V2DJ4oCADnckVedM2qiGsyFbAKm7F596gwzqMvf9fxroMYRUberGFmrn7XERd",
  "key32": "4SqXcDtkGaukRye19quH9gYFt3mfXqjM4YtPV7QaqazMvojqayJhod5TzH712JQsmwjoEvaj6pmKvuxtHUVkfmSv"
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
