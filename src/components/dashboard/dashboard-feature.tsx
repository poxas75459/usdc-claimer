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
    "2Hqg75TFxEchPmAsWdC63Khkj3f1CBnRQ1pQZz23yjnK22zu1Mpq6AVHPvPV4ifXvEv8svUSXjQsqTHLcz4pAbNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXuHFespGEvYmTVsdutsGHgVKMqiMLp5mZwkg6RzGyCTUKt65rG4VXbYLbFZPvWJH4DL2wxTxnXgoRjjH5pf6jk",
  "key1": "35Pa9BGggraV5BZUuGdTpk1F7wzXu2Xfg4KQ4hbE3K9nKU2WiGgekpcXy2xM7Tnt14htiL6wDn3vQD3xaMcCUT9o",
  "key2": "63HrRJYroc5sWmjNcD7TbufDnaeg39sZJVV5bx6pePj9BKz8ef1v45oMLaCkUQ85Khm8cBhEdMJxcMXmcyjfutRy",
  "key3": "3pvsictd92ikZcm9xWWwq7FVZb59SsfZz9KCAVf5bFqdxKqMwr7qaCrozDz6Z8hFCoKpanBkH9s29cpoQJWoWFQS",
  "key4": "64SBkf5rVHmpxWYBkaNyRT3S55GQbZSUV83C2WCyQiQtpNdMPwjgxrKpZyjUQnvsiYmSsQ2hVJXkKhBzdCQDNN1P",
  "key5": "4ro9KX7RMWMVYLHqaFdfNx4WYLd8LCLGcknkZVESckePUdPYWf1UbWARX6pox7qfQpGBiSseJWpe2NPnUdxJyv2d",
  "key6": "q8CcoNhm8sh8psuZueNbfwrjef47QyzuCjKmk3h7dXe5VNZYHR6s4qkVJNiy5tKsSGcXFXxmh27t3PVh4ZyEPSb",
  "key7": "5ZoJq3KG5zruum7fMXK98bF1XGpY3jReeUg1mfb1rEsn3D7FDhQVwHwRnU4MzDv6U96Z4sXmVL7QgiybxBVqxFVh",
  "key8": "PgGdVXM5ozu1VtSwt8PEvkgKks7XfZ9ZoReCk8R7Z411gaFPxAxgVJtcF4tBuKjs9vScV4XKgPrPwzBFAa7sYqW",
  "key9": "3TopoN6Cu8mPAjugp8zVHa9dSGoEEMW18H1BU7vLz3U6ibTerUvDsSThoMGAN36Kb9RUwFKKM4miNdE5eB61x4db",
  "key10": "vz1sWZdwK57dugmqXbHKZkgu34HZAwZTmDk54cSvjaJHuXYj4Pw2u8P2nb5idANBgrcD2nEgFUHQmnfAHwi2Cj1",
  "key11": "5Sy5JWURNttT9VnG5ecT42kpFkr7SkV1AU7MTguWug4oimzkEkJ4uUkJteGqW3gta553uQNdmcRwi2cDy8jXAPyf",
  "key12": "3RVNgWqXsjdcADY5i7ELsHm98rZdpLYbqS2JzNX3hkEi2Rq9nUKX64SLynbZ3kkpABKcV3jXE7RMexwK8vRxCZA",
  "key13": "2F2xXL1x5rXWpEz4cx6z3eMiwZSmKzFHYcJKbKmwGkSB6ovJeDDthS1gSBC3xuXVxzTTAg7wjstdPFKJBQa3Jj1U",
  "key14": "wAhkyhV9hcypmiQXhJgCqayZfi7dfXCAYmUxq7w8mZbpA1xMY5R5MDS7MhjuvFvNNkEkvxei8vVxT5ns5oprtwX",
  "key15": "5cpNmKuHP9KAD1JypvHMKVGrhuB5NmJ45RSrVNmXN93DoTdvzbYzHtmcus8szaw37n4rqa4FouBsviSdt5RVCpZd",
  "key16": "4oUkGHMUybm1WZ7kZPDrabYj6DKtVurBSakEQo8eVAT4kaA7AxdL2Bjk5DEH9V1U4P7HWt5e3scqNEzNQiM5En2F",
  "key17": "5TJc7WYJaYfpaiyjosftWRktMPPjWG5gh8aEuMVChPjYeCrKByC1PEwh2BW4ncEcjdyHvUtDCMRHu6aSLT2A35v9",
  "key18": "4YEm49DW5n98X3YK6XAX2JHqMn2zqXCDVhVc6jbubmz7sN18Ca6ekcF97zSy2puN8PLn62wdnNLZSWiEaCBZ42ah",
  "key19": "2pFsffTv7kzpFFVxBuUtPBHwcT2qhnyeA9jkDYiLusQC2W1dzu2cBkoKyh8yxe5p3inFDpKaBzNFauaarKRq9hjK",
  "key20": "5diWxDY7FLrT7v6YBtbpkeuq3KoG1VweU8iLSR3CATjZaGezm8iPoicVdpxseLWpyKpWDvZepKBV4DAhXLzmMPpT",
  "key21": "2Wa8BHVUsSLkM7fPCr3LMcoevrpXZARybNbMkMM6whgmnDD6WLpKPxSbtHrw3nUrVVxBuyxH1G8xFvT1KHnD9F33",
  "key22": "2fLEHQKkSLsmtjYz9BMfiMcXwQ51vU9xups5BA12rAH56X12vBpQ64TMibEy973iKWy5xXq487aAN8smcNuo5fbe",
  "key23": "HwTZuBowg8mQExcDcaGQkoJioHGkQ1Gpy7qQAa5RkvATewxLPvu3XZMFrdDbLic2hpSRHawyrjYbJwbvLaEipiz",
  "key24": "StHT62Kz7SVn5w4cSZTcSwxqJeKz7zLAMy8Hqc8yqqxcvWaSLc87b9AWLq7QvM9gEfutZq6pE7uG1ctDj4YMsQ4",
  "key25": "5XA5Vbu4GY6sKteLi2AsUnx5C8bSVNHg5sDZYscw98C11rhk4EqLDrxV9fwP9eVRRAt3AL6obvSp1JFnEMGmPwAg",
  "key26": "5k2bsYuhwwT9XsjaoQh1vZzMYRb76gzBTHZNKxHqJ1MBhBpbCFXabtCinU3aeWoEK5Cy4oqL99EUNNxGrp82mA9M",
  "key27": "53ksgrrUs9h4uBumkFeE8RNfsdTv9FLpyws7tLyf4xEzHxHNgAKyu4sdgu5PkYJzXKyswoMhChryBa8TkfD4t7ps",
  "key28": "tUtnwENHZnY8pmKoACZEDPhhLopQeHKpG5wSdYV7jLStzRQti5WYWSHfmT5adttuHMUYcj5kNaf8cgA64JheiS9",
  "key29": "5Z2Akg5CCpUDBsMpFxULm3FYdD1MFzQ4Vajq8nzqwnbQiLycjBKkYAu4B81UcGkBd2HyjXzUYL72fQ9pAd87gujg",
  "key30": "4tcS45rrqoAXcu9tzageuH1QFcEuqk8e29aXCTS97ZmQEWNWKH38Knr7kddyadQzijVmb48cQ7XYbhTqYDbEohoQ",
  "key31": "pv6rN1wphTd3Jn55q21Gkn7oTp8DctSPjL2Ri3kg6FBMCnmaebAvp9XTPGXkVsf5VSeXHtwPHKU2Kz588nqpiQ7",
  "key32": "NTWmNfv8MwFGw1gZuuBJ3EE5LqQPemQBpBnAf3KE5koCiQbXLz41PgsYHnRijGaRojmemX5YmYTGjRj4gNv1PZR",
  "key33": "q4FAANfuQ9KD2xyMjbGWzp11dGhzv83fuUrYgXD3MRbQtH36FouvGerC7xZ2CUYuBzNGCvWYZb3z7FY8Xbgz6Mz",
  "key34": "3GTFqUPPmT8Z1qqH7M1Linv1rsapaby4kmeVYhLbzGxLhSSQjYENQt6EwprQmMu1fAdVrzKC5N6vMXa7UrYaFeQ6"
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
