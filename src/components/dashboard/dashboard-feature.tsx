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
    "2SRuMmvgZypTPqxLFz1QjBmFqg3oMqhReQfoMBHFxkaPY1R3d2G3rxZKBYqiCQaTZCR7LuEjk9ae5mDnQ4rdCfgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTrJn6BW3431rXWguLrKWhYuDeEQvNuvSbs4npud3sNZNRYoAX1nea4ej2zwdP5fnKmgBYML36knUyNPDr9dRjx",
  "key1": "2qBRWqY87YrFtnR4mYJUnhBuKm7EuZGDwYRYg5ixapyTgaamYzKfuC5c2FuhdoFBiUpZpGuB3j7GhbFXUMfXZnZ7",
  "key2": "3zTpKwoB3zJznFrhNwAeNjemXhL2Zr8whm9PEDMGYkAyx3H812xFCi3hxkcEfp8QErGX4omD2tKRwvPhxEtQJtve",
  "key3": "4hgyftSarBqLuTh8E2XrYGb3bapTSRKUR9erYy66JktmGTKZpKn6nP6AhpYED1Z9wC6f38eAi4BiRPkt5jYp5cT7",
  "key4": "5G9TF8BFEZKR9BFd6fckm94EppE4NTwfGLjr23MPDNfynwjDuhGGzfa1MyjMYhivkN7vEqVEVVxpiitbVA4XMTHw",
  "key5": "9T3yPgbru6H9hZ5ZFX3DEKX7LPpR7x3LrpiA1ywysAetSw52WbqujKUithQZ3g4bTzRZGuasxhACjYTFVfKbapF",
  "key6": "zENqjk5mPYwfsEgSP3Xu9mArmjDhsRZcbgN13FKmtbHxXWeDyJxkJPk7zgSSK2tzDQ9KFSAAW1iVL6VZT5Ko9rp",
  "key7": "5voVHggzHb9ZVGRoLXt7KYbkv6LJNtFqPj2qSDDvV5bV7UhGvjoneZRmfTU4aa57TLzyAVb1tv4wswsk7hUUFYm3",
  "key8": "4kDv9XqqAFuE9zeN4vFcqYX75WqWub8F2ar5katPUS1pibdjrVNAcSmhkBTp38f9puHF35ETEkejcHa9WaETK1U5",
  "key9": "5obbJCkVYU25PXKQhoexSbHzjxG6xpq1aGvomrTNU7eY8AXadn3rhbAPMnCeBYtwwdBruDXRDzDC7RqGy1MWDF2N",
  "key10": "25E1BY68U4irdpnDvAdNSHdpVZhQYrgVCH8sfirXPJKoGRbjmvAHxWtzFyRy1ddMWS5SdxxeTHvBpDkCFfNkNrg4",
  "key11": "4PHY9ANFgDaHvBfV5wPtKGQEVZioGSQWpUZrrxjRDkMPKyap1TEuWJZqrvaBos9F75pi2CkYxkeKWVcjCHnRofqy",
  "key12": "KSudVv1gbtZXn7iAj3QCVVCwyKNvTVjeovviz5w6SzqQsLxa63dzQjv3g6bi4o9L4LdojZC97y3u18WYdWFz26M",
  "key13": "2kgEfeJ3ENVEfESpcDxBeshQzECxU1CnVfbN6FVCyZkXzRsJiruoVg5ZasJeKiupRWzMkkVVU7og8VRXTqFvLoLc",
  "key14": "yYPFYRncg3stJPuLA7SAoF21UQgo5ZqQtaz3LHv9owmVvzyiJJmBAs8qpbHNq9MB9vdjxDyEUvKTG7ywhr8VHL2",
  "key15": "3z57qGMgZbUNopc1dwbKyLeGmuQxNwK51h2vqbavBC2xcHzAWwv47LmfrsUqRmcfEDDnzzZC5mcfH6UEX6XEzc8b",
  "key16": "3XEVDQWoFpTxKiYgvxGKcH2eyxLrDYz2UQpcj4UHDt3xmEFbBsW1emegwvvDphZ93g9HcsPWbWcjSzHWiQqBPNHg",
  "key17": "5CN21VMerZvNY4Wbf7hvAVgRypPWaoi2XewZAjsciMxaZkNbPoLyvxgUReiqsuMB6Rt7niPPDryBieeaMWEMZcoY",
  "key18": "8o8MTZrwKTudWkBheT36URZJaWXPTCxW4fyZdU37TMrxAkPnyQYts3t7MByMcEoZiwyMZE8WFKqut3kViVZtfca",
  "key19": "4BnJ1aJrx6Acf5AcdoHLp3jTKbczxvDgTQ8sdydrZz1j9UpSUxVsqqpPXriMXJqSFaV3p4uDXR8bCsjBf6zAaCWb",
  "key20": "2Xj2aJKWeyPH6Jm5k3vU451wT79168Y6jBzbcFRacUgqaEeNMrG5Pspa7Khh6aTqUk4jAQigwAtFLsXFjGBjXeHZ",
  "key21": "59We1SwbQYcvFU3UZiDwHKQYUKmT8sTorS1kp5YJgPKkoZ3HYrUoMJt9iYqRcqGahzut1bdpuCuLpZ7azycX1D7V",
  "key22": "1FHuAdZyyvMUZ69whxEeNoQDyi4QKUwThHCtF9FumHfhQcAFY4ZSzDLaC5PbCCWYzajp7tXUQT789rhHiL6zvay",
  "key23": "5vde9MJxhU9Z6KJVCNRShJajL9XYEYJ3aBXqxL35sA25bCXgMaWdu628uTnY2LnyRVa3vsC38mBmx2bN49xhqApV",
  "key24": "ADnwc3N1UMEtRgUT25MAw8x5HtjFF9MKffqhTSXkzpPYLZyhtRtezNcweFnCJY9Qv6MvxnDre8TZw5UzEpEdtNR",
  "key25": "63chpQDj4mdGmSBAJm82q3b7GzVu5HJLuvW72tJRtPXjB3iKqPyMDKwuAbMYCLGyRUtcWoS1K8y3gERWZVAETxSv",
  "key26": "63dMxbQLiRWdv7rr3FsAjcgv2xBN8bCHnGsicTo8MFGxcENaig6dC39vuW1ekGFJdGoVHa6c4bhwi1o7uUFwcJs6",
  "key27": "4XYxanzMAk2KHvWL4VvL26eEc8ZDGUz4gNV2HYqu6PQLbei5eTe8k1uVTewA3heNnzpHVMYP8o7xbqKM3XHq78TD",
  "key28": "U3XQQzzeccWXPFLrXcDvXeDXDj676DDSrRiCF6opLPs1ts4Y433wVTbv67z8inQxNF9njvYKXfcDVzMVHE2cvsz",
  "key29": "2a8P3iBrXCkBUjSS4xsM166iYPwMbVshM2AfcRF4H5jxHehdCb6JqXeFi5EDVNnhAkXNUNf1suKqiBG2n1QirVt3",
  "key30": "3T6hZuxL3554W2wuZQihQGsnbczowmEueAzNggm6CsUNVzms6utSTyD9NQsHrovSG7ga5GmBZa3HDhLBTiSdLvac",
  "key31": "5s5NfRcWWzJo95bRHFbfJXcKNzZYhj5hF111Fs5NberENd2pkYYL2Mw1yrZBUqD9Kq9LRTDJyMirMZBs3CFcDPdx",
  "key32": "5a11DMPMnUyEa6tgADayaxM8Ytm6n3DzdPyx8fA16FrCrJdkqhL1gsnBa9VJW29xmCBmnNpeo3Tgr4QntFq6rNNW",
  "key33": "GP63yRxBQZajXHZBVGUMUk8NsfDR7oAhE2f5uiccUYK1mJuXYfcTwZSuwfMPJ93Zjj2o8VDiNcBLV4ombNu4ocv"
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
