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
    "BEWgLL6ySaQYnPNmBXb3SGa3wbHTHfyuN5M55E3QyB7a6dSqRnAbNQKQnzqbuJ8g7geCQqkCfMCmyggyaA74rWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p2jVsxLRjyL2pSBXugDVptwLGdMpxHyW6wAM7QGatedmK6adPPdkU9PUf2v3xUCLKArMmLXs474r8UAr4Dqk3gG",
  "key1": "qkZ5DZxHP2qpkPvopwLt3LFo6yT5iVseM3fFD1nw6TWNvdhBspsg7SBfYcD58ZuitwMXLXkiE3h4ciZbAX4MSar",
  "key2": "5XCqLgathkZeCMdwktFQPtTsXbAv86m3yDkZSrbz327y44xGz1YHrXRKn7nJigRWiwx29RVmyCkdGbHj24XCwNYM",
  "key3": "4NUZzzhd6AQG9QDUMbwxJfmqnB1UoXWqA6EnSvz7xk495PvbYB61tJzrcdaRKNWaRjXsYhhSMmu81N2P5NbvxCqM",
  "key4": "25CeVQXbJ2v2pxcs1k29S4RyDDTjaH4tbwQdyZUg6PoiXpofmBpcBX2muHygz4dt7aKX2WDe4FUG2456VQfMBJcc",
  "key5": "3SA7svt21L8M9WGpqmFkjwgM6GHuAftn4SVCccBnFaoXbZcsPYpZrNQgwfue612VHqg6aZ5LAJ81PMnejtb2Jf7o",
  "key6": "3sN5jrHZt3gYc5aWdRbkNqYZTULhnobq6fqRdHfjmFBRcNm7v9Z95xxRLsNA7d9JMryiUqrtDryuLJdyc7cNFDfT",
  "key7": "24UobpPiiS6q6xx1pczinLa42T1PtUsdMcPtdWLkM5kZVqpStGYEv4amPozk4ZsdBh8KnqiKMX5qSKdb3eAVkSMY",
  "key8": "5iWBAFCG55jJLKUfFUDMXyaH5nCRifmpJN2RTyDA1uLdTKebfmh3UgNqJWKVKXpaNhX1iXWkgucYrBqnwhKM4Rj3",
  "key9": "4FEKDuU7CpDqWTEwGCDKRWoTXvKGYDgawhxkCEc1xnzpvWERcmBWH2h7xFVa5ePWiE74cYYYXugWGDSv6xWETLMQ",
  "key10": "3sTHcPrt815RjeiHff5x8gffxV3qG4BCY99Zfu2ftUJdL4jA6R4T8cR4TvTAZ3R22LE7VWBLstb5N371pLtWuXQ6",
  "key11": "5cT56rCz3R2v7PVAeNgLBFNXS32q4Kqbq2FoQzmkLeYKXcEbiJKNeKigDQp1TvPER3qjrfznbkSrGKJDwRo2SbnY",
  "key12": "3u6vZYX3rGvSNpLMn2dCDbm4Z9EtLf6YwRzW925dkyYJw2ggogKFjbZbxeJ2gL8pajGUQcqfyBvkLDeboSaiKEQk",
  "key13": "635KzvN6mJ3xNxNWQz6h3BR5R3kk9Ueohkb5x2ZjCUaE8eS29vTKeyXZSERZJHStyKQxWbo8zxtsCk1Qb24qaLUH",
  "key14": "2vGDsn1BBZ2VU1vSATvA3xftW3jWf7NEqfFjRtAn5y7SCSAW5eiVakk7foQCGTnH2R1Di2WhsQSTsz1cbPPgaCej",
  "key15": "HVgV8Cv1LbqB3MXgfiRzJLN3zfR4xEMqsnaTRSegThfPekDXX8kaG7VuiYTmEhAU6xtCUqGZwivGTeGHiGMKUzr",
  "key16": "HLXMhNcrrxvaT27Lmpa7uH6f3hLwQMyH8ECBwyM2G4VFXMQhzn4HZa9G6Kxb1NA9GiBzfcwxSLkG3NK9hmzRKTp",
  "key17": "4i5DkCAa9V6AVgZQabHeDGFPQwh78g46ztBpyZDU1xTYFMhwj1BfsevcYdKnbfmTetotft6UHgqdT4zBvy84f1jh",
  "key18": "4sUjfVXBXknnBtLSwnGBEaiXppkqx5ouLCosHJBbTJNfX66iberBSBgfXgeL9YRtHnNLgTuB1VQg1MFXy5odBwtJ",
  "key19": "2ZvZVSL33SXzbejnTUL1A4HLGTbNPRRGFCK4zxTvjK4DwCKi2283uitJQZcTgMwqLZdmVXp8hHm5L8v12UBT8ApK",
  "key20": "2v9ZtkFVxB4LyLEeQKyjoraRsi1RjQ6jArWU3UmKZ1538dWYvCu6wskECXiMdkjd7NpTsHkER7PAJ7mwX8fLMUhJ",
  "key21": "3k4gp2dnNESEcEQzdCB4XtVrGG5kdKhoEWTrPcbZrKi1zG4jm16ixiLsuDT3Q1CvHkLTovMLURF6j2Z9tU6bCHD3",
  "key22": "45Cg5YATDH412UXgBo9Vos4SLtZKQpX7oJyvKi2gveAf1efaiJwH5zMmvnMyfTm4vM7u3SNWsREUHqjuYAch8tZL",
  "key23": "ekGEE6oCUYVQYuaFS57mZqo1bPJabNJeomC9bg727pZpVEK7mvTxA8diDJ6nU5nruq3aLNJQKGr95i7oayV2UTp",
  "key24": "5LscAHB9uL45aGqAfQKXwm4wfgSSusZyimFQ3Vjbsdv16JbtHC4yfs1fu7bhgjzuxy669XMU6yshAm55NWuw4oga",
  "key25": "55FL9Bv33dH128xv8BVaaXyVaTrix6R1Dt9iXq36CG4siDJcnNSYXBpCZfCZsJ1AaM3bPtysQFR628Ak1kvQ3tsY",
  "key26": "5Bzww97qfZHs8MUuo2dVwVfy7ze4Jg6JMLzeWDVsYW2tvKFk6oHE4zZpk6QzXWNZnSAQdxFEw5Gqzq9myPGKP7pB",
  "key27": "491y6gYa1paYcRD2B5hqNLaRyZrcdrabJJDBot4PGRBee1NP4CC87NE8Rbha1GvoA5H7VSDwJUy9qx4EN8QDBGdV"
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
