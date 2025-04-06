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
    "5B4LMjNu7SRdP6UQRBPF16n8mqjq5fXqr4dz6nGpoACdT3MaUVfNByRmh9XzQKQ4due9Q1JQdpDFVWLYcxzL7Sx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CkgC4LF8DBJKdJpbzZ2vWtPBBykcXQ7zwP3xBikAV4VHRnWwA9oA3Fy3sk3F3v6VZ4gwc8hQ5Q9rqsCvUBssda",
  "key1": "2zhLfprRs23jBdj4LBykmRx97GhwiRY9XJJZEUxsW8ytx1NjV93S3amoPsMSUsbnsPBcEtCryPS3FFLNWU77HJJG",
  "key2": "5o7JYvp7ekcxN4ChRqSvcN7SRe3sX2EFJMYnscctUY58j9UWaRF71VW7Z34oXTdjMEsQUGpWS183cmKHHq7q7pSk",
  "key3": "59A2CfdkMjc3ZXHgjMfUMJXCJgdhqQgpchgXqHa5DT3L9uVz24FDGiSmeA3CqH4WDSCREcJTRW91be3UfXgCMgny",
  "key4": "344WDgbdiENioUT5KMDRNMzkasJB58WvA4xGcoT5joBuckTurrUd35oCSzWN65m7mjd9mjuz2shCaY1QqjJ5PBvr",
  "key5": "3BicfNsLf44gDG7L1bmgq7vLXEoVFDH2V9VvrRf3SXWmvN7c2YNWtUrP128B4iwjJNC1n86CP4eByksxTRgrjLyu",
  "key6": "5SiV7qLUD1Ts6TYqTd7SBMsYgxT1NMi7jkRivDuBggtyzfzWoiCvVoLdyUxUxGrcATy5nz9WveZhtEUf6UKVZ2wY",
  "key7": "Bfm1NxvJjoDtrapSEQLRfj1vaoAA1zRo16R5bu6hfFKwsMyRx6RAUtfCQEnHQNi94qKXffJ3tg2oQri1oUJLSMq",
  "key8": "NUi3TKAJdPMRAfYhvauZQj9AH46eUJio5oXjEYBeraqr3xAjmzWPN8gBZtEiFe19oQtoy6YgcwmvEpY8yTRyQ9X",
  "key9": "5jDRyiC4Hf3ydCz33DjyaBHBR56HbeDr1XzrwW67WmgNHenndAj8X51nZqsDPppswaTSFqhFPXaexmKZdWcYcy4A",
  "key10": "33T1gLm2fjxTcxwN5s3BayRQomTg3583nZZCFpemcAe8jUTRct9ny2ZMoqpzEHLtaVaUBc6on4zNngmxeDzxhJUA",
  "key11": "3iUXEokEwhFfGJAGmsawFAv192ifKSd3HsRF2GHPcCapBACwjK9bCkx8btG9LwoVE6pfTyDUAqxizBZ4znBTqjxx",
  "key12": "2QFjJAkHp6GM9hdDSStbGUEzWQNRtemvL19E7bJBHRJajNF7q1Ruoph6KuwCPpiJbTPBDKX859VTRRSFtEtexGmK",
  "key13": "L9Hwi8115we6pBk41dWWdyMudSRoWmMExocoRcGPKet4oasAXgQ4QCpKUeY6XmEMvtYaBzC3Q5YaJ1rP411F26o",
  "key14": "QELeyuhnEfSNxRdjt4Cpw4RbFjSoRLQJm9XJ3pUodxGRUdHAhdaFCtUDpEb9KNKui7PMDf4d3H1kDZTpPZgcrAo",
  "key15": "2XMkSz52J5YxjVA9WePvTshxMvm1GHbpg5s1GXmfL1jNgJHiqP5CKffJWTXm9xTeciUqtL7Y7r6n7mSM8vF33HB",
  "key16": "2djuaKSyghTt1TmHk1TRPCWorx77me4Fhnm9dmc6DroWneL8YwcMEFXbXSdUVNsAtXh3cY4YzywHS9a5youyfNdT",
  "key17": "4Bd8Lgch2NaNGe8txzHRwBkzBKc6orJwSsKdLNFYAbCGWppFm6PWTDx6Lxxpndc3qJsgDrRtqnXJhMK8skkCgqui",
  "key18": "5sNT8QKcoNkBBhTq9U3JZ1AcZTmYcEgEttmmiRYaKyzLh22u1D4sCVnDGitmGbJfFy688ApemcJw95wq148f1Lk6",
  "key19": "5fyuMEQ77RygbJCL7ntgxp5n7r1AaegX4E49WpNkhMSogcJASJUb3UCE8jhCkbfoD3RKvRLkKW3QABC87qN5RLEA",
  "key20": "4tZtk6hSNFy9osZcA5TQ5C6G49nS2W83UMoBk3dBfTbNa7Bs1PeJfh68LuP1vs5Leg8wrWMaYnrZhwk7ZKjKcyLb",
  "key21": "25nyTUZ19HZVARVQiMnhsAVFKJyBG9TdLqJRs3oNJNcSvqcrA8GUYWc9uAxQ6QRbSPpYCCEuEFqa8er5ckXhkE4L",
  "key22": "4x5mN8GiurSVMeUeBwHJkK6wfRK7QBECXbxDULSxonoDvwaq7t9oYqBYe1q7xH3kbGL6xYvnuUUiGLavCuEpxhV7",
  "key23": "34PnBPeEQhrys2qRQAC58WgDZ9uX4m9PcTipf2edkp9teakaG6z5cMVLb9zJzn6UL5srMPDbQeRB8nUCkZHqVHQG",
  "key24": "57dsSM74hW6kgJ5gQcE1GC778HqA8Dr1GMqTUN1skeDQrkG4z1kKHEkHexPWb3P3EFnRC3JkHRab8cHyubRZWkQP",
  "key25": "SDymvYrxhVyrgLSwgi5dHj3CPZE9jf42YYchTP83sPh1WPbBccdhoSyic8YEjLMGHGC7SYtNizuy8ptd4tVEGTn",
  "key26": "wVihWx4QqPRtNu8VBzMvcwss2GgNgwGoMVMTT5by9FfiC2V6hbYXQeHgxB89p3mouKHF5xG7fAsKenWBVgqa2ud",
  "key27": "5CafEYkC6cRKKmMdYQhRH6zYSGQB9hVUnXEegjXgPJdNV7fSeQGh9EYGg7YCjVAHwuurwRrLwVMEWY6FAZB1mnxq",
  "key28": "M4ocg2EKZgcmp9tYcMLZ5iY5YRJ2RQzQHhrk7uH7xiXSbvzt1jBQqRDsnfNy6fjcmVVuEmZ9SPvSNff6hANKnXw",
  "key29": "5hqPeULUGagxkNt1obS41rpJmy5xXgNEbEsFqSUB7j7D4fTRC2xpAFvp6E76f7JtPbTKuGBbu6n1NAYfZSzUYneM"
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
