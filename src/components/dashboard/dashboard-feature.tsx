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
    "47TaZ8SwUrb6zPHbEw2UCRP25kvk5HwXYN4Zqpqp6YddzUyYM7fFpnpkufChaaciR6z9p6JiiSbTrLdBQ1U5oj4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRb2asGmNj3k8NwAciEbRcxz7HUaKURemFKazXpmrE5mt8ktTWk3WojW1y8doiA9ejHg8tY5TVV4ddj4E4uG23C",
  "key1": "4rqbUvU6vEpXSmCfCdUkB2u4Rv2ygSB8qmwwCgYs4rCABre89srBpNMjgWMBvz8iEbo9AouhkDfPMY5YbBTbUjkA",
  "key2": "5HevKC1uR19FHDpSu86SLW9YQZi7kVnBLfyMNxUkHE7aaXsrmAAEU8s5HbL1Np3g9HjCpF4Bipvv4YaWK6BCBLec",
  "key3": "BxmeUzP9NB6WEmTCrRxjxZZnRq4HJUnQDWYkZUc3E6SQbKGoyZKcY7bXyRDhy4h4RqnDfJyetbW2apsbHLgVw9g",
  "key4": "5PvJNsGsdweVUebw365uDnfPJXKVVauNgqB4c47CTCkQswyMWNngkETyTM9gVe5qTzGt2LT4rWPWnTuB3FippmWq",
  "key5": "4B61vBuZvam3a3o5DXUJ6T3XbG9SmaMhWNsrYM5J48errfKpSMYSfTRafZ8sXhminti6S5FhZHnbPWHsiDmgXRaE",
  "key6": "ZCCieUYM9fWnp8QyeSbz5cB33zQqh1FyQCymREgoyYJgRjxy9Spcx5kzHfvwbTbC5uptW8DxwEXhZehcZrchmpF",
  "key7": "3oKWY3t2N3yfpR878aRU46MEfcb7iaUuUzoYjFQnnuPwhFcoCLiE9H7RaWZ44VWzHf4pfcrjN3gampgQ62xTu9tL",
  "key8": "mKdsJrHDpYvQNMok1B561dwmUW6XSrMKJtetAHCtFQtgdNaaPoEGnZqNVwoaXeayQrwMQJetSQ59R3STzVp88Ji",
  "key9": "2ufBLSDsyBguxY7ScEUYFo7HA1r3V5H3tD8YfQbSQv6KVyJk5evvhnj5HxBk9cHjigZpGboqNkVRM3fWv7XRR8xk",
  "key10": "J8742kRMgPHrNWARXUGCeLSSkRie7q8ndxpPxoixcM5kE64mHBeZFK4DKJhRNsDEsvtNom8m16HdjF9JSKqCU8Z",
  "key11": "5Lj99nA15x7Auqn1Qd5X3XNcVddujGSzGXtBUCL2B4E2LDX69ZLN223DiJ9tpxKuVKEc1c6FgdZ2jTDmeaFVajLq",
  "key12": "2NQz7cpSqK1ecko9Ek7brLHp7aFBJd1L6ZB3wzFAwcVExPfU6uAMCDMtvXb4wp54UtK4rxVsLoXAW3ggruRiaRi8",
  "key13": "5NicctfKUW1cbwsj8kcrQ88yarBYTjyE1ejPa2R6WVkkQB73QS1cQnV4U6M5UzGDAydhxJ2kyGqtUzdT4m5z6V6L",
  "key14": "3GiJpcbSMXfm58VcXPmjWd9D3nYe8F1jUU8v2B2PguUF7vy772Nrsk7pTWd2mQNGDDXtCio4ZC9GTpwfp5No2UQc",
  "key15": "5t7qhyvth2PdP2sJje73iFVjymNqK3AvquUFfGHiL5wbk2wKGTk2R9CR1w8uJsgo9PEUxG6sJEi5FdYTm65BEaZV",
  "key16": "4oXdQz6TVF5AQkH1SjmfGuD5JyDWsX4vgbWG2NJoqZCiYEfeMcHE8fjcZxKgxgJ8UM5kbYVaHwqGvWDLAzRZxGk3",
  "key17": "54t5Vhfi2QYaKDX8h2hGNnpdQW3NKwtXFBuEy2Ty9Ghozdzzk9snRusKatQUFUsncSMLiZyejx8Z3WN9FpfwKrq1",
  "key18": "3RBzM2p648RwSe625mqmt4tRrprbpTGqgwHaJ5noWXbY6w38bLi8rbHMhYQhfihLRbQQcHnYkLMdamf2D138xA8y",
  "key19": "5PHw7PAVGa8XcB8DHHXPKizZWydU5zDLfAyfHDfMDJMe73YdwmWVpXv1mTxCEdyA87otD4Gxef4KZJupixZJAcSy",
  "key20": "3M5FYMg85NgsJ9BUG7FVXttv1TKW1Q1fbqkDRSJWLNB3ERtAmfemEEdZuCCvjUkRatkPa2HHCWZPUz1pmYcYcx4P",
  "key21": "3T4jdFPCGib8jAgfxcMsPA3yMqoNAEF64yGG1rGzTmKwtsfHky2pbWpLH6QHcB7UEXngWAHpXAAH9em4CWcirMaK",
  "key22": "5HPoTHCBiLvPkJV9CZSvXSmsPTWYuMUcDUyh6hTfw9sfKAA6CoTj83vUvULZekkRRsivrcGCgx7dZ17Tu7d2W43P",
  "key23": "2A6wQ4EkEWnQZ5uL5fS2ZnQ6GeewmLbJZNQnYgp6rrv1Zza74dtT8zPc9ssZccc8paqRHqV7YCuDkP2PADsgJnpf",
  "key24": "kzwk2mDXVsTtN3J9oMm1Q2BSHZuGyRkKHM1rGrHdsFhcgp2tfRFuf38hjEjFkdJaWA3k2MvrTD9igSHVri5JyHP",
  "key25": "5z4pfNY9h5SaagMghWiDTsntCm6Tje7exdZAAFy1k1KAiKvxvevA6qJdj5BSi47dSY1pRnWwGArpUsDegDebVi1v",
  "key26": "WZrx67qRye9oZCjphBrp3u5i8UJGbG3PGPFYqhMkBnbE75L5tYfeFEeWJAfNaBzHDgu9fszPbqLjtiFDm6vjt5R",
  "key27": "4fyr7y6oCbGf6Xbcw93CbmBJ5foPJLsnNTKbRz6DjMf4VuZakPKD1qzs4yiEfqtz9Q48pznoxDC6hAJAMyy42eBo",
  "key28": "5DthzbEC2wx25LueFjPXigu2GtErLX2k6Y5MGfsSYFAwB1cRH7328cW3enDDuU7Upy2uWXnpNANKRmJHVVzQmXEQ",
  "key29": "36QbkmWquXLuxXEVMczn3Y6XFPupgr1nvTJHohSTxGSin2Qgs5yzSfCEhP9yPiazRX7bwD5fUd1jiJZ2xsj3ahSc",
  "key30": "5DNpKMY6xgurfootLg77RfaLrVCWmYxuK5KBjR5GxY5zysUpacLJFnwq4W7kfKVmiRp7AjZ5v4u7PrHC8ymDdz8p",
  "key31": "2w893ewdJA3XnLa8Sp4KTCZ7iaiTqYbdBMKPp55ZihEJ9NsmcaKA1gXq2o7NCnpPGe5nJXUiKJp7hUuYquncoBa4",
  "key32": "u4panJfSAmqBCKxV8TZPcL4xMGnoG1C7TBDYZmyoNRySf2NAcjjGbdKpgd94xqyekLA6HUco8DWYjD1jxXm7DYd",
  "key33": "AWHJYsWJ5kdWvcwcPeJk3bSsf8Q2Nk66Q7a4Ai5Nbywdoj12L3ESj9PoZ7GjGdbE2XKd9FmCuC2GD9ixvjh4nwA",
  "key34": "ifZG2qNcVvjW5PYboCZnva3f82M7MfWitiUAf1kkUmG8ADwKLAvY4zVmwTQRcFTvYq1jCmpFRHiSHj3rxiu8Gjv",
  "key35": "3WKyE9xvyeuCwWmwbTDSkt6XX7uGxZqzMmTEszcuDLBzShrFUaXdeRUK5Wv7inUxmSdgjm4u6anEauGRFBtgtmWH",
  "key36": "2ve4XsJ3wJx8tYjbpszBi9u9CtcxnoSPzExszrGbsosN9tPcmbfJvwZF68C2fS13wnExfoaNwetEkq3FCJWgMwAS"
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
