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
    "356LJEotKa8ChZHtye6aMh6krRU11vVJCzNwkmCZxe1MmtLPe11i19dRGbUXbhVUiN1rxHGbNtbuyTcmjVEij6Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDNteDGNJBrRJcPSPDChFA5ZMzkFrAjerAfjEkng9jJQDATeqVtNTv5ZXgZgxtaRKEsmPB2A8cCEhYa5BG956Lu",
  "key1": "4RH59b26qyMykzVvS8oPfXZmyzPBuPXGVURwXxH6e8bCxJEaJrfBKygbqq72u4KjcYhCWJZk8Tp2yDETuyt6z1Gh",
  "key2": "4HevBi7ekjhFasoVH1cVfTCsAKUyC8c8NHN1nRN5nJYfb6Tu18E79wEkEg9wUuZUGeajfVUMaMBrQrb9dYTZGmLj",
  "key3": "4QPxQPaLRVXnRHa7RY8V9VUnFSznH6dNJatxVwgm82oJbj9i7vZkKSLDXXLdkVtotkCQaWFQNvVJVD3NEuzNkNH4",
  "key4": "54E9mimEvBLitahfYerduB8oyx6E2qeZiejCbBg5VQmCq5wnKiznqE5GPe9zppkiWbSo3gmBXPQvzpUSh2C8m4E5",
  "key5": "5x1fb5Jkq2LrqfVARdSos49fMC9F6VfiVWWK9QfSbLBuSTGU9SU8xyUJhPQLiVkbD5vDfF6NCw9Dc8tixxqTKZfa",
  "key6": "48P759f4VpH5Aewm1UX78fZQVQ6Wb76AHFEbNK76gT5baWamXojt2rdJSMSCCPi4pN37Utm2zp3QucQqQcSRQSiL",
  "key7": "4aYE7EFkjxqAzSmtfoCdmEzQKW2itpVc79ZuTDYPMEJHMmmn8Qw7GTsC9NtCTTtPZdppHBZUe79ASghGAvRGZbWL",
  "key8": "49sxSCi3EQrE6oJ1nM142n1G16qRoPGotTp1yAU3XkDPZVxvM5YvYdESFwKxm8KBZ3xbw2W5R5BzB4q5sLoRiKgm",
  "key9": "46EoEHosGB1NQaN2nzzjtND3ujnAUMPPhgX4fcjoSpVpbF6yGmFdh8yHooiGyti7ZEYxtP2w9Q7rK853hfLYrCXj",
  "key10": "55kd8oZZGTWgjG8UFrUa8Ut7Ywo588cLAbesV3z2zXx4vF1h2vcaFzJzUj5difXyN4HSopwxawMfAAMLTj4SPsr2",
  "key11": "38LVzmLRXzZHXJrDwWbeRXVkhc5WLuidzPsS54WzUDeuq4k7zwQqJgdEyXZkRtBsLJ69Foze55UyH69sz7DyUrUg",
  "key12": "5VokGsMqk1zfwhUcyxufHkeUVZJQ6N4GdcjBCJGxodboU9xAton2cngEGQx6BgrfDwPni5oHVtYbBn9VBH4iAfcz",
  "key13": "3APKYNpJgyThuqCzN7QK9SXsVVBDBfEfY8vtf7fp6ws3Ugh7YWdkSnX88WDCYtEvYY392U9kCLarQ6stS286o1N6",
  "key14": "3pq7hjUgeFfctN5yGFgHJXMSRZH4YvfyqFEPTNDbLF99Wg7KDr4tVtNGJEtGcdN3GM28J51yhwgAZmyrRwkXsjwU",
  "key15": "2DuDG7TU8bnAcWtx7j85UhoqqNxDEYULTPivwb5WjFrdc2oQKrbrw6CxKcDwaU1f746uR1RvWkDNJFASJmDdJz2A",
  "key16": "5UBTyvXJbrpn2ozE4FrKnKVgTNJ7uwZ3tARKzNqPHtWZtmhT56za3uPGAvumy5DcL7vvrRkxt7c3hdmAVm4Sgw37",
  "key17": "49hcUudThy9LFH2hXBXD9Rm2uDqegMpsK7bqHsMtgvCWSEpwuitPbzQJp3wWfYaaurB6C5TbREJXpVLJhg6x6WqF",
  "key18": "EkL1M2wsvHivGTfGaEeMJFy9ZRVXHk1pyKJ6D8Lf8wXaCRR32c584ZkTdjWoThtD68xbmvxcQeZpDrpP4nsro5Z",
  "key19": "3PZdUpQApxFPkgPguWfhLksEYaV6VgeuuuDhe4LBCVVUHbPJp84WQ7XjViVFR9oLRpGXLJhug6FR2ftfgR5Ft327",
  "key20": "2HU6TegcZqCWfoj1cshCqtuRE7mKvdYgGrGAqgZFiBQy2iwPN5bGoiuZiezCDgnfKi7kZQWrhUUzCTM67c12wndb",
  "key21": "4uGQfqJd32ixUKx1E7X2AKfxE1WtcFYaMhHhqbAa79v5JkyqrEJHUCgHa7vjQTxxcF97eQWCRPYnrPauQujn1jWQ",
  "key22": "ywwGauFGyLzdvibmUjpbtCRkvpoeHYMZUqQ5mqpPzj2agudiKMj3bZwt6G1HKHHhpQjrhTvahzBmXNiPQe9jQeq",
  "key23": "5uCPoae3EaTGee6aMtMttcyowJqV7ARWHntg1kZcF5dwezsLzKvxPUa2hzKjZtCzwNyFFsZNsB5xEFtXBoox36Rj",
  "key24": "46NJUVCDYSHdFoCz66UFQoEefvc2UpbWED5rYsAESBBwfRWQcQ5RbMofeoTzXU2juySb28JZduaVemrdGH2xxYc6",
  "key25": "4nij2si5AJDi4Cuh5rrwPoCsjSEugJdL5bXutBLxpvUvXPus9YfpwCeo9QLBbbsdSsnuqrJ7c9FpvuqSLMyE8JtD",
  "key26": "4TKaDtoSArryu17M1DvVgALwUwoU1q6rJFWs8HvHsNDZsctMwDWyyVyBw9t8EebFzZfXuZvzk7gyB7knG7fM7Sqc",
  "key27": "2y9A5T2fBbjxHRnqeVTrawEf5wRsHBVB1SNMCWG8FQLX87cPakUNojEfS8PJpZygiLraBLZRfQvKqmWWRtHYDNCe",
  "key28": "3wvGsoXivCRqfrD83SWDw3TGGvpADwmeE9kJsFgE8v9DgM6gpM7vrqXU5htFwZj7vfQfYtaRNiJwn9DdGpfBLMiv",
  "key29": "44yW3UQvYKkrxwt43BvoqFyEBCbcix9H3da2tMhYNZrjDge1t8q1fbdVRqqBCGcTCRN38CxMviVad9xzz4fu7xA4",
  "key30": "4aKajCiMLNtzS7f4RrFziERJJDc5t73xbDvCs3sQW43TeLa1RZQ3VtvGN6jrxjZ2RjazzVHxSxNiT4Bo6dfeoZdv",
  "key31": "37r3Wycccf3Qginj7d962qBUzEqwQwcRAnpnfexeRDvTjXEv5dajy4jvL46SuQBRLy84jQcD1pubefPzMxcsrBCx",
  "key32": "ntSopoMQWX91PFAkUNQd93H48HP9N8wRsohd1JJivVpbJd36JgDWmqEQZ4UHvJEA1ddHqEcubwdbU48kdL4E6rX",
  "key33": "2aRW6YThNi5DPQ6CMzErvYSzRf4thQsSdRoN1qjSYeohdKScZsqbn9RTaRSn7EEQouJhQX4taXLiTVUAU4zYPZrD",
  "key34": "dGFB58D7HBtZKQdr9qdKiNLnrc8GavEi9X3beuJQQzmSRAXWHD9UqVDzqqUzE7YQPFzF8khskY38DDPEZz15biQ",
  "key35": "45eXTbgo1NEgvQTPxGQg1YtXSBvEVd11WzC1iQQaNBkLZnA9CBPYwYAPahYGjXBD6LRSgZacU2gvoTEYgwLbTG3m",
  "key36": "2aghaVJdPAwkVm2DMQkdotvGJemYdx38pcgsFN6G3hL8WKMc5BSgKXF7ErPm65JUFfcEuTjhqUTTJTqcayWBqSGx",
  "key37": "2wf2EUfqNkDU57ujW5ELi8AAGPmuPapmuJf5WzqHiyvSoXLgSKewmhBkCZyzxjTFeepE6XLcSzJcwfGB5bsuByEU",
  "key38": "4FV1dbUMqHZ49bK4ZcZjpVrHd38Xeg3Qudievth3dEsn85smrqE91KNnq2rWge72YLPaKtoCZYr3S1BwxNBniRvv",
  "key39": "2B2jdWRpTAKmgsbdwoBGYFxs24FfiAi582o7caiaaVeUqukr6r1X2ShrZtEDPqFWs1BThXCLJogbL2rbiiWcvNkc",
  "key40": "577oxoNjdmuZ7xK1MYTHbVBKbyt9HionDYBAMevcjaYL3h3AiVjeoG8smX79YYBy3K4qqWNVz3v1EAsyMvx77ACA",
  "key41": "3B2nLYBVb3e21u1fMkG2LaVrjZ8RKNNYxQTKFQr13ZHP3hkc3oZPxtRi7xsxENvk3xtVmdw4uN6e27jrwbv1xFRD",
  "key42": "4pQPqejv6s6fMd6ud4WUTdCasHTSyYeZUmEHwEoTDwKciXjUK9ECeDiPts7mrdEZS7titp5gKq3iAvvPd8dDnrEB",
  "key43": "2wcVE1kL53oHujxR7vnKhqsWvvFHhT9LKzFooVq8EdVjTXHazz7dfbzdsKbxXYF4VUbbD6YHsTgWeHyk1y3PzKcv",
  "key44": "b3DTA8L2fgFGHv6XgNnHQcpiY5XU3dQCSFHCHgpK3dhbsGZ7PiEUMmYMajokEswSNmMdhqqdwyfJZH13QnH2iRa",
  "key45": "4hLKkDRjs2EwJY7GHgJpDUMkoGPdcx9pvobJKg325jSyRH92D33wF823dhXUnt72prfyMFphGGXaZ7movfzptSDD"
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
