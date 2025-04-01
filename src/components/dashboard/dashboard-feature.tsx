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
    "2S168ceLe3f4Qh1soNZ9Sj771bezF4FWZhzYWDYM12Y3djJ5zVLYHmtFi7dr7xZ5aH2fq8PvqeBLnxZNE8BAnuYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARwRHirfVSPuizrTg842mibWKhcziU1iJN2JL9vyfEYMzqGcvdxvVVJWopBiGXHnSVNpy5rLCN8b8pzj7K62P6f",
  "key1": "2vKEbBgZ6rJgbmP5hyzgF6dNnMtNAXU7z4KVBKT8o5qTiBJekHdJiuEZFQLdehLNdRwXCCwC7dTSB56ucZtAnMin",
  "key2": "4jaYcTLMu2pFJ5qDEhEBdgmK6SezGZVmWZpPP2bFn5X9yA1rxfHBxXHzwGD4H2LHks6xk3axbAdM65NpTKtcqam",
  "key3": "xfmg2mGzD2iia8kfdtyK7wjPMuKxiudL4KNNKEV5prCPbpmRCQQs3zBsxsSxJBgUpofjwseb7A9thiPU8Zv2RxQ",
  "key4": "4C7UkEueXQJF68BQbBRg8B55Pb3w2SUCsXQWDGBmt5vu1KoUCdGwaLzmDMQdSnQt3ENregQAc3LXgX3rKpD7XJQZ",
  "key5": "36GTqDexJCy1LXL9JadzJuvaqSPo61QyV9EbGe2LoVzMXxgjZg8bfiWv2x2W5dXhBJtHSyyqwiXuBcUDZpLywnCj",
  "key6": "66wcir9khPXMAxNzQLAkNWgZ6rcXxnjAMgnaabwPVUiVsNJs9BTXSNyAQicY2VeLFdhQeCVwXy7MWiSmZMKzTgnE",
  "key7": "5aGfQ2dyvfgb5B7EBnyxiTqMUo5aEkGQ6KfejvxgcA398rkrXFsS9rhTM1r8mZMb42PhQDNvWDPALz6k3JuswtRQ",
  "key8": "53vG58CLva4apiKrTPnBvrao7kchfGdrwnxs5kYvwV3bmDx3iVgzFN4kzvVg5UFX28YuAiYSGYBEXmVPapRZA6pL",
  "key9": "4xsBB7WkjVjrLtpF1Pm2EowGeypZxA3ry5LSnGEwm63WrDhy5LP6g7xXzp6DGbq7uMDBwyc4oszRjfMZ3F7iWkLt",
  "key10": "427PeeZ1PMcLpafMqwcitQ7yFWLGYbMMmLAR6LQzG6fWcmLa96ZEcywvo9ktHCAmjpPQgsTzYNFVER25XutUkNm1",
  "key11": "3X4pQvRk9jK4WVAiWVB6544BMyUutE6ZWzDuSHaNyKZQ7MPTRvNimY1jamBXVJ2H1J6GeKaqdBpXzgqNiN66wMTt",
  "key12": "25UikczRVx39Rxv5JqpjMoc2zWJCRzVeYXPkYpihCF72w5b1WkuVsarwzASxZf8NLuS32ycTHvyLZJ8LGhWU4xsL",
  "key13": "6nCSijtstBzP29vxVQxWWRK5hZkpTWvcpBiK6gvgQ6hHoU6N4xp8Uw7xeN5wKZzNUmptVzBg42AcEh3bgS9TvKP",
  "key14": "4u9iuUVrwXotR6PXH2KSL9jXYqcvET6J8PN5k14gjz1ytZHZj77Xhe2wiAjww3c8E8u3mZxahKe7jJJeQWmhCUsw",
  "key15": "6zJpv1HrLhsFhBGDSVaxeqUbckvBUKNMgga4C9WG7Z9edrpJbGKUSsZdNvKG3e7CHUKkZK9GefdnhMyBWkKmtwd",
  "key16": "5gLTTtq8SvpqvvgnBnx77ctBu5qoYipiMrX1cu87eHuPWg8T8jff7DoQREsrotgqZyWtJWE8Budab8o4xgG5GfLw",
  "key17": "m1fAsPL6gDnvckQgSfcA5shsF5Fkw59i9c4HJisjqxV8PQv9bnDE67ixQJaKx2io3hB6jGHrqTAUTMG7zWMAZjX",
  "key18": "4ZpSyp2HgQH3FgG1CPjqAPqtUBPMJZxVuWEZCUnDzRQJhZWiN268Fz3NEMJb4WVYRWaKsZrsFxegQbrfJ3PY2mQ6",
  "key19": "dRTBMy1qQzF5niZPz4XSgcidqbekMUa9RxWRtfvpU4Lm9MHwJncBe14rXkMKdTmqR3qcu7z4ANyytFSVJudcMSN",
  "key20": "46ZMtyWXVGGoMNHav2MDEx873xXxFs6fg6z9DZTid2Z2VgCN4Q5wxjs4r7JgSn8NG2cLWAvUb64uELsEDVsfK7T4",
  "key21": "5ugFmg8MCChSUG1AEy8wahJ7213WinUhGDTEEyuUYrr9A5xPCnq9Z55bg2FqKWXpUTbgvABY7HfeXh3UbJYAnUKJ",
  "key22": "2Go6jT3syb3eAcxS68EWZM4RZzXqEcwCJxAmUBPFHugwwAQTtqRKotmWVskmJtv5EqRqARvxXNj6eGgHw349ScL1",
  "key23": "rkoAYRKkpqWPqbTtjQ8WfmbcxSSJvZ8tKw1hFcCcQJhzyjB2ZXcmYAXRdQFRLuWKTFYfWh5nJjZPtsBtNJqNpEW",
  "key24": "2STg9L7nrUpJnb5U4SeEQtofk5VbJrX8XTYVm1SZrmS156x6A6iEKnwpAG2ZiG74gaMNiEPjFUVTPkg4oKk1uU4K",
  "key25": "57EMqREM6gHHT2g9M9nRLgdx1cNnX9SmPfHdc63Q8wcYAHY4QAxB9a9eYXSnPeuW8ob35Xj4QyUjCJPxjLoMz7sF",
  "key26": "MgdnUYX9VUm8jgd3Em8T4Ja8xrRHB3WLnxNiUD2UDf6p7snJxWSVu46iXTya6SoKK2sGuQGmJJGaeV4tsECXTzC",
  "key27": "49RcUf77dDEgiCR8RnSgvCDGMXTuXNmmgW9TfjV6CCcPcpidqieYwxXaEeuJS63y8jnPt7c2PFNNkeCSWVA7bjFr",
  "key28": "3AkJAGXuBuoQXahkRSqzHRUbhegor5WRngas6Rntg7VaA68rVjXTEMMZe9WF2iP1oLr3HNCqTFijAVPLRN8V6rdB"
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
