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
    "g4DYgmoxr24YqteqfNtHzN52HR3bsyntoHNhPSpeNyRpGuD3MjMrJ9Yy3D6AQzZo5xnABQNnZcqP52zRV5PtHJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpjaEjzKpr2xudXZpGq7hpyHjkk23N2ZD1DWqYzULBg7tyj2MrsGELRfE6sXLqYqDoM2SAzqX6GfjjwssjEJahe",
  "key1": "284ceVhBrQuttsuK8APNt5KPsua7Viu9KbD1WccC9dY337irkeXyQ9YGRiEMKZJkqGrtQ36XZ7EAcDwJvp2tAxgd",
  "key2": "5mMo3SxNqevcZzVfWvCEaCp74AbpYYFRoxRjDXa7QRGNnRNfPMs7QsR2qyokKxSbnyD32c7jSN6X2UHFFs8a8hT9",
  "key3": "5ozD19pR2WbndmLiiWLX47Nu5q2LiVRUawWcXL2eryjKfRVEY858EJA3KFcVmXSR7d1HgTeraPTWMVjTr8vtHonv",
  "key4": "5dv9ZHeJVW4WMugZxwhdpCpmnzztuvNFLkboRcUAadf7YXYsw6JjSZ6cefCXLUDLQ2UetZbQneQ8kidpbdCwVns1",
  "key5": "5rR6euxLLjUSff3FvUPtFGriWuVXui9BE1MvYquCXKRc4ibb4MZEABpCQvp1wamocc7uTwfNnZyN6ckH1v6Ahcpf",
  "key6": "2PsNQ85wqBBVSeZBNnYphUg7NbGepYn9XwECCuAsGXzykmjdPkWw5esuFAwDWf1GzidvbX3xnnmDbnttMrXfVeoX",
  "key7": "57S8G9RRQ2GPysNXtsDLPsbgddMUFDg8kUDirGBEXRndqrAHRbvjdBmGYKVYqmoyvnvKX1Jqo4dskWyEA3WYtQ4n",
  "key8": "2Gy8RAT89fydNhwtPEJnFiY2hBVZ77Jk2WfJrvxRTzEGjbxVBHqhJfcNPrE5PodLeKupWvw156TzyT8hb5KzLfTz",
  "key9": "2Kg9HNDLB41bvibhgb4fkRPWRgk9qrKg86pqNbLWpgUSqbTtxez8bPjwXJPvXnYKXFaA3RYGozAFR79YfuhUESPd",
  "key10": "23WBtxiPwrZGknQPWynWatvN3hwESt7sVQNeubZMAL3RJ6tAGX7fsuo3tJq92KjbzzWmpvpKB46QNi8utjZhxevp",
  "key11": "25aXXiuFJhL9gaMLTnDdeibo2JaBh4t3XAFQfGxKB1kk9q495f4Ex5ZWqDhkAcEEKWzivCiQ99WH4GFitZkUQ6ee",
  "key12": "2bhetkTJE7qRJkx13FNpcEmb2nDrU2ahUojd1XQZ9P2Bho649NgViUeVKckutHGRHhmKsikh27rt89damuSCEBEy",
  "key13": "2TxpGmCUrFKeZo8exWwxW3Za6AxRDs6twgoHUFGMisPo72puWzhcCuLydFN73mQc6eZVPisCoPJUxBJ4qUEMbvBt",
  "key14": "47jM7T7xQisGgBpKJS6MzRWq1XrS8U6ZSmM3ChexKkzWjW1LKC8Ei2cfSBgUzyWder8yiyp4EuyaCxqnhpeMR3K9",
  "key15": "2iKqH9eiTBpAySwQFTooFqSV67mzhVZze76jdQKH7eU5kGLRCzJWXUavmWQLLDyN6wrdKtGyHYqDwwwDW6sASGrX",
  "key16": "28bbBDv7uDUxcCrfe3DyXsv83d2atVDLcD5XmVRZDrJ7As7w2cWDAWN7HzVk4R5xMrRsBoyy3r2hbxP4gCGqcF7U",
  "key17": "2fdypPqyWKiWP1eRp3ZwqUSmGh2oHehsaDNuA3LGTNbvQFvwcrfVHxhAnRVvSmvaWa6HuEtRyEAG79FAJAFQeTDm",
  "key18": "2TjXmwk5ZPDqFPqAsLeR8gTfEFhiK6zGZBueMqLAiNzw7159xXGQEnMbhpWHro9EeQRpF1DPoEm1nqQx7sgpTp51",
  "key19": "2aLdbqbWURe5iBsjcytELEN75Ce6FVhURkLQArYfv6axpLLbezTuCZ4PZhVZ8aqtdQLg6a12tj8HHSXb938cWFzX",
  "key20": "PB96YwM9YJ7frskPmY3oXzLTvDDuQvqy8W1bpKoBvJaByc869fJ5T1S4gmBLFv1hxDWeDFNUaQfNWZa13U5b586",
  "key21": "3A21P5G2K2EqXrC2HEkFh4Zsr8rd9Sk5YnUY9d5LVNrprQGj7pMSY826EJTjDz8tgvZrxNPwue5tEtH8jaBYMvrJ",
  "key22": "2KCeSDCpCHPh1DYLTPCdqNQXDUdY7pz8AZyo3aMN1TBgzGKqPzYecMHDzpnCHqBiSaCX8VXKjonNztpPcRUPJ9to",
  "key23": "5DQuYjNALojUpHqQrxfpULR5nXWtnfCbPzjmDLZYeciATK5W4BMe3Hmb1c5FG2JhPJThzDKxFa9xzGqUNNCFCQne",
  "key24": "4TpMnUSH16XaUKdMz2ztVy8RwUfGYSs14cuoZy2v8SYdm5dQMNcPrQUYpJHPJgyLrPzsJafcT55AdH7oSytGDyPj",
  "key25": "wpeirfZhhr94WNkFdTcMRt428yJGzp8xWZDWXg2bieh6ZKFALYqCdbCsf6KkWPyrViKheAB8gqPufFCMw83xYfx",
  "key26": "QYbMgiZNSArmCBSDcbSanJxNML66RkdrLMhM9NZaptU75VqZVfTwSHevYTaXb3S2xRnXrgGHP3X8Sbvrz673Kck",
  "key27": "4HWUGxE2X17MJtBBdXYYv52KSSLjAdothty9UJ54we1EnbJy8Mnox2TAkfc37BynaXyrP5FEoCCjGyrfn1T569y3",
  "key28": "dvwvqoUQMB5ReTBZ5k1yHh7wphGLTXgBUodEvc3QoukhauiJ4XTUQP7zSCY1mTp3GNVsYDX2Q8bPJK32MJfW4xS",
  "key29": "4EPDReDQokj8c8itZCqjnEiv6GZ6dLgicfWxiTBUgJc7FE8egFB3cq9iKaGymXBaXrNK5xd2YPMust9G2ZHQLSjx",
  "key30": "3VoyYXFTMvYnSCoi72dNufzf899BD8o9mge4xVUMu4f4rb3dHqYpFy3bAYeLhnxSLexL2kj4cpvW7z7Gg61f8fgZ",
  "key31": "bEd8q8Vo12AGnpF5FdKddzRGXrtZCqM2HhJ84sn5eRFu29UK86TJb6Buc84ag4UxJJ3WC61V77Wf5XyQx161qxU",
  "key32": "5wjwNZCMUhkzdmiNfmxkRnzuStgAcKcHjRuyuUg8PawZ1xDtf1cSU5Jr5G79uqUgXamuNBev4KZApWnacpUXTAuW",
  "key33": "49kb8i98FfbRaGmsmQg3wa1Ejp8HstfJHrZamGyELWup1Et3tLgRFT4mZ9a1utpELwdUoirbD17sesp947U3PrqJ",
  "key34": "3aL7moqVumkwySys5AmL7GsTCkMHPWepdVkzhBYYGb2ReUPNuVGkJZoxdEAfhUeARQDZsCmAmTbpBZtDhGYnFM3",
  "key35": "2oZFmB58ZvU3nAyqGfon6ArtgyDcQQKDEzAisWXAZ5RgAWPoK2vHBEG4sqfUtBV3Zigo2C4nbjErNcqSxpJFiQud",
  "key36": "5RvQ41UZW8KCmR3Z611uLnBcKeUnq9YioECCdpmoNs97W6BpwZMPiHLjB74YfWFHpC18huVvMCrefYnTqR6ZecDd",
  "key37": "3THV2Pz3zfr3qHoBaD3rV4qhSb3rCFQ46C2TXeffaAKXxb38WKfgzFFiNqocyDK9nLMMjJLA4SQBY2yHrL6jp3JQ",
  "key38": "4waH6iBKpFyiostH2NKvS9CPNKwRGS2qRrKznf4KFpS33RYgmFyaNWhnoZkmUNETemHY5dKhQ6N9MvZwzduGyENE",
  "key39": "2pQfCiyoh18nUR4LzQZWu25b5TMwmb9W86Lw4Utqk1WMdk5UimscPHTdyCx2zDiQDq6Rcqjo87Jh3ou92Eaiokrr",
  "key40": "58sqHv2ob5Tymmc64p4ANda5jmTVW5wXgf3v2eGNTtEBftBQ4sztLyB6Z6XgYd3t7zEan4oARSik8A7bg3gEREnG",
  "key41": "2z6aQ5hFACqNRgueqrMTJFvFidHpAJXw7PQso4vhEG5w3A38p4AFFAV9dUhTj42hAth8dtmzJKmKSEuRSmMLrFuo",
  "key42": "4DXybwb9J6YyExq5QaQqVEJRddNAirWTdNcaDb56mJkH27CUPH1ciT6s2Bcaz9pLYGp9R2WRJCFVR9WQskbgZ7j2"
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
