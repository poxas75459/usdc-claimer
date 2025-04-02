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
    "4AmSPgqHGE9vg9ekneJDV9pEASjhNUn7kjAUJMYSG7ST63sk82Mww5pzZHxFoPkhwCh9RLrWg8QzSykYgXcKsTrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piy8RU3XWCxMzKW9C9dvKVzTXS2QLfJRD4C37XFubQFmhkhMPLWtDeL1EJQjxGwtdsYxbsZJJKwbKVcLWdA1EzM",
  "key1": "3hAtD5rxiYCwwpHX2qfqnKjHR4nrPvK2ZQvzN3zN1V3tPNBsCgoLQs6FxyRJEKM4a18KQNWYEkxMHdbj25AGaLNi",
  "key2": "E1SNHXb2XsCXRGCgrLhrYyXB3mMHp6WnduFs3TCW9onUqYr49vPHBSQvPFzQyn9Pk7tGo577qgzELW7Bcv9bd2F",
  "key3": "4BTayP9qDi7AnSgs5RBxH52VHQ3YUYqMuw9JaCcuEKHzi4v4VHRym41MXMm5recDSaq8Dbp7sLV7T6LoLH6bxmPN",
  "key4": "54LpjHXyKgUV6ZRZnHQFKHM2zHsFEpDLzoMAf2KkWUYq5terRPhxpLQm9knoRX76VhSjvPATKpruiSzYo2oX5ops",
  "key5": "5NYSSV3Vvx4TMrp9SF8peM3Rkb9iaG5LFqXhkpU74Y7cPGgkpJQLSWSu9BtxpNQSkpDFGL1qWvRuviwTfot4iMDV",
  "key6": "2gVTXs1jqDuK9RFN55X8mAna3TzFWP6CkueEzZHdbMudBvnKCgYnWMuuhRXMkrFfdsK3ZwZsyHdeMd1gfuJoHyuY",
  "key7": "Mt5zGvczFsrEdix2nNf8kUiUVuiJ8druxLCPavFXbjK79QAF1kxy9e1L3h7d76YNZVYsUVfXybLzQLUVMLLcaE7",
  "key8": "23ECdAm7BfsYaWDX3xBjjaVbEUQt7A5BvWQp1ivCEnaeJiJWWEdyMvAXAgWxM4uYWGGewQdogjETnLypPVEuQXDf",
  "key9": "5Wm5p9oJMDDpxHXyrSuC4wAXMBZAaT9YWMcF2qS8xJuxCaYYBimy4R26YX2g4F9k287tVmdim296q14w3qUfsZZz",
  "key10": "RRrGReTGKZPHF6WkiJDWBL4bwruhUZnWv9ATPrb6TCgciAVBJHci6ugfRZ9p2z6Pz932i24z7tpTVrPGBMHLdQ9",
  "key11": "3wjU5i4A3jjek8mkr8V3Q3YG6tpxhusKaQKoBiyff7LGnqgGwQx1mwSJtEFebPL3hNBZ6xQ6rZmms6fHJNY64ZvC",
  "key12": "RsVkLnfeQpwVqVXHu1fUrR8bkyFQ6upJQCCrDv7ZuoohA1MF3qsBuuaRz1KMtLCykwKSsZGmuP7pztYCfZ4RSQo",
  "key13": "5gdXgtpmqUnGGuW8iBcBZnDd81yvthb9fYaD6zJfoPswMXLT4EmGZ9SwZ8e4s1qgsHDZH11MzSEumiiRZGKmHBSb",
  "key14": "3swb13UTedoZGkJV16UNRaEjUxn3VRzdx8gcbrRx7hj2SnUbaXT1WYWYBiVBDiP1Q956a9r493LZEQHxS2naL5ue",
  "key15": "5vN5Ay7EmAW6txjxmxHkxstETMRTTs6YBMjdp8xnGDMAQYtEGVMAP1nAhw8sbLNFBPdN8Jst3ytmq8H2KikbGoTp",
  "key16": "4kr3c2eXa3PEyfS8mne45yCj1hLmehCtbpjAcvZRx2Uiz1MP6maibyQDEE53F9z3k3c3awSXL8LDmJBzEoGhfs9n",
  "key17": "2NLomDtP4ieig4Du5hnMMAQxdyBujYWDccwpSmyT4a5pfjkGjCpsMucsVUSDSZiPpoWHPLSwW8e7exzBpsTvNdLY",
  "key18": "3ymMweaMGN8VtmqnbBqdyByEzG2pFMhpD2NcB5CbeLXCqbA3uCy8JxsXcaLhRDQnE5x8nzjMmVjbtQv2cM3dxCGL",
  "key19": "4uooykwLFdBuwktJESh6P4HV8upef8vzDsz4pAdeFZg3ZwmApTY4K9inwNGn884PiAGy9ZmKeBynqwHHZBTSy3Lu",
  "key20": "1cNc1zJQSqt8ELBeApvPJmS6eKjdmuF6CdEGMx5oPvNsbfz6zR4Z6HQBeNuecwYfa8SXPvh27Tny9Yoc6k5oVBF",
  "key21": "36bMgmuKMnbk2gdW1ff1EMcEBM3aWxwZvYgSD7psg8yt7CfAVJ7NfMTbqm9XLLY4SvUCze5ZiRDk4q1qGBEyH6be",
  "key22": "2yYZ9JMQsHNR7VbNvnUnz6Pf8JVga4LkV19CK7MPUq3JuXX6pFvCU3QBmPpX2cToiC8M8hkV5f4m8utTWkmGJEV",
  "key23": "utixbAHexe2ejZvQ2Nv8eMFhQRZugXHdoXSXmhrGJomfr3PAsAdmnFUFn1ZjDthssc7m6thnpg4dQZXxYGX6bQo",
  "key24": "3vkTjtCDG782Yq49kqYdyTG7TiJggZ4wKup1sYJ6mMkEYUpDmqQ8JF1usuzPis3xnJKixsJE8ZDaKDZBwoSEQCkF",
  "key25": "4rSmzKkZjCUiQw8S9WHXxoWpvn7DbPU1nY7u31gHHXVrsNeVXvGq6DtRMz9YAP1ArGSgAcDEruoHUoNjPKe2JEp2",
  "key26": "56c3ooK2t9XogUeyEjKoDHwMrLw2sZnN6juNdxjgm6tZVuH1opGZoqJ3w5SQDipez4TWKBDuH5okwUS9i74VjwGV",
  "key27": "5ucTYyPeWz2gedSyttmNK5JJSPhQdmY5hMGPSDroELDFZZDoBePzktMZkUcX8NUQDbQfvVB9SxbyC3sj2ag4jwnq",
  "key28": "5Q7MDkPyw1s1MFMbouGVoGHTWiDG5TS1fu7dDPZchnz8waD3teqqQnk3dMhjCbwa6b7GWhQagnUj1inZwxDngVwv",
  "key29": "2xshCLRMBjnwcBn9kRKiW66znWisYxCwZRtAzK4N1UFdtvNUZRXLpgX6n3M93Tbm1uPR6JgA7pKXV8yXZgrYd6Sj",
  "key30": "2k7j9Joxpv88XUmuW8quUsG7sZsd1vHDuUXYPwb17ZLUuGUP19mpwYTSc4S3JrYzPD4aZsJ6388mEd2V2mLpYoB5",
  "key31": "65rfXiJ85NbHKCG9DG2ryBd6kJV6L4dsMarhN7WxEkhQwBCPfrq8S4DN2UuxtkAiCcS55TMjjxHmRdezL7oKGvMm",
  "key32": "4EfioFcYxgjY3LP6RoVNZC1xMXRN2vmkt3JZvLXhveu97cmvBdkYnPrN1kwVppndNf2XKqp9JjZBdUpkLNZ4MLWt"
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
