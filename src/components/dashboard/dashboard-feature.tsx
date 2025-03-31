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
    "2h7usMTg1JGeyAPE3vpqzM3Yn9Cd29rDqA3EWu84H9dX2E7zesymhENFJNzDAFNpAqTkzU7ZXbkDZqFjtTScqtoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKtakjYdkhYnutfwVWnH4WoWmZeYAJ9WvVwiHLXSPn12TwqiWdskjchmBH7zq2jAicNX4RZe2vfTAc3SXA87qzy",
  "key1": "5fE5AhwDeBuJixCCzj8tjDCJxkLXvSBbjzgvV562UcVnCEjXTfkjzGHkio1y6ibHeJKBrmsExm8pK1Lpa6w4gsDK",
  "key2": "2HSG5L2gMhedDcpvS8ZyRsHfpKzzdaC7CaEs1aWg9jEK18iKGaCAHYG4PVrktyBoM8ybjYuqmFUJZCRzzPSwABZ1",
  "key3": "4m4UWCPo7sPzFFfUmUT47rz11BFD8pGMP5YfGDFKMQcZuTL39aWDyEQxua7Ec1pxke9yU87AhMjpL7rZsmNuiCNG",
  "key4": "2Xdz7PnyntcLw3HC5mGobBX2KGtF4ycsyehbVvucZGxJsjoEVLiV285tmmTih5VaTEXj13YCJDjMjG6of9noKJuz",
  "key5": "egEkzTvweFSNAMsXYVU8fxHeqtKG8sm4Z9abV8iemWoZmXUxBWdpwTSmEhiaDKho5Sw4KtJb22V5gcKnMZn12r9",
  "key6": "52hzozHnkg61CSxBuA48qK5QVG3aF6FDuUBZHzBqoDtPhZSLYzhFFABdmg3PkNRTqLRatxTxn9LeJx88shyLZbD2",
  "key7": "3aB6LmyBV4eE4nvQAe7JU2zD2urc2teJY3MQjqoTUa6wzoKw6uyZmFyYZRFUdEQy9AvWTXxSGNjMRJF69kkNo92e",
  "key8": "FYkktrCJQJxZsxVqZxNbB3vJKnhAsv2KJNMzJsQLDykTxsJqBYC1RkjbCjYgP1ud6togwUPg2k18A6wcNoRsm7X",
  "key9": "2DdJDeCqBK47q2MZue6VkT3KHdcZ4yBE8qZFPpPWUz8j9RwAwSU9rC76h5xZAatjqzjVZiNUPbHDXTtczB6KdULg",
  "key10": "5fjc2hFkoLSidZDAKcS6jVBmXvcWobJmiDEwdryqVC1C2du12kCSZAjS1jP4NZqnEAsypWiyMmWxSYF3CpUcPNtU",
  "key11": "5rN2snyfPpMmkDs5mCLBkyQoJeP3k7CP11K9rASaJzVL6YQdqEJx67jf89AQtWbkixVJ3Nj3VAyyAFpcRdQ8h1qk",
  "key12": "445oVqKRKvS1ibjZm5GK25nj7LYMcdda3Le1gC8KRRisCcVGfdu4H6MkC1UPvmyxqAqocJzoWXtHR57Xzsgi2mAf",
  "key13": "2GzxNwksSed4dmW9cp5HwTxxPMxd4LenwVUxp3aSzxqSGbPgZ6UCpiNKRo2kZ3bmVU2itXADsVMbwYB7bKkTNkri",
  "key14": "52m5SWS4Nd2u419R4uvRmPCG4PMMQKCXSf6NMp7kTwN6wJxF83X8Qgxy81M1vq9xoPuH38bQXRHLATxdMTNKegmW",
  "key15": "2kVToaJvXkoddkvFiS5W9bVHqoTxFP6Xbp7Tu1UrN3uGNPqe2EFphZFj7Ec9ABymLimXu5iAzarwRdAwh5owrtVu",
  "key16": "4ZzjrmUfLaQenVsD9qKK2962NUBnKpdT543PU5rRkfTQeqG9HNYLEyRURJTdgXBh2B3ZSXPiJkiGPfQs4oQ9f4ns",
  "key17": "5WL38M1CJbt2Ea3GCfpytDhzzmWQBmxgMigMPnEmtHYHKvTPLPmW7DESk4GxG6AZNXZHo941dXn4BKmpEGq5MKDX",
  "key18": "2PGrh1HQBLxT2aAiVXLPKVyAtLh7Z7nkYeuUGeRK7VkJXqA9pgE19jG8DY3TsMW1VBMje6LpjNHEjeUBSFNQYniV",
  "key19": "4bWxVuFV8iRGz8WeUU9sqqsKWrxCXAc2oshCuKrmMFw7HYmAK1H46ooHm6szRnkQRtmTq7A4oPCJSwJA6ifjSdUH",
  "key20": "5KAD4vEdf27t8MnXU8vTW4ohQFcab2BuZ3ETDyZ8xCEoE48q2n6u3x4ENGksa3qcZrabFzgQvkMrZvSNfv2SsSA3",
  "key21": "3Zay1WqFcSKWaxP5w6uLRGx2dVk17XpWSZgEz184Qom9d9wvq6RWZinfvqMUPwwqHUhqqUVJHtdoun7AWN8eh1YK",
  "key22": "2SgA5vijosmKN7tWC2R1fUL9tk44ADE7JJDRpaEVpbitrCH4LsWY4DCGePFvEEDqMVHyQr91qFVCH8bX6oUKDYu4",
  "key23": "61SXYnzfjJtT1YiKpB2zKWJuEuamNoFPKbhUtNN4vkknAN7BgSnbjhBH3QozDnu3MLr1VfQF2D28N2FH7FziyPkV",
  "key24": "4pXqTTuZjs6nT2fMBRSN1Yc7qm7hc4YDheQzWLiu1uub5fwQGz2aEXtsJMzctskPgvZrrZb4kt1dEACLsjLbyGZe",
  "key25": "3BNmZNttKc83eadvMAubikqQZyDcQMdiqE7sC5tNx2FpxVY2kqrGfbggYWNeW2Y89JahfkRDXMeNLLLBA7y3zZAN",
  "key26": "5fdA5CJ3ummUZJUcVAVkBTUinfV6KUASji41npqoHKHRrnxiwkSUj2kNwAWBrdkiK5bDdFPCNN9WRtPyaewtKNGA",
  "key27": "y2s7DoyT66vMKSmm2iNNnEod6oqKfw1UMTQs282BAGjm3fw4Ti75d8quMo2CRZ6BifqgzpePcQW7xNLng9mpYq4",
  "key28": "54zX33oXo94jxUZvw2uavzHXZLw943f9MuJCH1TT6rve8qkx3HpVQUSShJhjUPjzLnAb4XzwhzD274joUNZkrXq6",
  "key29": "32jP45umisQg6hb2zmxZLwgZL4C9SzAd1BA7b4whQEmsUjGRbHqfk9JzE4X89miD76DZ6FUvRGdf3XaCRHebvJFn",
  "key30": "63c18YyiDyA338LDYYT1Gyntd6ZwFHfasqhwYDTSyXfhayjh99xsBLqbrxakEyfWAVTHnLB9vK4WrC37TLJcG2AS",
  "key31": "5iccgfRxPAoprwghh6v7y6GafEApwYSGioNXsTjd9NrAmrKcnsjMvZ2UQ3WGoxx3AvQmEVi3Dc9HzGWuT5i9N5Qa",
  "key32": "4mjsjvoEAfoCMhWZsmtx4pWgv7iaByn23kqe5VbT5NUZHRychawuDYQ4gTDoJZHuyBD9FVjx31g6Sdf68FEKwV1D",
  "key33": "5maMb15epxmo3P7bJdZsYotTnwc2D1vKerrcqDifBWER2aw2X9jT5FJVeJoycFrsdVJrvWJVTxLK8qZ6KjHBrKd3",
  "key34": "5z6GqeQ9J51EzLLAkjhsVeXZsogwiEqbVwzi9tNPGjV64pV1izcdnfGo31mizJPVcMWkmo1REsHnmc9YYdzhd5xw",
  "key35": "46sFYWWjsBbKDL6TjkGQVmwctSGykQNYVBSTfGnKP7k7D1ZumMRC5Y7KEfJ81j6umQMpnDNnpyrz8Ya1wHC3xxZM",
  "key36": "3hUAqY9PtPexyDCh5KXhWhDCPCrYhx1gAY7qjAADNLx987Y87ryUTLUKvwAAshxaNVntTj7wFYg1kxhfNqQyrND1"
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
