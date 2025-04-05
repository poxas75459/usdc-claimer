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
    "54oEdJBBie3LzDVWKL93KD9XRLQdY7x5c6c3jexaHPAxf1aPiYen2LhwV3wr9ZQhZBFohpHHNfbvDsTY3Qy8fANY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56bhJPhXftaVcrtCzhLjKDxsGJadVPqYbPhPfiUiTWQ6UMFkyBViaAsjA3FJfY6WWbGKmYxzXw2XXJrWe48EdK9v",
  "key1": "4iy8M5KUjZqUCnXCLrGx6fJwVAesoSBr6eTnXobfRzbKM6aVymAz1bFmr3RYHXQKJDBrrAmTNqYDaPNsJYaRM4vr",
  "key2": "KcMsJcgRm7qkyxPgv2rDF674bU7Gc8i7XUWN359Drf5kBKrFZy52KYwJiHyieLydEsQgccjVcrpRe8z6z3R57SD",
  "key3": "3oSXzJSnr3SxCZvqq1b2tfrV8ppUCduSJfHRqegBmacejNUGW34f4dkViDcFSkWavj7WfQC35RqeZjv7N2Y6u1mh",
  "key4": "4qjkkAPpWE6Y3mGr4oLKFYnvXZ7U4iPwqrWSWmSeQ6oGJwGUuZqPU1wxF71SiPz49uDfZ89NTkMcAdHxNJTZkyZd",
  "key5": "25YPoAnu6Ynz949Axu6r4S2yCvnrjFK28oo1pXezyWxoWQqLrp9Q5Jb4UtLrWw1FgvsgDDAvFQrtaFRGQbjFSVHd",
  "key6": "496quq8YutipHeegBYFJkv119CFWmLL3yMdNrmkfe2HiiySXq4ZkTbcjiKVZJLhXNkgpK7gEnJW2GCSfz6B68kzk",
  "key7": "2ZAdcJcwWdiqV3hCazmfL34FTL9pDauGC5GaSTLCUjmxte1vGcP2eYLS1QLkPVr8qTnr2SAr26fFWHWFxV3BC2fT",
  "key8": "4EjFdUK7ZPgVGJX9G2BB2cCXjr6Ghm5HEWZWmofjQmrHUsM5dq5gCM12XHA8AihgzYUDqULDixjt4nx82KKMijtV",
  "key9": "5Fs7QjazXMMqiYY675rNqNmSAuE9xj8qq5WBwjYMa5qJ7iwHEx889EWtKzoToQ1a41UWySCeqjMVHUPoneno28tr",
  "key10": "5ATsoF9EpkTjE6NJZDV6rFXgw3N4nfSVrqorwd364DRZqqPtuJmTq8Cfi3fvr12jVR5667DUvZyTUkJi2yD4fkSh",
  "key11": "2pym6d9vDNEaDgRa2ZczfUgzoUn9cAsFP1Ry4Mjm1KuwggVs2FbjRhwLFUAYzFxyED6Gn4zhWjUFZBQgsKysJLQz",
  "key12": "5mFiAsnjXdh1LqebadXTywWnC6hxTXVq8JMnk94o3KpNFP1tdpkCf8JfbbX3owcifYJf4Nbt1ZHacTR3EWG1qwN8",
  "key13": "62c4AoT9e3xtoFSUTVfZzA1TyVA8dpSKPTd3EeraY5bNqfcwj9tCxwscUhD6pygByFb3EGCQyzRd8Vs7YJqNRiqF",
  "key14": "2HMc74Kd7GEG1HLFZCeQjfsCrwNdecAD8fehHiocoXGyhEBJb9mRVmi76bzDDQUo8cby7qUcayYbFrGZLHDaohrD",
  "key15": "46fqUQZGvTaSy2PErxmotPLNgvxS5DHqVYq4hoWPVVsiDsiZ4qK7yXFuqno7th7WE6FaiVmcyRYWia7KRHqNdsm4",
  "key16": "3EKNfCWjpCPU2sKtu3zHXqk38o4XCpxhkoCz6YNEFXeHdp4qwS6XrBhLUSAvexDCpj79tR99vWthKoYfU9q8SCWQ",
  "key17": "Rr5xgZLXgymtrSmgXaJFhmtrtsz1MzeP75LA2YRQVFvoUY5mTY3iz37ND7Ceay3PfgEK1cf2vJhmPEFnuRbt8wX",
  "key18": "5UtQATG48FTH4Mt7X5qmStbJiMJsJoK3wxETeQDmmqH8AJerNuD1jir2sSzqjZkBD19ASwocmSJ8hoSpX4DHrAsM",
  "key19": "3E7j98MeEJs4k14uhYAe8E4D7X1dVMNbXgTBfHcw6SRSaB8i2vfwwdUZt89avGm2NuKXQFiBj1r4pmnGkYHsAotc",
  "key20": "4MvSeohfcLfEu8Dj51KkxhLwhxYYcNzqZW8eekLUYQw1A8uA9C2ta3EdtbCJ4XrbuU3R1TLWipdQ8dMetGkGLSLS",
  "key21": "8ZqtCgW8vfamJrMpypx6vW8XX4LBPSXY7TU5i7sQZJT9U8fYcLqe3UVwy5VgtGwDbR6iyGZYGgQSH62y1NcZQA6",
  "key22": "4Ds1MHoUs5JNjf4ZCTon1Xy2236XjzT6jw1o3rYRuvBa9HiSZDEmbUt4f38316ZHeMCqkYNaq7DeGnNcmZ4YtS3R",
  "key23": "aCKqapiNGjE2wAtNDgGA15AewAXycBLw1KVrnN85PzqwRboJm48jK1nEffQNodYcKgjTNN256mDphA1GnmQYuyB",
  "key24": "u1r3WSMUkbvWH4yLBKNG6Bw9cyz2ZA22pAxtTeE4M8vdC2AkxsDjgA1fm1DgSPXPpzDRYLLcNghCKVWj3wvW8vq",
  "key25": "58mKwAgeSNLpD7m1XmMQHrEW7DURpHoyvnsX6GYrmL2fiRUegMsa5wn33emToXEyA7mo61rE1gBmKkbBrKshMM9W",
  "key26": "5VfX6uw7tG5CTvgdZkatRDgRE8HJJbaAcfd4a8acoZZTp5VWjTdRQ5m76tyvdVhsDuqqWy9MNpxaMon3wcNYftpo",
  "key27": "2RXdGeFbpuB2ntoJ5ruwZaxQqysksYYDTZb6VS4dGX9dj8ayfbP6F4yMnjNEPZmB1ZR4nSBhjSKjthhAhDHrUPNe",
  "key28": "4ND93nQozVSs5HeXnf65Uez7urzwSAWGgJF1nGtPZo3PVFa31rh3sRG6LDRf9N3fFwNmf16Vxear5HhjZ3WsBatN",
  "key29": "3v37Y6Eh9Bp57HNhQ2rdbHCkrJmkcVsvHtFiR7pE568H7PdZNEgJNFYPJviTYtcX8ASiR3rjTTUS7zPFPRaXHqDS",
  "key30": "3Ze7SpqzxZstzFJ2jn2QAjSEBpqY7HQV8gUadKhYFWBqffYsoYHp7K9L78hF8d2ChPidbNogUp5heWeU2wzy936F",
  "key31": "29Mj9vsArJnsQvBcYhNqFnJN8XdL83QSUgctrdejStL9ASTHGmvRYR5F2Rxtp4uyRU5vSpqNhCscUoFg65QHUrmM",
  "key32": "jBooYFkX1TdsWovXyfPE3aNmWWHL1zFyvg5Kwe6xV2EfBkjYiFp2MoYnsnsCye2cwLLgTAjqzqpvbFoRXeEGNq8"
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
