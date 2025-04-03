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
    "3pFCvGy8Y9cmPugWKnwM5nTJdhKCaLFRzRL1MkfK39bU3mRfUp3UrwJKo5mUmKHVVDKg6pB8esDz8wdbSwZcD6z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYwTMWVSu2XobXkYCkk4GRW8ummrNKtQQRcAHQxQJnN5qaiW9mFvFi2BBHY6vxwxAGhZJJCUNP2pQwLhj7yj3VV",
  "key1": "36a9brZZe37j7qNnBjgUfgcCvKL5mzuAEfusQ9fPCzgWxX7ryG6ukddqdfCd7aHcEoRP4GHvihUuAsKDFid7GDzA",
  "key2": "N1LosBf7xZan9QoVjVxmzqxuxwreKY511MSYYiAaDUJFqMxvF81BQYBNQwPftdiPmZWdCoUksuJNFYMpBdnrWGe",
  "key3": "2zAbfWpTDnAQeagEKD77yEFEpoxjgc5CMJwMfNw9AwSeX3t7ZkenezceQVDnwCxn8VYGM1JznSFfBCZM5j9WtUec",
  "key4": "9kn6cecnTiCsad7T9wxaJeKqfq7xoe4gxSHhPqdAzsAqxMViRRLZ32YawcytF6urWaAEJ1snpSuDd35F2di6toi",
  "key5": "SjuBDM1jZZ6FZriF6xPqAi1tTnmjyGuZruCwkHpRFVQjUHxbDmmScHWFvrYEdrusQAp8pNTBckKbEa8jLHJwFyi",
  "key6": "4ZXbuhr6Pf35AM28DueuozS1AQV3eW1vcZrwgEF3ypLetGK9txV4ZS3BbuYTCZ23MbyTU37txMQvBdr79Meg6tBQ",
  "key7": "45jjzb7kzewWvoFzXuETuQzyQi2XBZ3A2bburkowR9UsNG5WC9N8MuuhsEJcN5UndYbxCWDj8a2M8DwrVZZ8zrFm",
  "key8": "SNB9PUgY7Tr4icbvjjr7ky2uXCWtABuCorCxzLk7k9sK2LDC3y6omMKUT7xvV79xRLktAAL1gDjDumBv8KrQcei",
  "key9": "57QJV3zfnLw1BdWExzVAwqcTPx6LdNumRfMSiuE1cbwkAkEnNuVkRUYwdj8HDP5TJcZDUMgisDCZXCjkjXPNMm6N",
  "key10": "5in4hR4Va9XKNnvq56enEzBdVWfwRWVFNQtgLWZ3DKyDNycK58d9koE1jJSVSbMEBnfQx2jDCCJKKN1BA1oUdTrn",
  "key11": "jGxUpTn2JwCuogCmMXDbyJ9NQaS7GYQZhTwH8Y15yuF1FW1JdcW3qcn2bzJ1zkmjiM3uMMugGGQhK9yWknFM9CQ",
  "key12": "3pwUPFNz71tndvwazPosKZD3sivNdU3TsojyphML3eP1i3oCd5r84gvDTe5tESVW7ZwtaMMPo3h3X83CUgvdHf3h",
  "key13": "18eqdHLsJfaqawjGuGayeFg8gwcrhjegj55ZGtZUsRweFaTHUqER8xFqr7rY1dBTA5tKmXerNxLcSNezavshCfn",
  "key14": "3RMAcJ3U3yPVktaASWJZhC28nCbMBjPzeJnMHbPCe9w3eSzKYp4oSsQssYV6gwgByd9AD2ai3TURnNiLzo2N57vN",
  "key15": "yeSysmW7AjkC4GoKfNzN2cQKieDrFMvawVTBJsnrMydn2pFEUYYKSWGC1RSnwtiZfa2NLQ8PND8aREatdQiR3DX",
  "key16": "4jBvAi9uNuTuS6x9n1x48pV2tdUq9GCWFBCYB49KywvkgHirtfQXuWJQuv6dpwYHcrpjyg3j7S1GQiE7urhEahgN",
  "key17": "2zJqUfV52ZMsuPi25cUUBW7MZkHRV6cJynq4Un4WvP8veFxVZNzLGXJpjg3ALDNswseAH9Kk1GrbzpdkTLZLPhm1",
  "key18": "4GmLjktD77eTQPPBMjRohB8fbytWRsvsMHZ8CAdkxtqAtktYqBznGokwAzGuuSmLovTb8WCnTqDYLZFQ2e6okHLe",
  "key19": "5nAihNc9XicnE8Dx7G4644cE16ddjzJtVMFbJQS6yC3ARgCMWPf9Faqt7kgVZr4wDV15iqeKJTqZA1Z3pkU3Ce74",
  "key20": "4WCvKhLij8oKFNDiZsFxQYdmwWnjePKPx2dDKnPSr6FatAftUd5XKsaRzQCKrXyYkCnoWN2hvLsevT7Krc78Qx42",
  "key21": "Eq48LQH69JAQUzv1zSvaJRybrFY5svGT7SNtheCrmoHcBvR3Jmjvf5LuiaRzJrwCyoeS4SF31wCkjQ8djUteFvB",
  "key22": "57Ar4U85LeQRbo6GJ5tDzKEe6a7YqbpaF1aF2KiB1RURtkncXbbsFsdeCWdjMA3bZoGRmAnBFutHVpGMKEkqLgJq",
  "key23": "5n7Nxm3ow8tah9Y6QRjsbJZ7quAtncVyfJxjuPyATdSkqvswWBeFpeAxw8wgdSHqhYmPgWsLUsNU1KkZnL4xZgjC",
  "key24": "5GcZHrA7ftgcFgQBpi72jFV5wTSJRRQST9na51TT8BtLbTDbEN93G81smfvi8ZYPPXFPBs45BQNdBusWodH9rP9N",
  "key25": "57fw7Fc94aiVLF7aSCcTpfkTujKLEHDqeukqVc4vAbPay1w4id9qPE6gBQgGLaoLd84mfYGY6nJ69dTYeQS6tS74",
  "key26": "4nMinSDWhw3LN84KAz9Dc4demHZkHaJ3VUPzJxYYecPW5ZwxhUoqgtikpn5PD5jcwEy5Cm7Jp3jNPsFSYY8zoAmU",
  "key27": "4eeNCjrionT9HT7hR753kQfi5DLKUT2Bu1H7crgWbemsVZyvowtv6AhY2ojcKMkTuwfZVUkSLtdKpsmJXhRn7eh8",
  "key28": "SXsKRYQ5nKbg6Syobc5xLn3y4ao6yBtsVkpSoqcP4QqUChgXUfPD3WT3p5D7iLnyzcddsLZC1HbnTYtSXXjzvhU",
  "key29": "ouPujgUeqazbtdVE5LpmUGLpow7im13PCzeyL9t8w96fRbpmVhim7rtVVX7g8ejRWGFFu9fbQMFX7i44gjuCmRX",
  "key30": "5UXdd2S9QEzFnXNZ1NQd3KXSsVCExeunGm6u9udLj5FypSaTeB8sV46XSsrKxxqoFBx3rZ7iFxx3T6RzDS7wDEHm",
  "key31": "XEUEMRRXK7iRbcL3DYshCsrzbZo6HwaeKuJjpLhmdno9tNo5GQndzz67dsGNguYGH2Spt6yJkeRYSSZZKGX1Eho",
  "key32": "4JHTdA3eGNc26Dg5UHM1fxSZgyAz9V7A2jzuVCAVg1edR8zBAd7LmWpbCBwRyPCbPLU5nD23zq1L6zLepQwibTU9",
  "key33": "cYwPHTrFQTDRvwpf4hyTcT8BBdXJnRMK9Z5MtGDPbSMiA5EDYVAAgDdqkqAURKPd6HdRGP4JSSzzx9ZkVZ3ESfD",
  "key34": "CNe3ZYnzN9pAJBCDEhDRdBZeyGSKvuyFKMnYwmByZ87mZ7T1Xy1fcvvbGzLwGHMdd9GZyisWXHFYQRfzx3M7Aoz",
  "key35": "4zHR6H8nx2Fk4aFvYeqE6VcnZVj3CBGpBHQ3b2MM5rpHbQC6a57H6iMTd5SK3nTzaap33BdhtNym4yq8ufbkRv6g",
  "key36": "42rJP6dUe9einT3rsd4oCMd1LarYVYu5yFrFYHQTF3KmghAM4c8GfxFxeugvxxE5xb2pB9yguwJdKeWUojGGUW51",
  "key37": "2P8WqV7Rki8rE1QU2uoNFMxdyKp3bPahti2MFkeqykp7RX5wJ3Gqp1gEFf1s15NPnVP3h4UQmeJ5Gexx6QyxuiHs",
  "key38": "5pH59r3r5mNPf2mhJVhafY1oCcCQZutvPP6ZwvYES5tcM5joFyvJoa3ktZVJhuQ68G8UHhKX5Jbi98shXFt5jGoH",
  "key39": "26fmqwgZGczCMfej4GNpmGhC1j7NHL2jpuP2TYwaSoWfi37txTjXxFTCDEkAkCQYPqzWuEbJcr9T4jDapscMX3Po",
  "key40": "vETT28Ehxa7zE7o6pbaWVdKtJ8XKjpnFoM5wTx4cTe8nYUxbm3ZEJH7KZQqMSVfKouEnkCBcJu8ApG7Y3hZ7QTv",
  "key41": "1HAQS8D7uardi7Hp5bR8tmrx5f6hpJVdxMUTiR3dVUNaXMfzuXHBVAN91wdBc6F2hbeRqpSHt5fFqb2brshuoEE"
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
