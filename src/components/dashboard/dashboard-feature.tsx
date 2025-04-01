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
    "32mBDd3rb8JJh9oAqnuPSsbPDyfWcnmRD4bLMNPcc9b6U6crFJSDxpdEG1kg7oyGqg6Rp52ThJqtb5eqKAyfjTJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CDikShzKnN3qTmvqTMi1QV4VNpokYyq5MXksKRYmSEwja5roKjXShvYkpnRC6RCHGQHgi4UKbgVAexYL3TTUkh6",
  "key1": "2CjdGhNQkT3pEzmUr6qUbL47RhGXDbr5sgQc7GEQR5aeZxSHhKfwUjbgXmeEDwbUrzRsnRwWzRZoRAS5nM4j5pt5",
  "key2": "3F9V8QqaKFw7BTwbwhb2BezEhJyzQdagPk1TqmvctkU9JMjQw9pNfVRefAdZYTtrPBAgMqnoCbsP1xQEFj3LV93g",
  "key3": "3RDHJFTCFEqoneucSVQLcgi22Zmmxuqsbid7Xqg65V4KJtBM9jT7cdzsPukCDX9YyF9cskgTGQXSZZQQKph2Gbed",
  "key4": "2ynquJBLfMUsG1YTdxbYUsGJFMBbK8LmW6H5As11rtvF1gszdcUwdbJ4hutu3v6JZEpw7AHAwv97cmgtWWGms7fo",
  "key5": "39pxfVBLKhtHbYk124G4sA7hRaPMt42Q2HhAhvuMLU9JBcZ42DS5ej1qjXB35s9d3tDt1yRLN65Y8qXLR8yHeytJ",
  "key6": "ZxD4UjeMjrRPnWgThANEwXnxuWjDobs7JWPRD9fGAaacBy2mpxEotKZneVKDs9M7D6k5bBScVrST1h3sKi8Z2TP",
  "key7": "2oAwEARuqmXEdVMXsZKrquwJjk6TpmjfMEyp7R3fWyUKTshWD7n1RauZnpuEELjXZxe3eHwPcNTrdiyweujyUfRT",
  "key8": "3Zm3LABvNV58g2UweFWLqfTXAnDEHjPBxEAfsp5EArc4XCAtvgmGLooQxAGCKbivhdsmuhGSNg2srKsweD6dH7Et",
  "key9": "a8cuAStSekNYs23R14NwG59aU8ejGxMz6eSUao6x1mpNmQTsqUb1RtV28mVqWfbAqyjjcr835UP9FnpJwiyfREC",
  "key10": "3oMns8VYBrUrJws2QKZbGcpt5MzVFCRaZseGATrjqEMxEqhv7XnYmPeS5ESHAm45Te9cfeBt5Y95NnbtadyWivyP",
  "key11": "AsxJrxDJWNLusJ17u19nKgv7sNzPNyvNtTE52KLh5m5VqEHfe6SVSuSw2vmj57xmnUEXon7RFmRJEjEhrWkBz6G",
  "key12": "3HuJAN2aL1esF2W3xsHzhzP8FtDcJnCrjwaspp8v9R3GWMS74b8iKstMmMXEX3FW6aZUeaZKkdpXadfX7VFaQ838",
  "key13": "4rL9Siy4QaoNnj65ax6TQAbydD3BLpEjtmKaTNLQggPAuNtRJ3mCW3837eLkgFMjBzPAxJptUvmwyJUzScmyRRH7",
  "key14": "T2at6igDC3ocxeb8biKbDHMECvrFgjBNzTGnij1BeyVPKWEmfHFxJrhuobUHBcw62BATxQyGranVRhGYq5LXMkp",
  "key15": "YAd7DkVpGsnDAVT8yZ7Rv297tbKN4o5cG4du9uPhQUGVtBDCW11zyuZUitFXpJrLQDPQ2fiYTAzGMt6Qh8BA1pa",
  "key16": "2AYaFNUqN3YEug3Ae2JDbFUk32bqHwbR6Q9PjMuyGk4ux74ujNypqVZDroMJxQJytzu9usNBz3xJBeKeHgupFngj",
  "key17": "25PB35bGF5vhUwinwR37bPg8pfPb2CrXALLqZpcb964eQjegPpYDDVjvv9yJP1rppcWa5mZUL5XGck2gut1LDg3p",
  "key18": "3mGEYskyKq2Uw4EQQbtLXsaCvh53Frqaxr4tTQbRLzFDMt1fyH5WriaxEc5urBktVCsjpdnG8rP5Am2Q5E59Bv5T",
  "key19": "jx1TobU9BZRYU7MBCxxuFG2TckbmyJ13RbVZiKaDZ61Nvau5GkEAt5nTZzfm3x1ahrgWK1TPAcuNMzQYU9Y5Aia",
  "key20": "221wHX45yFMtAF7gwYgKCwGH5VHJQuMQNX5Led4zDm65kyDxch1wVpREF7CyVWuv7gvAZ8XVUmu3KZZ8piwWEWrY",
  "key21": "2PUUUEuUVC4RefaEpxxb88GqVPN56WTVffn623ERATAk5hxHQwKCPLBYTsvUBAFf7fmjX7cYdLxW4R2CD6NDjSQw",
  "key22": "2eXjoR2x3bnQ5PDFpBhUMx1S9BcbccjiLrbyYUXpmsvk7zFPx19Hic9dkuZfR4m4BCtfWxo4njC47at7GyQnbAEQ",
  "key23": "4SDW6XnC5ciDZY4khuHvFoPazfMUpJA3QmvVSL4iy5bU6Xy5mz4zx2sDe81L51Nh1pAQrvZJGDg7DYyonETKAmog",
  "key24": "4FjkZoznKZzrfgih4q9KTzctsALgQernSKYEXcjZoNmVhALanGTdWvANEM6gzUPgNgN7nbHWNkJERHwXSG4oDjTM",
  "key25": "ucxdpzeXQQM9cv89y6h9cTt38C4VvSN7YWpYGRndjFxvZu3HjwQbzc47uScuQKKQYNs1VcsynfA7BhbZ4mZ8Ne6",
  "key26": "2TKW7vvoEhTKMKMNi359p4x9qbzaM4B8WDgq7A1oUM5oCBjJ9beiXsK3pkWUNpbuXyhrYi69ZC6N67CAFY6p5CnU",
  "key27": "3FfRoixdstH4krz8BYq9YFVN4gTepUZtgXf2YWzyyPjzbgfRRnnBi4VxEVodKgRZisZMxeqj9zC3Gydn3dXNLj2F",
  "key28": "2svgTiQcnCseypVr9aMTMRCC6ay6CCag2NqbHHieEGKTkYjwE9fm1Y2yXYB8EcnV2iGrFS9PFvTX3hWb2LjNN4fS",
  "key29": "4sduGDfbYsoNJTCPXdgHDJ6Yi5QXrNLC5gs4cWteVpBJfnRH8a4EHV8RtNwTFjZ18saRY4RPpHrx88dXX6FaCjjL",
  "key30": "6d6GTYa5tFGJ8xbzQMyY3SMCw69Z9JSfZhu1m4QSgo1vfkeaCAxKzuGJguAtvMPrvGuyU2pXMU1htwyHm3Dwcdn"
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
