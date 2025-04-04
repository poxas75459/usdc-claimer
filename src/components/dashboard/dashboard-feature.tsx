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
    "3v4DeffYJrSBewbPA56FddFsRYLjpMw8HRCKKLUccBwmBrVCDgPLHmxN5jtQnwifVzsHNMQV2AbHRA1BZWrrzZU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tVMUituAXpW6EeH9ei966BVvnV7W1NC6qauTnpxYsJFTvew17TAwRLSAaNkXXv1yRusKko4uKnPjMJGS4RfsnJ",
  "key1": "5QdzeDc59oFDkbE8aGEwAa7z7WTphoNJ99v1SntCLV27mviEY2T6pfgKbYFmzSykNkPziTQjYpwhryWadhpRUcmU",
  "key2": "PoipyAvpRZWF4HDtsXLietXNPHYzjbGFr71EDHPNvwRbphNvbBf1DKXTHjztPcRi8hb9VFpMQ96TGiqu9VPuDRT",
  "key3": "4QXbSt3ZL7ED29HYMfsdJc39qttKPcK4tmz6DpsDytEARcLH4Ai3tdykHYB9gG9H7C8kauBm9QxPs74UKg5cAhfS",
  "key4": "4r5rvU3ap8oMU1Xi78Ex5S8bdYCLtYa5reiLJXjgomjaNUUNLaDGLJ1q9a7vMg4jo1H1LAbBnbDh8k74Rn74Zzkk",
  "key5": "5wWNUQdypRjTuZWKoXDQcgNFr5R7bY9bBgSYbk8PPFvJTJwvNLDiQC9CTLDwk1dZv96J5XtQYdCW9xTBqtiTqBTe",
  "key6": "3yDWHVvp41tYRuFK3GBmZfHGfA4VNycGQY5En9ebDRQ4CrHgM4W4bN38mZgxgnNnGeaT31oFNxnASS2io73FidBj",
  "key7": "3gcd6BrZviwDTowZ4feNZ89DNCEtB4opNmhoD2oTx6rVqBe1HptNqeJtf9j5q4pqDYJoNzpBj1XWM1cvGYm7yLuc",
  "key8": "65yZUPdnr4tD7GF6ZFafvn7HNRPscTLk5XBKVSxMfCjoKXxqtj9DpTiF4ZF3gQKdWvgDK9AiG31eXNyWAvZZXKpn",
  "key9": "353tyaJADQ5ktRyVzR5PbMQVh9zPBquZKbXRrEgEZsgSUZG7P56KrQUgVbXnZM2mgMoQKTVfRW4Mdt93V8gqsa9Q",
  "key10": "47f7AD4MQAv3TqLCz4dUNmLYntC9aF6hbGHwpF5N6kyQZSUPUk16ezMAX56R6bRAAK8LQ8MipytVAdana5QAw3NS",
  "key11": "v71k9j35AHqia3vU1J598WPqH2BuuVXt3pNouFXk7NUbHrscNiYs4maQvMsJgv9LMYJNySUjMyMC2xX3EmHMX2n",
  "key12": "2kBSdxNumRrnbBUrASFHgWmEaxWy56xpAdvxN85t1oAiHa2mundvWoA8JacjZ1cPotJo4zEd7gK1TFBhXDSzD1Nh",
  "key13": "5yCEKxXfHLUDHTzkrNUcwvQ4kSgrucEY3bAkcqS81SLpmzBKd2hE8NuwNxS5bSRwCsmfGHYcEjQ4CqKbE3sfzbVs",
  "key14": "4RKfrePToAhguYPvHierThpRsVkZL7LUvvJfUPgFwBZN6UGCSfX4rcpYP3Pnite3sgNEzuth2AqVwBLcTt97KVq8",
  "key15": "276Fkkooc8x6jtU5tr8d5cqMUdiRNNDQR21JH11rRzgkNcqf8uJS1FDNVo3zTe5Kxk3ZLyW5tPurCTxL3CvYmG3W",
  "key16": "cSHDA3ZBL3MyoBRuvQrodkqi2wsdw7HrNjagLnmUPixED9YUsGahQ5FjKxZPGfB7f324c6wXGSEmXH5hd1w3evx",
  "key17": "2UocCWV2372vNYo1tW5tfGHeRWrXpyZJmwSQKyAgythXRNKTuqJHbQvnMLsVqoUog4u4uSBUYBsQsZMJFXEXC37y",
  "key18": "4Dzuuy2fmix51wYtY2QK9QgSzMrEq2NGRKNyRptGLZJEoLXFPZct9AV2bmgpeLqMEusf4t3hfTibuhhVcUvFFN9k",
  "key19": "2uH3XCYp3mGT3f6eVWcFPqPhEh6kb4wenoudYg76KM7yPn25oUBU2oRDV342X8VEGW5mgut5H8woJZqrq3bBFmTp",
  "key20": "Ga3LDD4EjmD24tchRLrRnmqCmsWa1d14tePUWa6sYrBQ8Q6tdEwd6Cp3WakD1WdSsgmobGeUksEDeWaCewKswC9",
  "key21": "3ebMjDhcF69tFkb8Ceo5gfKBso1FwG8qLVkqKAYPPSJdfWh9pr8rQuigGgQXjWi5T4vxskHVcH1Ud9phdte6uBUq",
  "key22": "5wiAsUJG5J4NpQFnvqfWGeunT9dNHHtyfeVrkRe2ypsVShoYKvrBiToQpSmzw8nPWhnZFDfk5YTeLDrxLfewMc9J",
  "key23": "53vhEmCvoSFP4zPKm9dX7xiJwsYFaD2Ve5oNnxZcY5qBSCnCCAYVU2JfvigogRW9WAMZjMwrPEmcXMSNHrwEDJM1",
  "key24": "4F4DeRG3Dk3NEnjsDncUJH4V4478sb8ef69gs1fb7iK8JG1UxvKFxCJ4k7FpD5dCLjnFyNpmSzZoFqnMWn1WSKHe"
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
