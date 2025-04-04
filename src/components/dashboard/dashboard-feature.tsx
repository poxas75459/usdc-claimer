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
    "RGKT7EWPVo7ePwG67zwUrUxpfq3Ws4nPXieztvH2vMSnLQXzzoTSaD7or5BSXaKhMziVTjQNqJ9GKeooBDRqsVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tTYEVBFocqgEfyUR6mBWSerC3HNQXZyWGZWP2TRF6K2UcRU4LBtdvF1o7zUvpjad9HzcCTki7XPsbpdZtBw9Fq",
  "key1": "3RqzAxiYogYfvAkotGLPWUchTEyjDnRWnFkZRA5D2VPZToUZCNbhGx44UAmY7bShL6K9kS3QJ3DHjiMzpebH8SRd",
  "key2": "45wUW4Xfx3MLbUjVmqWwxguWnAGqvqQ7bEGTYUTAmNE5jQErboF9fYeaDU9p2SemZXgzZ7ccZFU8UDecALfE5cwJ",
  "key3": "5dpF4KwjWLWDF6cWbZMLc3s7WYRGbi26dhEu8gujx7A32cgfavJmCwAG8CaJUaJWk2Y1zz8rYjiSHqoo7Tqitivb",
  "key4": "2X68hBBR3dKv4A8DboXF1nvxUtuetMSmGdSKfzw2ywW6Df56Tw9Yf2oENGmnoF9QoUMow71PtqS1wjBVXvSxtFjh",
  "key5": "4JxF2sbCi6VnPhBduKBgCoR6rqBQV9tNCCxEXKCELWgdWtk1oYLS6W8ZKmWmoXLfao6TNafWGVzYyqzy1uWr6TNB",
  "key6": "4EyzZs7Z5dq6YCH82bT2qWc3APZSNDWqeg3D1FxEyg7D8momEvJEyvHNwkSgWVbeEhkMbsR4yBjUVZLM1t5iBui1",
  "key7": "61GCwnaRJxCYgyCZhBsuCm7Q6uvUfLofbg3ZkrTNJVySuFpktVyTyYXyfhS3HHPMyJEvwABBYgPkWZ5Y5Mvg866y",
  "key8": "36y7aWRG22RkvSYSEqBvwUKijzaPGE971RQz5bryNPfjUHhUo7q5HF1SU1b22QFevGJnM28jQgPkqkMN4ZqHWFGB",
  "key9": "4W3PiuqfMcsuvKFuoguZTi2Y9YQymAThcgACL9khkVYqyjX7FH2PEyE1xvJ2dibXathAH9imjWooLZbWsrAZomCh",
  "key10": "2dqhiDyEAfG7QT58xi3csFkrqi9X4FDAMsUBF2teRAdPEGgW7GwYEJs3oPvt5NFZG7RngAgpakwDn7V3w8K4SrDx",
  "key11": "KVsEHU6CmQD19g9yc47hn9Zkb4ifNF7ZNKoS7jJaprs8V3ygLt6KiHEbnjW5eCs7EPCHvcAbSV8BwdBKPb5qSMB",
  "key12": "GJjcabAw5PVQYhhL92nvNNVkJFFCNRfEQcDCmE2MnAbN3i4VcqVdEz5bkEsNCnTdQbKoG7JLf6524aPYrurs5pa",
  "key13": "2PGUSHVWVJy6DAs4Kajw3DLELvr6kFKjyu5kCq5GAPd3RwVQGwp1QDQoSEBQ8eAGAgC11os2HRU2D8q9nuagbgPL",
  "key14": "2rjqUYD9BsnPecVZ7eWzQXj7bmtnGBsvNk9W6EeMRX2M8ejcyJsqfUmCmvCAsn6sBcevFq67n1siGBKMwN8WaYB5",
  "key15": "3XCLRyzhyfrhGBR9VRxS9kW8Cn2GC4ET2HiEyN4d8tNKdysEDzt15EwdGmfX1ZADyWJmcE2g436wk69noQHE7tWr",
  "key16": "2XX1E3Tib3o88zFh2yKv6A7s9MMTvhk6x51B7hFbQJYWxTDcNyaKRQro8vUqr9Sq15puNNg7g6DawPtBTnz1xZ1E",
  "key17": "21KjZhMftFrScsEgJrMxyoozJDfn8p9PPaFQgTtWrQhbXoUrLuWEYv2tPMMXtNd3AD2JewKKpYZpMNkrP59dwRdJ",
  "key18": "65PSLcESq8zZX4kudXzFpTKjxVXA7dWezjCPxcjhLbLapndFv3eV4don5X3j69yjqE8nppScFVhVp6b8sJjQFtjf",
  "key19": "297EnVzyCXQjetvVz3P6DSsFj9MERkGgbf9qpwowexsnxqYZbpafwiDf3hyPsyZzSseKaWD2nCp8nmaL4DVj6jua",
  "key20": "4sUyRywmp5r6rbkFJcS7s9AjDKqoNiiNdKhrHrjVawV7h6aYbaYJ53Eu18whfB8nRFrJkGURCjSj5oKXGzu8t3Sf",
  "key21": "4qF4AQf5S3RyTXKGMvgKou6tFqaTjBsEdC2ANDbD9d9wEmnfNJyrqthhh3jftAG29prcPopT41iaJGVPMASWds7Q",
  "key22": "Mk2yBBD8fJ9WHL9MHytgx2izJcaTvfZjnjug3rzvA7bAm2NUYT8urN1DLJ1A6h1bxLbAXDAECnKuvy6ariTe8xU",
  "key23": "66s7dWwQevn2pkdjPogiECkp9WyAd3bAJNgPWMgNnaphiwrdTX2ZoY6ZKu5SG9Gth4cLnXCPn8ZVFkwJ4EPkGrFD",
  "key24": "5VcpDXYTcSUmJeEqcJMFod4eT5jEYBM3BgSdLxjEoe6Fm5VAqUpUkBQk7ZHKdSCiGffFTgLTjqXskqJFU3psqNw2",
  "key25": "2rHcAfTcTiyYip8qLr9SVh73czYdv2EgCHii4zKzMEY8PxY6oG6uZWcopB4iNrAha1SyAeyCzpP33a3YrDPj6WNK",
  "key26": "4rHYj7pSEd9Yt8hiBL1kaR4f9YwxBYzw3EYxrCLBxvLPkDfRgpVtmPNc5wDNKFjKC93krokttFcPZWhFSPRAipAC",
  "key27": "5t41ZunyeE8sK6mLNVcBAeizB67xGvdDxx3Y6Pt5iF86CdYygkyZh7CWSmRjCVXNhQphSCSNuadtg253YfvCQvro",
  "key28": "9k5Y9qMKonypU7zFZyJpKwSCWoR5sBKnLuC9guBzodGgLTiCCtXsGhX72C74wwi4FB1XJbbNWmfQxw1fW8nuggV",
  "key29": "4wWQULxNHQrGKWnsGQfmzLzUP86iafi79ZEh2gp98aYbrVHb6KC6yiUotJEudhc952LJBVGBhxthxnbFkigmjEm5",
  "key30": "4LfHvQY6nCiV1AuAya22smLFwTNRz3twTQHY8t7wGxmpGaQRJJhzdNTfaStNHVYdmXjgTmsWpv8rUej8hahMfZD3",
  "key31": "5j5hzmtnqJt5YV7vVJm3gfFdvipKzV3XPmy1npJCigFwhKvoWGPhhFgpYZHmoiv84CvZL5sZthKyHMinEd8uGwpV",
  "key32": "4jDkdvhTou36jkZ36kkjpGbExQY7B5ULMwBN7EVVg1DxXk8gEhqAcEnFFd72Pwu87PBknACpaoHVH83PxEQ1n7hD",
  "key33": "3JtKAHv48JAJucw99XEGSmATir3gcwaBGEMFisT6QmudyBEVcBRBghTJXVaXM2NhyP73k6m3fRDnkyQhnZiCfgcS",
  "key34": "625Gsq18rk4yMX7ZZRz89PAVvFTzwHJNocuB6JADKmFxEeUB5K4GDBiiUYy2wKYgPKLjGttgFZcGEmecLAVgPoEd",
  "key35": "2ZHzXVTKYDz6dLV1oEx5KJNSKPme6kRSixLY2shq4fVpJkZBARnqFJyintjS3jnae7xeyt7HCSu3KujT8ZoDbyLa",
  "key36": "4qCMmLXS3w3aBrkcP2cndR66syCTqH9U4NLDhsucVapqV84wMREMA9JUKpMdLL5UTJW6HvUYbPzJPwxc78a5cXLy",
  "key37": "4LaBx3ZF5HJpMXg8PzHcGDr8MXgHjR9oVKbZXSoFa3RWaANw9iv6a44Ucyj84J86yEfd9uLUaBr7Kkki1fzRh8PX",
  "key38": "5nD2Wo4Z2XP3gA3uqVnRx2vmGVh3KPZYjWNJsF2gGZKayA7bjBEvnMghdDrEj8Y1v1FoknBoa15ZUA5FeThhDoeE",
  "key39": "552dvT5ivbqjacDMpQHc9KCvtETFqz1VJ8GkAk8sPJFe9HEKr7FVSDxT3RLi6iZi1Ck6vrVNAZHHR3v6aXuLgUGd",
  "key40": "4CaUiXdg4B9GCTXJPf8dfzU53RHNBLoGzBc9kPozGhqbLa9TQRX9vqFgT6cWJUmZWnRaY36De2xg6q8V8j8xYB8u"
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
