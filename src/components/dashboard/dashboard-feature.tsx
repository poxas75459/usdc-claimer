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
    "5Wap8Y77RaTtBQcky6pnSM125sqn6PveMx3N9rNmkcVqB7cZKYvbw7FdvpRBPe9AmEz3E1Wc81dujuEacFJWgLyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3em1BNMssbmPS1KjyME3rzQe7bXkMEKXhCpnPTV8qzSJvh8ybEpjCi1uapZaAxuPpxP8j1LvBJqG28DgHACLwHrm",
  "key1": "4aUZBbazDipU5H5d3Abw79FkUQRBrzXT2Yjeb5DHzYKfYAvvCMnY85PycEsgcCabywA578iWaDNT5kJpqWrLYSHU",
  "key2": "bsmkzdBRVAjEZJ6CQjP4sUeyBDQhCzjPRoSJzxvQ33hvgtfE2vraWpot1whdGRfikMgh9jGMbRogEV2QXxCv76f",
  "key3": "3dFRbdM8apmokcecjdncTq1riJtCZ7WHk4RtbgkYm7Jy41bJhKzZEbqHCtraLSTZZcjGi5gBhNHaHabPT3w39d1c",
  "key4": "2TSgwCKFFhX67p5qjtccySx69CrEm73UkGVpooTp7vbLvjD1JpA6AhRq9RJvUHqjueJ7DHwVX29Nh36vBG78EShj",
  "key5": "ynwoKk9T5KUxvULgSAipqcpLcMARuoo1PBXtBQwFjiwhKViF5zkgVG9VkhN9oNbBYgHMstL3Tk9WQm2BxqSECz5",
  "key6": "3c8RX8v5UbCWax74Qs9g75stKyhip6dCszbcX7zCFDqasZZb8daHqwiS3ZqVws1oG71HMjUNxUra6vPXx3AMsoH7",
  "key7": "3tyN21FvHJxiR7GWyKjSa9TYhPXUQnTjzaoek5nKm46VGED6h9dfRbAkpwGNbesRZR1ML7Zta6d4XZYXtKqgNWR4",
  "key8": "2CZbBVVvN8cU5dcLyksr9Li8bQboUpA2jTKP5vzqRuqvMdahoA7LZdJtp68rkppPbqkTyRZCBUpmLBisyW3H8cRS",
  "key9": "2a9GByL9dbNy8L9Hr8tyCBebAquq3rH5bjdVsb7LuaTepuHEd6YprFXHz2M6cLNmWer9F7pPhhftUtYicmY8n5iA",
  "key10": "3ikoA2F8BPXURKak5mp98fkbRErTFCMxiD9Q67MvazknsZdv3sXm3bLZYQ27fws7wE6nhhLPMseqyokViFdtKAFj",
  "key11": "66qtKtv1dLiMkGQNRLsFeHGwrdr8xEQXYZfwc9B11SGkc5bBrM68j1PfSzNnz99ETrZ3DKpZ83wn6vYr1fvUVp4y",
  "key12": "2XQqhVu9bCGaGmsSx9hsW5ZZfdcvvRYdWTJue9wQ4mpqQGK2iSo77JrB9mroRQSw3BVgUfx9M5bg9GxfrBW342fH",
  "key13": "UW8zUKQVJNSFicNBXgj9xzeZJzRjCA5jdRc2QhoHiAKFkgQdeohJ39KGQ5pa8TQ7wsQQjzNawduT3towRnUZjzT",
  "key14": "4AfiKb5xZro99Nr9LAA6EX1kkzNpkkoedYF4yA8R6YEZqVtew9goV9hJN8SnVmcFWmno4BVnkZy2apcbip2nkW7E",
  "key15": "37zi4MFpoBzLoASoy3xyQW16XZRpuvBc89ttvBbykRHxzVRELYQo4EgDTcDDYFnwrrbx9Ssq8bCQ1r8WHUWBE6TM",
  "key16": "2Hyz4kT5TM8DYVKWhNNEvCCp9F3tx5TsfcxnhiwA5hqJVy4ibGTLZdy1UMJj6gqsAnzBhnuTDCzkRhFJ4wd34BEG",
  "key17": "vLiCXpBki12t1QzcJKbA8fZxch5VwttUsZjJZidta4PvRNnqRtuz94S3Wss8wZFKU7H2jgV7K9waAKvbgYgmJhQ",
  "key18": "3FvTff8ggqvae2W84cpH3dvwqLdeDSe3KJZ8H8c2xbBPP7AErbGrEGATfXFR3Ys6VYhTFwnem9YazHN1e35j1Wbu",
  "key19": "36LUVTnsP6U2v197XugDjbCzYvvYkit8AQDCu29Adj7NyTAYxzup8fYf2DSYBcjY9ouDpep9RQGcQVn8q9Ec3YBJ",
  "key20": "49pwqzbxy7BVGtAigYqimdGp5L3S27we1mzLtysvj2BbXrf1JR87jdZkqdPQ3iAan7DjgvQQkagHcaaejpEBdzee",
  "key21": "JkHTKRrgRiMMJRFN9U45UpUAufnk5z6Yu32HpCWzMrtH99KhWREJRhcZWkStbDesoWQt8oDrXvERCNSvF5mNwwp",
  "key22": "vswkGipcjsREo9BuCCFK9beN7C78HkJ3eowtywxPmuVK2Mop4rNggQsXFsVjm5PnRSjAsozmqnUGu1YpaJFp6Yi",
  "key23": "49dGhD4p5AuMoPacpQSnznqryH6AfYpNzKVudnewpAa4qPoje65EmrgU5HFPojsTTWBm7EDM5mBTsoxHLPhoZZpt",
  "key24": "bUzFRHN1TW21g5ykEoo8eWamx55XcvwopyEPYmmU32JNQMFisXdEspH7wVyeTbJWvh5ugZb2V1NoUHepjLumyyP",
  "key25": "2y67DNZYdypwWrSzMJTxCPsssE61eRSVVAEZ4qr1KBJiamvCnNKbVjYbcMJoiFy8QXYUynha5QLDq7gm2BrrmgzD",
  "key26": "5o2rpaSAmdXuYN4jBwunTJGDS5CL7xAQkjaAAnH6c8tG12LTcTEANg4xuv6fZZBp9SJdjRayfv4yNhZtLAWAQVmn",
  "key27": "4RXyqLZko2Gc6MiCCwHX7HhHVWXNxkhDcjbrWsoDcWAa5rDfFUGKfxf4t5KTD4BdNb6jGV3nME4ffmJgzyFYRdRp",
  "key28": "2TCGudyX455AyrAqb5KBC49gfzFShhQtB6p3z3yqS3AEWbkMxusjAfqiqRMFZaHpkZeoYoAL5x6GqZYoCg2y2xzZ",
  "key29": "5pQswnRiR78jECKhxZ6vrp8EXktJCjzJnaKJUKGXKXocxTu9os9cD6mv2opcksFVmc5A5dJNhba1QA2inTuKLqnp",
  "key30": "S9TZwsDJkdoUgZaLzuy67XCi3DpwCgZ4jiz6phCmgXn5HpGtEJ1U1G21pA1Ye3mPgiPXf31WdSAfeunbcCQDs7f",
  "key31": "5Gn6RRHbi28q42ipGJFJj4dQ1g7v52EwnwcurSmjnbCMwMLWYkkZnBgWa2Kdi44ScCVZJoNHC7mnCeprAUGFNzna",
  "key32": "4U3E9FpBWegMTDV3NL1amEQvWDVM8s7E5SBn5ERxyw3S1NswxXuRMVgC5uieeXkHb7XAHfmmTiubvkjpMDuyHXbC",
  "key33": "2ADgrsR5rP5bcSgnY89Yh23VLX5C4BUK1E4pJwZoFZeJdZi2nTy7mbbXBhAW6VvAtntRFD3MDpe22neSca4QuUmg",
  "key34": "4Hrg3N6vjhAWDxe5XYR31vp6RozQ29ebavNKxD6DHpvxkZPvWrMvDNQYJdaaW5vv2nJTFc3LG1H2LRTPKM7KqSv2"
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
