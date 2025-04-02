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
    "2zEJrRpYEvDsuJC7GUWAnAA5vw1LRzrqTNiBeH86HbTCc4CPk42MFpCeobA1dZteSa8xxU6xMiw9Dxy5r4BYAzbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9TzJHUzoHrbxiSvpwH52YDgnyv4EykUZj9Re3ZtFvksb1da7g7Hbc5jVjoLehjBvRvvC53kzR22EewAr7FsPGo",
  "key1": "2pdbRNu3hne8Nx7qvhoV1UrpxtRDEdAKVqoWoDB5GaVw7b7GhM36tXyAAorFSTK3MNK9ZUu4uDnWaEfD5BzbTUyh",
  "key2": "4xerVoom4AzRedktrcdR3RfT1pHpCVnQyGrX6pxDtuHkcoraFGkx5fHtzrbiipwk5rcvNb3TG6SL8iFd1gmB2e84",
  "key3": "562ijNUrPaqBJmT2i99iwwrMiKKCVoRGntwfQ8bAdvwT751bbYQi52Q5uxViYyqMC2ebDWmV4McByhLBqqtfE8sb",
  "key4": "63FQWkF2KboLWpeWxxgm4fuAiJeAG7LwSFPJfBPdRBVPgfLt5QfpqifgBVvGYRFF4CTup2HMUzW2QSM2BPV1CRiR",
  "key5": "27LmNvmFTKt5P5X5eAT7wY9S6wvpmbsfrzY7dKACuRgRXASDcwopvHTJTtoCA3eWbswDzNNAZGbU6KKt3SCP9kzn",
  "key6": "37goEz93ctpeKnf7DLcHRP6xuTjsDfSoTj8Rrwsrx6SeftxHKmL8wZbFSuWn6iDHaygboXbcSdx4FiQQvcdJW4dV",
  "key7": "3qjpfN2FbgCS1KSwth1WfUBrboTZCaNzeMVhBkEYi6VE5ocmWYioMPhPxwFoMyThpwg7TsMnfpx6nQAZh9vshShj",
  "key8": "RLJiW5cXr8PFfWyDVLvzbx58Qe6NSoJXJqBwBbkjtNmCrgSURsm1AkXLLDT3NtWRus9rrY78HDhEv9qEwpRPbqw",
  "key9": "4KE52jAs7m7oy1kymME143ETvM2bGRQDEkW3fVdygcsE117x5GscuBBvZCegrUd5gU9kjndtj1s9gE8Rf3v6D8yX",
  "key10": "2ny9LY7EnSS5rVbRa3GwDxU4VePRJf9XgW5iJvQNfSWLy3jGLWdcdiys75HU7TXdXiB4AHLVRec8udDXxiJJJs8M",
  "key11": "2s2JAERKBzsRcVHQ3gKaAohHwJ5zcMhxXRtfXsBeBUh7x3sGXrSPC7jVAWktQzEjfPipo8W3ex29FuBbRQhra4s9",
  "key12": "2vst3hEtkENgE7dAW4KAzg2JWLBncBugoa7KAabXmKrMfsiQdFUfM78yvdhDJg78NCme52un6pWAtyxud3QPoCg9",
  "key13": "3a5CBjN3a14KARdq2eLriyswMYSLHQdEBznJPXofreT17kxH3ozfTopNWt1k48aFau15hgLr1oGWjAeLQPo9PZ1x",
  "key14": "4LnziPrm5wA3uEFCMaGhmMH7UEy3aD2rDjA15iYSNjEULTkPjCgPtSdj26pkzqGcbLZgtuEgsxfc88oovP1AqzLW",
  "key15": "2tB57ADRQwMtUpnvZ59MP7SaB79dcMQkL3FwZkEgzzHnRvj9q2oCeozn5HFApFHAMUAYrbZmfAUJQVi4UhttUyYb",
  "key16": "5a2w2bJ1KJU7Sjvvc5WtkxFjHEAv9TSJC89YHGGYDGhgfW2mNZWmvrKRoMRNf1tqGYMTaymtNfJUHJxG9RxR7nwC",
  "key17": "4JbDGTeu9rxRFiSyZQ7tfaJrQUqftUA6DoNSrr6RCidq6PWBSqbBsRKzsfyAbEdDoH9BPAWzHkL1EwysdL7AWVti",
  "key18": "3kNLhxG2s98SRzmoZhyv1T7jp86TJ9LXW9y8bGWbdcSoMqE9n92JP9KvLoXrPXpvVzLsxuLK8k644ypv2S8DgbCu",
  "key19": "43PaSbpxtPWtn5BKeCiJiWraV4hJtr2gKn7U5154Uh6oevfwKozcYoZdiFDSqEeuMqfSf2eKd1qiokwA6ETyqVtX",
  "key20": "2jh9YmrEQ54LYcvpXzGwhHi4wdmcv96E422hbWP8dqK4exAiLy6NT6zKhWvH6VbVEjSBJ9JLtT8V16T7RqHaDXmE",
  "key21": "3onYbKkEs14agfv71HF4hTEAQgVPTa7ZWRWR2xc6WeHe6GG1Q6GW2Gn9WjyTH5nd31ZHAEnysmJVwjM8P3dZY3Dk",
  "key22": "2JYAFGVvXZ6RzYmTifuS12gE98LAh2Ay9hDptCyDVft18EDPtRLWU5fz9VGZZUvN5zzt1MwjwbABm92j35GKdGUd",
  "key23": "61Eef6S8HxtytuqnsJktjoL6CLaVfr1MUdVSRENThLXnFnmqvEoahbmn9TppwKp1GyzrMVYXUJQ7P8326cTn4YTw",
  "key24": "vwpqh29kMat8cKbBjNgG2AsnHKqLJxS8YHfdDmx5Hgc3MVdH3f1VTZ7EhBGSVE75VYsWGmtukDEgeYRCgb3L8Yb",
  "key25": "42eJy3BSwzasNgawxEecRKSow4Q34VkLwFagtMw3WfaukQsQv7tWzyVG3PdxiAV8BEsU7gmvnj3mkPAZo66QZwCg",
  "key26": "51GTxPc6Ze8vyHHnCaG4sDWh4PiAAXMirXo1g7CdgYhzhMS1UhetMiFmJH274BT81MyNE4QvkEv4Gke1czVmfWGb",
  "key27": "3LBbNFkiBJdfPJR7CsUxyFwkoEpomkk8bZ656k1Zs6YRtSuATWazLNxjqAavg2DSu1KFGZYooRSkSkhfMkKCR7qG"
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
