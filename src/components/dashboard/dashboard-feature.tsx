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
    "4TSC7upX4NdGVsetCJmggTWA2nwH3CCV64LXAezxWixgRx3KJ3Y1Y6kHNy9VG8iFDwRX4ra91SxH66fF2ggkc7zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvEtGVv32HJd81JydWrBodhF61W7uWTNN6kLsBpksGP9v7Lm5Qja93VNeMa89DV4f9rrfeoyCEW9Mka2r7a8mZy",
  "key1": "VyUXDqf4JRU43Ls4xmVc6SP8V3kZXEGvKMXbkANVtGHvKBpSnf1TTiLHC9MbG7f3GXvunBsxzaTgNCbehHm4Lj9",
  "key2": "pwkiqrrC9qFJvCPakpYUGz3jt98fo9VhzVBL22FxM1UedWhyXFXJnKYUT3WYeEwNe5pJYeqrqUcSHrdrmKRfHg8",
  "key3": "5iRsGG2n1HfUN6vx1XrSAHfbLj689SmQpk6wgRDxRFdtxU2vJtzA3xu6bq4LEEVXDnnNmUutgnPusizeUQQJUakn",
  "key4": "3pqLoZ4eoQcvCkSEmLxheDJkZy816K96JqMLbpXpLyDHRgaZVrUFuGbTPuvvk1XhagjCV4kaVm2WDtF5Uapo1rv6",
  "key5": "SZPZuqVNEyX6HBNVL3r4pv5JHce5Kj9L5JxJmsueB1eeA1hyKFZDbkus3qd7DR1UVLn2mJHAtsp4YLKykhBkF6y",
  "key6": "4HgEg8GJkV4s8ebZkingDyPd1BxbUgiTrZ4W8xQB1pwX7hZChXMPxNSUP3R2xCnAVJACf4GARz41cytie6N8pZ8R",
  "key7": "4DDkKugig2dA3SZzeUaJFCiBEcZWpee1SVrumKkmRE28sQ1TWM6tis9N7accjXvzgybnLy7e4ED8qwN13n14oLN6",
  "key8": "5rFshzSJVMoMVhvgRnbJTvCbFgjLZAzixW9NwzmdA6LqHzhwF9jmBNMkjP8To4MCvYyPUXULcGRgEdFUkMPLeMXH",
  "key9": "biFfAfb9BVijcX7SXVocScNMLyrYQMbQzAWYzRCaBvba2DZC71Twr9SF7UUp2deXcSoFTezrmMj7Dm523c8SEgA",
  "key10": "4xmnnvS6d875MA6Dxya8Xa5sKtnNiJjAyLUWxrtNQuq3e56UZp1JdGxvHabgHXnubyjptAh3FqcbsDQrsRojNXfp",
  "key11": "2aKY4R7WfubJ6MejhobbmrQVXi5CJgQe3Z9BeeeLPVDWb8CiYPUpx65kgu6pFw3BrEdsEzGzsW5pPSJZfyKPDY3g",
  "key12": "5vxh9W2XRMmP2MUv41BjtqTXUN225sig3kfakxa2VLnDUHwJbQwWL6iTvpmRzwzeFGeq34M1tWCxp9D3jT9fnpcx",
  "key13": "5To6yryhy9sMkDzC2EXdZZSQK22yYbidepe8P8QC2AzC43wgsULqoEKBDRjEStK4hX3NUJkbJbnFn9TEhbgzS4S8",
  "key14": "3aToJxGsjRiiTEBZQXjfak8haPTU7Tn4z7UjuhYib1EMifjrySE7oFAaV7iPp2fr73v8HFRPpoSZi5QR72oVsR7H",
  "key15": "3Geh7vSgPNFacqS9PuqovE8jevedfRShfcL22GnRUcWe6epxyek1aQyEziTJDJk31jW83rk9KrPDY4z2fDhSPLdk",
  "key16": "2YxacnHjd6y4zbNuKC3xXnB3PSWCs3HWYVw9VMq3YwrY2gZKBiyuLs4vAC8MMzUMSK14VrrDLND8KCibdWsEGVis",
  "key17": "5TDL8Raw8u9XdbPZLk9Q95vaXEfctjQejBEyXWBW8mzVZQa983nA6TEnUPWSq957GyhQxxocKshozGdEF9np2fGg",
  "key18": "3sWHkoZUyWz9J93oWNjuNWvNwMqCykQWPZPVWpz1CmiGQKviF64yXRuGGCH1Ztcw6KYRxoXaDQoKQ8Lzxk1KBBAf",
  "key19": "3jUZizT5nmyvNcDW9AWckk2gvMYYh1M2JzwTHRReoM92cz6vezqypQF3igLCvKK4nLxUFRYqy6MaVueYToeiKg1J",
  "key20": "4LEQwQFx9GxA2VmfAp2xsnvgfWKbZLqzhrbsMFafx7BcKHxUAUwcLRa6rLaSm9eX13JyqrSpUzYEfX36XjpVCt7g",
  "key21": "3Z8jDQ5DDoCDyw5SCwcUbhvcEsawypidFBxHSstX2m1Eszcb1try55YTDgYzzdr4vHmrwYGjCzArmv2w7MbLTkoW",
  "key22": "5FXRH8hF5Rs8fZvtAeG6iiJz2pyNkRRuzfthyUiy6GeiuwPT7L5qkrUpSZmoqad1iXoiDKUprSfBpqqJMVrFYjzc",
  "key23": "4hMRurCfkqpHCieoTiooQAaVWNTzR5NQBLBgYmGnMzQnoCRYvv1ei7NYVn6Fm6DyZtMEPADZkHg2YF8GbBSkBU2M",
  "key24": "3LpaCEGq2H9VzUhuZ3nKuBJCqmLQ61hFfHmNjE2YTZaL75dPLcYzLkigLDh4nngDBuDaqFtJTEb6hPa2o1Vp5KW",
  "key25": "4ZAPtHu1bs7JZa35NqYShihQRgET9PkkFo4VhxUHgDez2zoXYpoS9kc1Vcj3FEdpaRcdA5dPrfNXkrYdjDccUrHV",
  "key26": "24p8chw8zGE3xjcXUMfUzDGXUepUD343dHtUmYF1bzPzTjTZkm3NAmFJRu9aiXajXbjt8UqZFBCYfE79ADfQaEgN",
  "key27": "3Yv9CUUqVdHooK4uRypK81HFMZ9vycQy3YgL8dMU5JoSTR2zwuVC25qRLepf5GyUQyedEdgieufRzt5ufuGpRW3U",
  "key28": "4regEFSKcdVhffETzGyJjZHACdSBDoWy3FYt45UBqfUmph27Gw1SSNrsmtcAS18eN7dzRw9NxPvmEwV438pdYjbd",
  "key29": "3kPyQJYN4uCsCtNMx4LiSVStDRXuWdGqikJ2QF6De2nKuUiQFC1dYLA9cgqJRUH9b6UgRWn2xdrjy14dciYhhK4R",
  "key30": "3NYjSt1FbSdHpFf99ukWMCCfdR19TYzFXCj19yvseXxRuDCUD653Vm4VyYdSYmfCmwLBS9hWuHrydY2337e4wuxm",
  "key31": "5pSXMWPM4Q1YPEKB3Cb6eiJJEuBCjUx72ecgEReTf2AC7ua2RFs8U5MCTF95RAhoYkTiTCYuuWvvvbuQrS922rfB",
  "key32": "3vuRBBH4diBcgNaPfhvDDYNBP673Tqmb7RvPuTrFA9kS9bFiBu5BWrJcaawUja62uuWhjcxs5kcCrRAwryT1XJms"
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
