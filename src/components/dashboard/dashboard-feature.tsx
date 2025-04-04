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
    "3Q1L7jYPTjVeZAq6zueaN9JNZEXjYRr4boL37fp8kejYJGGTDWuEqu44L5tnEnjWXvkmHHU5D6LpSjLD75AkN7ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjBUzs8KKcZrJAUwayBCY86etS8vnaeLrvUyVdexcoiSCLTxCGzfvxoHSTqseKSN34N9zUtarCa7DRQc7UBpPAJ",
  "key1": "25Nv3RRz7LVx9vSD1ymbkyUCTjb15APf4fYDVfNxSjgBFYejYhSpYNpG6FCEzgTCS9DisY6U1WdmC1ZURSXjCXBb",
  "key2": "2egiewN1EfSLxYo3nVSHBTvpSYJewJmUGZMGcXxsrLyp419HWnVkZJqQDBJeecnUxVA4GcKxxJWbbxC7xDC8GGdv",
  "key3": "25MASn8iD2hFNRcwBhqUKGd2Nt9mYbZbPfFMs9E3ezm39zRiuASBa2tEEWGUqYKsN6bUc5uW9wZCBZpB7pEkU91k",
  "key4": "3KB657zBVVQo5GvNEKRGpzT56d8FzfWpEffVWhyrHpht4Sv92oERPBB4hrHd1MHNaySoFs92L5BLYDrr6pDdYmSt",
  "key5": "2CNgv8niuz6ZurD6WPLyz3m8s97VXtDVdcx1uWBv5n75ycX2g4h7yCL16NgKPcBZa96ceaWKx4PLU1KZHVVjmotb",
  "key6": "33ELRh6sf7pZpNd8e8TP3H9Gmvh14H9tKifJxzX3PwCuCBz19FNzzfba5qMnoVt4gEefdaq7PdrPFVjSCBr5x1ri",
  "key7": "5yFgQLxcZuUiit42RgKmTUWxBRVChn5oV7phyPRpcCrc1GoXmnRXqPyBFmFJd1PhiXKTYH8W8uSqiRcAcngzSESf",
  "key8": "4EnfBR9gqoxW6pj85TYK3tKHGnqaFNvUatwi1Arguft615F2YWDcxgQs9wkemRNarDpEGHMjgjLizTamfgyRHh8L",
  "key9": "516tsAvU59K3XZP8pSJTWTHdKLZrrcwuYHzgVJJtCKhjeazeq5edrGgCsXGDnjp3YZQyqTSZRUN5EmDYuELM49E8",
  "key10": "32SCZaqGhH39UL9m2wZfth5fK6q3R9ikWh88BCPNhfVK3PCigFxciUkoTGMTnsw6s92kbyQK9aR18rk7ZAQ3yeQe",
  "key11": "JSCQYFJYYBx3w4x5ipgJQJeUuGCsbX8z3DLfbAwd6AKcixGS9Tw6RRa2Syry2LLQ6gYARniGohTWsVAzA9bh6EQ",
  "key12": "2rb38EZ6UaLFutFtD6yWg4STUJ5U8eT4NJ5zfrcsC6mmxSHa27pdS51QQZubYv9XFkx1G3ShLLCMRepya5BmrLEP",
  "key13": "4DgSiu8bW1cfqKPzebHfKytPgJAa1YU8hyrBCmFrcNsXhQRoG7hZpqA3Z4RRkqDNsJzYadya2MsiDNb1b86AQ6PV",
  "key14": "5fBQafGJLBYgLenNu2yPmiTeSMTS2ykieEnYJ5Z7v8XxP6t1Xkg3b6v7DP7tCYhHQy3WNEwTsZpbFsFPKFwmYf3o",
  "key15": "58c2nTWoqqjYzJpKeWV8k8mqUQ2he9R45JPouv1VTNu745oiNogHv7HAgjH49hsN5QnTG3L4SeYcUkexG6YTE3Hn",
  "key16": "4KNb7exVkDcEGHhK4FuesnEBqeUrEnPJKEdAFY6EAswBoggRFTGtLXTPac7nvWdFEt4URK2DsV16yz1f6itb4eNZ",
  "key17": "BW8aJyRWGx1A4BnSvdbkbbLGnrcw5zim9oM8i9opGh81PQUSHJQ5cNPMm3pvsduXd7XD4YYrQXHEJT16ZbUvsnU",
  "key18": "3aj3eEaUY4eJs74YwbMPFeAn5JC64TfcP8RNi2QBpTSnVrmNBHr7MZG2jZyPkaxRAB5MPAknAMkfZw3hoEH9LdKV",
  "key19": "4rqaR4AVExCJ8BvsV834SJVwuiPZJYxYC6jstduPL7m6qngKeUqy1SMryi1gLv2VvWqj2om8uAX1UTsF8JaAm71r",
  "key20": "qPsFNhyohiUXiyu8BmYWtAcRMSMiBntWLovkgUSLmcm6LJqi9wYfchKSsxnmTpy2xEa43rdR383uLGLA1CFdFDG",
  "key21": "4GxWv4wE8ctdC2PQZ2vR8qHgSdwi6BPpXLsuvt3oAeV43a896GHPKE2UAMXURw92NFZUpJBkBac2DTn6jnFNsvow",
  "key22": "5udkQJ8sU9CNui9PapFPiVk2KyxEFVDbGuVYGdkEd38ubw1AKdu8xBXxMo5Vn1vvhn3Fsa2nPrZmuxkzuqB48rLz",
  "key23": "McTULb6YW9AfxrConDvqoYtfvbSJCfqELmjxvwH1BG1APKHMk1UGde1tZQ6GYPeyHSP45ibak3kTsZ23Ts9BG6T",
  "key24": "2U74dRcwRwqg8cucq9brz36u5pnreCRaRyatPuCCgzDTnCyT8UTgDjXRTagNdyK8RQG4grtcJ538ZDzTPWrFxk71",
  "key25": "4yajAT9YjyegrmUHXSgnJGVWcn55LkTPt5zwPq1fpCFysP8jEQUaiMiuHc9yzPC61fyN62w5gmHswjPkvSbz3Eom"
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
