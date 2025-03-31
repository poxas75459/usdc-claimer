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
    "5BAoHLdo8hu6BtUttc3JYJsUnwP5fLJxCcjTr1dAm5puB82Zc8rTDXQh31aJ44ALVN6fToBiHjvNpvBJqLmmUNRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xEnEwGqxbsEX5Pew3qe12PPX4SfFiGLqZC51qhDdDQdrYGzTMPVyFE6hfTfqyefDsFVvD54J6YLZrJ2Cqfk7mWp",
  "key1": "ykRpnC3AFHhU1Zi7GK1Vn7QwTpj1ekw3DeymGPakmWZinvjgLKGMNA7LmfwH3ywzvt17ghFy98aT2Y8h4bY5cwk",
  "key2": "2Jr1puuugytr1vPFkU9JK64xCBmmjHb27WgUA7ovdFJu6Zv2ThMoE456WSBuBAj7QPv8GsdD4P4zcQCC7J29hwAH",
  "key3": "3P8iPoJTbDJhbpxjyBjhCubEwzisWmmoaizQqUHsv69pByC9wvBrWgL8JXQ2WKBLbPSzHk4sADXDYicHz9h5fb4A",
  "key4": "4G3wcWdCmnNZYHhfTyV8i64Z9LWih8yuRjByQAJbFW5df9VHySheK1UiKrz2v2PyQZWABGmdBSZhEvRq6ttjCzaw",
  "key5": "5g4YBRUvmkDtRGyYcVhbCXuPf7ejqyTAkbM19eWtTKgbuiMDhcgMHcR75SZSHKvhxB3uFYZHSdyNAmhaJwJxuirT",
  "key6": "2CdtggQTEVHbARXVcwgUh2VKJYQqFTQRwAZ6Trx3RRcb5ysD2bWL3eTryDN81yRmr7BFydb1KXsz8zxuoGtsa8MR",
  "key7": "46x5VuCbkc2pnW9kg18kUxrhZoBTENo4CdvxSKWeSmQ4M26D4h1Eobb4QAFAobzFnRU3319TUzUJUSq1ba4QaYUY",
  "key8": "2Nw7gWLEqqRseX72nJYGMpF2DuRBJC6QDSLVcVDRhpT35EsCgGBJkvMDxFvCjnqSpGNQg2q6MY9ncR5t3UQjnxVh",
  "key9": "4BXcQLG4kjAdPtACwGXsRKSwNmVfW3Jmv1CFRwkGzXQwq8Z5wv9gjrV1BYXuW3ToFdpJnGBbuJCdcmkzq9uLfTVo",
  "key10": "5UDLKwXohbqDjTgcEEbmiMKM3XB7uH1iyHjsAHk8kyfxP6R92kq61z2RK6ESXciQ3rEHpkVq9WayEGkNtFxAfSx8",
  "key11": "4UDkVspMJnYFNyFfSYVE659np1g5KTD5uWX8vNK1JUqhMrWNBnVhqsdWTSYN4u6xuaSGo4Qwn5r79HkKsHkgzUHo",
  "key12": "ervUYTTFGM37Qzf5uLV1GZBvdg1WiSYxQz3fxN93UDZ9cFiexsZfE5ibA7hdK9A8ooPnm4ZcG29GkC4SwrUH4bB",
  "key13": "4mAJ1LENJYP4qZsv2sndDEPEEd97BdYeRXDLUSeTmC2TmRU9ucfZbByUcM14iLEKw5cBckU93B1tFizYWWurX9F7",
  "key14": "2bXYsp8gfL6vxc7cua51xP2NCrEZNCHVV9VG3VZ6u1Ya8JAZmCu7XZijb6W3xF9M2aNB8RaJ1zQG8TEfzLSjxsCS",
  "key15": "4hLtmmRPWwiJfUv9FxJkxN1Lp1a4wPkUNmXQZsToWemBetUQPzFvQvVCeUGYPrPU255vXixNbo53A46X7KfeoM5x",
  "key16": "476pcmWacDHxy5VU7tqJHE4gPBpcMvvEsk9eFN7TT6WmG2aF5LQwzVfMekUdp2EYgfXg7NXPx5Let5rRyZLG77Pc",
  "key17": "66HNpR5LihyfbwephoGtSE9kyhCDyAHzwvEybab7VZZBxK7wNR5eCyFMKibE9qhWhYug6YJkbew7kvpRF794CNbE",
  "key18": "4ViXFDL4jiJhN4Rsp5mATjkQARU8koJqCjgPWshQetfkuaQmsW8FdT2zFN5izFovCzSTpVMi2DXGA2G4s14eD1gr",
  "key19": "5XMmLd51YcqVs1Q1QDL31u2ujr5XDRvGzbTxx5oRD3eHTe1paL5ppm3R7p22cwxufzG1y8ixsm4HaMBBCR5dqNNj",
  "key20": "4xzUmUrdGc94cdCPVEafB2wosownTEvaXJYzthiLi871hsfw1gQzzDxQBdQqPBMjeEXjtjS3WcxKUJKf7TFz1roU",
  "key21": "4ggFdCNq2RdyWZrBws4xQRi52RjVk2hHUQKP5NdqoLmdx289sP1FcFUdbbb4RAgPJib1ZPJh5nHRCYEH1Wa1hzL",
  "key22": "5AxKz1q5i3JoDgRAPKyfrkS46rC4qjamrjkEHX8ZyjNgXaU7f5AFvLM5Jdr5KaqSibyWmUk2wnBHXLf3uaBZ3LTw",
  "key23": "3X1CkqVYTQcwa9jWf1E3engcNg7miyqF1EaQwcLr2fLZY8vHHcq8TLgEy2JSNcnY595UfSepZXgoSZDjBo8Xc3c2",
  "key24": "NkuzLHFavqj4tH2VWSbE7RRiEuHUkspa7U7iaJP99Zaf91fgkXqTyQpmxrfAcsMGmGsJY1WiSE6gASGRrwNYKsa",
  "key25": "efFPF6pPioCame4gok4ehb8dTUR6yPFUDdAkBLNv7jZW5XFRSHaLbBFt9e2DUHRn2zWunnFFW3nSTkmkd4ReyvK",
  "key26": "4xoG3TnRgeGz2K9ShYqFDbSAeYAQzHRa83d2CyDmPjyHF889UPXSgoHCi93nSjk2ahoEVJfAvYThiJ6Bvv5VNwUx",
  "key27": "McEpUUf8g2z2tx8m5MxHzMcma6e8gUjZgE7bSE9ZWVTjRKFDeuZzV4gVWvwAEZNzhCMkEWedq9YYqkjjKoTR8ax",
  "key28": "55jcgSYfKgrLFVpYizxb1iXG52NwKygmG3YzPy7s4H1nzKSijV3oPiiT3tmSHVYV6PdA8ZnnL4hc1ZFH2X8S7qm1",
  "key29": "gTdZdZFwnB1A4w3Z82ts5YA9XJh4rQsDs6tCYAK6LpTitMCxrvmhtKEn92aAp8H74cDNqw5SHBDNj2U8oP3BY6M",
  "key30": "4KXH48wQ7dtv1ZSVjVo3fefnnWCjEp8UKH6GaBerUgNQddy7cgGcKXHP5EM8XeVoktvfxRT6CvTgLX3soC7nvuR7",
  "key31": "5Z4pz8oPAag7NFYkWXeHogKehjMzYYa7orfiU84PA2eb6sQQ8XqavcvwDGJt83JX6kiJVJ4ChgiRhaLcDmpGu4hT",
  "key32": "4bBSrPs5ZJbG627yHSWLXaKnq8uRoHygvZf5iRk5fyM5vjCitzG3d1NFdvEzjp46aX4NCpgDNfK4DSTshfa9TkVv",
  "key33": "39BAqfCYe6yTK5uk54KJDzWAAqrAYynAhty1xSJMkPZPa2iBoDnK3CGTZL5E9fXi5vWRFwVo8gKHjmR1rZjxnvdn",
  "key34": "5NRNsexj5DBSxwxFVbGctHFAYrGakDbtHB9QbG6fn5SHJvQRuc9YyX2jYrsA8FvhKobXmRUyJDxmNF1cGaCAB7Fe",
  "key35": "5PQ8cZgouJtqPdp3TMReQ49F9HKuMQ5sMbkXpqq3Yp3pMLLTkBfuUyacN4frzGTk55PCysDjLd8KegnhmGNJL7ku",
  "key36": "3uv6SeakECuFKLzwnSbYrHne7dV4LQNbNWje5h6i6oba9mdWPZBxuYCtissERmBvjkjXT3ypXYnKD6KWrZjRSzFR",
  "key37": "4FfGtn414NmVp5hzXdzWkbbhmmwiwPwcWCH7gbYX4yXqb2Vtr9jN9taCNdo9Tc3mPw6U4kat7mN7uXVCVj4rR8q3",
  "key38": "yUhddg1bLfYWb87bZQnfFGgLtNHngTf13hdziGKnmMpvb6o4NH2KUWbQYPaL1hSq5Nr2c1fhNkwECBFcta4R47a",
  "key39": "6cF1LicAUcLFCaHhAMiNKWuHBZVXDuvBgXmiqyRNs5tnsXMYES1kBFDBMTS4psDwHHaNnc9b6CziBxcNRpA7Gwe",
  "key40": "2hHtYLkv1wcmRAypeFijKy6WL2jny6Z93YsDoFMhKgUrvJqz1zg9BUtKzRFsKuvTisFJY1akPsqDKCYXZ4rD9A3s"
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
