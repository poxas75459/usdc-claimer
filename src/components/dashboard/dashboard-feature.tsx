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
    "3DH6upCEs1wmiC2PkfFLz9D3WNjAyeXKDda4a56US7rgg4MPSjs4p39baonYAFPuKBcmrMgVjj7Bxq8SuEXzkEbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEe19BCDPgqDQUHxUDNTXXLivuoH9yU8byyRdzRzVnLbxwyATVkjgXUWMMwhKstPjMUqgtGuEuR8TiNdhmwi7Pw",
  "key1": "5ZpXeCtci64Eh4inRV2KGPyWsZbjJxHGcwsQhJyYUNiGifZkTPJC5h5hM3PBPagJkBswsG2xnitiJSSFJ5pdWyuy",
  "key2": "5BQs3xwFF1qG2KFcNiAQo5feTmoMHNzJj9x6EPa7wsXV89sT4hkSQiemSqV1v8sAVprXpm1eeX6EXuqw8y9HVK7u",
  "key3": "3Hs2NV8jZbs7F82UkseiJHEToqRzvPYYa188PVkiBxMAEya1mgA2RLcMcvAsDwArBbzoppfuYMBKEhjdYjNCiPQS",
  "key4": "aP83q2xVhSR3rWExB2ijtFGQvKYGcmRvzJUz1oGU6m9bdbzDYdN8c5HJUAyVNGSNpgbGFq6JQYZEmBLi8WC1uoP",
  "key5": "3FRb1mPbmFprnaZL8FRs18EtQJmKhTk8Z2UJE47rXFAwK17XtpsVpxR8RR8WYKMzbdvn53g6LsETU6qmASzdpLpk",
  "key6": "4qNXer777N5Q73qfHZ9of1FFBYpXpg2b2R1rEUd82xwrmZDPUmyW7Tki25LkrFX46ccCuNpLCqFfNrvYZyp3wMp9",
  "key7": "5jaFnbo57gReVtAa4MyUEshEUJr25KpU5jjBQd4qWT41TpTw6N6rBth8F4vTJUvVkYG2tqGx2di7SQDWLXGgyra5",
  "key8": "3C9tq8ugJX2cZdVAJruQqn1Two7xX8DxpD3jN7H2FrumFnAZFjhNhoZffExVsy4dLFr8vGURqTJQF7eGJEioY3KZ",
  "key9": "MhANGhfB2ZFVDhcJ7RU2bFGCTniZ6qKS4DYQDwJQ348SdgVjgFkQi83gfs2AargZVjymSYoMpfFFhLxxijeFQd6",
  "key10": "5HiN8MS5ZvoWCQgH7RA1PNgXhVhq2MRDUhU7ijhwZdXVcbaAeagRC4jeduhMYwf1EyuwdynZfrr8yyv4mkGtp6Qa",
  "key11": "4WAopLz7XAHSKYeV5Gss132XrfTLnFJxQchYPWyqKXLEoKv7C7Tqc4axfLZanJFamtMBeymttDNETJUZxwZqcEfL",
  "key12": "41sZZgwdaA3iGY6RatkrXv8E7hDnpjc86M9xaZbHCn9FKp2jxSj42jqWodjCjT7xFNQKT53ZAWiv5D2D5fVzQyP8",
  "key13": "3iXHGLhZjgE569ufxGKVM5AKSrWBbqwYkbW9vRW9PHHHzTE6yNDHyiwCBorQ1LXtqFhVhR2m1xo2cQXcmpxp8jmv",
  "key14": "27B5hM35xGVoucjhCcsxSkjngbPGsrXkuM59pSNUqSjijNhWEq8HdESR8JAaQ2vnvnes6TKxzA3aTeEtHzHZWsPP",
  "key15": "3hX1oRjSA2G7Qq7SfceSW9aWhm9dJS1y9oZTXpo2rqUYmtBb6vo4GWeYCChFSfbCiNZ71Va88KBw5RtZdtWvutyJ",
  "key16": "4Uwqo74k7RZZWFBx2gGu5gbNp4dXLJBjd77FG6dXsRXXnzDBq35ExbvjY7bdisuKUvYpzNqoRxbpKaq1hb4oVByX",
  "key17": "jjLx76vS5EaGGu79stdzP1qzttoAbrRTeeUSWu55TC8QWKddcL9pfswNzQmjKHLSK2zx71NHni97ERLC3ZvWzq7",
  "key18": "8pJEeTZ3cyTU1eTGSLNeLMzE2jkQ2G52d82daFBhmdWAetSi6mwdQDUUQ6Z4TXfj7yemXLTEmxnNb1PbmUqKfa3",
  "key19": "5Wju5McxXdtMz2GyUrPBpzVf7bTXdQ4Fot62nQRJVkuN4ruGS6NifZkNwsosh3Ykm8zdJZbW9uBzJHkbPpYH1b25",
  "key20": "4uwRfuMLPySGU18z4G6R7jjRwfWZmyvcsjSyAqoBYKLUcew3Qq64bGoaSQGoMvEb8ieEXnfL7KFf3eJAyYZgXqfN",
  "key21": "2cGPbTCaWfKYtJ1CFLAzwHJm5nBVWfKbyRirMFVG1MME2BZnNbsyYKpxeYyXNzUaKFpdVq2sqZaq7AGJYgojL83b",
  "key22": "4tT3MsA1UcxyS8XmLFAYfjiKsWsA3ZoH5cKVNWvWRAkt8qu69dxmpnQ5VjV7oJZxLTgURf5BjmwuyGBRcMezJce2",
  "key23": "2kUA5PdxY7ezJcDek81cqjj4XkATZyxMfnSDZ9u2J4UnLiZXLibAxgP9cmWevamqvXTzvPu5TCwgbHS7k8S2cSxk",
  "key24": "3sLjvwbNStHuZg6KKHUFfG9n3bBnNUZ72ejcB5DUaSBitEtr8PMQefdQrczxr8YFWsFH8Bv9bJJMnMkBsXdmBhy",
  "key25": "53Vfc6XjjvPH7znGabHR5Tpn1AW6BkECStkfN864jids9bJG7nUmKUzXhREQmgCSy1Gd6iN2WvDFffD6TbaL323j",
  "key26": "Um4azi3KBu7VoChfN8kHYRt2xsgrqUpAdWmo9LxwEC6ue9YdXx8GK2yS9hNegURzdVzvN3ZikMAZDbyDaNoh8rf",
  "key27": "4ouC3m7f4gPMsHXm6KrC7vGQE8HtEFAmEKiPknkdy5RWj2ntrDKDnr6ubtFYRJihqxDz51Hvh4DFQANMNqk4umha"
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
