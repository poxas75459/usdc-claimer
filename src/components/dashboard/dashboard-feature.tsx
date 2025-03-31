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
    "4UwJXXvjND25qdgpAinb23hrY5twtJPkNGWzxb2vhKeokGTC7VNmTHS5UAMJH9apT3eGjm2bZ4nMHoTXbpixw8kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWrYWVn833kwhZNdArJqsqSaG6t5Ym164Cq6d6CaFpEx4wzRLZcu1Hmo1xf1NrYoJbTRm1MmPZXCRFTsiYKSgqT",
  "key1": "5DUJoEW9mxqTKzU9jYpH3VCCmT34UZTi5pW8SMXwgaXgd1CWdmTzj2yEopD7VeMhGSnU5r8S9YhnJSZyqWtRYtke",
  "key2": "2ebzCrwBgSkNqrzot2QYZaL2Cf3ywp4hSpFVyQXqUYRXDLCZNkS9c2pjpPVo3Wwc6QoSNJgAit1Ds4ANp6FU5HYg",
  "key3": "4UyQB8TjmeEknQJZPkqcHv6X4gJvtYzUCsRQELVSXE1uv4j95FsH5MksvNsZZDM5x4o6uEJ5VgaWsjdQiBdLR3DY",
  "key4": "4ESJKHymfDo3sarG42bSEBQeLyFsuiPBD3BArA4HP3AA5h9GjvUE6vXpEMbNrSm4ot44Vd7NpWa8XwWy9oB6hftk",
  "key5": "XqwkYWZNbx9yJkU9xkkbH46j4ETzgAhAKhYALJkX4dKPaiGag6e2bg93kQmgBqQhfh59UKQ2jUBeZGy8i23cymo",
  "key6": "23JXPmL31VtUWj6UY2YtoMwThjoJa7M6bymNrPwXJTB5H9qsr3EV3mG98S46UReskbLiUF7qPBnnKhoWkPfiBQzu",
  "key7": "5FrQfbLxaX6nK5eoQRUjDnV2TxWDsYyuyrHZ93LDfKagJXBJAqy6b7P82xXUW1bAJkNZLSD6KBXRPNjjkkNRBr2Q",
  "key8": "5ApBcVKtrvXj8W5gqybipFCafAad3sULV8hzJKrCxHgY7Zx4GAzNg7MUNLN78gDmMEZpDUi8CXztv2eLet2yGxuP",
  "key9": "4vPpm8rmdrgfyM6Cem6JKjrtx9AhatPARm13netUwUAA5X4g45RmWtAYQQku798f9wuaeiU6iFGwJfzBpqrMr8EE",
  "key10": "3cbXhzsH9Q3HAtv838XaNE5PwmbjVsocCyvHPZpnGYg9MymmtThkyDeLEpjaspDjaZUqRd96BWyoJsmtjkK5wu3s",
  "key11": "4xVyEcpFKND36AsVRUXoqFe84v9bwijrGm2R7TPGT9Jsc1g9kgyX3iDX8zm7EFTvaRg4T7U986qfTGo4enAQpBcG",
  "key12": "3pz7qkejnQsaA419ayPZ3uKCBj3rZpPQuTYhLpUucES7qSLEeK5sJ7wdpgjTJPkrj4ars7Qtvw1TYVbDY6skmhsz",
  "key13": "3YPrtkzc6HA89hzx7FkZ1aJo9fbKtrRV64tnNFF241FjXNeY7zTmvf5z1k1sLGt1aYjCW94TSgjyNi5myYZvrYjC",
  "key14": "2s36vmN9iFsWio7AnDyBqmjesY6atNnaG5SWaKbSYQdjSCdxaDBqEiW6zNZWNNAHHQH2yZzEoTKdcC1xDs2EejzK",
  "key15": "HpEAKQErEcZvYyXePhYnbXtFejegjbP1xLJp8fA31ENrKtwcMnvgyLKGzCUo9n21vt66J3QWLMHmJRFuy6GgJt8",
  "key16": "SuQQXcNEUoSUgEh8GjjqNG3tFC6tvs3SjQvo5PD98mAyY7NJvtgEoY2r9fBjndY9rT8Jok9zCdP5sa76vmmFeBK",
  "key17": "3gatHyD9qwFrhCZ1jp199fwpnPFUjxGne2epwf7EVqd6turMzZbREHUYgpP8YFDx9nTSA6VzfkMX8AghbHR4E4Wk",
  "key18": "3YMZkEggEvmdLWAr31AapQohWnScPWYCEVJ7Xe3u6J1Mk1MuCQnzsfD1f7Q4TSBksw6UU91zPrLqX9mhSGSfweiH",
  "key19": "5aiWwMgBQyWLWjYkk2M8YZ6czztQPcCyK7Gak28rLRNR2D9Ax5mNAYGWt7FKJy1TxuFAPSkwqTvd8QNKViW5EjRG",
  "key20": "23nq9swKAEAtHoCSnjWPH1bv6h3WK2KPdSynUrNHMyUsZWC6sMD8pphqGmkHvkqbBtvbrkCxCPSiwTJBUPUvSXU6",
  "key21": "FcGtDzx5sxUtYyPEz1195eraNGAp5YE3xZMrjC3m7K9sbhRGfoeMxrxZ3jav2sKiYtmRuFLXY87N52Zj9UdkoyA",
  "key22": "4nodBfpGx4H7e61exKnW2ncRMYCHk4FgvnBe6GQjK5kVTm3kt69gQ9cN245DHGoaQcCzXirYuJmJZbebwf3B4cXu",
  "key23": "3X54wiA4DMwW6mPs1RGy7gWuid9XJ83PvdLV1THVMjsGFvdCjfYRwtRgD7sv4Wb6jdz9fLW9WaWT8ngrb61vaNDt",
  "key24": "4z8iT7LdnU88pd4TLAHcBFhhLf45ptBURkzoNxhheLgd8EqrBmNCRgV9fLowiaGqWK1EKiD9Huz6yWHSMZAFT8W6",
  "key25": "2GwDp2FNXVMZMeSntmYTHpmY4FSdk5gxrSqVbdT4rXKV5GhzAxx6rUYV7JJGnbvFJv2byakgckHaBLxiFYiaUBYF",
  "key26": "5Ph1da96PCtckc743bTCdCw5yyCTiMcAAR874SX5w7R7rJfy8Whiy7o1XafbKHGcKVngfgL8KozRzA9APHDeY3M7",
  "key27": "maYUCxsLXyTrQbTPoehqhpgm8WfrwMD8ccq75ahQTmzF9DfzocBVSRzhVt6CynDq63n7HzQni9p87mbYqxR2SgQ",
  "key28": "3zZegJPjt9WWNGVHLKrVLxoMHTUTb7jjhP3cZ9DWNEnASjxVWgMqTnAraNtubfk321DgwcDrAsqg4MwC3f9kgGVm",
  "key29": "5TTyzSgFbhu49nmFAkSAExZiQ5FbExzF6ykNJu5Fig1HxigF5TvyghV43Tafitmpy4KKgDNQP6Mj56m91sxDbAan",
  "key30": "3vFogKo3biuHqwzxeoMpwbwZjoftaHtLY5fa4BSaQFYgf1tqQqhW44afkCC7gyWRLfYjQtQ3rVSV1QFsjYJZML5M",
  "key31": "4BXG6zbBz7z4CvLqfNoqjsYG5MF6bhNgTYULWfr7LNvc6bYEKFXjmdLopPTqjNwztaJfoqdf91CAEf5YJ6igoByw",
  "key32": "2oVFYZmherASpx2bo7XsxMm5EeZgdACyfeqP9LzmrybVXCWi64MJtd2YPdRB9AzpfZFf1L4TTUBq6VRMBeGbz7Pw"
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
