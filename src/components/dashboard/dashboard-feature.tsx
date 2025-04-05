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
    "5oSkYwtuTbZLEP2aMPEqECB2zBB6MutVj533fdRixZ71FKYWZtf5kwx8UdKqak5fPphXSpdBVJrqnENu5EwzFgZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3hGDtQAeMSaoVWH5Qvruxtz6i3xyuAosGTfM7VZ3s5o3vZiSNaJuD7ZtXUUHu9n8Wif7LANDRH16XxB8rCK5bp",
  "key1": "5S3qjJujZMcJuhkJotULUSuHMDRAwxhA4ihjmopaTsb5uM7TiNbAZvhYbdtdT848hQ2DVP5TBHH9qEJ1vbidcbcf",
  "key2": "4ecqg8a62HL4fyLVvy7Vp5Lsi7xYUWYVFhKtSHDHDURb9fMV7gAdRV3yyaWxg8oDGib7BJLA7RTdgyhu7vhnaShQ",
  "key3": "2QRSSbxdeoaC2ud4TX2ARZUxbYievKU4QJv98HfnYBSaQH4FYyQLJiShZ16C1at6wX6xpockLyyMvpPehQVh8etp",
  "key4": "2LG89nTXeXUYDbVGN1gZNqVerRffC5gvXupNsQmiaHZNK6TCBPMZn6aXbH1h43kHhaeF9LpPNvMPtKdb4ddcMRfy",
  "key5": "51xWLLRX2HTy969XRFNqnkzDqTS2UHQmugFaSqQh6Kueh9ZskEEGLv9BWKmJJRuuC9b7141j5j7Vz8BWRQGwFSsL",
  "key6": "qK7wcDZw6AKrZPyAHiU7W1bbF9J6U3mkAcxrHxc4yG5GY91Hao9SE2zX8KNfeHTYpkG6mBEzzGUnyC9zThmKAB7",
  "key7": "5E9n2vK4aqhDi39BjVZdB4N3DU4T1Bfjqk5BytTThQiR3gBz9njE5WE5zWihXVRCgApwjrj9KWwysN7KXcnsb49d",
  "key8": "2RKYpnUppSTKa97DEJCngJjAdkdGbNbT9pU3o6Axn4XJNB8TH1e5Ds1jARsNnrXayiRTbcHLr3tucMFijNTwziK4",
  "key9": "jcTnEjqh3E6MFWczpZwYTEKgrFFdgaPptqLo157XaGNLatfd366mfgWP7KsiU3qqs78SJshHF1qu9oTefc9qaL6",
  "key10": "2fUr9CrViVe1pAM3GLpXq7M6BvL7Me9KeTvr1VzcCH44vVMs7fyPZzUgNKtAqTQuCzMaFwtALAVaXZKwJtbPz6Dr",
  "key11": "pN8nfc6eSUpmHALrL9vVSMugtShPxDsx114dDnzzH8tWJyrG4h8BdHL5D1NXptKMYQX6THYQLGdsq4Q8UcTqG9S",
  "key12": "57vhkRwfHjjFfJkNFKF3sZhzEatrkhb9g71zcpjHeidjUxocb7LjyvbrFXVrdj7FgZAJCADDT4pFexhqfx8jf1sH",
  "key13": "3RWrh4edx3v8PuhzvkSidD4wTgbjRiizzfMvgfMX7brLptY5JnkMP4421GKofqKT5v3THvUGQFwqHCYUQrxAxB6T",
  "key14": "5WEuS5Rqky1idN1dj2iRd4KLmR3u31zkasAQFpoSvRBALQXFyqG1SpvCTEd8JqwoA9W1WarjZmPr8w5Boibgoxdm",
  "key15": "329VfnqGbVEo7LYQE1Fb3mZ81tJzFzjnERTi6zLh6YP95F8jQeHFH6hJ94yRfn7WcoxZ8Kn3DrVfBDwp96x6K8U4",
  "key16": "66qNcAWfACVghmUzgQtuv8o1u9ePvLwoXQbZa8Nka5xF3qVewJYWxYf8z63FrGHEYmyovivJTCEYPaMRjQh7TFLf",
  "key17": "Jk25kyvpuzyhyonw3saApwMHyZno8nfKpKs3pnkmF2VDktDG3nH6SETsyY4gd5Z3urhPXvVmcw7zC3NivfSdVmf",
  "key18": "5TeVcZaMbyQzbe9jc79sWUKLkgChESta96HYWV8mrs3Cpx2ChdV2bvqrTahbkUuey73RmUi7nCkgKdTemaEamY3P",
  "key19": "2kW2oYNvDZvvEWhjq8UsfgFEpLuF5an7zAEbZMBWaMopU34MuF1eekdXn7ytosCz5Awg8v3ZsuQ3u4tHyBj6PHrH",
  "key20": "3EZEygqS5ynvcHghc3vhy6UQjFaTh4fKCqZVtyaPdEccmmnwhcHHRjh4dUVUVjh8cCJvE8Rbt96rQSNgoDRwmX4j",
  "key21": "4SrfScZtR6S4BChWzdQrqp3yZ3uf5VfrvLCforY2cPpLeCwq8gdxL3qwuHFRpnpiiDfAuRYKodY4c3HsTkQBSFXM",
  "key22": "4YzMhKu9Foet3pemsHdGhMXfGNquymS5zuFWYmnAcw12BSx29tJtVAYZFm7dur8hmQx5PnhjxTKhcbT7n8jGpoYV",
  "key23": "3sQpjkQ92NuvqQ3rQk2GyGKXmVK2Qev7Z1y6jaEaEHiJWz1gV4CyEvXmFdv9mpY6UTKKxN9KAaNPQkgiss4obBcB",
  "key24": "4VKY6zrJX5qetukk9rJYN8CB8Y9AigCmHJWrD34fc7yUUPt5abHedQwFHkSSxjXhocVPy1W76WqmfqF44qdj3rJL"
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
