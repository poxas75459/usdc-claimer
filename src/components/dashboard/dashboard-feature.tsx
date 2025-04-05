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
    "5ryr44KJfDHn8kPyFaAfyxf6K1ves9XY8WDQHFqoEkdMN1pubykm9NoxCYhFbi7jyMGuHzvC3yL6jf9v8zKmqE7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcmyTrLU77hXF9HNDKoRQsHykyax9t48obD18oQpedTbDhdsXCu5x7F9zQXG7XRYEtYErWKFuhzYRwvUEPej1tF",
  "key1": "ugdSWMBGGdAw9sfCEVXsSCaeMcxSVhmkjt6LgdSFqjBeqtZPqnuu3SVK4omZd46YBhxrKsXVd5G2TpgBf4q2oZH",
  "key2": "33e2wGXNamXEmQuK5yo9mX3RPkfJuwBKKUV4Pw2bRtsHhHTX1Ummkesz4ZBwMfESgJojU4UPnBAQvhWRPYEQ6fEE",
  "key3": "53GeaNFWbdvgWEQW2gcxaVMLDfG1HQ42b2q4oWfhzaQ5bcMd8N7JZ5837YLYFL4VwS4nZGYHYt5TawRgEsjVfvvP",
  "key4": "d98hyyE6XM5apse2znwz3GBKBe9GRLJ4MKhNFMcMcaUm2kfKF9VXCxmLoCADwFZB4XhBDdKoMGwfEUuxBaHg1Dd",
  "key5": "NmLAmAJqXERePspwmwEXv9VGzsxaHzfiXLqAJX6wNnGwvurTt1Jndo6D3hammKaCM7gNDm9qVt2ubkJ7HC6yPYx",
  "key6": "4QXXrPX111FiohVz2KZMrPFQyHaxW1Em14qeQ3o5qDLZVoiFXXxdcq1GAMayivkCDjrGgBBjnf9uUhURbChJnxg",
  "key7": "2RN6SFLsqNTkneN6UFiTT7ac3e7g1RtkFCfxAU9TxQ4PAMXyWLCvqV3MZG4s35dJBsurdN3Fx7ZyjDbCZ75Y4fTA",
  "key8": "5mCiJw8DWhiuUCA2Q3Fh6HPE9G8KbrZ1Hyp5HcXwFX5miNJDzdCDdnmMnL9zQnx7fho6EgHuPpBqTquhcdEXA7mu",
  "key9": "5bVbQhdher8G4ZnGVC4tGTB7HLtKg2LQ1XxeZcqmQHxg1MsC7iZQZxy5buA8g9LoVxotRiS3LydYnawE2HXhKobH",
  "key10": "5szWHQF8QpJzBfX9VAxSuWri5uBYrwxvv739o16FJLTCEEspbniidXJ5xTk7sx2Zmg6JgmA2DFYw2PYNuQZLW1cR",
  "key11": "3dnWpKAaN7kSWQdb5pXSrXpFQLbt5TS5oGK19GpKENtLUqERv86EZAkH5uuzuTPWeYM898nCvGF3MQSNwpQMpWzK",
  "key12": "3LchAbpKWArZr9L2arx8LvXwBCEWBhXwR7tYtD8ZbqYGTeULnbQkG71BbKmdjSSzA8dXoGERMG9SXgV2g7rxs56r",
  "key13": "4Xeeumye4wjxM6EAUVC1TGmQrRnePxCWKMwWGpteJkjxWnkC9vBseU2iWz7K9Ubp9Rxt2idgDGs8AQoct2MY1dLp",
  "key14": "4o4dCAHgJGYL92dMpTu71nVwfjR9EYpWoTAGNvmhUBnXrBCJkaubZuotkhUMAuTk9Mhi6mxGdcNMnApdVq3VUgrM",
  "key15": "m4t1moB9QewzBKW7fVb4LPRuMvaYC2vZJLuaC73XSbDDVrvDnAvntU6WedgPdSp29HZRdPzBgyDzmmVkM5nLhP9",
  "key16": "2mmXaHK5i3Gi9eb6ajBNs2SU1hS7ifUwkpKQueRYMYmxX4ND1mkCUVPnavQtrGEYed8YnCiPRiSpBkUVbFBMYMf5",
  "key17": "3VRvCtvyyVfJfSf8dSay6Zi3wDrRUCSVeFq3EHfjB5egZU8GuBDjkbeNP3ukRSPJiEeeSjbkTFiwxmbfbsj1RVqB",
  "key18": "3BTrw1oojwKLvvqqeNCV4hicdhqZyTLDFn9gNxQ9waTZqbB3vds8tMVcutNbioN9gvx7phfdVco9TH4aBiiaJztk",
  "key19": "4ae6gb7HkGz5afb5cFEBfSo9uEdfrEFiKPPX5D8aypdP7dg71HD1K2QanqAYWS94EmwwfjxPF4btBfMfF3rufPCL",
  "key20": "2HmViGfA1E19JVm8jd1FsLri9cPBdLoVFpwQwYajiWtsbS1D287SRNzV4NK1Tykd1qoUNURRbm8MuVHHrFtNpqq8",
  "key21": "ZvJgcGsJP9MTSrbVdbvnWGwLy5pK4TBtYmsBSZbqEV8BXjSxSLAPtJGcrDUsvZ5RWEkARy7cPuuHoonnj6B22hU",
  "key22": "4rhXwNqtYshpvaeWs6pWUSNy21W4ScKwwXtibZksnUWSRTkqNR4MuUgEbZWo9taHHwpEAySDfL1d1xicnYEhjAfr",
  "key23": "2NesTMUkoEcUQotH3HPKB2ATErgWpKoQzUEnZrpQWQ7LStgJnTYNRogEB2gXLMpPBVbBPbM82Xxqz6JizNP7kZM8",
  "key24": "2cz8nH6QQNnBvoEcziJrSezrCP6KqT5grkaNPHZF3QhGgoeru55DfB7H4afrNFnuibnGKPYgGhvBcSfaANyvwNuj",
  "key25": "64fSbvb2hH1PThbRCMsFpShishef2q5ojVzLs4CJQsnqdWmdgepLDPxLz9yVxciKDxeky3nz29gQuccskMt6MWjh",
  "key26": "3EatU4uU4YpyBcAHNjs8DvpnWDW9J8BfesqzAmg7vxzTq5jPpHMqDXmzA2vmvAuGXwsVpVnPzNvWJDL6FvhjukwR",
  "key27": "39Y2u91Jy718KpVVXHodAg5L2C8J2wENpBLZh49Pi5fbDA7aVvcKiTiQe1r44rSdefJ6ApHBizS59ubKXDed6UYQ",
  "key28": "22fgWpAvDMf4sdsYuqi1Ak872kLjeS3n9nxj2GdcfCZRiz6gbKKuq32hqhLtNYZeMNsyVGHm74n7zqxiDHSXdCKz",
  "key29": "61tsTd1nNU1NL7awhjiyPiRiEHEd6yTPJ9W9o2hMxN9tFnRXbiCbptR2cCKjaJvbgePbev2cHqHYyBKJ4VAPFQ5W",
  "key30": "4WqFW5DiNQiVieCXNWCyUMENu97qDPbcJto481jeSK3zjwdbA1ASnr5ZsaH6WRLxxZfv6wQA5qFy8f8zGeu2JCJX",
  "key31": "363rg5tdCj3EXBmWVxUUFXV4w6D7tho9UJcM8xG645iE383meZJYTB3oh84dPe7s7b5uzUxDn9zedntuwUsqVpfG",
  "key32": "2uWJq8j4r1KVi2RVAwnhHTjJwYTcvHo1x7RUMiYtBzAav6QVK46LBEEnKZ7f1hnAezhX4Lq5LPdDbhWtkY53uNaN",
  "key33": "3vTKJSC4CecSvLtNCUmZJX5GvGZiHZceKxEa6u21m7dnwRQgiAnLrFnin3ZTY9xyyaYZB9mjv7VNfqgJBn6FBone",
  "key34": "3MSXeSJT9H7khCDNRcV8mSHcs5n8AaDeCtYznoXCcgscadSatGgDTPdRiowQNVfaHds3b9o2BSU1yFrQ2AXahGcP",
  "key35": "TUVLbHdAkpNK7PqGeJCv31AWCjrReV2FqC6TUnTG3c987KwoKj3fPNCwNqRgcRTA6JHjavWLu1AbgruigKSQvTL",
  "key36": "3bhkiTFT6ks74HmUmH85JknMFetSaL5BHUYhbbCdxyGQq5U9etHKwvEfwiBpEuxoDDDXx89gNAWiRmfHwrMFLRhV",
  "key37": "n1UVF1p2W5mdiPgyM5ozULam4A3pKwusNG4RJ2sV6VkZMoLqsnSeJkU4oYJfP1ERZKQHfcckDJgdwb5RhtoqvMb",
  "key38": "67GqkanoX71J8zAgZ3Xv8Z4p8UeizoQ8okjjB86X6LuiauqfHgRa44xk3WyrZpcUwLtFaTckea73snTZLhxtpwa9",
  "key39": "2tXfNsWUAFAE9Kyp3D3ZjTBTcYHhGQZkVYZzdVBetuCpjGMAVkvku8gZ3x1UocfyxTpi9uQmukGjAcafu8THCzzb",
  "key40": "5X8pwYNhwNgoLficVpyfiRjcSP3mN6u1Nt3AEHsmPMWUhZXydVc2zCqdvSfZhA45TG2SoMrQbp7TEbZy14cuvcs2",
  "key41": "5edwcr388em4sqtfEwFRgH2NP3F9ZzBsk7H11CtfeVbEHk1R8UroVc37wPkceTLT1SgfeQvrwk76H4HBKDB5Edx",
  "key42": "56cdD6qGEWgspr4xcDgbKnXLjLTS599VNrto3ussrTWie7mwNowJ8SnaRzf7dF386nfavhD5wpktgUFE2PwUC4KY",
  "key43": "UDVQp7uzTAFkx75ZF9Eqruu5N2JF1jUBPHZWKahizFNfR4tpHcR1DptM6oEJa75Th6N6AvrGx3hQu7ewC28MYB7",
  "key44": "2wv6K1NApdEicE3i3tUkKZqHA9TdSjkiR4hWNvBu7C4Fqg5i86sZYiVyuEnLzQDH7m58zEFFHwpmou6ntHd1G3eb"
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
