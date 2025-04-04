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
    "aBosBegmURYZH72XDVDr8rJvkrRvT9Sm5aicqeuQHgVLpbmhayy89aoDoMBfeXjR3GpWSZBDZ2fKE3ZVoVEnSeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHNWHuMfyKbSNMN2kmP9HZPjyTXHj2FxUkYowBLYeX3yTHu2JGbvayWxWbxDwT9DvQj1Pmm7yW9jDF9ghK7EXaH",
  "key1": "P8hHjee9PRaGag1ETReVcznaiuzwFoKvke6LBZ8hNF3eXZnuaMK81VSBwuR1KyoxL7ut2deQJdxRhBnDpHrPsmR",
  "key2": "2eGTfFyad9Utu8HVSQSfAbGJqAmjBCQtCujxnKUu2wjNTnKNNozZvZnCS72fYhNiY7JB7L7VYnfbpCc5bhxtF2yn",
  "key3": "B5Pywx4R2hSdj5VxQB9N5z6zFHa5j4vbtZg75tqWoTEH2vsai7C6x2NRe7LqMqG9VZx6NfFyiAvjwqn78tMucfZ",
  "key4": "2jpyrsDNT8os1AnfxZe4VTj45VakcmUfiYJ5qhrKiNmUgNZ2z3yXebjWQ1EPDrQ1CmDSqnqmhudF4WwTmyw9Stm",
  "key5": "TNHtvAPAJ6f1QPmDmsTuwEAj8uJX7BSYoN5surAYqG67bSLMv1p2Ut2S4BffdF8mjD6aLbTZuZspDFtQ3qZaNXw",
  "key6": "4zGm3x5JFttLbsE29e7hjKfkTh5pW8wTkjsPmy76MK2Jm2k6qGYUwrt4zaKiemBJXHbZeis9PCSb1csFzWDk8NwF",
  "key7": "4FZqYy9yTCjzn6zUsDMaBQYZdsL7UJ8FxqxSthVmkeURrekmmr2htn34GUZSGtGDJWph82pDfv5YiisHCgp92NR6",
  "key8": "3BYCjguze6prXSJniEXEaKYCeFP8G76Wm5jYHRH5Q5Vp9M77zbMRWnBwNfVVndrZYdC8SqtnXfAkXu62k4rXXa7Q",
  "key9": "4hUfg4u7JnymazYTv2Zn2hC53LtzVTTUrm8YtofRqupc2ktn1pcKix54HpqZQRAVPhnRDwcqAmkHsdUDm9JRGg2h",
  "key10": "3UDvV39acTKJsub8UrudtoSCMq5Ue9771fudSSaFQasSZeavjxdf41wLYW48wCJZwdH9jwNKXdhj7JVZyq5rHr3D",
  "key11": "62L3vnfyBY3AgvAg8jxibUqrTQ6JWbiKMMNNNj2br5WYwyAtey52FMCUtrmZexKuntSgB2Mx7YH5AiM69txzyP2p",
  "key12": "58EZuwzL7QQqMkKrLQU7ode72yXA4moj2iWoL2YLFEBEia42g8ntSrCMjZpWhWytPhvSHRyTbBXJAGesyWQHi6Bn",
  "key13": "5Muck2dAmzAZXdDSWmLZsoLEX1b4hxNUXj16K1AS8VPqHmhSGf6wmYpp17voD8PTk68nuT3Sp4ZmF1UJZJWfTbP4",
  "key14": "3incztQinCedQWxFVwvh6g9zPNbVD671t3LsaAy2zx8cq5NhECadgvaMESWqhUyFi8RE2dMS7apc69Db7LyfVxUh",
  "key15": "CUUVjX1o9ES5KMU4mRqZ4HKjd6Eqiy2NLJc4R93UcmxgRoWgoCrEVXnfGLYCwjZ4PFW3nqbRNJ8RfZSs4zrZHKb",
  "key16": "4UoorxvP2yWoz5u967Cad5umeHdjkTXVqLKJe3qo7A1o3yoNt5FCcSGrHH9Mrs8tso2pwHbT1fPnFLw8u1VeV7ao",
  "key17": "hfjrvVuzebJjbHZJSTNbs5ZSFF92UWiNsZN5hQ9KEY1L6j1LSTg3axNiGeQ8AhNiasqdq4i8pUF7BBJxpuQiznd",
  "key18": "4zSW9r5xL3p2P4Q73eNEQHfmxWeGxsfZ9rcADpnnxVAbqxhjhiRWjKvm6QhKMa2ExubrUV1kZBCtvmAWBPzWgZ5c",
  "key19": "4UcZ3EaM4LHhf7kxkS6M13S9Yk18UmmENTeVvUnngHF7vMULBnMd1Su7vGgHKbitCy724xNfuTwvhXKM7dWnygjZ",
  "key20": "5zTnC4Ub6gvESxJLjm4hCRcc95L9nzjDJNtLo8giHpkLviA4RELS8Q73Higx7F3TZEev1NCUydpbJoX5n48ivmYf",
  "key21": "2ZpoC86J8mTcmdyPHYa8TLFJkSGzUakoxefWEzqFh5xT3JoRbS1TGu3jNbcWtqzTTLhQkwHhCPC5B8jwWPpNGgHT",
  "key22": "5YZWPHxvMz4zxHUHL8eHoxFJAX1x2QExATViUy9nDSAcQFHJ6ZfC3vcDFPJnXaKvPC6jgKwJZoCoaK334Nr44H3F",
  "key23": "25is1HmZZKg4PaBfpngStvQdxPDQDfDnz1CENWEr5r9Eb8oihpEGD9Pw4EA9eWtM6ehrR2VfyvroeoAvzXcaT7NG",
  "key24": "jEgCRkweAvjWaZp1K7GeXVu8m1Hgcym1ZvMZyno8p7o7k4zTJLn8MH8xgGkkdKg52qdDUL8wmBXFfHVHWdPNDKb",
  "key25": "4sPgYp9py9KqRpqEpMZTLSrdjC9j7kJVbCUXMSbuvFynGvMaJGKmohEpLm9PqGdd4yCS11hAiRRrRCcX9PKLsA5E",
  "key26": "3kGRWGB5xta3AwwuY4BMiWQwmg6ZcUTn359S4TbPRW8d8JozdpEGwo1oqSukbTwRayffFcTbPrNShTPjVLhxeA5Z",
  "key27": "5ibohyj9K5Lrxg56RXuaUmFPQUMcEsf6PYLxYjJ3Rk7NESdXpsXucGkRcbmgH1yT586C2dRKAo82JVXCz8gKJZB1",
  "key28": "jWLZWD7VywndHrhcYkrdypmGxXYGqJTUZ4Yv2dT9LcCtunUQSazFQBk99sU9Kd9ge3BGzgXeAaTGkDwMnfCoqMG",
  "key29": "2XhK5SSGMJpb5NCH3mgpvaLJn9B6MoxXedGDUDCAuQM4oWoL6kPNgYT91McePvCyyED5Mg3sg2jki97ruNddr3QH",
  "key30": "3zmkw8ZimtUoCXF9rsuqd8ankafoiJfzPRe166ekad1vqTZfRz6o8J293PpPU7y5c1H5knN3hjrNTTJggyeh3M1Y",
  "key31": "3hnGB7yhXrXoz871k1VzVyJipmBEfdpPTGyTZMxW6qViQ4qZ43dQjiW4i34TBoqKY1H4RjrY4UMwk6ZHXF4vewrL"
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
