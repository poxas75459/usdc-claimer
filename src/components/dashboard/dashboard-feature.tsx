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
    "26o1D1aF8htDMP6s9Utv15rtnVRPbQdPFaD12iGPe7zudBXdUFE8MuVwmR3dRF8MneNJefz1jebHTKcV3rdHpMQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uz65gbu9eBQfFntYEimhrMFXwRAWGhT6EvTSJeLXky6e53pZeQMYWnPMpHqCtQLSwCwoxhdAYYByx2fgqoj5m6z",
  "key1": "2yJWqLbspQhka6XCiaGGENzM2YyTAk8ShMyMjvS5ZWcACLW6U5KgAfoNgLiJQ8qv8i1E2AJWGW7262qT9A5B2kT8",
  "key2": "yZ12NDeJh5MnnpQzKpDSnyKpcB2KHDzz6UnMqnCyvUAqgmeLqDckriJXNZZpXg4jevEs3omXE1QDPtdzZ9rbfXP",
  "key3": "5F84NJg4jV4FJ9o72pGpNjipr5JswcY61JdRBdfm2nCjUtsLt4HDzXh1rapkNCc2Ah2NFG7Lris2PADcmP9avhyW",
  "key4": "2QzCuhcwHTKAujK6rPuKJWtkRa7pxS8zpzzpqLkx1721YyurWJ8swjNqwBgtXDXdN7Mv3zBBDkg68iTkeLUV82Bt",
  "key5": "5kwdTzSMAWbn9b1VTCLJkivAz6VJvipGHYosEGePK4SZPZgkgv2ycPT3N9J1iRmcDxRQ2q7e1Qnw5bqJEu85bS1i",
  "key6": "p9nsjiNXfPzKipbaZwgue2pdhMJSDcEcP3acyQ2oVWYUdNZBsugHjAfbn1RFkzNvrWEAsEz8vXg2Ew7kJ3DfGY5",
  "key7": "4z1knLr26emtL3uq9Mzt5qjWghFagc9CN4KT4HDNgupBha9ngmTu5CjFT5zghPh8NtgQB8s3ektv6qsksEbAZ7Ji",
  "key8": "3xN6QpMpoKseyGZeoqsv4s8hHa9SVpZ4N9cKzDKsKz18JWZNJtsWDGgRQhvrVKDWrxCp1S6TtwxfrbPcq2HhsStC",
  "key9": "4HFKKnGZiLoKtC2srnxMzU4wkzwDPBTMoDtDrJV5Faf6F5i1ay5qTrhNgjhi9bk4LZyS1d8GzALnYB5QC8t6TZtj",
  "key10": "3oK3upCLyfcmJfqWi2q9obXHLY2UtV3HVD5dTDHSYvk73pYZEwkR9D7PqMsow1GVuGA2bMNpKYjR1UH7BRNtbjcX",
  "key11": "FQcVz79w6Gx2xsSGzQFA4sLFuhoLrvATnNuXNNtRRcRucxk7YpQoK7A86XFGqNPJws5evrqAY291vWLRCiVDD2i",
  "key12": "fh5hYoGgyEnB6XHeox6hxwjwGpagNFwfKj9Xaigbs7zHAgnXKNAJxFuw5sWhF64zr1YMpVBeQquDnbPsgddh8kR",
  "key13": "52KBV8VjZ86bf8ipBcfkkKsubx4kjJrTJde468okKn5MCZUtwNTtQfEUykHef8NfMZSY5CNa38WYjk1Zfjamhz6B",
  "key14": "9UUoftgF9ButuqhyK5MEz4wSfPxvLx3g5scXEVGfesoyJj3sHSac5Qg4UBjuq1jfSgn6QLNyhUP6kqv8VrMPVap",
  "key15": "2VpJx3Tg8CD7QPDd6VGcUKcxAf7PqbJgzauJNYGv5TBBtcHQWcE6d5csRJbrsNNH5aTENiTtZHqcjy4FXm6tz1tZ",
  "key16": "295XbCC2dXi1SCo7Xf7vrSN9joy1oLKo8raj2i5L1tD75cQzNbKy8C11gnXhcmEsE1Ys5JPYECzYeTsAxd82oHGQ",
  "key17": "WG69gngo1wHPqz48FXnphabGgS2VpUBJpwoGUbdHgxGN4HXkKkhiSkNs1AoieetN87JNkf96cdjKK6bu5rygrxJ",
  "key18": "55vEGRurX6iw5EfZM4apaSdpYa5xx3jCstDj83DkZhCA1u4zo4XL63CDfLQTU1JZeb4deWQs6ij3Y9hD9CK1UE4y",
  "key19": "4vWWCXnaiTguCuMVSfpL9QhE7UbuRCwQRTMRPYzAystip9UWUDWkv64mKmKrU2nynPm246zxsFFhBjUdecPapu1d",
  "key20": "3NsHzEcNTmAuNuBtJzHyAg4vot5dFKRZMZEt881LbTeK5KBy1FN3MJmRbkvh2uU13oTPV5n3gCapMRsqqiGjmQbK",
  "key21": "39UsL25TqkRyodiKWtW86Ez9NpTwtybjc7aR6BgLNGYt5tUrFk3zJ6jyddUJqFhojyJGVoqakNxviqWhLh1KVMdE",
  "key22": "43j5zCRm2T4uky2vUya4pkCzoLJ7ukHuan4AaUmMDW3HJJ7caoyEaw1dKs53Z2evUHsADA2MTU6RtQV3sD3z2Hgp",
  "key23": "26MHQZzuLVAHHuqj1DHBRrXavEoi4EumeMx7HtPWX29F1Cvif2VLzG7WHA9KpV5yomjrESGFah52ST4vSXAgH3jf",
  "key24": "33aer1eGirWS84J36TGKS9HbxftkaCuSEjd7ZqTLUG5U2f7VActRsNfKPtnc95XadZgqgcE1hUfCJEs2DnwYJiL8",
  "key25": "2rYcroRzpx62GzDAoaJoK17AHHFpnXTuhHtFqx8wFD6xU4caHL2vgDiHRzBJoRwbWTrp2X1jVYj5dtwwLC4LzAmz",
  "key26": "5SvRjJLJm8H4nojWJSV6rBEg8pGNa9ff8as6TNNdA5EaRR7haAxvK5ybWtrAZi85T2nsaBps1kgAznVcS6bwnLrx"
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
