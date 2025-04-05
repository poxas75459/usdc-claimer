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
    "Eo82GMwiEn2Fnq2zCz3KVKnnrFFSdJYco4XL25j65YJpBSK1SwoPGTTLz2C41ppnWSK2y5K2zRH4kLRhX96dKnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCrCH4w3oJjLsM1JC1n3hdSZT6pG2cVHAPzCojb96xTfPmwGGT5y1wxT3hr9tHjm3nA8QrVLmQm7ALkuY5aQatd",
  "key1": "61io5C3eR8YUtdQGM9RhfbzP5xwZ3pFNcn7L2LP2A3n5snccC71Q6vWK4yzwnLh6AxoXaYYuabeZGGsbixvFhL7M",
  "key2": "4mYLF3z571hdKZbD6y4WKhF7WF9JoCmJVeXLYFQm8dUK34G7vQDC8psfb1kyHSqZk1WD4X8Do5vzUcvUFjYab79M",
  "key3": "fhV5bMHmZXdFrp6ohWQckovMEDVL6S57rQhHe4eKQHzX5L1mqoaGcJVE9MerAHbK7Wq5XvLQ3sJ5NHJ7GJjpGgJ",
  "key4": "2V2hi2gj3WSY3EHb4r8CSQYa893obMNgypfjUMzhSas4q66Mx5eVnpD5DNABGQ9dytui2Lm3xqAGFfykvW2KC9Nr",
  "key5": "24G9vrpM6NKVgQF5FG5BEzzVC7bd8oPMGkJfXkDewt7Pu871SrxFYY9sE6XaQApWysV7iKkCszF4mow8x53rytxn",
  "key6": "5H5zzQnPz2oda4jx25mJ7gR6KpoYpPFetMf37eueQWWAy2jMAh4Htc9VJuANWHrQ3YnVUzj7U33cWer1XgaKtSie",
  "key7": "3pSWv4aoVLAb9AUjzvBEKyBZJWfWus3Z3ychCytRAHoJdrMn69nAjCqYjRZNMksCKNcpMFLDxy71yq6y86txArKu",
  "key8": "53Ee2ibAB84AaT1EWUfbKdZspFWP1CWhbMPBw9cRh5BszjJiSB6Q6XGmbThkbjTG2C6UmtnrvDfEFJFdUCPXugdY",
  "key9": "2eyF4TDAxJSq3TFZ89mjYiidBYELXSLv18vqp779YZdzFxM3fRLB38iqvgbE1B8DgBNTyMX82N2muzxPBTKj1v68",
  "key10": "3PzpknowdmK5KrXLZJm9Tok5aigT4CSgG9Fei78bHg8dVCSEYucLCRNB1uQ2To8zK7FV7f2Cri9W5Q5krw3FqjrA",
  "key11": "4yhqZeg1w7qsmg1inooW8aeKKQTwvBFLuSfsgXifhJF79aRWoXqyyzKrBnTrcrD1zgipz2hbRa67aESZmy8HwuRY",
  "key12": "2yQ6c5qKebPXNNCYwhW6KpPhQx9xnw5AMND5n8b22Xk7tD4NmkQjoSpHqw3T3wVpt2VfhZb5r5mL83swPbveUEsU",
  "key13": "TFAEsee9t7jkNigdUi9PCfpmu9DD6F1YDBwLgxuwujBTmYsnDdfwtJZwgoZv4cs9mudeQWEmdT4Q5vBFDTphVjV",
  "key14": "421cMawSrETwJpW3gfKrTrBEkRCcqy8YQLwntf74zGQS9Ah9Rhh6tFAW6cJvTSg6m2eJpBRhCs92b3fACeU89LP4",
  "key15": "2P29quGn1zm4pkGpFhvxN2fp29rWAAEawrTGwKdUSYjz5iCkh9mxe6RgQhAqK2MmDRAitQekgK9xx3MQUXFupWvZ",
  "key16": "5SgpCrBZGVLKdU1wXsA8KLFb7q6LN6KC1VKBmhJHs8jwyEXPBDXexaEadimcn5NjmZayavMEZqf9iB8Fjw4vzTve",
  "key17": "5zCUHL8esoYkxAvhpPRRCgDieKLbryacxxHeNdYDas6H1kzRAgphEwYVHiHCMhwq4VpsSyDweJVQpyYPs8futcKy",
  "key18": "5Q3ddkxnhct4w7tYoVo1kAtEDKv5eicKEPv1c9HzHZpPGspYLPyf79bd1pteGjRXD1FjTTmungEbNqXrx7xYFuSb",
  "key19": "4GKMfNmnNgZgDcXyTMtnmpCRBVt2FokNkgYXYodgRUAfGVjNiWxPpquPyKcTVxQxR9qtZXZijnMeM6T4Rb8kSNpQ",
  "key20": "5oSWepnViGfb5azNgB1MbT4P6t9uwF5Mw5vuLm8odBXgNfaNnsuovz31P2HvujmUk7FLh7AMdURysbizFKCTZXDE",
  "key21": "NVFfcZ3K26xFsugxCVj1TDb939i7ZjUqDJDGsQBiCM9rxC4C7MdmsNpm5eX5r4PELu5pgzbSiiMD5Rs2oNTpyTt",
  "key22": "4eSZdcARqTEc2uSra38ghSo7fDyGBRnXCwPFaxXsmuds1dQj6UDDReExq3NJ9PjpXxzyXiTDWyA8CHpPyqwdqX8x",
  "key23": "4Q2KHoUiZG2rKwgg4PSp3WKDfQV34a8byXzbzfcr19qr36bzvnASyqC6aKJFygCiv64cFdMqceuP8tYSyku8mnoR",
  "key24": "4uv3mzGDH6eQHhR93J6wRDLovvqA39jhPELePTXg1NC5d7KttbjKrphokKFRF1uCngz2xRbiZ9V59ph3h7VDwrYA",
  "key25": "47R5nHEBeN6by8hRsxP4WZA74uShkRTtvZ9GaG4X8s56YCUyeyX6ynHarnrH85UBwBd2h5AunL9omwGw79cD9BMc",
  "key26": "5u43KRzxVwAH86hgtc1fqcxhmUxYDaZLMBbFpQPWHaKG4pHjmqP9uELdT3tD47ngsvgYbonZKANdRSrRCgmQegUb",
  "key27": "2fHR3BRrQLFMqBUusYFA929T6xedspyCMYtrZXBqyc3qp5Z55y2rG2B6epmPZPEK9jXRkcpg6sR4RB3DU6mUfJFB",
  "key28": "5Ga5kMkastyhUPv1VfcZRBAHsRxD4FiRDafLzfJ5So7FrryD5bZtAvwxPqYqZPvrxrgFb2tpP8DsxziUPCqhcNmq",
  "key29": "36viHQvtHMLpEYmns9EDfnxJenwfoZAi6abnTncPCgZ9KTpMNy31cEfHnHkvKxC2tZw9ChTwKg9v56ayBB7RxBw",
  "key30": "65cdDayREm7cHVAM2b6biZGHGH49BSXwDH9rnqiJVfbaJhib7m5Z5NjMBKBpnVH9Lc4LEk97VzQBZB8LVDLzug92",
  "key31": "3MMBRUcQ1UYC9k1SszyPcvJofzo7iqRo33u8Q5PvcJSzrCV2jwnss7PbXDjjwJLNCKvSYGAQkthgBusxxVjZ7FXo",
  "key32": "6259ySgfbhk6VmC3MFffny8DCDgpGLqe2YxDXY8FiRoxBATGjvmj2jVPyn1CPmJPRQCFBVkZyyHvSJ4u6YAN11hw",
  "key33": "23SBK3usPJqD97kxueoD3ApYQb5ej4KKapyhgxX63nF6H6gWLHT1pHRvoMpF5CQpWumKASza2eDjop37SmsUjZEv",
  "key34": "5MDTyxruYqBnmSdzKTVn6JpuQTdaMaKoh6XNMUSEtSBm3nb3CYpXUGdFS4RNCNJMDaSwi9GnQET7aN3VWbANwLeS",
  "key35": "2gaFAzgJGQpjGDv8hEurt1aBRAYS2Yg9soNNhZT9fhShgC1okvm2y5JHV4QQ5SnGfp56HUG2W2xJJDU6BBXmpCEr",
  "key36": "hD5rZLnyDzgSsKCtdpheauxHFPrtXXUixt4iqYnVv4f7nAo12rnH9rqQz9c9XJjTdkJ3Q3z9LpL3ajjSjh8bbvo",
  "key37": "26PvAEz6TZQxWgsYYwYpUaKZA9coQxM7wUFQnwjukbzz5xRB7ZkwrNyuyC53qumWd7mkQgP7tusKGtceyJBvMKV4",
  "key38": "5cCuKMxcWctt17zsneT33cuuodeTJepBvdhW7GKspXqpxNZ21t8XZCGU4Pe8HGZsbEH42RcgoeJN5g33WmN3LYA",
  "key39": "3qmxZaE3wKgjVXqKCJwRKNwoh5Xsqzt76QvFnvrZCvpa5KztmnsLsCPykpvR1De7FEWzir9yaEyYsKjZeob4dhvc",
  "key40": "27tMtwxgsAtvvNwxoKmMGc82LpFrAAbBFpA4kBGfq23i6YThHUuKfYxLbXGsZWRPho4yXoTRQWrrteXnaH1asUmY",
  "key41": "2rk97bLKAaGoKjuxNRSJfwysJufmUKPAsts35hhWWUqoY7sgaCKpn1xXXGFXpFbS4wuisD9sDXmKK74n6RvcBvzY"
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
