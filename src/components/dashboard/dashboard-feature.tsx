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
    "umHazQ1YgYy9vgRLvspiG7K261EKXDLFpwcxawKmSoA6cvVKzWxuSDToxDNioqBPSEhveddrM91JngTXiot2Zbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pb991LvHTCUG7Vvwhinp6L6NRRFv7SMdn7qohtPJLKgrDDc8x3aHekHP5KNWD1kfoKrWZVa7JAyEwXuBj9QMKes",
  "key1": "4orxxoQbsAorAS1nbSkW6LemzagsuSDPsYHESUXi6KSD48iUB96P4sGCFdxYh1yFmJfBpSpCVyfpPUGNKc91N6TN",
  "key2": "4wB4PPJXgAYuYBEQburHHfsEMt7U5tH4PW1iQBQG8wGdr3HfLDKFfZDjeWEmBiCpctAjpp8cWhM6qTvqtprsoEkj",
  "key3": "HoodujSh5CnxC7XhBiXyDqp8jETHBpb1uPq771XpRUcKFZSZeWNasY9cjjcr8cfoMDae5SR9qtJgcBw4uhJvUSK",
  "key4": "4SX7DKz2rgYEZAsmPaDKJheVVwBEcTgdjMf8JC2D6JB1vfBLE38brES1QrLUtgcaRTmKsTPT8G3PKfTTsJfnBPcM",
  "key5": "3TjKYsR3fKNmJyoPdyEcexgfDZyZB2zMC7aixkBQ6YnfKzU2DNEZ5yopYYGymec6ure9aBQKs3eXF9i7QRqCvjPd",
  "key6": "5xg284snrYCiM8feSoKD4KetHXbQMfwU6WZCGqW8wsB69b3MbrJX1bq5RUijePdArNX965JUvGfYjJysssXURCbz",
  "key7": "5vbppL2FuUAopBMpNxZuXRauMWdG7cD7p7Wu4kL7Scdb1dGmsnrufpEjNBfqHxyo7pgnV53TQ5yCFsf21SfD8GgB",
  "key8": "3uRqFDKGddDmvFvzV63QCmoR9KjzrPMDnQMqNegqPX3WNSFviSD1VpftriRtwGyUK95TMaomqjnyg5wZvP2rwmsD",
  "key9": "5JgEdUFGSa14TWJ1q82skE41hNWKuNLB8PNz64aAVaDUaNrGMMMrgTohbjyLQqcfHQ5ZGqmahR5zgujmswJuTm4E",
  "key10": "3JkzG1eQo2brL8D6gWmReFk7efwLkP8sWxSRUHnsGKN26TRKZL7UsF59YyRQYhssZbBwabiwDe8Fgshe5G7so7ii",
  "key11": "ggEBVPPPrWSeQNA85TDTLP8XuUnRaBEq5kxg8DzUkttthsUAn8BXVBV2e7TXE6M4cmbMLfKLSn7ZvMQkSKR1Sha",
  "key12": "4hBLeNanb77QDFZVGHzUAyCEqDtGiVBqjYHeoo2AekHs8htwsnuN4CJToZZHoHGJJ8sKGJovqKiu1shHkYpCVqYF",
  "key13": "4A7GU5nWJ9RnpX4h2D1BALXLoSFGDKJAPKa8H3iNaHcfaQcHpNTA4ARKagDiNgjzQ9x9dGScWcgWxQFWmLkEmzJc",
  "key14": "2tttwk3uxzQZuMWXE6uhK63zGCB3fpWhyW1uA3B1nVQLuy1TcfJWGYRuAW79Jvyb9CMLForgeXKsXS23qVfhEadi",
  "key15": "24mujBaEYBgMB4eLxavxW4gSYL6fkrePEjouj8xW1xYZeTQpf9L5W5saz51537oupnhGhVR8zcGFm7F61rBvTPyU",
  "key16": "3Mkxs1rzqoApw8zwZpvUaVemLuWjWXnQJtCAH4Xneqseo3QmyzydZ4hec2HpVvB552Wtmd3hZuiWhPGkwKJozWSd",
  "key17": "5rFT5sQtQpya5GhE7DKu5W9dhpb6bAbWQ8osjxtHB7hNw92ngkNeFmvCS8GABEtEYoFRGsw9mjdrV11B6ithDuzj",
  "key18": "2nbua2VSJ4dz5ppe4ZdSJNY35B8RYDPTFUPMF8oPZa7gjA5ZDpAGWCuG54D4A17LCNm8LR5hG5GzgH6KayrEvMWJ",
  "key19": "5L5fCqZ12NGJeUayZ3hXQ14i6UgYApriDC82S8Bik3chHFW8HPNTvL4HgWpkhzDYbAYkFEoy9PoyYCeK1zMQhCGM",
  "key20": "2ocfAG5A57B5vVe8Lc48bL7JJvqAcugazEyDMnoRBxKSJRXytxEjEb4kkAKiBwnJHwVpuLETiTBFovgFLWo7zSa4",
  "key21": "xM7buPHR5oi77JmjwUHaJgYS7RmDGPanDetiN7jN18iiCSdBFhhGux3Gg2DAGWDcTQsUyQht5Crfqywrk1mR6jF",
  "key22": "5sNciwawhE36f9RFv6rhsvR7p9CcXdsvjoLmjPxtQLfs7bv1JNUkiiSVunGWjE6VGoZGeGUscFH3FkMma3a8jUbw",
  "key23": "5njbbeVNnzhhtPRcxpHJ1cyQntfeibHgpGvdiA7LwUyMEXmw2FGFQHFrLmUdNcqqPwQCdNBwQ9cAsDmaPpJnsqRQ",
  "key24": "o3JDj3vQpQ3igg25nTcBTjw5rGKLXGyMWBAZ8a6mWPzJVhcQ3PsePrpzPo5qpNcikmouUmUXUp5vTExa8f4rn5m",
  "key25": "5HDDkfhgksH2W5QhZixn9MKQNqG7PXvT1uqaEkhn7Ji8MinF8DgNwHgReFwC8JxPnMSKrqNtFeQSkFLbSoq8AYX8",
  "key26": "4BWNW6P7fSbgXY8vgmHHoncbGqJw6RKdvG6h7Cvz7QnDof4PeWgFtBsEBbyYXxxRrbHewxuNoygGda6B7fpSuMT5",
  "key27": "5scCfkEXpJgJ97fNJnMjW2SpXqyPSdfyWAoujtqVugx1MuYvVgiG1cCRv3AXKUBWCP6nHxxL55KyJaYWAbYuhs4w",
  "key28": "2WeRTyLocKG6V1UqQDrE8DfdwbrnqanGhE9qS7q3QrdqHLn1t576j4hgoHg8zhGJAaj38v2FTPXYCxa167pdsYdz",
  "key29": "3DSaHC7TYdJbq6RkD248Zfbgzsd1hujtyEim81VLskagz6Ced6Sz11A7ziWtGNMiaAoW6jTwPB6Au7BRi3gBSdD9",
  "key30": "5ufiBHJEAA2K12uCrKurCCabTnYyxFC987h1ijNzLJQC2ZNZh8BSYKYLCHzRasYmGcZ6Q1yQLNoqFzgQwpkBH2HZ",
  "key31": "Pzb7Qdf3K7MGbSSUZ9seJnxBfZM9A4jYUPB3jvre89Hf97G8w8rJtt3KojGdd98DC67FQBQDAsWQmSySPW15ENj",
  "key32": "2jEpL978feyhDvjcBrVYUatmR7L9pgxdegax5c3iky3pYpkWxDG2ZV9SKNir3LDbQz4qWQfoqyrFDSUEFbh2fuGS"
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
