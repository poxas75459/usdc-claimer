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
    "dmNn4t11r1FfR9AknUdu33jbgDrqJTcdU4V3y4wpRaQHMyk4vrcHDHyddXjaypz3KXxVDxBUMmzBH32g13bRv8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zzHZBNGeFP746ECTDRCF3LA4uGRzxFJiyGsvDAP3jgWsHDrxVfGq2Hu5duF6QwxS8fVx7A3V559TTpEuQ36kLXV",
  "key1": "PuyD4uTPgmJfDwXmvYGffJZ7EZNxaG9bdiQ5CoNYAXFCG7qd6EQVdmRSQio23TGNRQh5Uzwmo4u1DYtjFjBVQzM",
  "key2": "3bnT7EYr4JnFSjTKeFVqwKCCxpDinbYhZiN88vpZ4yWCWPPh4KxaAXp9wkhXgSfCfLYarmTJjz4iVFRQXxvqoqyW",
  "key3": "973iYipsrEjh5hFyWjothrDLYpU3yqZUDiddDnYERmBJErgomWbSVfSwJmrmwFPxfyobh38qkSLMapicQBcYF4Q",
  "key4": "3r2oKxiqf3zzxfNQFNe1o4BEMhhPPGcFFGuW3iimp8ss9cqxfrMbn1gL4978c4EMYQgL3mSPhFgLqGUSbYaRTF18",
  "key5": "5ZDwrhSwCs3EG5fZVqzBSmu2Dk8xnrctMrzkVgQ7oJHYgnytDfiGwWvpm6ahDzrYUuCqKpA23UbJ9zko9jFdXYAQ",
  "key6": "4jzWoATGgKKw1gxHr7dqvRmc5TkGvJHFiEsrECtSXqMtsAuYbx4wBNQbj87nzDpQPCTuBRVdvWLrWYLxMEXBCexr",
  "key7": "37ncE3icJDJX9rAYSAPxPUpETAhRcfw4JMq6hdNAGZTuNjH4QMmvox7wVk4PLzahnkqYreeS6htx1cMjwji9UHRY",
  "key8": "3YZph781kbJ7RU32mMam9LA3PhtnKxmA6vGGfn1dPydM5JW3p7nUMziCXRZCdhJMMNhVge1GZjPyvhmcdqnkxH3H",
  "key9": "sQCvitr5J1ySbQGVrDuiMdESfA56ocGpfSmcCdLJEy44oSqdBAQcU5WHXAd8tott6NxpG4U3ViXBQvRn8abHJao",
  "key10": "2r3RZxA3z7CPxBvTZrGw8m1tJkApoEJvx65A7LfHoc5hATyjU6r3f3S2trEveFxL9W4Z25gjAzWdqB313Q9kzTLP",
  "key11": "fKYmn5MzLi7vJta2yz1iESk96UmEtDvCCk5ENxzd2UpSN1BjV1vYACHu9dCCoseaoNtUPiKQdBdh9GR7QDduijJ",
  "key12": "3psFKTM8ah7aQC1XMUWVrZed5ziFTeiqajvyDu6tY4cvnbTbSLTXqsUPzk1sM4Eh4rMjUCZme7TobHxhbEbVDuos",
  "key13": "5nbpQK4JtdSiN1HLYBe4cViyBjXpgeHKVTBBaEwmbuUy51Dy4kdW8Mzayxdfk7jpcNyiVuA9kp7dKiQND4T9joZG",
  "key14": "KBAUzWQeocfHU9dkwhfr57kD1U5BaadWNG6XAhn3BoAgTj3wef5Z19KKzJV5Tb6pXcGf3WABtM4hGGctK7GjFiA",
  "key15": "2p32uTgNuxR2wxHubLd5behvciakFa9DcMqAgkp9WENJEEFysRyRTrCAEm4PHTPvAi6JBCp5tU1CG1WGeXHbzxY4",
  "key16": "4rv4mVS78TNGFs6YP6BirNkSioV9NKrh3Y4xxjxV81r7Q5XTpEEztGsSvqbAxTPtR4mav1od9eEypMu83Y4xqpan",
  "key17": "36Ea2jChL9baKyNAdvG9atKyw7oPqMHqLC63rfGicUf8u3VFDkT5ti6ahe3SLaD9fZ1ejviNrhMmpjyrjrbc4y46",
  "key18": "2yXvBapqARTY6bztAohu1b4jGmGHQgoXDPanV2S5yywqKycrqjhH9FnQqgeZWzQUYT5j2J5sgewKAAFPhDr6mTQJ",
  "key19": "2ed7LYqVrWHcZVBJuRXz9xbSJX3bzZKvsBPwwMx3jkQkjhJX3B2RMD4m2n2D8beoPbwwpa3ybjPfWS3sK9wJ1YEG",
  "key20": "2drXzQFmknpLUwTzMh5xnHXfdM8c9wTPanavTxPXEYAV4GnMHAgoaNBQ73M66uDVF5G6Wpz7znewrPFXri2fQKt4",
  "key21": "5J4Smw1nxW8hsCvyFRBUvUTkZ9FLbTx5sGpb6LrCJbjNQTX4tdA23iGaJhJi2SeccZqCtH1a5wfjFUoAPbBj46TT",
  "key22": "34tT1YvD4fsmarKorZs1ria2roFQgqRkFKNj1NyyT4jEcrR8J3Aqbq69DRHSguxBty6cDpVEEbjoXNLyzuVRnNPM",
  "key23": "5nz4tY7Nm5oqKBoAU2oNRv498c4AbQkthALAfFdw2FWYiNkss1DD5BVDknXCRk8vgwZzFDh4Tb58AdNjM2S6SMaC",
  "key24": "3TQRjomdKvwKKDqiAd3SYGNAvmv9CdwuT6xJ2mLd33ZtBMUqvSnRsq733FhGDGzbYYdneGxx8RnaHQtwedtv7rhn",
  "key25": "2Jey4tWcTKPhtwUazF15shPv5r7JziqoJ47eDMxjEi1jkY9U3dXNYNB9FwkfetL1dYVFoLqnghrCD58Dp43DZUee",
  "key26": "YivJkcKMdDDFGXCKZwcuJXf6YfegieMPVy4xqQHdgSRxjjJ2xSwd5QYqXJodEfWrBQhkHY32LeJNyaeWYomkZnG",
  "key27": "22VsZ9qS4nasmhchXTVdhLZa11hAPUcUXY7BWTisxXKzKQZsfVmCm8CFmWSJ1JLRBcvaFNbLzxhu58CZiF6LaqsQ",
  "key28": "5GSEcPrhthPgnqH2VjKd7X9Cnygti1GRg8ECLQ4xQoYxdLPvxF3mEkQXb5MFNgNCDwJcUvdRpCWFkrrM9xYnoby7",
  "key29": "4msXwfqfkof871WZTcqe2S4uFUz4zi6sTbLdjz36NMc7jauZkuZBdVM7QyHRrTHdq2ZXvZgbaSt82cPkwdGPjzCH",
  "key30": "PfmXeTF4tJXTwHb2FvDrE5sciTDubt12ANQtmXfX85yw6WAAUFaWEe1SrJ9j3MgSx7kugK8K5Zd5vBXUjnUeyJe",
  "key31": "4EHBwLxWYmRYtP9Njugxz9Xm5vhu2JhtiggMbWXmJhDDBqKUpf5f2moNpgYHYqV4NPq5LVAvoHxSUC7RCtGgR2BH",
  "key32": "4cBtUETWuFKeyvnL84Uou2pUuAnPxTPzBzdmhkagFezqsCVp1wYypMRj7Qj9UaMtDBRSZrjjjukKp4KsXieqoZUE",
  "key33": "4k5QfRLhn2CSjj5ijtAqDcrYSifYeGBwt9hWz2K5NJuhi14A7GxYUzSWMzy5a83Kj6sUmd3rgNdz4nc9oCpobrRf",
  "key34": "5mtrsskTvkSzSMpgfNHktwmdSoKFKLzDm2VzXN1ASt1wmuxoTeMbBLesnqKKTiLUyqgVzRrBSFmgsZx3ZmC3xDJc",
  "key35": "2WYeNqnTE1yzcAr7C8kgxX1gEz7r72n5qbGvUCfbi9QdqmTnucTcaJm1FTKqAd3SUAdeScFbcp7Y5ba9Zj7xFRKi",
  "key36": "5yTDfzx2BAJJVN5DtB9saGiKb7wdWbNTS9SEHAPNhwHy1WsVN6cZuc6Q5P6hg2Mq5dTBiprgKE2Yx7WLLowqrZJo",
  "key37": "2zXHYEgPJP2f1LkuNuKRMxegAUW3JA78q1mtQHGY2nohWQTkkEJKSDfuEWPXvc9xUE9easBy2CTAHcXJ4vRTrPi7"
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
