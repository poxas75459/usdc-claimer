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
    "5UmRXvTNGeaGxRDoG7geEadGKbN7qc7NGLg3KZXC5BHQsA4aEGaupBXcX2cJ86KeXbXYQF22KcSU6t7MFQHGxmTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXGNN7p9QbaWn4ertrt3QiSf2fkEG3ancg2zrD3ZLUWVVRwadQd9rCzjFbwZc6hf6VLBYFrHmeXrTSvDvevZSVC",
  "key1": "2KaTvShWMxmjxwPzhzSnnoEiywefqmP8AKxSqHZaBywpCSR9xT2Nu2NFMEXhkZi2awZYNDAUBVa12fEHiMgmhMH1",
  "key2": "3M2hb2jbGZEGE2Y3SFfV69E8QzGqizjLoqRXGLwr91WwVKgtao39ctsSshS6VzCJbvF4U9FWmFYWQPykhr3sdbqC",
  "key3": "2F93MCXGEbj4Uuj2gbnu7YiTzGY8Ry46XsVEU9Y9E7kXJfWgKayUfk7LATEgAHrFjtaG5HD7rJwFUMk5zh8yGUX1",
  "key4": "5S8H4iiuR8hSMYF3XJbqowAFvBcHFwwxC9p2zANeqoGxVDmgASRnbiEUuY7JzBTCD1jQVegMvsYgw3gA6igEu2oe",
  "key5": "3WYNZuBSm4MxaPnpLgqbsa86itCWFWdmvNLyXXZXdjiYvFAe7eGcGkvrFY5hHMHzrSVWZZAz2cEHaFsi3nTCc94J",
  "key6": "4x7zNegRB23VKinig4QRmRZ9tZD5Rj6sqa1tN35cWqAjHpX6qhXNya3QZTHyj7XmPJyWHvkWwAC9CG3Yj6Hproee",
  "key7": "rQ2EzAZic5yMASNVM4MTvWBLMcxx9TrtzGnhE3nkc9FebFH1dHRBdrqyMeEjratuCBkFVHSNCnyS2Mem1VqyXfh",
  "key8": "2HH5zHwgCkmeV4F7b6khbM4HMDXLNvn6zZ8Qz2roMyRqJBaxEu284yKF2ain28Q1aHcmgG3aGf3vnfi8L7ggLGmD",
  "key9": "5JXFs7zY1zicnLJm3UJXTq22Rj2TXSo8YwvM5fenmsunPNgcDnjArN5ayjHrEgAgsjkGiNiV6wujGAUVszV5HPSx",
  "key10": "5uoBYWMyARBSi66y5YQCWwE1kmZyqp67XxaZ9cAZbPfPjnueHFkKeLZDdoXLx1UK3tx2KguCaXY26EXfPige8zGK",
  "key11": "4htnBMn786wYpX1MXrTrBQBtThq3Cbh8Q6eLYTLn1ec7BBTHEGRkaqL6vk8sp8Xj96MvdDmRPjqoLJ1DEsCME9qf",
  "key12": "3Gsa6disW2UinPc1XiAB5NVBpUtsyD9gwonSg61n5rjLyCSwKnw2cRkm8dgD7FcCrcg6KdHLzfToK2hf9ykDv29S",
  "key13": "5K4XSFTaUvUhrQDb5TbuCsR57WKTGGst83cutAAGVGmqLSNyw43ZuFeNibwbYwjSuQbnFUiox6ewZa8C5jzpfdRr",
  "key14": "67JftM2thuCbo7SusbTn73Dxtouv6MhtWj5rdkwDAfUfZKMcQt19nVNbsgpP2YjiysTyCideTQjBGPq78b2hz56Z",
  "key15": "25kBFEvyHgYYzogUdfhbx2CWTP9n73TBxohC9rxm9KPZhGp7QATFESwyrVTChGvBoJ3LHr4VsiMXzCJEgmQM1PyX",
  "key16": "377CyRNJySbeVB2on1KKdv2wFzju4252BVoMZX59eGAgS5ifhRMnbGgwgoseT2iRC3tBF1uXzpn54uJG7ngrhnqG",
  "key17": "2ZD1JxacMkxAVA3b8Xm4MvM6pkbqHkRx1mjo1fjfWsF98BCYYG87n3nkQWCfZwNcrZ9Q5VKygqA6K4dSwyjd12Rr",
  "key18": "pdaYAwbvHmecQAjjDuqG9u6yJDaMBxmuvucPZC7EqJGgKnMXLk2SxtXgUNhdscsDZh8Uv45N9NNG6ynnFKLJcGX",
  "key19": "3H9RmuiDHDe1nRfAqX1T5TNguqkt9TEWynnqzftwcKSVpwpumbBaJLY5v8vEgFBaL4CUQ8rqawNhSF9ToQXg8k1F",
  "key20": "3SBHnUaRWKvUS1JwHuyKDSsKfwbDaPoG9XVwX7p6kz8EgXMpSgxBRyWyJMoohedC2xGjBoZARMPY6HWCFkYTYvGo",
  "key21": "5STJ1aZTDuXrZEigf2B5ZEtmPCLjoSVX48LiVtvFmthngnKJ83EPnLPJ7E5UiLzh1rNHv7WdY7X9vqP1cLjRn2nT",
  "key22": "4PLWwVtchSqSPMbW13ZdLHFFBeUV9bCvxUUJWLzknJoWodvKGgay5CBga94fmkHcqDjz7nxpVRWSKisRHKzKLZqL",
  "key23": "541isqcE5vDinusUsjwdyYEEmCfL7gGy5oE9vdToZFUtnUBG4xuhcdHUtMT1sNLTiPycU55wNucRzSPQt4Dk8mGw",
  "key24": "4mLHhqRKJqGQKtk3BaWaavF7xNCGvrrUBUhSaVm6xeHqeXwJhnHCz74Rt1owyk2t4M3bSZp2L1JcHs1rBusEeSg6",
  "key25": "2vqiL6ZqxaGFq7PZuXNU57LUaa6dUSbdG2WAnyiv8WMokTTeLExnbMJfDkJZdN7K2RpYNajzjBtefd1JuS4rauqp",
  "key26": "5vzdiLWw7Mfqc5vaFDZBXxPBRLvwRTfnKsHGbQDiiYUceszTia55Hf5ozpYvniJV4VcFCCHVDTWMuob8SY9BiCCP"
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
