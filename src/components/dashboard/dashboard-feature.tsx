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
    "57ajjUXm2g2nmUqq6oXeZrt3TkUs9MZUdqFxkEK5N4kFs713qpsuxkFUynd1ritMrCx5WdzcFEMfi6KDUfXdoZvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRH8TcXYcnV9gfixRBaszBe5kGRh1Rb4oVY4VELqm5v7WHmKK6cqXm8TmF1nguiPg13KXW4Z6RaNRapc3S4bJsM",
  "key1": "3T6DqrZcn8zKvzSVPctwpG3uevv7G7mjfc3XBNEC9TDzgV3okgWTfHXxZae8qomYyu5YUTQHVr7UJkca1rZYmEuE",
  "key2": "4jEAp7kU9eo1UXiQTBvf6KTKN9EkKtWjAhR1pc6HiTNmWoNG6Qsqg6Zc3vd9PNH9bZyHpWAmYpPJYuVJNydDz2bj",
  "key3": "2WmgLKfeFwaU3F4sLZSmkThPSS8ex3odPquhKHd3qaNNRQJ8eNRszfFptKU1R8se5UE6fmgfjxqLR3GtQFjUjtGs",
  "key4": "5go6w7nUMhrdJLosj9UtUwtspV5gM72kWbD9A5iqQftp1y8YCUqpjny1VjRkQ9Hhd8jQKnP9ntjMi4TL6r5p9Kb3",
  "key5": "62VnHvZuzZGzPnC8DEghj5zJwUJADyriJba5wnffNxpFmsgKiMnuYmmoc5JKLV7pdRFiTpPhyzxeBkhkV1u9Ff4Z",
  "key6": "2bgwR7GHmpHZJ3PchfZsDtU7guw6a2nsVg8HkDz3NtZdLSaWnJnvScYjY4FmiP6w3oQmhSGbKCSFGPUyZdYFwKH5",
  "key7": "2PL7dixCdX8W4AFimP7ketDgbrrtBgh8EvLXpSi1rDW1GYWBnc9fsBP5geaSB7bJqrrvoAEVeXi2o1ySXabRAeMA",
  "key8": "4sEMtpvQtuZCQdB5ExP168y2xCDuWFi83NtAXmhauDPNGHo5tDCG8EsRGmJ2T46bGG75dyurzVauPShF5zHQVQjZ",
  "key9": "hrbENbHCMkcXPXxtAbQULyLftJkaSRh8GA9xy78VesV9AYhjmhSURTDnTrpPWrv6higHk4sY8Br4YVXySLX5dyV",
  "key10": "3wxWPrPzALsqkdcYQnncp1uJpCX43pwVvgteY7A4KDRaHs3jJY7nt19XX4Sa9fP232nG26RqKBCn13HdNvZgTvdp",
  "key11": "3GMx8En1tGksmt2mi5FhkfMW6ru9GZaYwXUnWBCSeqFmiwjVpiasJ5wR1bgTrjrcz628GXs1ykyKwRf62aZ6A4PS",
  "key12": "51jsM3ZkqLRRLt5kNdHv2A9dbCycQ1UvKvPy884Z7U3okQ7X62eSDqE8tYcxmbsjnhBq2A3wLexFhwMxBCLbX62o",
  "key13": "2pXsRYUpMqmyNhnQGRc4ozL9Tx8GLgR4xpwTUmS9KWeUytoRBjB6pifu3eqyQuC6wRSv9noduqHS987cp8FbMUf",
  "key14": "4hJZorj4RseDZHYwJi3J8EtK31SbRzEcNVFrJBHgzH11WAYAdracR2c1vX8SVGTZ8uYEXedRbTBc2AYcDTh6eWTT",
  "key15": "53D7kLAfK4yS7dkefe4Av9xQ3pXHp4NDynT1FjkqegpNUAZwLigeM7tBX7LzJ1rE9Vkz2ccUzcfEDzHvSgL4ByFY",
  "key16": "cLRLbZxRAj1uvwhhPW3NPhE5hpPR4oB4xnpxJ8MJta4n4472xUfydndnwprSrmSdwD3Gbweuj1K7KD8Y5Kg1XK2",
  "key17": "3qh3TpWwdZyCnj3E23o4uk7m7R9hoEULmbdHu2TieU6yP1xWgR18kS8Vqw4QQV4aNDwgNmL4arX7KkBxCMBBcfiJ",
  "key18": "53nkse3KVwTGgoPTJATPZKK8GThs1nZXCduhpqbQ1T5jt5CbeeejQ6UAp7bFdqCJq11nLWjuBawKKVPuDZdwwHas",
  "key19": "2yMUGSzSYR9hLqFMJm73Sz3V7YhgBKDyLnnfUou96KwQCjKzG31gX9xKAak5xWR28Hq98X9yC9CTfwxT5XFSKJ41",
  "key20": "4kE9iD5EZdP73UxWQyE9gBnT2fbQj2zb3HpzQ4SaxvqNJMbqvtbaEKZzuEW6ijWGCbR1xEvoaEBGNCQ2RKurdLUZ",
  "key21": "2ThKE5vzcyPEsZfpESkc1zmzBJrH16pkicr3r6JGVA25e87xZTPiRhxLzuTB46jVYwSgz7dDCjYGssD245TodAwj",
  "key22": "5gHVJv1jz6dbQP4YmLBhgh2jfjMcyCvVpMW815Q9itaFyQ14SrMviERfg9QwYBJ6oz24oLeKDjd3eJFj2BGhtnoz",
  "key23": "UymunnWqAwAwCQxCBfLG5yQEo4P8h2MaucGEhjuEYxPcMrhprpmDLTQASitYr1zCRr1fLLXZQvNynP6ceyaU5qm",
  "key24": "4dVwf4HaCqXrsLR7n4kFMMEso4tyszgJXhG8RE6thcN7bJrQzvJU6XqVLcHMbNasrwYK4KBmXNmVSCX27Ht9PoM4",
  "key25": "5jkY6gU6x1mPxZowunfGUs9S5nY4DWcR2CiYPoUWV7G1PqRr2CKinNLRcZkCKghG2AaNJRk5Bedv7kowfQK2nGNG",
  "key26": "3PKgtWLgR1rdMjcsCcNYPzvJpFWEyD8VUjeJeAsn3muGeQ5wD4ZKCNRLwZrEymYrCCr1u1HuJQ1rSoowpQFvVzQ4",
  "key27": "tJq1jzbRjFWpv1JLDZzgwymJnc64tdEae58EaVdsDjSReLYmGFdjDZkSF4qLFLvQqwC7Q43vbxXxwFuGUcTaswn",
  "key28": "54Qax9Zf63G1hKdppbN2MK3BcEVmsDXH8tYJjP7Dp5rnKq9EnJiyrGTwrDWqabEpH1bK1vg3qf4XgfdjN7v5VYRs",
  "key29": "3nNnMC7Fi4zH75djdfVmWXJvy7drYVXk2dohXaivNGh8XTNe5m61VLFJHihBBKRMfHsJUv89HLy2426ne6f98xxp",
  "key30": "47HQDwUQEWtUysBTeVMthTdGidZ6uCRKGRzfdWwYb5dyRWwnwE9yZhwVbKtiqRCq8omkkaD5LN8jgZRnjTDBz5G9",
  "key31": "5Tr6YJ3frEyyK47A9nC24VCm8q69KjiSeQS4S3q7tsfte79zkm9cEKgth58ZHUwRhkupfPtCxXeBfWFhcsen7PRS",
  "key32": "34g3L5tHUBezSzeHViBwDoRuJoMYgmSK7qHR9dkaipsonT5cAX6UadeFoQ5g7yEd7G6XzbDk8DhFKaR9eBCyCvPC",
  "key33": "5KrBbZ3A44xnWpm1dYwkZMPGZFzBF5BYkgtv1LZfsG6fduaSqfbJhK7eUCkmGDDhnMTJnBvCT6MQ6hPePZEUJuvu"
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
