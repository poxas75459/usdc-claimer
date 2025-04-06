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
    "3ix38R7Kxo6HCt5goatfiu2SRFqZg3Q2RijcWygywsmKBfd1ZQNcbApaqL3WJBv6gqLVqTj57JQtPVpVZPZJQSkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63UnFbjnx9nN5fYwCkbPooke6JfuqsYmqhqhPamhFvHVFwF77TkM7Y1Dg5Kq6qQGUJeLi93PieESrHeG386go1L6",
  "key1": "eQqxzjXK6ySRx8rVvhHeDR52xxs4D6gYaBrSmVg56qPHwBT1fLBXtkfdpzkRaqHWMUmCCKbkva4d8NYiiGjS6Na",
  "key2": "31RFt59GgpVDMnGZy8s6eq2WuotyqUNNpHgQs9jhNA5sLcupU5WNFWbG1EPD8HLcnguy3jZ148oniPsu6RErygzu",
  "key3": "62HAd61PcqAwNJ9PeF9KMiqDnTuhCXUdiA7bfLjCHnLCFxy7EndTqEsvewrC1wgZMrcJqmpm5T8A8WCgSGXpb1mf",
  "key4": "53rmSRk6botJ3Dckj7EmQWsfwVXA7KKiwPeGbwswdeTWjBtbsX2Lb8pWsf7oLgv4CGBMQnRY89MUNWAtSy6rKsr2",
  "key5": "3XrrU1incV1WueLiEdUx7kG5xZtsBs3te87JXgAGVkXHKYomiaR3iiomwRW2G9FsAFjGbDYwiWBYvVhz1GJVUcBb",
  "key6": "5Mb7XSNin1eYCuFws9Cryghf49dD4ibv33o18hsLqA3AAW7oDpGyw8HCRAZ9kpYAyTtJh7YkrUgPwoMdkDU1c1j4",
  "key7": "5wPjxYpaRoPwYD3SmRRco8DUjjSzyqNauPgco5XiCzQriGA5drRpCTCw4gBW63cQbEgZ5HddoZmmrn5FjhnC4ppH",
  "key8": "4Z4ZAgGah57VHmNpVhH8xY1wRuJNSYLKAjeCtxcfF3btxTjdpti2ZxL8x5oCEU3aMJaqmyCQGF39equJEnnH8Cak",
  "key9": "618wYyBtzPKEXroVSuKpXHQ4V82RFpeSJbn1YSwBF11FGahNY35aA6cbH8QQdD7GHh5V957Cbe4zgEzcud1akN3F",
  "key10": "397XdGHqot2jtGwBLYdc2ZGEFsY4ZAQoQytNnhe94wk3YRqH55SqHxpysDDfNrKK2SQR4o2XG8iheoBjbjcxqdBj",
  "key11": "pTL8Qi5cDDm96arnKKaDu1YhGCD3f7nZojEbD9gi1th4cAyztb3v4fWbhsmTfNYLtNVoUKn2Rz2ZC1fQBKXwLzo",
  "key12": "64F7qJ7VGiMiU2GDov2Dk3NXfyEfodMfXgyYh3rhPJpXWB9ijB9EPEABeX84zssa68h2r2kgSADx8Qi7uz9e62mt",
  "key13": "2PPyTneX2ZFkMrW6CaSm7w4DLW6HgPhQbZktZGRNeZpR4BJoDcvazra8gk8fh9NgxmjJaV6rjZUXZVKr8hC6Tp4T",
  "key14": "3AC7Vb34YQKPXQYZpJ8jdaKBjq1QeBRX8r5paABy8xGzqzPoVmTt6vQFeXc5Ya4Pqn68FsfkVZxdGNCZWvDKkinP",
  "key15": "5YZfi8NfCc4WRbqjm82WitZ9cxtJzzs3FT5Q8xVJCPBmKyMQNdfv1BWRCCLgYWFW2bM2fSckUiGi68gDd5o76PUW",
  "key16": "62KinCaPcBZ4mSMGmrEnwMBi9gsgJ1X5GJHrjK58dmY6epUZNS62xXpjS6wPmVjC3ow5ztnKGE8qH2VjoSGz1b2j",
  "key17": "uBCqroe1UbfC5udeh8JngDJV5gFP65c8W6SYRUY3yN7vJQhzFcwiKqsPMQezsazimfTjZ78yDJMneq9tEzmMhnD",
  "key18": "67n5XQxuiUBZPwxqGZ6ZDTtCeC2QWoZ8757Z6zYBUEznGW7F1TdL3gyf9LpDv44ruPHgJ5eDSG6fbWtCooRTrwfK",
  "key19": "5WRmnf3xrHnV1hN9ew9ZtVRK8PJ3k9EaJRWiSAwAGQ8tuTxtwVsT5MZT1kRfYsfHKNNt5zKU2vD14FyNb9Y1bE2T",
  "key20": "5TjDqZFZ2rD2PqZf1qAd69RFDJZKecEacyRpJJh1EZHQEL1hDgp4CwgiwyXvY5ms8BeEuBgcDRmNm85zdLg7L3UZ",
  "key21": "3pHPAr87eveWAbJh6uQSTk6U56Veq7967KZnDXdYdbCygEJdLc9Czvr5DMCeuqkzvNw7PLF7ftuVghTh16N745JC",
  "key22": "4R86M7FEWXcbBPkTJfCAgV865jQQK1KPt69DnguaR7ZwPUYT63kyyd6zSYgW91k8dF1LrGHYmLVRnat1J8P9BWU",
  "key23": "pi1RUHo1fKbdLxwpk9ELzwr9hJGNuCEngrCJNYnD2Pu3NuegpExLvWXE6zvjCEGSUPvhn1WteGNriqJYrP8aT6N",
  "key24": "2cCEFD6xjyB8qqQFN92UeW5Nv2yMuikvMugWX2NB7Lmu2E3A6TZnx5SXQ3DpQZCS1Z2a8ZJELP3xxPwMYWk2pLJp",
  "key25": "3b6ogNUJgKrDHd4ko5MWHnDzgZYcDiYykbRYNQbc4K1NWFJ84qQBUCBEfYstiTjU28z9djJJGGcaj81vC1CjE4V3",
  "key26": "DgNNHjd2YQBhBRkvf1ra6BfH8D2rgfXsQLK2Q8mi9QiZmpLSLN5okD437FcdUs17Fsadc3DduwUZ1Cb7eXFXKU3",
  "key27": "23Yg63ovj7SvhtkthKq1ZAfXRD2tGJ1mjy6ruCqgVsyTP3zxhohExwxnHXuA6tyyk2JJ3TjpSSVNAmLeTzhhVX5u",
  "key28": "57bu3veCYieSSmw2m1KBwNL955TGVUpzDFYtSuMSi2vibQdXr3xm5K2iNcsV7eoyEC5weqpTEPSP7KTLiiSfZ4ZG",
  "key29": "2BFhYJD93J4afEwLNoHZXwz8GnQRZP2D3dM3T8iuNvnPPCT3DguftR6PqcvyCyNkC19uc4RrteaETZxZfKhdU6pv",
  "key30": "2kdHz7nPxthQbyZipPkTbEghNLJQ4Rqx4J23W8dTabuQEjazTzKcMom69ZUV2Bq2uNQ8RQw6xx2AbTcEfFLiq4CZ",
  "key31": "2k1UyiyozDS1uNXbAMwNtitz28ZvDMFAK3WSxqm7FqFWCEGrC6AdM7gZq9S8jgekVYLxz75zpZ3ydd3KfqzCp4zi",
  "key32": "EniuGTrbe7aWxa6ywZaK6ffNjTAV5jeugR6ksAax4uw1xMazMkKzkEirCmRajiAtUkDzFkSPWefqwXkLJPHq8mv",
  "key33": "52k2d3BHzex5AW8edpJesQVEz14Xc1iSSDybJ15PWd8gqRqh7xjs85kNxRrsVP15TBjhZs8kt6jenfRd51vPPwL6",
  "key34": "4fFx76VCFXoY2CfXs4qRasakt1gAFvM8W6LjJFrEpTkQ4s4o9jW2KfZ12ruUKm5npJoYBcUGt74bUUFAJXKPEK2y",
  "key35": "5kTyHBUdjXSbRgN9VpZxRuFMHNb2aiP3vpF5znqcsYwDetq2iKrm85MxKQnGBTUXuDG6FtWZKxVH6BeryZCsuZRd",
  "key36": "raLWiKT2ybssoXuDaomHhBQt5u75NKbLHe5SGaNTy4JfsvDMu9wNewcsu49H6UWXCfPqitsis7bq2kFPNggKFWP"
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
