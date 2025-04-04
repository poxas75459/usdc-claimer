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
    "5SPYRnypA3ZoVu5BGYyoUzRsyf6N8y3i5gG39VZVBWGtzNK9JTfhTD3vZSkPANBr15YRyDJTiWzL1UpQ7Skwb5YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wT62yBQj84db7NofUoP4wKWKFecDU7hKNtC9sFnmyqpdvHQcB46caB47gQs8coNQwaUvuA2kESQaFJVLSXwbe7s",
  "key1": "2X2iMUHfU43RGGABEPAnqtUqc5jFFZ1viimsBD5fUYBhjnG52JPvkQMEcH9N8D3TWGoxuTteuZR8bTpsvdhSD62D",
  "key2": "2b7GwCUP5XBMW7CcvCehEZLvLx7uKzabpxQwLno1HbvAT2XPakywygiohCXFcZ5GXw3PfpDaXxx95a3VWKumaSt2",
  "key3": "3amadGyRrxPU7ga94Ah1o8Q1RoRoSa28tnaQJCaHtjRUyyCmtHn3bXR7faTAQFTm7UpA9N453nwh9JafMzLopytK",
  "key4": "3iVaXQwAF8vXAE2Tq7fJbXwx9635PmHW3iznT5t1dTQWp3Z4gQUkANHwJ4eeMqWRJLAHg2wHriUsQrxZHqfsHQgy",
  "key5": "5BEJ8NEHiLL6gPXdoXEBf2xGQYHSu1ycH3rtSyLkpJwcsgh3BCVCCQ7etZfnryefi157xWurJsuduYT47G69HPQZ",
  "key6": "tDbdaLbk42oZxTCKMknrP9c2kcLDocrs5EDoQgo4XfsazTw9eFycxiAHBtQvCu8W6zS1hPy9fg1Z1XKBsTjJkJ1",
  "key7": "3RknnPfrPveHMzgnSunVbNgNnHXbwNE4h94ZcMwV6E6mkHc49xqjdVTJaVp7StLDFGj2f4yiPRxsmyEAYJZSLPP2",
  "key8": "3AffCqxavbXQmAjpzmbJtDhfbmh3ce9MzEBuaL7hcjMdAhbqtt8AVdiRQBiFrGLc6NVnTj3YdMoy5mpnvtbWLmyg",
  "key9": "3nbLqETH2aLQSKh6zEq7XQ1t75iXKpFYixxsKNNzPsX88qryGUT51bF61AETSftU5CLVjTHmFbwxVVDAC5GPAyLN",
  "key10": "5f28Thjz53c5gjCk25oCPqygWybafhWTWhXqeQJFHubjEVP8nfdeq5bXnEP9Qr9hq9mUbaESKVddtSskv6Ne3kNY",
  "key11": "ZoUx8C5e6QqpDJLsZ6cdeHMUL4cNyVE3VmxahLHJPNXKh8RAThqDacYc5iDwh6k5PVeB9MQiT8hoQX1vR7mZc8i",
  "key12": "2hfay3UvbbW82HjZntqp8Aj7anMcafyPfNfdpotax3NCkMYQ7Rrf465gRLFf4AuXV4ZFutt5qgjWpz6kAEAMaH8a",
  "key13": "5CYWwif4atLHUgMSWxwrH6DbfH8ididw29dK2jqqZB9wTkirAbeyvzCFjHy5jbhGJdWFjXjGJre8qQh6jh9JxaKW",
  "key14": "4Xc3KMhvmBrxzKBVhsef6vk13rjgmoL6DuW1ofEPr62WX4uCCSeF39dFDWMbCrQHLc4VhLbZ6jrHLD5KdJoNpsXt",
  "key15": "QRZdpjW49TL3n4S2mqZf96XFZPYJpaUzKpQ7XcKfr6MjxPDced8P1LQrwc8KxWjmexeoh7tVbcvoV6TEiag12mL",
  "key16": "42c1qzYUBdfkm2hxvR5R664DGta9MJCv6Pnvz8vxs7gq9hvVwQ5YsgwA6mNqujwp1fFnEcatVuExzoUR6o23RLEP",
  "key17": "65e9MuhwHpxxV1zQRLK1NF5orAFm61Z8JqEwA8oBeC41WABd56m3UZvbrxvsGgFjrMFfjazKHXjupM6MR7uoUYrA",
  "key18": "4C5eTkxme2AdWKLst32JNfQaGTNiWpPBrRhpEPPaKgibFn2konSCeaFojCgnDS4pompBcm8XGvi2SL3zDRXHbTWU",
  "key19": "4i4XQr6RYZiiR3g5GomhUuvVaePbbT2oXRAYVpvpo9nqHNMxqsvN2jNJXhEDLaikV5weBpvSnqUqPTr4vnq5Dh8T",
  "key20": "55T3Ht7cvm442UTTGxeCLoFoufqLHHy87rYsgtyuCf3uY47nZqQ2Cr747VZvRrBRD3HkLcycsdNR3AF6axqgNi6Q",
  "key21": "2mSPfHw2NTsu2Nzr5BuEvqMaoayNDQoF2JHRonBzWb9DE7kkdR2SNx3ghjw3uTcwxHCMjvgAFzXUQVChyhZ1trrQ",
  "key22": "3Q2mVgF53Cm39VTSqaQzdgSfzsmUWpwkBNK9C7zjiWnA5FuK8zMKNXyHKxM9arRHvNuX1Bi15T1voqty5nLz3UTV",
  "key23": "2FZRjUcZetSZm3kjTDmrQcUVqzbxTkuJvYBa7yWcYnB6WjZY7Lp3DfgAKvxDVBN3hQrjoutBnX3t19Lxy9pUUtfL",
  "key24": "63mwnvWTWjfGnB2SjbE5GWDHTo1ZSdtyZp2YhHkKuifMxGLkS9aJcV5fXwRxrtCMCKX49yogFZkhZxvrMERJWdPt",
  "key25": "2DeQBL3VDz4sSSft2BmvgTSfbgtydCErTixBkXSNYvDrXssG58awo6rZj1Qg5uuHmZqSJPRhhPgptD3ECWJk6VV",
  "key26": "5Psa6G8X3ujPm4K1pqirS13pSE11xusrjRKN47rrzkBvouDVpzN6RhANXndh9bnAbMLTfFJ9JCxnXCTDv1oB64vg",
  "key27": "5unjws3HKyaHVQViGVLAWUiLChmqHSXuRzezv1bp43aWiLJLF6mfS5qAn2NmCwA8L93EAmE9Mz6cvTTTNxraNmJ2",
  "key28": "TpNYkHT2xxYsYPpMgeHR4MvksFNiBoVLVryEw8PBuGExdErwAxFsuqXQyFWBC1dwXp8aJBzvPD8vhW8mZSdkgWu"
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
