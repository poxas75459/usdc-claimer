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
    "vDpfJbmcg5upzVfnG5qVZUwtY4y9nPysrBi4f8FopcgZhw73q8fZvonmjpGjq69vxkTdMa8gknKFDxB8djTDP16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YayYpA4abvJzs5tKnPJqfqG8RgbUk9zwUmJxgUNbQxhFkvDP2hiwsnuVzwUrrYb16cKpGyYqyHZH8fgVPfToq7M",
  "key1": "2Q8yGfEYABYC8EoXa8wysawYBYevXFRhCExD8HdBhQP9sJLAX819bbZ2z6XDoDdwq2CneTmcK3kbpT2mAwViLE38",
  "key2": "EBe1HngEUr69ezokxQLNma9fjuPZ2r1KdKY5dGpusZUtxx6oEybT4n7r3YDNuTtSLiQGvep2rXRXmpb7hhYBk8h",
  "key3": "2C2c1Qm5YhGbmNBMK999hKQ5R9zQsPvzZ2iC9h37ZVfoUjtcQasMsBeX1vVLRhBuQ9tB7YDekVDCTYUg5xnvLsrS",
  "key4": "jbSoVTtjy7tgVyWARJrDP5L99fhpZXLaDrG7yfo516amFxcmWY5dcGGTcbBBwuUiS4oroQxhTDjtx9UyUfUTPDv",
  "key5": "u3yUVq3fSJDKeVxXZeTjJmo5DxZ5HtFVVTki8qz5eX5hybZsp4bPLSaGo6D77Pugh6P3j11viRyybcuFvxt7pe6",
  "key6": "5fqWMXdT3vBwcjcBZJVkAkPz3XYmy5VMHGoPXhVBQSk94cbekfPZ74sdMprmnCaUeE4vduuFCtrYAA5u86m5busb",
  "key7": "2rJenfL4sDBvqELjFJ1sd4vq8d3RZGDBzWYb2bDa19iqcchoH1VmqC1c6LxEWdiMabhoqnHocKTQZvSbaygzKiRZ",
  "key8": "PhyNkAMkmBpSqdjsj9HnL6k4MPUNP1H8cHxtdk68EJac4gAMQMeWmChzgSYued1R4fFXSDP3MEEp7sDVvjzWTSG",
  "key9": "3QrgdL9FAMbHjj3Xa3BXiMSYA7EAf9igcNaGUQdEuTf33jzaUPdUGoK4KhVpM3VTNiwtpwRQjPXQFVhtrtXUKYSD",
  "key10": "63R3AYmV52ZfM9UM9reTBKcPijVjv2ifnq7v71pCdf8hB9jJqfoav9iEKECrdU1r1j44434bhoLDcpUCXpj3aya5",
  "key11": "W349JwzZfcVqvirBZ17NjEHo5zRUgR8bEJT95ZbNywjUhncsGSovrmvUfmcNFaV3Rn3M5FfkTZrumUtgSKSXPTk",
  "key12": "4TQZKTZRewaeL3fWswskcEompS6kRiwmS3PwKJLAhBhsQXoFmgVqqR2esM7wMbKe3EHrPSk5VN6jv1FzAmM58pVQ",
  "key13": "5AfY4JwQbGzb2kD5shpuB1diAXBDcy7awW9AQtu1eHHKbMwtaz6YdG6FxQmtC9XkqwSTXrAXobTHe8FpC7U1kU92",
  "key14": "xYmLvmxogRpRt4UaPxkCZL2DdfVQZcmQBq1csCifS5WKuUEj7STjTD7eTYCMam1BwRSwBKqRu47mpQNwTjxcvmz",
  "key15": "2UDDCR3abfDGN2x77MEfgRFde7TxsqtGqrh9gz3pMeu7HyLMr7LUvcfaA3KmcBpQCj8wYtpMxhkHvi7PFEPRUHR1",
  "key16": "2kN7X7KZo6rFvH4AWGwHQTMVvejoQeFYzFGHFynQGUX9vqKmBdk4ZpP7wPqAmAquVCcfgUsCdvvUFosD1RrodB34",
  "key17": "3peHXKszB3hF3DFKQkb9yPEfWwfxPjZhXTEowV8T1EJwsHbyBr6djamRF9meQ8BdPxwH2i3ifx5hpAWx2g81c5Vp",
  "key18": "42bwUfqgA8ARqSGA9hrLCfUqjCFek2aRnkh4qHddQ15B2hjgZx6PDKXmamu1B1h2vb9Ny86QMBU8znTNxKn2hzs7",
  "key19": "3dSqL87YuyJCv6NBrMiiuwpycr1SApbrjdT5HBQQsuMScnwcxEUu3o9XD7z4ajUkYa7FhUc4nuPJ6EvpNjHE5VB2",
  "key20": "26qCHLzEZRJJQ3if8WaSbVLdTLA827vZAbgHVUTej3gWsBZ2LLbdwKAqo2g3QceDdfU5UJ4StxewvjXypQU5WM63",
  "key21": "2LvJMrCQMBja9YuMUvfBHEC8XmDMXjaT4MCWepzYBq8QTg1cLbBLsS8C68JbYUcY8SnvQPm1qGZRxWYENCs4woBT",
  "key22": "3qAt1fttCv74b9au1NDryot5mRwnvrZCNaX651MfMqWw7FfCX7DHYUCA9gkxic1kp5qAaKvd32GEgdTvq2jeWCXr",
  "key23": "4oBRNqHYMk9UBAxRfiRBrr2SzN37Hn35xyqKzTxKJ7gyaKcFT9xoiLsT4UYBH3oeH7esZzbGqrU9WCgM4atNWNuL",
  "key24": "21fs2UH4vMWgZsAf365Mcyob5vy2iXDHNZKCPF1gHUG5W4JbwDkmaW4u5ceCQfWVVAjjdQVE9w1uMawt3xDXU6Do",
  "key25": "U6BxrL7g8ixsobPKX1HaG3gvNaY7eKUhyPoGfBSyBy1ruYFjmtQxax3iL5VWeiZMVFTCZ9t4CdcRXvCHnH4cNjz",
  "key26": "4kgHsMG7ywDkuV6vmduRUBAXuiYJ1ek4j8NWnxkNJUDh93xQKdzt8JqhP4biwkSM76to6Fdyn4x6sQAzuhBW67An",
  "key27": "3LDQKLdZHUJ3MAKMVxpmR8AoR7LXgTYhLU1VxyEWJXPP5h898HreXsUXFD3kWRQehGkFgmyXa2JFqgX8bAWraFnL"
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
