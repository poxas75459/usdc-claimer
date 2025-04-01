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
    "jEzKJx7WJaUaJ5ZqYtc76cdzXu5tN4738wbf6qBrzhQq2KjcgMcek74LkvSC4iQX1WsLyQuQcY3rrjjtbZRX6rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NTcniFKEiSf7T5htZNR1diGUMwfQ1XVMkDMtYVNKBbXaKM7EmVaGFhN5JHB7hMf38v7KppZpkWwqSRLbyGpB2VK",
  "key1": "Wnwka61sA6JJBnN8m7ZKJboeFHj1GfyLR79AKwkGnWgMr5LpNczXCCqxPqMfEEZfpPjUobHiQTkRhjaDJPMAQXS",
  "key2": "2226kxweQWsR2kQoyrbxox2otgM471vVsvNC5ysvjtsUPnQ1sVoygtSSv2Vfeg9456G6dpqE61rrD7JNHMAQhU4E",
  "key3": "47azNjcETF8gahebnxDRnegdD57nmyn5nHWoVpu7dYwCZPTVyRov6SBdJpNtWSEBAnXQp9LFqKNEvsNodLqYFwXs",
  "key4": "5dvhfCCXe43b6LHoMo6S3bfGVrToz4J9xCcQpZkSYtkgg1iiqbk4ty5HM32vHB2B945mJu9cGydSkuF1hTh8ENLo",
  "key5": "4Vsa51M6CzGFuGULZy2NJMWjsMtHxHJTra23ow3SSjb7mrs9yuhCbS66tBPJeuGodRaw4Ez5eJAWoVERQimLjNUk",
  "key6": "2fPDJZiNb9YSFk4jVCVHKJZjk9XPFK2CkTGVRe7vQCb3rJnQXZvUgn6e99b7LrUfHpU6oz593fWCpAtgckAJkCsN",
  "key7": "49rabroPmA8pramis8W8AxapM7s1Q5ArGbEEV61Px21dkBaYLB7Zj3tDZ2H9cW7URVky32mUsvSpKKqhXbVFsmq3",
  "key8": "4PNgsjsiZXNYmriL41JodjeZuQDuy6sxGjmV7Ht89c4vbnbifGfyR97faR1XrA4hM3mZtCfuo4gBZ1hpUqiF8rBG",
  "key9": "4fSS4Vzaasu85aToVwfXn1m1zs9JCshrJ3yDzCnXDhhgBtjNVFqTUwh6NUySeMREZXa2LdurUyKrM5nomo2d6KXW",
  "key10": "4si8Pc3DEEEHw5L2hsoW89cLXGvhju3mqe2EtPffdXDDYL1cx6xciFkhAzGTKCfcyBrEmQftu7MsPqsiHH5MXKg4",
  "key11": "jMzUMAsU9VjjJH4DS49dBTC5RREPh48WJe1Fg7WnAHCkQSzEAy6uW6U4Cdq36TAbSUdHo87TLSyTmJKYSXT9Coo",
  "key12": "8Yi2e3TtUcr8GtyWckEvbZ38kCXMC4YeWocrCmimXpfQUw6tHRDWjNk7PzLtGodNQ9EnSo8LAMjpy4dSWbSPckT",
  "key13": "4pjN8cSBhx7HCJDyu4a68aSD3o7t2Eht9xomH7Frc56ypm2HTBu3N4YUzsnn226yw67vRVg6aqU3bouXUj5kwx7P",
  "key14": "51GyZDJHYcrd5M3jkX8LE6DJhwb1FaPuBupBb8uCaNFKv86YXpw9mdEXW4FwLoNW5pnEf1y1LWhCnQWA7LU7AV6H",
  "key15": "m9rdtwh1tZe8LK79Pd3eNM54vTNQbAREGMhAQBBwyd8krn4tQEEHreKDGR7ixGoLDtP586mCa1K4FyxqnWoPChz",
  "key16": "3Q48V1DMFdE4m6hBWrUn67GJv7fXSHGT3zfdo3pHehYu7L9ANX86VHvt9gP5GnbH2rNcbdKzCQttbMccSQ6Ftvr6",
  "key17": "5kVnpMdgs4guizrELfjfT8rEUhYk9snFVzSR2t2aTPB9p3dbw3jjFtJttrTZrT8jtAbLqsq9gRSQ18K3aEpDy9iU",
  "key18": "5UZMSaMDW81e86UyYqvDNGnpZzSZrgzjux3jWZ8Ha34X78Vrqr8vHLbhbEZhF5VVXS4SN9rVVPaxMjxLigT76sQd",
  "key19": "9LHuAFUj4LNra2JAkf8VAHgkx5cNwQWDgoQQuSPrS65MF6xCEJxiHKcZt7bQHPeLiT6o9r4DgTZLs4z83ZWQdDj",
  "key20": "4P6EjvHFnCdo4H7ZjPBFXgWk2G8NKZ7ujKAKbprLHXBfdSCNd8Bvgf5uh49r9n2vRzSNXYSs37Ju4ZKQ7Pig4riS",
  "key21": "eCboXDoeNxWEwDbLvwvhgZ5CYZdbTDQ2wFYEg9wXe91tgTqPG3pMqUeQT94a3vGSGTEetX7279onwMxjxyZesyb",
  "key22": "4rW9vyzv2D6c2ZNpN8vPKssbU7NfPTHLNdaFsWaVDRdG39EESqbrrfEPEgYFvuSZYkohyck13hmiShiKZqEM9UM3",
  "key23": "47vbPngqxhZcAnckamS3Az8cRiDRLHdt5v8yvpN85PJhXLUyULHZgekVa1pY5D8ZfVhh68eNPguSZSrGNPMfQemr",
  "key24": "36LL8oyiAiSvUdvtV6jwHQ7Av1gYzv1GSLw5NxLWc1tgjWzj3tJncM5YdczWZxCNCen6VAAREuxHahYqZz5ubj9C",
  "key25": "39DqsVuUv3VGBAbW5RxzS3z133D7GjCTaREpFehrEu7w8va3gxxmbCXGZPEdnBXdq3a2N7owqX3KJUf1sEVLTeuY",
  "key26": "6qZ76Btp8cwXrK5wNJhmB8oB1fq8FQs8LScCFF2mvRDi1Tpqj2NsS86HPBfiFKYR2ZSLFLxmFt2Kc7dcAY2RMpS"
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
