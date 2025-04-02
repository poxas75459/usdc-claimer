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
    "ceLAuBo5pBBKyHrkYMzkbJHqNQX9Yx7LYvX6NzQwzpiPkL26377URZ81fm1D4GFxqH3bu55WntuT9BN4EHHMCpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2246UAP7GRp5qJDXideyk7fiF8gUCQzchRHybRZCTsEHe4kN9BEtcmMp3kh2qiVhWkPsNL7TB3fVERFc8n5cPRLJ",
  "key1": "1TKcivacU9JtwV8AAhJq9ByDebWc4m34TrgqfsDL1G1TxF4uy3kSRXZkj8DLYTxU9Cn8JbUEhj1nXT6yeTKo3Fe",
  "key2": "vFjGobaYPvPt2sp7H9A7y8k1hmCgj55ycGL4KREfzcHvQWJ8jMUafnUUzDWQrRC9BCSHWJswW1kMFxkDBwHce8B",
  "key3": "3KtB5QK4PbE8d1kJ79aGhdTEzATyFSaZCCQF3zEGRKK1LBLMtgRYdDoHkpfv5ZjLgrNrVhoNhorV2gsgvRvSTwUq",
  "key4": "3gUt7a7huEBV6c7BzTEdurRETi31DkbytwbyhqSHGYQRTx5K3PJrh7GLHwo5YQPqWHMkDnPLq6fLNfUbc46REWJ5",
  "key5": "2tpGSbJdt5EqRTbGL18Yy7YcX89cWmP7rP5UCGVdbTqUDKAK817uiFD5tTULqHazycHqSPwCFkuFy2ub6Whg5EdY",
  "key6": "3rQNLWzntmYsgcxc4xg4g8n8BWxw5idB8gULS5vcc42hGZPfmXziyo7uBZCtn63Ftg654PJwqUC71U468oze2g6L",
  "key7": "5pQU9LDX1N8h53mixeoXDTHvJzN3NPvC6hk479dkCRchvg7qpX5ce8YkpSpfaLrNX6REXqfRSjDPof1vWPHL5CkA",
  "key8": "4org6kX4yCszZmYK64Vh4PHCGoGwGdq3bZRDMR1vTUCPxipSWHRNyLHMcxNwBTKo8XCtnS8d1Y7MgS793Kz1TtDT",
  "key9": "2K1UzGryLkwZpMMtqgE3RkorRFMLLjEUcRkiKCVaToywQMZZVtLkfKaqtchZipxsbjoHhi9hfN4b3he9TrYddJ1M",
  "key10": "LexqHQXts6VTHnKPEutzFv8jxSL87CPS7mPugPApPsR7uNadFh8YqBKdbHrETtfajbvfiLVpvPG1y7SDgcyksKG",
  "key11": "54mfnYnqLWszVy1h8jcvTGshrxmsKhRgmm151WtbSWKsnF6xVH8EXqakKcWfc1xLWMuVhkMqh6cTAQjNz3Ycujod",
  "key12": "HuUPev48JMDzd6vRxReXXH1DccKL1Z4DrMqtZDngRvAWhqHE1j5VGneL661HJEzeuPdXGJ6Au44CkKvVgvJwd3p",
  "key13": "23EFqZxVgQyyoVVctbDrEqH1tVToN8RuU4Fnz3aLZACmbJes4Lr4yqs6AW3PzFyhV3VuKnYaN88zcQRZ2ozeSBdd",
  "key14": "2AvA3pQmKjw6hEsPha9sfUDa8j1ZLoLghGuwKZQQaTf1WkfQGiXP9vaEyi7JsfQ5NY1imrxiESbPJm1PC12A9so9",
  "key15": "3YSgcHan9HH3NvbFGGMHikJqaYju759ZVsKFkjcdfnfKmWJJM716TRNJDVqXWshhkRPUa6G3YiDhh36PKXBbeF6p",
  "key16": "4yv5WR7LVvjPWpJPV5WMowC57xSawSAkwz6r3FufaWAAALz75WeVjppeF9w2a9WBguKo48o6XSiJMgumZsXCSUYo",
  "key17": "2nYiTnDdSqS81aM4f7PU9UD3rSEB4vLfFVyyyCA8JLZn7smDcYvNrY9q7i13wub1xXiYMKmPekqEfZQrS4dEzHiv",
  "key18": "4rwD9fPdos5e6p2n5ddLxpzA5scSLNCHn5Cjb5Bvb93qTSRUQmzvDj7CgPZssZEGuqfdrgDUpTcU5QNozfKftfH5",
  "key19": "3KWfoUPJK4fwuQ1s9VzH2sFA9zuXnb6Eg6opWLd6ezdJjt2jTCAqVPrvfcYmMbXdfD3AvV4XUyD8tPNKD2H15WTm",
  "key20": "25TSMMXhshxtSPfoswqBv8Fyp2Xe3RGnuDiwDpj5FaaBbbVn6HcHDZrEUFPr539446k65dNUJvF13N1zucqvKuuJ",
  "key21": "4vVKAbqMc2K5M6W7jVosrkDf3afkBKP2nwQY52JYcLi3g8bNTFpa1dHBT1HaRsQUXpUwSA4Fi6j5MbnmE2DZ9yAF",
  "key22": "31DYfUvdgCGeneHkSRC38MjvLmWD9FuQRim5kGdvV2KXE5FTrqhfbAnBgFxDmxncx8QcWZSDAeLkZT8unpHhD4AW",
  "key23": "47BhoCVZY8TeWbS2ngBa637E9zYMqUarpjV3itXafWCqXakSqQMSqnGw4HcAEAEughpiV6uXzp6bAWZSCJc33Po3",
  "key24": "5HAyCrMFGSp9Y1NpLigScUnfM8t1PX53gYktLgZhBUTN1h5xPpE82XskzJXM1kqmdMsGpUSqaMSQ2yimtzbYeYRK",
  "key25": "25tdq4Tzowd5Kur9i9sAJ7KoedQDF33kontomDuhC4XHDZLWfkA1Zv9qABDyFyGiV5FBqB8h8ekCFExbhDefNRKm",
  "key26": "4oz45tUSHBXviWEYDX5fqBEPRwzMRnXsT52RVz3chk5FVmHV8gHw5aCMeHTimjVMPDeBJ62JFxfDfZSfd4u3vegQ",
  "key27": "2hX3mMfcJy85jX47NQUj5cXy8R8EfNcCeRnVtwsYan58pW8n5cMprcjQVWGDrPknwoYsCksTh3DYM4XycJrKm8Vj",
  "key28": "3ZVXqzAhEWGc1s4NRTAenU3566tLfawjL99BcFiiZgV5XVexoviaVrwiTaB3S67EMttabmWLVsWktUgjG2F21GYw",
  "key29": "4vcT6Ex1nA3feJMgSCYbrhKsMsfFwLuJZYSygWZfoCRwupT7CPes1VDyGSfGVqmfHPrvoQA6UMdrvuD2xonpj9cY",
  "key30": "4nV1yv9eLSGRJQf1DbpLKw6e3v1oY9LtxRz6fJh3TvbTorL9GywX6AozPfGBgBLnLoVA4sQZUoRMVt8DqBQu6sV4",
  "key31": "5GkD9fqdsFVCexHs74JP5SxsQYRJW2aSFZTsi3nLnUwWZyrHoykFdnyLstK8tfYHovnkEeyHaRoqePqhAhjcD9wZ",
  "key32": "EyHme9iLmb1MwvL1cejAAmRW6FHpm5fYpQ1jPUgUEYznNiP3KrhfPAZGhsACqFijQnFR9PGqcpXkJtn1i3E72bB",
  "key33": "2YArRgi7yco6NG6qMCuyXyZcu4wYhb37KdnAGzHhyGsaR5WKK5QJkPCh58Wth6uq5asTstmyQgZWASsrfgVqthym",
  "key34": "2MezGmsNZ3K9F1o5CLNTJuhpkzjFLwVBCZDdotESTD4kpcfHgtmBa9aFufR2ZGGCkRrVT5tVnqqNbsTLbuFCM8RY"
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
