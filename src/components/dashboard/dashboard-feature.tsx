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
    "5bwcGNHFJy28qBxAVZnfSUMVDXRa6MMEYKo16ZW1epG8tAyWs1NTshsaBvNVBoP6s5WXa9325YovUfoEh3WgnxJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqCKZvDnK8TXZa5Lf3WJVdiCHEJRvvK8D8QdNnVdu4sgFY8jAXvakmkSa1sL6eEUQXXH6fx9fY4aVontZapyxKe",
  "key1": "33G6mDf5bZsHgXRwx61M5YM3xzj6k6DhWeFBYuRNQ1mf6MV6eUvaDUNTU3ALE42b86xFw88v3oHZTGpmUdVnH5yy",
  "key2": "3TWP1zVBZKuQXkpZkks8CGEyp8AssuJTG16iBEcKEjk34UY4dtiCyTxiywBxGvbX1keuFf8ZBY5xuPuCyG3Pe7Va",
  "key3": "4zahZaz8XswrDnzozZPzYSChkaioewZddyUPHEoQMC5ag5GsukhxKpTRZgtfcXfKoPNKgLyD1c6WHexFhxcWhkFe",
  "key4": "3A4B3TnGzcBD3Zw9VbijGrwuXvjm1Wgg6xooM9BbsP1aumnYrzjhbemhuDLi2Csx2cvJQqtGWEXXXWacdS9araLT",
  "key5": "2i1nZhmPs3vWRRVymZmB5tj1Hpih8RmcykxosR9DnM8ck9jiiCjH9XWzw2UbB3pCS1RzjC9a27yj2HujHu2WqC9t",
  "key6": "5GVKRBfvbgDsCTd3nimKD2crYuutyjSnXgKdF3G2FEdFjZYoiJTcQZt1Lv9GFB3MJXuqd4wAFBjm4aiJgMQkRZew",
  "key7": "4CvSvmr22fvPsGprwniUXooXxpcJ8u6XTtP6MHQWgdqboBVG3f8duC2KNAsiRwkaLgFTEVxhyQBNkjTWnByCaCBr",
  "key8": "2cH28RdyUUCV5TqQpsBPT3iC2XBqaMyKQJAAxPE86Va4gUvvTMTRp1Fi46Kbb7hyeNXLYzkLTxtxvXsnTrdEExf4",
  "key9": "5i6yoPrU9zGpjELjYKKeRyzithJ4E2H2tMxzSimB7oUhwhFYgmzajXptUcU3FVe3KLmCwpJPdG2dbrR9unV9H4Bc",
  "key10": "4XZZeaTKWXJQQ4juYqsvjyacf3cxYdzMZTHcAsvBzdpM3RAj5S7gGWmxBkTpzvEgherJJ7KRsMgRRBQF2HiUM9xV",
  "key11": "joNKxtEi1okeR6rm6U23KYFGmVxNrc14hESoSWtifG9uSzc8Ftgk9efsPvxE3STp36L87kMJm4JPCJ1uaVtk58c",
  "key12": "5UpDmWe5J5SpkAPYqpAFbmXecyRq3HEn2diaFJTTQuFrwx4QGApSdncaJhHcHz42os4eVmVJtpAEMs6SbtPLvydJ",
  "key13": "Y3VnY4gBvhKKTmEc6hMZZd2yPG8LPN3CGh2Uhet1323AygHYaiD7DapuDZnRk8uTTpsA3hfH9KnRBCYyiCrWTeP",
  "key14": "4YPVYCQjzcAEPxKpBCcQxZG4Vci4GzQ6tDTzXx2zP9k5GUrtpvLdfdaSQmxaeo9WoiyD12YqrF5LqDfpmncxKAxr",
  "key15": "67ZwhhQrU5x2JqTdwqU2m9XGF7c7Ct316sYjbKBAeHSpaAYXhAyf1v2nkAZzkEDCVPRx15TDSXyxu77ZQ51u95oU",
  "key16": "4fikypVa2JGMAccsoMZEDMV6W6R7Zga4fca59gMCBXYdqiRcmdZ4U5A6Zn8ACiWM88fJuc4nNVoSecGqMJEYe4by",
  "key17": "5uhmKBwG4viCL3oW7fyHmTbxu16gcw9BJ9AGq4iDE79aDSabrhr1s5UtdVrdtyoacM711bceaqCg6yThoogFSqKV",
  "key18": "2E4NQkSnSRoGRCS9bD3Mu6SVADDLevKiABSFoUSSESX2frbvkNXkAsrYvN2LefDwx4HDJeEz6R1TZSWUpgVK4aKh",
  "key19": "tPFgY32iYJ7SRJCAxCyDvYuGkzgJA5t4mQLaZjvL7b7GgjyxG7BYESNSPs81JZ1txv3ndBmeD3rdGAEVHSGADLn",
  "key20": "2MzkG7d55L1pcrswrWBkdumbsiyXbTnwoXKAfMpfH7LrDkLzh8u58kiCphgQmHQFt6Nt12FSsbbHX744YVcrAhCb",
  "key21": "2V71VpJCk18p1RoBt7yyyNDBXhPxpJt3W9ywCHA247BcR998ZjajjzJwvZsB2Kyeu11cBhdGSTyTBfVR1iCf2qUy",
  "key22": "y81yWiNMr8WpfmYr8Ntmzq3C6gSQX8U5WaAr18ctBMy4ZZuMp14NYBLHfTcV9KNwSDRT6bbbyTfwphgzipa7BsP",
  "key23": "cxT6D4UCJh8cbSufBtcEdDSaQji4PTtygBEW7m8ENMrdboqueMNPiv7HyXxgULRRYMQrizYagD6TuKwzZf2RQSi",
  "key24": "434dCPGwNnaAxKBN3mabb4z8WD8mzHKzEyGNsooMnbqzK8iVt3nm7HANunZNwh9EbKEifxvp9nj34bUTgiSF31yv",
  "key25": "5jAR7tVyTdRCRv59otLcEtKivWdmnc39R8nroXrYGfehP71WYFQ9VvvzAKwXXpmMN8D3E3Loij4p4gAAqfAAMD9F",
  "key26": "4FRzEPgEpSdWEZxy65dgE5BiTUQMAFLCcXzhDsg5GwdPWAirDDryuNRHvsN8Dh475rqcDJcDrWZHL9jibCgAFU92",
  "key27": "553UouatHDZZaCTYK3T7wDiAmBgGDd8cBm86qwP551EuczQy8dLgS6vDhqh8MKDYkttNGdK43yEFXWk7bsMwoGSL",
  "key28": "5TPwv11KzdS8Tiar4Y62KKr5rnxKWxioDY3SetsNNGfmuYqEnZA4YSaKW44AkpFvdTaS6yNZ4R8ZtCSf9927qfg8",
  "key29": "4ibamTUqkZmkzoQv4xyhbnw1VjqGMcWi2cJJXZtEYjXu7QMuo2hW7H4iz7PnoPSiiMHt1rTi7CctVaSaENPX3pme",
  "key30": "57mmdxWzdncwZKG3SChBvco8H6j2kACkHsSu8pH3tKCJK8UqqaoH7nCfrTFQzSKKXBp3AgizFFYBYgGiZh3vgYiK",
  "key31": "LVEXHgb5Hn3YrLNUanW4VqNsALxC8sKUvTwbhS5vTB6DffgQ17kfvidYeXPpAr6MzMH6xXd5CQphTubVtYAMzrv",
  "key32": "36eAa6tkRYVvNgBEYPHefEFurys5rZfJKwKnY296SYGLokEdzv42itB1EoexzVqZEavWLk6STKeDvX5oonnDeBnm",
  "key33": "4X4TU7U99BcwRSTt1ka5qWHGq3UuS6W9Lasyi3ScF3gSST7hCkEL2VAgHHNhEBpmeDn4n89wfU7ZrRx77BxX5vMT",
  "key34": "YAHNBHWMwZE31gHGrt8yU4dJBP596DYVTKBNVzuqzSJBhMu2sQkKkf7jcyXRxBJ3uji4quSpW1xZ1ZLSkiR4rSn",
  "key35": "21zBKAD6LKgPQ1TiekSagvkVsHSPE2WaJQvi7R7EwQWURJXBdVfwmGhoed8dTBVcxGcJRjZ4WBRf58Ms6V4iNgBV"
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
