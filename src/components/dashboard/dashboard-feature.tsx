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
    "2kaiurgeE3wgBHv5CfQDrui3hsS9A1SW8cPTHyvvFjdw7tyNupzvChL4PBPUpeMDmTBC9SUqXGsYeVLV665b2CPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGvY2Aio7EQ8AfK6FLb7C4JTb9T374YXM1UnWcVdBacdXognotUJBhMJuJaeexwbKscjPfhitymQ7yuAUhGEL4n",
  "key1": "46731QXZ3toCSGhnQCTH2sXrr3BkoGgWpQVg4uCxRoMTpT7GBt5grBH1MA9PTQRGFzq6JAVotNqJpadWD7o7speu",
  "key2": "27mSQfz4x5AvXBWgWE36vogmqB7xBQTcKaSRctcAW8y3KSFo8kWuXTUp2vBkNdEshhx298ey3s9R9SDtoJ9ZiFEB",
  "key3": "8E1J2HdTdKjSfjsEpqbDec9SDHekn9X65WVaegjCMe6QSuivfKmsCBNqtzMUJ4mAT5opmr1AfRw35vEXq5SVcP6",
  "key4": "4Xu14fozvdV2xJcNGNibX9BamWzeFUJxyoJsq3c9FV8TXC9SgHJE5hQZKDWxc88GuLT2EJ1vZfng8GgzpVeLLzn1",
  "key5": "k7ZryZY6ycFMMiBuFZUHrUn6BV1BwLPByb3ffLWrVj1fhBsdnxZJoBqHqUCX8vASp2RBxNHKJr7DhJ4EdWbGuzW",
  "key6": "VFUqK8FrvftQzDXVQBkT4c3ZHNAcf2p52AcbHe1pqGcS5F4n5oHSL8GJdAhhaiUmumW6T7RgXDDjjr7jkXdn241",
  "key7": "3BXN45sf5AxRr6dSbPAvNWujXBdUxMZui2GBfsCBK3HvsGky9Urqvy7jn3E4F7GSXybEYuNUYVmmtiE5jV7Q1uQX",
  "key8": "3WvebcQoMUigmzxSf28y7aXmj3G75p4tvDBdDRrhRsFwdaHyCUPr9LDr25KycHD7e4s3ga9gRiuiQCFiSBkGec39",
  "key9": "2gYPfVqhULXoemrzPXJ3R9HozXNPDwqDPuPDXjFChvkuHUbvkkcJv7ofCgeQzACTgbCLkyjAWyXSnrkQivwSmTnd",
  "key10": "2oUiZfCSkogW8cYFRyPRSCiHiroG5kJ4CrDYGBAMgeEP4cpu5da4LZFecB8jDBpo5fpi93LZi6v9rkX2X2zMVuTK",
  "key11": "57KEeWdbkYi7U2J6QH3VpjaypqC4DbHuSgQJX2X2C7nhLswzHyJofTvbAUkLNzSsoquvrpA1YXUUtLq6h7KoSyuW",
  "key12": "VbwhcTyJ1x3qiigxMdQw7Re6gQTkoJ9MZj1gGyCKXKkMDHaXykkdNVadromidyAyuaVVZHjAtPWdmhy4misyvPc",
  "key13": "3L24asJ33XzsKUcbhQwfT3sNKwE3PTjZhxeFx77vSsYoYTDPjvXcA7Ekh1443QAEeC1RPBC3iBNXRapQXwzRB8po",
  "key14": "5CApgKmTVyRCYXJvxKzDWtuFjCAFQE1EAXRe1y6Cw4Bsayh4b2BzHFkMLuBays6mibq9RWtGCPJnA6dRtgtcBAaZ",
  "key15": "2gg6v1Y96c5Rg1mfwQpimidJXkrr2ucswAxAZ9hJKhHm5qtA85wS4x1ZBtEq8P16HX6v4GiyAguKKtbrNazzL5kr",
  "key16": "SaPkZ5UUfZYrYn6KDDvxPgBBFnRX2MvowhJzhQMQAV56wKBipHdm38nXznk6r2E8tYVdW5xE5hpbyxFKgbESkXf",
  "key17": "3gRv1A7R9LJpYpb9NixAZoRnze7ZHfJMxMebQKGdRct7zCfKR5BZwkMmrLz1SiEmvn6pRwFZv5V9EhJtRjir37Ck",
  "key18": "3GDeJrneiEGD3XHkyNh55wGxLfw6hRpzP7bUA8EsC1GjyN7wQJrAZPbGGbPDo9UJPYkdn7XTNmDDnWcsvGRjX8ko",
  "key19": "Foqv5rNV9BYWYzWYPeyxmER1xGpTpvXirT4bXiSKwfC3j9zsytWQV1hCAR72hgumViBGteua9FLrw8YBqhzGYzk",
  "key20": "3VTvdt5zpMs6TGQi3Kv2RB11pSwvWfa7wA3paw7VEe9a96unxyC1BRZ8Qm6TLXBWWxbcyFNwxsPxk3SNqJQjgBtc",
  "key21": "5A2bd65zhDXjXdiuypUCyEuC3EimZxgUCxsVcTEQRW73BQVyCyXZMStvmCanHZtoHAodFmvqAdfqsBUxaiV2vMi5",
  "key22": "5Zki1FNKr2SvVH3FgPBitApbYZeya8CC9GixN99R4q1LhkYqsFZJmwwEBWSxnjff3LjkU1hjT4YEihz5z2coYnMU",
  "key23": "5d8aarxaHkjGWFALkTBj7i3sjDxMCr5bD2D2bgQPLyZsTqmzbPYmbA4V6iPSuday8RV8suukzunnJ7jYLi3aJJpV",
  "key24": "4a9smTW3xyqxA5FsxpXwVzvMyi8w6KsUeAtJTqiNyXV2HooFPPh3kDQT8vCjqi6E2xqUf4jdQYvHXbcyVc7HncYv",
  "key25": "dGjKhN9fPkbNUVaxeZu9snX87dzwwnGoRAWMMF9d63Z7hAGB82SrJgWFWmjF6pADJDptWQumfdrZQfQQVQpd8FG",
  "key26": "2C2rM5wg9NNnuk5wrMKit3QcoGymTLdwog2gZD9X6JEd23UH9tJWFXcP3ZetqrEHEf954KrykKWs1EsZn9wNX8X",
  "key27": "29vQDSRmkKKGVzSE3QpDr5Bm3wnPmjGxd4sYQLa15BuLzq3qrQkGA7QBFfo9XEoHBB6ZxLxLW2o1h5RVDEzoMuCN",
  "key28": "2KrV6pnQ2ozh8zWtPsEaXxMMMfSA5VADgUd3TcTcYJiNBuK6Rfz1gT2j9MMWftNezz4JgkwKa4SzxNuFH1b6iw76",
  "key29": "5ZpR4ydaQFsPz42DkVLEewQx3SW3ajEc4ZLURMxuxpnvmA9FN172yD558i8UAy9J2mpjGNaBnm52D2oGN4LFV2hA",
  "key30": "2zSQGY8CHZKQcgsBffarYr4sMZYFLoBhNT65nDU4G82GLxE9JoBjwedviQ55RVikbGmrTNJq2rVyXdCLRbUi71EF",
  "key31": "5d2CH16Zm2wqWBtxUaLvVimEPPsk8kssiaFpMCBsqebhFxMDdySWWCYSsmSghhg6JVdR5G1qLKVXgdN7FP8SRHmJ",
  "key32": "5SoTdN6MixvCD9gjoJx63qAigFZBjVQ479ujRBwkYkjhCqGPEuwKYzPTurxiQam7nmB3ACyjoF3rhtD99BhCieDd",
  "key33": "47bwhQXUpHTTFLBVV314NoArKiRA27K6A3dQbAGY7xGdVf7hZztvPiuEq6N9DTkBxSfRyj67m3LjttCikkcJpxFS",
  "key34": "BrZDsZvUofxEKmCpBmsuNjQ2Qs7hM2XbAn3isvJTxRxZE26aa95Bt9xNfnzH4ZrgYJk6p1TxNzHWVXJEnDRX4VH",
  "key35": "5jzAtS5zgDK9h9Xo1YtysNSFcTWXe2Swpdgv8Cf1VXWWecduJwfER35FnPvNFwScLGzycG38VSAHQ8j2uy3DfXya",
  "key36": "4jEcnHDZ6RqLUTs7KaTp58RNi5Gb8NDSRGUZZN8c7z9LmhvZquQpWdsikbQPt3Ro9TKMBQCmh3Ja43Hx1pWMDJpJ",
  "key37": "3QbvFu9u2iekfHL2qL3t4MGDxJfnRAqWPj8ssNy6nq6vRNpwE1iJqrwZ8RaSyj1U6zp3yRhWRjmhrez3NtnBwXwH",
  "key38": "E7JCcefCNkn7vQ92XLobm2ctzVdRj8emv4UfenCX4KH1mgidDbuP43KzSWqfkiQRm3zZ5nqiELEHNiPtA6xqCAE",
  "key39": "5kCvmvaq7PpRimG359t4fJyxAjBZ4TakpnbMecfRPm6yonNUcSyJ6XLYJFNWuRnZcuaoWFmkUYSuKSCc4T8dbvEt",
  "key40": "2a7JyVU7SpSXqJcux8td9dJLuSpEb52b81QK6StPD8gjWtg6VqDCjK3MJzdx2Q4gTqMNJziUNudVfPaTS4ASwWmp",
  "key41": "49k89JYWk7dsUdUwzCFGKSxFud9iqugW3wm1vgu1HfSBQmy55AaAJwdkjWHc63L5iidhw5uEGP7RJE6bYLaEm5ud"
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
