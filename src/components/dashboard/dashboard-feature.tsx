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
    "5monfJg2zWMUQyWs69goAJwTCALEFmsN6TCqTeiThZoQzxxJAyV9wUTGziuYkNoK44bgwmkCHLm24qRCLRcdVZ4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wMDutWVCBxXFr1NiFsNoRJePLSTjpbTwnNwqa9YgXKm9uHb7ePC1NtjEAXX7YLg2S8J8pUPuT4nve7CB71MeJP",
  "key1": "5VgP5xdMyEA3pffwvo4RyU9Q7R3KNJh1tZT2FGjz2kVgv4g3zU8Xm3xkNK4rf9csot7nZs5kJ86bgM786wArQDtK",
  "key2": "5F8fBeBuXWHyaAv7KWw8nhzYetRs6TvBJfnFfuTp1dmrz9r7tBepvs8VmyWkGuLcxFVit7i7QwPw1f5rffzmyytX",
  "key3": "FY7bSCzrvK14wmNqVQHrkWU7ggNFDvV525j5oLKtC9qXiBFtn8UJp94ik5RmZ8MMDnG8RaN2fFrYxm4R3QhcG28",
  "key4": "25RFAqYox9ix2qgoQgZDgromLQGGrnpnehfS9AL7oEcenAdJtKkZdyKmpWmyfi3T52nid7tSHfW2RYoMpjbKQz2t",
  "key5": "2vRuuiD9k69E86FLogUtt2Bx3R9xb8xLCE66TRLnjgYwP4U7XahtdfJQG2gDGPchfatXP6P32AqFkbaeowwCrE3U",
  "key6": "4JxyfUExDbRAMrU9mDh55owKtC6vSB5iN6zcxhngvC1ddjgi6nS1CsZVfGzVrmic7iniyz6XuMEZtFDfaWtiaQQi",
  "key7": "5kpZbCruajSNoYdpFdRLGhRdTZsfjuE9wCDoKjMR1xsL1FHT8Mvb2PuLrZ9Fes1sY1HfcRg11z1Pz6NVPfPxBuJ",
  "key8": "3B1NoTHk8SZMRXf99uMhsZ8VvQKh1K2JmzKg1hTLgZkCExmmLhxUMFPpYtFMsi2KBAyJSuZfqGcnDVVWZ84zDgW5",
  "key9": "5L6tsCAe5uscxiymLPAeDqCda5VPz4eN5PLuFky5AXVTYQcMKoQAzH4Ah2mYFggUZupuj5n7ihR3tEcwtNEAjTF2",
  "key10": "5Kh88XEzwt5KqsTnWG3e4f2EyfKbnXNy619LwrCA9nj33Y6EaArQCbcpLwtmQGhN11fUkCt9wTEt1p6FVw8ETDdT",
  "key11": "yY2A9C2EH57LQQFJZ8rm2q6HNJJ2sYaZGqXYNjC9My9m31UNmaFcRQkD9outSBBQLPp2KMnsnHybzGtYHKVHJFd",
  "key12": "2H8onCZBwhNoiy3NqV3emStxHjnrc9enBSbW4qeAshQvxWGWZgXHYntMmbvtA6v9fLTEmKAphkadrt7CWP85un5T",
  "key13": "56k5qi8S6vUBfsJiJZEYwB7xpUueiLa3DaTb3P5XtKaHQ1oqfCqh529oGxXTAhaP82k8A2T87K9GfvEV4BSAF3Pq",
  "key14": "E9qUzAhEUzpWS58weghrfntdyVPPhUt4442EyFTGsDqQNGVk7BbEAp17DybdWmjizDEztoMEDUCabVt71nMXMNh",
  "key15": "2eU8vN9PexPjLk6ZRY8GqUNgQhEHJUb6JMsUZHvT2kfd4GnJYT84Q3Pu6fwaENkJT5YwZWQ2dbfzMeM6rexzNECt",
  "key16": "3okiQkGijcj8PXd1H9W1GB1fsmVHxf56y5Zw6Het5x3bPFzruhJqkRLSxmX2MphAwh8LvRdhCAZ8YsBaPGcbsLFY",
  "key17": "4LpaPhM294AymGsFsYF8mXr9eBgaNHCGdgqXirKjcMFirzAFW5y7L8oKKfycRHqXkqjZFfC5psW4fQFJxvtZe13n",
  "key18": "3yYExtxMv5YbkP43nfAaSUj3jfYf2dBdCxWtHXPY6KbEgBaQ5Ska2SKBdQFCrx75ymvn9UiU8P2KUCusMWqMgA6s",
  "key19": "5S9TeALKLoxAMJBwfhrwpQA6Kr7d5TnuNREKAoBkua4aLkEKdLemEW4dj269eKkHAMEGfAEPLv1bGqFEvdqG98BE",
  "key20": "65vzkdanLWf98bm7iVqBchBdxiyZ9HyK6sWeSEeR8ConHimwgCK2yduER41fvrQvkqBjoNkwA2pxCH6aqg8GxiC1",
  "key21": "4WmFnnhwsgU6YFaUNwiziNK3yPFJm9rSDhgtA62HaQxMR1e2CgkgwZENPysXJ33cFM1vN7DzDB3TbHA9Vr6gCFKg",
  "key22": "4jkPZg6JtF8hUseNzJ1YKGNUCe4yHGH5by5tp5REgZGRUUVfcKMAnr3Pw9aVDSbVhAd3nePwYkrp8VSnhjyBipnq",
  "key23": "3mZGPANRxGg4gmcJxNvTH7ooo6QyM1v1eYc4napRABgDwrx7jLzgN4zcDrsenPtosvkvyhw1mgoiQ4GMvXjV37Jj",
  "key24": "4SpoJxkkEDqejCDxDrbgdHGiush1V8ovGJSvkc7MRuvziPeZewon4oeiRzu2CtSuoV9L8MG95rwU3Q57Ab9equqs",
  "key25": "3qBs3bG1rLGvMCe7t5oJBJ4Ez9b9H4d2MVPTNAwTfgpomDA5t4ZyYUoqH5fgKAy6T2GNGbAYKrPG495xyEBeQBpw",
  "key26": "2ZQsdnMddDJ8KZB4LFvGXAbazwRYwC7my2VaHpSKw7KQJpKA8nJTXmYpUZnicW1dkdAFMgbH5LyWZ6cRhBWjrXG1",
  "key27": "3t4HC36wnSkxBmeiYfuHnNMJFif1NiVHf3QjeyLzYEZE94XSREhmGgXDVEGUYHY99qHqgz9nqqQ8JbFbtACoeRCu",
  "key28": "5ySipMuxcyyNbgnP77BVciht192cpT4ZsqELaaL3xig6irjBzG4FYeUGRaYXrGK2e2W3zT3v7dSKi5XFygpfsmJF",
  "key29": "2G1Q4fFXmfu9MmbhkCuS2kZirBfe7LjfxKVgSUNToZSeyNpd5Gq3YK73Ace38xFuqbMvVCz92437gf1rxidB9Doc",
  "key30": "5AVFvPobut2f72uMTofbwEDvJmuHfkUqT9uveaepQunJijySYu4ghw2ENzincwGHJEAhBReQU6Y2BdVLqHSnZQPN",
  "key31": "2rUQahF2djeVLcPg7b8Sm4h8i2dah3qkHHNQLrcqh8vVB5kYaajX3MATjFwkZqeCtoqc7UwRYfKeu7zgeHgq1XqX",
  "key32": "4bCVQHKhzGE1odWNu6uY4SH36H9ktjqr8R24tF828vS9zMfGcQys9G6occTjov7NnQxKU4zmVRg1S3aqKLXT6A2Y",
  "key33": "525ayTxmkz9E34NWcCRUBtGh7tbJ4WLcAdKHo7Ta2JSHAqr9NGUGNWt9TkdMXLhZ2kve25qMxP781U7yoPRRUX5S",
  "key34": "4L3DY48gkPz265bN6SsmoHwavMPQLLoFxNXwxfJZkENA9aAcBi7U3FcWhHNuxQAJwcRsu1TVYVZcYbsAJdCbAiqx",
  "key35": "yMDqSrPbdezYvtdjKMX62pKTMGbYV8Bzxj43WoxgJfVesvrjpZgZPqUYy8gAeqxgDPXsSTMtsBSWoffuNPt3HKy",
  "key36": "3bupG4eJsSmPjuw8cyg8ufdyrE2P8MjQLpSLD2ur8iUd5ahVioTgCyCbTH19wKY4oMA6Z7RUMtyqcaktfXWFBGQv",
  "key37": "mAXDzKoXS4pJ9XdWqBNvNmB538tNT3ixTZmQtKgYJ7zHvQcENnT1hJfrsP98WULYcggGHGsaK74Tcntke7pQWzo",
  "key38": "4kT39TrY35in8qS2BLRQhuTkkkK3bVEgKJopRWDc88KwJNrkzrfvQnLVE56JEZJHgXQB83QUVktz3aY9EAKUeoPG",
  "key39": "4cZJwtgyxjZ5y7YbzEpjik6RWk1gQNS2BchvRAVB1Q9pHRcg2or1ESr1ADXPomegYLcDNpXHbK5aWMz6SPQPp2Z7",
  "key40": "VPMgsFqpPFHT19aPywojT96xqs4oXqgy1QwQMzg5vLEfWDG4CtAp3Y7VgTNs7cFhNoCQDMmDsuZAjK6FqgnjXrZ",
  "key41": "5s82LZ3arcm5sSo7pkMXRvaTzBivEjKFTSE2WZPxERZjdrKUZXbh12Z7iaYLeBWqwpfSpnLysXsSuyTKmNMk73tr"
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
