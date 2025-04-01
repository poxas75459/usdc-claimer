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
    "5YmedsYtNLfoAHh7LFQQ2zKzw61MM2rDyyYZgm8jpatcNhrHYBbKZqsRvSoe1DHcSkXwUbYufunibE9oQxqvF9UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmHatTj673VTRi6eBHbuvZwmoRcSAePjjX1EzgWmpJGzRGtgVcqQbwbowcGMzShsWdkCyUfN9eo7chVG3uXrsCu",
  "key1": "513qCRhCJJ2B9piGUzSTgTidu3tU3zYRprDDFkJoTZrS1hHW7QRvgzT3x37i3daYnMs4gvF7ySLJze1rzwgrw5jW",
  "key2": "3mvDuUH1xmwuSZfJ6m3JWGrzQQqirMmgeBHP5K27c4ibjvpyifjZvimwMgQcuBitXu8iuC8tdNz4CTyrLc8L4nYf",
  "key3": "2YkiAU541A1wZm1oMYW7mzZdojDyEJ2paTt1VAA5b4sWg9Mzz8fEC1p4sxC1rb7XGqygh3zxvCUH5VyTtxmZoLZn",
  "key4": "4y6hq3w9HWKEoq3A74ifh7UqgwzgU1HrRayuKxwJ6dQzPyD3fEBJ3SbitUu2mR2ii4j66RSNZrmpKBzfWqzQFbHw",
  "key5": "2wSbe5rE5GSAVrfhcoS5x3zbgudi6bQ4pQ5jhZwyQTTv28ZAsZFzx7A3BoT9v47g6Uo6zTiMYgvaQgCoV6Tu98w4",
  "key6": "3ppVKyfiZr7EQd3Pv8yrdtTgNLuH694vHkXFmfgiQMZ1BzwA8BHWK7g5dvgXx7A9VACjkBdsP66iH24CFgf6A1bt",
  "key7": "5AKbyDcE9hUSsLRg84cyCUfssjeezBbWiZwPgruhadoq6JrR36jPR8vt2TeMmrghc3TGM5cK7KbnzfhNvw5ynV1S",
  "key8": "4NkBtsmZo97wyEjmEc2BVhpJMC8S4CcwwKJi8nACi4c2UcGkfTKKpKSEjsSyGYZEEPHPzAyonKB2nTWKocFAFRiN",
  "key9": "2xPvEWzy2z76JutqiPp3GmfydZ2j6BjuticnFGnNzhw22G8YDrmZBZGF3K2dwSPaq77KznKRnxUm1bmhgxAfjcQ3",
  "key10": "k2uFdL2fCsXyXXPXzNpRDvKQrDdEuDjXWnkaiq2ok4jt27Y624ra9Hf499tQEeCe41ozHDZnR4LycCNsGicWfK3",
  "key11": "4F3V2XwxeD5LnPdTp1X1gRTGJtEVXECQvG5a2KV9t3ooQBxbDSaahVVjfgSqkQiH2UTSD1EpLctrPwc8teJ5bEL3",
  "key12": "2mVgLkdEjqq2hcwpf7ogEpLCj8bjF2zLUJHKmFSP2isMJ9oqPFkFupkcrfPKZyYy1Z2mx4YxZr9hE2zrWJHgRFyv",
  "key13": "5rjticgCW6qVgcmALhbWvRWyQtaRpPti2R41nRHp2EJoDHwdKkqJFyMoxkrWJKDjCW51rzTCSHbSKVhhZV4Mpxo2",
  "key14": "4wds8giugYbU6x6PiwSm8ZFn1k8VpFMw22cnsdJ1w33Cxe6rz5omEyrzxJwMJrR4PstrogHv2eW2b3FgyvmtK9zt",
  "key15": "2ng1NXDTwv7xRsaENzVRecEaucHBtMpEKzyZ4AbuuPo6nAV8T3qVHCe4AbJZkbTpdrqUHvE4CGxLggNYY2oZTNPm",
  "key16": "4thkJuKcrvzNHN2jT1sSM1fctaSjCTMRKsh1NV1zPMjmUxenxjMH4pDWvXyTKdBahzB1LkZsGViytXrGrztZ2Moa",
  "key17": "2kUQeL3QRbq31Lb8G4rAxqbF9CPibs9oo5JxyMdNrm8mtZCrbL8qgzf2mHLMNTmKEtLcBFaVMeZzXR9E8wHGQmwd",
  "key18": "5L2Udvep9dA43bXRv5D1JLET1PfAfb4V4D4gNcVxqdpPQNxwMkJMPV7b17W6WKF7L4BQSBSNFyMexo9M5yWrHG5t",
  "key19": "3g6T6V74RYpt2k9BU5examWJMpLnXYKWDe7TtNU5W28yz67Y5SGDqZ7RkCvND4M4YxSUPAhqjH9Ug6jEkKDNhTbY",
  "key20": "4KX5WfE51wPw6DV47FyWyzwE8g8k9jsZkxEf2uwg7xUTz8eF451FRN84rQ6mHUJFU4ei4yRMLMrxPcPvBrAYKDri",
  "key21": "BtvyphNnTfkk7K4MPDZ6WNRPMZTkhD9rFstq7JXH3kxvWgyKLYfyuYMsyMKWSFsD5poFZZeNJnMuvEHjhnbRQdC",
  "key22": "4MM8eCbYZFMAxeFAZX7WU1qjo1aCPmi2CtaYbeveuSyctsSAiH5bzSc7e64bLP3PGt3wwBZBRRSo9XaU1G32Riei",
  "key23": "1gmvx17yCBMJXURhRAthGC2HMjoxYJvh6MBT6k948wWPtJqKfm9pGg3dapprQjAGw959MxuyzZ66Wt4WCwhVjg3",
  "key24": "3DiKXqgDeXq9ZaeBbdaCpGTLfED8E61EPBK4cijgJnDg44DK3DHv7A7qnjz7TCoX64mChKcVPFUVherPpmgaBkrX",
  "key25": "3SszZKiUjPJtALkaaFXLvJqjHWUrV6jEdk1cUnrycz46GBuoKWLsKGppwgpZGGdLaWYR7ZFyNzFN3raePaYQ7DH",
  "key26": "5dJcrPCrYs5st2P7UULekCjbJr7PgR4rWCrWnqU5iwDEHKftpVdGd2KJoeB8zPTZFnhqLfvLY2UaSyyewrQRWtzj"
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
