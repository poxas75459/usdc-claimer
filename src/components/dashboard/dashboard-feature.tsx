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
    "23CnzpfwR8NFAW8q7wjghBmTfurxBC8hpGvRbmDXDUdRyuK36sGpDrx71edEwRjuYaqP8pcEtBEqDLFYRFh6ss8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqoymuUCSKEs6o7vLnAixDeJ9TmoovJ3sJ6g4ZuMuvsmCEvXAS1GRJbzosuK2yFMKMsWqVZQxFiiZpaPfXdvFcC",
  "key1": "2ViQFEuaE7g8YNWbN5cQadG1AEKmKqxjbaKR2i33kepaC57AK5nGDDB2Yf5DDbvciG1Rak86V59ffKqJDNYi1NJ7",
  "key2": "4tF5uocqoUPWZPQddiViX9ggmwPmNbCmSaWK5qKBuuyN6bdHcwg2cHkKwHqFDPyCqG7xVQ8GREYwujfPGmwnZfvF",
  "key3": "2EHqF8Twm84qjJkuhXjqac68cjzwpkndFT52owNWQ5zAS6v8EccuAU1mBPTNrEkTcGtFC8KGm95wwg6FLzUspDT9",
  "key4": "2QuTtC8V6E9wUJ3SPJuP6y8ZcWh5thCGhVAWgYgfKJagFtjZ4J1Td8Nf4RjfY2Nxzb1RzhPqHq8KDDRkaxhFgLcN",
  "key5": "3xdtKSsw6TaNrUfMwcMGPWGNPWcF2fCQWkQkbm7kJnRVHtxVmSxJdMvN6NJ3Pirbxnv7Sntfv5dBSzQsEy4nbZJV",
  "key6": "4NsAhQpaT6LAaoBhSF2ScWjydYixxbMwGMm2yptZeCtBj6zozXhyWmr1SG5ppxqLjRzhk3ED3VY7NqChuHRZ3hu1",
  "key7": "4Ri6dDroVNL4ZkXL2BQpaKTXNGCLffmHqL5Yhn1XUVX79QapvjR2inmzs6R6zUBDfynZcLQwwe78fKqnNv1Q8gwv",
  "key8": "vv773bMvWKLvbESZUgLF37SSRNs7WbgrGpy1RzsiHf4hreUU5z5Q7fWg8Atqwdp5p845oqGvAuVLnqJJcJfDbhx",
  "key9": "38FQr4S9KcYRWqhm1AdpysLPGHXZwNjPQLLwLn9Z5YFLm4YcHf9eMEdWw6xz4NAzexrVw3Ta23gMY9TvKuMebPBX",
  "key10": "3y6vjqkrevWzT1NZ9F6oP9Syxb8kGEG29msZoGft8zd6qdWjMFKxRZEPT9jMdADuwAm6DxJVvKgSAqmSE6uTdcFV",
  "key11": "4K8vQyJA6kPFXZhG48KjmQan29nWTW9AN36Dk1qmRdi1B36QAGcNGTNApxHxjH5FpiUs2CLqkDCw8sE1q8uSFzc2",
  "key12": "4A3H8kzq2y4NnDdWtoWFCeAUFq2QLmgsXHMJGsBHTXCE8zPm62AiRsFE5XeeW67kLKbPGGnqYALmsChkMADwu965",
  "key13": "4Lr8tHFfJyKraszMjEo8JGWRe4Uq8UppKYjbuAQYA67TQ4Qnvd5UBWHTXh7g5BptkSawX9yeetHYUuE98c1arrLF",
  "key14": "3m4cHhX8veJiBM4wjM4ZgbEBWckbkqCDoba1G8zMyy77FkVWKGV12aNd2bhwPpKTgGr9M6dViqxZFeShsLkPq8zx",
  "key15": "3NtqubNHcjS5TAvYfADAHUB7tfujMMfjdD1LtAbaDk4oL1o5VZ5VF9BzEHo6xvM2NJK1dy73NTirbR3RFqu4fN8j",
  "key16": "3DyCQBTzJG1TmMVMtR64FJz6XqiG53DeARFJs8BG8VZfHz7uh9nNSphDwLsXgrmYyEHLZp48zsYWURxLdYDR1MfG",
  "key17": "24A5r8bXafESTZhX8zowRzKNGRaTNk7ioJ1hWFqZtB8saWheHFzF1GCBwf7DUGJCbV8VzhBjUasmkK4DyfLewsCh",
  "key18": "EehnihAeM1tdJs9gCMdbT3fe24ebv4zfqAdCtwhdSYCBizVgRG7CcXDNYQzecyqR2XydczXSPWM15Q1H6QLtUQN",
  "key19": "2ZnwtYwKfPkP5MsJ9o4UiVFSnHsUdon4vUHfvty3MXNsAhffd8WCQinp9orN9scE8YjT8MtgWhYWEmqYtMo5UGpD",
  "key20": "3zvCUZ9hTWmhuRTZP9hDW9hTrsx7qxatEorgCx3V9yYfaB4e6vu7h86r8PA24BmPfTrkR3bufmwx4CAdJHq6WVtT",
  "key21": "2v4rZAfQgfVhDRhQMK37YXHTbwb2zvA8JoxNoSQ6hFSwpKkQQUjgF7M2rLRQ31BbDF8QWGYjEFzFLqf6XEPKenZE",
  "key22": "yyKRiKPaiPzzuo6PB6QP5Jihj3Mop1SWtNfx4XQ9ZVXgQC1rNfdEAeZfyfdRxAAQaDDB4jUGfRZaHXYm4SiA6PC",
  "key23": "X3bEbeJeWQ95a2M9qXiiLycFgPT2FohG5tKsMLbqvuGPZiXRPKCiWQid7U1m4b4eARq3WJy8aNb2HgsuB6h2FDz",
  "key24": "5V68WY6Ehimzgid1vqmN7DDuZrdJ18jxVHqwMiiLwSBigMZ3wrj3wbmKVwHqeQp22mdorvMMhd64imLVMQqzULSK",
  "key25": "hwLYSLijMQ83ECN7tN915h6y4qWTfXTvM3nr94an5yRNXQu9Gr5kEGtdif7FdU1ewHzSSePPC6sz4YJarrd3pmi",
  "key26": "5kNZPEKFLsVFmYdZhi4y9HXafwjn9eZp17Y5WdDj5ZfHpQgfUiAg1sxVpGBSbiKxgqkEvomPpBYTpRvxn2vkFioH",
  "key27": "4gN8Yfnm7qAs681ejBrVNSABpAnChiJjtiuWqvtSPo576AeUEivSn4kr2igVF8dVUEiy9LA18XD2WuVk367U6CSE",
  "key28": "3nvxcyEuVfhWQWxYkXvx4MfS9JkMk7ZQ25TxcNzbBBhFjkV8rNWb4j4Rk1wbkBw9v5DwkFUQhjJK3iYLiKLxvZPZ",
  "key29": "5hjwwUeAmwZxNE2Zu3P6brW8Erhk6QZffvctHgGi8wMRV4WtyPzkdkTNSwbpb58pKpZEhWna1i6MsS729ETDaxod",
  "key30": "2gVYGt6MM3q6RV4xkPDYGu6gMFwG6qTWk25Z4cwXXXcT2s7biyifipuJZV38mBk5V75JNfoB9xyV14HnkMKvPBkp",
  "key31": "iyEDaDhkrAeXzMkuP5JwjyAWTRCbts3w6FfGzCtv2YWLqefWtT3pqWPcxbdjgeZMovNwAMwhAKmN6oZC9XNqtQ1",
  "key32": "566hzdegtNovfyMYaJoq4mA77VfKqgZRgs4h1dsFwebaGSBHyUP7S3HxAt5p2tbrwycdcLmnfPBwQvkTAfLzGFZQ",
  "key33": "4koRYofbFXMutag2FgTZzQRnLVkoYfYh3iQ6n2sm1GarDK9PZncxot8xemmKuoskZuBkXm6X8iETP4TJgifoauL6",
  "key34": "371pn1ZKS5JS3yDYAkSdZU28FgSVBoGTpgvVpP9vKKJY24kLsr6vDcc6dJ4d6aub5AqvR3ppeqMiwUrzTYV59jbL",
  "key35": "2zbchBQBimfDjk59ZumYRf1CkPscWLgs6wp8qEXwAgXYyZRGoUJCkEmS6GQaeJRyuCjsQ9euVXtsFttwNhZftie1",
  "key36": "2UrMPBnAkQLY5TarDfLmWuMC4edswH4VTXAUAZ6iHPLBH17pECtCmH8PWfQQmJev5ips6YinkPNJUwHqVKdDJGYS"
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
