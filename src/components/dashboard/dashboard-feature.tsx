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
    "3rLYgN3UMsdAcHphCZKqFkbWsqwxN4PAbXbwZ9G7G8FFozyrGmeBdWy5CETwmnNYKEwpuZYZvrVvQDLmwyPqyXzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xboBZiyYkEaXpBjK2q3uCihdP8psDfs6QhooyB1QTwsd5FrctZNLhbiATxD25tH3wtfBDb61Trc9f5e54KtZ9Nu",
  "key1": "2TMVu8iSsHU85AXovJX6yLs4DjMoi3D1dSJkaKYVZzLoNQ3izszNxYjmasBxvvVzkyUBBbHB4ZUtEBgxfrC2Fs6",
  "key2": "4CrdEkAGcf5uUKv6r2wfLHV6tpx6gQNbdRPNGfCQiDhcRQpYyCTc1BQCBnWGNBeZ7MLVGZQh7zq61s7gU6ukrY1J",
  "key3": "3trTMLt1xAEXQNT1tpZXSVajvRvjAkNm6As87aw7QiXQstsbCqvtmoVoNdF44vF9qpWeJvoKUgrmY5Z7UC3r3Mk2",
  "key4": "631JRxAVHGu9hh5839e24UfwKVC83J8XQeTgvR3qwUmhZrsiMeqAcb2r8MFKxTwpTp8ew6ANLBKJa3ZCHUk65Y9q",
  "key5": "c4sRmfFFTXjCwF67gXAVurddKVtztfa6wNeZtexPjFeNDJMRCd1Xpvqyu8JsF3ZQRcFWB6F1L1YkzcPwFjNwT9D",
  "key6": "5WoLHjJqeFR8vfXco1iQfWLbGVSoGEvhqPhbuJRdoFPX9Xy1sfeRy7HDsqYipowqopzvFaKvQWcGbyit35Ay8NMJ",
  "key7": "x8H3WXk44pT4N3F1ZnFWC2BT6ayeEu3XkDkKp7GjvaxALGyGBNjqw4G7wiKKj3StikyQ1QdEnjbQRqVawXSnhM6",
  "key8": "2rerwbjeBR3U3JmXFUvtM9b6nZySnQLLbWV7psqRobdYYjPAZFCf2f8jLhVgy1DbubceYkG1mVh1bn1fCf6yiQEV",
  "key9": "2835UxpmuD5iN6zqiZYzUXEGGAxs6kJ5BZqu5GvEY9YMk9db1J3KW9oFWoieamT9JZNCQihmpX1VBiCbUr8q8nuX",
  "key10": "5LMuvhijeF81Qoix33onqjCDQt1eJKUViif1rhePZASqzSBrQeHzK1gu7eRFnVTEoxSUZKSD7XuJauJqcBng9qz3",
  "key11": "246NUJHnXMQ6EgznYjwkqbdBhAZbGaccNLZfzbg3PrQot8Q2ngAJjPkxwqJVUNPAZZgp7LqU4Kuu98udj8ime64K",
  "key12": "49icF6yQxAuyxd1KwBYXDqb4kK7wZzTJeHNi719ar55G3mFKLSYQRYaNLue3CHxocLZDzpfoquNmPa3S1icZNJ6P",
  "key13": "ST5RTyqgBrzMq5gxWPN6ZaVcypnypoyxufci7huXr2QHhZkd2NZSnkaQgBnZ6ifh2jBkq8pm8wkD4GdXmnXpwGd",
  "key14": "4FtBFXaGck5ZTY9Zvb67hhrRnNEHP2TXdmuJkY7d7ADXx7WAiXEjHTH8CWQoULdiQrMTGQ8vEePGG9Kwo66FWUTE",
  "key15": "4FGpamMsQvJMYjn1SLaQscuZCiWjxkFG7dGBvYPW4r4PaiQUWQWr1Ksf92fauaUvU6etxuFgg5vAEEvKuVaGpSxR",
  "key16": "3MxdyPPUPsQQg7rJjdxbYezDcnnGx9bMngXGAYvufr25RetzBLfBwEPNrfmK8DxSCdxbcLFW36Qwz4MtPkjL29dF",
  "key17": "3V65cPYwzu38KFLo2PHegxcnQ8BTQf985gt6V1FQYeQD9pZwy64mqg4wUfKwPJorig9dEUGqDyGhY94tw9bz89Wr",
  "key18": "2wWLoBxGApJpkvR3ufP4Umvxfnhguk9enbjBrhjyK8svSgrMtzuGRCC565VDuiSWx84XSb3sF18YqaAZUCo1MU3T",
  "key19": "GoPsA8WRWKRpLM2YcRMurAdrPXJAKK9YJLewuB8UKfGNeubAVZ6vX6pP8QYfNKhiE4KAiSKFWzQ3EwbKN1dQ8aZ",
  "key20": "Bhw7h9W9TEiKKy8aKK1orKvHRvmjpVvSAGLombns9Q1zMv184QS9BDgXVtQ9GNcuHYPse9LdDTppX9chDJpgULf",
  "key21": "5naTjpzEsEMWe8FqJfUngoJFPAdHYhjkQ2VmkHxLbX3kmY258GYdjNVWodxNe1DnsM6DuzDMpUEu2r6kDHGCWppZ",
  "key22": "onQePQ86N2vXL8fcKm7TLtBmkZXoH9MqfvegBKdjwhk5cbHyBfKcixESzegrQEWkhi7kGc3bfWtnjVqSaLMbXYZ",
  "key23": "3akxhudzXaGBuLCBqkn8eB1sckhRcSdKJozqi954ry5pKKuepwHGSWw4pZFiPx2oL2zqkAJxFFQ1AZ6DtjwU2ipV",
  "key24": "2nmbe9jxxR5R4hmpJqPiQGF8oz3tZP6CLnebRkX9EfinAZBi5pmsU8n9GMBH8PdRuj8XYnvxV1YRzahpTCzWogLH",
  "key25": "5e2BeAXjCZEQdHcoVCs6BMMBq1fcFLQSEoGdREetbjLbSzrqv3stNcweiEAAm8aV87UrTgKCNc7XsjMNrYtMNzwY",
  "key26": "4w5d2E4QJBa3fPgvJJvad7SU1eXU3nBaayuMXY5QtVB87i8ubb9VmqqpXPCXLmJ2YToXAsAsJZD4AZTutWHkRfLo",
  "key27": "4orm4Kxt6povz8JmYtVNC4S6iVvDhNpaSf2Qd79pGiMhD4Uod8c96GthW9r8HiHfmMk7mQaHoY5MLvTLU56adi8M",
  "key28": "2yagrJCGAp6spYQrJMPHt7pkUrfNuwzQPsod9F9Tdfr8BzH5b5oVLyZHs5HPAXJ2cY7JU8vqwLDvouzRAj4k1CLi",
  "key29": "EBtiE5Zv4VJoVVF2GNji8kLyK7R8kVPuLVihJpjYNXjazxQ1VAB2EApwkpaekE2Xc5vSMVAM4pKo9xBzGFCB188",
  "key30": "NAye5xpCmudUYQszSrjvWeUFN7J7qLC9zsPKvwh8qSVXwDB3sd5emDSGcnbQwTJ5dVr5qBEZCE6GycNmGeJfMoi",
  "key31": "uWCUVZhdpdzY7JDdoZtq24EgvPvFo7i7SJbCgT37VLm8VydcaM26Hx56jAa6s9Uvn7T8LpDPp1ct3kY9iCkoT8o",
  "key32": "5EkktThnHYxKmCLGX4W1sCDJcYid6wxGNAYkQgcUeovB2aRjsP4r2qo7oC9MKjbZhphkQ8B9JS4WLp29Azuz8Tay",
  "key33": "YpuBtWUJqpYE8NU3hvXwDddY95Ur9bNE5vg6Cd87P1NETh2RXhoPA1UYEKpKFuNuHaMXKgwJ259WGeShv1pZsV9",
  "key34": "5MjMFfPEw1b23R2KxBKekyk5V3i9EvHDfsMJuCsp6Ei3PoPUDxiNBY7A4Vn68fDjN9mgbitJAy9ncs5VTYE9CiZk",
  "key35": "3pT7hqBdRCR46bdMr8PuHZ9qLHbc4ggnSoRCpLv4rk7dRZqfTQdg51aPHg596h65GZvHcpPgmYYFnLJNaXPFwQ9g",
  "key36": "4wVmFYViTjG75JHJj4rquAHnQ1B9LgJw13xQy5e1JrpRZvNKfk6QEsRkhDs4jP8Ykgk1UC7oGvU2zcM88o7TmoW8",
  "key37": "4xPdzBohPP5rQ8CU3dxsmx51FsaRDYUtKqLdfh2vmF353XJndUeoffXUWwnuNxkuAekrXDfDhXiuDsAcEQkHW4km",
  "key38": "5fxPCRt5Fd9aWHwA8mbFnWaaoubBZKVcEqa7dfBQUEfHqKHV5Rn8SCZEcdLgqoK4rdduDyRR8jyTC2bhDCmQRnVw",
  "key39": "5Wp2FNpHFKRxHX25N6wCe39XpHUExTBmX7c8eCksjVv4gxWAD23YjMG9EHpB9F3evSTrQskbcTLbhhARHQxDxtyk"
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
