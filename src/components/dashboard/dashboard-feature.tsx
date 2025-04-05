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
    "4d7mzyoTU1uT8njA7cTitMBdHePpBBwXagbeQj2hMkRb21LCUkVECryTPzGzDMpnobwBo5XJwRAmHZVY9oMtg1qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USD1GkLWSMccUGNmLeSSDm1J3CC6ejoRq8dVx8bDvz6tygwCd3uBwkm98vLwQ7jB9DXEJ4Dv2iTc2c26B6Wc39c",
  "key1": "3cfVC6HsLKW7vqKTFfajH4x93dYiefXH373m4wEDddpuv8pFwZNVXL5ba6eP62aHnExNtoy77jqvhFAK9SYkNYMj",
  "key2": "39WsdJsBrmw2uJiLGCzpsuWnkJUjmw3eX7SzT13wePry8DZG57jKjSfZ3Z95Gz3PPuBMHBifr1hPwZEWB9kY9N5c",
  "key3": "3FibjpM8udAeP5PYCEVPyLBUMqvsHgb569KZm3iLSz7g9rX1yYBJFub2Nb972D26fFjzDpPk83JhpdeG73f3nPqg",
  "key4": "65gs4hFBNxXd1JhUpEuxNzXMteKQFrPHfbQ1mMtCFCCYAF5tYcyC8rxHfk8ykdrDFZHHRiCtThkK2Rgrte5knaT2",
  "key5": "5icZMkPcsXVDjbk8RSy8MJaXfe5ditYJjYxfULBsynL2MzRyTED4UVEzSgMVYHvoqLirsNi91ZJQAbppLo85TrqR",
  "key6": "5QnTmgQQmLqKYvUshEpBKUfw5Cx6AchCo4EuuXXmRj6ZeDfbz2TGM7kg5i3mZcyLsRTrnAJKHcQNGVDNg4tM7GiN",
  "key7": "TEB8WznEu4oZk4J9V28UzohntiVPLtCDaE9RwqGMoY8S9wrg3DjUB7mW4DFAhTJskjMxh4LmuxtzqC62bjVsa7A",
  "key8": "2QMNhSms6DL1hwbesaxBAPoHUfQkRaXDwthUD6YtD6at8cYhz3CDfCDqxhCZfiUVKGpqYE7Y2ZFKtvbJ3tcMt8Jh",
  "key9": "3c16rdBJTnndwrpbUerRJk1gzkHDg3zMjyJZiBRkWzVitiDKChCt5LRnth4NZxAHKRnxTceDprEjtt4mLJ9feGD7",
  "key10": "5i2nBCtoxC9YCjp5oS1sgvr6PS6sDK5Cr8AZXK6eN2EcSxFdeMSLWGHNovQq6gAuKW4x8JJ2YEPwvgP21C5JxYTp",
  "key11": "8qHz9NGnsyRQYkhBR6wUxKMecb9DUjmXU3dehGSsPbKeENGp5qo2sesDxsaTF4SkJvpQZwmoppPqhkoxeQsUkvo",
  "key12": "3UGXGZ3R2NNLmReGBvqzEBDQfxFBrDcgpnmqpd9zVAaaocAkYRhQorCKyhwR7RV4PDB7Lra1s1Z6tfgniQyURi58",
  "key13": "4GYKHj8KegX1CdyENZhpoVcJe9HjYriC5MZx439JBJoEg2Zof11LAFLCnJpC34LsYKCtvzJkVUjQYaUUoEHPpZja",
  "key14": "5KEBL3rE3mFxeK4g8RDrAGN9XR2wF79AWr66Gz2bwrPjLanY2yAYt7W7RWsKw1DxSSz7kFsgY4mBcaQxtQba1BKW",
  "key15": "2NW8CN9yphzmW6G3Cyz5TBQgN7S1Z66avbHDQBR6xEXFXGLXNmDuX69w2jwZWQEcxtxSbSxzhFzfzDBEgwGoHJyy",
  "key16": "676BfL1odpqzx1o5JT8ojS3zXDvQ1yXRhEPeixV9P2SjfHNAp9tMnALcPdyPqh5BnFfGfFQkegPNSzauPir96i7n",
  "key17": "5ryrUvrcdgeSeYrciiNT1VZUoMD6LcvYm7M9jt8iTjt6BdwwhZ7Yarq7iuTUt5VnucSeoryZi3hfioPeczzisoMX",
  "key18": "9NxK4gkBLLRZbaLmmbLACTRyTCh6qNQ7USkQYzd1bkjrGzbdTYvXErsw6aEYnTzgxckNkNhJtLM7QWes4R5mUBg",
  "key19": "5go34wLApzL2Ka8hq7kBequ1UcCP7BYbtJTgwzD3YuccxWCusvqSHbAZrYhtHySoxrjqpoyABXXBy2vqiHyxDWtn",
  "key20": "VdyrhUcRDzZptA6aMPd1sGpqe9VLakMVqGCoukvQ2YMpMboojDE5Q7ec59BBs1E4QtRBPu2RrHXTADg8iWgCoQX",
  "key21": "5vEmAHGsZsHGhznNPoZkr8oqN6pnfqP22gwJTcEWc5uqRyFNuDn7FvoCqcLoFvXdXTao6TMSSov4xbgwgXJNz7QU",
  "key22": "32oDsD7g6kPZriHPomEUj9MpYWmbFkhZJ3H7HC1pGyy8Fg9oQic9wNMi9Vw3Vv1eZQ4R9SmDgbJXA84TSqTwvv7Y",
  "key23": "2P8FFpTxsyvZHhxy1EHkeLKFdt9BAbATz5rKRFywnwVNekXiX2Ebmb6Dmfj2Qax2VW6iQUHUt8PHUMdrwouKQFiB",
  "key24": "5otr9CNU8Hg6a3aUiWiiwJ4DvtQmSfCJ9YH85PFWU76i8MF14KboN4JCo3n3rLkcEMP7YWX9up3NG1SUZvq5WJGz",
  "key25": "3g3kYg8c4FzdNsZ6PvmkPmnEPRwYp4pSwkEra49VpT6UG54VCsopmX5ZWc1QE7mZ8rfa97Vpfnga2WgZNL7R2rN1",
  "key26": "4maMsnfp2MArdVsba6osQ9Lsy4Aoc8X8pofr6tyh4HnKAj63iEkrY55Ezej1Um7rFvg2pMBaGJGYsKMXXk8Aums9"
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
