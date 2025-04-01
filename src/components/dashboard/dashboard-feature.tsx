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
    "5jc4WQUp2FFXY2EmjndcMWGLMJZnyJjJYBySQp8tJmwbne5F1qzZcuLmbYpjxLnmX6odCakujKCbnySoPeuf5FM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yiCva2HKMPeVTtYFXHUf2QuHN7QT94Mh1a6ycHgtWkgByYvnge5dAab3JcWnERqcWy7DXAbdcqixWmhyeQUU1PP",
  "key1": "476LtBN6PNDvnir1NscNWvr1W6WgDHPBoBPaPM1JECjGn2vVNCSHuFKzcZugSCNAsVYjMt6JXjCXG5rQst3XUP6p",
  "key2": "2rrm8xTSxWgTxFzKQdvsYjT7UbrPd9khUBw5Q2APHTKVMavcTygHFGsLJruNdxKWFz38EdTZRB84jd6m18RkeWuw",
  "key3": "4c7T42ANHaTQjGWbetzxhPtdNgfz8RdTPy1F4NUUCEjonGLvoePHoeRaVdKkwyT8kQwfmsnZuSNgFJ2FHk6aVsBG",
  "key4": "5cPkSjmJ6CoMC7j825Y2pKVjttHgpirjoxPAgRvM3WLPnJEiLkJqWSWDgmmWPyvc1xKqMjDwqduQuuQJiF64GiXo",
  "key5": "4C52KBsUhjfXhFNMHyfQxgTSNAembJjDLQPYEJyiMaeouhuWRwBczhHJiUrr7yGxFigsNYuyRDqPPTQqS3saJsAY",
  "key6": "2UfpgPtXfY4hhiZS5KXbfT6m1LiCHVr6r6bQTmYpoxqyrUZtUYrgt88nKNtaHXyj876LqVaiziHDp7otXWvjeoWB",
  "key7": "2G2xpc5J1AQLkNzJPD94dn9YgptkghidrEzZMfYx48DdxB5iRuvgzpqg85FunFVPiZUt5bP47QGzWtvYHKxBMjjQ",
  "key8": "5nUCNzwQDFTJTQukaXtTB5bMPdf35fCw7G4PfHDzP3dcafx7k7MJPbWQ3n8ZkdynGCq5LEBHRFQd9cMXdP4FSLcK",
  "key9": "3N2CPQDjDfYb8CDSAhUWbBse2JcPkH7gRWXyqpVYeU5drA8RpGTNSwzPpXxmRL8nUYM95pPBcnLBABAeVLjiH1U9",
  "key10": "3AYxuGPKneyKGkLrHFNy1HxTN1PrK5y6X7eLkZ8YXZTmojgN3wS6s2B4pbKPT8rejVEaMb4eiLfC6MBrgpo1FBhT",
  "key11": "9ajQkeffH2zNqfmgPsbsQXHjk3oqfv2dXqGgfDDfz2HdedhANh7T9aoZR9UFVFjqCxBvKRhbyLw2fZvRvVJc4br",
  "key12": "38t3nDMehK3sZeNY6HEkKY8gKY4YayEMxD8XYveGL7s2rndiaRLhB5yeAmfvUAYa3eu3DkTJ1KGhiQgs8mBK1sgM",
  "key13": "P88gMWiHkfQWFUKnCvQNRfS172qS1kS2tngChuGv44eDKwm79GQux8Yb4FPyVLs2N8rCVXANPgraSq27GpWMmjK",
  "key14": "4b5c8AdkHRc3jsLXXoX57G8xkzUVKaYJTgkcGNbR8nN5L3vHHx9zSsKKTHXsfKUSPVEMXhutQZLTQoVqSFwgFFFf",
  "key15": "5nBFiZEhL52CuFv5jzYEcqyoNXPqWRBhmiQqywvp13Jnegdis1QHnEx462SdgUdBqp1qVJwuMxCZrB2kLVnKo4iK",
  "key16": "23gJjtCUzV4nG3JqShRqVwW1xbfmmAuVajCgHJ1L5d5oackeX3p3dtHAFwpSnZ7pSRG6WNmEGhH5ZR2Pc8jjiwEg",
  "key17": "4aJJ2g2Z8RsaFDW3wqvaUVSJhvCNi1s39duFgmMnzfdZHSyRa4dEspfQotG1YxgXNkDq1My7M2W5xSPyvj3b8VtU",
  "key18": "2twoQWM2mXmHjxvPFRjgQVXGSDvQXbvyHQLY2DbrVWY5MBKQZiif7ZXZqtKNkvkFfRB5vWej5zNynj4cbwumPhX",
  "key19": "BqP5NsArfHRdNz52vNSMDxdeNtB7iT6m3V93rWiVZWnSPbC3cvQLejGziidSLQbWUkLuopFRZRjqoaYTwWGZF4m",
  "key20": "2RBrywm11uwBfuBMfFQGztFncLDgRhimWUNSx2szyCGXW2r8iDZQWYVJoJ1MSpPJxU2whjEb5NCPn2Poa6CsoEVF",
  "key21": "4tktqZPjPg9soUvm6DmvSfrPDffdnakUYmg9ny1GFTrDksz8McGEy3CnWTfcMsxopb5snET4wGjnRTXm2KwP4YGc",
  "key22": "59ZAm9EYHxtU6WZBFrExBUqpBwLgptd2LV45DWR34Fjzf4yD95NkFRReNrmDoWhfivWiFbi13P3tSevA3UGutYvB",
  "key23": "3iUn5pTg1W4Fibuobk2KSyNotHaZqEENL73gWDJKJefw5C7HrhVp2nyyqgkK3qDCFnm34ZHFjAuGDSwDkG9j5hrh",
  "key24": "qr6UU9K6KKug3ia8RuMSWGfThtN37T6FMu75gdJmQSg8c8535jGNL5NVaBZvu4w2fCmtRBJtoM9zmRZW8HMnsTs",
  "key25": "651JU8cQJk23sjGaa2SVZNFngu62vsw6uU9C6hW3et1USnkx7U7jfez4GTer1J5vYw5RJKECUgbXf11z26UZzGQR",
  "key26": "5P2y4Qr2mipBGQoqtxvbtzrrFwACp1Q3isNLL9LuaJi6b21oTyn9pecugXQbJLiUFVhNVSVyWW8gJmELwcQwPmxw",
  "key27": "2RhUhKRTdeXDM5J35hBjSACte3Wcs83cWQ2bHuCc8w3wsFQKrHKao2EWz3fjNLx6t1axUYgpq76HNpfV8grV64r8",
  "key28": "4CNQbsynAKvZwETFPSkQX78Rct9qsEE4h8eRrnymtETPdaBuqoM4AnSvfRqXrZodhXMGESuxx8eCK1WSGPW17vcg",
  "key29": "5s4q9Hy5Eq3NBKyMUcqeac8CWGt4zZJr4hhSoUqWF3yFHyrRpTRKeXbk9gnRAFStoqWyfb9fyjcspcJHcUh9bSMU"
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
