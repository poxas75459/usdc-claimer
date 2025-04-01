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
    "2p16JaF86JjW623TX7qQyKkBJugEtyDxdfDqRNGzF8Y7HWCVUgLEWT9Ksp7rznKJZp85nd6PGnYSia6GToK4xdRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gtLy18UCdiK78EJ7kDS4Gkf1SSVac1XLiYPjPhRH3Tc2yLFjRnWVZoKpmXZZxuC56JWPc3TgjpzAnRYQPm6Ebj",
  "key1": "3RszMh38dV8MorBRFbo7bH2ENjW91pWkCmQvDRPziaUUeh5opLbzWvuE4CM7yBFCDj1ny2sGfubf6DjoZhZmkWxb",
  "key2": "2YqrPamtWmeHc1dwF7up6JnFN4A7e2ghbk9Zpq8XTP51rzpDQqSW3VgLF3AmJbKLzXpT8bwLpeNksrvuPL2XL472",
  "key3": "3N8LqP7ZUjJvtoAbhpAL8NaGhJ6aD3MH1uUgnVTLPgXKzQft8r5HzVRamvU92yqR8cxRq7zdoGiiLBcWFxXZoLz6",
  "key4": "4Bfr2wKZCpYNZfjRLTh3hp4WAfZzrMcPFb583kf38D2w84Wwfq3rKhnki9UmLN92HtjfGYf9wqZvLCaNzf6DNwX6",
  "key5": "3CQ2SDG3hTQE97cGkT6Y6eERKDFSCLfM1NtxsydkUnKTvavbdcXtHDdCPL9uM5d9jYwrV1N2w1nhQfVZSF33azVm",
  "key6": "4tXWvxdY2Nayt9ibwkpZCkaXsxLBuFn1ou2QwpbARBQBVLwwQULrYjHyEmtLjPcS7jwn3TMetSuMyzZEGeqHzTH7",
  "key7": "4MNDeJhoJWUS9odCZw39FW6NyCzWMwbsSvhYoqzUy3KMdBzK9xSoPhf3m3EoyRbi1uRZ7ob7uSK23FxiS4hi4G2Y",
  "key8": "391zra17WjYNB3KeLgnMEZnnEvQzk42AXTariYXvC2WTAVYERUhqCPWr6YunFYBmgbz2f48tpTGji8sfmcP48s2x",
  "key9": "d1yXWnYyHcujUxnxq25ZkDNuWU28pYMGXtE2UMduaQTrrqbzYqAQx46oUqAXFtcLR27cd4EfwSzzW8BiMft3Hu4",
  "key10": "56STW6ckWwi5bL8Xt7CPXifcGS6zhLFsZrBsRtybUJkoESFhddw3rwyCnEH8ERXG8SQ8UhNAcHzAK6wnjsFuxMPR",
  "key11": "2KW5bFP4vKbp9ikSvfK7TDNJ4jqHzB4QY85XGVdxg4VgMZsyfvzaJsreS6pXDv9LEFALoiBW7Jpq4Aiby4sfLm3y",
  "key12": "3YXqeTJ8otgBoaWydb9LeBH8zP3JcWjW5hsHngfDrqJUDzCBhCk9jpGZiogitxdM6TFKDKr7di4Jji4ULQ9hTpmt",
  "key13": "4ns26cZ9A6D9dzVT9q13YoSJpDMhWvkoorxm6TiR4wqFn7MhCcdmehG9LAx7cgpXLcJajwL5J17p7Y5yPKUg4McJ",
  "key14": "4FsgGftd8Nj3K2ykCqQWAuat4BFHgfaULB8CJFKh2CWCjuYUPqiWskXmRwtEZPFyntFjrvomZNFEEajgWHUN6GwG",
  "key15": "2YWhBTGveks6K3yf33cobQpzmpkeY9Luvsc93TeK9brtL2e6HSoQ3pHjQAMdZ1Qtscd9GguRVcYQkPcv51rqw8AG",
  "key16": "3sXydkMKVTNQxENsKaA3gkYasTWxzhjcE3edzeMbaTEcWZQdo5dAQR4o9nV1Z3wF1rkW3FpWMJ7ZvWE9ZEvAdFEQ",
  "key17": "47mJrGUYnLywgknroYbc3WaC4atqHP2Ft61VTBE9xZMSaKAF4gPQmFYPffcj7d3GHxq5huBeKK5W1PfMpmarwuKN",
  "key18": "h53NCXKXZEgN8szXLTBHnu8FZPfDC1n48iGauzHs3KQB5pu89NjUVahFEwtLb2oeuGQ8JLAgcTb3yPxfZHmLyK1",
  "key19": "5iR6t8eAYp9xzhDZm2s6PQkNRAGtnXVvEbFhszpak6RXe9r1e28GWiiomMoGnj2TE6yh4goFHcNsDVSx4SPCFQKi",
  "key20": "2VX2V8u6nZ72VHh64kgUZT1uzu3WoetsYHtxRftERX6SvtFxsCEzCCnVcJM7vTVKrP4jCxLMMggh2TgrfRkGQLu4",
  "key21": "36rYtktBhFijVHTebEe3neXMLXWWEdQqtn3Yz9VHzbmE8nJFpue4NFGVU1teE8jm1U9fW4KvVW92Tr6qo6NS6bv5",
  "key22": "4P7rzrWT8iVNgP5x2FXEJreYcHHqbTj9HuaEZpFodpWeoAyDjftvQVXJbzQ4wb7rKkKcAXMYNe9bvMnKPMwJj93D",
  "key23": "AvFRte34jd7gsbxujk8zC46DARj2HTrrjXe2SRgvgdTGGLQTGff7MXxWgLwQmuhH8WUPDHcuosa5BaRdSuZYwun",
  "key24": "x1XQ2LsgabHm1nFhza7kYd7apR44CNmn2JhmZ9A5twsqMMHLkqScwRZoCDaiLEu5vUAMdhXoiFSogXNFNbpephc",
  "key25": "5Wx4kZziERaYdM2s2BfFEqAkPoAvisGZ6C8PTKdF51QWMyrruKhveV8uvsPRq2Uqnw6mexhRSweKgtkDyw76YjxN",
  "key26": "5JuBaBpLmfFC25zczdpjWSm5B6EN6mZ6oykx75vWFzEvEE8vq2KsxNqvUqK23L6nek7pV92xwjqJypPASD95vcji",
  "key27": "5zjGoazhU3teSvXeuV7HpQ5DuCxeZo2iYRPSwD1jxx3HaUnN9Zo8bWdpzuh3uYAUnMGN2pS3KpNcYLmGFcRdET15",
  "key28": "wNdrofEkYBNDcgPwo8Nr5z7TSxCPa18LBurUyS6UmAwTbFbjQzvMADciPtYL8236LFkusbwzkH1BugxJXmsGEwc"
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
