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
    "2t75YAicVVPMA3ahJWHJHKnED3c8AxvUWR1A2sRHVcU5Niop6EFJBrj7b6S5E2teCgCRkbZnZWxd3yCkbhK7bYzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213iVDHeU1VwkpdRt7A9HqFYdqw19drxzMd8XMkVrBsrLWndpJM5PWVkJV7wJH3FEfbyNCst7nVAE4KpkCVd9uQn",
  "key1": "3TbDgSEeszeSMfRzbK3cRPTGc1i4fUCjgVrSozC8JM7rebjw7zKeJwGvBFpwGxpJC5T82YW7M3P9qZGChAVnrRgt",
  "key2": "Futm7KXAfUTvosrCqm1C7WWrvipGobz9HxnuvsxtKB1JHKJWYk2zq8SuFZuart5jx7sPe2zqLJh7Aas21phw4oW",
  "key3": "5TDvP11z1XJjXdh1LC7E7ae66ZUfnPBiAZAyFaLycSa2bHKaKTu3QxGohKgMTVDiDJNBM3TF9kMHHh8rnet1GWYv",
  "key4": "4H6Sy2oqY4soxNw3RcDvLQePpFeKumaiR2ncBxeJLXoQWmoaNk357Cz96zT6DGJebbXFm6y34i8PQvd6i9C7F9GB",
  "key5": "8XAfVCEFLBFjAn2SFGAFe8dB2b2E1Biv1127L1gGXuBJd5qUqdeSRkz1Vybf6v67T9bkNeNYxhPtsvce3q5iNqB",
  "key6": "4V2YdCapZ1vCyLoup12ELqAdp6Zvx7w1hizo9GtJoniEHnXTGHihsSisW1cbLac7KwUo64PXcrbMBTiss52Kj2FG",
  "key7": "4n3ge2sQAcXQqHZCUnRdF2yBiWPyokGE33yggwRbiprTE3vRL6sFBVULxrjCYauVjowAMzRjs3ks9h242cbnjfCT",
  "key8": "5K4RfyGpyh5ux7MznYog8uVU3unqGoD8jR84uhNkUEN8vs2NyyhJLs6SuCFPgQkfXQr2dcUDcbipSUCJanhokbX1",
  "key9": "4XJGVeVgv65Krg72Z9tgXC4byk7Gk4ygXPZjHjrdsjX1BrhyBGiW14P6SZ426zM29vrAP2y9443JYzYkMxwAwiVZ",
  "key10": "2grS7CmzDosWBj7Exjm1KEsSaTfdsCSaLbiSP81RkEhLbZhqomPwk8Uy479R7ydaUxvjZBFbwcquwRc18h2ouJ9q",
  "key11": "4sFmBCuPkqE5viFgSgoUxjvB9Jr8qiRagFEW9y2gM4uNjdrDchWgsvCdvBkjKjS91TMmcwec74yPXF9YTWF4DG59",
  "key12": "X6772w1x32upAsTur9bMRfo38omVyBDwzNnwv5MGSAB4cAA6tHjKPkcAkjzPYpBpcyFoUT83PJebwWUmb6Sgw6H",
  "key13": "TYtpSNU7RNQ8pGcgRG6Kfhg6zPMunodfGJa6ZL2sB1SkZRwLHRrLqxWrW5wykQZxBj3UZtGvLMb3WuW4949sb16",
  "key14": "PAdPu6kPwMMVFzazTZCoxx5ioS8BW97KruuaWvbQ6dNiWq7VLVU7xuQfjwzsoBUAxNtBwa3sAE4edZxqtUiEFEt",
  "key15": "5J1as2njJSJg7itTJunsVFGvoqDNw1SQHgDZHYa7u2Msn7ggGt7yot3ByGC5TFfcjHp5LK1V2rCCchZwu9buMV9s",
  "key16": "Xm92xr6bZG9zjFVBtzodih2byGvWAPz2VPPRr9qVCUvGzEZjAPeVLL8AjjG8kw4k9fkHeKBWyeEELvQrmg5moeh",
  "key17": "3Jm8s3j4jxjmhiVJXR2AbTyZQiPHDMvzkNV1C1B1Lx7V72F7e8uLpPjN5Vi9GMurYd2WodEjt1esh9D8YKAtnCQy",
  "key18": "2mURhgbnTUarFJzBxkKJt9EdsbWoaFRa1LrVmyPo5bDj2hwZpk7T6jTjQL7MxDojA7zoxEM7n9faQvGchA5Avw8p",
  "key19": "4bdd5ghQwbh3t1xxT7MdPiakpfc4vpd79BHs5XvEPozSXbKo8FrnQwDCzcKL7ebdJL291tUEtD1RNuEbLwXK4XtM",
  "key20": "7EdETvgtJEDreUiwnmQGW56VVGBH64sDZMDhs2bMYHMicU8nad56hjDcADVDApZ1YUEaYZt45gm8SbGNi15QLmc",
  "key21": "3EGSS9oNjNKragD94FWWXs1BMekwi1GByhpFCGw8UAyGXV79174Q7ikxcxEcuaWo6u3bP927qcQDiyScci4Urjrf",
  "key22": "5QeLaw2YsVvsgP1sXpHEfZmSqG3fvbd9bMZaABQCTyEgr6i2LDLCk1AkNFHRPTasv3Vr6E9E51jeeFKMoDQbdteJ",
  "key23": "RL3RLGiXqzsNGqTJXqkc96HjTPQAS8TCApddowmVjb4Avn8C4Lj8Bkw3Zoqw6qYNnoGjPRqvsKbEgdBLga1R7Na",
  "key24": "3kzM3U7LfPZS8ntweCBwhQAizKVRyyq5mcRAfMSpTSjJ9M7VJMWG9FWAJToeVVx38VMYbYmTqLfG6NbLpT5kNMjB",
  "key25": "5MX3H1naAVX4dvAEMS8VYBnqXE16uxEZcnNhxeR8hbPqP7WkHozZZ8Ys6uvRTrm3ZjLBnPRMufqXt6yExmJ2xJNS",
  "key26": "VNmQAoyrMaYVk4RB35FmWv3qqRxzfyR6v5ugavKnrsqjUFR9MJdXE9gKzMRR4A3EE9jLBibFHRASGaUyQTN4xez",
  "key27": "oLEZNUMv32mtQfpxyyyx8h2A1iFwebB3sowadsn3fkYbbcoq66T6amjVwCdwk8WabLDBDWeWFG1NL4XmWiNA7EQ",
  "key28": "3tRrf53YyJw6FkesBBpa5jTPnVEBjSNULn93cSqtNvDXSga2aKiMVdfnHKiSfEEsnmNvHMJgF6UizEB6cQ64Nkxw"
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
