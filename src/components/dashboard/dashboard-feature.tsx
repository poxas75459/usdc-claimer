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
    "3hwb4GP4u1Hs3pRTkvqLJ28J94FAndLTuegM8rKcZdgbRJ36m7XWdrBLU9CNBAe7KrxqcBc8xQTkS2qLuUPjUmE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "efbt5FbERfPV6FXwgu4h9BG7RaoJgzVUmMwy3K6p5EhVTaEZX4ABb3iSgygM5TJtxQzreYwVqgqVFkdJWxZi1qJ",
  "key1": "2wDc2mYgTcPs6Yraapp5gdJP7tnPV6SGWAMbNHhNA2bagLaNRfBLoHAkePjNSLkD4iBDDdFjuzHmLCVUYMdPgHVn",
  "key2": "526Gj9Gn6wU38tMPeKDjKk29qDpRvdzDuwn2w5SL66fXvZssq5VTaa3gjT2vBFkk3MzWGaPnsvyL4KVK8dWzADR9",
  "key3": "4NQLHP1gZDn4MyQSBLeaeSauymTcU3htq9JyRmrK2P5ntFKLnnq6av4UqN14idpke8oBSaAy19yD6D8NkuapbQ7M",
  "key4": "3sL78D3BDXxG8Z3R9QiztHrpncprbxpoTgniFQt6LLRhiiQnxB3GAKvFPEvuQcihfyBUgG1SufNFdxWykyyw8kGW",
  "key5": "52h8BupfNWKUaTK46r93mSZNDsAaZrtbLrEwevMuEiJJDjjMEyhDEqSG3VNkkY6LW9cXgquUCMHxhTmnnsKftVfd",
  "key6": "3kpCuN66hjUBP1oWbJsPKC8sXfMdz9LW5i4npUPchjhcB85n41ECXzucWnbcvgEzKVz2HAkvTWxw1gKqqE3yLR2x",
  "key7": "23DzkM2V65HnJiGu8FC4VyhNNoJymsJXgPVV2FvwB2vBsPZoANurzrP3qYgAEuFRKnt5TxP9NkoNnYbh7y8HsCrG",
  "key8": "4LMKHR4zEB5DhdJkWAJBFMRZk6bNuuaiy26aujLArFd7WSSHffBK3k84qPTBrfAVAEN5ZAHPbUbJjwMjJBgGByuz",
  "key9": "2245JTTc6Am3y8PhkLGNdwkdvvCcBpwMcXhkCAgkN8FTce4f8Mqfh1BpbqhNNyZvUXwERTbBRJR9J5tiasYUazeu",
  "key10": "3ZdkxW5t7FWHDBNNU7jcBwngFamsM3GMsWpbR7LWAJP3DuzMhAGiS22qzY42viE4QyACmHar14Bt72DGfS18J1bd",
  "key11": "4De9Yw7c3pDU7F6Qz88NMcvhW3ELrUUCMKqZgcG9jSmef25kjheBhNrr7oeWu8dU3vfRgwNNHmkpRnuYS2LScwuy",
  "key12": "5C1hshD7sADcunNs4V7C7bo9KjTSf5BpwstSqeB4HNiHUeah45KZ44t9fZHRnZ7dmbcPraFeuzG8Lxup2dVfrv2E",
  "key13": "5fvr4hieENFeDjoLTuJiffKW53FqzpsaSkzoiqvjC6QQ7obwoa2x3W2YBkhUMihddhfpYoWD15Vc2qFo1FViMik9",
  "key14": "3xxtpY9tEme43w5LjN7kZdAyrDfxHZgpEZFkG7QwXdGhDVjw7vJbGeGW2eTWCjYNLt8CjQso1Z4685VBtvozHJ7d",
  "key15": "KihzAHrcoGwCBsuq8Eaj4dbL7hgwS5zviaUFyFUP8HCPxad9YJzamnhXKQKXtrYv2bd2GBaFZTKD7QFmfXyD6zR",
  "key16": "5rKBZWfWeAT4NkA7rq9C5iJYYssR55ASneGiaetb26uScHxsqNVLtHB1TTsuQAA2t9e8njLv9v5DroNCSWtZhKXD",
  "key17": "3Dqdxt3ysEWtq8FLEcZAVG3qZ7TXNcsXu2snUNTyeK676F3HkRvsfxNpeMEZGGm1i1JjNggAcjCecNA2NWM9N2is",
  "key18": "3gUDJzgdhVynN7k1AhvZToZByTZFv6gJY16wRipgTUrhtQ44qjHwYCCJTRWhkxv4Lw6LPSqgXMQBqA4VTUwDkRDd",
  "key19": "5n8hGdMPPHBuQUT4D4wRLDnnU6SBJxwfC3R337EcQo5Nkcnimny9U9ExByYNPM6sYDpu5PC5yTEttcvrQNBUjrQ4",
  "key20": "5U7WfjiRViRAcR8Pc5geKCRTWpN7MhLGWfgX4yCyDffvnG4y3FpF4Ki9Ne7jgiWqrHojUtPe2kfVeVLqYRrXCjmg",
  "key21": "5dCpjuymvdSa4Mo628cJUXxiM1Qo4FFyd4ds1PN43YdxjvVXbDkp84aoNF4SrXAMpStwVoEWyQNkjQLvfHjqxsrb",
  "key22": "2bqDmNQKqN6NT2XRhLQgtsx1Vw8rDYBBJXqj6hQL8mdJBiPK1p4L9xZkwpmD1z513hLapq5PvpDHmdhWmkdz1Rnw",
  "key23": "4RwH94LQaotfBs9hYBZdqJowtUPuSEVzqDrbiPeYxAfSC33U3F1ehTGrxbWsKykEedp2j9nrWJ6qnKQuvZxx2YBn",
  "key24": "2dBVDYfEeNX993KLXxxucEzd4HaKJA8UBY2fZHf45hzyunYfAKe6eHF5byjM9d3nftEgauK1piWPVDAykPJZc56F",
  "key25": "4t8Bf4eSwa3DCTbR8RVQpVAF7X22othkqfd2cjQjZUn9x3LZffYfxkGJNtc6f7xGSHfyMyswvpqsKBEL1mge9N2F",
  "key26": "4qy5fqZ6T4Ucz41VpcsPKQfyCAP59gfrSLuK3D4eRw7NwNZKePopv3LbCQeErHGztnonbVVPEMQkNf38y1V4bXJf",
  "key27": "5MYQS92NTcPAovEXJjmcbr5fLSCo4DEEnwgK7eeamLd4kEmZz8rTZ1m83ZN7MafTHFqMwRCf82erqM9cuqp6868q",
  "key28": "24jXU7SYNTPY2RDyqmLEPe8vz7GqJvbE4uzbnYXh8evbLZa3UuQ7FPAXTFHPUWTiaGKFphANYYJTyzyfBhaFcDhD",
  "key29": "2G3xe17kXCgMhVFYotjf1W3yLLANmLCCR1cfx1yDDKVWSM79kRwwCmGbKHKvj47a5TH8sk3tQ97UBUViRNhZ5mgm",
  "key30": "3VA8YebskzqSL2qGHufk9A8gH5tGnCzm9M2zoeguVyRBAdzdVovoTJB3QxZ9ZSg8AiQvkYVjoSSJ7QZJthueBA3a",
  "key31": "5CLTcr8iVxG2e9xqnTy3RuJPmanHskfrCujk133ub2YvFeYH9Qb4vTpd822vHEH5Ab1gVUyo4YNCHUKe3y96idEp"
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
