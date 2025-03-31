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
    "4T7RKeqTpanWJuUSR5HnCKyuZo25T1HTLCuaYJPNZoiR5ACAASnGZmo6s8U9q9dg4Qm4FymLB4hYTRY53NXRiXnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K8uCC9iHejLti7Pmaj58t2o9T77vJwkPNbYG4tTMR83AwkXBAid87rSjmGjFjyKAHn2ASBHjagiUC2XFxXQ5Jto",
  "key1": "i9aQNTfuBHQvz3L3epvpwVo5QwEUtXmxqpsNPiyguWr3KRMXKVURSDGJdkAssGTR9YZxrigfJbwjTRxMwiyV8FQ",
  "key2": "3h9v8AzGVsRhxZ8v3yY74Dzf81xbqMw9renw4grfHHWAAWAvfvmdG2JJ4tfBJWQRMqiZi7WmbjUJE6N3Az1nQkQb",
  "key3": "c5rDoN1oGJR6kLfGK3Souszwed4CBD2Jq6LTm1oeTHuPVS6aE3qi5ujTGUjfSSZGoHgQbd84aGY2VY17mUo1PTw",
  "key4": "4Dkdd2pK2nTvE7QuysMjsbHvmzHBBbeaorDYmzyqejgoaJG4rkbXvDJ5EEgC9HQEf682XLLVBudDXnc1WKdbXNNA",
  "key5": "2PR8YiN8tg58ufnaxmKkqQgR68RB4tyEuCH9udH9G23scBtHKbUKR8S2uCbFYxMnQtaZa7fbeueTs8Cm2UPMko9b",
  "key6": "6bmQBkmctSxE3vaLCAK1NvZQj5ETFrLYAciEqVDiE3BL61PkcqArdvKeWuhbdSqMhhfUQ6uvDxYfthqgMEk4gpf",
  "key7": "5qJWkWdSyDo9L6FyAXkiX32Hq8SQ4D91VYHTJCKBGYz2empPAVLMgUBDxDoFRGtEQqYtACihUCw2vRGVERDsgWJn",
  "key8": "24Sq1KgbLbcj5Hz26tXxPJD3oJ8USyQwy6westUXEbJoKeZgsSNH2aBea6iKkwDgxYdbKagQubh2i9xwjZtw4h6W",
  "key9": "5te2LtunkaejJz8NynwUQ2dhQMC2pVppFBgxhXZZzvL6h6qkUoU7dU4PVRs1wL3wSb8Vb3EmCZeSNJ3hWJC3NAqQ",
  "key10": "2PetyDANqc75beb9yTBRhjkQu1jTrWqFRAtj75JqEb1xuAhfDBnRTkWvS2n43zcChL1mTK5mQun96x4zdP2LPZfc",
  "key11": "2G8v5VEmHp5HF6h2okqTbETojxoG6Aze3tmYErtAH8rb6bWF2Noh4Ch83cNqR42E17h4DJuYmKfpzx1QasWWXSNR",
  "key12": "28j8t3i1jxYLfYjAxvRjChr3K5SjU1gsiRmtx2XoFgJXLeSLSuYThgRnSMbNRinKwJGiRyKZ5V6M3vPBstB4ny69",
  "key13": "2A8oQHEbM9NgbETm2UU5itdDbd8S3caobesWHYcRLBJkDiqB1hSM1uPnubGT3zuVivpaw69bnqWUQyPUcoiVAi2y",
  "key14": "4kiLWd2GbTFJjmRmbeLYo8HkAhLeeNkmbZQJ5vYNqXeCzLcugYZEHJdMJ4CtixRxmGuMXj71iUmQbKRY4hBC8F3L",
  "key15": "4RHtyTSjzVUgqiSLhr9snidXmZsUR87VMZPbTJ6WcuHNAVrstZ5fze9CyWUMHtwG3bkk6pieam1kR7apzwoNhqLE",
  "key16": "5eRpWYTfkDkehPmAN2qiwh8dyjRs3BfER9MGbZqSFFWmQ2ifKNRaHT6xxnEJc8wzQ9pcCwifPj1MUzbXPBLAZdQC",
  "key17": "27iKXrct2kXXotcvtMSf5P8LABTcBgKTm2oJAWvVL2NHyo3G3CrtBs2E85RG6VMxBNnoF3FPoYLAnTVzXEnMq5Ry",
  "key18": "zHav4K4Up91W6xq8uCibT4V2nhN1qvfaNqKX43mPhXRn9jJCHCoyhE5PAW9Xe89NJMZ85iqCaaPUgmQ36ifmjHn",
  "key19": "4se3oFDh8q3KhdSGS8gCWNPwSk2sNFx19ZEFwk1ZTC8ub8uUB6EfQT87Y5M72PEkEAZu3r3YfkWANytdHHswhj2w",
  "key20": "3MKHLdKrvcHvBefWaunYGSjCMA2QHCwUqYM8YvKkk1e4b6Ecg2ymTezKZe9y3vdpf89Cqr6Y3DiGUjpBmVRusy4S",
  "key21": "3aN1V1hFxDijkiKCe5AeWUwpDJp2zFNhoeEiLwpRtpLUsBZE5KHyhWDqjqRTLZ9GEXnYGXrYniQ1nKAVBAHrMhJS",
  "key22": "3w3DEzkm7ScUGTVoPvt8vXVCE5DWLADMEtwgXVVaiFphHVZzJsk4DMw1tqkH6hETejjaw8HGPsQ9YEWnrVuVzrM6",
  "key23": "3psykxwwJt4hG9nrdpF1oqscMwHsMo1gitQwZGjVExB3sdy3x3bUeMEHtKswLLDeQ5kfHS4KabmsDYzpxaJvpPkz",
  "key24": "2wRWaE1GJs92KCZTok9VpqVXNG8zzddR1VLdJ7f5kBsKzE19VAc2VrJQRDptXNZpuv3CXh6rUq5TSCTCL11uDBN7",
  "key25": "32knFWdDdJuAdL8h9ndBgZivd23AjgTKuKDo3M9HUpiJKF4UvzhEsKdyt8HgBE97bFN6pKdPopvwUR1b8eEig59M",
  "key26": "3dBygWMVMDX4Aaq4eHXXukTNDHyK8E4jzwThYqnMArQsF2thWDWsxDfevpWMPEN7JM58UU1gpc3APh8PGQECLUAp",
  "key27": "5F1rQHQisurR3FPyYm19jKsRm61zkviWQCgS5aRzJrwkbJmvDnsPnTkJanHu9noYk4LusoNVED8fwYVkzhVPWcw6",
  "key28": "U8usZx8kHx49APcpyL7CEZcLSU65H52z6MKR6cwBrwBH5kJ8fgrpt8aZtFRvnZ725M8ggX9LZ1sYEMvRCK6dkWE",
  "key29": "CTobduDsQCFC8ygSZXsgW6HA3takTmpzRFNu7w4KJyP7w2XtLSpcvNfZ4MjKheJ2GbHSHLKsvUf5evgxigcTHDw",
  "key30": "9BvkFyiChwRrQ4S4nVdKQdu3iPUW1PJJ3RaGHxTWFoKzvjwxPFCTi3hpUiCYeWfrefvt8F7fikV47CUHKVrA2L2",
  "key31": "4ey8sqHCC5JdkmZwh8WPpZGFHsRJcWARuVxSZXMNcK7U39d8bTXjDxabvjJXCRp7X1Jvo3MG6847gDY9j8yoC4EL",
  "key32": "aPgFtRna6XakDU1JB5EWhSNsCGVqsQvm8rQCEZkswXJp1tHToMK2vSYzSNqU4nrHarV5vtRiPcMBaKZ7aUV1vCi",
  "key33": "3eqkzZxFLDmzRnob6MnQD9QzMaiSbM7bKD7oRdkg4KLMVXwgF7sgbqgTtA5Nidsfn2z4PDtNhoVqsK41JCM9zsDm",
  "key34": "5iQauZWv8Ge2vTyFupxLoEcPWpNos4cBZE3oHs6G1UXgxYZZN8SDAJxweArsmQRWmZYh8axNQvAGKuu4PshfYC76",
  "key35": "TmY3WJGoZkt8fULTbgtJU2kLTYdqQERGK6foEo3UaEBFpqqP2TE3EfweCrdYLSxWdYdafYyAvWbfEK8rtxDGVzS",
  "key36": "5fNp3L2brz9YAHXAwyXhqoJCPDaEaW793FD9qQVPKyw8owFdha6Sqhzh8fnF1Z3LbpQEkUC61jYkhdHnQj7DwAFt",
  "key37": "2YumfpSVhFgDvYppLbt5bJn7qnEpaMXFoboMXyFbibyk22GpyrgDo3TooD2DmpLsrmc94iGqZmENhWDrD4ez48DG",
  "key38": "5znXUb1uHnMCP9LdPGJPwRE2pRH143XgX9ssxmYJZLZPJmbddvW8mq62ychbn2V8W3bYHAhiV3LTjL3M4JDyUTZo",
  "key39": "5cdkJf1metnccixmnhNHRT1ez53t5cUQYwWRq3iKHYPuQHvziqVsctYkPEyX8yRd28cAUPHyEyX4sDcVXhak9KP8",
  "key40": "22qo8RS3eM2ZhxLvNyijoVZKXXi6g4fr3yV2me2Q5PWwFDxrRjR4wYn3AbLkh3XanFFPvWXA5DzTYwEvA8VjoV8f",
  "key41": "2QwPACCzSmX6ytPpiS8oNjbZScWe99f4rzsAob1tEDoyd2C79hXh7TNPXNDrBudf5HWxCaq3KF4D2vnQD4iUoorU",
  "key42": "66gozEaV4vNmM9uc4GFBPkvDDZNTQvY2EVX7tbGvJSYvvKzAu9DudFctzrPK1kH9etFYmcgEFHdcABfSQyVxQ9Ao",
  "key43": "37KcNUHbSjrJQj5pf7MUPbvdVAvAEvdG96LPecbRYteeq4bb6kuDxNf4QK2DktSYvrYe4cpLAtZs1A8P71ytwMrC",
  "key44": "3Ef39MXQpcRhg2sD8gvAvz1AKaJVth3rvap7ebtC6W2EwVv3mnXspxxWt54xfnmfMcVtaE6MhYE8Q2wqbBcRkSoH",
  "key45": "4nnBbdXcMocLaxaPvAL2GAfkx7dQEonD96nDpT36HgfT4dhMUMTiw3SAQqqxsnusccdqDURea7VY7XpvpJwiiLaU",
  "key46": "3U9w3QizHiAzfKwGxzwMNi2MAafDkjjiCFcfrC3p7Psq4v7a94SCYvd5v6EU3aqsDcLSccypJUWw8EahwDQLrNEf"
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
