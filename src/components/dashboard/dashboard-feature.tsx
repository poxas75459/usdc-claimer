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
    "3cn3hiHeK2yfNSUSUCcHqK1bWRRHZKXKfcigBBMKAoTrozvfRqLz8HpahPN288F52mqpbR8k4YNmKy52euWQt8R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKkaZ1aDUab14TSsoCcFSQUMC2E8MTUGDx7VbTcFnZBWQbzmn83pRHvAThfEtMjmad5dnNgd4Jd3bjYRzagjgSc",
  "key1": "4r4CVtfnHijw5nttKXdU9GiXwa9yEvQmvS1bfDcq7z6rMtEh7qaKWEex5Qj31onLfN18M1MtX5E4s1QEu1Nm8jwS",
  "key2": "1pRXaVJv44f8yb53xVyx7CzP1KUmjyEwsrg2YGv4rkXX1rkc8K7fJUV1MxNnvHmwX3ezkXMHcXimsfyZx1jx7cp",
  "key3": "5fGXSg2TkB5QPAnx4dHuzweGbUH92jX7M7ex2Auoso5nyh1s6hBAG7EXttkkPmyNbk2sAjezbi2fhBDMcq5eJJkq",
  "key4": "4k4nGT6JzNNb5repwmY8R4RfZ8QhPfe8pe9cbSKGJRfGvq1FYeXZqxfB6SknkEpjnoHTWPQaakZHAZbowensadHU",
  "key5": "Hf1r196kNqMRiFYQzT6Ms8tsrovfJQrVvktKViFRxoDgtoZjjWvFRmpea3DpDiUP2AgYbDQzk52yujoyWmXGzrt",
  "key6": "19aF58WteTeCrP5BVYVBZ1BhyWNdSzbejDrdZF91mdNPANDZN7WpojDzDCC7bJmKSLDMzxFeay9Je8FfbLdSgD8",
  "key7": "Xy5ViQLvuHB8G2bxCmjDsDYgipXQAksqms2g4C2HL2drtAYe4rWJqbGuk4fB127ZgnDQ9eskD3QzQ1pQBomMG7U",
  "key8": "36BJP5AFXV2PNXNoBHiyt5rfCzcaxJ4WYEfM9Wp77qFUWWdXSdhec1EJX3qk6VE3utZxNDYPeBRf3TY2jqdrgLwC",
  "key9": "jNVXSFScdJijgLCGFcJ4MQfVyodzLZyJzAKnKUF2Hz2SXy1oDmhPe5MLjibVFvw3acbKbPCVrUzot8VFBGoiW1J",
  "key10": "32GcJdzSd9vuwcctkWVYAbdqFjxUUmGYCiJQNLkrNjyGuXdsc7UFAfB6Rq5Dkdw6dRND1WxBfNrbRVNFVS9NXmw6",
  "key11": "2iX4SxQZbwamvSNvz5EeKvjXr3KJqZTPw5sYn8tQwH4N2hEKoJ56fJXMTqbKyJbhcuAepABdzQgC9h41bnBPQLMD",
  "key12": "2bx9MeCmJrQXbdQERdeBG4mxuo2MNJzm5nSHqtz4dbiAVisdJPac6F3fuSarDdzQHALqFk9nLtkCThv99HkdQyyo",
  "key13": "3wm8vsqvxsGKm4p4gZvNTB1g7RMUZxqLPNL1fHDDaLK26NfCmQHReULggookJKVmEybgy8RyqsXModqV9xnBMPDV",
  "key14": "5K2CsPBHdMoJGWosZsptW9y1R99V7ngLMNhMwTvu89S1dS7mPsa4GKLpQLaKXJmFMiLEed12eMSNAiuz6pTKVtW1",
  "key15": "4Warts9gha2xkmzriPg2c45tLAtDdn6SbPnVxq12rBqGaGQ1JUu6fKqNjSXDZCSyfMQ9QLGaLeR1vs4fNP6Y2Rf3",
  "key16": "44rRUgLe2bAtGrxJKu2TfXpYKvg6xTnC4qDD1WAXZEuvomA7bXqWi9fxtaPAWifm6Dk2Pwmv5VM986AacUGXeqdy",
  "key17": "2V1rbmAJFVJyzeutDmQqYZKWSWzqWEs1DvVywxvigkfUTrwWQnLvjuEbyJw44K34cteVN44mR3tGwN9BaM3rJdWG",
  "key18": "EfTMaD7yugxP7Eq9Jt4RYEEsGysHFbfmzhTPayY6qo7Q8iiGi1CeEjbptgikjXn9YGMgPdVZSue2Ebm9KZRJtrq",
  "key19": "66QgC8zHF5ZSgMxszzCSCFmGrYeKvRK2pKckZcGke41LH7KBzXRJP4Pbu1P2wWbXtZ6pVRELat9pqHDSjwSsJW7F",
  "key20": "3vh917iGVowZZAJVLppvqrKJm39vhYdA9qAboLbDpVUdChUb3ZqtpGet9BvWHwvAd3JgHxvpbK97pVanLvLTJwTc",
  "key21": "2ZnYHsvhnQrgQVFkyyUQiLeJ77PkPDNLBhHS7sbVMheTGKDro6exoGbYLcW6vnN4zDQqaifLR9qyKy96rBMdNwB2",
  "key22": "5EG5YX2AArFhHz5k845wwXxVFUoQ2VY4vqwgW2HRTAjKv3vpWoXa7Rtqf5hSwRTH5kbeGCbXBivEnjaY733xs9GJ",
  "key23": "3ffGvsqDDVJRZQJdjPcGFXj3nmDDDuH7ZtLssLRBBcDR5tF3DHFBsY55tfySXcyFiRBUSHir8B75jC14JSHYrZeh",
  "key24": "3N7yLLM3TtUinxooS9n9HdwKL4ortemrHE7KYzJSnJJhYjM8P53RThEshkFuaPEJr9jkr4cc6fQDASmkBDUpuzZp",
  "key25": "Nx5T6UfwxQkpj7xCns3bZKpPvsifY13nHxM7ExwWZMvEwAUhAKwfbfPEC4AxttrGukQaj5QxgBsyrGHsncXqT52",
  "key26": "391ooYgzcpzo7wKvWcLjmS5aKxC9gSHMmU6gh6yc96rpG2iPds85yNuidmLGq1B2w6DNooAe27ydHAvvzRwU6uHv",
  "key27": "4XPvL2eN6SrzdqoAPH2vqLUyQkdU4UaApimkhKBtXC9Ec9dHoqqzBXxARJcNfohbmUASHpu4bXkLEAVvUbfqr9wg",
  "key28": "2cSL7AkDcn94WyhrU8TCr3VAfLAT6r5LaEYGYWh7pvkeNeXcaX1Fo6sBznvtRkxoCd7WVcgHNjDj4whe2bGYurEE",
  "key29": "FmPBsBdyk8np3RCjiocmaqTdJ3byLgu1Xi8ZFVTE39QkMSLtry7cPWnDfHWFN9FWtjQHE1HxhS6kia6pBvUVoXD",
  "key30": "3KRoWqC839XxJ1BiCJV68X15CuwNG6UQytf2sejzxQx73YKU5AYKxr1pMfb26vuKF3km9biBQA6VejHxvo6X8nDG",
  "key31": "44pEPKXsVEpAf7XbdPmV1kj8i4BxcwQ7secbo5umdVje4y956vCC2e2tZwLCrgwZWDeZhaazbh8KC2TfMEk4c1ST",
  "key32": "31PECgRtCdKcsjCYgN6chkdkQVoSNPH6dYwvJbpdQAgJrgjmvS4PjoVKUkk4okLbTXFUhLJjzaw63qfGhU7mUZ1a",
  "key33": "2ZPXB8e3mt7xze981id5B4RL6f8M3PSXiBsEHPpPdQoK7eHPWwmtzUPPo3cHwMTo5pF5G9PMrbSAUnYjXUm3PW3T",
  "key34": "4F2BNuY9doRyZd68jQ3vNSSeVZprHgF22q14vqmiV9J2e1a6WY7shK9abyGDHdzzQz8ZqSw8gXmS19MSvtYq5984",
  "key35": "2iapJWo6cTz99WsKcEeNcZNoyX2w9TVvpiJ8HrMZrpqDtyhzp6PKJyL2tz1n2zvyX2hoZcwZB3BQ6U5iHbZxEpr9",
  "key36": "2JELwfwp6VP5y4b17pZMp1U77QoCNkKnEK38B9Jfp1rsk8MUBqYfRrnayWJvoR9kR9qDFynBkXWooa2Hg2ts53H3"
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
