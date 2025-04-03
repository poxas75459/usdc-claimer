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
    "25rVtsJtVWrDH2T1reCv1gB8Y9Y7bYmqnvaXe6QmDZytH3nKNVrwdj4GwDVJNZisRsdss527UoBvQzQY5RKpBcKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9e3z9mXg3Zvm1tNh7QQ73ff5LH7pb4nuVvnueu8ucVezU3BCq5pMP16nBP6cLvtA72eMw23bQ8vDDxjUD9rYqU",
  "key1": "4TxZr3KkYNou71rNdRzh4i5fwv2jstvmVs7AXhuwq5s2YUuwLPZ9rRxSR631NwaforzKn3jBYgWjtPA8vfk5Ye8v",
  "key2": "5PBKLBi3c3JcLWp9xYgVtNru3WpoGpjEXKtezExRzTZdfebP8TZY5dmSdJXpN8CthyXKGUdQ4hKsP7eXRVpDCLWn",
  "key3": "5ZkW1ht7dGBfS3Ts8t4WYhdSys22fXnk1APui2CQQzz9gFsvkVFnfVm8UutEmw219ffnSEP4FJu5MYewqKtCC8YB",
  "key4": "4QjxcdixHZTbHPtUPqBLuCRt5cxWGLNNEXzctvVhiKdFjQxfEqgia1VWVXeiCkrAoxQHWmKdmpKSEJoyAyu9U1fr",
  "key5": "3M5TX8Eck7NouwMs7KyHC8z5VZNy6Rm3xikrSiGGE7jjKDRDyMFREGvEDPpSkKTVfhVLjwxMTHujFhBUpjjC1oA5",
  "key6": "bpUFPUbbz5mS4n8z6H2NQBMXab3LGsTQdCbJX2ZtYoqiQP8i1cGyh6qVtkVHJa2SAvwkA85wtYswZKDd3Q16NzD",
  "key7": "jJwYJaeJpKDZDxTUtJNocyR8yMTSRgLVKue7xi3HBU6ks4WR1uhS6iiejhmPoRThfja5gLmHxidhpAM8DeEYNBd",
  "key8": "44dvzuYBWLtt1EckbAJCo7zEfSEaHWzCS2UVvaRYisJXKbRrhYRBa2yKgypY4wS2qCKzC6VwisQRvKLbcWVxbc2o",
  "key9": "3cmY14X6BrGpHopsL9tf3wCEYRKgpwnGBtSEVULBWt71CY3VszXgPqkbPq1cSqXyN5qzvVdtYbVdjZmpppS11p3b",
  "key10": "3tEsQqLvRVzzhFCubENiugbk4iWdjxNoB23MujfruWPrDJ7NC3aKoYxMQEd4KWT3e91CSpt8Lvwv3V8d98uhAXgW",
  "key11": "5QdheyYT23X5KmjehaGPsVMeLxJzuNK6As1Je5byZArwYQMgjw6mqvsf8m8F4BEJbUMY2u3fVVHK9hAa3yt3e4yX",
  "key12": "434W3XiQdgbgjswLSdq3hCootBZXzKqFtDLkx1PohYenmG3xUaJJufRQbTnjYUoLxeKkc25F5Gt5rFALVTpNtEGD",
  "key13": "63AizPxNnGgtvDMzDuWPiWjnMpP8ASXuc6U2FiKxArUpq7MrmhUs2WqTjVkaPiH3kJo38TLJn7qzFPxCM5dZKZwZ",
  "key14": "4VJ2pHqUNqj5pYYeEQkm9KcMKr4WbnCBLcWxMNrAsibN7Bdk6bBYPDMKSGJyx6r6y4BiFg7FfV5TanpYsFVkBbeK",
  "key15": "5cTEvaS3SZYkwdDnEnNjepESyTRsjmSaRAKNbFzYnzEopGv4D7TGaMMSEXFFz2G98cwXsWRq2PRYQsRspJmRhasD",
  "key16": "5gLbUNzFMD4ySgKcruDk7vK3mszKDm8yFTjYftgadGtiWNNzBduSuifHaRR7GNNM5rdJatT5CdQQBePzEUv83LKP",
  "key17": "591dhLUcZqcbxpya2mqBR3doaPf16LBoDZrtmBiUCzp6ZJYe8QiPm4VWQa9AxmCm11NwigmibUzTAkLz87FEf9rv",
  "key18": "5udp6ADSmTsMmUrD3SRU5ppuDoMbd7UNPzznTn5j1jGHWb2kvta9TQeAU3AcP9YFmhGYBJJMCye22i4iDWtsn6LN",
  "key19": "33YytZ8Rg8vcksjQXF5WJG5zjiT4hCtEsL1vUYrmdZepa18jupTiJ3SPeDeCcZnr9KMcZ3T2XQA61JJr49C3rQ3u",
  "key20": "3g2UmYjLDGMARm8eYFnSK3WeoU3RKFFeWTuWpFZUTr3kd9VfkUioeC5VvcQJ6H2MSNowQeaQWs83iunBtR87Rtk6",
  "key21": "2qifM4bZe93DoxtTusvtYqUeimbrJcjkjoU9FLMnFFhEbQia7Y14jvNU1gRoWb2Qb27YYKodSfE4roJw18pw4ECd",
  "key22": "2tLfhrSWXjccUNNRhTrjZgpL7nbyeQkLxY4Y9E3s9ovziSHm5c8wmzinehyBeMEKMTbRkcNi9mEnegWvR47WzJAL",
  "key23": "3BYy7UPaBKCYRnc69m5gnZNzRmBLFKZSxmAtVFsEYKvB44sAQvaeUt5DeZr7dn3Z4oPB77Eth1CtrrwC782ZBm93",
  "key24": "3fPVpAiY98DHtGewaiAckeAgX1aenhDT5B56CTwxk7RQG4BWGMSdEp8BvVtuS1PhNqAeUzgtoQxTima1ZAboCYcx",
  "key25": "2KhKti7Bgt9uBVPZMPT5nYz6n9XmuhmR5SrhdKDjQeJs8WREGwJJYjoF5AEiTYQgVwjWgAf1H9vh68EDMyDqmDFe",
  "key26": "5xRB8pG695hhJavJ6h4SZN1AbstkD14v7VBRrfeuoa2Ub3xR4v2p79rn9Sx5StbDaHmdJj7CuqMTfZDkwUqn7hXb",
  "key27": "2YHsdfjMX7EeLihdLyqVNFLbQAXJaRgV2oMw9dTgRqS7Cdjh1gNuAZ6TLxcwkwnPHF8exdHL9NDhK6xgMg2iNpC7",
  "key28": "4BMA4X7pHMkXkbjPMMy1DJb6tmyJ8fJQsoTUAZvgMfUVEPUnnQPDXtyMDYb3atFoTVFDBnRsEhW4NyL89vFbDaW4",
  "key29": "4B6YHuwGYpPmCxAyuog7bhtkTLvDyfCXxs5y68EnGCde5h3RRXDvnTANJRbwr1hWKnaXqHZ6kQHcmWmzaQ2n2JCk",
  "key30": "55DmxyM194h4XwXt1jH13yYeJYBL8dRnz1RBd6Michz1LvGFJuWbyTGQDUhQ1Gzk919EgypbW99TmnD7vaiznw67",
  "key31": "4wJ8H9qstX9C9NeUH7FyBi7n4zXmeH7jumVKsiCGpXVZN17qYTxhc4LGGeEK4ew6fpoJpTcRC4tKtAZyG7y88Vr7",
  "key32": "5Rb2mPxdjrYak2yUKX1rAUvvuP6s7SLKCQLspcQsnTiKY3PJKwRAdhu92PfXKvZuqKn7iEFowmmWTeTSqcAmzdNw"
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
