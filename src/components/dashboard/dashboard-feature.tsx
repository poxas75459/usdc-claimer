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
    "Axe9GA15yHXBq73uwce7XWyKkbhbxL1VHEhG7nnsB7Q8mRBKnu8Fxafx7ymVLA5XUaCfmRduKT9hh4rPAdtQxwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhAC9EvGW2oK6vF3K39MZnQzNWuHTLAwkfgFMea84i3kCHa1evuzvr93uAg1i7yRVojTgbv4B9JWhW8nqYy1Jc4",
  "key1": "2pJ8Nm7sEcpWkhDbmBmPxRyaq2ccY21ocuU8Ep3Uuvc8vLWfXuB2fQdS2RE73qjGfozokht5GsA9UE5SUHHksSMx",
  "key2": "5VjFbHRXJ3wsV8DdwG2Ne7vnwraewj7ogbvKhVqDg5dREv7pkno758wUaG3dQo1omF9cpqrAYfjHhx2zDW2rHeEc",
  "key3": "46Ygnh1sknRtcopx7Vwcf1MwTnWtztaqttMUVNcWiUVUwpiEeS1hwmESvRJ4eQDbh8y4UCdPVf4iijkxrFSUqUd3",
  "key4": "4xs1dDfnrcZkK46gZ5qbjSaKJcGyUozgwStv8Qv3ZQbYFsDq94UgNxDRQnXrPWDC9UdTPkohtyFKvWiW4ykM1Tp4",
  "key5": "2f7DzjKummGfQM9i9mm9a5EcTtUR3pemH3tQxYafJyJEiQCiseFWbRtzZcnsckX1p3FEHHet1CQyFcMTicTdfv4",
  "key6": "3GXk5Y6G2voz9t59FcWagwyHAMSDNzsA1KUxrbbDGeC7pWgEN3xTpgd2ybrZJqXd2rpzA1fmgFK8eeBkp4Ri9BC9",
  "key7": "wD3L45tyEbfkjfUyrhYoRJg5fXQgxurC5B6iL71nNwE4iqPguuZY4PsCezd2ufs5x1o5hueRrZZsNsSzar6Ene5",
  "key8": "JXC2eYshGdjguTZe5K9pEWdMU5THGgGWDsjnxJNLgVn9f1FvQxuAafG5zidL6fGRtU4dPctG9MqtUJBuH9hg8RZ",
  "key9": "649SknTsqrCq1njCxHQGmiza1yUDoboe97m73qt6fFyaoundTXE9eRJYcKWYcrQknuxgNso8Xn89jNvP1nteEow5",
  "key10": "UvqT5GivZcieAJrJtskmEx9iJTEdLV5JxcX1TYS8FMfGc8HdGpjK67kfaGpGTxvZKgnhmexGPSQhNTG5YhQf5rs",
  "key11": "gQMVTiBVVfdRjRDJC4r284cApbWxfM8nyLma3FAW7vxGzot4zPBTNm1LieVkPs4GPUbiLqnLDqpryHseKzSMugA",
  "key12": "3w5k11VNA5wV4oBwkjxjK4mCcQY46XSUcN8aFRbSJY2Btmf8FWsdvkoxirr8nKd12Vb75W24i1bhs47mPCfB45Az",
  "key13": "4p5V6aYcvXBsgpG7eu5LczT6ijMov4pXEzJo8V6vEdib98oQ3PK9x3FUtEj1QZGwJ97eDwv6P7qovmPgnC2BBiiu",
  "key14": "2TFpCF5VBxpey4SFxzgQWc1JDsPNA3i9Us7GF5g6zyGszgNc5bUG8KLmSP8wJzvrSggP91zJq2pumpDvcm6FLzXT",
  "key15": "4RfKbVnE1t6NJqUunRiHE9k2CqYhGWXsntZdBXEZZctigXsorvCMNGe7tuHXbk94yFpMx5esDcyZcRkFswv6Pk1r",
  "key16": "4L9rDPyTjwaqFaob1ritsFvF5T6uFaj27HK9URs4zbLTnYWAJNx7XFVMnM4LF2S2G5K3hKmouGGqSrxuVGntDkac",
  "key17": "3AhLmGuDEnzxX6E3HUaBx4dbjoAcbjKCerHrfPvMYeM44ebu7uaWNwVPPxLqXiDi5sLdyL52hTZUsjmiuEyRkrX4",
  "key18": "ck5tBBSbYKRQmPpfQ2equj6F1rAjR2uYYiRifTFKUWYWQ3VuzPKz6NWT8GxkhduzEqZPwCyuMeqPqS1SzgjwgSW",
  "key19": "3zh1xNicLWTS3NR1vXoGVcdV1iJsenM94s1yd5GjPt7UKXfncRRTuETGR4F2S9BGdHKW4ouE3HErqwExm6skALwc",
  "key20": "FiHSVQTSkAPjw7ubfWWUvCy5gnoVX9AaDqTx9w5JyX8Cx29zEu2msrLtU9nvdPShNR95e6xZUekHihG5vzNTrrw",
  "key21": "2NgHTbA7L2DkCWuEh9isakgVfrTMzKuimw8Hy1rKJg9Arsw1aq6xFZcUuysPLWowN6iN74Rc1zdJp3wyqbQ5JKHk",
  "key22": "45iLBu2u8pj4tyobEiqr7WeTFtZTGVb78kii8NYMeZyWygXUihDTLbLFJnehFybFrngPkd48M9hP7kniSiCDYfzG",
  "key23": "4e1z5Rh7zFJiKX4JY7mUaV83KoSPrBNKYrsZvfyDLXk3smc4escCwEBsFV5dWMJDsGZqZQJ9f1CFuqWpegi8GW86",
  "key24": "37sUG78bUYFyAtkHER4XQzqjMjhwFJDp6D5toqNHJNryRpLsrUUJKyoo2PGpasSmLyCWMnYTEjhFT1Z96NWk3BX8",
  "key25": "2UA9Bn6XwNeuQ4u6UQgiLq57HRefUpPBDKDha54o4djnB52S1ce67cUzEUpQFFaTMorezW39ckwDG8LC83TQLBUo",
  "key26": "5JGoryG3Gi1R6XXiqE3LNatBAGRFsVgsgjma2qCmsNjjApqMJjLYbrvqYqiwXZcdUMDVwV4xKeWHCZbMQUowW5Eb",
  "key27": "3TkEM38cYhdgzRZG5dhJnL28bmujLYKW7g7ebhAqJEKoK1vvypWboAB8xW29PJoEZcH4xiiTYny8WFBsKMwEQHzq",
  "key28": "5emR47FM631GH9LKQ1jiHeuQ8gpqmQ496vz9BJmTvZjGGpyYJdLXHd3cWkJJt4KcnEj4mQKesr1oa3CFyCMUFmjn",
  "key29": "3Xr3FZMZSjACRgocUKVSHgQYffoDaS6WMrQC9YZbLTiqigdXd2ZHrfGTPEqyMN2ABwUnxVnX7DFvr11XafqRdsmJ",
  "key30": "37M4egb86Gw2SxkLrPQXfeaezKZ8uR8pqLPfiiDzvgiSy1d9PNep6nZXqywvicmqwWetNDFVya4ER2qMdJhVQeNy",
  "key31": "ZQLnoc3ahsSSNiNafEkroKPtBKvEx1HAkPLzGnmdheAzF98hA4jF7Sq4wPbnPYT4ddXfYzxafrc7uTXSLXhyRHa",
  "key32": "61hKUmoK3FQu5ihhGXeLhYxRabdKPosighnFd1ZXwaATM14wW4xTTSxr5sFa5665DSkJHHeV73gSaAQ5bgTqugnS",
  "key33": "Lu7aCqh74PZzASpVxJne5WHcWUv6N9GeqR4o2aqU5KCAUoWPwToCUUnsSA5xSMf8DHtt1qP9bqZhjqfnjQf9W5Z",
  "key34": "5JjgMaXAD3HNwiqdEJazqf85SruRAWw5Zgan4iqFgxU1ibCCj66f7iZHtFKQrb9qmhnvuigxChKoDErR4DqbP9qv",
  "key35": "3PC87oq8mBh4gatBJ7ZzZ8c4ajU4aQw4H4G41fTpB12pnwUvhKt4JmdXETsoL15ES2dxTVAxaGkW5AfagzA1inbg"
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
