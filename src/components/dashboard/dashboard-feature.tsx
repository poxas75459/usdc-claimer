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
    "3VgrdRroVjsL4yua9B9HSbnCwZDkBX9wCSKorzRyVp4meHCBvQMXr3cJLxby4gzABgqkjgFy5jtms9YF3oYkd93d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dmAK9TSEZz5Y2T5damwiiPu19doE7nU4BhW6oDfJUHUCFypFxDmK5JFruGYRimmVxDBtUpRYJUdCf1t1h18bfT",
  "key1": "5fBsatR4VBnqWrJBzkPmL824NVHVSno7tjDHxanZHeJhNEo3XUPAWa5MELRjTWPshzik6AbGKJohiXhRyoirqS7B",
  "key2": "rMfBMLbyUya7vWuM2Wv9jmyNTrHn2DrPJD75kdtPoivEdT5dpJgVbNDFqF4ZeMhLaMq5RXMaKpy3gtCjXJEAhAs",
  "key3": "5Tjt4Qi7QMnZkxMCqFEAVuBFdCtG882AwbY4YnJUoox7c8efQs2y7kLRoff27BggmvVsKEHLeZHTjgfBFCJehmNs",
  "key4": "4gDpSNMsGxag9pwZsiDpyTEhk62WUCeG3zs8ACm5f2qFdPCDA6VPqG5pxH9FymZjQ8vMWc7ftBtj4BcShEjdscje",
  "key5": "V5LT1J1SJBCUGNcoXf9xPWiu3XAKeh5T93ASuhD79d2jZvtzw5q85bY2rGEK3mbT99eGysgMsPuS9b1dFDaxd8s",
  "key6": "44NT2g519aEYG98GygM73hVjpBFLC6L2v1ggbm5wpGeQKgop2ijU5xn9QfBNBGVncDn4eT4wwgZuT83ePuf13mj9",
  "key7": "5Gp1a1WLpKbEKrqrkTdw8bnUQbicFssbcP22e1oPbfJVTbRoK31hsBzSpVFrcUkERndj8KDoKdNj15sKugX7PaGb",
  "key8": "5vAVwBKLmXYMRigR1XBmW5fw98x9QTcSTJd1DXGYQwvx8wYy4MZFkUpmSB7CW7WMj7sEvFQNhfRpKnEjNLpJAt2q",
  "key9": "cNYQWr2kY3YSEs27vxx72wDNCciWco5Kx8q6iQhT6Xdh29Cbq8oYsnFFn4aC7hnxvGJcSA1Ar1w2J9fVYRJK8Uw",
  "key10": "Yiwc7WVPGNB8TfuJBh5tWkkz7VGAzJtaoqQEmmX3SxD6Rb1LMepXsoZLRLNKH9pi46zF5kz72CiTrKbeUNKkTKd",
  "key11": "zVdy22QNzGerDD7kjD4DcasNinUjQDmpCBxsutZtj2Eyp3krcdEL6BhRSDbsnUncCB8TznBhtFRWEsf1iq5oKsB",
  "key12": "3zt3oySoEkykBah9S5sDeb58YVDRDyBqWYSrZp4wqUh8mDaHXR1SS98HHcR3kmGGNZsXWzussED5aAjx7jPuV3Yh",
  "key13": "4HKL5fLvZem8AqXRv9r2qed4xX6BHUFUyifohcb5D38BAQsk3jFb5vUVR1xEouXvunjBQkZJxvYt8RQ7ws6SPvzN",
  "key14": "59vyrB8iFgE2mHSYEx3VRofxT5vWStb3MhaCKB9SrjrN4BeQWqjUEVaz1HbyuMHhSY3cG5rgtXGvPve8eo9vFShQ",
  "key15": "RdX5vR4Ldt3AVajWJ2M7yNmTfrvBsfjTdS8BjBrvPmtNGzFGiM6kZDNepXvGtRfUohZRHVSethbK14519FfmNMS",
  "key16": "Mqxg3GfDrm89BaQDKKLHitYvzKCsrGcvN296xSJJcXfcGW5E9fjuKHmcyj6EGACZwPmXgwjTdPL7WBH8BUQYSQd",
  "key17": "23o4iLzED3V8RPaYc2QeC1XBVEkbBNtrabb96YX4rFDRK3KBbNL35hnpUBcZtA8QhJSzUkszWFqpjNfPPrQhp1YX",
  "key18": "2L5wUKaYm9364rfcHYFDNpQC2Hw2UC4j8yFcsBi8hXfUA33P4hRnAyqy9ytpg87Y561R6rorQrHioTG3abxowaya",
  "key19": "3AkKFzS14rPu29c4QnPQ6SNjFe3J1iM7bUR8L9xcmJF1MghC1uGUVAMa4phyEgcZNe1M4RhSAffrR48aYEcv2Gy6",
  "key20": "41WJDm7JyP1X93X9r4sKgvhXNsi9t5Gn8jJHJY6TPmniFxZb7rH7cvcu1oX8g2FKYDciqxwKPTJBwxBg6bttKqeG",
  "key21": "3RUQcQH2iFGSWrixCqKZgzT9hPd3CThchmyHVjdvux7qNjS6MazhtFxfbAPX4ZbQKuUUGyFbArmniaJq6TbzPGZn",
  "key22": "54UAEa7src6dWctERSoG711ENVh4ALVLAaeRcCeZg1vmXbZEqte6rsGSJH25SG5TnWVQt7cuYsKGjpaSXMC9oTGC",
  "key23": "4JcwKn7Ra3gbvHYzGRvSwAHSVt8TGRhVHYdLraFotExr1R3Pavu8TZb47npin64GTDmkXARFJ5J9JiMHfyZyFiKu",
  "key24": "2reuRJPYdjgWF7bE357btbfseoYpJkGZwVjtZqM7tG5VagEQ9EPrg8yVCCk62oYYH3RFFgFYvUDyHd9sPhG1YPDH",
  "key25": "Tg3fHha4heXZpELgHp7znQjYQ9ZqEMAjgcRtsTD9qbQZWr3zbhQ3rp3s2Q8ujCFeR2FohqeTapFXGNzA1BQbfpg",
  "key26": "3zoYLVAUB2oQoHVPGx3aaz35ZnXBLvSDFNtodzgVpugUALR8XZN8gYxKYLn6sGoHumq1VvPg77iMfhiftS22WMnL"
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
