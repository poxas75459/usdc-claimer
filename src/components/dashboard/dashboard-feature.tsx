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
    "52CTKgwzf4YmF3fyCnNggZTNvzSeCdDKjBvvYtKme3eRBMbo7aKEkDAkagdTiMFRq1BMxvZhLdVwnNrBzPpevokd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRFWGBP96gL46yppqoL1Vvov99QwCQN5f2FWgHe2cibQuH93ikFbvm1VJmL8vrjcifw9S2QNWDmKmxHY8duvxDz",
  "key1": "4jZnNGpSAcY5Xmvgnv9R1ZtWZbTbXZnAiiQ2m7MWicEry5uyvxeLsrqz7oyu4Bm4TiXgqn2dBQLFH7azy2imjEt7",
  "key2": "5Aew9Kt6YkuyWu7sNQQ6HmV3B4FxV6XSGcmoE9RrT4mP9mxs3XVzGQim9TPiPZwJWKxchRF1ERkMbcjd5VpSjbBS",
  "key3": "5XXPb7dGj7sUxnSFLwSVU5odmjtpVxmmUt2TudpZWyDCfghVnxiucikNTfmfG5Pzh8dhZuJgDdUGqy6S7QGngv2R",
  "key4": "5idfJXHnZzYQtiZtDKsA4kzXV7szdaKiCFXGcqTbt2dPkeT6ExSh42onP6WiYqiKVqY5heofRi1eprWHVv3c7CDi",
  "key5": "343z6wzF5S4kWtZN1bxgCDbUb6eRgARFZTF9bckcmrezDct3afJt9iHzef737Nk6YW4H6z9oVu9qD8xqqXPfdcnw",
  "key6": "rb7jN9JrDw41VkXh8NL1ouwmLNqaiJx3rpnZcSv9xGbAtzUXDag4UNqAtADbEeCcaoaWewWEmfrJDck4dGC4UUL",
  "key7": "3Z2SgQVu9KXLwu2GrXBw9X71AaALdFdiHkTqY2bpJNt9dNGsGDnj2wpYHDP68UbzDobu38mhMmbGKUHXe7MHsQpK",
  "key8": "5hSZMrx58Rzx9V9XcVLp1EWSzpYo89UH8gixN8UH9mmUVrJcBJc74dSv97GyRd3n2JH1s6G2VVwvytChSGhXQ7FR",
  "key9": "47PJ9MG3a7bvjbR92rnqktZtqaJPJt4KSYvQzMVECdycFtYF7yFyGfW3UZr727ZnworWmbXxUkcmTsqJKgWY7TW9",
  "key10": "5d6kTxHoQFJyRXdMWsfPJuMm1pTjQkhBs94tqk5qDBQK3q9XMSMppK4RZi6cbKxhajqs2zk15WMrotKEUjLXg35F",
  "key11": "3Hn9EfFGEddPKcE6GDUx7W8iUaT8Eu7UYnhXPhAxMfSoh2NcsYyNxVe3dMmnGyuyk2TGj58nT5D32F5cjPbPvumT",
  "key12": "2ftrau7LZffXgeC52bvdLH2WJkQdn8rjgwt6u6bQNQG9m8Q3HFmSA71rCVxR7cChp5wE1sPc6uiRJDFCX3fpqJJ4",
  "key13": "5boEDSXiS4tatfyE25keVvA4RtCDdmUWc4suMtFVVjuNBQSkVVKPphmhk7CY8EzxQNyugekQRxMgeN7xhnHoLcd6",
  "key14": "5oSJ6kPZXMKNwxFAsozj1oyQnhvHwkEiSPE68JiX6FWsW5VUhnEv3Z7MbFUdw1zWSgTuozZuQNpff36NuoxTGGeC",
  "key15": "sUsVGXaETJbH59euNdqXz7TXmSjbmqJGrbwiErvtjVhxvmpxPgLhkHR6FTaUMAFzCeXUHtJp4BisD7Q3xEsEHET",
  "key16": "vLX6zEd1XschsxArB9TqZ6QgPXKbg92VJb35Rcxhz31sCXjfpSSkLX26oYk6YL43xKWw5qK9hxzjLCxwT6eg99y",
  "key17": "3FvW1FF4Qg2PKqZxTvAbXKTRccnzCe5RGpdeV1T4TPxFcumW1i5m3HTPyYhLCRe9UyWXGnfaUuc8k93PG2asA9Vo",
  "key18": "5ADojYRWhBYRZPp9Km7KQhMUb2gWTLr8MpBVwuk2CT1Ejv4zyWYGeXvqMdFvdyfG3hyBrycWQmLSAnctTbYBrzLw",
  "key19": "2NyUP7Uk85dqboQ6fw4cB6vY182CQnsRRRopUuhphLW2X8KEToumexMoQM22ZCprjr2s5MHieDfPiSv3PNBa96TS",
  "key20": "jNEP4VsKZfDtCPizz6K5D91dYbVoz5vFn9e8sRZAZ4YYofJv6WAtGamfySmufPM7DfqUH8JadADfBBt7EEBpRqa",
  "key21": "3weXsL8VuiWAJ4RjPPGxf5HFQ81ZJMwciDLKKi53bjqpPcSztzdkhuU5Jtez8ttjxmGr7VySZJAf5X4LCi146Dq2",
  "key22": "2fGR6wYai9pnxbKsiv2F8z2FMAfoc9Znsxy4h72y3ztVqgHmmkNAmDn3jVs2qfxQuNBfR1pr7BttKnScLwmiMPqC",
  "key23": "3fdUF9WfaFp7UfqqqMsuaZ1o8h7VGoas8PJ2haU8j1Bsuh1ntVvBEWus7nCMQcqxHkf9q6nYgi7J3TbpcQeoLEQy",
  "key24": "4e24MTRbx15spb8jsnQPXPFvgLJv6FZs8uByhtGjN5vmnSCyMKpbwQC4eHRLXgnqE8H6SzqhGxNr7Z4w5aHUy9zh",
  "key25": "2D6232U1H6YJsdAuzLvXpmc21qZLxszi1BDCKrHMS8pCEJNyYHtYtYGcLkMj9rDgmVfUFvwtxdCXN8oyZ1EBWkaZ",
  "key26": "2r8j3MRyVZogPin9DSMg3LqWwf2bvNy3JW1a7YDxuzQVV7m81RmJaAZsauToJJkGaxkKC2ZSideTH9g7vYTm8n3D",
  "key27": "2pXEeSMmrqyS1AwboZf2aStTY2bLhPybhbgGe9rPGcBTK9mjumjQYkwJ7vvFpuFzSaAJRXQYSr7KM8NFbNdfP3Es",
  "key28": "3RHBeTYrPVCNiPsABZrUKPMrcFGesg8NgU2sHm8QDmDjJbQrhyRsh4XH7KtJqj5H2XjpL7SQLheAt6Dx9tB3WHxY",
  "key29": "2EKULvjfnDQ5J31wLomcygC7WF2EHM6yRmwKNqaBdXRyQ1ums3Kh4JNED9bMFo9rByQxfLzitVMgr2mgbevnyc4"
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
