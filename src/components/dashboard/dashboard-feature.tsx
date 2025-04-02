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
    "2Ae7QYzLrMuUFJDzRWKMt5qeVxwCxrUiRJ8Xm8Rn2qNgd49FkC8xW69PMsipG4eh2Yix59b2op3KkdHV2Cnj4voP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ne4q7Yk5CEVTBjY7yDRv6b8rqdSxephr1mbubythZzUXug9ENYG5FBWK9wApunm89ksb5yWxcoBEcQHR7jtXP6j",
  "key1": "64SwfyWWTQqMaWLx7kJKmQ36dQirUJk8oBseMXo2hbwfdhCxyfBXguZMaBuUZdLnnou2syUvGRX5sysN2rk9zavd",
  "key2": "3ouMoQqCkEwbcniUqLYCrno2KWMBAuaXQYimtmEK6i6jbUQpSKx7BsJ16KpWfBgcJDncC7Tg4k4F4Y9VWBFgFPjQ",
  "key3": "4FCuqn3B3qd5GZp9AsxKNPwNLu9Kz1FwSQUhsuMvBZMx8N6W5X97Vnv3uHN8hMazAoNU8QC8U3PRh153aHB5zVHV",
  "key4": "4Wg2trc8nPb7jg5emGjLyKQybzx54upQ9xjhJnPv9nmVoar1YXZbzqMzrcp85RA8zs6YKjucEDaWcGku5fMNr2PP",
  "key5": "N9oR8kYTvNoqrWUbwAPNG4jP3jJXFAmZH4Mx2zFtS6s2xjNKc7DBsrZbrU1t8MtyWqgXjEiPGgUJVDFRBHaBzBM",
  "key6": "5gnsbvCYGc1Toqicnu1L4XoGLxgQ3HZA7ivwfKwPeoCMvXqS3Krrtc5ffuB6BwSJJUh1ihzFb2UqD2BvaujJbZ9R",
  "key7": "4G8V3KrnY4ojgrme2s4wpaBYvbSiNPvcd4Ho9aRKJqvc7ZknSuPZm5VKuWcyHkZXCQYXwi6cEoKbsQXzviYeC6i4",
  "key8": "5Tfy7rQbAuK4K1sr64gjWDupkFj4dN9iwrFKCSM95rQtu2oeszZJPb2MWU91SugXBVCeGXco17tKxSzD2tpXBh2N",
  "key9": "gbomLLHcKfeBPqXLqnudTRBGzcZzztWBrZYMM8hXQPw9C2ogL1RLTAU3YmCzT4Msh6pvJmc7S5rwwDR1TunEHW1",
  "key10": "4QH2zwGic25aBjDzRiNbkQsSz5Ms4N5DjKHw2A8tr1sGoFt78wafvyDbARBEA46HPAmzEeV5tV1jVu12vktn3Dy9",
  "key11": "czFm8EgH33zfgw4p7djQM8Br1d6A6hWsuQ5WQHPKGXwWdTdeqETQefsQQgabyGdZgYPv2pUqwG8CEN5YAbqLqtk",
  "key12": "2E5n8Z6jdfeS9N3L9ixuKnnV2Yo5J1m5ecgCQPBCojbk6sb2x2meSte6ypv8oB8Mhrj2Yo6yPWgg5JSSdyCTTw3B",
  "key13": "4Wtg2xWfei1RhNdQFBQpdUtWxrWtw8vPLxPVC1WsuT3diYWqcbJApbHywfYjFhimHVAwj3KPUmXFtGTTdJJWHBps",
  "key14": "63v7erbmXHVPJYBAdd1LEU2n7Asg9rYePDUsBVHxd5JjnhbLftVWeTPkcjtNCJjegf2FtetshjsUaYia3GwnDh3h",
  "key15": "5hrhxb1U9WxdTSeG4nGqAsCLJUERnnhiZRoXinxX3xt31De9P4DrEogV5nHEWTpFKQYtHZZaVKkLcdAzwyvX2AFu",
  "key16": "3Y851uWn1MuxfWVqhQpJPgYsb9v962fUqod5yWWTU6FyGbK3gLu4XbHimjK2jcLGp4M7aXoDhFui3C3moHF2cPqr",
  "key17": "2RCCJNArUny1d2R2r7vezs23fRzt2eEmL6t3MpeJMfzuEZ1J5uh3hxEiiR4nLbdLqtYBeGNM9Ab7BAq85Xsfccuj",
  "key18": "5s649CEeb8a73rWeyLKwKJTJAwx5KXLFMz5Hxa8CENTxcrBw7MYxzteSm7NtvTW2jU2ZZdKsirVdztW5PrZ8fxRG",
  "key19": "TneLpd8ejJxBuzWujCwQs25yjfKreCRjvC4ZCDyJ4QewYvJpprexVPFNrU3Cexb78pFKQ7UM3PxNzrD7oMxjWUx",
  "key20": "5cfAeeeNNuph3SE9vH5PAtj5e1YQ1rdgs3MYWqHncE4KVdS3nwtwHcRCrfW3uGr496JzzyYaGtrJFhMb2uaZGxCB",
  "key21": "bpXr5wpZE4T6hKJpjHEHi9QECgMpuYH1DxrXwvDTEhV22twekoqT1JeyDd8hmZEFJdVfwzuUjVgnzYyajKeT7wg",
  "key22": "4HNV1eop1ZTrm2TWSp4Dfu4nfVEHNZ5VD6n5NR8yZHQJPBDTsbQFVDnHJ59dnRisWiwwMUBdjxmvfrMRUh47tjMb",
  "key23": "4vJ78oTTj7GeK6hc4nuK3PP9GhWNmbzqaSBRWcGBzAD23z7s8bSLzCVJiV6DYWc7H2GTVkz7NduD9Muh953KtDkq",
  "key24": "26f7QGM91ztdfjsy7XKhcrEQBcYiKLdgCGTdpZ7fL7N4RmfErms1Sbo6E9z39DyZg18KUir3Pjoc1rRWJgxc6Adb",
  "key25": "82CTcbtWpW9xfjijWtKHzUo7grpYCuukmjUMD7R12RZ68QCpbM88tmNVGGRZQw82pcryQ823hkKpRRVZvbW3iV1",
  "key26": "2gDwQ5JxSRu2WYTwe8a3jiCYHxhincn3NCo29WvWzM9BwoPyiaHoZrB2HaYvhfedTW3TQPykRfHnevQs3ZEK9cs6",
  "key27": "b9ezhYhH4Sv5nK8RxPriKqspHeKq6N8s8GGmAacXANe56MwSRKDBov98QtFb9Znn7Dds8MWWhp4We3TrwZX9NLS",
  "key28": "2DhZmArmwkSK6CoPdNsqH7YzBCSFQf5LYKwYcGCp2bgHRDzYQ3odGnce5LQiGuG7fLXnLZz77cz7nQUNGQgrsAhD",
  "key29": "2xTk84265BhLUDNZVb4CuU7Cgq8Yjvx77wAg1aghczHvUzKzFKhGcZ7hkTNf4TGr1fx32KpqUgKi86k4bnSAHCRN",
  "key30": "2KypnViokvBgbGXgea6TCDqgqDYZh9arrTyUoJXGM1bH5Hwa17aBTr2rsZ3nNYCy2GpZNz1bB4394iVTQecHH8XP",
  "key31": "3oTtt15Cb5DT1D6kUqva3SCEoXkHX9gkfUhu5zXvgP4UuVVTfwYJXBU2MM8HoB5nkyWxti3PF8aD9GMTTnSZ8QWt",
  "key32": "2aEQggaSgkj5YinVC3ucAsgwA8CRWtQjReD4B5E7encH6Bbd3c4mXENHXSJKEDyXbdzujN1gvZh95fuYpoG1chpd",
  "key33": "QP8VHH5H422k5QL4FhuG6bgwPAD9ytE95xRoWZQsgWgkir6aeb382Sc9LXVpWLWn9DQTH8DnrougkR7s1TGEJbJ",
  "key34": "2nsxwqPwkFVGu1izzPWCsTxNB19ZbCyNHqAarfw79PZq2aJzeAE5k4vtiDcfKq74YxVoKFKbT6WEeqftyNzVDe6K",
  "key35": "41cbRA6tANBAiMfEpM5YeoheGyS48hHWQRbuT4ipv8nScJWQqUmdeG1nXBjHJqfQURmqAWNKgoTcFemhPNzriAx3",
  "key36": "6HzEmj4cRNPbXN7GHXjdmQKbgbbhVRf5EZzRkUcyPPwEoCazXgDeUhkL6d7aGYySdXuQfygafMqPrA4Q8iN4LLm",
  "key37": "53PLscRodnr6tZMXrEUzCn173qqHSWgNYHBxkZFVXsMjvotBxztML97m46jNDdprc66NUzBBcHuuKGRSCk8pM32b",
  "key38": "45wwRvAqk7ebMfiGrrYnpRG6aoNZDBWgNRnyRhyVjES7ZdeMnTpvT7vr6PQpTKayWbnNmZcGrbRiTEFQCBwWLS7N",
  "key39": "4VkgdBkpfhhxMqAQeGZjy6qseB3hRmRVU4Y9cqELk8Z1fAR9ezQ2gqeumRSBqGXhs5RmGAa4SNpFU1ec835UHh2F",
  "key40": "RRjqqUiPzJQtqXHt2K5pezscYZZjFdF8p35eWhoti6pSamSzWENEovvavJnXLExLTF4QWyiw3aDo627i9B82nzA",
  "key41": "42J8hXacmeWicJkXtk6NJgLR7a8RMjjaCGtULWfxnFKvZuX5UZguk1ejG5widrPdhHb5P4waugYeNyyC7sKRdohu",
  "key42": "5vNvtHXaxxvUMPXY5pQZr17tqxqdA16gbijK1tifg1h6jRShZbzR62ugw6iooDHscgrQ3GgSAcp3bEzyhyMNKnLw",
  "key43": "bk542hXag1PbRRD9kxuvuq7RKaWNUwp1MThH6Vk2GazwbkTzsASf1FDvtL6LFL28UXZPUoiPttCBZ6Sar7mHaUN",
  "key44": "3kooNeATKNgY2DMcgoUFBHGWn77MwvyhCxAZeA8Dayq8rgB3n3uvxYm5PhaDpRHNPBZ3ktJVcWwuunzkxPtmBbF4"
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
