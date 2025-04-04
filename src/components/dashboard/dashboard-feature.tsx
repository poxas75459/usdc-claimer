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
    "5pyPM8ZNuxTHtC3HLqkzEBb1pwWfhbkNeHBJi4xCSNFEt4akSqWtyaDsS1AtShSmdxorE5oL4Vk5LBVCFRtXiF5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NeTGxEMcbgBq2jzLtWASQ5bEcEe7iFbamN6Py6tr9a77hfK2E6hUSTAsx9yXM9Jqk8PuvSEh57qz3PbzQY897Vr",
  "key1": "2yUPujzyjkufZXyQXQFqyZZAApChPGJVC4q2ASkSNynPdYVgUXuwCLP3mZDkmheVudHzT2Gge4U5NHpdo1eupp1w",
  "key2": "5knNHLCGNNpPnbwhJRpoQpgrZqmNpmhW4PfWR25w49wgSEkGni3znWY9rfQ5u4vro2Snvotpo15D3LhYdPM7suHd",
  "key3": "2wp9dg8zmghEwmgea9AjNQYsMpdEEHkGFv3nyhPzXgiB5HuQteURR9cSPjhttMzseCKtZkY6fsR5MuQkofUbaTZ4",
  "key4": "UzEJXhdbee4J67fZ3DEdovm6Ge6NtyY91JrYK6kxHAf613ipwz6fqmmj63noyMXwrDjmWgLCrtqrH1pGrjZUw9H",
  "key5": "2VWwHeE25hExqUykWdSwGnn7gJXJw7FsQMcBv4wCu8Bbuj4Q6x2xJ2yPFHShfyy7xKGDc2ri2wYVCBnUJ28ZXydF",
  "key6": "442zS9qUf9nVxPP9XKjfLmJuudtmeobyoBqkGPf1iVyypZFgVY5vjeskQ217Va6qQTYm3Xkt6urdbVG4rZJseSks",
  "key7": "2SNoHs1HPe5ezJ9m4SykMjDedcdHaxSfginZ4odkZA73HGAsbWbV9q5PgRU6VfMahqvPa4XSHAcM1CihRtcC5Wm8",
  "key8": "4pzsXGyiTWXNsoRSC4mFivhuDbN8VUHT8yXdUcUXnJvTgiUwVhmvEvHYedf7WhSQ237dSYs8ijdg9b5sQ1YU6nED",
  "key9": "2KurjvYw1r7TGXCYs5Ab3eGrg3MaXUCriANzsxfqWEb1ydqAj7mJ27mgahpPMemCV166JRX9iXPjuTgxcRA5aa7E",
  "key10": "4u8DkmfQGhQTX88B8esgWLbkQ7tAU1d98xnNYgWSjJqpZngMVH5HWCNW1bWiCixSsDmmfsFptELYigCKQVqdo7Vr",
  "key11": "2odBVsxVLTrea1ZJ16McuSbCDQqT5SEuXcsitruoTeBmreVV6QyRGGNEX8HQTCqGqkdam88JhUaJUgmZ8ZXF5Yjf",
  "key12": "3xa1VBWm55xEKUhi9NQUd1qX1JJshbbyY5QUotZu39y7vPLavbDk6eaqLx3i9igyGTEuM75aUWUH9XbumpEs2s45",
  "key13": "2iD2dtWPxPpqm2u6abKWKhQyCqudkwvgQ2H4NvSLgthxKCPJ7D2Zt9fNDe83w73utgycj6eCagDD34YSmnopEvPn",
  "key14": "5JZG4XXcJzqYwxPu4TG7WDFHRc8gwx5vGT4pUAZ966aTZ96oWi7RfCmfcURjnowFvGv3EWgwvCrR1vmhjcGCnKw7",
  "key15": "5NDvDV5AMTymGfKgG3afjVyW57XEV69WXUhx4XR28iVM7NAqSCFc91WsJhhfKC8kdkoKfWaRywinLJcP8PLQR4ms",
  "key16": "2zEzmWGmd8SQGENDQf7mbLgkQXMcTT49KbRiPuSvoiqNigzQFxhyX1HF9X3ksUrSR4KZ8Ro7KR7LFjqnYPQKDaSi",
  "key17": "UWsGKoSBWunhScwn5YV11zHEaDbYfQeTjSCJpZAbEWAcpwU5VD1xgw5LDonK4d9MwDtJVHETNzXCZMigy9ptKoc",
  "key18": "4xuo8TGMUe7dpuJxV11cjAD4VaD3tjbCay8vQGwHnin28uscp8uuW125UmFRod4k8DmY2f1m1dtpPCWEjy9AXsNy",
  "key19": "2WDiBwzJKmAyFFcZAGvGvdFVJV58SM9X5yNJEFjUCF3dXeeMjhWP3MiBXuJXTFBHgMdxjLQoGUdfb1d3tdLQz3WT",
  "key20": "6t9XM2AVaeU1GDpGmNMZXbEka6NwwW4DxKtu33GW5LSX58rVjUJHFNrxjhfQJT7UyhDf51KAj79ftjTY9rUrFLs",
  "key21": "4MntEsBYwxo16226Ki3myKrdKP8tyDX8sg4EuxPcgZdB4ZinnUJTvnGahL1kme3jH4jrdw3HmjyFZnsQcWqLY4Co",
  "key22": "2BJTAT7EeuHfsS1hhXUHkxdHp2x5KjNYDYHe3kYjMx2dkUwpGbBAqVLVRfbwHoGbEAJxyvq4JsJxBiBfAXhNT41e",
  "key23": "31rPHbXYFHgjTbMKdJoGjywXPNBQNe5c6fTSH4mxLSuPYoWegV4WpQVtwzeK3iFzBcnSmto2h4EK9aageoeUY87i",
  "key24": "582nWZrAczW5RuootgNw6q4wNFTuMd5pHhmjQ2mM7s9vm63bYxsrFPpebcr3AVzwPUUHuMLHYH3jCKs4jGVaKsaX",
  "key25": "5XU2NbS85wMdsvswprJByfYn7R3CRA11pS8gn1aiz2RTX43DbLuzCsspfJ9hroccGUvs969GdgsVRDg94SYZsP7p",
  "key26": "3WtqigKmtzTA16jhCN1PmGxxfFWdMdRU5fgNnxaUSApNG52r1uiHDscw1YLz2N39uuR1xNCYBAQ7Ft8VxcMLcWqz",
  "key27": "f4rH6v8zR59Gqbz9mXiZQBaHs2HXD2gyn91pQ5TMZvj7GMXzi28hpupK88Y4bXv9uHmxe7rQXmVJ2hGqSKcjYfx",
  "key28": "3FqWzTvzBiSSYMgaaVGprgERdi4d9BZ9rRQpvD1FJLhQbnKgbERy9b8egCg88VfXWSdcVJLdErLNrRCF4KQ9DLsB"
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
