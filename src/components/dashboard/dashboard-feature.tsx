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
    "5KCTZTeEMXv8oB1qALHDPratZcUi4A8RMzVhc3AAnTo2qJHQpVXyEgZbXUPgVsmtjJSYmvm2GJg1UArT46WSamAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crGjb6ESiKepswRmQt4NBMngqpVp8iN1whqQoJwBe5nUrnxA74c5cVysJF6wwer49asKYcxft2s7r9XRC3uGWuF",
  "key1": "2b2xLDLURDpbpW1Z92mtKqAGi9trw4EfedMY4uKkLY9kSR85qmbvwfhQ4fE6ywudG5GCh1ra3QYdEHZXiUAXYTgJ",
  "key2": "36oGKk74FXNG7bRaofG1sXdsY9sG5VEKQGZkeWuW7AArYfqeYHYZuxnpNyekQW85rypq7NiPYQ5XHNnsSSys9Fds",
  "key3": "4JYeFRoJg8Rt6MvcM2u5NZ1skJj9E1FTZzJpX7T4837DVVVPvFyaG3KgaCCsG1t8WAVii3dRKL9CwR8nnxJoYGMp",
  "key4": "2qPP5EU3P24hqDJWRSEDHfcFNAspZWQvniVhY85ydCoUWt5mHYHSJeoCnumc452rW2tnJauzV4qdiegbEn4wEMRM",
  "key5": "4ffLaBT9oTGYJmBCKEWF7m8Hbtnx5mcWwfCoXjAWWqKNKdamEHSeeDrWTig4REghhpB65o6WS4fqdYhduQ9gtn9E",
  "key6": "2DJoGjv8k9UsdcsiUrqWzpWi56PU8QJgmwHFkCfbDWjF2AgYrJxzd8RuCabN45NZPR8UuHGzviKgDHiK5rTyxme3",
  "key7": "2UfRHX2LocGhcx9MQuSmVAsxpMXPnhojKkC9mkYLrQDiTZ6VCTR3MzbUqfn6sECXs25WaPLGLZzj27xNHAnJN1UX",
  "key8": "2mrJsb8nGbDKHMvDtg82EZjEDgUqoemRDbdyYxcrt6GR52nRo3yuaAxUyo1w4x3F6LfqWqwHKMKR7xFUuhMDHhk1",
  "key9": "5J2zKipGquSL2yDZVWVcYiKb3t1jQpssqZXAiSHtnDGGeaLnJVWQNf6raqcLDc1w2BEzmhvZYwRb5HFAMg9zQDGK",
  "key10": "44WJoqaUcQuhacC5B19YFgUsMJQy2uMt1edocJsTeHraC3nBotfYAinXq5HJ2TjLG2QzhNPE4htXgXY78mvvbVh7",
  "key11": "4EY22PTKiWfDzjH9KYGTu9YnbJFRknZLtmnfUqjCZhMQhMEAYScNUXARWTojrviwPer31Ho6rcvHhv5WB4FaCdZw",
  "key12": "5FYNTF5N6VBB37B9T4o9rn44EoHD331nWrqAbHWZuuek95Svv3wLqfWarebZb4RTs4j6AxgMwGWNgK2e2Tu91s4z",
  "key13": "3QjdYYLYo6N2SnQW85qkmi2cQQuscQiJyx2T3mwsFzWHuDtNTbKsr9gEdSToVBuUMRqvjSin9n3WRc3JSd8ftxMV",
  "key14": "3PNmDZQ4uccUq2J7hiASiA9nNptxLyrMPxyEyigpq2mpaFUgvHzWT8P5DicKQus3GPYvmN2AxuwMFisJdUKJRke9",
  "key15": "4EeZaBPFE9WEbEw6tfJgnrRvGV5NL84Gr4hdQJ6xX7TpamW8yZFyetTLQ1rivyJNTkpJQmE7FVD6x4iHCbwjyPz6",
  "key16": "4H8hhnYXEXKfTeV8rFWJnpAAREwKqsvFVrUEPaLe3qoWcemkaiYC3W3dRC9A5R93MHK7N4bzCSU6Z1CC64Y1Luad",
  "key17": "3Lz59hFqsiybRGnKQfuuQoLWRbJKfM9sVPdcVMs3wct8c6Q19NRKhSNWLwQRFAE94J8Pt5Lu285gSnTgfgCg25ZA",
  "key18": "3mGWzbUiZcyNEgH99NyxsPhf34RjwYt2Q9z4Q8HbaXPfjZi2ixBcniT25Zv2iF4AoYF3YCZxbi2DUG1oFdmCbmPH",
  "key19": "5XVB9vWUBWghVqd8Zwp38fo8HDYtdben8Vaqr8bwJcHCXvHRUwUVdPSUMqA4NzTXNWkFJsGnwrnqNApyRBWrjoW4",
  "key20": "2RwfCtFFghAJe8Pi7k6yEHpi7GZMof4QgqqcCuyBXsQkQtE4va6G81LbrNwqvyGw2bB1b6cXEeDsqiQJk8Z4M1fe",
  "key21": "26mckH6gPRyNCPLbAoKyoeUos9q2YjnNPTu3ncF4thsnm51Sa9T4Y2VTsrESsZmRfSRNn2i9z4uexyjsSDkHKSrw",
  "key22": "25fRHV8jhEdwu3wrJMw8pRdiTgzFRjQuxqCN4XJYge2iQCnY3V5T1TfGgfptTtSTzY8QVLyvMysHGERavJidCGEa",
  "key23": "4GeX4e2x5taGST6n1pXFX1usHh6gVdVScxFWd8WBJPu3qB51jQbjuUXUgn86iyp1T2xnQMUzrGBjC91EoZU8fQHa",
  "key24": "YoPDn9hNMeZ543j6oywzPaFNSSZnYLEeGwRXLCxgRJ29HuEZqb6VC8mUXpwouzqEuug5sdH8hHTnjxqAhDTT8KK",
  "key25": "4RjjGzsr1B6BTPbXjR3CmnNQMkdZbVLvYojCvY41dLt26euGBDDD2ygSFsDz86f7phukhbkwmgvSV4zbAWy2q4NN",
  "key26": "3mEJjCvjkvGAQxLYe1xGqNTwEsp6wHYJsAAsQXx9TW2bqzcLoyb3qrShpqdt54iiVBwbAcuz2GBWACthfG7mpGYs",
  "key27": "9qnyTT1gWcfWGzt8TbTa2ShWHAqTWKAbK5nKKKrZHXAhXDNyp9FXZ4qyBEcxfckekX4C8pqd4ibJPB2AFadvUQN",
  "key28": "5t8H7ufZhrA2AAu7syScLRdc32divfxMpWxjizCCgwtMRv28xSB2CcqtzyV1vExhxpYf4PKdWoNjb9tp8QgMiiWM",
  "key29": "342Q33vvWMBhEcPznrgsjzEa4SFNNoFH9Ue65g1y8THvKjEY2GkVMZ2gihSKUUhgQMu9yL9CZyFq5cxGrPJiQtTs",
  "key30": "4HtWuDfQPbB7MgNm9qs4afwLZVoHbrQhUTj3c8Aj2CrQhbbJbmyDLWK4318WdSwaoRN2HG7B81WCizzevR32TkaY",
  "key31": "eJ4xnmDuciGW1CteGnNRvrToAFPkpg3ACrLtjxFJxVWAUf2mbd4haSj5dBqB4NBRD7fFvWbbsfDoRV63FonS85j",
  "key32": "5AgKokJZqbDd26EEuLmGzHRCuV5rt9cGSbWfQzNn8JuKdBy5TRhcriuy73L3E9o947omq8koUjGY3cqndi2w4hKs",
  "key33": "41bqoXdHiSa4pSsDC5j2AxkPMb5QpHQaTVqhi1FudVbyDa3GKyxNQSfgwLVaqnUC9pcsgh8GzoFyqCyB9SqSWBw5",
  "key34": "4FC9ENWjxGAeNdbUfiiaHEXcKfhUBGMs9vocP3cqouBKdcNFMs3UyZfjGwFCJnwJpNsv56jRXVTe3FXxesXWjtm9",
  "key35": "5YiJFDiTKAcGfUVVvWzyenXX1ErwZ1g3t2Q2T7ywKADVhdk6mR2puZdKj2f7paZw9Dc576b8KaCRSifsxMuY8KvY",
  "key36": "XD2jY5dit8zCL7nZ1nx4dKPz9dyAkbqe1XjrM6W7byL1MhjmJjsUS8q6wVMnkuJ2cX3KnEoHhowiZ5NgPmV559g",
  "key37": "47BNXT2vB1Kbr7HpuNr2MmEFyjdYf293Qf4RHZA7tmR1VB5hW8yjNwxegtcvgWKkmq2yeN31HfRjgowfebaaeF3A",
  "key38": "39bd2mqnvVmFJvNgPvr19s184jZfVQ8tn5GGMbhZTqjNPoABtjCFYMVQH4DcxhdsQH3BpuvHAFeEdLo1PokdVYHU"
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
