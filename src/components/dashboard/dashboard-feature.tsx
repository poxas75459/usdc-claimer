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
    "3iHzsehJZ3MQ1irLwjTfsJzjFwAYUZsS3UHkXr9k5BsJzwbwFco3YcX5d2f5E8HHZeDXQ4BbdDgK4tYujnjRTK3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtax6ZhGnhvqRtqHBQtsHVnWvUFWzciHRS4Uh6WNX6giP6kfqdXxVyAu3RRhtffrRfg3anDRdhhq4V47PdfRALq",
  "key1": "3SqBkdWAJ4oZb3LKDXpNuV2NWYzZkHboAf63eeN1uZZTkDbmbdzBFnRfR2ArQMB3wCf853jYcUHX562iqotnQfgS",
  "key2": "5QaW3JkvmLmqmuXdDMFnbrNLavXhsEZEHXNkbe8vR4VMJVxxHsrBAK15AeBd4A2X3G5QPFQnrEASh8jmichBYed9",
  "key3": "Kr2S9scExH3vPhxycdbnB6qDzyypwQkvizBz9iBQNgFdwZVXXjqtDFTgqxWuoMiYrq28krvro9Ls6MB8oRXAygr",
  "key4": "25ksq1ksBYWTus12P54SjwmW1GtXNzGohT413aaPdHvsaVt6EMjg28AR2pE7nXiAXzbgeboczXnZHgG4DLfPV5ju",
  "key5": "4iBEL2fZ8XuWt2q7EW2vDheEkHfVovVNrpSRHeyVSRaL7wqpLq2qPW6YV1KE4AG2fxswesTVnSbQKM2CG2HhhJyC",
  "key6": "46vLutGasr2sbeXaNc7hQRGFLEmW3FkS3SJZoeaGeh4BVzFjyiLL81aQMssj3SMXsxypDV26eb6kRUR1FURCakpo",
  "key7": "3GKDR9G9Sr8UCX2UMBkwpQAikDF6Nbd3LzNQCfBnMxvzLZ4Gne6ont7mhdUTtk3koLNEEzHnxDtaxjPg7EzCHxiM",
  "key8": "2EgVWU2UA5sQ8jdVDWJs7yPXGtHbAgH9XpvBdBmsw3rTVJegMvxhFXLQ98Q8VTULxntdjD58KUp9SVwVWvvkM3cL",
  "key9": "5KrQceuwrt9EDhH8fw7rbxARnJ8eR5tKTUnm9CaC558JeF5H45m9wpi9ZLN9MhEtGuvaM7GfLUsdYZFQYfjHiAxB",
  "key10": "2qSu4N3h358fzoXTXN6XsoTb3HgE7ZUzjvvzwStUHw9SsXyfbZc5ykgSKQbMmzXP2jE7mWLxcxgyMU3EYQjYPR6X",
  "key11": "e9gM1C9vXbDHenDkAo4wJj484GprRo2Liu2fVKeDcKxjDxpiBhPvZZbcVBCHVp5AQ3bvtmWoK2AbAydpRCnkVvz",
  "key12": "2PhjUqFV1Y6cisk68cKpUXnLehhDYngCvMGwXjZkUsmzqKbdkJ4dHVwzTrkQsD6Shc7s4PWCtHoBXmjkHtaVSJ2D",
  "key13": "52DaHxEfpPTSrQbMsESut4vkTfmcdMyazC5fhNorkRPZtg8MMdj8feHD9MMgVfTyLB6N7gS2jjFwkF1dTKZGTbug",
  "key14": "2kMQjYew3rjNjo22YYQrkh8otqfaZskWgkVNDK1h5bLyekAZkc8DX2ComRpLgQdyiBwxhw8VANCrgSSN1K6svA1P",
  "key15": "5EvEsx4ugxLFPTT1v8xGq7k9hjzehKyhMt4vMVuhNQKsm6sdJCrcAAvSraEGcpac6VQgd473TCbq8KteSesUtM2g",
  "key16": "49EcB3Wwqoyy86wpL5Wb3STYYccvixuEEjvwT5rdRPRycPFEkUxYVsYNEhohYU2ebd1xzQpv8794SSXoiZwxa32U",
  "key17": "36kL5Wz9VeYFMagGsFhrpjXNvrdAasSXtDJXbjyUTUpCFXNzkjJKmLjVt3CXKBAQFYEvDohR1zjHnH51AcqLxCnS",
  "key18": "2Ssne54iPw6rKu34AgEj3Jyjc2trmGuoGcG6dU8XZ6bH719yPqHx7KoV5jCT12R5xzabkX8kV1d8mLxyW5W7zay5",
  "key19": "5woWjiUi2RfUPrHXmfJ758SefFBxBJhL9Ni4uZd2uk1WLCoxigVxHPWeygkcLwCvyfgYnLw1ABWuTwEphNMA6MqS",
  "key20": "3TsAVYHBkFYmMA6SgmwWXsrCBVMiCJz7twsL4jFmJyPuczNyn6ogEiRDLKAdaGCKhRxtLCnsq1TjPdCTBMwjpMRk",
  "key21": "3rpbks8DFs4ZNmcV22JvBLNiw7SZJrFfunpoesS4tBnt41BeWWoBHyGqFZuEvJX5LNEv7HXAPafv8tk1rUL6WPCG",
  "key22": "5STsYH54ikXrasiNFF4MPfkPYnDmfoLGNMdviYHGRpbBbd33RkncUGwdn8jAuCQiup8CBLFUK5fepsygQJpjuQgd",
  "key23": "5vJQK8QZQMRQ7xMeNPhR16qSpwAM8E7545HPFVx7Xt255KzzbPtwspjtuQxExt1u6R85ywRq5a1NkNen9mZYoPNE",
  "key24": "3UDssFgWkwM4YbzBTsKoNXkUfAze8YNRLY44fKEipKhUdGjwfB1pBiXSAagwXCyPLgSuaqyBxaeFEAN2opMLKiTT",
  "key25": "3r7YLnwnrXDsoaKeCpPnT2mZrXXKA7cqrXwrjagLL3FxiHMsbdU5wksVqZjXkghk6bkbx5GSHoTp27yHhLZxD4X4",
  "key26": "32k3mQU78MRzmPqQRHEVFEVXwDkCwU92ot8ykRKQDMK13k67ca9EhS7QycesqwH8Wiwi3uQ2uG9WCVxaUh6og7kK",
  "key27": "5xCHcy8fDfDR2f6AVXtQVjr3qdK3GtHtJxNCgT6ckkb2xDv3MuRbF8baLaemJ76hgRv1zmnbWHP3Atbx6UAqLDF1",
  "key28": "4LTwczrgVXHzMmnscpP36rQBQTjSXPa4y69z1j84UX1XgmEJ4bKMqXqvJkPge8YLmU8oEid8kXqB2daTohHqjpB7",
  "key29": "32iq7wQ6Efufs3eHBESd9qs1kqgZepvWzhebC7G23svbUgv8BSy5mY9FNYViXmeEVCAAsjRG2KTKPZm8Pvy9NWQi",
  "key30": "2KaU49LMpuLeGrJhZE8HCxvidyYYxDTo71Wiag7VmFBAsgsEUEcgA9qcRTbTbpB83wt9yS7BxnLGhuV56uTVbXTT",
  "key31": "4EzLGp2QJhbVuncfEBSWdkyPmJkFFHjHpPScvMM9RBzM1tzbV5HAtjZ2hZFLk1eHSZtGjSfzDmHvaghZi5GJwWzA",
  "key32": "5o91ZVDqRcB2UCVGAq9NNtHPofUrdGBnJeonGksMXHQDpskk5aUVph5G1RPSvdUXcmFedzeJn4d4fRvmpSTggGzy",
  "key33": "4ikZGCXokRXLULe26aagy6Db2Kpz7a5MwugK378XNxGWxUCJPejTCYFmF4u8GaeUpEYkvgTUCDyH9Y5beXR4ykKM",
  "key34": "2Doy4EDfPLas3EHnr4zem1a7nZZTubu5bRfGwx7oRpESGgSN5H1gSkMHWDtftnxSFR3DPb6EJHZkU9w5LekDCq2G"
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
