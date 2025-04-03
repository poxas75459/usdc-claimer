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
    "sv55nLZzDpiYEpqmDRMeCGD8qmEnvsjR7n5EK24b1p2R5Hs2RQEtUnF5bJRXaJjTKSKjpmzVq59QnMiSvEbun2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KtMETfyagezQhwmA5nUacGw6pKyd9MbxRSjoyecZTj35uqFgV2o5oHaojDpEcrNn9Nr1mMtWSDXMLs2taRo8apb",
  "key1": "4zcaydU8ijMPXejrGQhrHdNr1WFdQ1moMcfqgPcLQpKiwHcX1JM7a5pgrqtpD3eU9CUPu6fEZQKmacV3MS9MjXsp",
  "key2": "3UPbQdby8mHcuokNrX1mkraYq28qa5g4hTNMmgxQ7gr83sMmKTLwGUxesTt4Bvr499ymiQvU3HtSwEEzY2MW8aJ2",
  "key3": "3EsvkCYSnvEqF6WMCWwVHgR7KgGfNpmaoMA8p3Hb8GUmzY44Ute5vcY1GNauLgxSx8zhMW7QFUkzCdSgfmzjFdvE",
  "key4": "5eSSCvhc9gEcfAzHhJxnJZpaDftj58cwR2KhZ9vVNzZvZTxU6AFCdMX3obQdytK8V6CqNsi2V5xrMwdyEAf9dLN7",
  "key5": "53UF7xsm2x7oudkGHA5AXGo2FJwg7xduwzvzp3wqfpz7SLSqSn6YK8n1pbDLZijpQx5B8GrbBSLbQ6mrjFtCQbrA",
  "key6": "tWFFzsHKAaDWkbLWsdg4bj25Q94i6khwsGq5bRQns8CnP4ESKfa3wbFLZjVTTCSUHjS9rHgu49qKefK1rkUCSfu",
  "key7": "3ET4cdWUAjFTanEoGQoKKQ1xbpUcdAJj7MqGkNHbUZ7jyaBndr81TDQQWsjQDNrpjeZKezxbcUj1qqrYHNMhHZBe",
  "key8": "5mmf5bAa5Efah3E5BoAhUUvKuc4w5TQqf7KRAWgqvb4KM9NaLqi8HQQr3bQb7UgBMCZVPKVpW93W7EwVCKzUnS7r",
  "key9": "MxWCRKpnWbx2AyafG1NSwef4B9dz6qbwHfQkhxMQc3UKDf2SiuuPQwHzirS59whUn5GoavtUghRND493QuwnF3w",
  "key10": "3zfZP6Kg5LGioQwPSAt4Rzbqzt2AcTK9ZNiYM4bs2vTdXqSgmLowcAPKLChKcvxodkmmy5PkXdBjYcLuYoXbeHYc",
  "key11": "4WEh7zdVWQEpL9q6S9shHU8szi4SyWqM5qnaW35gVebWi2Vehvr5rnAK52jbyCVwQt2prP6mcevVMySjjZFTtE9f",
  "key12": "2kWGLxjDqfjYe6XCWjw5wnv4GmVJHmHHVNHNGx61kgxVedjpXsmXMwKUSaDgcc8qon8jeHX6PU2q6UsUk8zqtAt6",
  "key13": "3Jhv9NtX39JZsYKyAGQxwK9nsNjYfS1RYdaej9FBN4ka38tvXFgXFUjw3BatMLdSRMH1xBWwwGTnRgSZvFn13Vo9",
  "key14": "4EgBMHzV9f7x56KAXi6zzLXHQLKfzZuUBiMDeyjKWjzrcxzgCvRfB6iUAeJnxA3auSiYE2b8JUCF83yGTY3AKjDE",
  "key15": "5S2fWXgn7d6f2FXXuVLMX8eeNhCkL2jBvgMmmdQBjW3LCyKV5reZWsx7gCPpKYmHHhpzGsMUyhn2NEeXMqFs3Lri",
  "key16": "B5ZjV3hBhvsDWZHCqzLc71RARwiHPVYEvcoqLoXCA9Kr92reS96rCVDWskV928nUt3FBz8qo8bdte1EokjKVkiM",
  "key17": "2NBhVkBs6a6ZFzSQLdfgPNow6UxpW7ubTaxyHnWiamT9KsCLMuzvks36J3dMHFjcoHmrz7oWBtrm61Dg52S4DYnJ",
  "key18": "4qwo3gbh2MGQGGbnhqeWbGhz67S8g1ddeAMwymyXTsaqHsDGy14VV7bmHiXXNtvyoZzFM1vWqi1KnAyc4ZTw6uWR",
  "key19": "5puH59LpJpQPaqn2UsqqJHdGzkKjjB3LMK1oqta4DPC3P6QCdHfvYUyEQTmexfs9SfjYPGfJJQkGyKuG3J6sqHK5",
  "key20": "2LSqmRJZbnysKNyBo9xnpuocJJt6c7zQBHeerz8CdE59QUtkCs7CFSaTj9AoCnjza2vS9upNmJYSDQLwqNFSdXAg",
  "key21": "4rhrpLcd9hSmz6PabYGDMTSPycTtKafU2F6fdfKTkzKCYtj8wsAZQeTk3Gc3mdiQRi7jwwvaTTeZmeT9xmLo5h3F",
  "key22": "3Us1gFSTvP8DfJPg7LKCo5cjqn7xikPseYmKaFDmpxfRfGpRMK6CBhXBSdTTzY1EereCFP9D4Ncp6x3RvpYTZQGH",
  "key23": "2JogipzyMmDAQYsf5rdhqqpqTLX7HFmbPuLYTY4wvrDqTzD3yG2KkRj9RCc4JQWHseve2kZnAaTJCPksjurxd9wZ",
  "key24": "5U92kWf32J1sMfzy5gumEk8Qr4MFSZYsvjxxK6MwrXtXMgyySW4ZmnZk1o5GuGZrcLeYELMwnc1wkM8ttDqBNBgw",
  "key25": "4eh43M66pkuTyFubeowVabbrN4CqAaUQqUGRygoDYCzytFUGFKBdkSYTidYm4T5gTp1uVuXdbi5KCwy6v7z5spxT",
  "key26": "5QymXmCjKsxNaqZpcrHXBFWYBZGw21XfHzuKqimXFqRCi9Cp46Mrn1cLXuGWukVayBkDqBKqcnbJT66SFbdwyBqh",
  "key27": "yhbh26L96J2oZHorYNp3MZapKeBm9AkHDM5Ku6ENrjVAHxniKrfCtn6W4pPXVAzpXNH4TQWR5KokqbJQPQmPiKj",
  "key28": "5J39tN5G2ugcqf2U4S4Nms5LSH82XTV2U7jwgndsd75G355rcVYDqqhwVY7NqFhF2vdrkb8MsZ3HGvsFMBzWF2ph",
  "key29": "KR4SfXFgZ1jMdVir5DwCGHvM59kf2gMJTdyk7zen5VSSZ8cAGZxmWMnxMVW2i6Kg7c31RVK5Vx6EMcigpUhgnc2",
  "key30": "3uqXegFt6YbLJzcErpbP8mrdrzA2T6sGXiXU82bZGsqjt3kPWjmJDBTDNmb7zdB5fR92XfkSUnQZycSHEmq9KZ9q",
  "key31": "5GiujnzqzFtJ3EFcxoyUpLxMhrJNyq1zVToNthgcncPGnRgGqNwdVjukhz96zdoehT82yFE87sFuteShdkg3AAo6",
  "key32": "VbNeQQgRy3E5mEiULFBGQecgiTxG68nPypyxdrQuXZUkdB29LXbi3Pkz4JATHvLcVSNjiJx86WstZv1cptU6hoJ"
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
