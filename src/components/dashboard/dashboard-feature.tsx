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
    "2C3vJEBDJmYNPiTTch76kSRMs6rPo92toh8SgYz1vQpCteZ5B5DxYrRr8Rrk1eMQzJosvSQ5xxQM7ZnYtk4oFowR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rtf5WAmW9RPhvAHBCF1VZks6wp427kQp1VK2jGPz19ZRNDL4jWVRZCdZDKKgmScXSPrbfgJbepM541H53UDaXf",
  "key1": "2z92ho6xRqEcg7NAMrkjdmjMD59iGcRWoHqRCrf9Ts4Kg67D4JwqeojzuZf6VSGmDhNMiyZSXvJTDH1pL6LxxKRf",
  "key2": "3xSyjmUDDYEbkUmJ7PVnsSBGx8C2FGUR31E2PmrYnGV5JBmrC9jf1YpWaAvReG4YbgXzPmvVk7ssWDQUAHZRpq52",
  "key3": "4fnVpDtjkj1tsfkJMfgcWyE91sN6V7CNJjL1526ome6kZjxGXbvQMMFr1K5u3jmeG3sgeZ7QpSLAkcW6Mrer4ju7",
  "key4": "TSEWVf3RuCrKMcwSQoM6JWDhB7Eh34dMDhCq9j135rcoNZdTjatr7bfZ37bqjrKG1YwfShEoYtSXbEEauku7Cnk",
  "key5": "3fUz6zbLB62yRZqUM3k3MChwNeyXAMB4NEFwcgJUBSK15VND3jvMjX8xqUsqwnczuwSUoqmAVHDdc5yQdhmLRGsR",
  "key6": "4zztNxwNH8RxkgznbhyvZ2vxcw2UTKMHh7BazAiiTHgMLyKYHWWg5g7ig2fBhHXKwBefXuD5GRurG78Z9coiQ6EE",
  "key7": "xba6vhYe2xcAHG4zTn1LACyjPNoPhEkMeT3zqVrgHZW3G2jWpowXYcX1LpJqTuGcSqmaP8R3i6hsYdEQqPM2PVT",
  "key8": "aboWxL9uwytrWWLuDbeaLdyQXUg54cu9ZSRbCZoCLWLoTGXPoTW78ZnWz12HJKKrUYJEJq7b9wN4pfaZeEz87rv",
  "key9": "2CrdqoHk6cYtAB2ESsWtg3W59u2yoSgkyFwJwimERYh515m6fGVhoZsbjfj1xSRSxbHT4FA9XBP9hLgNcH4DDmKj",
  "key10": "CnFVQipB6L6rF82knLWwLFJR1qcxpdFWTWXdv22iRbrfQPhzyoZzBxi6rEHdEw4kmXs5ep2swWuwxZjjNxDDPoK",
  "key11": "2fyeGRWMWUKRJqkvxuJNgsHHzfwY3ygcZkGaj4PxAG2C8sF8NtnJM1gUF975G3muXMhSLVMYjAmwL7KVQouCeLhe",
  "key12": "3nV7jgUBg53bAuKirvxzLYVK9Ne3rznuHm9o7dNof65Rok9uheRDQMzgsh19dnHksW4ERYUDNdNGjprWxCEMVBpT",
  "key13": "5rZiKBB6pbDt66vi1whhph6StJS26C2LZ6QRFcRWQg4PXtVjECR28x724pijcng5hyExmnC7Mc41RwkzvHsog8xK",
  "key14": "3fENqGaRbmSs3eFHFdaFJfKVppTMFcFthzLYFB8J57TfpjJ3SMMLBTWPPrKRzqVeMGNo95duzKi326EdLJb8iCms",
  "key15": "4vAaaBkPC3qRjfRecbLWJvPC9AZBdxEWeXvXxrkFa2wduGkDGmbL4w2xBLWX7pK7XZepgbjjQVqUDu1aT37fNMvy",
  "key16": "2EwnvnGEFqSCbw2KZwNtmKCA6dTkWCpp7g5pFEPK9mDVNFf3uGVm83iaUER3tNb84rry4KK2vCQq2bwQH3NcQuW3",
  "key17": "2UbY4u8edjQDw94GJ9Gu4Q35xzvbK2P8bVXGm5Hat7WPeSfuWcrXSSanKcXcjyLpPKxkXpcrdaw6rb4fpPSyrEnd",
  "key18": "4aA1dzGyTzrZ8GSMnDWrJd9YzjAEcM9EdqCEJGF4eLuriUUdemm4KhiPZJPfguWGgJsfV2bxuyr8ZeacP3VwHMkf",
  "key19": "3eenFbUSh9NDSUMHqZFVrBSigyR5qc7k4XUaZxhxJ4tPAnoMek6j27KpAYLse46D9s23K2cYEFc7NCtTPA8DsreJ",
  "key20": "2kqgJBJHsA7yF96qN4XYGT62VzihpjqeFLnxUZiTyhrSGGBkZrD29UzDnP6bRpxFGsxSXz87qySKN2x3fZGEJub8",
  "key21": "4ghUmmdR8xZweuMwU45dBkS78D149w7833sXMLmsWUWJxraLfGP2MEejxFKU7Eh1YSN8zxDPwZA3ADGKTwg9Ec8S",
  "key22": "4FTgpQkdDdfkNZuFU8V5vvH4ZsF3xFX8yPLf2Mw2aJHVQX9c5AT9i7DkUw2YMCZsb48YaFgRwRscvWiE33ZNera7",
  "key23": "64UDFiRw3aVDehUkHBrZrHCCppynNP2wrwasLytraZxG9Y4bgkwQuQ4QJYLgNrShP4KJCLB2NBtfVVygVgTDqTGA",
  "key24": "2xsFhyTNULmWRGpV5t9zHwVXvc1vgQStDKJvxwgmHLAaVvzzwBRyWJZrPhFX8MKqpHQCGPLrfEastTSN76JbooFB"
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
