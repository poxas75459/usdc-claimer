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
    "5pKHu4nXzeS2S4YyHyJiMX5BSg42eTztiAn9Zsjgt6Sy7SqVrVRaSCV4DEPHCsNF4zF3hiFTi7seaDBdUzkHZ7uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zf6dzfNqVWTzyHrvzm5RGWefTYW2Bm5z2qK6EyjyLBFb12KLCTMCYvauCSw1LPSaLqa2fypwDch7swx83wsbtep",
  "key1": "3DEkkQ2ZjCp7muCxmPxeDXwqfQbJ6n39NFkS1ajXy8jDssPvyvYxWPKfsVvm8UqZ9yC7YVpmmaBzHuKjoSvZrcpA",
  "key2": "52AbLnERNDXyYPH3tjeN9sTHKtXg7atAiYPhPEwMotfKchRRF91Fct7eCoxHV7GMisjV443MbdLR6xczpds6Rr3J",
  "key3": "53JD6FkF8nA5MQmciPnNZv9uuftZKbBRvppwZJovfKCxpeySJuDvEwPqhiAVDCUYGNxmz6XyVTiWCfaa3qiq895G",
  "key4": "61ByqXocKdbRjXSZXpA8KSepd5P2H9Vsum2PJQUkV51RgFxnEqRAmLxzREkGgbuGHqxYX85YQupvF9h3NhxibGNk",
  "key5": "3rjCKidhDrjTD4Qov343eGtBohnrySEy1G5ZfNhqaZCkvnFX2n2KNKr2AqEMKDdk5DdQ3Fw3HTXK6peGo38CTUv5",
  "key6": "2CAC8YaLWBkztUXj9oq3HAa9LncHKTzRx6h1j2cDkynjqXY53tVzEbDy6Z9QVQCVvJ8uBBFpveyxEzcNkNQ8hTd2",
  "key7": "4MYS6tjzB9e6cB2qsCQJu7cBaF5xVHuiwQsjkricw6e4pWDf3Q8yDSmUSgHazZCtqFTjJLNT8FNpXqeztBmPAVRX",
  "key8": "3K6cCX3qdKDmCJjUEbyvhpMR8XaVzLpkaMrH1Rbq8ByRNmwLMYxpX95aA2GSy8bxSettLc7tFQZvy8mRdoS9f3Jx",
  "key9": "2tKzYG5S962V559xdBzNj5q6iW8GH1KHqv34nCuRV5H8q2RjCKZaychtZHVo15ywZym9FD9PEMDCK7gPVHpkmYtn",
  "key10": "byjm89ZYdJ5KwxEpS7bdSwLkgNnwsBhQqLtWwidbavUfhy4xJQqHSE7rVyg8BiHibHSGoEnU4cBdHeyZCwyC9tN",
  "key11": "2ijb2EsAwo3ChBtj3RCUStz4rHsKcnw7PV9KcDLCCGq6nGC2Dpa2QzXoNZbsXMzhZbTb1uvb26bcByYSFXcPQ6Wx",
  "key12": "4thy76AwmywSq1y5QVNAgHGwmgn7zMyfxGobCfttMZQ3TAet81YBfaZC8Hcagu3ApbmYLoFDxGj8dvVYPYB2UL3e",
  "key13": "yd3uXEhbWjYYrK2TeQkPFooUJG71BqeVGE6LLES26AcDCND9zysQo5uvUGdSRJqZHzoFCgboZmEjywjTL2F125A",
  "key14": "3WYyHnaA5Q7Me8sd3cpf1x3gmELHSvfw874XCdgoiNT9LkAxzXwZmu27EufVDGpedBr5WHUyd6NqaxBa3siMWpja",
  "key15": "4nCitofHsV4ZYWkvx2cFFoxeJC5DcRPeixJkZWRWvrQoXKeitcSFRydY195BezuaNX3odpbxi7Cw4tqeEjt2JsWv",
  "key16": "2TpbsWpF82C3MqLHrVxHcgjRdJ1pBQZ2QkuuvpcZx48Afrq2WqeNnpMKEGGt1goXvTQ4fEDH17QrpyL7xFfBLEnG",
  "key17": "47NwkfNL8LgJug5iFKrnj1675XHgFRE4wUDTURKEeqs74V2tB3Do9wtG63SVrtLGE28HaYyBrXTCb6dgq9qEBYkD",
  "key18": "3YWiQ4dA3DcxQVEagchASfo21ppQzfo9ZToa9MRwjcNRp1PK4d4nSzwUgv2akaMSEwtK9EsSdaCHk7MFX8US9uDw",
  "key19": "3HWiSh9nWVSSNWyqp3AEmeqZ8P5CAQn63T43RmYS5NKGrEf9GezgDiAATrvSJY8T5vd1NsykXweXsBMDX3F4Ckku",
  "key20": "62mQ1MiBBqZEXsitvhGxqpKXW9qHhP3Eu4VehsvCwvaKEfytuxPY9cL7qms7YPWsPkLC2C5D2WEFKQqRy1sjRuNu",
  "key21": "4rwKPqj3Ez7kXfkLv4dioqJQMhejMUfv58wuJVX2qCEZzRLtqr8gnCYBmxPRn3JdiuNZgfdG6DajQb46PBbwN2re",
  "key22": "4Mov2bCKucHU32NgYjJpgv81JUFguXGk7Gx8rgKADLyXw26dzG4MGNTLtPgj2JmHnFeWR3euv8nt2UdFQjUBUjXS",
  "key23": "3kqDHSAvpjTELbCSajur2VAEjp2LcATwHpURfedHJxNm5wGS7XCNQe5d4bkC4HckekQhJroLKUuT1dNM7jqpzXG",
  "key24": "5CymZhNYgjotMsZ38PUsZPG1dcx7my59xXSffhRraaor2wgeAGXSf6tLwhdhDzaDbDnX1pUhTAo9KubXHCzjyCgL",
  "key25": "Sy94ySkBsE7jCPWkJfU6TKRxAtRJ4SCYZajqngg7dcHSKtbKzxjTgWuvoT3tkeq4pUkVYn1GCyvZ2mPhMvegEbK",
  "key26": "4S7p8fi5MfrgVQuc6BQp1brj8vBVGWUSzd83j98LChcbBp878KyHJErcF3zGqyiPtfpf73FBuvQiybGDbYB6KBF8",
  "key27": "j3V6AxBeRom1nfB88m2Gp11B4VF2iujtwj3Xi12cwovGShQBCaJdTdUv4yYs9Gzdhaihp4oHzq46SxvktcVvXKN",
  "key28": "4vUYi1ZW4nnz7YpQMLa1P9oY2BWuEUaeox2LqS71jw5qGxnqGtbQkR24RWrHfhc1ePmyaHm2xVtKtTMEcszeWzAk",
  "key29": "4CSrTUGKmk9r8pYyXXW1tob98t2fPHTdskUZmAkSwMvEdbyWakVc1Ay8wS7bEhncJRzQMcXxLVEsd9xPz9fSTydc",
  "key30": "51RKWLqrsgAo1SNDWLegfbAVr7Gx6thQin12NV2qNdx8xNaCgBSkuc9SSHi5ubhVngryvAy5DjTC7AtNzMzKZ6oC",
  "key31": "3aJfHkVFG1UxLQ6Fz3JHWjP2kipfDn9MBeuhmQtTxVtg9Pkv4QeJqbRSAqnLN4BZ3FrZpi6TZ3xf7zwSDsidiDpC",
  "key32": "2aNw3MgyZjGUjM6dPCuZfaHafhqHAsUC4oQjKdKVXjsN83ArTgkaHJz1aawH7fs6xuNEpvGH9F21nwCg9aimyAv8",
  "key33": "ikdrGW2GyKTSNtFPB2BSMP5uXsWM7KujzMYYCgh6EBTr1asymv7u6kYp4ywoRdHSc5W7aqZANHK37jaWowT8YpX",
  "key34": "5vTUsy9beCv8WiqQJ3rAMerLTKqBf6ZX4SEgkkgH2wGfj2QQBnwQucAKbWtMjtf9xZneHhqWY1FYE41JSjLRE2sx",
  "key35": "33wmAtkFtgkuSPV7XMoBCd7p2QonGMe9NAcwteKDYvVE3xqy8FCgZ3mMFKhJrYFUfpu2DMbYFFtM7RLhoddygPJi",
  "key36": "3tcERmeeDANPSodkFwKpYuoRFiqG871Z7MzUNYq2op5FeBuMstcp3PFaW9DnD29uifUUdGg6bhy2yNM7xUR2uvzL",
  "key37": "Xx3kKew2sjSaE2HhgYGrBJSaAQeT4PZKHaD8ZYDHZb4rMruLjqR7HdQaKHcjNukPWZF7x9md95wbMrmvh1kKeWa"
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
