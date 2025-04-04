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
    "2AJZ4UF9tkcn9oBwzjjyPZkQpUX2FhqJ1U5UgLmrWRe3f7ZtcWDzqNFhb5MCtUcuPWY2FiyMpjwDeqC5Ja4i4axz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EwvGRoa1qwpmsnZNQNtL7qkMRbVT1HXpgJEJFBRX4DgNULUBuJpL8C3otLqgSAcGgJBkKcXnmSeCWyDJcuVZzLj",
  "key1": "2qJZwM1ZduoR5zhsCjvgjVkqcPaa7WUKGYvYyBju27M29mf7EuWGAbPwD5vnhyVSnD2WjVrwnfpjSAbLJEHkbuKg",
  "key2": "4628KCuwsUc6zNkJoAHWRjH4WuH4wF7kEKStD83U6wpDSdNPttksrm9Ca7jZ6teEqcqdSYd6PuMfioBbc4k8X75V",
  "key3": "5szcVMh8vT3jdz6gSS6RNgKzVzAZJmMvKoGb57mS2SwzTgm1fL3JDLEDcAscEkJ1yNArgGBjYpP2XEpCro69DRUJ",
  "key4": "3QpxLGqKnnAKmNqjBPnLWjvrstUNToSJgzJiRgs2AYNrPTQwpC2zESMoqhFBPebkTv4LtvwAzgPkZLH6Xo1SzT9j",
  "key5": "MGeC7oyRR3u4mLbDHm32Jvs7uajURqs3eE9Pb7oeSNXNA8EuLKiqkNF749NFjuWUcdY3rCvb1nYM9vHxVsTyufu",
  "key6": "3vJSaGpS4e2b6FrNs7PwiKXuw3PGxXBuoo5tgevkPEiEUUcSruJFfLP4CS5LDtBWqroZutaUpkP196fACyoFn6f2",
  "key7": "3fd1RhrBfd17H4AtoHeJY6bn2xNb2Rz33GEwuBKbgSZNk4KY17hJvbW3aFTvWdTzbqT6Kk4bQjqbAEadjTAxGrkw",
  "key8": "4FbBA2pjnFJYRtLdJiXB9H1MRn3JQcVifNEy6a26RT2uAbH8Pj1SoiQrhuUtpCv85L2ADNARyLACANqqMntUz5Qg",
  "key9": "2wKPJAzYq6PVd1kjJZcX7rrXsCN2Ssmfaz58xXZLtbFaYRFzX51XgKKbDRJAkTPYDGEQtPXA5WRZdECibo3EBbKE",
  "key10": "4yFY4wKk8tbgdoEF1S5DJxb4DWb1cwV3W5KnRSmcwcE8krQ3mkLkAKaRXGCdzq6U1jSbNKA4NpKcC9oyETLpieKK",
  "key11": "4B2sBnGXqvNX3mcqb2aZ7gLF88Xk8mZbW8JyW516UQsWBCfqyGYXBbWGDDLxFYdwXAo6F9eFn326CxByrGUWKLPQ",
  "key12": "5dMLGS9LKoNocgmY6KSfR9dvuheCdwc93XVuQaHMxnw4RxUdP9pbZcunFqunNLyTb91PP13TDTiAey8KfSa7dgPg",
  "key13": "3n9gUqC6rpFY9z99oA51aMzbt7wtXGprRjXh27moeXKm5pXApCeC57r1f6F2haRfvDoSAT6GRVCwyXdJWFrTcdW2",
  "key14": "3VZP7DPuAxRscx8oTLajdrr3z8p9JWwPp2dhdgiZbC23Vt8bERvUcYTpeHnVZ7ZmVEWnSPcVHa2xBLWnEWaWuKEG",
  "key15": "2xyhkuD3MrzwaM1WfD7GJJftzG3cjr6NMhcani7hiRSFEK4ER8JLSPRBUQbaV8ssTyvH5jRSJsWKPkagLVou3U3q",
  "key16": "3NUAGnSS7gtvssWXN8hNrUeEB9c6SNcgFYC5fW7LrWz2S2swyuAwdwVzLgnbb2fA3fQsd26epeZAs6iifLm4Nx1m",
  "key17": "3bFn49rZkuX8H2EdbRgkMAfZdJzwt3JFbGTMUP6hoCCXVyhDvbQrT5Pur8crsMrMoLpLjxhXZMZ4Zcmvzg4RLHhH",
  "key18": "3ist66UDkVqa63QGH8ScH3teE9qWpxht2J2G26CD2dQSe2vWiRDJa1bmx8zJyQjxngmbGTS44aXwfp5De3jHK3YM",
  "key19": "tpUaPoSRYKWhEn8xt88e9Y17jjMt5mKe5ecicwXWDALw5qX8a2GioWKL9ptFhFtk4J16CpSdMzVkwZQFVrgpQyH",
  "key20": "3VRMFkpngA4RpzpgJmupVZLNZhKoM9A3E5dkrZgWBa6fLsMbuDkkn2NPWBX3tTaDYRTrShqYv4RpUgUAGjMoaZHc",
  "key21": "4XPqm1mg9pdNVJjYdcfJ913ZWSCHC4Wsjp2bTCFeCyq9uqj8e6XJewVnkiLrzMtTYXDPCWxS5xgf2tbPNJgoAGxW",
  "key22": "4DWmh1vB3YnYZCVb5zhJwXPTfnYnbaicMes3r5tMTiEPZGwJThkdsxEbey3PpdEMkHDVzEhjxhDrCuwxZe7DG2cp",
  "key23": "5zRvjp1XmTpki7MMU5xmMUY6SwzR17LXdZLHfR5NfRgnsxiLG6VcZxfoGCzy6JKN5xJ564ZfTPwNTNMNK3AmV6N1",
  "key24": "4HjBGGKUrYCHT5htQYTL2t1pizPs9LLBGC83adDihVyCJPmMwt1YEgauPXjtFFVMWFqpaxSZHDzjEBPziaAJ2Tiq",
  "key25": "4noAYmLPCFH9B4Xkuf5ZtRzC8wXtU6YwzUX6YSmf1EjNc8M4VoUDvFrgmnFtXN8zZPUvGXDxVBYYWxH6uEtUUQvb",
  "key26": "36XQZqudH7YZJZVK6A1rJbEU5fk6juZLysRZX1NYX1PjK69K9DncJQDQi1GRAogEXCyNzx3UnT15thxd3BUUWrAx",
  "key27": "nmhrrTw1R8g5FGTFsQhmvu23Kv2q2A3PK6rj9xkq9myFWahPAjdcjtHVoGXHAek3mnyyZyipCxToVWXTMHi6KTN",
  "key28": "pfLL5AffJhuYMiCNM3TPvK2G3c65SRgXs454k66PCboapo7kFWNwpqXUaAvV99V9ithi2N7nKyhkWTSuhdmb5dc",
  "key29": "4CWk8XQ8UDSV9HcHQ13yhdZycpRA4QHSjqaCAZ4LRMy24nZekXmiuKmRVXPydKiM5zTgTMh67N6GyF96xVhTP4T8",
  "key30": "4zhASmDJ1aM2VwibpNf1UNco5oF6yMnspRfDnySXseX9W1VL77zyrT6mBW8Hym9RvWGpGLqeBFEZCiFgKSWEzutP",
  "key31": "cEDMK3fxjuocWAmf9VR5Upc3k2Xbymw971oQGnStZXH27fLne37WdFKghYHb9XHU72b7ZhWVyJLaMxC6tM9Q9CB",
  "key32": "3igHz9Fj3CrXCsbphRTMr1i5JgfvGqGE6bsRWz5yQDcFFKgEuBd9auieugELEFi5iBKrFaGokRTTHPi78yp7AbJY",
  "key33": "4RvwUwnx7M54YfYEjxoe4vVMWPtu81EGHeMnMTpZyvBfuYfZErenxk6R4HqBqPzR5Bt4XoRD5o8fwFnYTYqHBj5c"
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
