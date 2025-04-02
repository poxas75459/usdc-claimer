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
    "3PzHEgfJPwqETZppuvwuhAmw29CNjkp6STopGB1Cdx34tRL29CcguXkMF1j3ouLhdLKDyU3EdwPAWf7CWnhZWcj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6sTpcrKAxzF6Guk3AgGeETEhrMfa2v6uH88rffVedzFxBt6gNZACH3KwPgg6oZ9ESWxN2cA1JwqUaSKdWnuPF5",
  "key1": "2QJeeG9RWVWH8ym9AGFAY6SbN1GH8dNt2BmeuovR3HPGh3DFu8YW9LBSVU4X6WQJGYuMLijMzVXgDQgEWa5vmXc1",
  "key2": "HJ6Cm8opPP6cGUY7krSwVHTT6dvh8oYzkT8MdSG3UYHCt3ujzjTXEjfuHpbdnVVGs6wbJwCbBZPFRieT9DsqURo",
  "key3": "2agJAXfaov9eDiPRjxBF4Ye1io6t5tWyCChrec7RF12rqygKhwdLX4McKXBkgTMfytjvNyVgXp8r9TtEycoZPtgi",
  "key4": "3C2VbnE3TzDACviA2gGU4c9KawciUFA1GmtSegaWc3f73qHwg8qZgLDy26CyYPQFMqnRNSfVVVjPrNB19gyJJTL3",
  "key5": "3AHExZ5jWahN34d3dr6PXwTzDBfbTREGGtCEXGAQy5jgJ8mAz3UKzcpE3V8f54gTTc9iJQjB9NqjnM3y39ivX9Tw",
  "key6": "5PHGUtwyY2GzpaB72fjW58SfAcruRefdv6FTukyvcB1x1YACtFc4kQenzguBDivDtERMWh1FeJpjtn4rCqMr4VLQ",
  "key7": "4eRM75qAA2LfTtck6vFzKFeV3dVZ9yn2kzZe5CxiZGTUogdKcopvL4NJgqmVLoiiAfnkr2ozCyeuVHTKbyXgve2A",
  "key8": "4W7XAKrtw9fs32qgzxKhgTHzv2yvWQqh9uCY1aXC9yWuu6rnXRLTfmMmF4DdkbJFTqVBYdMSU5xkWmXUqViDngyq",
  "key9": "2CunkKquJ79ZeRU5hhsz2xj3Vn5Jgi9AR3Uj3JmotWnJQWYzWbXqkwweBQZaZ15pNrzNH3Z9uoaPFmaDkPYHKAmm",
  "key10": "5QBPzRzbZufUTVAefAitNtVu3ciPJUSsDzMW3DFmxRWG8pGrYKh3B48SsSYKUw5nAKmrM96Trcgn7NBb2dULWSSU",
  "key11": "jkScmj6MSA7J96MpFzyfq27PdbweFk4rpXyY1ah81zv8TEuWgUvEPLXNthJaXfZze2SaRhBbkQDVKFk4jHiNQqs",
  "key12": "ee6q9yJvtS7V7nQni1yNMjCRciJFw2hmfnoFiTEprfCsRkbocGgKnDVSs3BUj6uDqRFUSj5pwo5uv9RxXu2JLtR",
  "key13": "5SFAY3uKzucxYCrC5a4X4rhCTF1FmTWofPA9VjfUuinrmTJbUqe3hz4XkYLS5wt2N8RBR5RtpjxKsZKxisANSJMc",
  "key14": "h8eEwF7NSW8DQDZnGM1P4T9ZwhwXVQgoCKDuQmdTPwvLEAivLewHXRY84mkGfMJQF9o3QemfGf1c1vCH9GsupUz",
  "key15": "dytMdi11rRRN81ViCSabDvu1d6gba9vDmtrpTwVEbpSRYM7TAX3s2CW9bfAHpdGN3ASei3PVMqZ4YBtbCkDeYBA",
  "key16": "4QFohBqpuau3UHEXujPL9YaXMbpHLQL6kL9sQ6roh3Y81Kmgg9Hf2wyZD59KxSUaqfGtMfWaurNuRe8bGRZUdB7D",
  "key17": "2m4rgQ5SgeHm9faceMX4CREA7V9DyLzaBU4JQse8m8SdX2TQ4XWaVNEN3U2wsK4Zo9qfpKnt8NvZpahyXQb1TynB",
  "key18": "5PFE9rEYkmuWgdgcft8g8dwhLd3RAV9fmPMNGgA8N13FMn2aSWQ2kZYLEWAUJwvEVb6mYU949bXm9uEkAmHV8rKS",
  "key19": "3K5ZTW8MeJoH6JwAfb2T6XXQJzo7muJW61g131n3ne6hqaLWgy525BHGwM5WYvFE9qjqpdAvvmkwpnwyF3saVYwx",
  "key20": "67TbPDFTrA9s9j6Dpj1Gtk67ry1uus4sA17pQQCymcaw5ZQhmcTzjUxjpryKgRRhyYa12RVEbuUKpAv7wF6rrSAY",
  "key21": "2EdKaLD3CDeo15gQDRoauatprFvzhx1JoMiLUVPLR3y4weUfdq8nFAapnGmyJxxQXeJt5oVEQdFNUt5ge3M5owWC",
  "key22": "4cNsa8dEbppWyHegaRyzH1tKR5cEgSag7DnXgoyiGs6XQPWvabYTkfJMTYsdp9cnhtsdQd6LoNkX7d1hVvqy7p2H",
  "key23": "4STcrJNntJXgmaxd8KBqvQLyuBpScsHuoeTavQiH2n9PcdMyG76BCZeUiUxQpsgkhZJTkCUyd6kPjj7ic8HCv7vF",
  "key24": "4KSMyrCk3mRu8AtxU15cjs3ga5UFzJdHYhT5HdHqJGPMkXo6euuFFuKRK8aHp6agXMFzhuLP3ecexeFzubWBq7Gs",
  "key25": "2MGzJZs7FnosQQyi8e6uG2UFA4XJRXiz9969LwJVmprHDgTRG13SWznNhtLQJaLRmz2p9xAZj5JTuaDwVdmZL7Yr",
  "key26": "3JW3ZES2kqEuNQAWtdCBwswx9coSEXZ6RYqpkMN7HuQFNssyvAg2S9xcUrifLv9G5wshHD6QUVxDcLX2neLsEjb8"
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
