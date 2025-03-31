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
    "4u7qQz7qMxM3GBzmBWxqCkcjpcNSQ18fgxeVzBUdC86uu2X5aPhtVfYxAEB82mtdKB6MfooEJB54rD8TuoU4xHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7sNCBanTuFANTiDk75mS9oPiSFo7o9ueaEcwawZ5LhAXUnKysgYj5bjXhwnwqqSiBkQkro73hKMdk2vGfsddoR",
  "key1": "3VYdJp6HV3MKKMMMqrgRHKNvR9gAaJdveX3v6T7f4ad3JvJdy4EUEve4pDLUDtZYUv7CKBZKbgG4K15iQfDyGzp9",
  "key2": "2q6EbiJUVHX4hoexzjL4Hq2J5SAvSrJEaUd3BoCEDQoqvKLD6SnawMdU7EyPgEueoYoGKX896V4qvV73RuCXVryD",
  "key3": "2qUgkwtEayuVaXRX3qx2MqmQWBLV8pt2tAkKhaQuHrjzx3LfmZRKcYTtzZjRz284php14M6yt6jQV2mhkisFVEBq",
  "key4": "5QXGeP2QrnQDW8RYDLEpVfdwWc3xcZ99GCFjhnuSbEYjREgHZ6TPLsbygWZJgB7SG51Tr4yDPb3i2x4QHhB582Ds",
  "key5": "2Ka9eRZidn3R1sWcLryd81tfjE39DsZqUiqpen4iA5oUsqmWgXqg14iKvZVakshYS8WWBZz9ekxv6uyYyF49egvf",
  "key6": "5UPtuc6LhGELA9TsaXex9oy9R75VgjPmL4V2ULZ6xWDR6Zo3GFVbCrTFawYN6CKWn4mdhVqXiRB3KnA6x46Fqyi5",
  "key7": "5j1CMM46bUTjXrR4UthJktxnbY2YEfa99jeDVQGKoBv1L81kUhjwokYSEniSa82hhBnKE6sVCpvgeazWWGMwddfm",
  "key8": "tkc6bMYXyCfL9UdUbgBxULpSqeeRN3rgCTi9VYM9wSUfBULqJfJdd7A99kqd4Tx6jUMC8sVJwmswaJrA4DtH9GC",
  "key9": "2quYuvBzJEVWuSmXMWSyeYLXUoyPugf2zfhismMLHrVKdyEF6a6Q6oZBZ6kvLeCLaSjArCpbFmgmjFhjDAKYfc2",
  "key10": "2T5d77d3ygTst9k7PELoMBWVHdzHgFPxpikJ6YeJMTPw1Ae6nvt4Pp5g9L5TBgxzoPjkj1QMVfWZ6TQdy5dGQxBt",
  "key11": "w1sWf6WzzB9NHA4cShGvDNdF9oNxPEXAhwoZKGjzbxtQn18XHyVGruaqPCGZZEmMiEgquHLdDdUFpQEo9HGqDvy",
  "key12": "29MSJEr31RJJacVY5GoPrvtsyyqiK6oBHsQRBpk7gFZSbkB2aabR1wFKFr4uVuVhFVAoEWHJbauEEVaMV1pHv5X9",
  "key13": "iDU9M5QL7ApW2nT4dKEzXxsuRiGiP8YTou2cSmpQLpS5Pg7nG1PtgkRx26h3aHt6qNYT8nYYXvPNHKXfFscRR3P",
  "key14": "5qZchrBpx8zgzfe7N1zWLsZjbePV7xHX8SSEtysrb7UwbTPUdvDZ1nmcNguSJPiz7efQjHpmANtJJQH8PXrtVU94",
  "key15": "GVfsBxR6yNhPmwAn3s45MuyoZLH9SnBpSumhXoU4vTReTwdWB62J8MWRaGuonHjXDcTn6vpJBvP4sr7ojWEx3A1",
  "key16": "2uDZXKkh6rXa5F5J53rRkKdAUA8NQWRQsKQiQETu1j7rMAMp3LZT3aGFbWoMwgWywuvWnSSC2iZ3XzBy7G7qaMhW",
  "key17": "54fZHk9xHPccsgcDFXBG2M7M4YkhsNDsSBePV8hzQmmahNfDPbX8eAwLwKgtPNUTVARaTeYsXa2CWsZSMWLHZ193",
  "key18": "2Q6Eaon7EZEcYQ7v5PLB5ThMsizSs3Nn45tf7GjUA3mEiiA6NnQAJsMpb5MteeEccbAhER478aqohRarFwkRagJX",
  "key19": "3Wm83cFJUMPRn8NbSu79cQv8KcDd3FcmfpjKmSMEYWYFcj38S59k5Gsv6EXjHP59kk9DfXSKLc5gJrk5BuhGHadV",
  "key20": "2N7fkUm5pJh7Znp7eJweRb7cKdPLV9jPvFjvXkWLAcCbbJbGmmqiWidaUpNQK28TYNsmEkZuBM17sBGP2ba3SvBY",
  "key21": "JSxE94CaKUQqiqf54bmfD45ch3Kq3EQ8NkjazG2vE9tkBsn1m4vm7yjU4Ae8PWt8KkNpcGrMJnpunY3zzLHXCfQ",
  "key22": "2tPbXouuASmzroQAM3w7H6ZBhbBJDnamRbL7r4YSNy8MjsXJhRqP3E7v4KqoF4x44JeSMbLSw8o3GdAukSbgkyj2",
  "key23": "3mYyKsFQecfcbZYGmy1yDV8XYZR3aS3B9vtfaYCV7VJFakBKMsCG1qezsxHEPtSYtSYnurz1k9d9L3hhecT9bA2i",
  "key24": "QmQ6JLuGBLheoELp3E2LBUzogB7d6f4wZ83uVYbqJKMwe9LPGWRF3axreCbFyEqteyC1PwZST4ZGLrsMqA4ViSL"
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
