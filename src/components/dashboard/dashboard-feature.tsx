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
    "jmC825v4scNG7mwzDQWDzJVC9dmPWB7RTZJFzZGbGGMdfsZ1rT97yyq2hS7i8Svu2Ev1Bnf2ZLL5fzRF77oEfvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRRxd62UiXhHu2cCW1A3CgfgPKhh8ef2brhMazFnRhRD32Q4rpVxqaHRDFKgpRnyivF2ufK3kPcT6vgyqkNvsK6",
  "key1": "3ALRZwvhNvfGp5pYe5Y8YZe8erPjvzFpZHVqYihxxb8UYWVBxbmNUai3fanZxcg18ZGWfXKPQCUrfnF9Gn7ykhKe",
  "key2": "49FWzXMQX9wusjvvqhqbDQKszekX7P3BiiQ7U88mP8YwoUJJ7byBK6ebHuYos29adDSz4DXvCbvoACFoKgDQdZ7T",
  "key3": "4AeRNtCyyNsooU6xjsMaJjUdeGn2fwQX6HTDjTNrhKbhQRSEignQp4kke14vZ5Esfhz9wUCJsYet41xWodaHiorW",
  "key4": "3LXXbN2YobP9rQMumy3TGJLNp6LH9QGwUvde8nni1wEP4UUnDGdA83SRjaNqFVsiCxrXvV8AZq83wKJBpDxJe7TG",
  "key5": "3SEc3UkUT5Jx7rXmt7PAT8Azw7vum2wmnGt3GF45JJpXWF3U5keCmsQt1ZHRtUdWY6d1mPWLNdFobQECYZXuxtVT",
  "key6": "3MAsj11chybkpzVwVLG78p7KjJDZnN98qV8wRPrvna4H8ZBRUDqYowQX3LVCgrSsoQPyPtacz9YAtNe8hSP4CSMV",
  "key7": "37fxjYUGVQyiXwhFu4G1xa2rnUvQXV22szXJrFhGL1Q8ss9MCHxe5fh5SaCVCS32z5ePGVx4Zf1jvLNURTQwT5MS",
  "key8": "5iq8EVMU2oKKPnLqd9Snwyt4sV2pRUaNwDTf2HodCwK1mbqK6uJmEfbnB36qDwwMo3dPhJzZpAUTDPmTNHhqRaC2",
  "key9": "2H7ypS9EQaNHGjq2PMKZhGiepFvrcWpXENBXQMXFqHPEjNsuYPRxBPLe2HjHjTyJcHxGNegjSP993DWaKU7uH2RM",
  "key10": "5kDtgmzuWGfj5eCZ86rE2kPzBrgAZR1FUsJsSKG7VHzWGEpyb3ma9cZ6x5EYBVbCsU6afsCrd8ks9oBKTY2jKNSc",
  "key11": "5fwj1jKwUeG3GVQbNNUC9vveNh5ck4kh2TuFsXGmFDhbQh14jCSRvMfDdTDnT7tDXp8TTKkBJDikGUPDKLUNLcQ1",
  "key12": "5YE62DcvgjF36QF4s4KSxu358y26WStoPajj43qxFg3R8fPYYPtXizHhZCgnJx4JSfcuoEWdzVvT5QL74UiHqa1E",
  "key13": "dhqytdGRh9S7zaNHUYNKeXu3NR4ALxTKsA8DH1CaeoApP2H7o71oqxh7QJMZ4uTtnyqvqMcTZ4PrpX4hZavXt8X",
  "key14": "449We6Ntk5252UzsvhNKx3yWLF1XZxLTxPJKqQpfHtLBtr5ZqjDaDWbWJECa3vENUS4TDwgfna8YCejkBYkfHxCG",
  "key15": "bwpywcHHRP6AWWz5VmqKms6NXFnb14SMed2nhtP5JvzwP8HDQL6LAdtFYvLy2kryrkGBayGzTTzW95ESkRrmky8",
  "key16": "2L2cYZ7ixvy1sYW2bWZMzEhpQiyXsEPLM594RJ26kEejzRmTxu5PH8MeTiWQtnMk6oMqYVfQW6f3kveLEyvfJC2Z",
  "key17": "4TY7qdTrkJeNnc62huRE5eRpvmMzDBE6ZP8PQuSRkvY44E6a4CXtrmSxPjU31JAKrSAFAZuxgSFY8FNnUMs7rQQM",
  "key18": "3VFWXQeEVD2x8LgsiSqZrrL1kTDZwTT8DPNR92BxrvsnFtVbADeAreY9H8RyX9QFXfN4Ai2LUAnev2AGCg1VXpZp",
  "key19": "5JSXRnsHd3gAi5BUBVUuZhHRnGxaMZruVy2c6B1Xfd29kJ6baDqD8PXAyT9MtjfybFPyQxyXt9i9cPYZGCMk89PH",
  "key20": "3KfYZNYDfXPYQk1PL9rNLx5vtEVKsR7qKepvBnPM6SUBTTP2D3p8egztNsGww9PixMmpF2ynfVyxAogHC3ZPkD2f",
  "key21": "3CEJHSoMttWEcxVn9yaQ4XG1oXV4E8S3BYQyoPNP1R3xtJFdBCuD7vKpnmHB82jt4NTH87hU7QqejA5idd6Nker5",
  "key22": "3wDgbAkxtkApPsjEhaCcYogW4puRTirgCBiKUbe1ycDjTzsuCXGFZ1SmvedC1VmydUY1E9B9er2QjhW16Q3XYLT7",
  "key23": "JJ8Gm5T46SuihDiQ2wzpxZEWArfxPdUmCaZcUrHtcaX7mcrAr3SujxPeNA7Uwsemg9udHnF7dRJDzeRbPiR4BPQ",
  "key24": "3JjipfR4R63sQBhUQy9ggQMW9SbhLDJmAtSU9LHKiigVQ1w8XApuXJsfTiwNJnxHNnnPx2b2qwbf7HtbskrLkr7Q",
  "key25": "2ousUV7eTHxb1aq9mFmhxWtHyRWC9fAPhPDAPnzGUXkeTEE37KXuBRafgionMezrwExb1iQfwCYnxgCobM6L2x5f",
  "key26": "4xLp1uT2S84mjYRHv73HDcCjt4h1siAw7J85zcXjHM1FefPC75F8aao7e6EZ9VbJhAkHCPfyrTRTMCCkLWmYqAee",
  "key27": "2CvQwbQymsCaA7W4MaUeBzgGNPMKhT6T4v2K7wEZSTg6W9uChVgsYqedSsrgdGFjeMG8SwyQs71d9uvZGYVYgiiY"
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
