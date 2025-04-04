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
    "4pFzBTUN8CxgeVJdbigWHrXPKfbnQJTii8bvw8dq1MAAdBvgWnVuUoujXg4NPZmuBKr7yunnczw8KqyAraMiKeww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWPfKgwW5DSwXxofvxCGFT8wozr2nVU8tpGq2z9xnHzP62fTCFRrWPsYwXCh7HPCaVemwwkn8NYbJGcLDCtR3yt",
  "key1": "3cpFKSGPeuMKFow474uczVezFu1LweHxK1ebWmZUopXYmugcypqfZcbfUasZeJLAYCQtc1uphUDvFfE6hoqWEs3L",
  "key2": "46axNbKq78GVMXTQDvWuiJbczZngLiDqk8SALDWucazpp3Jfw9BP8eCUWuDCmdQuoJg1PtFJ53DjCnALyyVCrUau",
  "key3": "4uUaMTZEvZhyMZjx2qsUTZuGLhcrKqT1hGsKwJuzHnovaXjjkX2NFX9rz6SgXsHckUH14UerB8dyX1ZceZY8tUCE",
  "key4": "5xtZYhMR4XTpUmFj8EVGkYz38NMjzmnZiCoBsZk1K3zx7iMkhGARvGmFZRz8smAAdYFTgJvAnuNVM2HUpsQGj8xr",
  "key5": "3BinrGffEPaEg5jpussVUQz3v6wugbGxytdLVHXS9H8s4dGzUz4X2ZHL6RkNEqoHzQ1jBMagMBEZUxnMUggg2KSy",
  "key6": "4gycBjK2RE5gvzpyL2MGq1CpVAQPayp8a6xTR2uD1DFLsMogkr9JUvms62bmpFvMPBqh4rs4EaEAHCrFwdTU1UAf",
  "key7": "5DLYtBVFaxBXRd43Y2rgYS6fkGBGUAoStSHyCM4m3xbbUseWDNcqk22LzEQKkK261zuoFqzmUHG5bsVwf7eCrR9v",
  "key8": "6UMvPUjFLAJYR6o423W5zJaJqgGkQEEua2VxRXxNDRmMwfP7P92T36CDHTvpdN8qEctXEpoQcfrnKQXtiXqZCFw",
  "key9": "32joSzQUoM5uoYUxDSBpziZjGfKXubm6Cjhy6kKoCssjr5NXx9cCirrdv83EmS9M7spFGbiusXcfnHHeQR9f9ZFH",
  "key10": "2BFTro1n61TNoSJR2VCzRnaggfJdk9ftxoANjHVMwJqexZ6ZT6DPknfCKa5pYhFDKWWvLGNyDig34y7i2FJ4RxLV",
  "key11": "5LyEDySuhCqXDEoXjXMPQnetBuGjWsvckr3dizFomr9drUTj2wJshGSgehMKSDzjkeYkWZ6nSSJgCZUsj6dEUMnA",
  "key12": "2J3JXpm3bsn2jn26if9SgrYmbfujNU2nvNnvhmUQvk2CC5EkSDTircWEebkUkGvCRFjmbZJ9jCkKSHuYMg3La6SB",
  "key13": "4VcBW2KHSMqgmsPJXSf3HyZXRasSc26RrycEz4qAhmxQxdESmSCw9GfNjCoKaWSjnDPDxaG72HYvVuahWDRkVtKe",
  "key14": "U4CbzXUk7Ax93xVkuxje6JPHu1h4uwxAbbaqmP44LUd9hkPUyMcn4YVWEP67qgCMPGUUdGCt7vqefupFWW6Vnhc",
  "key15": "4s5N8P8Didy8inmouoFq7Kb7YymMXctud3tZ5aJxSqaWQMaJjczhYuLCffxQwHx7ektPAExN3TRZo9ByZVrwrVqy",
  "key16": "3AXYGLotMSM5NTu7b5m8AAVoRdydr7hutic9ZtRne7UJg95NPeRdAPCti4ctzg1eEuwyRmY8LTg3Q4Ws7wNYpRPZ",
  "key17": "212nKTZ811i7aMJrHFy4fFYNF8oT6pubZRunacyVGiXCaodC1X9BQ78G2ZBvU22iPdRSyErjjrKpN44X3U4G4DjA",
  "key18": "2K4j2VMGLoH7v6yHY95nEZSYBvZeBViePLrkimswu7ixWtfyykbx7uHNxteKVV5jnfXt9vG4uZcH6xqSu8nnmeAR",
  "key19": "2DrY167v3jpKq35XXXTeFQg44iV6wsKbjLsMfybBj1K8KHHEQUwyY1Hq2DdZ9uRk3SHwXufq2c35nYBsCutGPWrS",
  "key20": "2ZwAk3rTwkZDFWxoiX1Jj7fFj3zK6fyLHiJFPau2LxPFMYbXsRv4XrP34uiHWEm4HXRi5xBaxuedQUzDxtUo13zT",
  "key21": "61kyKErfycNd2PjL2eKWTycaL1Jhes5qq3oqGHYfDKnNBugJ6YP5v468ZvYMz3K8C6hoKbWgSW6z4Adg56a1cdgp",
  "key22": "5rZ7u8V8Ukq7kJGvnKoe4hkV5CZM9YvmSjRcE2AgAsgM7XKGqFrrCCi9Q2i5YMTHXmTQTebZvUsBjd7g22i8FdnT",
  "key23": "3mTPcyoaSDiDjWCBHZFssmHPaErMwpvWqpvaGR8aRn3oaaqa8yxprzwuKPPgfyqxJp3aados2gpWUfzmFcguTukr",
  "key24": "2aUAa9eWxs2v6hSyQdM9RrTyDe9fUnxLUSNZEvFLaTAxddUDojxUVE899tnBRUvGXmfLxHbPKwfogKTFNrdWFRSY",
  "key25": "4nLiNEcShgpXU2N2n4g73bedh2yDk5vg55gtG6CFuf6riCoppWrKKCXicMa8cEzHwTP5Duoh6Fu7DEEgURtPdmiZ",
  "key26": "5UJRiN5WBpKnLyT4NZYMLTCEdqBMBfaZ2QMUPH1sj9JVAdZxbXBtzQSw26dp5RZG7FhpCDNRhEqfhfXCy3ptw4tK",
  "key27": "4JHp2k2X6AhczxZSf4A5RekiCzS2Z66poYvtvnzX8hPXx9Z7Gq1GsP7jGe4dZefyqHmEoM52FGmySoQLV3Lptgmh",
  "key28": "4Jmhjuz3sjwSGaQpDj6gf6zAM3miuVKubTJD7QUWKwXy5hB6AkShRYPTc4qNStx6KXHzuSQpn8eHNu9yMkx8nwqS",
  "key29": "4T5DJQXUNHqZQhmHC3sgWB66U9Fr9Mt1HfH1JmTqQMEKdCLBDxPZY9cJZM7Gn2vwegAHZQRCaBM18UxNphbtnjR9",
  "key30": "4rekSY6q2TiPixt8TPeKqqASjBeuMnLxsdRcwxdEaAvgBtNVBbQCWnHH4tVLoyUVYeSqZoLfZG2STZqmhe4mwSpz",
  "key31": "asY9mPqckuP8DeVnZoUDuUJT2PpbLtTFe4hKjXmmnH12g861ZN361x4DqvWpbzjVtDS9iiU5fjheuUVMWbvEkso",
  "key32": "49UqNrCYKxCwKXhUH4t4u17UdWPa2jnAFVSCJnSwFiX94cqZssRaZtcDdwRuWBuQhPtpM8QqNTz7x34m9n3qXuWr",
  "key33": "3BmmTTriy6dhTqsim7eSNFpGzY2bgznM8iNdZQWsYWerTwikKCZBosUEsj1LxK9UBPxMyug8G54UBVdrtGQDXbEP",
  "key34": "2GQnNjkMe9ASpawF5T5QZALFUnYtp59jwzAb1U8YXfdK7xmxj5Mc1hz6gWScUArRt21nq7zw2XvCdnp1pewUEyrk",
  "key35": "3L91xbphZZz8hvG3hipN4epFXjRSBGU2UAbmoXWChP5ocyitzMTfXBJaVSzGuN3NsqzpDxNNaXNPfhbE567Bid1",
  "key36": "4nSryVWaoUDv1qSLYdSQzQzRdWixmgDTSCx6GXeSACEw388o4W92AWxvw3EMpqKnZYQSdt9GbAfEnLeTr4E1ePTv",
  "key37": "5HLW3WpS95YEaLxxGEyS1fHdYh7kn1fzDDAds3ATBo7FFLYJU9SaZ3KabBkeTk8hVNZ4M51vH198JxDG1qpDGg8",
  "key38": "4XL8R78kZsBCJLXm3eimpAzNhqF5a1v4WoL5t3A5PcQfoYa2wCJfMEGvzQfqkfCVvPyPvtaJbafLRNkjfwENYpyx",
  "key39": "4LhCV71ZcESH2XAMYKLmujosW8cgMRa8R79gTZn8Tm7XrRHsTnduorjXSUmxsLzGRppQz5kDQkF7GdGrJMxqfGYE",
  "key40": "3K1NWCgM2QKuuxtTpm7tv5n5A4jKvj9W8WjYRbiDsQEBAqsX4TP4cJXJnkwgHQ8a2SUXdQMvXeGS4MVqPx3HDqEo"
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
