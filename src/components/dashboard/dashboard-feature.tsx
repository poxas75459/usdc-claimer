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
    "5X1UMHYPxx7i2RLPgn6JhDveMxtbi86w7N2yrgyX1rQFrgRp87b3XXS8AGNnM7kbHNMFMa5S2CSiNdT9vP5fTTrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTe8h13WetKudbyJk4HCyeBpMYnATwPn8gCcpskqKJJAGTAEp7EZTY7mtjydnYUDKoGDETexq6vvxGpZ4f1rxCY",
  "key1": "HF7AuwU1sM5ULn9KqqHSPkvTEXva6MjgfRqewyxPhSwrT7fBurSjaibciVA8JByeNEh5MPXxeGM7SRiDfQ8anST",
  "key2": "Qx9jiVi3UmyWFHV1iSbPu16K28Hudu21wFn1cQo8R4MPp5PUBF1Ya5D37toXQHgNa7mBNoTx5fFQ7MQYpGsgcUq",
  "key3": "5Kok83BpScbaDsnzS1SN2CNusFcDYadJKjWCCwHN9i7sCtn6xTh7taxVqYMG6QUHcorM2zRv8YctHYJz5q3iHdSX",
  "key4": "38qMdLtHkEK5utfcqwmNZu1jqzAt9kEZxWrohdz7WBVmr9L4ZzxNi2xxLdBsVjRWX5ZAMbdjYGmFaxKfnQMMroCP",
  "key5": "398C62gufW8eXEys756BC1TThUL6hGXoniNPvr5UNLscz5GhyFax79v2sB1kvyVr1k36QdunA7EvJgKGFa2xKMpB",
  "key6": "thPm6HKkjzh5VJzs14jmWACr9CoRYnVSNQMktaoXyLh3QrNtvbWtr4aE8Me2yYmsx6o9WDJb5CEXPSa7fmALP4u",
  "key7": "2UQm6skFn4za3dyP5rQQNFoz85HW6aHTL1hQczZhx1GYzABMJyY2XiSZbarNK2gN8LanghTMzZ5s17M84uXxFpf5",
  "key8": "hb1Rr2t1Vp7DTr4KU1CByB8Nz9DN8dpxdBWeBkmTEWA5AMYviiUjXH3qzAYmaQ8SPAPXvV2NNEaYm9SGxwV1Bqu",
  "key9": "3MEx5zFzSPaWXD3n5hsUpphUjDATjaPEP2b6BUmA3oyPXx6GpBsAcVaFQuzBNTs8CYeVBgpDoLtBwpEe73PUipP2",
  "key10": "VMkcuAiw4USvskYrMkVowAFEMPekLFkmW1vXwPS4WbrDTAKQT9LvhQaF5g1ARMx5sRKddZKS4NMoHAW8CVGvHW6",
  "key11": "jX7F1XzFPf6PHHZ6e5Vc4ZBAswAB2fgcjUG6qbKFgMk7k5dyAbQNqo4VMf42urZVaixcS8ZtSSmBhmf1LnG3qqW",
  "key12": "3htLBE9vcFZvRJ3oHeDkqSjriNUKMCmmrLSWvP9zNv9uBRYLYb4ANPjYSTSyvsDTrsiEuF7bz3X3BgWMXXbiy8zY",
  "key13": "4ujNmHnPsEyHPN5JcjLdSKsHzdAhLFwwM6TEAahmQi5m9iEHSgQGBEfMQzycwRQWVyYkYDfyxU89qHtMwys2J5GB",
  "key14": "3dybShFYPczCZxTtWL8B4bsYsVxQKsgMCY1KGQJW53yEGEk2rxJXSSJM6SsGzQ3cSd3RePZkJZteKXJAGhPFVdWu",
  "key15": "2Sq8b6c1nHtvKdA7oVTsTRwjc8hsFko1MMEaev4xhEWrphv7kjmV9NqSSPU4sRM2RjFjcV2fPvPHjtiNeVABKpah",
  "key16": "3GTS6Fgw5VUCVsGZpMZ6QuSRThTv5T52eZYmBD2ueyniT8c44tngJjAZ23wPdRUtgJcE1xvf44axVqVGQeMoP1Az",
  "key17": "4S65AZZNRA9KL1STxHLmibZgMiPLQwRmZEi5j3qWcAE9dYRyBwB2Zbh99R7HcdGj9uCrsogb9MiPPs5jAmgfPeyj",
  "key18": "a2RsN5izBpcgnYbFQX1JdNwwWX5EBvPybbk6czNWRNeKr3CZLyvthzK5MDhtD9B5BHzCyoVNfcNjGVTySEv7r7z",
  "key19": "41sahqcg2VsX7QxQ8mAMX4pjvMTB9ExaFXSrSZDtPwimpbmNZeLyD7cS6UTUocYMNLySFbDdMgpEcj68ZJ9ovaXF",
  "key20": "4f5BYHULa4TZhT6tS4MdXmPEby9bP4Cs3CK2jrgqtWwGjVAGWqLM4i6949pD4dwju5BroU64SvhSpC9MZ2t3E9xQ",
  "key21": "3EtPSQURLBzaKUKP2XoAVJP712XyUEWtW6xNqeSPfY44etcVTTtkUk6oHSVuwNpiWXdY9LcsHovsouv1BNNzszPu",
  "key22": "5opKZnmzUYeCzwxYqaTS9RAV1HfLY2FpkQ6fyfWoYLHFG8NU1LL262bEaXpRT1a8V7dw3qpSBZTUcqSRgddqxehv",
  "key23": "4Mos7VCB7T1TCQysQLMDcRgurkzvSbERkJJgcgr98E7JHBwrN8pQnUUnakaeAsjE15WuY9f3vtgrq4nxMaEsADd7",
  "key24": "31cVMedP7UoN7vuHmtim55beGm9NAfmPRqCzrzMTJsUhqZLEAP4h9EscTEThnJeaB77xCZKUgyNtMvgsU9sdzTn3",
  "key25": "57hRehJ2utqoCi1dezSvu4L4cqu2tRSxJsN4ZryWVpRhfhd3xqxYb5o4QVBogcYBJMqmG2sfcuD6o6qSpzQ1G6Gy",
  "key26": "KZCsqDoXuQ37t9Gywgiwt1TTjkFpsu8LNzh3sndsQRnaHh2vzFBd97NaBGUQESbsRvHvSofmdUQrNEWQTPeMczN",
  "key27": "2YxXm4QyPM4A1tH53nG3r6WfhmVhttENqpQsfytEE7aBTp2miNPXoLbuaBKGyXxz632BF559vPE97GyXi9mv5Pob",
  "key28": "459YmdUSVwa9ZKXPCTWD5F7ENPd1aA6hC68u1ELxs5m3Pf1AZ1w2BhpYdt375kx1PsTsQB3gBgdjstx2CmRPhGk5",
  "key29": "3oxFjdGEKGSZn3KGdoxb8fyddtS7ZQ11ywm4sa9gybjjgmdYSLFxqfVugDKws6Pqhg9ehyNBftXeAnXyhehSUj4q",
  "key30": "PiVRqCfLtoPHwGko2NJr7CpzLexpt6qSjJi72gmaBffFowiU3zSq6LCdNTQ68y2ukHaF75UaTDqMHw3FgCqhGgz"
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
