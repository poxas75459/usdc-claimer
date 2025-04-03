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
    "2KjqXuHQxEfzZwrunsaifW6UGVUpe96n9TpymBVi4jjiKtuKe4JPsZrQc7UxxoG2TyAx4ZfKUnJqQo1V417up4Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGHiErEeUjr8pkomgDaHNfpq5fRATjirkcpBamuUD3SG6ZezqVLeS2XHsYnxeuvtzQopKLQJKrckv3XabVAhXjk",
  "key1": "2gGoUbxtTYKdrQjFZtpUZh6CA9C6RuDQLvi9civpX2iSFVp3pCAUodXGASPAkoYnGARSEFVTwekqufbFjCa7gJqS",
  "key2": "3s9DVJSywj2btXLeAdvw2uAYEJD6DnU8Jcf6JshDSZQqVuBN7rKAgaZHVz51JPnNKRZA5kfwTbzyTxJ5iJkmDcj4",
  "key3": "4LrhtWTJJ2hhhk9sYnjFTvA2x8AdujbdApT4haCzTPN9pip3fQgXKen6yPQjiE65w7Nz9dQGpbMFvid2UKGJgK2S",
  "key4": "dy3oB3xfL1ZuQrSghSknAg9aDVoWaFH7DLmUjTNsJm65VpCKsWVB65LN11ZW4fkTNVTDjgFue1Q33icghXQ4QuS",
  "key5": "2ywBqh6H8KrRTkpRNvcq4YfRnwXoMTsnguTf5AwnBQnPg2RFVg9NQ9NH4R1tJ7otQH7w3JSb3zLMJJib7PXxwYK3",
  "key6": "4zyUpR1xSMN7u3L3diiMyhryGMEjKDafSfHggMR5hDhYx7Uf9SavuFbT7xtw2mDrafh34bnpJZ6ocP1K8VmQ9VqJ",
  "key7": "uQU9Gx5DpP9k3qvwzcceGkSFMhx4PPMbw5NqehsVsHZJeFvvmnx5PBnZszNG3wKDWGfZN16fMnaZzYUxYKwnmfu",
  "key8": "5HKQG9UqnHas1GZkZkxxkb7jwCUjHfk7WJhP9UXkD7tjrymEzCgoemCdt76EQCqoT2paTrDJbJcM4GNbQNze8UUG",
  "key9": "rmFVCz6aUcgA6knPagpdFnZDFikGNwrHW8N3YaG8MKd16TvhetMxaETmC3yjDr2pHzUgske2asbiWH9rGRypEEq",
  "key10": "jREbmLcgC6dPgC4rV5A4rqZewpeFVAbWq5auwxot3of1zCQZLMR8DTdx9sfmdZzJeGx4GpWVah2qeeRPqrthge9",
  "key11": "4uNYiTDi5gmncNkcnNxsEE29PjiPs3EeQfbkhpgQyQTMCwmT5wEwaLnwp28i9R9UGojW8iNpKfRWBokHcf8YQkBF",
  "key12": "4JMhwSDqzqiVdbAkwEEebgXtGvWmhzicfQq2eyrsw2RiPX3mu5EbpPFa1BFn3K2UXspjfnPTtZKSH4EP6w2JHp3b",
  "key13": "5oFmvtiywcySENjB3GGMbTnUYzwJDw1k2EmsJLij2NGPUggQoUPNq94nPnDBbkQp2P2B5HmSfngGCTBijVqPG33w",
  "key14": "38dwdTTBQcAtzxUeHeEGfAjjRQn4oPhaa1mzT1LhEj6wYN7StvTPT6WiUL3eBpXZcV9dgy4nQvdu89rzq2BvnYa2",
  "key15": "Ryh7wssnzWzxLMwCgdyikfMaPG7DwTq8KNnCN62mUn2D6WYJqFMzht4t38tzDM36WNGm4HobwrS2ZzqiteNNoEX",
  "key16": "5tKgtjKk1iWqvximCFz3LbAH2dQARrLrybaWbyeYXhDt48GWpbe1aiAXBJzZLUu2TAiZB64D7StzhH7M763AGhy9",
  "key17": "5sqt6bLSMqxVgU56kzUcPi9vn5XMTgvS2oNoS6K8KP2JgE6fSgCQT8cdFzBsB8xwo8ZgUTNLHVKiv9nDXUDdpDYu",
  "key18": "24VcG3Q2MdpeCP8dUtvNu68UaaaWbpuLYTNXVnxn4vZN9yuhmreorjesxSfA1WVeG92qyTHphHpzeHHJoLkBkZzZ",
  "key19": "4d1DYx38cn1NmqvouC77qNDr5TkaYCBoemq3xYjhdNw3J47XTpgJBmWAM1gzu5ttKkmmNQNCHSRimJF3zAhN7DEF",
  "key20": "2yw6wieSrVjYriyGTbkzonhUjhqrmdcNK3ntuoi5tB7tXoMqHRFT5e8YKTnr7uzM495a51X3YwhLUr7xRRUnxshN",
  "key21": "48WDRDbEGQ8qDrBLHCtrunCEE5FXdK4n4U6eDTN3uZGzswTjtT5hmECRWeuaiHTDquBReBLE6V47fotFPwn1fU7e",
  "key22": "3C32qBsJKoQDZ6zXW1SjCqjCSDfz64RgSHgAjAoSiRxNiBMShBXssc5LkvngWeZxXygjP3XbJngAAyvfJdTDSfeJ",
  "key23": "4o4zkby6KHSJxmD6LDDVdj8jXmosEUBYpSH7UcbjtGAXgT4vvw2dPVU8H5rUepwMe3YDJ3QHaZ49LngYNZfUwciF",
  "key24": "4Y2AFbW4QGmu8aswCTDbKFZ3hKgRUqNzskwnfr7WoreFT6W4aGUL3qrxaZrBzyozfccAYPnuuCJsiMsSq479Wbn5",
  "key25": "fBNaSkhT6Y4ofu6bRQkSto7GFVR4C2UcwQEPxDeQbbyz1Bmz7pkNk7kLobdMeV5zpVoh2u5pXqu7vNJYJ2j4VdH",
  "key26": "4KpvDkdTyVPc5MNVuKxGKef5hkABjSkHer1e9cLR21vix45kfky3Jrnwy7dQ81w4KCtkyd7jnBvsAN1XXAeV66SE",
  "key27": "3exayG83PJ3qmZWBYesqbCWKZo93AV2W8ufFfZNunwMc6bv6amxzoNWKBiZUt44ZjHRsD6Exx6oQeLkDzjafgnNh",
  "key28": "27M75YtZxYzZKafLgieuv8727nZPKwyUSAYKrzeVq8Nz3sZd31jdPzrtVg9xHCVhj2pM3Gdn89a1pBNCWCqVn1GV",
  "key29": "mmrUjQco9cWrx6c7VGGt3i7DV7uFk6KbBgYhSgCVyBra5hG61eoBfGMZgv6MveoVGp86CRRBpngJvDmwWb63V8Z",
  "key30": "3NoqWFwj6tvskA9PQmeGdvvmxJ88Cg75kNVtBvtj6SE79ozKbMnXK85dDFg5BPe85RnoK1qRtrx6dostX3oPxeKP",
  "key31": "AUrkep2X1hu8Y2dw3nLjwo1nk5UCejyTTjprEVs21Uy6Aff9ee9W7QjzsqWcHnWov7mY1NH4diJ2sKyJkmGtThR",
  "key32": "2kiV99v8VorHkrrAWg1b8sGfYqrFMPJ6Li9YgTogySKbxnyfdsrok9pu9Lp37mr5kvtRgkoA8MfDkr5tVR6AZhsm",
  "key33": "2ZRdjELc42B4UjfdDVn1FeYUxPwhTNUtB6r7m7BwfUNRUzCsJLsPbYp6K36mZ9NLmAxXSZS9xsJs3Mjq8KrhLdug",
  "key34": "5AJgXFK1QaLtwGeZbbbUdPCE7Uii63UDezZUBiCCKS9omvS5DEQLW13ipjvW3ruGxEmExZMwMctWKurygJvypzRC",
  "key35": "3L1ev8im3LXL7HJG3WpnfcSHcpAKqqDvSR9K6Ym2nWTCWPziqrCW5t2xHfkagWPebGQJB6KbL8TKZvPVbiDGQ323",
  "key36": "F6cR7rrkcZwoNYemweaU7PKxacAM2fouUnxXdGXkiEWApqgYaPtcuEkrDFc7P98jgC5M35TMYVwRrD5YLZFjJYa",
  "key37": "44RjhRH1G3cXt3yVuWYEEQnpFzhXgSZB5FqzHQKmvzk12x7BTpfYZDWqVHF4jdKGxchGfQjMChjggVLPNhknTU24",
  "key38": "57g6Um8iYrLgxFFsAHjgXYvTCmeHHGC7HUWnBUUiXjBCrBQWhotFTk5w3Y6RbcvWHftu47sK76YtMJxVZh6wTvGJ",
  "key39": "3z8wbHE999rL3hvpYANrwNamdmZuhghzcmdNyWqLBtqjgqvHUc1KC12dzu6NX9yPhzJRjKpqxhYdgMFmHMPHbBYw",
  "key40": "PV1YEmB6Rbfn2gMUHKQ74XA2tZR4P8PJyaAQF8A17ZZXnrZwcM17aY7AzCtrfaKFYaeV6T21CrTFcGX1ZkrcShq",
  "key41": "Rg4sgKXTpUqL296qfJQ4GN9FcXs3bhkz3sMoUt2JGCCgtPWhkz9yHcAKAHN85SEnX2PJkjcMQocXeTky4WZL2jB",
  "key42": "oV1sBwFydYWxqcXwFUYr2huRYAXESW1XcUPdBnAjSXNfJigEqKvZ24YLA6nyhw9CMa584oHmnyNdGCkFj52upth",
  "key43": "gDmG1P5Va572gsiTMobL38tnb7sjKQskSdeN9NvyzJfrsCNSCtkAjjLkMEwK9hT15KNsjHGQsJ4QzECDWnS9qhR",
  "key44": "3Cb1Y312gP93DhZywqsKgFhgNT5dgRM1fpQXwxSQZ3X2JGaywLwiSxQxmi5kNqhihhRXMW3FwXyxtK8UuBGJjW1R",
  "key45": "4ani1Lhww2V7efpzMKt3xPerCUW83c5gzPaAKakqoBzPVtCw22rSJ3B4CkFdeT3n85A9DhNUWbSqgKYoygaG9f12"
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
