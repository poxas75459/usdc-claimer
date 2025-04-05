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
    "2Z2s7zw7X7Z7fj9nC9SDspundioYVCf4xNX4Y7cGx1h1Ma7fdwphMMcGugbdeRqFjsAncdtDLxJchtpbqWt2TjYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvxif3Nwk6D9TP7H9pBogkgcX76uvsDZgbg3Dwon1UqsGTC21fA9E47Y1j6nr2e4BxHXQDEikP88gUmvN7mGd89",
  "key1": "3Sn2c22S46tNzTyq4AE8yjKWiXMwYofTYBkWiisPAyXJ22xY9P3VyngzdbeUFswgmHS9oKQF4nefnrz9HNYWza9U",
  "key2": "3Zp2vvErFVZwTHFiRTaqqN5Y43hsYAaW9eCijc2cAUk5AoPyb5fFo9yUzf3VWmU9th1M3MyvfDXNXHv6eYUfNgS6",
  "key3": "2oseChpKTn4C52fLxyzvEb3HDEM5fYZAdTCDZyjkKwxJEwDGpm54evBgNqQZYd4hka5fLEgkx6DajVTV1AUWfL9E",
  "key4": "eGJ8xTRZGBLR2LxZqHENkKbMBLwXVwN1xrpMg7gy1K94gtkji2ucEjmeGG3wso24JoedGixBMCh6eWD6wGPYpb5",
  "key5": "54VcJBrh9e24f1B3zdkANbjKMQrKPB7LYtUMZraVimExWnzovjukLgsyxiVdFVJtrK4ZUDprrFdVAsfLshZBF2RD",
  "key6": "2oaHNkzk3oj7mYAhkeWfyiTaDbmYuiEdfCtBW7ix8wmWss5RmUPUu6RomHF1EhKSFRm34aDdii4uxX9wFZQqEYzK",
  "key7": "2SrLXU9BPb4A9yYeZ4QCTWZW7tgvmCANaerkfUAxiU3rV7b95f4yRhcYB69CzgJ3mbgMWDo8kzPXN48SkkeeBLfx",
  "key8": "2ZGbPrFsJE2tiiswvraHPFtckQPdiHQocNvDQ8jxDykD24AUc2fzAactXV6brQbB9wDJ2XDyisWvHhxACw9WKDkU",
  "key9": "4bzpTdtCHMwydB8eZDezNECkDeXsxUv1ZZbH4EFjLEs3hcaxzcPyRBkwiG5CCteSHuHVKHvppH6VgkWBX2TbzcHs",
  "key10": "5Z9mnXtrAEjEs4KYm1zwBPbVmMnprbTfxSCTjQZRmWqfDJsDeSkKWg58DnuBuHEtaH2GRBzpPYPjctF2VNc1pH1C",
  "key11": "2kJT5wgDPMQMbWvaiTmmcifGGV4fSUTy8SgYa45P1rBkBuEvjXTQ3ieFvQn7RzmGBQz8EJ41pWyim7dcA84kUNq",
  "key12": "4eifz5dYETMPuFBKRmm2SQWN7rHJrwGvuXGsanGqPXmwWV6iyAmzrfHxmVaZ1Lud3Z5RRKBTpVvNXPyYSCz4Ut54",
  "key13": "3drMkZzYFicwuX9Swy3ksDE4uSF7i8bVyCvbWC5JMUtHdDfuhzyFH1njYsvkqaFemgh15YUMKgkt9mhnvCZ3B4vL",
  "key14": "2EWtLuCKJbhbNmVRTntuQ43hrpRkU9qLGWCGVStAh2C4YdbbRUPVCehqvH9xSy7yb2W4TUq4DPymqD4ua8nKbn1U",
  "key15": "yPxtpQ3LV5ZN97xfNpAWZGaaCYJB7J6LKaAYENf34DKZ6vSeuabUENAy4pEJCKHKjcthUXJ2vhonNtSUoie2DPN",
  "key16": "C3TT7nEC7QcEioq5SrK73g8ohCwLif2jkaG5eWxaaoS8JdTJNkN8K3Tcf2pJo5BbpSpMfXWWscF8bVLRyAwpRQf",
  "key17": "3Sc1Mz9Pn1SypEvyhXqV2AVhkeByEXWZs9ZAfMHf1WkPdoptCn1R7ZoT3Gzqb8kL3MTDCqVJT8SmRq18obAhAUQC",
  "key18": "3SvhEaXjdeGDane7w3hzsgijdACvDAj1tSyGP7RMHC3jqAZoCRRzV6w6AahBYc3urbn8qS1nBEam68gnHnbPw9Gk",
  "key19": "41rtoGRu3RZgJUMT5FXNy9eP2UdLshRYMhwT5Ki2Brw2rkDMXZwdW7odFXSwBoGxvWvZz2nTj56D7YgBxWoHjvBv",
  "key20": "37fZMQso9ZwSCernuV5E4B8wN5V5pezdYGeZ2n68SVBMMqBVgqDwYuGSeKwdov99qacWr2ntYrd3rjrjrCFdsC2p",
  "key21": "4GunNWkdkM1KjeFqZXaLmDKVnCQP7BqhzeqMwshvDykFk1qUq9q7c1NaDv7Y85Kwx1V8eVuYKfcQ5f41VPsFUTVX",
  "key22": "5sh8imwWgjFDZQVRN2DzaRBYNpzXdc7TAQw56Jn7YDx7td1D4FZrjiFQCufco2KwEpy6VSjg8n4qDrgqxRDjNxDb",
  "key23": "3UUY7nMGxxLDrFCA6z3XjdSqNDi3xuTctuYAs3qEytiHSFjvQdmPJDSRWnWJXp9BGTzwSMxRKHAVrtvZzaDf6rAG",
  "key24": "4qzfwuy7mQw8XRTksnjDMtUAzikks8XNT6akXRuSdRJn2maLx8ETfN8EwXW6eVDmmkXLtUygBgieLwe8tAtYeTwh",
  "key25": "iYXKWbdZupUtJvXHoHSfJoYkQSgWcTx9qaP4jNgMq9giCT2zjFaQH9GivDzG5xRXDaXLS76dfeGZurZ9xjm84Wq",
  "key26": "5bFfdTW2T7c5mbwXn6bF52iC4SST8nPngWgXEJS38Cr83ALNPfXbToFU4gmCEqFP7dhUdabuU6cGbGChu3kmw3wz",
  "key27": "21EMotFuqnKVeLZx5gSKN8WpAFUtahr3ZyKT75vkHN8fjmky6TRCQhxknjAjAKEr3o8qvkvinjj5MthkMrC6Mz35",
  "key28": "oSDTDhfUoudC1AGqBYzdcLQti7CxUxNd3B96w4Dwz163B4n6yxxoAfaA3qiZvQTQcPVE59AYZMvDvETPXMGB1aP",
  "key29": "2m9Thgp8qGyPC4TwMPfMZMo77L9ezHjstiR1nRcF1qQUeo4ha7FqjurDq8wKFnUqA2pdvYVmqcaq5vmVWQfpXV2t",
  "key30": "VGaZCriz5S2fb6otD7hH6M41c4oqjdhqJ1CstL1egr5JRUoHEbQH8YYnatMf1PkbGBFPYVLeqKdpMKxn2k8KnYM",
  "key31": "4HvZyq2Mo4bAeETZrEuQr9ExvU9g8QRENJVhnJKf4WE9xzJVeRRNQNHcG8J8ok2epbJ3pJcH4iQSW6XVEDPig9oD",
  "key32": "4J7ntfk4395CkM6P3iGRWuBShd5oY3x5aPF8qBmFAot5BKhE3JvP7azk4VnMxjBQ6o5pSqbQvmm5GmW9PoZMw7xk",
  "key33": "3S9inEnC4GA1wb6XYaKuALoQpmLmd5FepWVFYzahc6ZN11E8ZcbzDLpr24ArPfwp3PGiuqTaTx9HjMszP3vpnFK7",
  "key34": "5pCwyQoncs1yZRsyofo81v18Eyih683rnGUxDHAJ7b5PTMynAHEVuiFRWG1fZMeNf147PTxsBf3xHBy3uYxb8aGx",
  "key35": "Cb81K2ooReVbc2K5Y5dNS8KaJyh5aPehja1gjBHMBZMWs7vQtfDDEHbP6TDShoLFEe7j83wUVeN181LPkrNgTh9",
  "key36": "wA85r72PDUGzcu5uwc8WLsx99W1pLf4n3xCmmwsFw4qTRB7FL7g6dnKucZSuofnQY32GMWCyZvNuc4AwxdbSULA",
  "key37": "2TY1zmwwij6EkNHPQez5iCGVD5AVKSX4iskdw3kgptLhfSZ2BHx6Stow1NuX33MEwzuzq3K8apuXJvenDzqNYzAY",
  "key38": "2a7T8NoJQGhycZGZryCH8w1Ujyo3SS3zok5NxafwVzEVsfTYcaoRJ8NS1wTV8B3tZzPCEMCAnJS7e9L4XpMuDZpM",
  "key39": "2b6qsBRT2CR5CR2y36vXK27YgqmKHptB8a4bJELiGWgCjhWgVEXmEV8S3vne4ib6otJoyJZvpDimt17tmiFZCYYK",
  "key40": "vz1vSqEQVjfPnMddvfbgjVG4jjX9BEVYKCTidj3gPwDyFF1mV6Ez7sbZBT8UamvBkfanMU6ncinWNxjEmXrKAyg",
  "key41": "2jbdzLLffNwANzygxN17N2jzkbuyP5e4Jj4wP5wHZmsH1va9q7sNmisd6fDWvanh8RfiQ7pPgqWdmjRe7LrXWNiZ",
  "key42": "2DG9QohxLcTLhKiXw5fT7FvRruzDDFcM3suUueoxXAcYfN11NW67JK7TtoBCU2tpSej35NYVs2g4Ho6GsfDxR7qY"
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
