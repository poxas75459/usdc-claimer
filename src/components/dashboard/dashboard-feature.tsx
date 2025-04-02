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
    "2jf1zz4atfcXug1SypbuumFq3bmukdyg1PQg5bJ64BbWA4Q1fi5BGAMpJqsArQHMWjT8Af1BXPXVu9WzRj2vdpxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368npKi34XrnsjwrR7RdwBujr7V6Jj38wx5vGchJZNDTJjSwFoaujK7sxVbZ7aVyiFPQn8bMFsf4spGWt6kMESQM",
  "key1": "2QbiZndpGZb4kPvgqFVhSgWSRyhaiYpjppcBV6qAF7d3e7QfrY4HjmcT6HTPV9LXnRTa3b4GxE7Kt89ohokUkFPc",
  "key2": "3uFuttiagfDQeEKGTnxsrU6pYhSUTPnenf5NVdrfvE4JenVmAJ2QtQA58vm51WZej62XDaX769j1o6FshavNSkC6",
  "key3": "4XkFoneBpng4SLiMhKn9Hx5u9yyR8j5YZ6fUivA2a9PXSx7zkUedNdG3MXi9MrPfvLMujZf4sqyCmNn29eaQurwb",
  "key4": "677Q9nm59eYfdNmN3NHkSUDCzhfU1E11xht2HcqCXMvzxQ3WZWC3zqtTvEMqkh1g8GbdPDm7FcJjDiiMeMPxNbub",
  "key5": "67P5YHtMUhy9SwyyHihrVT4PVa8MnRZinFpA48rc4JDssukwRnQQ1hxfmFgtqU3pG7TgVmJBMPgPspfhaQQH8AiY",
  "key6": "5xg8sMvUJ1VynZuC1M7qetwkmfix5guXjk4MgZkEZJpWSKVPPiJi82GE1bmYZukKeefV4XnNzFu26dzKwdYjyD3g",
  "key7": "4ASwwnBzkcKFiY73kJZ1Tvk5wJSgRqgwTcJuMiQAURkwUpBu4PqG9kc5NhrczwJZjZ5ZFYgSQAfbozCWaRkxCeB4",
  "key8": "65YGbVbzJiUcUjNLF8CToM738rKF4KxT9W6F7FhHvkSxygvaVjHCv6v6TXB3XhZq4pHa6sn6LVy4yFkUKaS8dFQz",
  "key9": "3yvzhPWtxXH3WxHSKUmdPYk2NqAf3Mcmt92YYLGy6vPxFcS1UyQQuD4JU7h8x6gxm6g7qgULkxFANxnyVnWoEG49",
  "key10": "3qvTBft6xUXCzJdALBeTnk7iN7Gz4vJuSTr7uakMBTbMvKnnWq5mgeesDhxYTW7wW8kDD7LWevrvopz7QzBLoCe4",
  "key11": "xRTHgqTEEFKntZtCSRKEX4H5uK2qJMK4NiwHdEd6Sckq6ybBZFw4yd2xopJaKaaUDmrG63n4PiiDK1C3F3V56Zk",
  "key12": "24ThKUzBQwW9AkRNUU4poJbY5QHxj7Csi8K1XdGUTCGMgTfLneCwSBinotwndoH6hiTjds9uVSeE3WFzSwxAFF1K",
  "key13": "2Dnpa87fL6LXt5mn3Jse6xYE1M51Cexrg9UQSKmY4z262C278hMQhL7Ssg3vxUyWqyYs2VbgKKtPW5Mf9EBtZQFL",
  "key14": "4pipci7Fsb6aenknkge7StRwxWuYHzTT6F9VHcz1TYWnundm3tNsomStUQZcBvWCqppYJE16sFJkimSschkVCJvX",
  "key15": "5ufoUef3EaXVQS1wJoPdhQsUbeRWJRcm9RmW68Tox9T1sCzxWJhNa2uM7bmUN6CAiX8tg8mWfr7WmEn2HY4BgihZ",
  "key16": "wygySMvHg1LMhi6NVzArmFE5VPEjdgTp6CmhkfNtD8HBMkceqrG7T8acaELWyCSnQkvA6kFxcEn5o5oddg4oBFa",
  "key17": "4tWB826YTD7hhK1jKA2rYvZAv2VASPuXTsnjXcMCBpWc3P8hP7HTU6E2pPGcK3bwQqJLA62Dw6Vk1UxZLoToLvrj",
  "key18": "2yDiJeRqqhHZU41oxBKtqrZ8sDyVTbaLm5cAF768dkiPK6gSEkVBrimcn8uYtEwzeBywegYeiQDKsjDr8YE6B4B9",
  "key19": "pa4fGd3tSaZB88EX8pSGsjp2WpRypszWcpix5TGHs9QVuhmGehskv8jAeEn6YsTN5j9SJx7h2vmSHkANwtcxtnU",
  "key20": "3Mic1HR4MjxdsZ1H2uXyKvWUedMrZruj9Ejqds14LrwFCAUjcPTq7xEP1f6CJMjvZTg5YrdsvYXfatHJd1uUc1g4",
  "key21": "3xxuDbCWqdQhLxNtqiMD4eAxF9rckk88SexVrBBbaWJnRffWET5DmVacWchz5hXszMKEC2CRYbpiHJLhkB5RaUyc",
  "key22": "3NkvvoYkMpFYy5AkyarcchBEkv1du81yLWg6xhtLq5RdUUDYkcPuxi8jo5359iuhEqaLKVDorw16zu8PiA1dyMVP",
  "key23": "5nPH38gCzb2EaoYGEeLKqzVfRn6BzsqCtoSypC6xVBgV6KuYEZxYJhmjkvnB6ncCpCb3Pngb3QDSrgnKUb8Uyeoc",
  "key24": "2L2uj8gvqctTaYViBacsgxXAjeRNJLst3GdSmCt2BoUgbyh3TaLVtx5RePydNMkJhtgGZzPZHKe1v6YxRGn3EthC",
  "key25": "3sCk6KBrWkLgdvXYCRf28d3dxWhEgzTsJ8VswrUdbdoXamrCrUADTqoFVfmCnwZhB8RBcypsaVJA8oJzT89phSQ7",
  "key26": "3WXLuDavw89nbTgpp9e4Uh1dRhttD6Yrc7GAvULMrVpgdCwHb2LS6SAiAGcHrNjk9T55zV7vLYxqoF1U72jm35JQ",
  "key27": "3uV3CFy7KyMd4P6HtHzusBST2jf4WTMM6ZXeAuyYQtPkhMkgD2v91qNFDNoQrgN2QgkwvcaEbe1KDr18BsNC6Niz",
  "key28": "4mGAKrSEbKhQFPh55g8yE6M29VwNBtwMZZkZ7JBue5sHvGd7zvgTeazKw1Nvva5E3zdG3CZmiRQoASPNUrPWYgY5",
  "key29": "5tjhvax4vJifAXp4PRAWiAP9uXV2FHGsT8akgRiHGcnWVjoNASRgXaXroQqYz7zV7YfEVj4F2Gvvkg1JEXxciP78",
  "key30": "38VoJkvuD9vCvE8yDXbKZnvW94dd7h5xeaLRYgBFFcjSLSLwdW9ZB3xfZrKTyKupLr3RWRPWLeKDsrgn6NMXC38B"
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
