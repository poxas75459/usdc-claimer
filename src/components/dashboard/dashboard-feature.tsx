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
    "4PMCGZxXfaWvWKEh6VRubv2fHyFDb7VVEJduU4KxqDUqztrs1xMxZGMv7HAKJZSEkREywDJLYfWqk9pEEniS8yae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWSkRHmk6v74jMNfPtGP4ddAU4wnpw5kEJ7TbpjH3V5GX7CspfCpYMc1w4eS5dXzUeym1mvqE1VbSHSxqyJ6mRD",
  "key1": "g5kRCSpVn8Va7GEQdjqeHcsV8qiSTdmqkruQ6pYy4G5aumkiCGDwFngPELZhnczsMp5jEtwo3Kc66RAn9J4jprz",
  "key2": "tqQgS9cDucpeZexzFBqGvRET9n9NEj8fvpiraJHybKGsBfDh32HsXA8U4CpYeG5AtcRCHuLcEeLAQJmkj3zwZ7E",
  "key3": "2GxvyuRrTVuuPXd2jqJ1TpPPQRoNDjQ1fFxcGEWSd6Cpo9biwdwwAnAFvGT62LgJ3HeEyqXH1eMtTrLv1um1eQND",
  "key4": "3u6mn89ceAzsSqE1bexpuqWjZS2i9eA6XM2aVzXbiCvysganL3Tczfj5jZvSN5FqNvo4CqJoo7YMXXEe9KAanbRm",
  "key5": "3BviGdbiw8MQ4YgpbLjhzGJfvd2KjtQFYWBkkJ1ghDCapATeuD28983VhnSZtiuKhon2X5vUP1PVLohjyUt3cQr5",
  "key6": "45TBkWCEi27yw2Xakaj1JpgMMASggoevZmPXopwevgB1TWuRb3QCK9f2NPsNMoyQ4CrJYYg4cLyYkFYC7egHuvRU",
  "key7": "Tqtzo8a9WCPMVdv4iDfJT2nUnXf4fEEvyE5ZvHVEmZ3qXcwWUxibuTHiBph1Nf3YG3rf8yQn3aDpuEceofpYeHG",
  "key8": "5fLM47gfa88o6jBwH11FS8LKXUHgb7ntTgAiFogcRcnhmY2gJkn6BPqmwGdETN7APd2PhP2XYqXXGq6YEjgLf9T9",
  "key9": "KaJy8YbQxHsNnxpsDz8g3GAmm1aeU9FCaMLB5KZudicySwQ7vx9jxZ9CnizvwBEFg4KpDLQKScTHTdrBPWKjENM",
  "key10": "3iuvuEuC2tyEQamN5pkqHphmK7e1D8zVmPdQXVpWRJ6Pswyv2ArwMaNL19PuLU2vJNfmvqxG2hX7nvsX3pL6iVM4",
  "key11": "52S1HnAr729HwuLao9fxxtk6S7C9X5PzfCVm2xTAifhDCHnCCb3bk1WRxkojh1FoG4JrFyLAVoFZokaQopBeGxD1",
  "key12": "5RPzPZ8d291R4LXr1QjRqnmQViu5NCYSPbCDs6XyMRjPTDV4Ztk4V6xTXym9J6Gx1avRAcaR4GLy5ndYS4Kxj1K9",
  "key13": "52Ju7Z21Ah5DdFG4AYfCBmPYpkpm3VL9LHH7PPPfdSDrw9vUZQ6RcVAEX6apRSpMXdUnv8MgdqhoeeV8SP83kgCn",
  "key14": "5KXa7XMaBWtq1f17Vy3ceXQeXBG9jvRFv2jeao1R3AazgKmP9WH8X7bKjTubmaqGuywS44hcwuFgCTAH4c2Bd1Rb",
  "key15": "us9hDvafw3Gzn5dGfXf5Ffbkxdg1RF7Msb1iaCC9QGYqyNkKSXGjQPK3XjYKgzWak7Z3F1CZrQdkrkU7ZPQNPiZ",
  "key16": "5Ax1f9qk4istgHxh98uYaVqAnz4FpqTS2N7uUz5L7gittWASXgMUvbNE1zvzmsfUkvzF4AWwqgGXABSPXzDZLVgm",
  "key17": "4NWbGyUMWZZFwwspyuJpeX6zZJGu8DivwFBWyWfkz9aLJuXwwZ4x9mtqQ3VdpkYr4TeKXKUpXWt1GYcXJLvvf22G",
  "key18": "2R86hhtdLEngVaB4F7Cc1gTn224qfKGaUuAWMMHb2tNcVYKMxWEUWt8LLC9ugTj6b65ghNqYFbtbCBJTTeHqGq3y",
  "key19": "3GSa3ZkcdYYLoRJAY63QQf9SEWnitBP9qJxNHLHdEtguMjtPLE3RHi2Efj7tEbi4TLUYBtDAUpfSeYGTtRBZRXAg",
  "key20": "5dg4Np2YCZRwrqajwDxSAAPWhdS8XErgjamNaUbHThBqhXSekodXP3uAr4aoEwGSuLaTZEqfjtDVkZABy9eg6w4S",
  "key21": "daKiqnEv53e2Gjv5tYhwUFVSjeTnchWnn6zoTHvx4d6UTML77vKt8d52Bv5iuXBqepR4X6pFFQ7FH9wjTBogqUC",
  "key22": "4kECgtnZQXg3H89BX1Qu6ANevhsENDs12TpV2boySYD5fU6JuVDU1q3JkXBQzQxGKG6FXdGjBZwsHdHkABAr677y",
  "key23": "2Yaju2srK13nHGouAF9thKNq32XhbwTD2YzaAFs7DQci112RgLHe32wGdxiwPQM2PR6uPytSQB89MnA7bpTpCRhJ",
  "key24": "2shmYwv6v9gm4oYDtPQSwSi3pVYg8Y46RLdSES6hKqKckd4Ps8X1wBszP9st62sJQaXY7ukzPjSEUgNPHbBRHNC7",
  "key25": "2ai1169YVXK17tUNLmUoVeaqAJLwdPXQUZe3M4r4349rXesDE9YRbajhtnakCvGDHq4vfyCCbsky8mdDaQ1hW2sk",
  "key26": "4TDyXMENARCAJF5faB644uQSxysvX2wgBgh6SVmohDeygxDKczVerP4ScgFyEPZMxEBWeGvakXLc2sL2XwPd3H2f",
  "key27": "ebbgybHM6UtWgwnxD5xvzxjN1D1yuqzdWRqr1ztSRvVFGHNBYhJNJnWMJw5vae1itJ2dr3k66xVMkbyH83P3DBf",
  "key28": "528viZ8YgKdTmjB7UnsLUa86sWrMUbZgkomn2r8cZTiiLJZsZWBrJvkaV26Ru7JWntqMtr4JXc3uACDvocxX6MsV",
  "key29": "2qAXL9fmFyG7ZqvkVRPk86X1GxGbLiFA8seg3Wsv68mr3ootHJGoBLyedALZ7rXw1MJHaVjtmpTiXL4fzhYLJx8d"
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
