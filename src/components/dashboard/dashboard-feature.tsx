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
    "55Lw1mhTZeQ6CrX2KA1zNGxe9dm6r5i9TFcjxMYMkUEwAZPV2aLWedENBJT9XrkAZmSpJJJn3oDzZe77LGZSgRnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCSMrjSw1FJRtjJLtTCm3sFQexn9Ft4i81ZZjrdLMmsp8rq4tBjAud56p5EDSmTxw2WenuUCkRetUSqya5WDHV5",
  "key1": "xHvEvieJ7jNcDruhpJCxpXVd8bCShesnDUj83Y4NhNN6VmSF88MtEuzGpM6PFfc6kLPFT8YM2QukP9ZrZovPkMN",
  "key2": "3aF9aiSZAzpLXcjeE8RwqQJ3SDVXm1ww9iqhKAGqpLUaWcRN8hdSapAp9MjR2a4Cw8q1vhxqx5dwf7FkpqmebhXh",
  "key3": "57T6eELvV7K45RsnXoX9orkbxDZd7gCwGwdstLWrDLccBXZTyFdGfi2cTXkcUKdVcqxt3yPcfTJ7dWMFwe2nH4fG",
  "key4": "2D7jutDfeLJ4YMjb2c7ZSxSFPQLbfo8WqHwWR226S2JDFmtt2LVMKTRHSd9gaFDDx9jh7zw3QmA1ouWUbAN4UJvv",
  "key5": "5nFjcHQucgszU828SFa3G2HBZSwxbwrNWfzfrUcYsDU5ehrwmUxM3bT2fcBgcPboBS44YA1qhyc7JQac9RMpsT91",
  "key6": "4LKZtieAF2ySuhv1vxsM2CTXQHezwUmPsw9kL9MHYTpAuVtiDmH25V8EWPnHZKMqPernJfWqVCqnKZjm1WpUEa1q",
  "key7": "5k3Az2gX1XjijSH2K8XdMvHHpx2kxSF9WknFqghK7dRGobtfLjz3JWVdZUPzHTNPLj8CJ3RY92ufbNFZUUZQFx8T",
  "key8": "5cBy1cEKsig4bhJKrMue67QvbM5zHehvK9itVGvPh8PqDtkx7uYVvmMQkMETBNRVNLhVHTueJfx7Tk2GzeUeAJYX",
  "key9": "2pLHtpL6jf4utmjuJBar8qFRNeUEN2cK23645b5UbEasbG7khULshKm7guaAcAKu4athwjNEahJP335icyniB7Tu",
  "key10": "2AJfo1ChnX4kop6JNWxUP7fQhYXzBhuwD6NMb39nYdhAQvF6DpstLqCrm43Bbq9CFJZUbvdW94tvqLciu3bpqHQp",
  "key11": "5hY1EcGAkWbtDhGkc31p2Ew26pPwX2ZNXUor5ssSFBhJsjLERhX62o6tNHGeLZNv2sNxmkuw53gMKkDr1YFUcAFu",
  "key12": "2dXFdvwbWWaxjBfsnHW1gzX2snEC8xdiWPr7ZkLhmCyWwo1bSxwKH7E61EPwe6Hd59upXQmcVgGJEuYbB3FDj47V",
  "key13": "61L51VnyTNMJs1N6LcQVg8bZyVqJWzUXupor76wbjZ2GgECRwLP73j1Pge87jUd6ygkyW6vJ4FAyEYrsPvE7q3aR",
  "key14": "622b22WZUkiqyG6ncQr4cPEmUva3uWgj3aY5cCDsjxHHNGd7YqZhe1r4iLJtyhgnBYfR1zqSv37xVAJGTLbJmKcS",
  "key15": "2PSkahcwfitqSm7LpDTVphmVEtobSMp936UtNZijS179XpEinTKMYKY1wreeVVN4QPQfHkfxq2RbQseLmfWRwVVE",
  "key16": "64f3fnn3m4Kd17g5WFSNnvW2VbTgBZd1KRbGf8UiFb3x5MsNh19Mtyn1JjZViGKTACuCnje6xRbKfEHxebWM5B91",
  "key17": "2Z9vTRaNLH9HCruehwmJFsD7BwJ1Ftg2gCN2CRYDEfwYzc1Z87HK1rpn311qAFD2Xu7VPiGoxkWAaAPf4sRrhTRx",
  "key18": "EyRU3P9mt1zTYLUhbNMm85HH9Zva3ff5hk3vKqP5JiGGpzWKaEkpj7fiikEpLxH81c9FQhpPur4WcKb37ggrwsz",
  "key19": "3NEWWLRH35Q2QNjcoEGH8QE7xNbKKc7hCJ5ViYeUyvH3LwezedJUzey2LAx5fi2eooZYqnbcS6KBiRW5ZMgRhrmS",
  "key20": "39rKNTje3zdsBBZSpQuQDbLQDzug2FhLrfASn7xjf4XLvDdL8m6i1u3pLBHiY7dU6KmeubjTaLc8xj68c68VNM3n",
  "key21": "4MN3cTBuD597HQHanB5gRGTVhTZfyh7iHJJU7M6t8gMZbzdmheAtvX6kMBaZVzLFZYTsCvWH1AH1qeK89VyqoNu5",
  "key22": "2LXLfEcFW91jVsVRkiNAxMenhAfDWuStEWE2HRXKKDShLfdxG4ULXnSfeSMjboy38CvPu2x16pRp1moyKJ36y7Rx",
  "key23": "4uLnbUoSyN518ZuBL139zJ3LQXu4esSAQvpvKfds4VtQY7E1Bu91MdKxtXRXVUHKKPK1pTsQEUGwsMT1528BKRKZ",
  "key24": "TJjyY4YfQH1xMKDKy22VqDnagoi2wSLFY4BLwZX3J4Z3bYS6oFVp2mUHxKmAcb1tFY3srKDD5EQVDfiitMU6e1o",
  "key25": "QaK13rBM7pvGvj949ULq4CrspKmUD4865Qo4eya6hJH1Frq72QdxybgtAs5DbTgLh9PqNRo9f7xb6ZRRqhchkyF",
  "key26": "3V9Fp1CZ3ZdWtuPcpkzCCUUGT7JmMUrCV16Mdy9sdtfcM1aAmquD5iBveA67o5CgBCLQLdAFmuiXEqMdB3ji6eik",
  "key27": "nBDXbsXSPGhWBHaWSLqT8hRK4UEW9HHGgkAZc65cicaQAHC7KVtXLQDh8mWbR7Ud4iVcRhEwyXjGMC6MhwQKnez",
  "key28": "4Vx4yw5cVfAx8a6JHSBDTFknf4hwvCKxFREh4PVtdwx7NLZQJQEmZELUdNQzM7SxnxgrBVpvBNr6ofy8KHhKd8uA",
  "key29": "2hcjJSycgVEHQKbZRLco1MsYovtfnPM9je2dD6EdTmghBBgCTc69LMJVRpgw6MEG12NhmsMfmyUPAkyoCc1WWHxY",
  "key30": "41eBHjZeNYFEKVnRmahvnofcypQayYSEjUaLZpK3gM9xNUaStyuLttvQ3nx9qPaUYh2nBaYGkQ7AWpeyvn9NMxjw",
  "key31": "UZGDFp2DstxSdTiGQhwc6ZhWTp1adFzoz4nVP9ud3Nxbxq7euqPWYKpzYcoskeib6Ct6je4DoxSfwaTSKgppRsT",
  "key32": "3RBYEEs1UWd7qGdLp9tTTAjaHzWXpLx9EGfeqwuc4rGd5tKGx16TmqSLWcdkQxRYJAHAjLkvEW2dAJmGizT2Mi7f",
  "key33": "61iNWYpzFsj2KJajEYRckt4uZP4mkPFE5sykhzjEnPXHE6a2399SRMmbV2PcrLtSU1ra1GN5M3uPhXodneK87isH",
  "key34": "2u79b3HYyRQDhd4jDgFMtQHq23WZoSDA7HCz4N6YLcHJqPHKGYQRBdH3ei4ZyHaq8zYVvtuuPfvz9GXwKdmawceM",
  "key35": "5cspBYFEsk6ZpQP9ZZqb7a82avps5uXDFJSECnYCsqTjXpivQ4V8rJokgE8KSRehEftFQ2DVtuT7zf5e4FioneeJ",
  "key36": "s4RLjvFDhWms5Smpy4Bhb7oEbr8H97skVbsJHgjH6ADEX28DTHKEsJg8H2vEhKpaXetLwzDXSQ8ufvyeNknBRaD",
  "key37": "5d6RvJsLFTWNcKAMXD6xSwVLyc7YKAVwV4v2HB6fie4E71hcnbchGv2YwfH2HcofZWCkvLDoXVJEZhg6eVpmp51G",
  "key38": "2uuKwUUg1JCx9Yv2bh7wrLKfAcR1FEKLmgLv1aVRxNt7SKi2T6ecZzFJsENpq8yvkPivygVe1dWSnwPMCD5sidZf",
  "key39": "24TuGr6ccAZqkXBshk5ZtvrcTFYouL7SzsLnb6EZNmKdKipRhBFuQB4rimHAt5GUvyCRZ5BUBTEKrqFzgUgFFxSR",
  "key40": "5RoivHEd3RubJdmMkyrJcp1MwNDeWSrtLyP87X1epULwrope4dn99e6bXREb1XAsuZXmtR3MjVi96ypbCKr3XUQF",
  "key41": "49DraDm3oVWLd4YF3ga1aVdshMWG3VbGJ9TPevGCyWoXWGP9xDNBmXYb29WgrFoGBXQ1hkMBm3X4DzAwvqWsmfzo",
  "key42": "P32eKLcREpAWq8AcSk8vUSeHSCGpgNRJfjbWsoCLHokMXt1UZWYLfzHUPXMb2uJbCsuWYxZFhhoNdbeXyc8hmh4",
  "key43": "2aZ2LBzn22DPirvtuuMQnRkTvrEe1kHuKbo7aeCWwBbhM5wxwfmJrhkdW66fR7kqxsLHsKgaWRyCqoFHdVoyjRpp"
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
