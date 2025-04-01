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
    "3TFfsaWsewujCQjh3MCif1779YBqawV7Li79HyAuH1MipDkW9LM9aRfDv9GgkN3A44X63ZoKg4CdHAKsawt6XCVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7yoBQDBwo38vqjM1rNztUsnNN3FrqVY1w1ynLFtgXNfdbfXyD5JQHQ8vcGCGWudXFBamA2tSXzVzGs9strFfNi",
  "key1": "4jxqNc8uqkiP7iwVqzq2UudBM8x6CPJQdaYFE8aHR8ChDcpBqPC4cNFUEsSxwr1CPaK9zfgqnD9y2iivs1Ha9ZNx",
  "key2": "58ebHQxWkx6txVkJUNeFgTs3sP8LUbquNkdKKuHx9h6fyi9YdqLjTrecuYU1cMSDA8LcinvH7Q8cmW5TMuDKfPQw",
  "key3": "4e818ppgutonba2XHGzK9CJF42Rbj8qq9Juc6YVCdjBPXWbrDNMJJxjFHxxiuRZVCz9ixvpxMUZUtAj2keyaBHya",
  "key4": "3DRJ6MaEZ1RuYGP9mooET9vZwVsP9JKWnW8LnjcoJe7yz2LgJqQnFsKCJ46FZ1McEGfk7taeL4c7UkrChvByCLm5",
  "key5": "ETNWarkaqtuaH6VPscuYT4vBR8Ex5bm4Du3LMcW5pa3Qp1EYU4oqQ7JLtv23sDMkoRYjYyCnuuqnpJb2tur2ohq",
  "key6": "2D7z9be6Ex4CPcTaHN2UTqjoR9JSqfY9e7SDckGSg6umiq8KXkJNiqJewpD58C4JyWXM3aXcnhm7TXi74YVMpZJi",
  "key7": "2WXJFtH27CKjfkTXg72cLTxrQPYnKNRU2Evhi43Qi2SYZRsT1QroyPAPbw6JAYxaBVQU566nhWJagJQrnfHVULZq",
  "key8": "5MZpC2TMXdw6CStPferP3KEKSmHwUGe2ytWF8LmTiot1zZvcZ4zdQtGwfQZDaXzWb1cJCzx7huL9o9i9xp1Pjr2t",
  "key9": "5UEex15ddgEWi1FhWXMY83DpCb1yywujKk4qkL3AWWizgCBvwKDhe88ohukjrE8Zct69gi1ug8MJftHNs6Ksr4Wz",
  "key10": "2AQvcdA9hnyebZP4zEdcFECZauFL2hLsejZZKv9rNmZ5hNX1hWgm3RFyMPDhKm5F4Ta7R6ZCFDsUYxBJQdmZKpYh",
  "key11": "WAaR9sb2C2du3B7Qi5oK8dC7g8gumsvfoK7Zwd12GsTkBSMUL9PJ8Tgspap6FVtCQqQnjwtKyURfpGjByCjvWbi",
  "key12": "3sYmvXiuwoPrgAYZCFciKHMepVBcZZjooQS6pC8SkeHtH3pxg3sQUm4B85jPvmF8y2Qw2G7RKu9cwfenReJ8xAef",
  "key13": "36VWgW1kK4sxRcipiK9dVSaLczZ6bcxJ3b6byKfhdGzYoNhpPhAzV26mERBQSWwJE2XXyBg9nPyXgP8KgoF9spWo",
  "key14": "5iKidC1vWhqGpiqkGojgcTp94VdJeJ46u8tS8Mv4jtpZ9LW6yEpkHJgJw2QzQdUDNQGfBHjQNPtNJZEmZBkQ4RjU",
  "key15": "2WgVNuBN8cyQCJ1T1ShgmpddWwjAqEXjKQVVFBChf5e9TG3f3xahLGxe3NDhoy3exS4jCLAvqFMess1BQDWFFS9s",
  "key16": "395VFHr8TthvvUUVz1Uyr5N79LvgwQdmNf8TkFaBVURLXagecg6HBuWbhSeXrt6mgV8G6r99HCpyx4bKhnQEBhXd",
  "key17": "2BrDXDDBqD13ftY4vTWbkurpcgjUJv5CHgJuq2TRXnJvqAdUkuyPUgzwkZbrModt3xk8AYnDjAznb3RBasiFR6EK",
  "key18": "46QyXMhKDhMVNFt9kinxnL6hsYWvoXUVBzkqYCVW1mWFS8hLMYoXFhTSxyMzE1SokD8YkiVPJ4sLpL2STeL18LbA",
  "key19": "6rR7F3NFNBfSYKVNRg5yW1vJF3F1b5eitCqo6FcMqqD7Nm5z5Pt9bh8yZEvcv9hniCrAvnkmKznm652LqpiE4X1",
  "key20": "2KZt2TWP3dWcEFMK5dLv6v8yqqApFy75DvL2qK7n8f8LGKoqD1LqQLctq5YKBtDLHBkaTRuSbYjtHfK38xV8R7F8",
  "key21": "8TCxWC71fj3yy6ginzzeURX5U5BztvJrFtvEkDTUFvGsrztiod6794mCfJ8peKLZieTXkjPX96KfTBxaHYFGETb",
  "key22": "2nGnzTBmK6v49xb5uH46pB8vDuP6oBMy3CsgjgCXonHM6To38ppYJ8yheXBiDcALLEggx4mKJ4ZKjqZRosXrzn9T",
  "key23": "65xtZioDtuWmXzGeMCGjfhPfsMp5RRgLqqrYkSF1bdk5bMDRNxPSr1BNQgD2FZkcBCNCgDxAVifwfSvV75YUAFBt",
  "key24": "4pibpVoLHU3hf9Q5JrAzv7ufj4oTcbroMSbQfXJHDaT5aLvY4eQ6zsY1uRJZMNX4ubQgJguCVBTd9RkfbbtDjjFk",
  "key25": "3sgvubZzJWERwFgZ5pqowYwrqpmgDdEzme7xs2ocExStR7G7LNTQL7Dg43WgtPzfLProzJWfnUCNaHSFm68gUxzM",
  "key26": "24A8CTodnszn3F6v22F67qKkmGx4ykTtKVSi3L4oeK6vMfkfunSX5m3KoyrsWZFdMvC8eNXbxM8YvDVfwvRDXGZq",
  "key27": "39uPohC67yJwfWreBvUAYzcvCVxotf6uGNK6qbvHQD5tmYnANHG3KukPiWT1ERDZHKcQPumz2Ume6VvMhZWEASaw",
  "key28": "3yeSXiYChrSPAPFrDW2MDEueQNESKxJxSL7LrN48XUCnERT678XDddXMPsJbPuhWVHKXztZptcreHWknXyivvSnR",
  "key29": "ETGpV91NAq99GHepakKfh332og7QGBCDv1GCAeRexEhqCPXrZWrhmgvk3r2cCUCrNxXP529V6DYnwZxp11qCCL3",
  "key30": "3LWAZXZGdVx9uKUE811L5dsYLnzE7qwURvTDg4npqMDWnZrV5xYREBoYZrZRCpLSLA2CViWUXYULfxHQDjSFVium",
  "key31": "5GafjYiai1oYZAsuue5HxEFbihEw2kdWwxRsC3ZimJrjVHJzKXwSNTh9WXNkVdNXBXjL3HzyLhhfJ6UrBxx1XDXN",
  "key32": "24gHwAXijgCjNGppTJ3XuD8qf7YM4mLinXDoGVn5G9BtcYyEXfYbcfZWc6wNd8dnF3aJ4Pfrci7e6HQ8uee44iqE",
  "key33": "3v3CkTZ2vyxaP2MtFoo11Eu8KzvLBt6Bj1rqZ7FKakhq1UoAFDHVfH1qW6M9jVdM1G4MA36CR5DZSH3Pc7fA2YYR",
  "key34": "5q9i7CeXanr12X2rL2Sx2MB2pG526v5gDeJUJ9EmWqGxshD5k76z7vzCoxV6g4yNpHgg9oxsfRNq91NFvPqdMMhr"
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
