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
    "26KH5R6MHks59MHCBLhRaDULfNHqwjYayMxCknmZVF6Kj99gbzNFvhJjMdcc7pnB5XxpBgfz6nmiNrKk5HVE6jtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQtPrkvUXcF2sWQaRUteD2WAng9PnfQXkRVMEHvyqFpAGEsm66ffxNBTiGAWWBTExFhMNKASMNn8pJDZzxpLcV3",
  "key1": "2b6x4i8Kic3SvVPwTHtzEK4NgpHxtdZxktLa2m7tqinJrJmsHe6cqKhgJUc2HzBDrGsLKC9WsZ576nRef2SFgWGE",
  "key2": "5JAAfSPXy8cUUDjBmoY9DGa5Ea8NPJJeNPvfyy7GUJFascoCqVU2UCUcXCUZn9y88qZqKZ3GZjvu9gBVWon7k2NK",
  "key3": "UtCHnw5zjEun23UZNqfufXFEAFGaSdQSNm2wfiTigWZYLK4TP2GqeGcqWpQrzQwSZYmiteVt6j6wSoU3YxZf95M",
  "key4": "3CkyxGSMajdHqgQHMYyY4K8xfFbW2aQaSAF2LToRdh6adqu3FyWNFThTj3Av1NcKuEK9r3Vfp6uf2ryyrineHfVo",
  "key5": "52J8soNzBipxh23shg5qS9c3bDYxfoVtDyXMG4GEvCgtBEa8wJQxMjrvrBtyuWpxFR3QhxwFSnwgcyWSDFKx7U2n",
  "key6": "3wtfpye3Hbiv38ZJLT6gU8AX8LdAThATrWC24RsF4SicVHmzy4PMBVgVv35ZYdgmD9oABSeX23yYknxKcNYBEcwd",
  "key7": "Sa9yhng11iBF6FGK8kYmv7EppjkFbez6VmnM3aFJxEk9hX3UXYoBd9jjSekkkCevNqLsmfr3gRP3xJxD6nru2o8",
  "key8": "3118DzZCNAktfoWTrNThkeefkH8VbKxHFUAnRAmsLNDYkoyRWY9k8aamiBmPax5xT1rTBjC7mEoJJzgtqNEawxBw",
  "key9": "4hPPbAonR63P2PjktKYfGEcKtCn8U8j8ZQcvo9YEfGAgKoZojL7HW3Xjq6QfYHQp5EWEqKjxhAKoM74wXgMiAgFz",
  "key10": "425Eacx5wz8Y5DU8wEeJs91Xvc3XMkKd8GJeb7poj4q3MHiDkDsw4LoZaDAZjXLXcqwJBe4kHhM8xEMuXhfaBUoy",
  "key11": "3sBkrhtnMkrCRLeH3pHaKGdM1DggM3552GTDK74ZaBQgxUZsfHbNAjGPTuGXRWXx41yhP8M9HSNB8bgRp532dPpV",
  "key12": "5Pj2C7d8phA8ThXPq7EqQpZEConkz3tfaaU2uMvGvqP6btu8LssW7v4ByVs144MuZKqNZQ5dkrJYtQj7S5Q6npb3",
  "key13": "5Uxg4WrGzySJbBoutDNirpMfB8gNXHZ66Rovs2td3f37GDXRB1PBDhURqt58nw2BLiBE4dN4s66mKpnqW4qiatBP",
  "key14": "281enJ6d6xWoGM2LAfLazNHSSUxPbrfgvfc2YHgAvwX9v6Hr5tcaJZADXChaqHT1pUQwgc8Tmn7qkn5dzaYhsW6o",
  "key15": "4ZG8gPJDDAKRjoesnCridGSiAcYKSmG7Z7eg5MSAfpprHgTPVgwVh2Zv6tcxvNnYLbnLhrbsJAGr2Zb4i8idy7m9",
  "key16": "2PQ8WG5z5ypCzzTSDArE7PbfMPLAj5XK3zD9VASw75BzWE8mFYd71Prs6AKrLAxAwAWjAo51an8ZLyXxqPWVAK8U",
  "key17": "4DEbJT96oaW6yyNJqoUcLKYu5waiWDfUALmMuM5dacBC6octG29Ec3b2hgbdjLWA1B5jvze67ET6wVqWup92aaer",
  "key18": "3nh3LJwnmU5W8TdvWAe6uFj2kr6f83mA34tAuGW79Kae6ugXTyBZqHyinHAWAYvEEVXTNkBQvTHUkh6LBLxjaL2M",
  "key19": "62vDuc3xKEdKWhgH2QTdoxAKfvo1K5yfT9VTpneWo1qWPPUX7PxJTusp8TNYBQjALvth5AQe28H7Qh5DWbyifLoE",
  "key20": "4hcFWukwEcf5ks7Uvjiur4r9hpBKkfJfEo1VmzwDgGmD2H8usEYo8MfkjTAx1tEQ462tRXSMKsg6YeghtB7uDLZk",
  "key21": "5j9NXm1TrSyUNoBSzAwfoQD1JteTYtHVVVASfHo4BRTqNENNbrfMPPWBa1xUGfQSTLiwC6G2zrAbiSe881RCS6mc",
  "key22": "4hvUvckB27veryYsAWQ3D2gS6YzMYgXUi3p6yiUhYbat3HCxr74yPVjPchdU3GXKWaRtxJo6BGiNwZkNcgZfKAXe",
  "key23": "5k9g2P4FFMT94ehncEfgpJNxTTjVwZXxgzJ4ksiXn4cKVtWFUbGdgzJnXnqkVC75vFEpBpphpRD99GH6zGAVds5S",
  "key24": "36WkLZwnCSM6iDRXhYZ492nQxWTtEZAmcn1SQpRYUVqdKLSLHhT45dSF1XwYR3WBS1kTxZ9sHGez3MacNDVPKFKN",
  "key25": "2G7s2vTTP1PNDcKjrKSF5VY7rXs1Q8kmL9Chc435iYaeSxXBSGNrnez3WaZWz6bnZ2m6jGSEcQ9CrFmGZuTmMsqY",
  "key26": "2oEbnoAX7mPFfLeN4ueKxtoy6gjftf7kCscdkQkRJDEFMj4gEEHstv94QSzBuoDaivJ9i5gDg88NrTKUuzr8Bevn",
  "key27": "jwquBb1w3pmh7u9AT2YWudEN9VYfq99LK9z5Q8toeQxX6jGt1F27Jm8pCg1G2nSyk6NDB9NRSat2xL5yj4hq8ZG",
  "key28": "45ja2iicqpfj15eZ8DJs3S88i6WQPzVEbVfBLBA7qcynKgeAT9Yn1cihGqXagegCMG5DkY376BLgAXsvHPWo1NXc",
  "key29": "4nEK2v9zL3B6AXYT5eNjrYa1kr87kwTAACrqsmsYvQ6yvSnXK2C65fNTQR4Rv6xqRRB4Mk2ttb6NjfRSsiWpJ6qj",
  "key30": "4h9YN7PEM1u4JwUD6F9D7MVS5FXySZQF7nqR3aLsjBwWzonh8NLmCbYxn2W7Xt7a2xMLgNjbhkWDsH45niiDnao2",
  "key31": "49PsTenVGBbwh1ymsNULezC1iXWDJ9w2dEUqpyUq66d8YU3hrNknEu4LjCZgCNh5DZVgPPUmHedNrMUSufoiftSS"
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
