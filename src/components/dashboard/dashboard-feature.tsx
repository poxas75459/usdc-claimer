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
    "64UmZHQuJ1JefJBqrXveKbKf22haUjAGTN2V4WMPxADZNQxJeqmyi1khgumFcrSQ9Xj7jUJqNHvtsqBYNozvyWb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akmjt9qhPmZrQRBTE4M6CaWBqSvf9pGnXhUQ3L1FMnFU1fbnXSmUHNeW5aWwPhKexUGfX3ggUALE2hYdxLESPoa",
  "key1": "3jDe3zXDdTMe9MoeiNeMvVayhQz1VQjCLoBPg7h3ffbZdnbixa1iiTTiMuxAquGLP91QjvUGBaLxuRtvkFuExyAj",
  "key2": "4EsvEit6cUN4nzA3Ugnis1y34hf3sJ1WgcVCD5hc5GBNPFu4z4NRquJoAW2hVDJftP3kqXj6QreXZAsy59iaB4if",
  "key3": "3XLDpGXyyDRTvV6S2piq3PZLH4aVMMgGxfPEhRZix5G3BCWm9WCD7AAsk9nC3RF7bcG1mFB7LXbVasndc1ojeekN",
  "key4": "3GcmYQgqLmGWgypviFPu4jjzzunVFoXu5TzFxz8s66LqhdEvDz63m6PxM4BKxPLyWKo2m853UuLgCYhBJVyh9u68",
  "key5": "ZyYjhqQai4ng5yYDLya98yDbUsAYmZckC1wSptj3GRiKVTHv1ButKwJueG71AAhm2jA9x4gGsNvBG1CRmeHdh92",
  "key6": "2u8nqagsYrTkGDJBioiiaNRaX9x5uM7q5uwzHjhWJo4sVB2KghtcShfQmZciVwpTc2TQNdZVxMtNn3Y3kTEaN44A",
  "key7": "3bH47HDg2UV9z4Bf2XYQrahQjfNYe6fTGNbe1wU13aAWZrtJUf6QZKuiViHQ18ZTW8b6ZxiMDys4sLEoX6DBCf62",
  "key8": "4d6oVuuz3anTZZkMLGzf5SS7vrDznF3bmntf3XHkWWZDMHVkktXF7WwjhmrEsuj1d6T466mH16N9R4ac8X8mL1Qj",
  "key9": "3CRvJPRNwtWk1nW3SFN1k5q6RHE8jiuUYpoWPUNgCDjJXD7C6CErCeD25mCZPUwyRymbRQz2zg8AYxkHENrRH3jQ",
  "key10": "48kRZdyc1FhBVLAMp8rskR5WCJpWwXr5ArGfLnkTZgvwVzNdfb9ehfo2HVKFDWW83zUztWoCsmL2Pw8f7tXMQ4vy",
  "key11": "VoBEk6AT3ZrQ4WjxqVQUbb3szQMpb65NCS71a2ETsF33GyinXBao3UsBgGQ3MT6jFpAmGLdMVvwvd25xo413YRv",
  "key12": "2BLSFU1m9RBwiVHHPFyWbgAQKYZq9GKASjmXqfATPaYdrXFzc6uizBVvfkTEfVy2ww1YZn46FBqc5HT3ddfTkpdf",
  "key13": "2PUx1WGf6k1cqc35PDAHJdQrcGQzs1HsBCYnXTqHUqtknBFR3yemffHbb4k9Y7es7NP4NKpACmCheAAsBZSYK9fP",
  "key14": "4MYJPqSvhAZj48rgoPzicVxAf7yTiW6YHf2JDMnG7ebp7NDYEWhWnq7NPNrGzbrRE6HBr78mMrvTVmCkyUg1aYZq",
  "key15": "2vTTNa7CLPTGe6zeDfsqtbB7x9Yut6hNBwVN54CDkyW4oiZxZZ6s8WS1GC3EhTEMdZeT7nZxZXJGXeBtwdhy1UtU",
  "key16": "32qQfDo2cfiZEF4TdMbF5VkRECm5jmSber1rpaJbtP9yPeNGn8NDTbKU3UkUsuHkZh9FP4deVwauuwK1drmVmkhL",
  "key17": "4f6g6iqjE14fjcmGHz5M3EEjo46c2JFwtZjUuGcS14DM4XCKrs1tT5KWpprSEvF9dUKtCEfgvDN36qPPbaGdX7jb",
  "key18": "dhed4aNzFfkA2LDwWFU2wMNFQxFvoZWdLdLxxy6Y5BNVqnUJwGwG473S74Nnu2dZWK4DRa1sNcHTaUmPMGRGJ3H",
  "key19": "85FoshCB4QhkSLwHqGzLdf7ATmwpQbCFn1hYwieU8VKoEWdB4YDcxdJeKZ1WYnQfcEWMNfJoJrqqQMAKSHtxB4e",
  "key20": "7Ehddy8xJUz8eSxKN5FiNADrkSEbiehSrvXZLeZ58tydTPLLYVcbiAjXyo1NSBsMQZzQyR9REQHkv9FQr4zLk6S",
  "key21": "2fQbzJpTQGdRqcXiv9aZWYKTzau4mniKmDHwEMDVRwfxP3xnfzR9243iSMwCPsWGsYvq6uuNw4vHQDdzuQLrMDWv",
  "key22": "5zzcYHWifznHcTr3NAqc9gzWUszJh7xFfsEQSbnxi1P8pCadak32UeENXYLJtb6UKqxgFSfdwCupegKE347aX6wX",
  "key23": "3itjG3ikWx5MBVK876fTUhbahTFHv1SXRzu9UM9oUbnd2DSvaoPn7J4H7vHB8BiZudA5Eo1KRjbMYYLWRYqrWDc1",
  "key24": "5iQVXarHAMCAGJrzeHeScByrRwDfCvZCpAa3jwUDegvfMvMHqsLev2i5w1eZvvx1GcN6FbCPT3sFd55dASs3cseY",
  "key25": "2N425VaYm1JethwotW9ShpDX3oSvbYvA8gH3YjqFMEtKB13TKTDo36LcKR3stfJCMQKqXJmm5PbvUpfq8JPEoAaF",
  "key26": "28WyZaHQ15s3pe85uwr28dQFtVshxziBK924twxwxgKyDqDP1ViC7fpMaZmh8RgUrHFUH6btj1pCp6C8S1J5vNSH",
  "key27": "oSMrE3X14y4Bg97tqR9nVzZz5KPt7gRSvhb8rTcc1ohK3RYu8z4aN71N8oLgqdjyNCTqvu383BFBZakL6vspsGM",
  "key28": "4Z3j3RdQPZGN1kCNWqBghCZp2hR6Map1749q5Yyjz5Q9NRNGMoRSbAgWVe1d6Esm2fMTJyrYyxJ8aesm4oQGrpFX",
  "key29": "4LgmXeLzd5L5ngCpKxnzLpxaeEiNoR7tEMB5mq4VCN6HX85JhDLhSiA5wKUXDkjfTSmios6HFM1KAyQ7DMRAzgUs",
  "key30": "4AJaCzGnJ2Spsj5MGHBgaF9WhEpWWmPGLqFHbFgBHU1h6sN5tnKCkekY1n3dJpu2kZksmEPdkpZ6rBvGDjHYEUn3",
  "key31": "2iKuTw2oQhXqNaFdm7JSR4MJUuS8i9bTzvy5NvmaUanvj67cHscboixYSUXWPFCUDCC84pjugRr6uxB3Md8RtBAf",
  "key32": "wooxTRTKSPM2TJqJ9eK1v9F28tLBAoQtq52iq55GqGEnEB4SjBN3afB4eMXQVG8iUuSu3REi31TzBiL29CEJkEh",
  "key33": "5kAifpdKoVLNUXkQG4r4CtkWT2fSJK24xPZGztJhS8be4qJQcjnfqQb8qu7WX8v6vJ6kSDWN1jwcVYMTZHN1nThD",
  "key34": "4SgaNn7dz4FnZ3kxgysCPhfpWgJNBqR4M25brbvkBZZZU3UUeWHjcLN8342dcv11MUgppnNE1V9qqE23kinqBTpJ",
  "key35": "5fhx3b1aJBJ63UXeFDu2v5PqMZBM1TDBePpGzzRgSFfSEQUcZDGcGLX8bdWKm2JuPdaEUNjf95h3XupU3gbjp1r4",
  "key36": "5oJuChMn7oWaD6iucLBSXZd1gwrtZNT6keNNHSK1bTejMZemtzpzXw5ZRYCtuRH4rhUZxKY2WhxyimZz1tkTHz5X",
  "key37": "5WRH84gduSGLqLF4NzFtb6Y2vNpAxYWc9bexiAcWX6pDSWpPRYDTgW5UbGx9JHdwYzmqF8GSWSJQNM87wRLv69S1",
  "key38": "WaKTkQ5Cj4MS1u8BHifxxwFPxtGeHsCv9bcXo9kSeEGnbJ8pCqoNW6Qjb5o7SftnUB8XaeCH6UjFQQ57Fw6kyfc",
  "key39": "544VJnNLQxeRhWEHBNspyS5HEm6QsHE2RucoBb5Bmkxi3Pi25KD1efybbjg8hGxS5SWc3ZL4GHdE9ACdBYwDLKWh",
  "key40": "4zu8rq3Qfk1kCeSgJGQ8xoDXAfQpYYBXUHXaPtfZJUpbUjRPEr7DXdmLYynVda1yKsuDigU4K8ZGmxfSK2F4k9Gj"
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
