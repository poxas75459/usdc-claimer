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
    "4W8xJos83d2CzGdYm1AnKJWESt5vwfnkwx67JxhrkgUMo2inv59HTtysvoKjHowBikpN2Z3oRhhdhZXYK2cQBwUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SD8kVKnh2WRtD7a3hfSeCdgwm1MZvt9aJkyBis8wLXPhhycMXux99XKVMGuqnctauWS1FHQsPNsA9wVbJ2pxXP",
  "key1": "5tUk3DbrnKLxdrdY53uRjFEULKGRv3M68xDu6UeqpwprYLuxWn2oASkoM7JZfL9x66fUxL6pDG8iw6su3A85jMgf",
  "key2": "38apL8GKyx9RTSMAArnK9hkZ1sMKB1CkbxD4bhC1PNM3n2RxiQT2FXqd8mHeBJuG6YFcKk8E9yDtdX2K1dp4tP2A",
  "key3": "2NsodrkmKgQ997cr9McmHeNGa3SQMQmMrqi1Mwjbd9gu4tFDXtVLhx7Ff3dE4oTa4256oWaB9MuWba7ABdkVK7DC",
  "key4": "2dqfhAbeSCw23yY2fWgiUv6VnU7A4NkC6NgqtbZM8paDgtK27MT7t48vs83Pfjcku52aXvgwoZBwF1zwQM87stkR",
  "key5": "4pxx48xqKGFYeriT8i3cDxVPuzDrEio61Lzd7cfWcaAh1xkW64VfeP6LSuPsUXEWRfCAXsFAuZs5YWLNXo9rJrkZ",
  "key6": "49g3DPgvCWFLyHGq8WkiBTeCXvn65ezqxXd1kFJNcMNctvdQn77UTupH6uRAJdmcFCuYJzfgY9ZZyrA6cdpsGXZh",
  "key7": "VQNTEWJAM6KBWvtUtQTawMcLGSkKrvyfnNqobjjQM61EPsnWC6UYVEpk93x8xbat38EQGptcikuF9s6Ms9QzZX7",
  "key8": "2u3KS6kAiiWU8e1wH9ZDcQLeZGgs3Y7Sepa6FAcQNygJZ2zMFFJgrcH5DxR2iwoJivBaEjYckdPRqPsaB9YqgRwb",
  "key9": "2rVD9Hwb8PC7bwBxukcPpXsEUE7VL5aJNRfPUWVpvzo8vzFPGFwE54vue8b8x4PZcGvRsQ7g86KrqzRekkbbt2YX",
  "key10": "5q1rvD6ou4AgTDvKsZyb23Gps4Lza8f9zputw6ETq757zgFg7z7onofeWaVTx1ThD8NFWZkMvy97huJvjBYmrYfp",
  "key11": "4K8iWrQxgfcs563pEj1CAHGAodWKEuXr7fQdzxmmHZRgTyjAeyJQkHG3psNGt3NSGUX48KQ12Mh1kn79XBm7ze4y",
  "key12": "4PvqR3qPkK4RABERFiiYLvWBzvGH9NkrReMLrWE1tpqKXU8bvnJ4whpyK6gLGBhhiS7LHmHVNi54rWnDEvG5WQ2R",
  "key13": "5giJDgmgDp2c7hSbhsHo8Wu4DciZkm7xPDW9xbzVxYVPXE771QJvchVcgBEhCoN3MXfHch1LN9Mx8MG6yuYuEpsD",
  "key14": "2ZkvWm52w9iWvqNEBxxgfVsYSeZJSQdG9cs1VNCEzEdZ5BccmXdbvC33idmrzMB3nGwWev7NfU1ppyLp1hNcxinM",
  "key15": "3ebk5omq25ADfFY4MoWaN9Ccm6CJdxmdJzyrPK6xFuheoruPonjsof85Q3Cna6tZsBJs1EymBY61vH5PPigCwZsA",
  "key16": "8LVqenH8LQ9x9dT9XBT27Zaf3CmNgL31z9w7UR1t18SRoQ7wGmcxFThg2Vsd6cgWAyLLehNX7s3ZRoAjgaC4Hti",
  "key17": "mBV5xFs3VnQ4tdBMuRnrjY8TYcPmNBg8kpo4t6VVKwZejEgoQXP4WPPcZ8t6o7XS8Rs9FNyV5uyPCcpipfS3kT7",
  "key18": "N5n5T9ghyj7whCPxcTmQYkNUVs5aCjrcTLzMvE7MUPYjhVvxYGJuSZdjqzfodUJmKrsmzDXLDAZa2w3YaZZG8az",
  "key19": "4KWAGHdtbX2eMWngp6C1C55eoHF39jztC9g7B3BMN6ZV8yK2yNe16UqZPVDMdMZiQDPPzgtizLvLnCobpPmArrjx",
  "key20": "3kq33pLWRKKRHUdYJ3htXDpQq8NNRPJpvxR6gETK6uHXZ66kh5CcuvUiYRyTK83mY2RktvEgoGHZX1iuhtzkSxHe",
  "key21": "2Uua41MFrk1VVuiiss3Daubr5kjo4mSLE4bWoMgacxPZGtMSEUCcDPAyNuzhstNGPA7nwVAvkyDfvimwQeSGm9fB",
  "key22": "4uLfRKdWBZJbr8o3XzJxn5LMsN9oS9i6YdKWa8GQaJ9cJzjEzkzhviAtpE81zghBcqXVPwr7R3ioiNThS4DAMhzC",
  "key23": "2MTN71wpZKQjRCTNCus79xHdoHoF67ELxSNDXT89MQvzKuUXzmjZJ2139kRtoWwiPCymHBF5575k39DR7GptnjQw",
  "key24": "3X4dcFAe82CyjeCVeCmoK58Go1RtvSn4edBrYLAPBDzUZi93tadnZr4jAGD6AfCRMLuEPJk38b6YC9L3wVrqs9s3",
  "key25": "FMJfN3kNwqbnmd4SzmLU6k7yvZFhw4BnfCDkQWaN751nDVSThpnbV5oH2Byw6u2FRyhNXiisqDLTjhvRasaTqcD",
  "key26": "W7pATKNmetbc7Yw2ccpvanfcp6vqXipUX2L9dtXBqm23zeEojFW54xyRQhqtHmkcpEJmXu32qtioQa7xoCnMe5u"
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
