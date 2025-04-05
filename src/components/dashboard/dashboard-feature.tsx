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
    "mDxJxyMBrVBvJf6s6tWuPVQC7G4kUQpzr2yk3cnJsvpAegeSLewcuuHjs9cYtuF4KqQcp7KYDZg38Ng3eRidgDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2cFN2vPh6JVeNLxoaH5uHWGPMZak7rLAgdaNVuZv1BhL89D9t5V1Lw6U8gtMykLbLNBYGEaC5K2DVFuGgYWRPy",
  "key1": "4unyeAJ7HHxsGKdw7r6ZSEZJqueKKE31aMoj2ydcekCpPYTe6xi31FXo36fH627hyuThBQwPyoMA1aMtREaePNLH",
  "key2": "4k92p5mgufqNYMGnMytPEgZyXzVQr8PSroVaSdMdBrqSC96nag3FmtJmdj58gzNEYpKxQwGiJGtJuC3Cu1AZqR4",
  "key3": "5GSJjMkzJ84E2PVMnPeb1zb2rUbD2LeDZTnyoE6q4EfKD4qtF3SqsVcBErMnWvPYAoJV8s4ZGWBePzE8AzUQ1Aos",
  "key4": "2qs9mPUq5ZJVFE61hLL8M3SxGBL8dPqbVvuYJEdKBiHAyxS1HQmLHbJkCS6C5ZTGJbBw43eB19QrdFr7fz8UVN79",
  "key5": "4NY2rSEWeuvR9nwUrpq37xE9TNxgzxdXrNsoSzoFobnND9PcbS6HEcNt9Matb4N8H942G3Fv3gFoJNrNk8Qdpxqs",
  "key6": "2YRLGPsk6BwXHvH15TeuWy7b7TnntABFavtR8NUFoDHrp1yMQ88BndUbHRPjCJEp86eMf4DsEz1tjMHpzwfbfotL",
  "key7": "44emD2ULGdDv7QoBJ7VHGMFFSe4jcvWEoo41pkSgqrkJbPNCNAPc6rnUZ5SrwN9LQZ7cqFET4UrpDYJMhyV5Xb44",
  "key8": "veJjjN8UkQuBxfMBBHaABcQ6A3QTBfcWg5ESQJZzJpppQ4c6rkqDZAp6nGLP2p8LYsA1SCyY5jRjXFSpz1cpkMo",
  "key9": "4Xpaqi79PRj9sGpSSt7NUG9zAR6ht2Bc5ZtNSjePPQNX9FBuwmUgrgTtKt7dYuTg7oJqfXT6VdHcUHifJrajKq64",
  "key10": "3h1Y8x8g5hHETkZJfQYHZHbHE8r5xCHQKPiiG4XbSoS4b9Hjm3nqox4KxWnBRFXkdsU8MW15URF7T1uZ647d8DQ4",
  "key11": "2goqstz8u3vhSPqnUorXqjWF4QtqzRaD5LNfNrY7ESnEV8HMgD6JaMAnBAUUDh7yQ5NmZ8NFU79dzPUZ9ujwPDap",
  "key12": "59KkBXcfZKYGTEixVkqmoP4yoYjZWvrUXo12Kx3Bv5LVBYhufWYFSq4ArX8Mm1MCgSgGPnXJWnXTqse1V7kXvzS",
  "key13": "2TfvJjeCN8jEVk3PkYAbceP753YAmQ6yQTfPXNtdTcLyxk6fTaDCF42kAvY9Y7p2dsbdsdH3FQ6pCDEjq2eyT12b",
  "key14": "3PiDKAcmJK7mENiyXC7xiv7FLK2gQwrpmzMLwDEtFe5FVcmTd8o5Ddq4LwWKpDwbjd1BR9NERRc33YcR1zpWMsYf",
  "key15": "3tLyjLE2p3tbGJi5FiSfLgyAKUds4wkFzdrVfwUH2RzyRQd85XxpyigSPJqWfcBLcvXXabCBwRKmdzGBSNxT8PeU",
  "key16": "4qxTT5QQxmCy9LtT31oPFaxtwZmVhKzWRJNXa9AEfdGGQxPvAq1CYYNf7hYEUB53HpB4jpVPt7Cq8WNVveCgUUSW",
  "key17": "5N6aWsquHEaKeYhAJSxiPjLuypY8uwXPzR2AygLqdE9QKwzEXgdKfLbeee3JS5D4hr5wM7twbXFUoZehHP2ARBqF",
  "key18": "4zn8qKsZEXXL1SzWdUqkf3tNCnieWmpKtoZW7ZRxmbu49yXo6XVpy56jT1k4izjpHZmuxprXM1mLzBz9UkFe5Mrq",
  "key19": "sExSiQF9iursXDPfQaPUYKumgRTwAuqWSdgDgAubLUfH9JipTyF2WWxytKvoTXV3iF3pJ54DCBzUyfBf9iSbig7",
  "key20": "mpui2A2Fuy3EthnhTvmxx1Lbn23uGDH2horGWfT3oJsA8kyscaPbNBcHYCrw2hNeqRyQ8nEzSa6yTYcXPbnsK2z",
  "key21": "x6UPkzE6uxFYvC2eyYY6PPpeeZGKKqojRa7K5ZNaa9E2LubZrkC7HE6oKPtAhRQNkTmARv5N7R8psMd9rZ9rYGr",
  "key22": "3xLsAAgqap7ecSQRHD7nkJUNT3g6VY1kFk9fit34eQ3rQPcqimrSSzEXT2JVUjpiTdPEugUU2iUCwCw565GcrjZk",
  "key23": "593rpayBdm9b3c8T89fxgyNH9jo4YEHaW6NfTo5Ji1znamyx1dJY2Lq4FQy9jih3Rc2kBDJU2vUd9jRNS7xT2dkA",
  "key24": "3iBZ6mWDFmNiw4XN51SMM5v9BfGRLKMi4QMrniAskUmYUvTqHua71b6wVwNGxhsj8E5MveNAPGws92c4XGzsxqTt",
  "key25": "2YN2WxoQ4gDw2eb28qCZ6VuWuyTFZa1fLRzUVxpZAqDUtxUsexbmSr52bQLWvecLY6X6QYQbEx7g7tdhSsMvaB8m",
  "key26": "5hdvL722HgwUfHAgbhLJtpzrAFv8PJFSjj8snZcSn6rP3GZhy4uoMbXZSdeB1ge9MUwCMdUkAAUKuHuyhEkbBJSw",
  "key27": "5GVaQ7oRm53XERNFEsB283vnphvHCQ15Bst4EUZYmYCwZia3cxGu6tSAeMcSPs7BA9zNZsijWbEW7wdpkZm7ow5U",
  "key28": "24chD1DoAbELLtXx2zKbzCcgSXNvvjLdnjYvMHnfEixUfg3RNnABXbaNXixZJn5dRz3JaDDmur3Dqfkv3L6fLTze",
  "key29": "4vARoCB1gXxZnt3kC6L65on3oqApxzpYcbgAD9wSf1j2xtXzFv3fhubBYE2ujDuhNwMuoXvbmcRCctSJGdKrE96G",
  "key30": "3zBii556XN2ESgk2uVvr65F7MaEg9HVt87tRSMk5hjUWC5B956VQsDcC5ZZrZ877CxbAcUWD2P23yg8ELmDFrHgM",
  "key31": "2cdDPM2tPRVVGz3vKfqsWkcVSgGgbVZbwkJJM98kXBzVyHeS7omrxSikzBNiu4dbwxu2J1CVyTk9cuia5tmovkXq",
  "key32": "2T8oo2Mwk4R8gxyzEHcb8q43sSeAqGqwiZ8bpDqxTB3ewkjTNczvi9UyPSUZoAnvb2eQJT7xiEpVX7dRRuY3ZVnC"
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
