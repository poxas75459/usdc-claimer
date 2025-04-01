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
    "5MsQuzFQMuWbGrdFCKkZ5qwkumR7T4QXPvZRZPdUZkJ9Pfv28D67YL8fhmwYdy7A8592RLUXepnP5GYWEWUN4eHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grTrr4doba8mR1rYDUyxjeBDwRXP7MD1JuuaP3vxuooBgUdQV7QaQJZF7zDzYg7HN8y4LinroQSqc4u3nJzgSm",
  "key1": "5hksotdZE2gYSaFUbRbKfvbLnRg2D2DPR48t3vhCSDvtxm5RFDfAd3DmnuxkH8rTxTFXaUVeLyEX4ZeVMqgsmPB3",
  "key2": "64eLfQeGYsACfKqwsSxoWbaha9Lyy7nnjDiMusZmKa8BTXRhjQbdTbH1e48C5t5c2ZKars933o5nMExXu6ZK1xtb",
  "key3": "3byjMcCNVY9mM79rXcv1gHoJcFY21Bt2aJgoFc2GXjdRjaZRxSKtCufiJbTerurXbZgavmZdoQhFJewtLtbeQ519",
  "key4": "57kaRXbs7SvxZqLA9JBPpy4uTR65v5WEZAWkVtESea2pfSbBZPpPSm8QxQFfnt1tyuvojiKhAYSJVxecbh8FwPHK",
  "key5": "3xkBYdNLxUH9pGpjvh5SwZYqGbbhhXugXjeSUZ3NZVfyHcyoFeYPcbhuxM4MDJsKfasGFBin83RB4WGZSuRRo8yd",
  "key6": "2PL36W7F5o5jJR23DZS575psycYcxpQ1Y1fQtaaBbT6dJCkQptjoUMyKDCYs8Ucm5MG13UbsK8hhfPez5P13mtSj",
  "key7": "5nLRKRNDxCZCC1gp1oZWkb5a2P3CKjoCf41rkDAuY6PEXv5VAwcVFVx3t9i7a6Ta3pnikJPCBCeQpWF3ARyzNuk7",
  "key8": "pgWrrwp67vWBMSF9uDLkamMbjthfXUiNM4frkoaEFQr2Qgkc21WXnwrx2xcbJuwC3qX8bhBfZpoqv3UU9RtRXfd",
  "key9": "4v5KthHBDr5MBe95uHm8QZsQqC8xkhRpt1KDQVPVP2MncnEHahxHT6W75YkR4B5CpL4Cgey2gt8ZM8GDgHcNvDd5",
  "key10": "2xWv3HVsy6tRP5HtWAuJW4iKzkXB9xjpKDGt64rBby4pz7C4b6cj14SUNbtgZdwrZ2j9utDFDrzxqiGPsUKg9TeG",
  "key11": "5erAWE9DHVKTqUR4tQWmWontoogRt12iXHU4bbMTPuUkngAzY3ZDTLe1KZGczFWP5YWyf4zV7qrAMPSmRgxYQwiu",
  "key12": "3ykEtEo4G9UJpeXgTCrbyPkYERJwLWTUJvjYj5FWbvP8BAZVd7AayaHSFvurMAi6hcH52KmZANY7DPqfJFRSpcXr",
  "key13": "X9CQSR8oZu27AXMtU4vRzWqZitbK1jKYQopgTwksLBebGYKmZpzCucfHJyKH6ToWJBy2f4zcVqJQuQXTBEetajK",
  "key14": "3mxKg1kwikxdVo2vRchsf1b2AztiiMUbrwyVt8ahUZqsuHiriMTXr1skUvJ3cMC56uA5Wo6NKX5HCMo4gFr3sdAu",
  "key15": "3iPzhGyxkdca5gi1yExAA1TByHgLszDyaUBhsa8pQeB4Qpvg27URuaekFN9bGBcBAi9rfWcrmEZ2tUqaoLrXx5M2",
  "key16": "5yhFnvmWwMqQ7jHA228ibnmBKDTWt2YNYiN4mzRGjH5NdyvM48Hsoy1FYELfGLDMJUqjvWAmy4tayxZrfXovfH3P",
  "key17": "4Gk1nMZTzWiNxj738Xy8QrE4ASHJimw9Zds2Psxw4PGxfnWdFuYgGn2bpXX3HEoKVHgGWNPEyQJpaJEVXPNDPzmG",
  "key18": "3YrvSrp8GddSbJ3uMaEw6FHsAx6UGcG4UPDzB7re6rKhD11GY75f9kEB4MiHV5xu5TeqpkBMhNTWqFMQZn9Kda3q",
  "key19": "9K4ZXxs1CPjzaT4LdDHTN1zW5zcZKBnG6ix9Pabn2M5PdN2LZvvKyf3Bakba8YWJNRHWyMb8FuAeoEqDGjo4ds8",
  "key20": "5xvbjLqmTghMzPEos9ggkjtuX9gE5u1FaPmVSqmx5eqo51ScuRUHbjbddabovfnnZWZTF3xxfyuQGxkr5UhKmt3",
  "key21": "2TncZ8tdxRcP5FxbTUd9W34g4fSaRaxMcWUPxtNi3umMEGGS8AwY7LdCrkbjWBXUFYFDZrZnu7W5wSueeVK7W94N",
  "key22": "24cdJrKcghi75bY1q89xsnQXu9MjT92HsncS5uGpWFn8FSVHv1YxaBzSRDw6AXEULzXR3zQTJgNeDx1LJBGwePg4",
  "key23": "5cSUwAkbyP3pZrUbxW7n1ApR4DH9is7JyVYsUS1PrhLMC2AKDKk36KciGKTBS4uvexuQ9SFrpaWU5FpeMvNFTNyu",
  "key24": "2PwuSZ6HFGw8JrCjzVswWxQeaDLA69dDhoSF8jxDKSLwbygEdwbkZGpK8BWLwqQv5XdfDT4VRniMCqZ4V6Lsgw9x",
  "key25": "5tLxdystCwvBwaC7RASeY3PsvF4oVyosWKw4nGE3prnqqarNrXjhmDAYECs4D5barseyt3vofwNKueve165Lg6DJ"
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
