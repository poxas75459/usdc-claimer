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
    "5QCUx3Y1Yfj59axpYq1qj3oVD46zY5c31MRgBY5EiCYWqARDfFfQUJSeGjydnx8FeWsGtXXNQMTikLWxaZyGwowF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvgMbYK8nY5uG7KJdML69THiFSSzMj8yRaSac5zh5AhkdegdH5xa5J8uSoPhpjkjrpqj3ohEPEuR46sd3r8qpxJ",
  "key1": "5Y3nkEY94gTa8EtDAkJuK5RKzxmt3t3ocj4fy423EnGe8ekgx8pDzt7bc26PdkXKyFwMBQxBvAWiKKVQCXLhmzEc",
  "key2": "4gJkj8ApxTmj7v5WrvsbTT7JwFbjWuPgpzCiqbunAqAXoFtVpKKhy5TuTvp61PTXTGigJGXYH2Z2wYvzSnuqr7JW",
  "key3": "4qnkF8rkK6R2XyHapRb7Z7oyqNRcRqadtEgEiBjXhbaGCLCDqzFRG8voCdG1BcH1DisaVdbPrUShvbDc1ex1vd4Z",
  "key4": "3RNqg99x24JnEZyKpNeLCB5ptCJHjboxVqKSoPKrbDurVRegvuV36H9byswFVpt31JrJuXnH3HA3NDXaXCJNzwH2",
  "key5": "5srAaWJXLEnbpBEDbHRqPyBKDbznk6gxAeZTiMk4mGzVR7Sp4TevHoB8eoTzyFfZ6yjWnJW446zQS3qmrihFPFAG",
  "key6": "4Teg5uLppDVL9GBwNw7vLd4VmtSmaaTUvAB5GJGUfuLR5BdNq7T6EkzoApY3UEg96Kzykx9nx3JLMcPDEnc447Hj",
  "key7": "4zF1axQpJZTDmo5ZUVVp4MwMU1Fe4GpG4Y5LMVqbKobrkZGfzs6u3HV3DcpAMwWE7AeRqk4xie38BMRmx1Xdj8ns",
  "key8": "3iuxk1G9DTb8BMSuiQGkEgMHpao5FwLRBJqXP5iX1gByrtt2ucG8cxDuuzohrfYYo4bUvJKfmwEppTDam6eyue2u",
  "key9": "2pGPnWh9WQVFQ7R7brsUgkiV3nw1K9exJSV5S2upNgQfCUibVZqhcH9v3ED27gkCeoBbbVVXMgevQzPhbayePCk1",
  "key10": "5utAvxKCgDLefJaVmj4EXREW2BRaXuRVDFraNTvP7RHqoqmLtrpXaE3jvCKQMXunfYr3zzvJiXwyUmnoyrVii3Gs",
  "key11": "4Aix1zPV2HKEFTHHJSaUxSu6BKX59hMavSQzArBZhsiDgKQ3kyBqr8at4HvDzn8TKncSHzmZoKayerxWioAxyrtT",
  "key12": "2zgqEiXYLBhY1vY55ZtMj1CXhaPqrEsdnZTokuZzCvi5udZTK4EMPXjAdqJb6sTfvDdME2PwKMxBsWW4vh1mHN1S",
  "key13": "F3HQaFL5we1X7Aat34DyDMZti85269AJ2umrsfvFXLctBGgwjFvnL2h49g3grC1G3EBugT4EFzqBEzBLRGciXBt",
  "key14": "4FzBHaGTeT832Eefo3aEJEj56tS116cJB96CnkSvTTL7kn8UngQkDS7r5b9baM7gFQpDVxqMZBAmXg8Nr8eTS37S",
  "key15": "23eArwosRh8oNR8Lpg9uH3aRnUMVcdoZ3eYdD5dGUAJc2hNfV7nnqF4fVy2ryLDHejEd9pRdtFRC3VnGrkwTchhC",
  "key16": "5jCPvFMU3jSAgQJ1fE1fVasaEXVXsSMK5XN8KGQxERaDBhdVeuheVycZdkeZHY2vTRK4jQpzTkHYvgMTSPspFNfK",
  "key17": "5aBBLgEgrGjangbRtGmqH5EWyE7BbXY7hf56TEYhxoL2SPy1KSV8inpXgcCGUPs4QVCGhqYSCG7ebSDEop7iUMn2",
  "key18": "2PKtY3w1QTq6VgyejQmo5yiXEcHer8isaQGxwFvwUpKmKLDHRhFQ7GSDk94C5N3pPgYVv3SZLjQPnE627MTANVHQ",
  "key19": "2ZsN96odjEYfKFgCiFwT43t2KhwEXMzcwpiyLXW3EVvLtyTfoEULaC3CffiHQh7Mz8GGSneesZwkeChte26s6RML",
  "key20": "4Jrs7UPnKKvpjhnryY2N2GNRS47tEETLaK8Fc9zxasXBubAPuGpvvXxJ1ZYVd574NU4BHrpUE7ZNzUZgPH3xPPYg",
  "key21": "XkvhUt51rGMpSb6mipLkELaSxEWjtwRBY6DZxkDw8RZ6jfJy1VFL2nEQXScTCjYqeTbtdNeQZKUhRZDTxWvSFKg",
  "key22": "37MGTmPFkgu3c97QiUYbeL5hJ4fzaByFNvRSin8ZwEkysPa3pgvk1su2o6VRTBf8WbxCeGeAVsfivusGF9UEiyFt",
  "key23": "d5fYvJ5MimXy9mjE5ardUHaKUd7c1pzCBN2D6Zjjxbas15syKLox6eUnghB1Y7nXikv2E3fgsjSQqhSS3A1sgUP",
  "key24": "2fooZp5vxKkkKvzrPAor7AvKkkAtg8edex9EkFeCqcH3iutarhYxEj7dqA5krPG6MnEsHS2WJFAB3hCmB33yETGP",
  "key25": "5i128dBQq2xd8PqUW9h91QtVapEARVTwMinvj6EMaihqAZp4gkPRmjTrdYw3au9kkUNR7BdQXsEYs6tPbJ15BtiV",
  "key26": "4CMtLXnosYmWWTQhEgLFe3r9pwsnKSkzkhsBLsf8n2VXFFUzbmKhhsTnwkjrSjBbHAUTjby8LyeUEvF2aYz3W19N",
  "key27": "9rxKcK52VBmKy4dPhvZbKGk8PM3aJhMU56kVXEF2amnmv9xGu2BCRP8ANKEXT1BaNhanPgCe6beGHKs7665CAre",
  "key28": "9fZQgCUTvEGfFQucZoQWEaHQapjmJyegESv2rutvvDAtruE1V7CHWuVoybQkLusZno6HjNGpQMfciX6zqRGufFR"
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
