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
    "5Wz3aFz8tTPYsGTiFyVNC58AB6ZGdNnS43u8WzDTR26L9JZF8xHHZaKxZt2hrZvnbQUFnrPZ88c5zccJceQvtkXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azUQ2qjbTvZStv1R8zwPhAE3WECsYg1SQTUtXkkPwGSRRBKjsnxtx16cn9VJSJmV7FqmURYxHjsaAhZZD1FC8ee",
  "key1": "2LaQhATW9X9UNV2pQFmVPFWWbXnPZQKkfAdj5b77e7W761L6B3o1ituQAtdJtKuLdTHmB9DEJyzNip8pa4b3Kakd",
  "key2": "2bctUr5jLpPpG4jWqud65QkoguBy7uv8yccEYt2pfECCJEKYTo8NKnqsJVcaoaSSqe134ZS4ouih2tzTMNXyKwum",
  "key3": "2xJNtte6cdqpk9EvXsGKYjzn5kYWbiVp7KkDRnHyfw7aY5erZwXUZx8YjLz2GM2UNkth38rTQT8S2MqVSdUW3ZSy",
  "key4": "63bQobd4viQEuCGfouR6QAUiRqucTp4XfAPbyevUmht2SNzLcoyXgkGnpr3FaBcNbrN4wepFasAVmMWbWyvKi3qR",
  "key5": "2kMJy6b4xoryXR3D2fcnv3YAM6DjRkAkVJHQr6n7e2ZUE9c4mgQLvZAN9bQewKcwJkmawmz6UVUFtfLCmzVsCLb4",
  "key6": "2Dk7h1a8nn3jMyqDKsNYQcvDnTLP12mix9vdUibUhgHPPC53UWVMy33jx4hZVeo5qhQchdsGVACPd9vQX2TUaYSz",
  "key7": "3R1DQo97JDPtmVnPGX56rcKSnShTNK6jKXVFyMCafL4p1rQ7JBdLsrUPY7a716RcS6d67ML2HBXBTFgizzu6BJbu",
  "key8": "48EyfFtrTqVujELA7KzKUBoSG1agayitjmP1C9dryUb2H8jt1kZty52mvDn59iagGR9uQHqB6cduFkomtiN5X7Vd",
  "key9": "5MjjHfV4BYbN9W31wpHdbn7UVGARsHguC6Aco2id86PzJ445Kt5pBDV4huMhAr937kV2aH7SFiMiMw66hAc71Q6L",
  "key10": "62o9MXZLTvEuNSff2cRTcNcuqZk9bugAA7wm3FBnG7sKgSu1b8TtNn6z8newuiJV3x6kBAbkqjHjQbY6S3m687wK",
  "key11": "52WWUUjyYkbTU5SLS97cZJDX7onk1Z8iG5Y5h9XU2gKuGGR5aTY3epJTAMk6bC4SM3GxBQJizbmQSSHp9PyHeRXV",
  "key12": "5asJyg2iP3NjkG4G75fZpeMezjmC5cU6hdNNPRwr7HZFeU6ETH737amPzC5pTMx6tgFYX3cqrVQNndD3pK8k76b3",
  "key13": "4MXdJikpchUsmNMBU1AvrLdqvvpNQmdwXUyspyyBcjt4K7hysQ8QPXWjdiajvn93kxzuoi11sYQxxLaUnLzMsZcB",
  "key14": "2oB1kP71V5dsyN8i6E4ghdLrLwLw7PRucQwcYpdpmeuUMeyq1CzmQSNGGnBeoVnQY1xzecsqZtfrUGfiB9VWpgRn",
  "key15": "4yj6DsnHVohJpt2Qvy1AvsySBoafKN17qo6upDAt7wme564wXAnpthJwAL5DxXA5kxQF6yYnDvLR9qdrHU3RzSxY",
  "key16": "3PAavtwpKGykJQxFNEUXuUv5pyKEjV5guipXfCiEbWy528Vs4cxPjBr2rxfb6LFjUZMFzxvibRX8c9zmeoHHXtic",
  "key17": "28svjNLEDiL1Dq6PahtNkHnxQBBcjzqrFk6QZTL3ehteQpbSURH4Tqp5zkyDtzYKJGjdCAGoLByZ1YyGaLGEtJHm",
  "key18": "29PYcKNBn6JCwF4dAXQgNS2bAy624Xrjpghp3F7iM1kofcS9xdrwNByNhwSSrhf915EuvKAp7e1834B1Nd2xPXFE",
  "key19": "89RGRLkrUsGuVFmavK8ErYiE5zr2HykVU4DwpWQoU546EXabw45K1xrnGoZX7scYtvRXRdKVUt1MCJBSXzr8Fs8",
  "key20": "3hAx4JPTm1qEVP1LQbtZRN1F4WsjbhXmQrnWr2LfobELmzwngoPyuHehvuB4DXceXEym64SY8sWMj99sTB2q8Q3m",
  "key21": "3ygvJ7tWxQFTYVKu4Nq6Wjdb4ok2SCyEfNzaueEpQVmA9a6UQjGdgfJHfttwBxNgw7Frot4yMYkyFf7uqvfA4pJA",
  "key22": "3pHcjdNRgXZVL9VgPFyJMHUFk2iaw7CT2Bdaw5ya17faUS8JB4LnH8mWythiQsCZ3LPxW1Cnzer4s4SQAfGrMGtM",
  "key23": "2j8WHPU4YZ1T756scZJotxKb9kSxxr8QDwjoULHZg1yj1KdvUyng9x5k7k1LWGT4LcktU62f9cFEhhNLpVF6ik68",
  "key24": "4aFq5PEC9m3NMNzQBsVvyhxVKFZJ5Nrjhp6nVoqsFJLEhD8cmmU15gsTSg79218KoaLHTCFWoLA1BUM9zXiBUUBa",
  "key25": "9L1ePgN2hLNNGnRRKTtfpfZE48KjiYXi4F8jqwuAZ5MKqggLWmFz3PhMcJbh3Myf7KfY4mYS6uuFXzgfofDqz6Q",
  "key26": "NdToP8WMoCKCjQahUammHXdSEB1R61RNpfs1Amp1LogwhzeVjoxAPeB6Yy5W75arymAp55zeU5otcYYiq9pB65c",
  "key27": "4UgqmEp83qfJZFRbWJSTm8fEfQfQdoFUYb6XX6h7gc33mGxKXdLpu7GWiQFMegeUBN6op1gi1J1zDRP8k55T1mkA",
  "key28": "4JnCjLkQLN2g6LH9RA4inbPEZsi2D3WBtijeFyz9bM1WMbrrGRYwDzC9k4vVEZ6nQFKEPeJbKAgvHqka8KWRYePj",
  "key29": "5scTPPNU4vd3n5Kvq51VyekP8SbWrMWRp96iwqvPmxUqVUorxB1yh5d9HApvMNv9Acy7Keq8BnYhZ6bhDNxhB7qH",
  "key30": "29guKsuaPfJ82TjdYvPSAawFNVrDssCmRQ2CFQ83mrPYPx49VFPXbWVp5ifsk3tXsGaekK1hbZzwhvDWrpCkV7QG",
  "key31": "3LZCk69jGWq9kTvRLsPKdk1mJDq5njamUPge2FGfZa6Xbq728D6CSsLqCtDyuw7jS34u3JSfSEdaqcLh9NGP3QxB"
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
