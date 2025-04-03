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
    "askAjsaR4fbQtg4bYMiEasVUbzuZMAkAfSChYDtEvocQcAve3u1ERjDN9X5aYrJNDyYt6koDMv4u65inhL5mX9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWoGaNftfpvvhsjRK7TxHTHRKob8Eg4MtFUtRMtn57RRqkYAmnvmH9PjZriiSzznSwq6mD25ZPbuwbrcn3DwzMZ",
  "key1": "mLwgM6sMbaMKiLajwoqSL9e58f4fEPqgLdbPmkm5jhHGwyqZEDmFSr9LzqFT7tKKNYyLZDrPdncHjVwFbeePWmr",
  "key2": "LL9LHP73vMFdLT8oxd5VAujNLkGZbpSEAnv7KtGvFVuLSKpiq7fLqP1yMdHaoNrrGPhKVUaETEZRpaGohsckM9s",
  "key3": "BBtSqeyCbfqqUHLBgv7UFSjbnd4JU8ZJhAgrHoJCyhHJjP1yo9qHsnCQceZLbP5YzFtfqvQ7EVwRhMptV56CtCT",
  "key4": "gbsva2VF4ms7JMguq6hjPZNb2DNsBQcThzvJ3GF3CFN7GQiLiwzALwLaVZwYtnoX1GrEdFEfp68A4ZPptNzA1NT",
  "key5": "4fPmuSSWBr7MZfDFUiSSovENmfy3WmmzZ3DBBb198L73WnGLF4dNySp4KG34QGyLvam5RcQHAas2TDsmNy13z1ML",
  "key6": "3RhJYp98mSPtBqKaWQT1PuZTBcNNYWUvma1SAAgwrXGv7poaPQqvsReNSnCGG3KxumnbzZpfVhyyzG6N3k96cg6J",
  "key7": "3MTPH41onaKoj5ixXhgMzetPuEdncGpEBVq7LRr3yLWFW3erYL9miii6YYho1SoiKskKjBXsnR2D6WpQ8igtHs4N",
  "key8": "2tLpZ8d6ap3rCTAKyRXX2ct9sDU79tyqboSk78tz2L3rpGU12qNqpejQQBmY1u8zHNZUAg44kxkU38cNQLunQMa3",
  "key9": "2iJ4FyxNHUZJtQbE1vDzPpDuBbByiCXDu3yGaBZrAHexHzLm1qPiV9yR2UpjYekVwDxJMfAV8YJhG3zhp42sEUcx",
  "key10": "5pJoegVfapprwxyyfq29sGAKNpKP8hJ6SUe2haFHiBSW1zsURyAVrph27C726RpKoX3a5dfXANXrYhEcnq1fVkR9",
  "key11": "4N9aQdxwVPmhqdztEk1QmJXbBE2MsgwKXqp9SSsvrGJ3sa9LdkjZYRZm1L4mXsNwp7DHetZNGu1U53rPMnauWNGP",
  "key12": "2uBJsbbLJnngxyatbCNuxiAjuLo3D7Lzuuej3VQjxRQVvuBmziy12wNxw82VfoP3g87NVkNXiDgrdAKFcyX1rDDR",
  "key13": "66f3zFGSMrsCmm7BJ5uxv5NmGrY7zazDX9c7aDnNFAVBzMkMY8XHP8FgfxWGydZHR8TbKmuG6D6aSuKBWgbx1tbR",
  "key14": "ks9Xmz6t7UoMJrZ5WVkzsyWwXqAeibeNt2kmKLiwZuRtMSiJE3hoCsc2DPkaNX7ELF3Tc67ubwSjQi21koh6iWx",
  "key15": "2q3C2GdFm1cvBAZmE4d8UuXA1aKTBNbc1BAXHiDw4RAUDg6B5PTBRC3kFy4XEqncoL9KNUvgJnV2QZWaLhkuPx7m",
  "key16": "49NRCaCuuiZRyw4u14EUYg9DC9xKyt7PFEx8bXSoYctNptrUb6Tbeo7QBNQMfuMQweBBxNJsJGwS1fRK2RAnE6Jd",
  "key17": "2JA1mkS9XM8kX1dYkQTnp9pNx2hzsvimJwcojMA66FV2sGvyuhXXU3y8pA4MigbGw3rBDeK91e9gro4rJwpG8Lnr",
  "key18": "4ttGMEsTa1sAhPzqiE7boYcBSmU2jEz8GEQqFdbkuAmLo17pCoApnDzuQjuG63ASRWBqANhJx22XaUTiHp3mAZbQ",
  "key19": "2Bi5JcJtEQoJJ9kynGZ8CSsp9yrCXuC5NiCe9yPXQWDQEqGvcwcQf9568JGBnsGepHJwkZFvpmwaaUxCQTKJWcNH",
  "key20": "5964Cx5j1ZzeuriRdmC8bBZ2dyygG2CsHkTJwSqkmvSrEty2aac4ivnqnCkKdn2RindKuZajW3Htxe6CrkGGAo6s",
  "key21": "237AwLcDcGffzziJkxHdsJWVYzGtWEyMUKBnfK9vWsvUpPsPnfS5bpTEqHopjGsBvScJMRGyGXxwxTcrHJ2uwyoA",
  "key22": "5eRZqwSWPvChhLXa4NT5NkHgwKQPEtbAmpRVo1xnrcGqoYqWc5SQ3QmPwk9JmqrLrrZAuzESGB3eNdneUp11kgFR",
  "key23": "44JBJ2Xc1o4DETXPvAeLQf3kQ4w1gf7NvwLfCkAX6mxgseGraZjQ2mq5YB8Hv26nu4eJwLEd9KswbEHqHGmHoSa7",
  "key24": "27jvogTn8SXXW93ytwXknBFaFJoUMhu6Y1QaqxBCFvEqnmp6RuKFcK4gHKRCFqYwSfFc9b5bvwmLDbLq1mKomBr7",
  "key25": "5RpD1tXRwA28JjGTqNwXEZ34DkYWTV2D5ezPp77Au2Y3JwLy5EfGqrVV2cRQCfznsNjtPMxpCH3S8BNksyhSpzh5"
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
