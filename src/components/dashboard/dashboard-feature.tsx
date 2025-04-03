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
    "2F1rPMkXtJM4u3nnNTUY2RELbFrDvAizGYxB1DjPd38UBJfv1jJS8zaLC1Bo8kBivmQQgmPp4Ch8ou1yGCAfihXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345oXSSTSW5SpSjbxsdZHh2pLkFsDe6eL2ehT9xYU7pdi5V2iuG7Q3xG2KcQSLsjh1Hs36wmuDMVnu4SJLR8XmY4",
  "key1": "66v12SDsVNJ7G6wpsXDdH2pLQCnXoniyp9tUXYUbj8SRR7A1rK79eKn2KGhfS4Pa8KEz8UyXHz5jiZXdT9g3Utpu",
  "key2": "4VSUfUjFpjGdQfHwuecFSSp3PoZAkcKQ68W3xQg7a48Vj7GcywyvjsgimHue2E4SxJ3p1MZqU1zhXbVnCBoUFMfL",
  "key3": "ic6n89xUJJYspJ4WFyQRtq6LeWhN1Bp9BhQqUCcTqKWNjMLXXvTGpLELFREwvKyn7kKriry9UUfkjhKzoewCb7c",
  "key4": "fBYQezP4H1LXPPf71y7nc75tLsiUCtuhoKVTkUXEekSLjRXUMhLxQwayHBksprKEzidtuhWkWNKfo7AFbYxanVX",
  "key5": "VYqdcnYzBDtiKzeZEEdR4VgEPGumyWMDXBUJd1agEZFCE3BFj18qv3wDwSPi8oeRUgPDGPfPdWGG84we1PhnbRQ",
  "key6": "66xh8fcBvuShTCy4i5JkUByvVtWyF5UKKifRgxqcSJqptgmcnDJCjjCU7xAinWTxBAgP5SSodsoaDp3m74GdJ2eM",
  "key7": "bh1BpvdfwCFUxUY2hCWJDmYpwKfpmxFeTRpr5ps2iTdnzpRpoNpbBrFkMJKcnuc4zmFPEAQAkCvs2J73X4HVukC",
  "key8": "3T1o7f97rWCbFoX7YYAL24sthuMnqHj83x7LM2hjSqP12dpYG55CsiWtXLKZjP8uSiFj5HAhHhbmvrRVauJKkPGg",
  "key9": "65psqyVGSYDDzpZPdJ3HQMiMETj16F3mCjxDiUUCWKGrN6WeCPvqBMBBeAyrtJGAbsp5NcXjE2H36MopZiTU47Dk",
  "key10": "5Ata7ej4RLt12Vi6nU1hY5kN5QDq2PpRNmVoTazrfHAsYdwMYsHog48n5zeSMx7BWDRyKELH4NmGi8svsQajtBzJ",
  "key11": "4sNgwqMtD18gLy96uJzUsEQCzN7VDusU24S6uwidZj8VrBW11W5CWmR26PnpQAd77tkYz5dnJbCH1mv7PEvNFz75",
  "key12": "4PD4sVBbU8EBi7VjJdkKVoCQ7syq44W3WMkhzVwabtDZnDgeENSt19CZS9ETwVL2SetcTVfdtbc1LaMHQ2FuTHNR",
  "key13": "4TzXf2zJGN7qRdvh2fLnaUdtdmY2fSu7Kb3qimexWkXawsdbn1AvEAZRpZdN5QGJj1em3UNFFXWABgVeBhqfLLvn",
  "key14": "4JprgEe7x8uCjffucHARWqiJZCybjXPS36v8EYXk3JntxxKTDBgH3sEdiFA6G3siz8DNZGk6dLhpXbbpDAhDGcfE",
  "key15": "4V4AnUf8hcBYv2TYfAK7u1HvwNys92L8PncFpde7aAjxh8PVNh1myzeAGugLsAWMAKGw9zRRfazqrX3AVpKpzipi",
  "key16": "3554EdCcsKpcHi2GCinUKUchg3EXgnFYwhRMzSaN5Fa6Vhvv9t3Tb3TKfQKuLMwWkBBEMUN4j7YHLza8G8zrc4dN",
  "key17": "4vjKxX3E5zDGJMMUqUkx291MXp7hWPFuj2u5TMwCUCoxDd3Ek47Wvzk5uNg9yMyqb5S23NKkV8vtF77yhFb5uGFp",
  "key18": "311V2HhRK3be6jTfQkzm86b4NCn1ojbSq73T2yoEExk2ioUCjFM5rTb3LzNxWxrRZz6cV3R253wj1UpTDbvnuVBp",
  "key19": "KKE57JyweDxqaRQHT5HoZyDapZRD81isQfmd2jRE4FXNPFNtyDRDqf3npQ8gTrJJ7eRrgTBYvFRRVxa69zPJ5jf",
  "key20": "5c2BvkXa5KWN4ToVeepG24FXuEQNcRPdgGf2tFr2MiwwkM75aw7Cqzg7EbUXnn2AGQ9gQYR1ULuQSvb9GH2NsXZN",
  "key21": "rxK8QMj92MTV7tBWDmFaMVY3QawDq3vgtsfVi38MwfUY9wp1H6c2PmuDwo2B65ee7YirA9V32zLLwP3ixiFir64",
  "key22": "2qbDjnq4bKqCjHsxiGuHNDrHjzf4GMKFhFS8AHcdYNEye2VHAR1NYyXhb5trTkNFBMQVo2LJWWv4QM7cEb9ja69g",
  "key23": "3rWhsAEYZhuQodCnsNe5huir3h3R2XdWUmR73peNbnPmNZd6ksm4ssSsxd3GMjZNr1dFaJ8pGL2p1so4bYmK3cYV",
  "key24": "3jQyFbfixhSddipfLthnVTPAxppxPeiw59NHo7BfTAMLEELXbJBBZWka46k7KANoddnGEvyaeJLCxsxezV5hbata",
  "key25": "4tkMK8Vq5MofzLudJWKv8XZxjeUzaZbhQw8H4VPzgebDEhKaC9hUmbQtrq4DcBSm3Nv1tux5K5XQT13EdBYGNDJd"
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
