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
    "27WMpWmeMRBP1vuSmvKudLanmbJCBwoe1uXLUSDdjwGRytdERr3dHNAMifTRRjzZXyjJ1sbyMGkb7cQE3WmSKWLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r3kqusEF4qAoQYZubryJKpj7dxYLYfhaZxvDs96KwtvosiiYwzcBVfJiTGfdbaCNkpuoDfSBt53NuUySXMgno1U",
  "key1": "35BoXxfgBR3JxjkcDKeyxw1NHxHupUPinvuvLuGk9YrUbtXTPyArJHMCaj1t8zpyf5ESsmFFvUdAGo51sJuV4724",
  "key2": "ULFBbz1EM8aLyXffGbS9CxX3KhojL5CYkZWy7fGt3MMboi39uDJicPahkPpvSsmhbyyPdxeBqg7L4cTsKURrVvx",
  "key3": "5SbKG8nCdHhev8zLAUYyTa7dKNkaA6c3CfPYhv6qD1D23giPvmzxwF6drnsvzCjLbxyHsJ8W6RnjEdJbq5GT3BgD",
  "key4": "W25u4RzzXKpF8PtZenAMLQhAFYAHHNbTZQaGv7RP76b4d7ZVQWSZcV5zgjzWPocnJemdH3X7tkUPqzMdktGmxEd",
  "key5": "2VEDTekaxNgXhtLKUsCJv4iha99579i6f1oqkPNiCZ4xHE56R1PPqEjaLA4XmWFFMzbzecuP5ov6siTLWd19yjaX",
  "key6": "3P51UgAJxb55i2HS34int19nx8pwZDbj4aWuuKmGKrk1Jhvh5GMuat49QznPhZtPk5X2nD6uDeJMHdNU5ZnoB463",
  "key7": "48ZwtqZ1yxP8FrquuehRSqDeUXaWZzTA7TLLRviYHYJZrzt2KnnPMJsYNzHph5DUQBxpFN7uVAbiDwShK1gKDhhK",
  "key8": "3nB7jem55dXFGQUeQJ8qXXJpYr56gxxjeZHDGfBmAbhTa78Q3vnBmeD3W88FS49AB1e4sSPsPsaLXcugjLL1857z",
  "key9": "3SJvQ4DnW4DCSCSqj6EgMeWXNciEf6fSZ3K9RxqzvYZCoaPwwAD53dHY4xGqkekeDitHZGgdnwzHoTyHnCTnLQwQ",
  "key10": "5kHjokkzi7aoRN1dcvkAkKWS9dahhUL4pZNH7GdV5EDx8qExZcM4mm2dj6H8YusYvkQQ1TncsGF8QyuyTGevVdLx",
  "key11": "38PSxg4XwLU91vBkfW9NrFMcZGFkLqLFcMXRcz6Q4WuJ7LwwkP6jPQ2EBW6KkCF6rQUmjVVRHmVPVpMCydfH3Vnb",
  "key12": "4E9za9SgULajN1iJah8DP5vTb6AvtwMtwCeijGFjhe4BQDVmPWTz2YGSsBTaNKGxWGmL1XGwt3AqrvSeC2XYcWXJ",
  "key13": "2LpE5kTkG2bLdEjdqxjr5KAWmdvUcRUP6Xr5og49omsMNLNmp5Mt4uqEvNkqjAY2Xv1LEvdvT4gdji8yYPTND6CP",
  "key14": "3PjrkRScG9igZNvRDzT3TtrM9JeUAYhcVJDcQLBDb7H7gZ5TDL38Yj1hJGFQUBaGouJzMHtE5mhS3WgpAsvwetAV",
  "key15": "3Q8sHMvWDT9eYD3XkMyTQQttKvtiGsZuDptNeywo3SeH5rB12T673LMgmLp1ayHekLCnWcFdjXebJRMNJ8MGXmuh",
  "key16": "2e3swkCkD7fr7seKRfvebxxboxJ77Bz6GnEp88FFj7fypyVJ5zARe51icbjWxptCtzixmij4HtjmTrvC5VPmj8v5",
  "key17": "2KubzriZ5rdYjBR5w7jCB87x1dc3WohZHK1U2dXCQAXpcTj3Uu5SsuPxhZ2jfMfwQYkutvqDeGpxYJfhQP9D13Gx",
  "key18": "3jQGxcKBSKysMUWZwSY7jMJyuZ2jD9MRJnzECuUXaCxK51aWzAJimWS1vPTXs3o4kTG96EPxqbT345o6LcHwBZYT",
  "key19": "4z93zoRit8b77sRXs3ktyHr96mmhC1Eh13jx4BFz48UoC9gFsVM3MockwfdrY75f3g8FkiXnWXB8NBts1qUrSrSF",
  "key20": "LbjZCNCUBQFp6ALw8ayP3VYWCUU8kgZfHnBLzLJmLV3tVN96VY4JA7b1QSBGZNtWLjiPEotdautp2b4DxteDi8M",
  "key21": "2XU2ifLNZS22W5mRyPED4LrzudMiju9XoAgbGYYS6ZWUBQggR6xtq9nm8htoPexqDa2xwhGrqJkuFCCdAB5WmaxC",
  "key22": "625AiBy36keEL81LqzvF3oqfp1ADoR2ojHChmRNg9xBum46HfvL9eRYFTf5f1uPqiETxfGpQeV2KuTd2Aqbbq57m",
  "key23": "2Tg4y2PRoNnVdrD79GwXBWZMmMQpoAgqJenhxWcYnGnaaREDLik2tereh8WY3wwfHNSbQ1H79TfMn8VYyTxMtjdW",
  "key24": "4YB9V7go5aPELBffcosJN73WZpDq8PuHXUz5iR7cDs2quGz4QVJrUZrbsPdJgmnzT4qfsGzmsEsjQEKvcM4GLVHt",
  "key25": "2R24MjquhhjkEwLXHU6gFGjBdPhRT6N7g6uuEU3RWoNVudDHbv7M1Mgay6FrfuT6VdRad817WFZDwJuGsZkqV6uQ",
  "key26": "5d25BJoADvbpPL9LCggTg57CbuCczdVq1vd9ZJfyDqeXnddqdyCxKqfbLruTHcL5DppDa4vu4JpVbt2Dv9n7Kg4g",
  "key27": "KA2Zk2awpNV2zRwchPNNttWvhJvj4S9GbyunyKYJneDzGvUfu7za4qMzhnGNLp4E6acQT5Pqs4boMBDz3SbDXx6",
  "key28": "xeWYBrsVh5JHYaZ6m62BoeEjfpAwFkyzG73ptWBJyb4eyUmsfMZMvCQ1v7LciFHmxpqD9iJKGqcgHeUUVfse4wY",
  "key29": "45eSKHa4bV8ZQEovJXSCnNTJ47FehbegjBhueVZ9Yyc8zhrC8ZZgkfrwCFhDCRVafWnNLJboHPqe8CBApHUfqCBq",
  "key30": "3ny7okgnh6K9Lu36g9aSDVno3Vq4HmjUFkb7u8E9mm6k5q2W8DvHrm1sdeRawnS1nJ2MRiwnafVcSYc187noBfGD",
  "key31": "2EWTU2uFjgdjxvqAhbkUSU6KB9EmoAPkBR8gYt58hGB37meaXSXZcn9W9f9tdrtMtLWnKBHwCL5wXqSLWvwG6jrA",
  "key32": "1gdLHr9UeXXq2tCBd6RTGmAxNWSXa9LZGEN6P5PS5HU81T5JXDjpCg9uSM144ER4XsANN3M7vpWDntUejy3znkB",
  "key33": "4eFSuBRobN5Z22bjZzB6e7QVBprhCDbvVC4YoHxrEpnX9pyanQFpDRH8PPDUZuY1DMFUk9MRyLp67WZ9XTTThWJU",
  "key34": "2qK9NVqZeGrxko58TBMN2ML4gcNyu7mJ4SLNkMto3M5rHHrHFHbLXh6mZ4dAv3TgKsHnb9dyYca4diN9c9soLJKj",
  "key35": "3kA7GGLhz5phTjYcpvgaocq9PgtRsf2ggFwxK3DFCuMfrrpyGdC3LTbiMP4mwjSu37rSc83S5g4HtC3Qvcpps1ZG",
  "key36": "4Y5CakhHjiSdmA8Zqa1Q8UNGtPhbmcYTDJzETawzzYMqAM7xFy4dXsFafBEivMuhvhFAfpjNr56vxhtv7PdgXYWz",
  "key37": "3jt8VK2RBXHTXDngAYnJUTN12v6gC7ki1U59o2x6NGsQuYQNYjSgqoc6hNmZUo3d1kCfNJq4veNFu6NiVwdauvWV",
  "key38": "4sh8n9rLs4HSRBNoSDRS6eGsSG1EQzBdXCsa6RT7ph9jakn6ZU8Si9ZkPsDYWpmHhvyUqeK5BFWYb2dFTF9jAjPW",
  "key39": "3oC2NRUTnC9D1Y2K6AtoRP7Vz4GWQPNBRpeZiexmioX7E4JVqeVbTUEKqLJTJiUKTTBoxvcCRKxzPhc7chkbcSoK",
  "key40": "4hGW5XYDZNQH31vFBdRm35iW4RzStaPVtAnEkpiA5E57Kv8FQVQsbMj5vcYNy7rS1ZsSiJnJ6nDgBX5CMGDqNR8",
  "key41": "37GFMYusQDGyLuxokkBYnwZmoJTNkZ877D5BRgfxsJBLzUkDm1s8XK2xT67gGAyBYkK1Vb31BM9QwQw1sH2xijna",
  "key42": "3rtV1SSpowHkYokMYYd3SXoFw3Vkz5ZzvqnZmMBqj7ZXmvgaVJs5rkGspgJEamwVRh3UUta1XKNxA7Sky4SFJfWi",
  "key43": "5CQddBwHjnGECijxxmehruAE6UY4TQxPvZgYGeKhPZfGv6iSkMnJLUrma5FeswsReaDUxCGdC46XB9ME6JdKb4zo"
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
