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
    "4NnFRMn3dNtxHAoqumYu9SZfEUKtBzxxesCRvn9CiNoamQVhNobu328gcHUdwE5Qdi8TvmPKk1vr2s9LKN4keZEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xMtbEZ3Jm9cqDqm1y9VoULpCEz9pGLf2U6u5xQE8snxkJubya45HDFDgokfZRtvQGc46nH7N2UpxEntdhS8DFpX",
  "key1": "2WACJcaNKSFihJEFCfDKAnBiMGKboEX9LLhkBQ4iiokQc2JJYR3zzKHjbKYh6R8jx7bZ36np8ZFPThG7mW228A7K",
  "key2": "5yA722FjRmcsX7PbVrRFGLEjtusTJwXaYcpb8oJzmq7B8NG2QmjREtXgaFY5brTf32XjasytwRMuEAdBqC4ZG7oW",
  "key3": "UF3fRa5RswSWSWGXwaD75srcbtHPp4Bhj12aTtg4pUTijnn5mfMjXjz9JcdKWDe4QZrAw4VLdKVqwvRtxVgC4fN",
  "key4": "4h9vy3KTT8h2t5RBoHsje95Tmeb44md2PHq9g2cUcWwYRwSmCAT49vM4SLdUt6qCFmkNBZWKRB72ssF2bxDP7Ga4",
  "key5": "zgmKLPU2TL5B8jBG1uDmo42SiuVJotjiZYL4qLxrA2Rq98Bo4wwLnaB3VqikhuttHmQxjx2pDdW6a9msDhfknBM",
  "key6": "ZyCc5Uq9PmAGzvtw2GXuGeCUfM6T6asFKFDyk16nmsdYB2EHobijXS4P5mZY3vyQYBhUaJQyc5Gqf6ME7ebAz21",
  "key7": "26cXwEUN52ddU28JEmxjYKTJqi6TbdGk4aPZi2ny6dE4x8Dk7P629MaJk9bSmPndyWeF9DKnRi3zqD8EUZuLv7E3",
  "key8": "3aBLTaMYGkXGJqvxKkgr1GeAMy9QxsZ1pqqhspjjQu2gzsERuKVLVFx9z7fDHFFhpk6Ne3NkGKEBfU1rzJ9SQenE",
  "key9": "k23DBVqi1jgSbAgWoL61GEAagi5qDa2xHFANNJSLNZvL32PHuBbuJnmkaWHgjFHhBvWUqLPy6G8pUPSz6gVS4dk",
  "key10": "eP135nEx7wi5ui5Gxy9LUQYCV4fLzxQjkJYdxjoT1E6cJdcUoU32d9WJx9J1DkBagscBjiAqYgMFhC3UaPCQUQp",
  "key11": "5EAiLxXQRqEcHJjbzvzumHxD659d4R1iZyjhpTcjuDdQQj7iynqpp9YJqz9Lrcn4HP2HjW82Pc2aaJiS7fvotis2",
  "key12": "2dontsFxNxemtoNzLiYsmpuqeZarx7iWko2ba1kMWxVqpkJ24i2gNHSmJMUd5YHince6bhEAEXRZaeioWh7vdqez",
  "key13": "4SiKUjo7yTam4eE4T497QphG7q5J3LYShSFw3KENP1SB2BAvVcHFtn9k8EHX5QzjBXcxzD2eTm57JQS1c8SwaADC",
  "key14": "2T22A6B9Prn6D4SHEndHc5zfxMvtuM5Ua6G1E8AQgyY5UeKK5Q7N5RS3ah8xeT3GWqv6NcFGx8pYSieUz4By4dPq",
  "key15": "2FvZoXAUf5G7rHmu1FCzgg2jUtJUK7gVQhaQiHP48SBLHo86otfViYBPeg48XpS1gp9Ue563a3jxfWjZkUhwYnAi",
  "key16": "4gUkjYgaMCJGAdew6dBBzXTFm4PkEANFE9kDVkuaZHGaVdSupes6T31MBwZ9F7zEQjLfHyMX4NQF3Qu3ULUTaL3P",
  "key17": "cxqfcRRuhLAr2vBEBD8oHU6U4EaZTjDT68TvTnAuru3pahfin6pyDwA3kLRWqRTvdG8i9LYEQVZ6msHHdwHZH1X",
  "key18": "3VYuzpmaVbwRcnZrR1F37T8Vw6f7vgAz9RBsfjzqPUb524GYH3U8cRiDYCKL3tv7Q8xWYzntc8QbdPKgkK3FE3uw",
  "key19": "3VjQCqeedksnfx2LnLDqjPqgABmQjng13TQMShsiQKVGnSsgAADiif4eMyM9EUhj2Qbk3N4z6G8fdMCioHKZda37",
  "key20": "4tt5TPESihd6j8787WYJvH8QXZUgLyJNGYdwyaDd98wwz5Cr9VgjKHESzmUSN1jX42abWamC1GyyK5bj8cdXDGDd",
  "key21": "4mVm6kZhebKQEjwFRsztnziFUqFu139UCPgphCxMGSmoCgiQdoFyJBrGRM9hJiQs13BKkW6aHoiA1w6EHCTjbVMz",
  "key22": "5VC4HfKaupZvu1vuwz7Y69tiLG3gamK2PCEjs7xJdtNZf8UUHmNVCjTtwCPU1tpHbreQynJ6beKmhgAB5bbsYFJU",
  "key23": "2f8ntaonidXtNuudirSyufVg9gJuAY8reCRt6F8WTvx1bxUiE8EWedQoaW7MpwuXWEtku8UH4YsoZvgKNCahyYxG",
  "key24": "ixTj9JeNuXPMovMQUr8PpdnknF4h2x7v1TAjceR9fQcxTpE4Sr8PF6sf1av1cbV5K8S2PkkusQapDLMoyZtUux5",
  "key25": "41DGQU2c69H8r3rxCKcrRzPyQd35SCnN3zn3WRhZwDYmBZNxNh5e2qVfrAyDYtw59RAF8JiMXi6cg8yXiW33Ptj5",
  "key26": "5P4jUyfxw7taXj8v9r1n3izWAfofHy1jjzPi1fibXeWdodwPKAkxscypVnyyrsuLrHmNhMRZXUwzTzLxEV7gSD15",
  "key27": "5cF6qAddTEtLi1M6AuzLGXsNJLrgHNbUzRfzhNfwMJX2nkPZVAyU4RiW5fFMVhthC8Ht1omUUK3FU1b2LE9NyEjN",
  "key28": "4WA9ubq8x5YZTes8TxW3WWcbZ1p87m6otKtwuop7ffC9V5aYskYkbzxwcHQKcfw9s85MGHt3rxTHqj3kTaeXYCkv",
  "key29": "3W6ffpqtjk3GSvhASYxdJ66ahmKUomqK4F1CaFnioJVydMzNXfdYFMdUdauhiYWJ9FbnSK1ZdpgSY7JJDvHtH7Wq",
  "key30": "2EfzbQiEHDSvwo3ij1TRVQAKn1zUqif5W4AYzzL73gS17R3UH8XQ23d9pHnXDKtVsDv8NH4btvUjoHvqm1wURtcU",
  "key31": "4dm6fTVdvuXSzCyiAzD7iGGa4JoiWJums6Ekhi7CxEAbB9G3f1LZNRFQcj8mK9neAhyniqsZXaMjtowXJepuuURX"
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
