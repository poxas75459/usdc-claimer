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
    "Pf5Hydr1e5dZhZJmoRnmVUKHTgwUAMK8zW2NSeLtvujKugWJK13nuxBioQ3tsrVpTvMZLzsg3EAEzXULBkgwHtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3qJK7HHEvriycJDKSWw4784dvBBvewjHuyV817vL8RvczuXAg69Azo2ZLrwV8xzeHPk9wxf3Qh35XkWYcjnH9Z",
  "key1": "3ABQf9apLT4eaTBrP2xENDzTEXaVvmDuQrUvQejtsnaydC2sRC9qzF3r49aMQDuKQjx2QCxF13h1E22VXZXzYXYv",
  "key2": "4KawdaevAMQEvqGTY8LYG7fv3hQZ2RTjNd6gDFj2463quUmEUp9X23185GGoPmAeP7DTe9hwypNHahnLqD3ekc7a",
  "key3": "5Sm5pM4T9oMvV36R8Jbb8D6YbAM2nPsWb3Vjbt8Xc9fKF3zitEvYbqkeTjtFZ17WoF7kVMXEW2FHawyn2bEush3c",
  "key4": "3UwKvewTg83L4jyD5FfmryeTHZZjmNfC5bLb3NAdQHdU3YDPNHnLvzVdZGJgYtyEcMNVNQnH3uApp5d3zELpJ3oa",
  "key5": "2zDan2btbBUwYHCkUt3CmPmiwz7HEnnmUxnKnsB9o1VYGUZepzyTXDLD1BbLur9RYNGPdvCpm2HatAg1hyxM6fZm",
  "key6": "4ktk23xxTVn4cKiGSEB5do5AS68wCTs72s5w3hdvTPzrapxxFqPG9h1NS45MDwWjcLE6hqEMnLEJgRQD6HsxZ3FC",
  "key7": "4wU2XpACpbGLA12HkhFmYLFrkfVr1aGaVoYbTUrZMRVcCEwZE7kAxXJr8YEmn7KxEyW3TvtvY4cYuy4E1uf1EdNU",
  "key8": "4A3h58MroQduei2MkYY7ACed9nsNfL6tEvN4Z2GxkFNv3V9pRpyxoUsRRpXt2sp7F6xuLZfRkLd5QYvfDzMVX8yF",
  "key9": "3Vczc8Vb6k5MqyHEjgJQRzhz6Q9TeVDXjxKXhGDLxg88HVPfTnVWHDtL31rVjWkJjCPiMbkn1hYywbRCeWm4geey",
  "key10": "5yNeEzbotrQJg3oRnP8e2MQwcyb1hPamLzSfmXSmRz2fbWmsfxH2ihpDaiu5vm5AzoioF7VsniMTFmy5B8UWUQpZ",
  "key11": "bSBM8CVXJxsXqy49ABP9WAW2AtRTq7qpP4oKHrEj1w5AbWbSNYnZfdqsVYRRqemaLj3Lgdkosf6nn7HVx4RtGVj",
  "key12": "572RPFJoPPMBH69Q5MhkTfkPssjr2B5o94LHj2Xo8diFNWPFXxxzUfTVg4xobfVh492iVtyBv5XBCh2SCgiAUaPm",
  "key13": "fx7F1i32v1uTT7hnxziBunvfEAXcmnGnaeP5r7xWCsnpcnWD9SLUXEkNKda7nrxQToWHNSaKZPS5YNR9nXkjj8u",
  "key14": "3H1J18nYSwYLSfu1xi2Rm7PL96RW6n6QrgPfA1M5iHDebyVjBJpJXpenHtdiGKG5GGjiCNY9RVUZb5bGqwzo1ECH",
  "key15": "4GcYW7Wc3RrkBCZU9EYcEpUq6u1x8aFPZf6EicxeT2hidZuSHpt8wyHZaVoSkYDTHHYznekeydaQJ5uGxKkJF49t",
  "key16": "2PArfUtmUQVZe1Gkj9inhZdhX6kRRhFBAen5CrfDj9HqwfW5QmVYXE2KbMfW6ztNo4aGD5rTKq9rrKHis1ELKZ2H",
  "key17": "5fJfqqCA5k2VmyAuCnDHMJ4xAqNbATrpfZR2TTHNYyD5ehVKmpgCv2HfNV2ik2UdW5nQWaHmG68fjkb3151euQp2",
  "key18": "3d2k6UsC9cy51keevnJwnbjacjJLZo6Se23tQiWYMXfah9FH1QoBCkXNscsncwQHmt85ZAWUftLuRgCrv9afdbxW",
  "key19": "3qfavos5gu1qSag5qymPNZrKAw98EFbQcWzXwyx841xp2nDgNGUHdoUPnXLK5CDgHb5grqBycregeUyovoPiGzm8",
  "key20": "2bvwpwcHJ2PUt4qj61SUaWBNHQTTNiXWPKw7EgXu1j1VDPAuyPUwhYBBxLLvn4hBxmn5c63MYrxmZEqTNqMZCsUj",
  "key21": "3PEU9WBQxqr2umCQaDZjwHi8VVopwHTMyDnHLQoAzXxjatujrugqQXQV6a1wNKXNdy4WVB8kKNCvZR4bjqfecjYG",
  "key22": "5o2Rp4ZVCUpUwa7UEmPLyEGAfJ9fupAKCMwXqmB2kodDNg8bLrtJy78kkshgFjG3krSK2cPu2S4YHtAnbkNMSY1v",
  "key23": "662cvRRamQCP3HNvxnPXkEcoBD9f7fmaSMVXxN2V98NszQVLFbQw5hJnY5i2R2NVbV63GZ6XVJBppwqzuNokys3z",
  "key24": "3N8TozP1W3m6FwMAwpDVSokmafLSoxani74VHPuVYkS2ZAJfznzwxKQJE7zPsMHxaxEkRiZSRPSnm1KmRH2SGYa1",
  "key25": "6U33LpHmYFTLnsg3iPxZiBs8gwHVSZhD3Vs2G1mVaobT2dtLUzTHbbP1ASTKRXmP6iHJiDZRjbQtKPR5aRUZGXh",
  "key26": "4g49z8tk7m8mo692sndjU77ibypdVqUQyojZZwKiazQMRLYF6tguUc3YqVf2E7wpLsRG475dCS4UVZoDP9tBCG3g",
  "key27": "5hLg3UVgUBBb7M9VFW7yVX7HFMh4h1KsaECX4BaemsuAvxQapcFkEBf1vjP6JSBvsLx7sxWNjrC3BPsPWDFZyJWp",
  "key28": "stVJxMdpqBuhTBvqf7JzYPQvYVmTpY81U3pXa747xeKKUTQj2JdSiKFy77EQT8hKhFiezXwE2WLyAzdVwuHaumf",
  "key29": "2AWDgEPCWeFEMCzi8FCZbXXnXZem7iFHd7YG3QJeU81fu6cZ2N9Ax9ZUwuvWjHE7HeukW5UYbexjk9vf56nQvWfw",
  "key30": "TkgGt4QFYP2s2JMdHn6or82jQX8rgYrpZD59L2ssMPeLcSAeZgWTYpRBc8AsZXmqtQtBGhpqHHJYSoBTqc1NP8s",
  "key31": "5R2Z3nmRZYf2CuaW2cSePBxvTG21Pvawuag4XfZg5KoJrq79odcM9KXWm3bgu3woFov4sLeiNfJy98iscmDsV5Qr",
  "key32": "PoxCZ3YrVYResHoupo2TvYn8UWykAeKqQfMUyrThsXYN3mWzbkceWi5ok2x3fcgfmNwFaVeeabRMBwEKPH72wht",
  "key33": "5avidT5io9zPtZ2xsniSVMDtd6v5Nx5erMxvgHSAR54hav2STK2k1LTgNqwMK49yy2VMjJqNGxoRPPX9Qxsp5bjn",
  "key34": "4uMgxbUkB7i9xEsKAXy2uUcDR3k3EgQVFUihF3GgwktjmiJtBiXVwrY31Y1QGrhULTLnGWykL6sXXioE1R6xKmXZ",
  "key35": "49rsf3xwSUZ8N3hxbSadBexRPx27F7EjUcToJK9U7wW7Y2AYvzLFZDL6WVsDPqispAAQocCUgnTr97NA1gsGLCBe",
  "key36": "5GGeSLjK1hasaiooce4ZZpJDxVBEB1vPCWnDUMZcTCfVtcweCyyHKSP3aUyi4qVvNGNZXVL7NucJZNPAEucHRsG4",
  "key37": "4UnXkuhhbTPpdsnwoq4zMcTFJBio5R6TzCcA5dHFcskiLkjQ368V9CWvndVsLwm6vhWQKTZNh63B1rjGERKEmPBF",
  "key38": "ZoSAuRQT6Zdk47ErC1A1jwUm3mXNzpqh3MHcZPCRxzZuivRNo5rV96zzbG4sku5gsWaPd2DfUmrZuJGfzDuhcsJ",
  "key39": "61ToBaYs8rXy5Zr2H8XFudvD2g3zJWLN7RKSBNibFEkx618xqQ8pyGFWhbJPfti1osHcPiDWpk4Ph9swegrGNmA",
  "key40": "28UAWGL8zQ9FH3TirSDnTeiS7TPjDzVDuXs6LidD7hy3aBFZNFErUQNHtTcgJSuCnGKRrJM6FBm8cgHLPoFYDHSr",
  "key41": "EWrCfACEjY9uiB45qdp2VkKUY1SXz8mjagxXM7MhvW4BGZMEDRAMyEMgsYJtKVCQxa44tW5skPYGchp2ucstcra"
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
