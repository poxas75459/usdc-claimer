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
    "4zcS5gaJwVQysaH7imj4FKtVNKKmhjMqMgVBGjmEe5ujocFqcdBCLZEWMd6UsEZW3o2B4LDVgxL13rEBn1oxQuEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38mp1BkUnDUpfXSFxoNLTABwPUZUYEjQJCMqfVvvAyhZsMnCAPBKvaUz1Jo8LredeepLHtkznSabYYEncXoyajmU",
  "key1": "doSqaLF1bX3hxxX6CrUqkTk9JBQCbhjSteLtdXpYojU4PL69ujLzTSt27UfyyshW5mJ4wmWjKbViDmz2QKzuKuu",
  "key2": "63CWa9rVjSuZiTtqkMFUYjPLXuLgfvpFvyw2unwJdRVgwQZBYhL7teyZpWVfxh9aKcUKzzVaUb4wPzSfD2HAWsfo",
  "key3": "2qdRLPJdQchFLBi24LRuaPNJGUiNCbVvXjzmtJnSJF46akMxZyHm4A4vM4qNkWdvp5HW9kjakMsdAmZuf5wL9Vwj",
  "key4": "4f9C4bfyCaTUTzgEBU7jKTThhnZMAtLW77eW8fHjKB4nSujJboUpPUsBzSEspP8vATYJyEgVWaiNexpwX1XkiPwJ",
  "key5": "Y9bXoyCThGp7QQJeq9pwGgiRve3CTZFCzqfQzfWzm3RBEsMLZjvdDt52Q25y4TFWapSEkS4hkpiEyZ2nKank5w6",
  "key6": "gxJGKic58hPdgH4GjE2rukU66bpsxEx4vLEirvoBQHFrden3TfbYobwL7xoZ9zRsmfoxYz53YA3KbsGFzEXbZRH",
  "key7": "4KzocNuXu4JqRrjbWUxAaQBMa141C5fibwwYxtzdNo5zJrzPBrDXgcZW1MkrSKDZy2H5fxzk7NbBv3ViSnJN7un8",
  "key8": "3WrN9euVLbAbAUn5yKZVAVwaGoJuotGvi6is5EwEByC5tv5EXsnjm7MYwddQLaJvhA8oifV9rzffMnuL8matzQkY",
  "key9": "35m834HgUM9kCGo6LnWXZSYPfnkjnb848HC7Z1yyba9WRTDfkkC7wJ7azmGgkSDn6fRmYumruqKL6VBCyVshiz4h",
  "key10": "3KjfAT6P3XVr4DxoDSBFrdtV1iyNPybRjo6DEyXNg7VMnT7knc44pzg53kd8FsZY3F7CXFGWBuZ7Z9icaaVyDC1y",
  "key11": "4133NuCjMi6tGE9VveWSySmD4aKiq1j9WMCbWn9SsSbFfDCgEZxJmWxRMS7xi36z6fEQozQ1jimmA2dkXfT9b2MV",
  "key12": "47q7riHquqhY98oRHGjiPp6dVS6b2onJ1yjhz83LDSDCwkucY5AHTLVm8ZMEKmZ8XqaWTXaAHM4wMpXRhYhYKet3",
  "key13": "4TgDeng8hgib91NS4nmD2DhB95YqDs3zQi6JYwNMGuaNJJuWAY5BFy7scpQDykFEaPqCnfzV9UBnrA1HgxMSG6d9",
  "key14": "2KoFfmucrAznyxC3GcR6w9yWjNz5VKZc1bEP2VodFCgxaXdi3TxjxtoRK7mfKHjcELi3UKftqMDzU5j7XReBCQAc",
  "key15": "3VmLcMXgdrkoRLCM9baTAfnKv7JfhwVzYWvxxhfVaF78W88Nib3N5SHH2BKrBmS6iV4iHGpqkpBcNxRrSC5HArip",
  "key16": "gftJekwRg2hB5GtBJQ6kztaFT4KwjDF78hJWUCbxTVzpf91pfkV5zYrHgu7t1nEL6DWdXUM4f76kgqKCNHSs8tg",
  "key17": "462p8edUtSbDHyVaE2TAPWVxxwugTsbnBds5Hn8t8WT1koYStmLcrXmiMdyAWaUtAvPH6XiwqJA26xqLfKQ3qiUZ",
  "key18": "2HY8ta95mZZ1eg5EevsjbqgvWynbGA8uG1V4CYZBHeHXg5wzMK8oUv3Dc1Z6zV45J1R6qtF7uk5M1QZzUmd2eEoK",
  "key19": "2AN9T419uTHmksErejL2NkUxNUtmYtJWSqo6SDZNo3uvTXZH7f1qV4oNwgLkqqsAZxxLmf3qcRtRUXTMuaSCKKho",
  "key20": "2jrgbSdxUL5xfHEwJADJCK1EkZfrm7gkPA58eXM4WeEuLnNTWzBk1E4SNuJPw5AveJJ5ytMLkE3cxdxpVYDYnF98",
  "key21": "2L9ndrPCi2EsAJDk5gZtd36oaC3gzDeH6BwSVQ9ymc4Twd7Km3CrXKCTa9dLAkSogghgZrDQvBUZuwvA8B5UtFhY",
  "key22": "2AnTmvrbw2ixq4RvJGBaSo85thetaWwyoc1cpcmFA51FSzNZuCorrRswE1mmLueytTmZMPXbRNbUU4ezH8Cw2X7N",
  "key23": "35VxK2QyRJQQ9frm2vz1e9LyoKpXnX51JC4yBSpBFpmKEBBwMEh992i8c1kfYZBpaZSbtox4PNidgWBeppuK6YHt",
  "key24": "3CmPGFgjZV8LE91JsPd5Sn8QmJm7UebEGSwkCV4JjTSn4zs9mUv9jXBzkh6sxJ5kDJnzv4cN6LPXLAeoRA5nAU7n"
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
