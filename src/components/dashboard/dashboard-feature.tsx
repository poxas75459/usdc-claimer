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
    "5GZxatJWAXRiJP3aHQF3sL884V8YGSC6uHADFDcqZQ6gM6R1L3PAEH3SyCKXDnQNvDqzn3EuL8gZW4nfowfFbXx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQgdXMY71PrdT7eq16GfSDhY6NSJXqqAdGZ4qTNcjH3T8AtoRxtb621aH9hPcPF2r6xznEjNaGAkRyb2kuv9PUs",
  "key1": "3ZXY9b2Vyf3uifsmhQntVDFSVvX7AkTJyg8tyip58Kzymo2h7sDsV9Z6VTGCDY8B5LALg1jsfNsEHMw8R46dPAvv",
  "key2": "4YuozvAoB7U7nbYzCTebdtGz8ke5rKcnmDnDwzvYvPfgKUWF5Cm1GJRnLdmEknGBXhst8NFTen4qNy72sXAEyThW",
  "key3": "53R4EiJ2RNjZbQEi5KVsj6tNSHcadVsttksAxLVejcENnV8Dqt9eCJ1hUeMN5LN7vVwj84VU1TKcYdzwW8S9Rwyw",
  "key4": "4nbYHKFwJDkPh5K2nTNtSoSqx9vAgAHe261JWeEp2p6vGqpsSqLieE8BsA3mGcmjUd4mBa9t35Gcd8pJvwsdApvE",
  "key5": "34p1z5daxB6TCd27m9km7acRBrhoyTCA4b3LATMu6njtSmgwM4aMGEZADEMPLNWNeSMUpUrosoKND5xG4xDoSPZo",
  "key6": "427Ss25i5DnJNnqLniud6iZk5rXubbJ8E1MY2nWhBbx38nzzWjMWrZzsYMFCftykaxEUVryAmTFU9NrHQBZKhmNU",
  "key7": "5bZaSu6V3cHwczjRAu2dnCAmq7fvLPUq9LuNaWRBDMT6sxgCoxmR91QUynu5H3KPjipXe4LbXjjJ1EsX7v2mtmJG",
  "key8": "3HwuYH3AmsUuTHwUU6x6PH6VGkyfn2CWn8yUiPSYb1YurqC9tmuytuzvKjp9BpYu9eufaboqH3KYW8LVUm3JvGHB",
  "key9": "5EskxoUEMiGJ24ejUKr64eywts5cxQJjBS6SDqMbViqP1jAL58i57Jixbd6mvVqFjM2sAGFqNqSwcGccc9bu1Mcp",
  "key10": "5b2htbV9ySwKpmRkwraeHsUjtYv1HNkYcPy9C53uqRaEB6synDddy19QRsePo6sYBbJRGaNVgB4iuZhsyLe9v7Kb",
  "key11": "3j7YTPmyp6BRR5b4uErqVgrtVJNyj2VdN2csgaw91oeXPoHURtqAxME6ZEy7MBFFb2tEnig5YKSyCGAUbrDYwjAc",
  "key12": "QMBVBDXnWR1anku38AaB5VHUn2VAx63FFX9ZdSzJ7XnZY8Ufz8snxMu3CbuZ5xoiSNsqjQEoZCBKsWthDgXebYC",
  "key13": "3pfQvSpXR1ioHH5HMppfMvip8rfP2KvsnP1rtLR3zJgyHwERTBUNUJpJtrpFPKUQDTMXBRJGhMenpMSSQP8UQczg",
  "key14": "3SK1nsY4WXKhyariZrn5EKCDcZj71YLqu3zZckNuvdw1gTv3TuvhD8WvskDs2LHyTvsyeoufe4vvyxk7gaerR95L",
  "key15": "22LUinu5M7GZsTEC5ZnXiVRQX5kz6BmST7zA7E7BTUJLCkxRV2JFyKKdWTxaGimggZ7Ci9LxEprWriX8AEqoUP1j",
  "key16": "5wMxo4ZEBbATzAzLZZcaK8BqYdXHDKygGUsdeYyKjVhZLzwJB4gZWkDj3i9ZxYpDPWMtsrf4GJPkf2aRB45bBaRz",
  "key17": "61jHKofJzFnzy5hBif52SPexCNhpzZ2uBFRp5d1UKwJKee7rLT9eoJQ11D6BTqHhdv5r4fxEUhAm96sLzLtMegjW",
  "key18": "3WKrc6qSz2JSQ1DcK2yJcVhF1s2JaqybSP99xQMF55TarA13AVXptsSDtc4fNpubVrJhDAxdmSy8PGwhP5WUqoX",
  "key19": "5zBj4gyq4zqrYmqMkCGEPyQrtuQb2X3KwnT4hm6eAgm7CSM4EJXSc6eoXaiDMAcVXe8nux1ceuGA45UJDUELthJG",
  "key20": "evRUfBEbnHL3pA8cDwVC8ZDPRySmmr9TBBZBQ389dXPiA3dmzdvw1oY5K8BoNehsvw195azXM7eHQ7CQPpf6pKQ",
  "key21": "bTGDRKj1CJUD3TNQrPWY2jqmi3vo1y49ALNZmdS8nLvwfS2AjJirpJ1qNFGSvxKmQqdbEK8fqUkdbpfyLRZpUUX",
  "key22": "3idnbG6qx3G8VqBUz9hZN1kjqtUejf7mkyxZsDJFb16qz86HGzPX5RA213v7Lko6iuT5CP2NYJphHEFEeXKofRXL",
  "key23": "5pPNW61ykkbsfU4CCNA8eWsJxKCXUo5KuebdV71dG9TjAyoWr8xMc8vMWeYRVw8xyAABFEd8gXnPEABbYUEPoNPG",
  "key24": "4EMmrX7dKbMJJu9zua1vmEKu3iEWbTMcT1595mrbMzJYd1ndKEWRDSDDqk2bM7Pi3d7DV7MrLa27SHzDrcGW1zRi",
  "key25": "45cSKnbk9s5ar8HAuLi9Ux2kFk6f9uzJUXq57KyP4MUU4wF6BhEFL5NRdRvUGDe8xpvwZ9c32nAX3kzvRjqyid2R",
  "key26": "45NWZb6ZaHxUJgJEzpdimmjxS187YEg68sidoZneYLKYz8pzhgKMBSoPQNiDSWiaUouDhWDZp2NMMqNXewgxTX6P",
  "key27": "3XTZ5DLW1qmi7domZo991wVtgfEqjCTGGBSFytWuYyDXNZvUzUBZYravmq4Y5ySZqceyqd9QPMXNe3B3XurrSZRK",
  "key28": "2MAZKfcBwe7hwDVbCESoPqEnUFE2QfJFT1kQ34KEQKczmRRgJ5cxGfXnW7NE3yGakm1GrGsUPRp6gjTMytFegqMY",
  "key29": "4WU1jphohmP4nhEuzzAeWHX7cnLNc8HcVzvMtCGaJrg4GWhCRZPqrXhboU85hXpfCXRvwtEiQcsJtFcKs3rY78rR",
  "key30": "62wP6NuJCX3ZTranQaBAZosmfNV99a39rxVsggS6LX1Xs2iUdqaJmHBV9fsm5zXYDHBxoXip2hjJPRM7qni9TTFF",
  "key31": "4BtJhcfpCarWperz3UocKFKNj7sotB7nqWj6rWrMi34AngGFeMmHFEsL3mPUpQaJiLHcXnvEet18P9VUejCTXKE7",
  "key32": "3sSVFGuPVZnkX2P3FKEHFHx1cw8ByEEQSLLSXBXEeMjYu1KP925z8LXig4DZbF8WM4AYHp1g2oF2i66JmistSkV7",
  "key33": "5J1RAQfpeftnaAuLTo1zgfY1WPkUqw6zFDxXD5LHnM8JXMuSsPpqVFcEN3w5yHouHqmJwzY9PvhrJD3EyTiQ7Z56",
  "key34": "65DfoFvBtDByPPpwWC6tJLP3MtetMJnesLyHLzWzXkPaa69aowg1S6JZaVkfdSjwFzSSRAcJSqiEyCYnsvTnjpzo",
  "key35": "cJDz22QaL6UZJJ3XdUX1fRzVsLY8ELH7zToErKLQgfogAE3DPMKxoABd8zpJy49kNRSvNQoscgDPDGfSieUSBfC"
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
