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
    "2H44Jtq7HznhPRYtCF7SWuHKAdiJeVZ44hqR2HcLf9ca7rrQk1L43pTTjgBnhYdniPpuL5UeLuS9sUcR3fVqMvAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8ov5AzgzrhjCzdha2m3qNFdSBP5UxK6qG7MkKgjthCkwHfeyfRVjigL1pY9LfauyLd8QG5fdKsHTBVGniiz6vx",
  "key1": "5vmUiBKyuwDUNeDFfv1p4KkKjrHnuTa7E9nH5R1g4AjNrCvG1Ffbn5PENtAZ5AKqkapV9fVttvauzkMBkYbKJHm",
  "key2": "Uiz3LSwDrLS7jE2pG1MaR5GniC3Axgf42m5gbFssW8uRdGeJjUwjxM87gjxHy3hMPjLxQfPAfaZMaEPoEACViiA",
  "key3": "2x8HWWuYFoLfS5oZDcRKNzJPxXEzEQc9bhUnyzfhWZrB3dRNNadsJQAk9aScco2dX5jvD3FajpurKA94TNjfj2fY",
  "key4": "3U3baW4z231PxuCu8py9FeGM2WBterngAowaW1VWt5rjHrQA7QXqghn2vyqwaXQcFubWb8HuGSEUb1zcaDSgCVx",
  "key5": "X9MSnsBQhYdShxKKSDxyWux9KFUnHQw5EAGJs2Hyx6SS1e71xHUVAoRMwrvADxVa6ychxBKxFQb5nvP2zo1pmCY",
  "key6": "3HcrmKSWmfrjHebH8q3xEE8CtNgEkXgMMDakZRDk5m8XgUB7KJuZSy8DmjCY7j8i86aNf1YXMpX7uq6qHBHBsVDy",
  "key7": "4rQG64kFDAtsjxWsTHrStD5eCE7vW5uotFyo4FYjdBJ4w2RnhtoRTC2fDguqKW9zG5yLcg1TdjRLpsGEasg947F8",
  "key8": "xEmiXvhTnzeCTzPG7utMgkMdFxqt9wY1xJSkhn9tRA7t3sSF41KQai2TAuQ16eNSDsaSW4zpZyribuPuKz9wQCb",
  "key9": "5G55GYxCwsH3Te5NzihZ5f2NqYutHTkraXnVUc5m7w9d1HoVZq86cz7xXqMFeCCKfZbwfRtTYUPvVhapeWNy4bgh",
  "key10": "zFYPzfWHjsvWewN3aLJXHVMMtDZEJpLmcwgSePfTkxmS5m7ZbtnkrN9vUj7TAS2JGqpXvDdmFXRdqo86iadqpBv",
  "key11": "5CyriVPzbRSrNr4bGms3TengFVQwXWjnuNZqaqcTsQwtfPEtjDtSXVBveBJTRVyqNPnWW3YsmoadbnEkjMtXHkGY",
  "key12": "HckBA4ajH9MhraZYQ15JPVf2PckLFPiLGVEKSZj28mtBwpQ48ad2vuzmxu3mXdj8L1Yn4u3YLeZuHv439YzJucX",
  "key13": "4yj6EA6dC66hyd4vTuFFV3B4zUUsaSB9V2CzpVshbDMoARft5UpDJj2qx95LSAwRoDmiBoR4gsxEvnkAR3iMd4jM",
  "key14": "53hktPqwuyeteb8UUaBiKC8mnwApLQ9MT6NsZAiTqzcGiSiV1AmNF45ddEzBEfKJZH7tM5vuGciAZ6LYYL8ig3wN",
  "key15": "3HgcsyaCqhdQJR6o3Vhu5vmZbRFzCEjyvFVSc7HTJq5ab41p6ZKDrXMpm2X2WokfP9K4aXjhTFrs5fS5vum3aaPL",
  "key16": "42Be6rW7hWnoyRChhFY91KWDuEK5eZgxXjMHsrngWhguN62kTgv9spR67hZGtK3HaeS4vKM5KeTGeVWcarCDLhqv",
  "key17": "2Y2pYWKdRFNmvUjLNHGxB6P2y8niA6Mf7WWdXXsVbWSwxhvgUopMoUc4gpnTHcpc6CCWRuTJYP7Fva6P6Cmoffq4",
  "key18": "2N281xzzzUtDStUGDMxGUbUki6SVacvEn5HvdKnq4REmrAGYWE6chp7Dpq7joiMLHKpGDdqMxi9PBXtsC5Rf87Hp",
  "key19": "3119oPcZ4r4SixrxiAjAPovFkW3B9wjkLQ2gXPct7YN5qDyc4dK3tgWeWL7cjazS5F2eda5BdSMZfnGtdnF8Jggp",
  "key20": "4CPekJQCs8fbGLGRREg2Xt7J3SNXCj3jy2m9kDA198LfUdh1cPZUYPXgQteQzzkacNpFNpHfU7uLkinDYa9gyPYu",
  "key21": "4XXn8bzYt6iPjNuoeTrdNMrrBZ5faEk9tbvqnQUXgSM71pT7EfvQtxNYaAHvcn2stbgCqW4UFCSt2NfuqxBUUTEV",
  "key22": "3eHgF85qV37ARi82BDTyFMYPgT8RVxqnZpkjtvHtdoknrrwUuPnoLQxsi24VaoxhAXzvp5yw8bTCrCvkE2S2AgYj",
  "key23": "5LC3cax35H4f1aH5x6dHUSg4gkXp6k6beDUjFnSVw2X15qJwuGuV2HyvHw8UZ24Dpbxr1Vy9TS17SoBAa9pnfUby",
  "key24": "i8qnEMbc9YxcFdS9UwLFK8n8vS31MVhuY1qVUXzZQ7y4yHrM9NvXN9rYzDNQbTMPupJm3Pmc3AzzHMEzBFwBFaJ",
  "key25": "25aSNaaW3unMeCLPuTzhPiX7HMYGYkvpo1YfkwAChPxVehpBaHMVW8GdwL9HhUXShCCHCem8osaJvhFF7fJgm8SR",
  "key26": "4ATYjDexEAAXww6vsomaVjDNg1ZbN5HnU2v3RdHKuw5d4eZ6cv6vWn2HhkHLqL6GzGn5GyfvLdTqF9UPuC2TsaXH",
  "key27": "bSoH15n4nq9yMM1YDVQ73crhzHeU8pr2iZzbN9v2XUEcLbYDFYLDQp2Un8uE9V73kQGXGNcUJTF6X2qoJXpXSsK",
  "key28": "3g2RWWCVbqpQ5emKDt6UzFBVr5tFDH1URahDx7SxgSDYeovoovirBBikB6vJbGbWaAKhy91q5otncfNZZ9jcmdF5",
  "key29": "3bwwwr2vPRX1DuygdNPNvv8TkvMbBwfwcc9CGPnmPsDdmpa62nvydPHEj5XspCLBqXRuEvgMGGg1oCWxJikbhyY4",
  "key30": "4MhygfQkwf5nZbHDBXrm8c3TZ4pf7nTD7bfFE4ZVKutQPamdU25gxqCPMJ9kTEMQYZPLbNQWGibdghVWATs2WHFc",
  "key31": "4pCvQLQLWuf5vHtBAByHEAhygktR7RmR46SZDAeYAHL4FPeDXaAcmLSKK7DWfYFZvWTLLYr13QdsgfBmFvEotdYD"
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
