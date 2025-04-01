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
    "AHpuFhY1pGLp2dLXE1EixgvCcWerWKf48K86QdmuBfaTMChFefBx2JJi8a9miyBhFBKkiwpUZfYocoKSrgwsSCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiQNDSHavyNT1dctFQZZpk516JFgugLvbAz4Yfazzp6y1EsNAjeekLj9EQsjQpxmX5PM9nyTz4PdT4V321UEvst",
  "key1": "fk8aQEDmQKMXosuY5PjEet75VS8VRrwxeVbSisEXGZ7R2bdcPMPycENDcvXLRMWXaP8PA88CHWGnbDcKEDLz3yJ",
  "key2": "4VbwZZSrXYgtphcGoppUjAMSMEn5tyo8r3vmRcTMPoUZudkL8XGiHykyfPHWssfqatJenPnNa953SG7hPvQPehuL",
  "key3": "2pnWaQKra6QJU3FavL17UgGqkg7ksgLyw39YCA2nPuHAxqbLMhZe1JXX4CWzSRn3PyXXmDbA5u2UsZqoFwJfH2Pz",
  "key4": "5Wn3nSUheWtVWMRFfmaxpgBNg6nUSGmxXFbdQRUHqxuffxzqgpq7MMH291KeytLZqWTKEJAGdad2zaSwU2X9MCo7",
  "key5": "55YxeeFNrg8jCc1QtSEnemfPQcN4mmokGFdqQK7Hqx7t44AhSvCKPmRM5wiMRA4coDwftiPsZZxr97xifZUwK9Kz",
  "key6": "2UdX4orFecTkxbePD5nVZqqo2uqkaASvQnH77bgdTxNn3Bao3wa4tAQtiAwS3crPWe41DL4bdfgVjg6W4n5jBxna",
  "key7": "2uc36XFjm5bd9efeGLYa5xxsi7VVPzphb23Pcy4E9tpX7n8rBnuUvUi6QhR6hVMehBA2F7Qw4SdV8cMpc5AhGVjj",
  "key8": "3MmhS7eR1Kw5yAACNBKV1ABYxjVC5VNWmXPyaPbCF286kNimYad7E1by2Yz4iHzTvRpx3YKgaq7CrwG8bN7CjQxM",
  "key9": "5nmsjiMUQZhUE1eiXnNTD3yfaeCySPZXqj3tGGh8SEsmiwrqoysEBsZZJVNxHU1RA8HANfaCkCfznVE4ACDrBskG",
  "key10": "4nTwo4iqeaBu4w2y46cjiaiKqEJbTjEFCFCmqnuPAQZSVNEdzmxRbQnSxRuYdviiCp3RbX4resasKmuaTeezAM44",
  "key11": "21VeVZLnhRHHLV92Yj2U9hkGobZWB5Tqn4G7QgCaErNoqTCMbPmTN2adchceBWuSosYUwAEgpm7Cc1KrP9DRye6y",
  "key12": "3k5wVABomxx7ySzuFUuQMv6hYrkeQGnxq7TwSq6hZWe3aQTXr3oeRVLMdG96PQgFqYokMCLcNuneLjFz2fSzKfiN",
  "key13": "3WxrCP8QtMKn8SWFraEcbdZ2bPGJT57dos4drTgiKg27zahCn9HrewhWL4rQmSzSuCqsMAHZT5DM8PxL9BvD2pao",
  "key14": "2tewJJxDZvUBjFsD2gXabjfuGEFdV5eC4pBAN2GcFFcdN4jAGkk9WRCraDgiAPxNnxsnPaqWMmMasf1Sh6mXrSYP",
  "key15": "4xtojpRzu2XgDPHzfC4JGc36VibAZkvgSLys4b4cS8MfsjfpLmDrXQpWNYoMfZEKRSVy34q1MZ4hsGpTaCnTBHwx",
  "key16": "3CSK4wGQPmbSJVeDNdE5Mb4GcURvCR252VV6taK7oVHSz8FUQfP5pAUMv8QULD7Ai8tEdBmQTeztTtqwVZbWtGXe",
  "key17": "468PaezsT4hEqtMCjqo7gpPBytdmDeKo73TvddRDzgTRRpo5hQ7zorrwTcLcdVAQ3Twx7Lo9ov7DnTxU5d2psKmw",
  "key18": "1xYxm1MRKtE9cBtRRDu9w998XmUQMWMNHdTzz8tfBiPzEvS8oH272KMYycFoUTbC3xtCWFwUxgRFwxePNdRXFfi",
  "key19": "5KjGxFXgvfYjWRDcmHbAFSbXfQ1We1XF7bPtSXu5jhUxTMSdR5zaFZL1jkZ3s86KYJViBxXPUwDcJofGp8uP3PmN",
  "key20": "4ZiChH41CWnZWnCFUt3xmZ9gsnLnX3tfAuKvJPAULLKCkLdHrRqBP2n3tc8UdDVyJiAX3Mpr7M1XcK5noPCUV8VG",
  "key21": "5tVg7wqzQWoshbqxZxz28tzhZQKtkpCCWbsVx7D7egzSzNKoJJozCsNkQFyikZLEfcxq1BA29cMq2esUNuUDcBma",
  "key22": "3J32hF2YaXLu4JBCTxDviJ2DzHZENjRKpt7zbkXpCfYLERnWwH8GFZC4k68bCcQsUuXQbwxYi6Bhq39PMYDDVNCz",
  "key23": "2SDGWjD5nj9bAbBruiNnFyf9fHLdrtSHBuodsojokX5GQKj4GwFEoMZZjYkkB6hpreLtEGaeDDKoN8VpAJ6chF7q",
  "key24": "4dz3cHDvi8mLHjFeupQfs4wKHNovvFifhMiAUGidQX3yZvAEaGfu3vdm5e7beaLjmPFZec48anVQ7NcrrPmmXyQn",
  "key25": "26NqCDAzttctUEDukg2E1qK8idpYQwEq39DUXT1c38mS1DSqS9x9QDK3U8hNThRhzxdqcEXhjPinscH6D3tgqU3Z",
  "key26": "2kMEFAD9EzhR8dvRyiEST5UBKPybQjDKTF2mpevHgKBgtDhN5k4sZ7qeNim6eaSFeJSp8tfnwrp26xvgybR4nuog",
  "key27": "4kMYcE2EDNQcCTC1eQT7XMca4tkd6DkEsNxfRYLNPvMeUwsWBaTXUR6msnU7HcjkQWmpSbmQFbhDnqBKANPGWtLL",
  "key28": "4fsqJ8Wo33hnHD2bxH4mXtNZKMafvHxQd7ggzuYF7jqjBqYaYvj6vEKkZ9R3QeJs86qPuQNxWyNd56LfQR7GnDgQ",
  "key29": "48qPfSum4dY8mixSdS8fSJtaB2Qaek5sq6QoTU8qNfKMAze5bmS3gaEyumeXRwtYeJDKEyW7ouvAC2eFvsqjCVJ9"
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
