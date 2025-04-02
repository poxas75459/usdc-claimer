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
    "5mTPiNuASB58kSw7xPtRzfvobqREJtSvXm9WJbRYT9Dhe6VUsqw5Y2gsag9YnU5KuaM58a5s6xRWbG6B2uyBmGBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qReJRYxk5BtxqZFpGRspiRWhw7oU9zWdAUFfqEfmPBopSB1xtW6meUy3BRu6S12awCSAqy3zvc8kfUmxD5cnDk",
  "key1": "L2sQ1FUfyCKEQQwD9Ezt4AwhCrhS4FHgjnmSmfo78bGRPLHJwAzYgy6aGFNrqWVfMPFZJCccdPjuYgvTx1TehP6",
  "key2": "DUFDmEHCNkz8WS3v5DDYo8tB1FqxvjKfNtMN3fVdjX6zjJyum7G7EFT8rykjsLLzo7f9JBuW8x79csTLpz5Ewer",
  "key3": "VMrboAsSa6pcMhCTyEFd4ZjjHJgkSpo9rPx6SiWtueNw851X9wUEUqe7p7yM7RarZGFTRpe12wYomTt6mFVSDFZ",
  "key4": "4cAWG7KGw5kVkFhxrYUVbm9LXSYQrj53fFQawkfxSjov1294Bh6CacPKoHELHp26p7i6GKv7KXVZ41sJGFf4RzPb",
  "key5": "61MV8fPnQB9jfFvQvKdLRXeXxWkTbdqJuK1yoAQzDRr1RYbTWCpSt4DTomWasRYQVpmDKhucRfHQpkKCih2Nc6U2",
  "key6": "3uHyKLREGgN8tZghZCbHrBfgbZ9eLw3EwaDphe4vaQCeP1yH4f3CDmJcgGoiXwS8cbTXGTgykQoNQaDRMSweB4JC",
  "key7": "36x43h8Av8wjonx7B6YGuDKurXm9Q6CcspoMWrhTHPPxutWaANri2frKQkc8i9qqSy1ZUtxbAC2Ltt2mjg3nmGrF",
  "key8": "27pJkfqtLbVcaczo4ehCe6sV8tjpCtiBoyLMNMSSj3KpyDumoTeSKGxRFu4mpkzgy9hJzLqt88nkw348v7kcWzV7",
  "key9": "5gbsiTysvMoEkR9Aby2pki1z38ADYFewrjKLamfYbEiGEJbAX7gtEh2mvogPTVCpxci2AQ7jaDwGHZdwPAcXXTDj",
  "key10": "2MqoVLf6XPSy4FhR5RHPGsU97VW1urqnAazxBDRnGfE1FDmDautxwSVfhj6tqqQh1krxVnuJ1d5hEFyAe8HqBH7Z",
  "key11": "4ft6wbfaUYbXm8i8J2kYBE4Tp8oKgqE4d9qBuXjKLueHHRJKybdBLLU16NXZfd4VmbRA9A7bFdrLMDcjfXaMPPFe",
  "key12": "2nx38HuqYkngm8rEaMeJDq2HjXvrNiqmMjavwyiqFZCP69yptNZ4NBkbyTnTDt1VcsctyrNcZd49sj7MvwVmpw5c",
  "key13": "2FwfrExqp38V5WUfkBpKp2269g24qUj27Lsmo4hedmAyhkyBZ2nvRaivrfBMfsBDUD2ySYxA6o9BS2ysFzjZt7S9",
  "key14": "5DTwrTUP5siMeqA29fBmCbEmENaegaWT4BWAL7N83CJm4yhQ1fCTpYj9V2CV3ahxeFU5LhybbdM9wB6VH4EZFVA7",
  "key15": "5vnYbBygJHPzvg37YXGKp2C8Ct8PNDqRwoy4HLqmuZzsimFriJmvmNEwaLuoFR6hskcP9vaKrysP1Uo33zr9G4eQ",
  "key16": "2gmgBiAwQTLp4gZDJaQVz6AoNRnNFzZnhkqefwWHNixCxGhEsXFALHTo4ZeZGJLfSwJx1mHBTM5uZ79R1czCuSvb",
  "key17": "338tqeQ8i6ghzByxbcjdt2uwBbYoqZNerb1sytPPXusmqM2NqjiRim3uYKosojGjieSeUGoEepQFibUTYbv4gLzn",
  "key18": "2kCi7krWXF82yfxL7uoA1hDmw5Hntqo3nhcUNhMnXLd6Y47msRR73W1HKu2qnqh7AerFRGLrZ61zirkwShuUgcvo",
  "key19": "2JuohAL6eKtrMKauxKjUtJqug1Fqyj9HTy6G6SaSceNgKFLyj9iuiHUhcTrxXo6f8JMQrDx6zKpf3Sd8eXxr2zTN",
  "key20": "4njZezQkwqsh5jkzvuQHqAoS8Vih6qipkffgYgHDz8Nv3Nvna1Hjggyy4pf3HuEAYHztU8YZLbMHZx2RwUCCpjYV",
  "key21": "3dydmT6zExfSWSDr8ziWUxkk5mwV6RZiSdYAG9nK8YmaAPDps7dbAHvMAyxwoV8Z9gWdDGE99Gv95KRnZ57SqCVD",
  "key22": "3mp9fJwfmGxHUus4BXy4W6ac6nsNuyDX4ggEPre43CVfECzZP3QMkN59RvdbtNGtPjEBV6uaj5XFTMdLE5rYaVXb",
  "key23": "QyWQ2T63Ew5NkD1i7H6rydGMJLNHJv99H4tQxaSHohFEndMesQnUp71iKLacxdqrH4jhiZ7DXaq8q4iM1x973iF",
  "key24": "2o9pLm4nPaVY4xaSzsUrHXeTdvcDHXndg6uZH5naRypPTLd86LQRXxjMngBukdaQ1KuDSt3yiK2Ju7XouVV2ypQT",
  "key25": "5DHPfUjSKmmHD8vv1QSeUuMVUbgfLfC8FDP9J3NnRktoW7b5WaELwUJK1FoxZKviTMRsFLPfdewRwCv4LSuhDsy9"
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
