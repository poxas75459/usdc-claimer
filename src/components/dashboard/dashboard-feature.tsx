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
    "5X3wDgaUG5gN1pKvj99x5rKYNLTtAZUMsqXzv37FUXUR1V61FZ3MqzwXv5B3zEP3edT7vzwXPVbsfm8F1fzwiR2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyxPDwx494fM6MYm5oqY9HpArRwqxB4YCSzynK4ZqrzVcfvSL83N1aFxD25CQSKxP51Fc87nmzG7jHQJjSim8hu",
  "key1": "pKxF5VUUv5tNtnCxG7jju2VbwEbnNNNUYAUM4nn7rBN6sCKg6Uj7Hc1ViK7Q28RYeUEDK1VnfNcNn7ebgtthnQs",
  "key2": "4PyLdGVujwWAvQtC9vFAZnCbqw1x3NjrZVCnFnEPYhBtDvwaPfdwcQXt8QzNwUz8BvP5zeU1Kx6KmuZSDr9x826p",
  "key3": "31zhtfpawAV6WMt8b83BZdYvch9NBhsoQdEf7q4iadUmRSdX8NJfttz7qT3UatCfXx2EwHZ5aPCx9UmtcRfLLzV9",
  "key4": "2y8U8ng9WupWpSCBnvELmfv1uqbVW16yTZfF7cvvvFCLjGRowaC5dL12m7VCnWSSc3oVKSEw9wCX9Hdunb4Ms6in",
  "key5": "5Rccdkuw14NZDwY7HN2gHi3LzzK3yKJPSqpdT2QgaZ3cqrzTQK6BUBNjwp4sq9eR5URsMJnn25uWqw2jmYAM7YZe",
  "key6": "4ZaAGFomiBVp5RNKVATw2JBdr1gkdFxjSLtvpKybERjVMwwseR4pSX5RpDGf7DJXQZ78VpgfgwZCJXv9me7oYpAY",
  "key7": "4hgLzxA2eLg7hjw1nonRWg57ogLru271J25fqAZS6igHewspksLhjhJf3HSdJ4oskcMMBTdHXxh1YczxUB7VATGw",
  "key8": "4V5y9NBqrruuyHmovpf5J9fu6rrR8K2ReTXsaCN39xxB8XMoDNwegxckjDJqt3puLE5L8dQwGP5vJJvhVJKhE7hf",
  "key9": "2TssYicjYbUCevTSrW3BS4RwNxDVKhw6wzDivGi4MdyKuCQXgypN5RM4rb78S4DPpJa4fPpnekRdhohu5pfArvm4",
  "key10": "4HFuDwNNXToU9svShXojBVBq7SYvfeQPTWnvvWNaQ9WrhnFiQ3XyB97TeKaBzp3knvnKBDHvnbCBbURetu9182H7",
  "key11": "45BXSJtxXqKbrmAf1E11ZaW5ngwUUJCnx96TmsZzcWZTNYvPzwRDnRBWvUobW5gWsMo5NJd7wFkR2SmDL7ZaKYrg",
  "key12": "taZ7WQQLhVQN1EkLo3kRNt7YSqeuKCiQhwC18qK8CpH4ndcFvj63qJtfGJ3THDVPRrmZDrLpMjD4FzBA4g5T3Ru",
  "key13": "5HmYrnKu4opyDi4q5WJRbciHsCSPy2ESs1AS9GWsJ68BGJW9pJ5tKCV13VtJ43X3vi5YH6MxprAmhvT5fUpczkv6",
  "key14": "5ucQaYs9oyMGQUbmswpnKc399tJvQqcGdzvLutEbNYDNzacSwycS5En6YzuHdegjUAzDe7JkNCbLceo4ZTjFdXJA",
  "key15": "3gdYJZU44tTsYAw11p2EpMPKneGUK3A5ZXCS3thnwJuEUqFspbCLcdVSJs9iz4TuMp1yisMvTpvx3rqG9vNvyGTk",
  "key16": "3P6qwz3qi2vpzwXZJM37ccfKJLKde79E8CrfaM3xRSaCEEnf459S1JMCE6azpCct8Hj1o4TXDRdFiRBUEbYDS7GY",
  "key17": "3ageaDJKnWgTPTuyLC5M6e1Zh2xL4v4XniQnCJKmgWMRUHSRHjkUn9C7exxPER8jGFi1XWoytGco3gpB5Lm6Rc8f",
  "key18": "5i6uZ3hqi4FAQsYTsY7arhCR32sjhea8XFtCdTrGhc5HsCtazmFBxssd9gGSR4xs4WsAppcXfneCkS4jFqq3LU99",
  "key19": "3aVP7b65P5saXP6DRB9Lr7FxMcRikpCq6GVJojssZFurBbbZvA6D8KZ2nzo8mkAMdZ3CejgbS3Sm4oc1AY5SWDZ",
  "key20": "2CMgqJ93YK7VVR8mdan1pdcz3sjE2qqTGWfoyBKkmwzj2XScjdn9XnPc7Mjh611kcnAYMhMT4TLWeTW7tDwMwpLw",
  "key21": "QnSLVE9wDGa1UQYo7xLf13JVevFjca4QsXZHR4vk23HDb5Dds4cikHErg8xiDtic5f4P3TdiJriAwvywn24GshB",
  "key22": "2wvoTfa1F3YdDS3HNGPNDXj3QgjBgkrK5RcAiiZ2w59ZPk5dwnS9guuqcqcd64zhiw7jzcCPMXzcGFFYe2wA7pQ3",
  "key23": "5T5fNwwtizVq9rvX9uLMgTp9txbGDifSJxw4zDGfdh8SCNrJgjhi44fFWvkKkmBtBrRdsHbb2ZL3T6VGXewESgo8",
  "key24": "5BjdMmphwaG2f4J4aEsQjvYTvExY59wTyDmfBybSKERNJeGZN9bdRRuz3y3Lk7EQLXQ1yDZC9WqQoZJ1vkqevNJE",
  "key25": "22nffC76vy9JfHo7LvUeF2ZFjAeSr7iqySRZkjN5LcLuZfmaDbxN2M6EJ2Ejmv7xyoP85nbNjeKSVapPaVCnyCqk",
  "key26": "Z63GdCSgSGhAbSnrkh1o5oBvmgAd3LkYLmZkr8TWhxSqW1RbY3gL1Djbu9PiAEyjh537fAoft5hbn7fajLBTbEo",
  "key27": "3yqNgp2dQHQxExXi3oJTi6o6QqbdVQSJhfEYYu7oNXCxNPnPD19rRgwCvR2enrzUY2Y9jKaSt4jWea24XCCrqpPq",
  "key28": "4rHH4ahHqBurQNCFneTSWkLmThnQQ89MKspSWMAmExrB4UBHQobhrSvHDCmgvtyS6ApS3zimETyh6nKX9uSB9BRZ",
  "key29": "oDmBPoSuGF42zng3fQzfSaDv6cS4GxCAZrpjR6CArykKp8jA3v59wW2SwsuJkwEs2D3ZN7njvexmEapyuPnGMuk",
  "key30": "5nW1BVSKcSJAV7uvR1436DBWJP8Dw5aeQNjaVcMC1AXWtou2WBTjbxha1jrRQBusSjdhZMqB1NFCH6ayuvdksda3",
  "key31": "2VWJpQL764KbA9oCJLrsKZEnN7HmEMpThkpY8qQvVqRbduYvu5LwEntbXow9xBf6ZhXvcnfpH2GHeQD7vLifg2qi",
  "key32": "581SGW7MLxeEzmef1Vci3f7xSJy4vSYURhBfEAwuGsAnj5PqnzaTJeM5nGLxWM6wa6BJeEdM8BEUEmGS7ZNQ5ahJ",
  "key33": "66UjKvmVi7hMFzZb6m3L52apFK4x6vumhUaHeGofir3wnr5wWDnh1MduVHLy7oWzDh9m8SbaCzw2A7eYhr7c3ajb"
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
