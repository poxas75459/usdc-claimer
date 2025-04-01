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
    "5dUtByyeSarvfkpvQiWnNiAjsG2LvfADWM17RzWBRpxdg4JU1AyHLhspkPYwuEzs22R9WHa7g4U2KDm6ScymeLeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMSn9iRMwguyLVYQ2jh1q5iD2XVDU6DEuNhD8VFGtxuQZPhRicidYqtyuf8wxqoTnToDD1j11YYmbX6kkVNofX5",
  "key1": "3cprAL5VBBuuCKyNe7McrXTCZEuJKEmuNWvN3Cd7mgr7Esb9eN4fgfw42uDWkYZESeDpiEg2Euudnm59EmKU1HKn",
  "key2": "39JBBpESrmddFNTXmcgVAeLJozyBbYr1UATXK98an3KfzTbKuGjT43WGy9VoPvw8rZCkc5Vz3kofWWwp3GZ2Hqfu",
  "key3": "3K5XKo7WaqMXY4iR24MGZodoPBnfJQbDgcnKyCdTVMH2YKbaSwf77m95rzwxLp1CJA2WVyewJdLg9xiCv1nQ5RF3",
  "key4": "5t7zSHPyjDdVccsgVwQY11yWUSNdTY61JobC1titXNPL17ddayEMhz3q5XnyP8Kt6aiGVfmn73gB7zmtzWNJYKz9",
  "key5": "34PJK7WZ9mkusN5fdh4ejk1QtV8WPSANpWnCtRRhPmRX3DwcVdkhCWS3ZSuSbgUrbK4Wr8u2tuKacSkzwW6ZXX66",
  "key6": "4pCDn2jtQJdK3LAyBPtCj8XfVTHF7Eh9iyF7wJ6DuqZiGqgpErGSSsP3mbwQvLyyAkJHRdVSm81JfwXMUtJAw19m",
  "key7": "2fkzADssVkR1UnBbZAyvvwR6UxpTqkea4GnRAk3L34tRdMMYqwyKs4YoTdbU7ELAJNgkah9t1AW7vrXLkyG8cyey",
  "key8": "2K8za7mQLMp8guq7uZKgaUKSWiJ3Xk6686P4qHQgmjzekdN1oeuhSYYnNCfEJwhu8p92GbSbXCHG7pkGHSei5Gq3",
  "key9": "3Nj4AXoYCNhe8LUWzg6Fy3LviXSAtvYXtFihzcUpR5BkM3voCrF9GeMwuvLXBP9iovWtRCy92UkpuDzaSK5TqYHw",
  "key10": "4Cjw88ctnN81NzE3fY8ZKmdCoSDE6xd3TJx8zbNYV8BVpZwq862oGcjXUfFXuQMFEJ8Q2dKqv8fAbvQiqGi8CFHU",
  "key11": "3NuauW7KVZNg9XZhtFppnMTJSyFJZ2DLivRpfLUbGPQZn2btKnwsQrqm868mLJvKmW4cVVrE4Fyre8fgypSG1ExN",
  "key12": "5S1wP1CevW9cna9En44EWLx84gHqHTjrnbmUAcajYWVRkS7QMP4rBd8SwTHUL2LodW1fw1XFHJY4C7UJma8569nj",
  "key13": "3dz8j7LoiSDvGVAj95vcphe1Rche6xmiZJRap9at71nrB4zrB5JvtsoPnzVvNXXn7srfbyzsi8dLzKecqo9w24qS",
  "key14": "3w2XgfEReoygoGfduD5tJaVjDd9E8DFvmtXaKKDf3rmUYSwZt7bmwQjisPLWHxerWEWL7SLh7fW7sMEohhzVx8Ry",
  "key15": "6zACuBEPaX4WXFxvXFUSVisNx7kPkDM5eZ48KYDDk4fZ7KMX6QGanL3tgBCnQ2Ju7CcbKHG1nyN2udctX5QHvGL",
  "key16": "3vRTxchCRe4jWXpXViB6CRAHk8PfjGAXyqbfxCrgxVtzqdE9yuyVBKM3FXKSovL3tkkBxWusG5KHGfo9YdjfDWcK",
  "key17": "45rjLdsAb9rS9b2HhEfpzCRPszsyLf6NDe3wGGziwQSjEbkyW9gb3d6mdyhurcTiYuK9Ub2Y3RFMVxmYrpyx6tpp",
  "key18": "4YVSqS5JJknHr2DNEKnsbYmSkmxB3oHmj4zMQ6DNeXm3HAPbSgoX5qfJwK5fhWG4iZHKyjtHHH8Esr2r1CTqu3p9",
  "key19": "5QWz1QjrXgPPuemnu6BXiwcWWbaXZJbXJKYRNnycNrDyANtgBqKmmqnBcL7xa5zu85jgMiWyjxq4ahHxhm8bjsB6",
  "key20": "5ztB5aYeSRJqh8d6HPxrDwRNnQfaKt28jHMzP2pJCrG6DT5cPU95syx7bZd1CkfPebpiWG1NFx3c9eb7AQoRyywv",
  "key21": "NgavKR2XdMem7WQT7iTqG6doQmxTDNNGoXVmK3aT9W1nEarZZtZTQcCGahK39HrZNX1PB32Vzxir6rVN149c2XD",
  "key22": "4XX4v2XFwdv1krXj7EcHQbcL5vtTfoxzzsD2JpEHfnBDBfrWRNiEDC9oqndQVaoQSryT5XBh2sTXqFA8dSYeFa6Q",
  "key23": "cqfEmsE3hGa8PhErzxYmLrCaSGagPXS8Maz5MdRPWykTSGWmUfuwqyAcuXe3cDWfGctVYygnwx8CWvAh3EMjMVY",
  "key24": "41EoNUVz5fQZxZPJrKPR9WwGY3smNkn7SRQdytNEL4LEGzhfQxtamfC2qSNgeSomNQrr6HTVyuN9BLMTavfGYVDH",
  "key25": "3GJYAGpazMNrZ2Tt22t6TkiQy2r6jrcuakmmsdnd1EtM38AFdCSkh7iwMYMk2MfC2sCwz36b6jDJjb6xwTdBGesM",
  "key26": "29v16gr4eXgcQD7WD4tmHLgC5JVNGHsvdTPTCFNjAN2Pximv58wz2jjiB4isxkaUXLLqvprzESGY52bJmHGPgVRm",
  "key27": "5rtxLxxRiRmwPhrgrfAyxBQ1rxWHGLwMRgJQsN1iogdDLwzNa37ki7qXyvKu1gefrz8UnDvw7iFkKY2Zu5TUdDZS",
  "key28": "2VM1uHDCxyWvLeT8U2J1EsFK8Lmr5U17mKYstLJBFTFmjUfwBvCHWvniSGX3ZXtksRbE8qxvfiPVV3SzkTzXxDPd"
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
