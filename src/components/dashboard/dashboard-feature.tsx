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
    "HLvqG348dpEBtLY6iA9MYK6sEegKQQRVBALyGTcnXKZ38r7Zz93RbnMoo3ZM9nZrff9F8y8JL2hwDXVa2NBXVKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7uskZaU2oUP6vxohRMhk5CKDTh8SfrdSHxAHLwFEUmosDeW1FYRHbRdvtDw5TfYv1Z33a8T1JxZ4QXvvKHwzEH",
  "key1": "3PLvMNVGP4eLrnaBZ6PEK486CBUuW7vjgkqVxCXXRw8cmuK86z3bMrNG4GvtDTwfb8ZLgfCJuXtJe7PKZfUmTG58",
  "key2": "3h1qFgY2tgpfMN3AZGunZEv64CQ7kP335ZeHqcobHb4shcr5h8gT2gC7ykJSx3KeW7jUB42bCoo2oJncxmv3mqhq",
  "key3": "2CqewiN46FghHaXNze8qUCoHfiJmPS4nwjG6J4bPde3NYMWrVYyTJF4UAKGrn7HGtSoQGAKwqAoo5o35du9QZq1T",
  "key4": "3AoCemYPa59MWUrBt1Ve5hAF7hZD2mzXD4HAs7jEf9C95LipzvWitt9FkDDDFFNey1obDERRcnhsw8Yw73csyqDV",
  "key5": "vTLSqtuiqHZesFFtZRaF2esvMGNiBpt3oA37QvuzFxasCemKCYZNCRryfAa7fkgG2qiFP3iftmQfhgJoZ3nNf7p",
  "key6": "4t8Q9oTVSdgUGuC8hSExuF7FPcq1pt7QRkUWZFuLMxxvHdFgEzekb3PwBoMgWi4mKDCheXaXMMT3RWxGRFnDMjpG",
  "key7": "4yfbitpuS2dZPq1Ht12hPBLiEATfhc2w6794zJbmnETUrVhuRNjuooXoiGy9LQmVspjewpdQ8k8rLMBiTjCxT5gH",
  "key8": "5EnqFMWPNaUGkn57SApnRFpKUcEjLhBGbrzAiSjmEjpeLbty3eDczjZk6WmkrsCpWNiMRTTjrJW8uMz4vYHdFVNz",
  "key9": "S7g7NJr4aCEWT5fnJ95xogvtfxvxG2mr64zMS8TZrZU7o2wN9mYjWzQZpdGUB9E1hVLt6BeohgBG8KoJEhMTnhr",
  "key10": "3sDzhpTdzu3uZd1CEyMVkuJCpU2QdhnbbRGgsXEgitYMCAZBty8SNqangtDziqPNW6Y2HSwgxU6sJA3HpomVsAHB",
  "key11": "46qQUyNYHxcjQgRHF3wDLgufF183p6yeVv5b4MTVTW3YaKreDKdtipVpwPkWmTkvcWLbXdFsyT7WuxFLWykZzvJd",
  "key12": "41BCFQpXUNkx5Q3V2WVsMhWjwtTdmejxYCQFB9a51w8fQhY9Qk6nPVEKhGxBGpgtG86z9qaYa5DBeNTYrrL2FbdB",
  "key13": "5KAMssKazzZAk31r3g6AX58cXQLRpznbe1x8SGb3wM95JEcSDHjAT6TWJ2hUF3GMYfhgA3kwG7RUzQM6dw2ippYs",
  "key14": "5982FZhCA9pfW55DrSyuANSsJQLm4cUmTgLdHp3zY7BkHSRWPSJUntQmDcMmrEGJ2D1Dnbv1U3ivDMyAUwjecvPW",
  "key15": "2Ria86xHLovbBjTL9hgtgipZQoQuZoVER3Bg8TfFAD4mM8ftnD7a3TxCB7db3vE5K54BBBtFoFRfSpiLEMfXjgb2",
  "key16": "5mwmCRivFAkr17fYVg1twU6Mrd5JF5UBdrJvQqQq5ZHwunGajK2crmGPMmdahxLMHv4nhSnYwnme697xdQN7eGSi",
  "key17": "GVDVEKQP9hQNMFCf1hbTihqbB2amaMnGiLfYBe9kPUDw8b2qxdipMy9CdYdG2ywhFwibzPrcUNYBA6uG6E3s9Sr",
  "key18": "2fcMABBW8JQWYHCskMx7sZX22Ygak5uGLBXAQb6gE9MgtDqHyXnuVABZuJxdQAQkSAVDAvjK2Pi3qXNpVpCq4A81",
  "key19": "5PRmAbtnJ9yGQeB8ueUVsnzHNAfaTGCFSCKABZe4U5Pzrm4SjygLYknxMEatTP9BgpsGvUPjSq4eeMi91JE7d7i2",
  "key20": "3iCg3Ku7CSPtFQ1mUFbef5UY1eUAHVo5eobzoUn1ahZ4NLUijP3ZCn57CRNTsF11EKfwkto98rVTFC1grpcTwGCB",
  "key21": "9TdfTuEqER9dSgYCqzTCDQbWrTEzM8EmdasaR5zGZyM5opwxkyGcsfeeBAzKuxfoJBsjnYPBLaKyH8cXN6tcZ6K",
  "key22": "9aiYXpEnc8qFNiVzAc5rr8zfJpJEbp7iBWFQcAf6rLuv5JWY3njdAaW96igDg5Wn5mQcWCfmo5T4jQi8JrAUbUg",
  "key23": "2ByBFZBBDm7DV3N83F5wtScuefffMLV5robBXg5fuCjMdfJx4B2DbdyUhB4aB6r3Ge5GhpfJjj3zhri1G183R2uo",
  "key24": "2RJavaWJ3MaiFLMyCvn1oPUGnmGENtxREx73gpTZBtncvo9CfNwT9cPWYhEQSJUenJ5nYZj3o5QFuKwHm7vCnkzT",
  "key25": "3K6yvv1pj5Jd9tkAbm8KVYkxdCg79CxAgczCUhd6sJ6BnDBtkLkuGPiC1paUFyVNvT1tQztoDvFpBisoCZypMzpw"
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
