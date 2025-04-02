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
    "4sSJi9AbgqnaiJ3UUHnugVnn9SUu1z18qPHiTuon4D8AWy2pSks3isX9Q9YeUEJABoQvrzPd7vSZuriwZsx5FYjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whznCkX6NW1uMrbGHYZZ3GZrHTifbFxwsdZcjUFTxFbY2KsDqKtpvoQ26h5XFBBpa6ZWAmYQG3PdMTYCnfsKiys",
  "key1": "SbdLCEYkMEaoswxUDrtQbWBmEZi9WaJ9BcMj47t8oXAQ7JYBz1esyEcwq8R3RmH5iG2pmU2AW5TPpuv3xX56Nnz",
  "key2": "2DNXbhJcaFoeW7WYdwgHmqxVaPSneLbyKRWMqTzUoAdthNADxzuUzCs1Jg4K5pUFjz4GhZFdvGLKKh3Sv5o64ssH",
  "key3": "4GMhWD1VmhzEJ6JjHTKDyKWLoR4nAd8Tx8VFonGNeDQLGLKcDUixv1UUAe5Uv1MVzcNcE6PddWBkLJTHB8dK1Pbm",
  "key4": "4sdhfHBtinCkiJAh4P9LzB42tGiAkgxSnnXs8k6vDYhHkyXjwtxKDYyXurbUkQJLrCpg9yCDaESTEr7hf7oBQ1Ss",
  "key5": "3wVELFysnpvEqL5tUcPv18VgvuD8Tc5Af7V47V65ZojzJWRF7fjzZZvpSbVBLXRcpef7MiJ4jxi4bP2w3iNwQSXY",
  "key6": "45TfuGJmdYj2wy8LXb48PDuMdyoWuZirwi43y3USPVRtQYr3PFmms3AGjpVpHCDTLuCCJGuRmZeYimbdB7LiJAAS",
  "key7": "5ZFGJa3y4KvvJzxNjDgKRTkr2qZsU3T3LbPZZayCV4Kzkvkg2RTwES2CqwUnseVpvg4jpkZAXsfWiEsgduS12EBj",
  "key8": "2UsXjRnZdzEVQ9ockuzgNuoJRZ9G3VyA2NMqP6CKjUcPTvPDeW2yqvEBAuJbLU5K1m3ZNhF6EeEo3MTrQqyMWeCt",
  "key9": "3WGJq5Q2i8Vw4sbGeSLuKpsWiF3bLddsZE81GD3nZRinLwoG9STxtfpxy2EMLr44e7UyDWt5NnwdZaqiot8nh3G1",
  "key10": "4HApVgUgRFHQBbLRmMA2V8nAX52fv5gwrPA5BP4sQwKAM9xp6uo2XqQk76Hw8tgkt5D47PrFFtWHdF2xMBXqRgBV",
  "key11": "2CiQ1K1jQmNzjKRz68vccjELiBUBJrC2tPSKse1Sg7A2QDhL4ZvygBqczwDZ8AsBiHuxfBh6MdGhyMgZXXiM9Fmr",
  "key12": "5HeyEAabQBQbvrE6TzLmHKn2ThB3UP9VyZk6YhQoxRnnprZJyvV4vwNPWTjUYQf67YJGNtC3uXZmHieESXvRKYpr",
  "key13": "5AGs7ogRr1bKLbKf5Tt9n6kjfDbs1CBnZfxJNBrfQSrXKEydyXg5PGTvrtRRYcmRqCAFtnmk7PjYFohaeiHEsqCW",
  "key14": "4izEtZyhFR729Wa3XdP35C8QhCvQn6WHvLnwhDQHyUKstgHCGbgqzg3WTAdLVNbmkShbdLTCDQpokKVj1qRzbAcw",
  "key15": "2qXgr37ubNHvXMrcu36BcwXCenpMC6LPnjN7pDY2hi8Pz9zc7z7G6SwMGjefRHGkin5T23c2pfL3gAT8691iDzeX",
  "key16": "ABS53c1QUvNGF4u5FUWTuCm8HEFwQtgd6rngR3XufQrW7CcS5KCFfGgLs1h8NmkXrcaKrDZTSvxzDqW96NoUa2J",
  "key17": "2BrpCxnagySM1AzaLPUifsawH44jFvpvi6e4p7Nk7oxG2FfjuNtHLfFdbxX2XDUHDC9UkdZeX4SAMokYG1LpoaVr",
  "key18": "33KzKR7qK8weGFNRtxfLyhXPpY12ReGrJz5c24JBAut11RAx9CWtfqfXmvJ8mLCgtzcnA4RMVmCSFcDT7nqKiRSe",
  "key19": "3t5L3ph3MsAE2SJ9sySq3HEJh9EN7g61UgdcuahgPjTSLZJDpbFGDxGtfm2bDrxsmQnZCNASfdd3KbUkJ5jypG3K",
  "key20": "3BJP7Y3DmAe7fnKsNyTCH5FpctEUVZAvZVcL9CmMrnLFJ5dWzmYLFbX3RqpSmCMCfRTppKimg55f38URSwnmU6b4",
  "key21": "5PiJCFtFS2uXVxqkoAMqjfmMuLoefPYRqtkr7Lc6A9WPpc9EPxun77xe2bihbT7mx743kevwriYPvEwHESJpgkxw",
  "key22": "5GYcW9QDK8tMe8M5opuWi7bzvSBmRbBgpastewXgivCU12EEvCqubUD1uvq64boxTtBQbiEFKLELa6JhgCKF8nGB",
  "key23": "4NK569UcLqe4u8x7J7mfjWCNHX1oMGQubnb3vxS4ex4VYpc3otXmcY3KSRkiVB5NmZnSwhgheFXXD4JBprwk8xFw",
  "key24": "4LEomfT3P5zJjwvSwsScyn6dkaavmVcav3bvHXhe94fdwQbDRKW2NgKo2X1a46A5bKxDLovvFF9QWSNuFEt5Ugt1",
  "key25": "3JX6DMHBaQDxBxPwzKcpkomZtEX2gXXQ6PoWttzSJuaGz62wnX1im4d481pwF6Ns9NH5P98RcpL4XLWFXZDRPd8T",
  "key26": "ZiGLc46XJn39y3wMtwrwgAozkkhNURR8Qn9b74Kx4WAk1CSmgNqveESxzqHhAkGMozTkN32WCc3ySXPoGhiK4ee",
  "key27": "yf7BBpnCB4ZDxps9GST9Ugs5Jpi2VcxFxTmRryBbGqGnRhNzX9Q8AScHF5g7MjXdfDHkC63KMUCPzjsqLAwjTGw",
  "key28": "28JqJC2NkcHtsL4VP7WK2Z5CGTHjFDYbLYFiuH1e2TjR1CxjhsrGPUjZ9h9VXGZDdueqDRK465ju3781TrVqd1pw",
  "key29": "4C1PCthEnfTH4tYZ3YrLrnHbmiqxEadPy1cwEdNmf7XZsMV6uWZngVvC4vFdcwdsmampDKrLy7CpeCoga7Nab1Qm",
  "key30": "4MQhwcitu5hYBYcjtcDZ4n5LyBWyySSa527wzFcwW8vovMhfQM9gdqiHxq8dZqqULm7httkLvqbxxSEjNJpkn4Ed",
  "key31": "3StLzervxqb2MCTnnme8gZRVFmwK3VitZCe2TGupfBVuzAceVhCHEFq5Th6DoTctji1sDxfNtz1m7Q5vodCu2WD4",
  "key32": "4sbG2UaMYks8RH9gy2xaF5f9CH1or7NpULjbszkr2H1GxKcpdzcu3nbUZE7LdtqfK3Q4m3KEgwtzMJtuyZx5TqQx",
  "key33": "5VrxQXRF13mbiTuK6UhojhLJ3A4UnfRPCVF6oGVqGhzjHJvZKx2TuyKcj6L3CaRunwCf9SfLNWXHNjjWabk1GjcA",
  "key34": "2wHuyJ21UX4xMViHoiACyqspmD5zDiyDTk9Jm9NDGEahBMjrsJhedrMpCGrSJv65He1E867o9VGWoVBYHWRfzE5H"
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
