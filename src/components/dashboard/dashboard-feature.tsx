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
    "51eyF1oML6Wq4zkmMkcDrfLA49vMaayEjBYPLjSjSKXNbrnJZZ8EifxD3qCtzSEWf8Zx9tgDFM5Z6SJszCXKHsDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UN8VT1T6iQ6wCE3tEM3VEWxWdjgoGeHZ4Lc8ZsSS9hBuxLjSyhSHFPJTCnJfdttmunyccgjhNGMbwZ2JrT8LUyw",
  "key1": "3aWXB8EWpwZoS12eEifEQ3xkASEH46VpQM3ChSCVG4MX4nh2ZJK15eR7F6n2NTyBvyeStX3NFD8msv2RM7gXcp1c",
  "key2": "4BoRafcLHmaadBmQM5XYRREGJWUWuFrsEPDpUT7PbK4RzThPTizrFUbGkicmhCa9wh2iVrg4m4LR2Bxg4cm5FJp9",
  "key3": "b2Q8B1D1mEa7aSLwrqSj9LoEuKcKmkT2sMFJZx158s5CQUsZXMhvPDzQvvHGCaxwVTRYTmgkWCbygDTwzmwrQUQ",
  "key4": "3xFfDqk8J5F7M5oNpbJBEHs6nxB8ToS8w7Wd8bB4ENirzJiAkJUf2fRRiJWBGBZtecVG128YczWyi4mK1C65nvHM",
  "key5": "F193TWDij1eVjtJQAjHjHp6WdggoYriTEazRMf4TVeif36QUN4j5bCXy8iH7SiJxSYXJWR5yQBJpv41aBBfKhgb",
  "key6": "4U32nKSuHBkU4qbHgByCY7EhVj8ZDhTtXi817DbkExNETwsqH7Cc14Lqkk96wuoH54t9EViQaYHX3eY4v7cz1Ej",
  "key7": "3ghmW1D3HmVE7Sd3JSdWfNiZkLpQqW33JH9MXpBTKqS4izoyS2hU4QppfS8D4xfeyykBhyK5edyfYCu2V1T5b5ys",
  "key8": "2xaGdMUJAwG9DUz7HgoQBpuEggKkMk7twhuR5AUPAcYdMTJZdCdz9BxGfUThCef95NhyuUfmZbmG63DRu8DtPyMH",
  "key9": "5ZFVE24ke5zJxED15XfctGLEJNbLoAUeEYLbEQBJxUzcF4wP2ErcAD9ETTcd3huT2VtatTDSuuKEa5WCeg2jAFfa",
  "key10": "tSjBV6hrj2S2NeUXrNehvpnY2isyTjckpxwUnxB1N7dFqG84UKt9Wkqcq1iJUMX7qcnYQ6Xj59aMUX4km4nGvUS",
  "key11": "GakDoqfrzeK6rupnXxszqnwM4ErxnQeCtPVtuUw57x72oQZkz7MWvRJmZyzszx32BTa1ayUDx2ZYGwdsFzKx66x",
  "key12": "435xATT7HSyKMmJPxVPWqZQXLueJWiUPVqzfPwarSeTznLXRh1SNSP4pZ2xBEtJymQAtp1PeeQBHh5ULgUCvy9qA",
  "key13": "32PEL6RLM2oRV1goi4unAV9rb7SG9rPXwMkSqijqeZ3cNEzmfgHSSc1PynpXEVQzm1nfbKFPbxg8hvAEF44XF3Bh",
  "key14": "2RkLgEPiWYXU8Y3GdYiRb95msbv6JfTFs97fKnZRcaMZEAygqGwCtvRUXEHpWEqorTGh7q5RCcSRcnuaJk72X8cV",
  "key15": "2MBg8vuUz21uFLUzqWKbfkbdrYnPrPXgeBGbTxjUZxdTEqbcW4ry7xQNPu2wjaNLie4JV8TEhDExTJLqkHZnkVYi",
  "key16": "2K6EkseWsdXRxPg7drykB2zWZuzsAVHUiGAT14yChiES4CxvNjrWDVRvUk9nX6JgJCGhgJQ1VQXVpkidDhZmGxuG",
  "key17": "2mKGqHDT8cyc7mxcnAutfdKVCUM7r6PNxxYpMxfhbof89DHd1fNSECmaABhFkPFSS2RwUZQQjvgfPunMNmwF3ce2",
  "key18": "5Z2wEbcfRgyDXfwz5WfMrPaohYMggtMonQ6TVuefodLdqeiKpc8RHGJT8KDhWrQECy1YMREjQYFijE9nUSgCT7Zo",
  "key19": "5DUFcvZLUVP29kWVF2gKxLjz3aSKxfZQdfoSWAc9hS96ftB4L1DSe5hRuew7Px8dwF29sLu46hzLSg4qhd9UWa9w",
  "key20": "4g3TuKXiVvTDb1XQs3aZ5rYbG6MGgcQ6bZe2FVYoo2konjLJpPKpKmJuyTHbpAhZTjGuiofGfzLF2BJU3HbAeBS6",
  "key21": "4D4Zm25VHctMsFMnsG8oztptiUpHWYLf2J6EnYyYiXKbbUAaSC4iW9y8JJsX51hfVLpUVsyyM8mPt5sf3rrhF8B8",
  "key22": "5eWFxjFLAvntLArHheGURytr1BuXQZbEdEK4u9R5YcuJoaCXEncD1dqS6Cd49xVTDaKyJfRjVJU3dqThMZcCKqdB",
  "key23": "5BYB9efk47gtqwWFrV91eVGEGda4nvRAVtgr2e4BPU1ZCQ2sUDBe8917QrcaGxemBUdZXkcCQ7RQurK1z6sY7qfe",
  "key24": "5L3anFktbF1iBzjTjNMtShaCPAJQJAWDcBcGyPX7ZxyJV1ufjmccQ5gNKiVFtu51PbRQHzEqFiaN8SXVduNvPRio",
  "key25": "3bzALY8MUCt5pu4QysDy1V2mFDAzanFcMMdQz61Y8pULdWjy3QsDAzTzxMqxaYj27mgGQegxGED1PN52Si4dXiLQ",
  "key26": "5KMuBnW6HxgX4wFZieQoqYdtXrP5E4Qzr7b2GUcafAf1UbKwVMAS4LoLRjv7kurKNbcQXsbAgmhwDdxzcEgDz49Q",
  "key27": "35NmXT7yuiBgrUbvKEQm1oFdRXkLJUwxZvfJHj7FidSCb2Wp5XnQDsqtFLNjS9BpkrvQ4T5CDG3jNnkkAqsHhv6X",
  "key28": "61CR9CMNSnT17KqY86jCV38G9UKHvhCSYaydFvMwrL8yrfXMnnFyyZuyyzu3JGSSVuLwUihPd4NuHiNJJBnmkQe4",
  "key29": "UQJCX1HSgvkgfuiP61MqWRHidKQAjBBFX15eUDCBbqbPookyUosDGsfPqHmaKyQ4uhEDH5GMerseZPBVArsP3x3",
  "key30": "3A4gNVNVERNT7e8J5KRejr3Vgmu7TAWmhtZq4k2PmsdaC7Z1vejtVZtXP7ni58WDq616BBqV4tTrYJ8ypg16PDDz"
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
