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
    "5TzNHF1gSz3UkrcBEJ21mptFRDW94JNhMmszrx4oy4VehLh3iU96gB8K67Tc3qv8HEv2b2bJumPW87RrP7DyxLw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4z2wj5bsNWY3kfq7XsrNJUBv7pqiswtmUHEUtEL4J1MhnubX9Z42cijSQRuh3uULBo8H3GPqh4AAfDK1e5tuSR",
  "key1": "2ptw5WrJ2SSXLQymU9QfSzmcxLbkbdMUPdAT5iCLyhdi4iBfWERsJnFtoeqkFQyPVBt152fBzAyYVDZ9VDR6Qmo2",
  "key2": "Yq4AT8eoK5aNpRkKTAyc8rCzQbv43gogYaGFu9wmeDzinmtW4E6CZQp83r7rrfUjAoG8cbdE22PaGRaynDLxoGz",
  "key3": "uXfu3LeLDmGzuyLow9K8oUJrnNMhKZqesh64cCQqYXPC54r3pxF9Ut2LxwfocDPYQMwVW9HXBZm1cEiFBeDrqrK",
  "key4": "6gutWeXVQUSEsBw7TtkTigVvYfrx6PimAffSprCrRBfAWZQzZMgNeXL9HB7U4k6Pjnh7zois7iHVTL4B5DYPxfK",
  "key5": "DoqN3bRy9a6NZhk5e5QfaTW6Q5bdYL2gnK45vws3Vm47C49vTxVz1FSGx4HQMs4yNikx7ziWdGMM4TYDyT6HQ7A",
  "key6": "3ARDgWTEMkAnZ9NHoshB6bBLzf3ox4ghGe79qkM4SZ16NgKbtbHe5vAS3cQEab5RhHdGXaT5sz165FfHxaucvDjz",
  "key7": "2WmGBtoHq4J21tQWMHB9FfEgDboStYe5F17CtaZXMVrqxPRZV6g2YgaxqokoPjtJq8JEaQ2bVwVYuUaqGBj4BiM3",
  "key8": "53Nyjynux8fEYzGiBEyTXdTLMbqFVsssZiMVzVhbh4fVSZJbs1jkZNazDi2d3iF5kNbP2jwDNHpPNegWpgAeEkMJ",
  "key9": "uTLgvq6o27UcPfLTw4C3R3ksqEgiPkgzhnqsnFmdq56ZqyshE9dVK3HrBbkyNRSk8ixd66NZj7m98j99YLiyjXQ",
  "key10": "3vWpqEx4Yra3j1LGKE86keP48gQhKLthZdBCR3wWJ7DhJrv5EnBCGQXhomacZh7rNpcMuwwUHF3P1DpsHPqaiKSF",
  "key11": "5AR2DwWemyuebaNRg5vq757JQLrTXMuZGd9imj5vrGmqXRCQisyfHxAKhpceN7YTQ2MS24FfP2Nx4PcWesNnjejW",
  "key12": "3h1HYAgmxPD7D7whSwBwjnT8XEAmEX1mBHX6c9Jrn6QgdAaGEZEQCEG5oxWnvYUk9BCW7832damtQrgTYtF1Afvo",
  "key13": "3TToSWTaVAyT2oJQYrhS1uLopPHSyaCiFg2sgQQJH4bR9VPVnFuGsu2C77Yz2CRDP6BMD7yNdSFUEQJ9JkMyKkEP",
  "key14": "NfqJSoZ1xbjuRfXgdYGbspMpmkqpeYeifWy72rFJtWV6sAnNifhLcC4vPbsuWxtbb5rJsw6dA1ztR36rWahSuxf",
  "key15": "2HFLAQMprEWhD1VpMRvM1rYVJU1H5zKB6WQ4F2YbsJXxP9hApw3VzW9W3jBw6thiWVuB6yQVr7TzMZ9zRF4cum2z",
  "key16": "3pz9zsYpF1N1BVkgq9WJbyjEa6sNtoyZRCpAncmqgFv4JkL9Xt1Q7TrP2WMsv2jwJPAYY3tnH89wmBPdyadS3xYu",
  "key17": "UqQaPKQxMtxk6GWvY2Riu1wXDgF8Ld4sunqwfpFW3hjzqmH54mxg1rUC6kFu6D7gTp52gpde5hb7oYQm68rMNJA",
  "key18": "3NvmRd38bBfoUEko1Ji3VSshcidJVQ4Htm755Gn1eD7SiwpedMxCqPkjMSkKY7eeP9LqvbUkmQMnZyM5R56RLmZF",
  "key19": "4J7AonRCqMYDLhjpo84qWYJsk3aH6EaE4uWP5P4XZWVkWUc2YXdd1H1tZfdLbxZomL9qEkhYq48R9PC54xHGgqRx",
  "key20": "39wXcaVMcBXfdAKnhA7FxAFPkMi6s9sak53gLYzKFTtS5HqGCCVMTRTNnEJnnDqvVko4LhFY69ucvKjdPynutFhx",
  "key21": "3aQczBZkqBtuzSZZHoT5nJGqco57h6dxMS6FXQW35PzACTCvRmbiJ1inggkSSLASgpoHVNMLTPszo1NWc9hvYXWk",
  "key22": "2WoBgq4Uko9PT37AEu28dJHhbeue9j9LaynJoY6YYLXnKupQfabgZ5YJS2FDYLq3REU4ZSRhC9KmTSp6TeyyNQkw",
  "key23": "4hfjf4UHzqkr4AzpLZB3Hhr1tDD4fyz2P8tQuHd3bHMDrWFhXP1WgErxLYwUMa1BWxU8QwDFoqCtGzudhBcqwkKc",
  "key24": "HHyypTrD4X3QiTxv1V78MvrEaA7pMtUBkZgLezbh8xZuXAzz3FitZRxGmBczMQTUcyd1xuYNsF22RSeRdgumk75",
  "key25": "492Yqn31mzFvHZTaTPNfz9FSsmNZgbKt63RtXpDWw7z7UAkLujfVxvyb9St8rU1pB2t4LLwN9hc75hBdj7Z2sD12",
  "key26": "4xkKN5JdbWchLUkfPyavKQVMqM2iAHjjzQqW5ibbKsTeQXYmJzCzYc5Zy1PUo8pKydF8srAudjPbG28j6dajHZnD",
  "key27": "4mPQCNoN9u8DCt8dsQggVF2sVpmFt78uYZMGLDRKhGVC7RjRqWYQefBzXiEgu85VzW7MvjM5aHzdZhcRW8EVwYs8",
  "key28": "2tp5hhURym6C3ebfsfJ18cH2nuXxFYAc6qSVa1HrpR5umEnza8tNyVG7GNB3KxTatsjAjxEMYXRiee4ioMFFDnU1",
  "key29": "28AVwkj8BBBURKayxWRVNFTgr2VHabPVq3jkXvVoDgWjeaSvXxAQM5s2otywWLeJG8KV179GSsoCe8hyCjKbMjXa",
  "key30": "51V8XrhQYgZ6daCAsHmiq8XsY2YQ2TPHnZ88gnWFvJxqbH8oSLy6E9UHdBdxRojJfEsEPyjqkhkiovwJtFZkQRLa",
  "key31": "jpY2yqyfwEbcqDrWJ4LwdrMysUiR4AsMTu9BHidHaoDkn6TGUrYmGNggEHm6SfDPhy7wkJ8HxttgD7Fr3Nrq445",
  "key32": "5fae6cnEQ47ZwuwVTVhJDj8oq3SqfPfEZRfRquHr1btqgJjbTiCT6DPNWQ7KDT6MSJje4hXHaCCmJKPPxa4kEfv3",
  "key33": "2pGTM6728RBVhtGu5jjFsMLtApboSh3wKarWcwmQiNg19HW1hL7FpoeNBKpzKfamUNvs11d3TbpMqpyMTFcfA7yS",
  "key34": "2EXbUzQLzhcm6E4csWhYFRJVUre51i8j5LdVftnYcnocjHcwZNdVSL5oWy1cB7DtHNZRnbywMCmbkqGm8FKskmLZ",
  "key35": "5Yhy1EQSnHb1F8i3pZL7T1MgpaxugjaoMr3Xpyvv8L26C2Zy6KQZhjfctwHbHsUfdDcC7ro6SzBWVYAcfpwyXqwb",
  "key36": "4eBULZqwumbZaXJjzGu14pb2n5WQUhJRwxS4HAXaJcWeodzkNbWuUjofWJEf5ChRvxT8ipHGpUsDeP2KcWd1Vshk",
  "key37": "2u6bCoxMMJGfgAoUZxqJsL4VCkNTHkChtbK8aLbPjTrYWa1CaK4urauWN4F9fKU21zsbBxt9LJvZjpw4166P7vkq",
  "key38": "2hTqAEGz676L5MkUA56JhHMbqe1V74pgjM3djHDAexcQdYc5PNxLqZzKm3zvoiyPSWV3e729X6bQpLxD4o7PC7yr",
  "key39": "2TWS5S4zSMdWiZuWuhQzUAosFhvuT4hMXcXqKP5ahizobbU7SEh2w5HZshssqZgpRRUjJXGPdq7tKaE5svaz7nKv",
  "key40": "31M1qL3mhmZ3EzinHhE9jTvGrrUjaZSfDUhohL6Wxkn7H4V7nV865hiuPEmjJv4z25EMChsBzLLA65RmvLdXcNE4",
  "key41": "2b2ByCJLbBgDKjei6wQNE5xqov24vmgie4Zi8Z52A8mgvKcCryhTZvxa49wdi7ZvjnJuvyaCA7duRZu2G5zJcgjK",
  "key42": "2bqRB9FJCDuUxswu37uYLH6qjue8uxEWLj51JoVRK6BmJARk1sisxoH3z7KTik4bst9zo17TUj1o4STfSsDwXjDn",
  "key43": "2FUm9x8Cd88eBmHBx7oJEXYDXdVMFMByuM9v127z8P3JQdojtL1pMHSYXbFu3T8rd21dD8yGVnZRHWHAQhkA6cWf",
  "key44": "2vjnaBZ5vqzVr65KdYBMpoTrdbcgsVe7zxxgAzsQjCeTFSiCFssGtmH38trk7feiZcz8u9Tu8Mww1LLHWi8j4nXp",
  "key45": "5WqnvGngN1ZbwH5VcFuVtenjzp9mTgyR2qY94sBK2CRvVWcJuML5J1X8AiyhKRq1EBfgAbGZEd4fV9YvMgZRjzfB",
  "key46": "4W3owuXT6v95mXh4HSiGhVxohngxqfdapdcqoteRb2UMWh6X7K7TWmKYV3UKbt3YxUkGhejxwAP2Ln2FmYyw7Soc"
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
