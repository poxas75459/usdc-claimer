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
    "2inVZhudwfpBBQzfpEy85a8VytG4uA8gEhddNLzjAg2NEFaAZZAxboayrC4e9LBVajRuLDh4eds9jrGq2d4KnXqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ry5KJf8dxsqssLUDNpshSL6L6EKtirCtm7PiAAohMYfmKvJh1oshnf186pAN5EiSxg5Z4KHvoXAEvjE4u68GZFW",
  "key1": "59uAn6Hx3ixNpv5UkvnzWxzqomgpqQVSNdC9fAwwdLbYYG3QitJ5fNZexRxtWrZFfr8eULMsZm8xBFe8jnTJP635",
  "key2": "5HepPDMYnQHd31ye6JEJH9sZsyaentzvSZWPAemD5dFRZwRZYZBBR7MP8FUpJdBXCn6UBEapwY5d7RsYu1cpfThX",
  "key3": "RCwAeXCa86erCwJGMtNETK95meJhd3NSWN9TPXEL9yJdVtqSJeETReCg8BAkNSsLqGf3N51sxL9od3ygWFDMPrc",
  "key4": "3SwR54iBE8aBe7aoF5c5zdxEFPWjohiFX72rVLHvq12tUKp8j5t7d1FcwbyQ4779y9gRuhD5Kcj4WUyUeeSPjxK8",
  "key5": "5eoHiq6BvVtJw3DYNu5DPTHQfo9dzDxb4Xnri9pSkDMht74hvGGd7owgRxaYRetiY9EYbVsWjfRHQok8MhhCqfkH",
  "key6": "3TW3hHafE57mM7uQDnEzmdsgE32iKCLaTb7DvTMBn83YsSXyHBSuoh2FE5qe2qnheGF6B1FfQmjAtNhBkqTbCiV4",
  "key7": "4qZkovMPuf6CDEc7uQuxeXf63NYUV59uw5KxneaewgWhm6utWqDUuJi59ETLowieM9SvLTPoKCBu4zAm13YRYk6Q",
  "key8": "szdBRD6mDBQUrg5EQ9TgXCaVJaazCnQMovxcB96WNHthHGpyKEg8fhJSakBGXHENxQCPra8Wg3Vk1p46dmGetkv",
  "key9": "UeDq7xoEAajnV87aoPBdxKAURH3TUg6cSTJxYnhAWUh7NjjyEoki6jFCbJVXLrspjWFGQTzghz5w8Mu6sAP8Qu9",
  "key10": "35deGFmPh55fYEmQmoJ4CYcXHp6wwKff74ErajmrYeoLQLbVNtS3P5t1Vc56BmJd5jk19S8B6Cn5wuxd5mSxpqvn",
  "key11": "k6agjRhAA7y916Yzw3abuBzkM57mLQBG5226TgEw57NhNL3KUs8koLTcFqUfiJQFjdAUf7a3Np26wFQf6yTjZzq",
  "key12": "62tjWkePKLRr6iGQui1A2DMxiMAArMdkobihb8AVEmjfMvpSCTwRoYpRcNLrfsGgcELJQYmFQb4ax5oXveNa46go",
  "key13": "4NAvD7fiR69csz2LxjFYP3kWyJ92oDVFuT4EDB9uwP5WBmofYTW426ECL4voWZXuapLodcmBDMUudwPLcgghrVwq",
  "key14": "5socpQbPX3HEdDpsyfU4GR9PJ8dniZHWpD7d9NK3sM5BmhXTgcrKaFvD1ukVhj7ZHDnY2CcMFegCJBAB4s4wpi28",
  "key15": "uKqHKWfvu1NyK8gQoFi2i3Nrxuf9QWgq1kB1ULHRASNAAALmmVv64jna8Hvg69XvUyzNSdkbxhXQprGGMgw9tgv",
  "key16": "3QH8Hkdf6YqPSbgdWFWbMg57qwLEkiY6bUjpJvxG89NfQeAMCNfjqfHf2P4kGyC74g2EjZY9qJV3YjZwqLtqtfFq",
  "key17": "5FGKUSp7YqZhJwr2jBrZ9TYLb9ViTyWi7D3CRLG6zueMERbFYxGEvv767fopw2SntGmt63rQKNcSnrbDbzUpCAPy",
  "key18": "4kFNCyHvCksCCZurpyyGcCYR3TY9194qk7MRgMMojLxsSqNn6HMiWWuxSQshAFkjhddZUDDEiKtqFDnRHXT5XVCA",
  "key19": "2TeKzSAiFtB1eeo5VUzC5ztoBBR12KUVaydK4asK4pDDdkkL3x65PNWViXMeNsdDZoiqYSBPqdQNuWHhHrLVzRqW",
  "key20": "3z5nnomboe689cBUMS7ybmddBb2uy7jYKgAr6iJJRmczQPd8yVGTdVXK9j8EY2x3scuimYJqBveLe3VTDmh9BhAt",
  "key21": "EJXMPviaiJx4QnWXnqiedoxmQLqX677CuA1DYnAtJadMDRHymcbgBeKYMy7h243k2cv8XjaUc4rqcpLDYxbvCM4",
  "key22": "26MhcyfqZUMNGczRXb3RDA1SNCJF6qhpvSw2D2rHVJ3REL1zxbxzkj9YU8SYPcoxMFHjoXTekSHR4ETzqCNu5mxp",
  "key23": "38RAMTKJN93p5p4SNNyGxqjALq9uU9qC3udLo25pU9EkEfnRMpcZ7DsR1ucgvUVF2HNE2vb5jvd2A6Qi83k8TbH9",
  "key24": "3pg7ifhxYSr3y3oxoiFRmqWgUeXVqYLHKr1JwSHDNnxgJ9JbFA4vbytrJ387hUMiXVpS2CBEeTZUdffw2P11pgJN",
  "key25": "5BndMtZCLhYTtKJCcRBFrwDcqm7AmD4JkbyE9kfXcPUd8Pkye7f6BBTiYip1GRQKuo5oYCv1dzYHjmmJtPTpZp6t",
  "key26": "Dk7gprpMramriC79frKUVkXpHArxkwbATtPwMsFjv8ELpC86ubeBU6TuHJCiWKjG6Kz8vchapLuuQUStHQ2Lz5G",
  "key27": "5Wns8HTnBdjS1rzyNzvJaeijZwsgPnU93QMpt56o4ET2cGmim2zX6xDzeLCUfBYm441YHgJUNkoFa1ZE3AXGT2Vr",
  "key28": "4UoXQkEfeqPafqdiY5bP9dqh9heT1qqsg8SDN25D9SbfGNNUEvrR6sVJ196LgaUNfz9xfVP3LPXmF2DSDZ7DpBw6"
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
