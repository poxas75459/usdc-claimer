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
    "2f1s8JxKzwEZGwBBbT95osvjJotMRrmx6pvjib3wGH7jcjMjkQu9Wp8E6zmKkagK51xkzw8UjZqNmjWyzGxzHrni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFMnuUtQ1HvhP5r7dgwUGjY1Vqa1mqkMmrN1BKUCRrJsyPLzSZgSSb5qZQ8ULezUcfxbds7VYwEZxmAvBE6TmVA",
  "key1": "4EU9iW4gMnoTiRiWHGoPfGMD4XjMrzMfYL3yReGDvatTdtnxNdK4uHqhU95Rmib1acAvt38Aht5kA9432BZ2A78c",
  "key2": "CyBBz1a6m8nRrQ6tgm8FSHSXbwLbd12pdgyxagCAuP6uDCo9G5ewZ6HLuw3HCo4orDxQtVfthTgB3BzPhQtUbnD",
  "key3": "3wvLLPQVjAwKd6b1bZBDaSaFvHzJ6K1bDxv75yowN1kwrMkaV6vqiZ94NekHLQHRpePfo6mgrLGaNvY3sspXwWqX",
  "key4": "5A7jtKuDdmGyeD4hzgC4zftxRbpXmQ1ML1jCEd1ujNfnzFrW6u9m61tCtk2DRPE51Ajs3xwPCGffUZgWsLSxNvRX",
  "key5": "27mgTiARKKiknnZde2CET3pZEunGb1MqWErRViBP86pWEmdYKoeDmiGM8DHJW2YpmXzhBgB4nD9ZteVcyQjhMedc",
  "key6": "4pqgXtCL5tVBBmBiTR2X3hH4XFdcn34KXLoPqdhKX19Mkcz5gfJahffK29vBbVwQoUW3NDT9fFR8bYAWct9GAab8",
  "key7": "4CBGUpSPYvkdj1bvXsrBqF5C4FkFwsiWY5UhtGcewgCsm7PdD7TXo36R8TBXu85t3CcBLA5wbvLefJ2ndjaC7Ljj",
  "key8": "3mwQM3cnRoW9KQnHLVEeJCYJLzmAKpbFEjibgeLCsb8XA9BYUqiL2VMCfeuqsVRWf7vnPoLrPUZrvNoQGjV4p3FQ",
  "key9": "35tgF3GgmPhYmKMsZJ3fYMxigWYTVh8huFcNB9SJE1XdJtk5fSqX8CckdCQJLkesgyxyQHVceqFRXBJjCzx5ereS",
  "key10": "5EqsTfakZA21h9Qhun1X7Wn191cssYcrFYWbneSLoT2Etko3U7xpkKUcWCqaCZEkQeCdkoeWccKshm3pgdQ4d2Ds",
  "key11": "wcfFvvvAbQZxevXJgYa2uukXVzrRErw6iVXSJJ771zLBpgUVizJPt7kJpsTAPYnxUUywkjhyrVcEFftiNJSxcLP",
  "key12": "3a5RvJVHofPy4xotT4VHidgn7ywfSiCdKcQAPsCsXz9tjpQhhTHQ2VmsiN3ccLfNq8qPNQDwgteyDqJrauJuSP8U",
  "key13": "4wkrPyVLQHdZnKh6VyMUtxkZmMbicgoC9YdTXFXooGs4bKGs4r1Af8tFcJiuBfR4jT9MiFdWCqHwMxKwicYVfwxq",
  "key14": "5VKhLSVGASBUZQmgrHq6UjMp8exTdJGfdkF5FMenHvmubqMzxLv1KjQhZ54WDYtCNiYW24jjJj4F4sXATjp2W5e8",
  "key15": "3rEHWJUMBvd39xRsdP1CQXx8mC5dP38HshD3GfNUETYvkbyVWMA7FVZuVKCE1mtCFti4LL6SWPTvxezGbYzuJoZE",
  "key16": "4omtUqvxsee8PPj5dghzmCDbNbfqr1dsArid94SyWhKWc1vmRGuAkQ7ZwZQ6Brg6axD8eR6fvorHJDbKzR1y6Uuo",
  "key17": "2wh5WDX5RazD2MP82XrLSTvEno7dhWFYL5N4FgTKGNY2eZhhSEzHr4dRsQ4UvTWPAj5WShDbEt1mbcMRywvR8cXc",
  "key18": "2jqRJaXpP75H4Gyxs9DUGzA32HB6D5LxPaGAqbNrBVrWRcFSL3M5vm2aGsimXpdqGkJUDJmsHG28pwHbgsS3Yc7e",
  "key19": "7QJqSoSG42mQHh4oZ6MTHMzhRu5cE3J4zzDA3JVaM8yNHV5BHem3P7W1VPd64V89CzfrfUNmbyroAv1sjSJC3NZ",
  "key20": "3VKnkTnb2hPjoFYf6igjbLpDUsGF3SbFQCpnFDSWmgmSkEH7QhU6QkamhsJM63YMRUb9EG6gchU21aCPtidctmpi",
  "key21": "4iPrvyJNtTRPm6977E9kpFzEG9Z9hZ8TGzLuSLQ8gdWRxSDgCs5upNSbBVGTFKLHnHuCCnz4hUTm124VTAGTWaUx",
  "key22": "3BtNSHWgWfLG8tEUWiE1BiRxG9vmtfmeuSVwHXQFTF1NXS57TgXNeEN2YAB2SAtCYno2Nes2R8UpKD5sVTS6mEd6",
  "key23": "3MbzoXoFYWTqKsbrcFNdDVZN1jnMF2uupyasEEZvevKHWpJ89U4naas3E7ypQTmAFhzGRyMtd8Hkfj2jBJn4HsPk",
  "key24": "EMURsLByZBvxgqLeSiUJKmJwmBgMT7GrJyoe745nUurJ1AExWxRXgtiem3Nru9m1D2PLC9N5vGscN3FQV6UGs1F",
  "key25": "5EELBkZzyo4PSiGLQmiusQupHySLHXiTPUQkmNQBoSrMVUTcDau7ZwXg1b4sAMCSvnmTn9WwFYMuippDh2bn8owq",
  "key26": "5JXC9UYWboYoKeagVBRG8WzRsNmB7AunGhox6TEZjHfJsSAbzASNHNuidbFdykQLvM6v7TCQWTAt96oYrTvKDCgN",
  "key27": "3DSdPPgXTcPFzVEMDa9frapoxMBVzQLoHUgJsiCZ8WtcJ8PwGzma3hA9DKTegtSpmL9MVv7zVWdaCeYcPyP6eCYP",
  "key28": "2Cu5sh3ZPiCnjjWKf1wXkKHw5TBopcC1T2iZWMKxuxtBcrbV4mmUcbKfU1Hn9avJ4rh3Kxev6dNgghcHpMirkDfj"
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
