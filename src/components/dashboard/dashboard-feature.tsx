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
    "2nKiNMw7Vb9Tw7X8BGMBFtT6UEFVcuCyLzAzUBoMkNdaQqq8xs9MdhtL6qy4dRCrDSteLR1W8ZGJitQJSk9VNRd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xhTgk7a6Sb66Nn4XR4YHNARY7UQK7NyhsUM9LukhjcFCiajrgUUhXXdqRkzs4uCdtUm7o2dZh4BBpPAaXaA5DCR",
  "key1": "4wPkE3WckvXx1QMFUR7Tdbbh5Ch6AUzyLczPwx476bQ5wzsDQ8SxybA9wzobQb6CGj8P8eVjwL8duqL4bzZLy9FL",
  "key2": "MKtF7rYLsBJEStQNDm9SniMggfwFtbcFzJFCstvhLiWa8mhAwtSY5bsxRNLcw9sC7agWRqmED2XyzwapG5waC9v",
  "key3": "2NNYfX1V1w6A9UvHUdAkUG2PyKPMcPyPZiTf6bHWLfDhEWrixEUzGh5mFhADeRaD4AX8Us3CqDisFTTb7JEG9E48",
  "key4": "5xV92M5p8coKqr5uWYmz8trgAP3Dh7vGkmFVmhjbjMfMKqprGCW2m94R93ENoawzTimP6sYSV9WQzScrn9cMhAwj",
  "key5": "2M8v4WbU2QEJBt7ooEVXyJeoyVQyK4hYYdhiDmhQ8e3c5gLvgGjjYEyDzyEVZLMNfZgJCLpNJDhA54NVr9Crp37H",
  "key6": "4RAypXb3gSgHLa7M8HBNxxDagJa2fdGEVHJNUNzZXtAcDhPhptBtQnZWMVBHwYfEnrEmENNWPN1Gzy5oXQDRTYKL",
  "key7": "U65XvVRPLjnqtizVaZpsyQEb4bNgzEdRFcW9vyaqhU2sWDGUGw1GEQxmezfpoCksdYojfJKTaYuLgeataJdiH82",
  "key8": "fCfcF56Hx1EEpqfNXNPi9Zz79DotNeLxm5hubLtgEL8a5fYRe23DjN4YqxWFHiDB9nKdpXzARQSVKKKUyBcUPfe",
  "key9": "3CogoKLrjAWVDjPRRc2eEQHjbmPFckXnvozZGDVcMEMGSPL41ySot9ToDjGypuy7HKVBdA2zSQbvWsLUJp6xQ6eg",
  "key10": "2BbcCzpMmD5dtK8Tqvi9NQDMh6Y3F3gSW5DGkLGX7V3EHuXM1RCLEdnqeeh5aH1pA2S33pdp45qqrasdFFfbXtyF",
  "key11": "2SEMLtw35HJEoedzE4DiknQ7hLn8irHmKR6nHtechavX5sy8ig7FLyiPWeQ3obK9VrRsBK5CcJ6n99K94aXaNTY9",
  "key12": "2ywsSWHQzQDxkbKsD6wZyoZJgXTLowKQMcxxfnfcKaSF52FxMwKF89LueR9yFZcccExashUXAu5aZRLSLgNUtaP6",
  "key13": "7n86CRZojEiuM1w93B3DENjCTAxV3fRN4FRdvWUhV8hAUUAuycE2RQo6HoeY8yYTiuyVqhvJGFLLGXuMpBk4F5Z",
  "key14": "5jf21vReYtmni69JDTNwKTeXnFjeyoArGRBiHxmfz7qdpvtDFEzAqjz173fCAJsukyYks3oZXWkkjBmCQz6JJVwS",
  "key15": "4jCrZbxJfZpc71mYKmSwQwAKmyrYZMzaafEqyPr9BSqMNjryY6SFg6X2tpHrdt9eVpQAfuSjMCMsuPydL2zEi4Fc",
  "key16": "67gQW2qxAAgiHhBDoPUhneduueejx1psw2943NgPb7mBiTifhuiFkjSEhCrGZbkZBiEAhUXWJGtbPoqPwWeoH1nQ",
  "key17": "3k1T5Qm6tkMcPE5eEf9tHdeUtKuoa3VEv6geCAJuL52qDFuVKqvyF9Eo8K2PHyZz4WtBHkkW8XnRjULPBq6FcPcm",
  "key18": "2CXo2XKFxkrRzmcsszQVvDy2B7j3H6vpkMZ6WykAPo6MYoy1Rj6SQi4VRFLiAGwvyUMa4ZABHBKWCkyqgM62o6GM",
  "key19": "55mXQZwxGsHhosfGwJ4CWLKqucW2tojEeU5SKowUwVN91rZi7F7eVVf8czwwfkLoq5WCxamW23iSRGrCvmCHRCDQ",
  "key20": "3b3WRBPg4Bw9spq8LFLYwdsWab7pXxiF2RxLtpEbLHoVQRZQngwTi3QxfGC8yiugwpEjFYhZidx6EF8Ryq8T5Wes",
  "key21": "2qijiFJ3voTrY1w9H6nbHsGSw8fNcQfgRoNy9kTMNTcZ3BHtcJpQAn7toDv26mpVzMdxt5Lkaeo48N7NxR4qFfN8",
  "key22": "2G2Jq3Cho1XxRLAURf2vMZYC1JfPzMPfddomHFXNg52yJfgPDd2w3SJKV8v5cU9PVRBKZDYuWJ5TApYBoAF7539k",
  "key23": "3uhQ7WKuvGvJ2bRdn93bgwyFoidFLzoiqHvpDiZLdTMtwKaTBDqarQZ3wbYN6vCpXRzc5EsPhVxW1hxE2LL4rz5J",
  "key24": "bXL1aX7jX3qTrtkKgQYR19tLp9RDmEjXMyXt7EA9Y4RFYLkxZk9zSEtC6RH17tDEq8qgGEEGBpbf5ASJirjKQ3H",
  "key25": "m3xY2ganBs5NHNnq1bqrd62LbXHhvAfcfyz7bg92jzBMtviju7Pm6Mou8VatKrVPYQoYVPBtrzH3i9SqazcuEgA",
  "key26": "2CaWN6duMhctB5UbYJDRFiLpz23cwyCZYkxV2UFqvxtMx1s2hpkbRxCaEUh3tQQy1nRDpoQAWGAAbxDyyuXK8Cnb",
  "key27": "3X7NiMymzqqmEKWD53xHSS4qtt8EGQDJTHeHo4wLY759kGdZXLy1DUxtcpw6hcebUqBzVKQJVC3MtemRSo4NmWYg",
  "key28": "27qwvpLU18THxuS78JpkoMQLhdpFFzy27ftdNSWC8wc9ueTy7U7mzKkyMRbJE6LEmEzzjg134DFtL34DKumiPitU",
  "key29": "7hcB9FEjqmhqHyRhzNDpCqEh8QxKzkkAPt1hvzPbqw67waMaXqNDmn6DwoQVv57honP5PmYeKLEAEngYjy33yvj",
  "key30": "NexYj4LG1Zs13PyAzELBsHZenGs2y6WJg7zaJihiYpMkCnMrponXvfKbDBnF9TaKN7YziW5T4CPz2dcb5oXX616",
  "key31": "5d37TDqjDUckhUZge8DJNyeqnQmT72RKshakXr5R4SLmX3VYB4pyksMobhCmuszAezS8s7BZnsijsHZgMeZYhqpi",
  "key32": "41KwnndtHSq6cbMK98WRFiwo5bcthdn2FeNsJLcm95GW7PBPv5F5bBr61MC4DzTdzPqVnwD6eNFknAUUDH97emUH",
  "key33": "2xDMUDro1LEMREvTCFx99TbV3jVknmBP3KmmuJHNBBAzWafnPnMuy3k6mQsX7asJoppYf3BNWNdgabY1rGQkxd7n",
  "key34": "3BL8kW7UZ3GR8Nitaq7KkRNQwyJb55XXG4rtnhXjZkiStUiZsxaCDwK9CKh261SjcfseS7kC2cgeBeup1CcwyNTY",
  "key35": "44CEqL8jsMHSLfLUJUJohENZ6eXs11MRXuZfNQNxV3SKBMrexHk49EiN9BcDthmy1zLdJS4Fnp9ykAPGVyu44ZTu",
  "key36": "2MzWZBNxa6J7YZN66uQaBfPeuLXnbv7FziLQ71G56kaobuCoQy88h3zRRnJ9UtpdnqE7USn98BBGTun4ikqwtM8J",
  "key37": "3jyz1TgwouSUtWL2DmZQXsgokh7M1Pmwu5CmwpEp9Qes5dpG5ZfAvwTtTz6tTCZfSVLYxRvCTbAwG25ZWn7k54pr",
  "key38": "2m1CdTYFkKTC3gngfYqkS48CQhm5nCFXbFDK33EqMfa5Kenz21QCGeMYPGLCy3cRfFQNGPvuPMG6CUzcKjLruZXj",
  "key39": "5EzkwqtHULNjqonPr49c1d3JHHZnMXq7xje1dY3m9UoHNsNvVKjsXgmJZvtrd3VtniV1gZUM5LQDWnVCLkeK3nNe",
  "key40": "4Tve9xEziSSWDChtVmTJ2QDmUo22vgvdaEowWVgmWA5ZiNvHtGdv2gUH9axbxwnP8frj835z1jb2UKtvtXLJzaUm",
  "key41": "3wwA8ZTPiD3eCE2SLe7w68mugdGX2wJh9bc5jk6wEUBbAFZ3viV97oJYMJcj1Jd6GxmTtpax7sY7ssFEeTXUcYXy"
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
