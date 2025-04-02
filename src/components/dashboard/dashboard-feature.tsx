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
    "vLymtMumNy3pkXkZxDH5GkPrMGfmkeK5HBM4sr5wgDnZiepeAFJRoYVDtCtb7zoeQqERLGVqcuZCi2JQ5M4R3WZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v4Mz3sFeNXkSf5en6AW7QS7BpLryGMBExDuQqe4UFnqapzdyWvPYQ21i9858MCd415eZ8jrhGcsQ2KaDJ8Pxoih",
  "key1": "4Cz5v25bP7cLpCA2Q6WdSEaWgnK7UEjS9rrBN2NpfeTUkASH8JuMqCFjEEMZwn1r65ajzuw7CoFGLYth2SmMbrGY",
  "key2": "3mdA9QKx8jTkxUyrQ29kqK4vjwqK5qmR5JDZMVz2zguPMd9TaSqqWiW7ZhWy79XQwT5mXsWgiwgAeAqLgzJboRAT",
  "key3": "3fFAGt7UptTnBGvSrPEMr3UTPU8g1w8RkqeXhMchsjtMKaUaXVVVhYmHBG9QKXDPWgExsD9Ryc1j86ocWTcU6P4b",
  "key4": "4N9r13bfuzKTro38qo5gBhxcbegpr3NW4ajX2ayDKnXBwvaLfqCnfhFa37DBS4uLMjxieBe4XVqdbvQNwm3ep2zu",
  "key5": "4uMW5FMrLMKhhXPmid2JUQpWtD6vcoR6yPUV6UWq7jmecqJmxWh26gXm4dF3tG3h1Yw4ZBjY22CWErAZNA86arny",
  "key6": "4WXHtyKVqrKyWRdDDPoUhKRkG7zZh1JiSbe5E37Ky49wZbnUxjZ1qr2eVybGWPtYTMrG6pCRbdH8y1gb5sZWUHCH",
  "key7": "zUvPbXfxyf7EvLJX5FpHjk3jGgWMSVtjvTBp2aVeFrSTfkbTe8JHLcFVvQ1Pzsy3tLucMHNJqzybuaKgoSxx1vt",
  "key8": "u4GK7fNfpQoQvLX78dE448L8pAeWvWNjQLHFXjqujF1ZXVeeYXWajDyYdFmnzCsQmTAVY4t4dGsLm5M8PBEVzm4",
  "key9": "2upS5AhTYE31uqHu4nFPm1yUCTtzAACK1SYyMmK7ZUKqNVjty9WTygP9pNngPaAiGewoetwxhjvpGW6mGY7i4NTB",
  "key10": "4df6XNvXtwsxCViLdGUNwQ1fTPPZ5SCyMoQYXLeaKiyDcdG7pNRZpgWdSDu7WkqutAM4ZAwGU29t5HxTdbWk4U1F",
  "key11": "LB7eZf3nrTHR8LXDdM6YTYj9R74Y8Md7TRAA5i6WK7S519CbGBgZgCPrQ9QXjpjBgFJFRgKzAiBF47qwJtKmdL6",
  "key12": "5BF2Yw9n9YrY1pfrZwszLUxawWiuZpXfrpvWQucRZcVUvgtVxDPDPNNit3vok5R9MSZYZqc4tAskLtTST1z4h3bD",
  "key13": "24Xv8CCMeHmoC9rScZRN4Zv55fjxtzv3p6FDjMvccycM6SVQjjG6M73TAxcLywpSUwE1tD1DZZKX9qX8GaLqn4d6",
  "key14": "5KSic9PbEQEjMhnJ1GypWZs95vDsEKQhi6v2LFJ1nUBhp4Fift4v98Qz51VNeuKWJ43kWihm1eKau4tuvPrJbVjY",
  "key15": "2qvyYd9dhTKMirzmV2597AknoDDudGn5WuBdYD1h3bvHbNu6NimoaaEuXiG2krHhAgSy8pq4h4PBwS3h3KpkuqFB",
  "key16": "2vEn2oN9yqf4Z2AKtuAte4Gu6h5bQEgF5pTJd3sju2yRC9B9bEQSekg8BL5jjVh1CbnjG8YEkrttKrDB9KwiuyGt",
  "key17": "2YXeKTchNMib8zbBGrPNuHS6cZwhzFFeceE74Vj2vyoLpsuaKb4HyS1PRs5cyTd1t8Z7brL8mhzfrtGw6LX8kjbJ",
  "key18": "26kfdv4xGcUiwMMZ3H9rNXLr7qRWejme9ortrHswmYkgsbiiMKMPT1PZ4B4jXu4GjavV7B6vxRoDLccHsUbW3axb",
  "key19": "5J7wnuaEnju6iMep4hhJhhsgzgmLoca2faTLi4AovaUsDqGzpt4G26EtnQbYrqR4LUdyp6KxUvcXfVRZRFTCoHUU",
  "key20": "2G567phMcjahXFwxhkpA4rf3wsWJYHMaZkcR1Fq56vKWfAGwkVGe3kDqyJqqTU5yBXGCP4FsCRjeNcdLWFv3ATQA",
  "key21": "3jBaLxH4DbvJsfDRKczXXTjkuKJi3DKBWnhSrqKLF63aruMFVrafZanVgHwP8X5g9TWSJkYDMfYf71fzTg1hsfWt",
  "key22": "ekj58oqNE9ay9TiPUSLbRQzGbLSLZ7LvuGJPoYN9C1H5gSvGyGy1kwZKAuYq9gq8akzxj8jm493JUo1kzhmnHQX",
  "key23": "eNxGsnptcJ83wdGpm4ubx4PjDB9j2UGHqjDoxwTfS7q2RvdGv2Pxybhj3GzEU7uFVMD85z6UXYAFvn6UM7NpjQ7",
  "key24": "uWthMfAgfmeTXk4PKHVUhk3RqFNaW3QCQa7bxXmPubMbxyADwjNisaAmVYfi3ZnGwg7XSchs6Tc164R6u4GHFJe",
  "key25": "55juob35hFH8qc8iP4xYZczHo4Trs37FM8ECGauQFp3LvoY3mCpAqniD6nfgXFds4UhdVQ9ft5FW12WvayKMT5b1",
  "key26": "3mg1hm3NitbutshtcCHZXfP9JJ6vnRMyvhfd9fCjHnedC2L1Z3jV2bHudf9CmMrFjT24dGRxnSxDPj9A7JDXGtPx",
  "key27": "3jCAP2C5ea56xpuhLRsAYmuMJqe1FyU1jCgtn7pT5tEbnFeA8Dryt9ZdK6i5DnLxTRGG13PYy8iqyiK2f4e91bdP",
  "key28": "uy2WCCS1tP2LsWfsVAcEkY8risKTHjb3cqdrnVjrGEZ6jrdGxybEbeTtFXy4c5yv1BL2bvddhSqcZnaAfJ3EjSc",
  "key29": "4wRSQFBXsCtAp9Y3oUbK7sH44G4WUkDwUjvWkkJkfrG2g5GyCtkyAQSJ2dUHjy86ymwRSrRiNEDe8LMe9mvt7Af1",
  "key30": "5sUD653mv9xgAMHfmVrZVsgGLmgBAGERUxZGJu73j83pioV4xri2ZbnYopNdmgXJCf6hzz9igzHrJPS6BHXk3Vwu",
  "key31": "4p7ewExTUPgZ2eLbBkuAnYvhKfEbFLEc6qqp65y6St8eGF6sCxMBhJzoNfwJAXjcvKi4SU1By316E91K4RKxi9Cp",
  "key32": "dRkKLeqavNczzEg3G57iNVxsWWtfHCHFe88Le9HmLFNCcgBpkeGFehMpqe15Uw2Hq8BqFsvVL8cddXbvMLJqure",
  "key33": "6hR6fRPD7XL19a1cfSv8tFHp8HNYaDVW3UaygQvK9y9xuXbkuuyQtxRrDuwWShH5mfwtsicKBebMMaivJ8JEDK4"
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
