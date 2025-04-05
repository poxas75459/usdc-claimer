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
    "3sPyEzxnxscGwFt2CHFtFwbLDGq8dggm7F3jdf8vPRn94vdnftWHn55R2WXuR95Z7MacQpyA4GpKHg6Bvy64mZ1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HvAXkJDiNy9MLrh6Anr5zRsLrbmjZU3oBd3sS73SXNEHUWzJ5HLNr8cPmDtp7U9fpXSuW4SoYfcSJeU6R4D839",
  "key1": "4W9ptxJiBbnotTY8mCZSj6RJotHXxRCwqoNUE5djM4E57KXUyYqQL8wPGUwVEjvhXJaqmQdFcxSyzmEdKH4gnPhn",
  "key2": "3ix3Q13NnFG8yJYWmc49ByRtvhdgEbWYGjupemJAMWfDTbYrvdwRm4ZPvYcT47vnxEaByTKT6Jaw7fyQDmCDysvJ",
  "key3": "2DJwJ3K3EeZKDHnuYQqZHu7xCNqUTEpwM1co8aHqPgRSCKrf8NwnpHEJvPWoJVuL94CTsDUKojpmURkPK7rWiX89",
  "key4": "285bjF8rsFvsZag5N2Fc3xS92cZiLNUYgtchXSPaMSb6TR8iLptfM62iCLxfSd7Tumoq1MkDSE8C9pD1F32q6BD9",
  "key5": "3wMVsPcZwGz3sb52NvzP2nLhx1YnTvPNR5N8h97X7MZsW2NUSRXACoFqRh8Vj3APG2b1dPwGo3UfEi4DvwdbR44D",
  "key6": "4LNXLpe5m79EHCAfMSp3DrGUxDEvAwzCBCBNPme9aAEecoXetQ1VphckeqTsYkjTbKesbRtVRh3e2LhoWGpaBUkU",
  "key7": "4X5vhvoBsbRwdxdtAqJjQpK1ZnNNnmGLa5nS64NrRtBDmYUMRYu8cEFy18ZXismqgBr7nM1uQthDbTKToGuJxi58",
  "key8": "2nyU3UG38v19qzpJNkmM9ouLcHkSrc4riX2XfchP7FDN3cFX3c1rhsdK3PJWH3tTGvAnHrkDofssztS6mXGsCFRM",
  "key9": "3j1zY1Cq1zBz3Hwvh5mB9RPNxEjyF12HqxAgjczHdUqsnznfuMsqQCS7wdQHNWiiVV5p1BXUMiFo54MCQ17w88hs",
  "key10": "3tD6Ns7JZj2y8jkpBrDRqRXpeq9xwtqSQMTPqq7kbPpSRBf8kaQXyQVrxQZ27J7nAovGz1NbrAmd1kx9cT2CaA2W",
  "key11": "KDzyecbxUP6zu5Su2aMrYwjAq2kuq5PheZW4FpF5NcRRc2c1WfQHhKVJ1YMi1Uind3mJ9ZiRjYQ6dJ1GusNnkim",
  "key12": "3UXtbveVLrXsgRwKKukLvoeFa1RvYJnrqRj5ykmPvMvtyWNSXimNu7UqSAmwcaTyr7EyVTkXC1KwgqsyLvyQbfr5",
  "key13": "4q82wRztz9goEsYq64dSQxHZdJF6emY9dW8BmxUxoFfrkeYKTqJ6cYRABM8CFVwFu5WBRkemzULiD2tyZovnUBg8",
  "key14": "BbyuesTexUn5rqt8d1iFYkXtkpB6kgALfYhc47MdZhMkDywPJrqYoTdzPyAsYAfRH1v7MUvL52dduDAwcp1bKN3",
  "key15": "5hxermJtvpCrr1h7QkNz3FmdLf9E81Csoro3rYXgE9VxBK9A1yuok8B2sk3xdw23ywECTfBKJ1nCTdyRbXrS6oq1",
  "key16": "5rKGSw2VteKXCMfBhw9PS8Kr2qWUyF4YCVoMEq5qDYmcaShuF29hD1t5b8RQvVAp1LDnVLwKEEP3NSQ4uxC4Moor",
  "key17": "5kv6M7N1eariDEGr8yV8S73uj65EVSch5QSYDGzA6oiCWPGiCacSvfrDeMUhsaBoBVCQhkAbr5Ln54sK153ZehyF",
  "key18": "3J3baXMrBNt9Wd46hW5fn3kXGkfYYbgFxruJ6Q2ZV2cDcdVJP3Nx9gs1vbUCGcN79YsqKTBWjuGgnxNtsTAVWybK",
  "key19": "4KFHhUYssHJ2CgUtVmvwf3uaG7LqmyGBQGTe322atwq1KNZ43E5wPLaJqEq9oRD8Ar7aUzCVyqBhE4ZjDJDxvCFN",
  "key20": "3fwUJVm6nmbjEt5v3STtLVjoRK2Pik3eEA2mRmFvs5MEjLg9Dh1ei7qiTauN5HXW7zkmg51cbP58cW7aLWKRk8Ew",
  "key21": "3FzfFYtSNnXebg3gG1YrQ2HNeP5g5LDzMsGKEWYRF3YeM9zi7RiP65EVRgEaEuHqnty7K8URY5Ua84vqcbK7QJzv",
  "key22": "3TQV1sd3xusFizpprPaWwkaXpuHXP3CzGWHTEppqwh76FtQFHFyYos9LbBwLpNptG2KgzqGZhGprZgeBGK2j7o2u",
  "key23": "2nSErvcaKRaoDr4hTdnpsg75QmYPgi5tH2Z6Pf2EXLB6C35ceAVffNuxECSLx4W4GYtcgqkoKA29NdS3xP4jXxm7",
  "key24": "2yJPjZyJ1hgbRtte6DbCUUkhhpYVZgNMw1Q5DbLTz6p3JeKtBapdA5NkHiJFZz6sPVPWoHtmDQsDyPbRu9mCYB7q",
  "key25": "46x7NeBCK5kfyGYuNyQHRAJpPaSNM5hc3RkvjGfqAuXE9KnbsYELRphm9ZZqwCa2yB6bfU7EAoWhWZkfbZgAg3LA",
  "key26": "2sprdFbwmnf18cdRfrgZ8cxm5tzVRVdtigzYbjLPEmk2Wi9ZpxBobYmvsz5Kmca5meBriMy3E3pcR64UR839z22y",
  "key27": "4CZY29ES2uaNhmKRkk3bjqJZEKnWyJ61CaAQjysMgrG9rjSXLgvUcp6eLLTuFqrKZrSMSmaE7La3zmJaMZis2b32",
  "key28": "2jBe24vvxMUBm7rhcwDrJnqymGHgMHdgTsMHdZY3vbAinYrWge93JYGiz3Ab8uLxhZSYhvZiN1aFChyzbneezKbr"
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
