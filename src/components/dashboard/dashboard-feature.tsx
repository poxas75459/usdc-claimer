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
    "3E4FjXv1TYNHXvgSCv1J2H3fB5GRdmncqy83Jv6nkvKd5ockEwnswb1tWVpwVZCytJ3GE8WDYGmAuzyUt7s86oXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAZ3Vyn6ytGMPteV3eNngY7fDEuf4sYdJuHvG4r33svY1VUhRAR6H4x5NFoRYDTQnaaWr9qeyZk1h2coZxWPcct",
  "key1": "4wq2bUpxY3mB9TbGJVY5nFsKoLJ7UJPH4TQQMqi48GBzcz1fyLLvnLzX3pSrGWEB3TUyfaPHk1N7aUih9CXQhnix",
  "key2": "2TkxgkasRVghsLvz1d68hkRJr5922ry3dEDQWyC1eLeLmYoLxD9GouFhfYoJSfPisYgxCaEARmF2pjNcWiL7Gacd",
  "key3": "h9yG2t2RpM2u2F6UzKse9eXGQtZdj3SG3FYASX2tn8ZUWuVvWoPGRRaE8yR1pgoF8gm53cE1skDUxouXKGSuEHR",
  "key4": "4eLA1hgHFvxSBpd8qsNNnTHv8LqACqGUSXdViJrbXEpU7pzkEhkAst1HfhLTLC5CdboscEAmkHjaNrbzSz2Z4DKj",
  "key5": "5Qbx8QLCqFyVBYiGRVtVuWEEgCxhjjZVxoAeWGxXSewekFhtEX5749GbCzgsX3PQsRrmovGRRk1Sir31YGkdgXc8",
  "key6": "5hVvWfT9DV6RygJWsj2E3yM1rC1BV2WdpYJgocaSAPLwtS2QQaxzivzA3A1T4n8tqbSWuMN92KW8HY5mNAwMDzm4",
  "key7": "xBgMZ6niYyiBYtuACjUh2NTBYMijaAD76tmhahqeBWkAAkmmx74PYQ2NLoMLxTmJSShPHxJ1P5CTbbg6jsFezqC",
  "key8": "5ZwYS5Q8ecLJji6FZz8A3mPE73xjfxPsHchKUmNnGwSMg3Nm2tco8A11YPgTeVVtJXFRmWPh8axhsJzKW2iqyJaY",
  "key9": "RwNVuDCZXdvnzhwjYiJUkR2FARtv61m42boWvSsoHDFwZzeR4PQkQqPjy3pMSu9Haej2LX3wfWQ74Z4XYV67wMX",
  "key10": "3MBvRyt9cyo6kDXj1yZivak98Q4YSApAtFdLzGxMWXZRazXsEN6pbuyowXFCFRuiibSLkzu1e7vz7gq658JCWukV",
  "key11": "3kr8kLbRWDVW2BnnzdQc1DiMwdAhrf16g67Kth5ox1DtVi9stXz6GguCq53CxrQSwZZbaxFCTjhmfSGfzJBULq1x",
  "key12": "4E2XKhXNp4Z5ZJuv6ZWr6V3GajGXatYf3Uu9psuQKArrTgb9UDEfuHumPEzmnBQAnYekMy3w56mJrsKGDRmjb33C",
  "key13": "47791qfg3KZ3jZe1dWg1F8zVq3ZsPQGc9CYXA2KNzwqkC6Z8ThHgZs6F2JZLsgqGCXt5iai6mhmjafxkn6yU2foR",
  "key14": "5TSScmB9BcdiCS9UmxWjsXRBedth9T2wwXHazZq5P6HzSChAqRrqDPVX5BeU4ad6heCknqttWJ2HHQb27UYCDLTU",
  "key15": "PNgiEPMGgWWzCWqXHuHhL62235t1UV4haPtFWG8rd5t3aC9YFuAatfiunDW8jqRYsnhxcYffqd9eD6RHLzbbY7a",
  "key16": "3uyqx4HKfxFthzfrbVn2pPrcqe4XrAenrEpu4Jab25Q6w1YWvKix7JG8Tmbg4ZeABotr6p5nb9T3ULx9PWX3dxNR",
  "key17": "5TBnDA5FPX4LcE8xYccjvnSG1PkXuvekERV32pe1Vnc1cx4q4n2WpYFaHq8HeMUDXtc6LNSKL4VbjvMKKDGLiHzJ",
  "key18": "5vbzroz4i5Ks5VuJz2f7Q75sCernG9RKiVJNwNkofZTFtDXJAQEQqEbJ2JbS9WRooqhbNGxZS4n6zVnPmFSjXawa",
  "key19": "3JLuptHJWDYoSXnMYeUovdRu6ZkFoB8iFJWpt5P4JsGvZwSxYmN1w45Q14HKQ5mHy7Vc8jctcSjhifSGyKi4E9nS",
  "key20": "3WgccKVDvjEgzwhKVvKUsHVjAkPYV1Esz7gmLkAtYLrHamvSmYjug1D6yXbPJvCDwBwCPBtEX7gUnbFm1oBGaiDa",
  "key21": "3RRYhhHKdLtjZe88RsztZd7BUMrQfx81fLhpjqUaNqQntsb8jCVgZJ4gj6Z8pJrzYmpY1imax5toq1qynEK1y4P4",
  "key22": "5Kxujz2PFxPhamTV28xiHS1mYb1mgdyeZcwa3HVRu1i7CXryYWXnsbcqQK4rFidJAwpZAjhMtEgHJYipY7jnTaw2",
  "key23": "4CHXoRaFD9mh5qQPf32yhdHwCnt7g68wnqtXztRSm8ayt8ZXvFBaLwcXstaYetcy4gWKH9HJabG2E9fJNTVwNRmD",
  "key24": "3rRVBBLHfv3En8DuPuy9pn9cipH8e3LTU8udtkihv3jwnVpySWaRWUNUkfq9oyKD7EvT9wkK6VQxJ72ZmRkNHH4H",
  "key25": "58Zj3ped6jUHWpwj3hyjEDhL8WtBkfDRezBGGALTaY9ppgBeQzUiU6YsCtfwUGXncxevdWLt1ssDdjWPQahRHXZG",
  "key26": "3AgPiHzTvfiiSviXU2wU1XXV2iYhSnsBUHt43fhn3egyX2V2jZcSYDu5ktUQqpgQ7XRF61z7kfmm4KmJy2BmfmJB",
  "key27": "2CurGsogKdRSyhF75YhEUzce7uY52KKm3YTWxvgGgrbRPujSAivp6dNzA37jAYrLVyPt2sURqAgYp8dHh4b3hw9f"
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
