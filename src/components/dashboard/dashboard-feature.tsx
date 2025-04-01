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
    "5mzQaJEigCzQ4QMBatZ2GTmXq4JQPjchbvWPGtjKkZmiPTmEDAYW2UZyYTWXrDQiKujVuoV2cag9xpYhg8Tdag85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kn3ZvNjWoFWj7uwdkeYrnw4gGUssgpNhxBDNYv474r7JR9qVGxaU3EJ9ECWtJvtShBsZfMWk8QfpmpFevPMoNgX",
  "key1": "5Ud118tEsMvwTZ9B82bDpsmSBydf4giG6sdNeJs8Q73J5HQ2GvxPZLjwatY3KGvt4e1tbqqA9LZnKHEgRQCeuHZ8",
  "key2": "3r39DGugtbkbcq8Lf2LpqMTR8WXnnDUGuZ2p4mdr4zYpXeqSt9u5medPWdq4RavtNzzBGAXhJBitWxz8dA6Jhjb9",
  "key3": "36Yt5H7K1ME3usr5nqRrcff9YUm3DK3SAsWZzycPLAgiZnQwads6tGV4iN3XW84tVViKQaAhGoGWh6WvU8ay8Hq8",
  "key4": "3ptq3RbfdVszm8X2mw7uPwwcp9mjeJwrDvPjNKG4fAnnc3cPLSx89bf1LCVeVRrka4hWpX9wLXPyzQutuG3cHVyB",
  "key5": "2SQpp2myFDhEJa8JeqKknYp1DziLQtYQgQ3Q5ydfrMLFHop9o3ssHw8TjknSva5ed4cmzBQcG5hjB9nAKfK6bYyY",
  "key6": "5vJxtNmzPtvNV4i2Po9K63NfBzwBXrq2dBstN8ABTpH5ojZ3ttqruau17R3pR4LnJWgEnCUm5XKdReYDet47fuE8",
  "key7": "2AuJrVKdrJrN5WuCDsdAzj6AHz7uNUXwcccYdPdKotqfaVjsEsM9aSpYbN8BQkhBFYL71ZYBrQ9bKpj8eccARiFx",
  "key8": "LQM9i3vuSoCdgzG9H4owduacMN33EoNkFGRVQefCqiu2e9vqXN2SqiZ6m7hZAEFXMmYFTDJEwLfc7a2rBg3zD6U",
  "key9": "2PMpVoYJSTrso5MVfA5VKtP4q66NqQzk7UrsdUNAzbKyXPGfraUeQUqA6AY9WQd5bnXJjwHjDudSeNQYNif5AAY",
  "key10": "4dCbYD2CCLCaqhkkDHuDhP76MobPJ2caurs2oSJTozeziMMM6iYgGisHgVpmU7cK52U5CBqAvoxPZ2HdwipNQnZr",
  "key11": "2mGoo45DWCLcAEjtg6ofL5gGZGEx2xHzMaYQ88bRo6iczJuxB8fC4wPdZXoY6QygB8pStXE6Tu4RFb4CcQjmdLmB",
  "key12": "3ascttAJHWvBA3Te6eU1b2rZTnjTc5EU7He2UHdH9Vqhn1WQGiXVkc7mkRMcuWr2zPyxRqbjoqvhErVqsqUvbf5A",
  "key13": "2dzBpirUvnRtbU8P7subzzJFPFpJ6nhAXwd2C4x51U3KwM3VDUbTFVXCKA6gaDXX2Gf5XvZLWJQayPNP7dA53G4G",
  "key14": "37rexGqjuEeL8Fgsb3LaQMf85N5zBPySRhGWP9nUkKGM1jLijkLWiJQpm97hpf6VsbVqo6XMcRPB6awDhkotkoHm",
  "key15": "vnxpahk5gr1ZD51dwtRUnApzGPnKuCcxRecNpdJVHNPKiGka4ZEGguZVbwjNWVfxqKvnx6J6brdKLiBnKjCJLuK",
  "key16": "4u8EJwb6CrbZ4NdKSk4VRo76h6NmcDSRhRSPmZQTLdGCay4Y5puECdKAsWfxaVpBvYHuu1RCqe7uJmfHyAFxectV",
  "key17": "2DbCPJby8TmvRgyM7LKJNzgTBwWxSRTj4uhZ8fss8Jtd41kxyuseBa5SECmVAv2vc8a2hm4sRPkGT1Bf4fDg8HFD",
  "key18": "4wr2kMyQ16BBbRF6NJhKH7zS1XBQMzYkfeTJ1bBpHU2A1taztVAhUyvFwZtvEKA6he4AaSbu1SUyvHpWXrNJgMZ1",
  "key19": "4xanFSA9YGH889GuUwJXkSDXM9STHugJUK8cDLhJWK3kMPa7dVYzz4KWj5tLVjBNHpxfNR13m9Q3pFKxF6JujERw",
  "key20": "29HZ8QJbEu6RQJr7py5rXmCYLGp1QJPxA7GxHxAwiTX9JrdhwEQXrN35yxJMRN2reXAGgVUKxruRPSnNEURiYpKj",
  "key21": "4hSBkMw1o7FVKAdFvhcrXqLnyeYC2Xq8Z41RHLrsoC2r4cAHxzYopJJavqeNWho8mUug1qMXyTY55UvLrPioFQra",
  "key22": "X76uMFy37bAwr5hSgyRoQiaFEVZURAUxzp3fhgqeUT7TUKzEAHTN3nPocDzYxB3GyofvenMzQ5ea4quHwYS3GkT",
  "key23": "5BKWs3uYN4gfH9L8KhbETQtc915yoaZT2gAeXQBYLmCTTEwjoLJHzYVU7Lsw62s8En31eZHtWZxcWgkKeSPyK9GP",
  "key24": "3CApheNyv5d8pnMUDkAD2zKm43hurSzuxp56TkBphVm6pJDUHVUSQ8jqkMQ3DkFoSvnwmpNT8pU4hgaXDT6ZWGQn",
  "key25": "4F25DWqnqxKdJ5eDqEgSHuyLhUW7rvtC3zSqTn6V45V6c7ZXXwXYgv5ZfqKN8k4DdYUBTeaondQTzW9ekimnYqpv",
  "key26": "v2Av2mgWH384jYtYYLkHonZyzgrtzPjU3N4aGxLT9JTA36pcHewvJYuHZufCxerF19nzJeNYPS1G8GuZLA8PTHm",
  "key27": "2oCycq6x1P2neindBg5wewoEkRbPgVNzXjxmy9gtM2CiMKmV7bdFCuptwxe5yyBPofB5y3iiNTSzuBTZLXJ81Gn2",
  "key28": "5SB35LpY3MoP6MAT1ctXgBSTR2rWDutco3dYMAT85Qbvh7HnERFevL7HFYLn5xdBNM1W6fTjgYSSqbch5eQAHJBo",
  "key29": "5sadntCRmy1aCv5d59RWNVC4yVbteuP98ZAepMuPSh4G7hiU23V9S5aUwtezzs6y2D784DMEti277DMMjEhVeAjP",
  "key30": "2ZMyK5qTvNe1g8E2qfnULnosZUpxRbNZqGA2ggZFkJcsEAqpuqEsxYPvJNqpLCSy1hRPtorxFgx4fSSXT6k4BXUq",
  "key31": "Doc1y3bdhsVKYZoMGHdJbBEHp6k7DrUuhxNT7ECK4K6ut4s5sH5VEiE2pKNowcmdQy7YDtKDjoSUFBsbZrhoNfV",
  "key32": "qq6C8w4BjGscy5xME1DmHG3Qpbe1sHQZsn5KXBtYaKb44HWAN9ofATi69Cr19djzDQnwTeQk4iPzg5YeYe1ryLf"
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
