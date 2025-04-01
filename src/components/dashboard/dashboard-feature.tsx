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
    "2VNJAoRNTv8MhDicknq2fjPWeLtuZZFtFEkb8bHryhporNykzKYTu9cV5TMGHnap2hRTdU4t4qQw5VmjRrSTZSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTN5Qf1EW8gCg3Erw33FQSQvNVbGnNPEukgiVFix8Jy3ZPdimzh2ra16BKMF4KDjvmTaMMYm97CieV443vKjAQg",
  "key1": "2DfnuTJG8UHv9i8iChKafVVnkyJJT1arbhKJUjeHFwC3TP4ca8mvYtZ57Sh3MKuEFdhFSqwzAHPZ1NzzV5QWAH3X",
  "key2": "4S6JVG4rPwdDjaKSwAQNDsfavbH5jR2fakHgbLujX92eLEjrkH1WVzhYjxbdW2R7jKBXUpv5Yc4HyKZYwgtoBQmw",
  "key3": "2hb22yjEGcFZpQgY9S35xVEjFJbC6swnEs61G4gKGy8G9twRdFWzpCLTUZRXP5GLjCwVa8sy6y5UAENtQrurXzji",
  "key4": "5SBfVqadptUSxXnEx58UsHk1c7MkixMDgf3SbZA6jRsV6L5xkTFwG5ewAuENduGe73ptghiUVTtXPcSRE1wttSy5",
  "key5": "2LApwV18UQcRFUosAJjyRc5mWXmWxgxrMG6gUZTLcabDnL2VQF9MbnvGGvuo3jc7GvEr1bMViVkAkq3nojkQ1UFK",
  "key6": "4zuLLCwyJRDUKhMgHgR9TS3B7PjXCK6DvApV3oxgpMsWiCBAGDkvYoA4kFAD5PE9f1WcPwX2TN31AXMDPVk6omyh",
  "key7": "4FXEh2GfEW6bTFQvXJJUzwKDkSfSqVSc9TQV4Db6WvrMjt1NNPCjvfYkMCfcGf79Z3ru6AVHo8UEH3CMA4eqQmUj",
  "key8": "52jPxgUxJn48vB5MQYL2nWmR9F55rHZCRmyuFZ7duhTWFAhNpHQF58xWNm45KwGJxUrZJ8vipuRWCr8izTNidb1W",
  "key9": "3GLpq9jG6XrNny9krRc8BDmq5xuPuFv6zBvF5B8qsLeRxMeRgPAiMcbjietYbg6ziDQcyW1VuVvhnrNM2YyEE6NM",
  "key10": "2jfc3N9LVVWQouG5x3KXZdZAwnutvt8sUayfXD55xej21HLnL2TQetPyVbwP5FtFUQ2JSNLUtV9Y9sxN2SWZ988d",
  "key11": "3nnBTjdUvirmQYaKpsGVcxcTDwWakQtaSFUeNHoHKQwSED9Eyy8pkh5DWVn4G6zhK6bf7HcYhfxZbkBquGR566Gp",
  "key12": "TP7Nxnn6ESKzi98RefqVBaDAEMJNnLeJGA7Q8LsCsCyMcSCLtoMAqZ2nsASTJnsGAgfN1a4qHDGujN1BJbhNaH8",
  "key13": "2cEZwFzokwzjz7TtGm2CEt2rJajb5ZVbfjfQNgaQNRCRoUCDhUaRiGnmWzsxb2KtZKgeoTt8pJ2q1zeNbjK5HDm9",
  "key14": "5KWxGBTBZm6Hye2WcuEgnQxYnL2PfTjmWbkLqxD9e1yb6RRuezfGH56YNyHKNy6dfgkQ8LEkzoGrWgo8HDUwTuj7",
  "key15": "YQAtxsjV57R9KaQCwBSAqjA6E89qYYcbWUnVDgcAPr7SMJrwzSWLL8swuv89LhzLw8LeANTh5SqJhknTnnP11ee",
  "key16": "32rfe3FNrZKub8GnXTuQ9qs78XYA8vUUnBtirvxtt2x4HxxEaXXiad9zEB9Ho1Uyjr8UiotFqCRcgfD7HWosMAz2",
  "key17": "4tfEBR2KsZkPbUAVBG6S9scdN6k1wjV71kwTgiqSkNiEdFi7hiquxLU3VNxEi4chkm7NHR4LKXM9LpuqbMhjYk4o",
  "key18": "3E4exqrvvbSZ2NPpjEzRGxkfKoLqWv9w9DFsVuwJGBKjGWRWsxXyhS8yU614MQBuSraact3StV1hECJFgHP2ZbKR",
  "key19": "QGBaEkq8TnjLnnnqq2A1zZQirdm7FX4k4xoDGMBG4fhXNncvoVZ2uWznFADMacfo2nJ7aE5xcCcuvyRptKMbCe7",
  "key20": "55t3HHV8maPMH2ATc2VA17BL2D3EJUURvxANGN92VSCAEHPMVPiqX5CUavRX14cG6yRtJKNq7nSawZBPfx4aZMnn",
  "key21": "3Sqomu7ZkdRUkAKEmdrTpAibiR74hxH7F2m74tyLdU6uDkBZhfWrqvrDkr39YTr95hfvNYMX7LBf5CgZkMTCnBcg",
  "key22": "4p6BZ8E5geRefAyoxi7xtQ5HNsY3WfPBVqZ2iymFjnLv16EtC9C1P5H8P6ERxtnTDcXrSUsDVuHXAtLhGR19Wheo",
  "key23": "3DAUenZ69iHstgKDxJsxxHoLrhwLh5MV7rLN1t6TukVpQAhSFVozJmrUZyr5CPV9p8kDbhEQvW8xbM6YbNLq7x68",
  "key24": "4U5GceGoeHuPTNwiuix8tYfbFPEpUxE6az1LSiJXyNzfz8WCAPFtc1aFwxHRgbtmbFh6QdCQ7YyQBJ21dfZLAMCy",
  "key25": "3ZM3BvDmgQchLCCiK1hSn5fJn8kMSMRgCzoa5g3A6S3miqGEEoyzh6wV6JX7VnwuioQNFbNbd3jaLAbgutPywwwx",
  "key26": "yxka37yesCNh6AgWDWA1qfjGPzQqiCJoHcgaxf2V7smydL1LR5QjVvNbDcymtVgzNDSG2eo2nUu1j7ReXwMHci6",
  "key27": "5JqJh8qs6wPm2zAsyrJNofF9wbtRt7iW5Ssq7NPCTyfvm23iSMVmKifTDW4ggyr8DvYyKUfQmAJKcDoAkvmQRPaj",
  "key28": "HfhzKHQMahUWdYQpKdjKMRqNYAJMugdx8dGKhiVtyab69PfwffsngLp3CLKzqc2c7x6gBXhDFh2s4Ut39wZLFeH",
  "key29": "3EEdMi2rX8PVZexoZaHFjUGfGxaWHF33UByYN3RHhCV1btkiqQwCzfTaq8DXrvMV2MnMaCuCEoaGUGM4ptijuNKG",
  "key30": "4pjXmQbNs6BsanE2JX9p1NiDNXE93Xz7kngfDXfJRPHb2GpZAoMTKG1nykMgSfCY33M2B2p3ucPqbSYoMCrCykhe",
  "key31": "46h8Fqav6rg6BkcAeVFa5oPAUjJJjpGf1ywEzQVkLe1RxXBgb8Dzfgk4br9jC8wJhufcQ9ogd9GqBNey7wgTe8cZ",
  "key32": "3YheKJc8dVrFj9qNhCcuknyvNFX9xUzyoKVysN1m1VHFrHKnfsURGyWDWoMzMjPJWg3SWnkLpp2DuQMpa6ERuDL5",
  "key33": "5nN9YUCSbyvunGmrGW2arVvZTVRYCKFjXFFG8pxqCbJjgd6hogZhzfU4HQKRRXXAg92FsDV2XQVxNgTNJ7n7emgC",
  "key34": "3pkSR4ScA5y1V8GiK1iguHLrnwmSNYwyERGgQK41znWqJgzhF8okagxdFQ4WHDAHDb16QLo9AjopQ8ryrTZibiUq",
  "key35": "4YMW19PoePFxCA6A4GxKKDbccSXzGjewT9i1zsALT4LPu3kS95fWjaSDhaW1avFCJFmrZTJPNkEF7hVtkw6uxSht",
  "key36": "3YARWeNdGivFg4o1ZoVVca4Y3eH6YbcsUiSQUP4A8aKKVRWwwu6TPQSumVLaFEJue7UrU4kdNQcK5ieHjGnN8nnS",
  "key37": "3bUjGgCYnrH13WmxaWhXAfewRYkWSs4qcBn69X19FN4HAV3BcVpbHNgJ6fQRuiHuLDKL4JcofDsyTGdxSHitvWke",
  "key38": "3igXBpfAyk5c4dRNqm7SuzEz1uxr5ku14r5vkKiCRV6JKuAqd47pEKWgD9BWQW3xiteph4q8D9kg9VxdobHCa2Zr",
  "key39": "4T1rvz56BAv8PqBfCS44j5owTjx9qpvo6m4XyjwuyEJvohPjc1bahXZUWtDdUFiCAd8rstZp8pX1ajqqybMp7AQ4",
  "key40": "3P5K8VY4UNWRwAZhuS61ZRFyWTYEA28TQy62qSeA3ipusNek9ucavmRVRBPLreu8ix48GTv9mjLAjr7mahdvEtSp"
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
