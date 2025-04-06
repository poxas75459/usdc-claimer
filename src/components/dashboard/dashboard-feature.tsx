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
    "4MhMeLVCDSxu8jj75bs9dwui4Xyg1kUgcVCwAcAzohd36XHXQsdCyqEBY1pvW7TB9cHF1TYLNRaP7GKaKMQMW8eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57EY7Utqzt7ES5RoytCenC26PG2N1tqxhrVBD4uM1rh8FTPdW6AB5Tx773yQJ4ZMe6FJAXWpSjKZkH1X1BSQXN33",
  "key1": "5GfjedvJBMmQCqbSuq6iEo1c7HRphq1fcEEJVLdzhs9TnCnV2q7RxYjngWHoTiqhgpDvfNVgkZX7XCuTMjuXNZtY",
  "key2": "4bCCpHEUWiznjwzTWvhjtVYrCenAxSdV314UH9ziM3UzfNQwK642MWKjaEtEB91qTrTFBbe9EA449HW8Ts6Rbn7k",
  "key3": "4WrzrN6ExmtFscR3B8ARWf8TxPRdLD4HqgdKMQPE7T6Hyc2km8KNWM7gN3Ked5p9AhcZY1GwUxmVzAH23JRcmfj2",
  "key4": "4hNW79y47TfT4y3yPbLxe8qZwvpKEpyvp8DMPo2rxs9VGmSgkaFB3aEyy9oVnYnLbw5Xm4gio68xuRtHqShrQV6h",
  "key5": "5hYre7uqNiP6gA9ScKnqUX8GK5NWqmFTf8CiBrSu7KA9ZcDbusxx3iqm8REzfmzsZtxxByGYSAv83kc4VhqGJUsn",
  "key6": "33JP9sAVapBXD6Bui8PLWHBCnaF64MYe8RYx6fzqpLiAAPUoaTKUZKaZXnmVSEXtkb4K76NmifWLoVttzvbveTcT",
  "key7": "3Ts784hMuFw1hJwxdWmNBauq4q747Ef1j1By5LkJmts5HYEBrw845PdN87EedsUh4B3zAUpjLoe3DEN7mcic8ZXG",
  "key8": "5twPdwSd2JtJBmnpVwjinT2p7eXydpXKsHDhXoCqtBDrhR7dE1zTwQgLBsHdxfUmAd4x5c3khxRpKTZ1yyLTvxVR",
  "key9": "2RqHHLbQjCX8zAvy3PastSkqUCoEJuv3DXsd8skDPTGJ4jvV4AnEkZLPkFewWh8MyHe3JMhXLiMecpUwQ1uY14Yx",
  "key10": "25LkM4YB2YkoRgjLa2YLfwMYK9tRhHDRnkVhKvFiEthNTMPUYoFkKiAzVHs4PFJjeezJCScDZMp46cppUGinhuuU",
  "key11": "2Rw47vUGuy9rfzkoJCbPzvcvXfqaCYMgfqJEqfRdsGdFQeBJ3PRZsrhyfpcRarn6Gn4e8v78CgNTfBHDq1voXLdX",
  "key12": "33Ho5ToFLPscefUYMKS2q1rrqRdcsPU9HdT3HdTXJhTPFmbWBGm8rT2mGZDfPyWU3rR2hVHaoJ8A1VsNgeJ5d5GY",
  "key13": "G9hTzeGYyPWXq8gSqZLMi3ZmBfMbW485AZ5LrCN6rPAAoTkxgEiEHWyJ1ARKt7jfpdegc9AjefrHzKDixBtQDoD",
  "key14": "4Y1rKnjcgxAdPKTioiYsiELJUV1bMJcTvU3Z4cPiKfJXz1MAYFy9HeyiCL3Xe79iYTNeJnTwB2LQak2SCXsSByQj",
  "key15": "4hyeHjJi6Z2zptD1fDicusoh7R4PYgqn3Ury8XMAmPvJzGucFCxE39MyD4U7DjqUe9boTtc1yHevMozE91TAoAH1",
  "key16": "2rrR2QGByirKUDjqsGXcVt7JNHF5TBRLxmWPSmJXgfJUmfrbJnyr3oyFJAGvaU8ixLtUakuU8nUTKMrJ9UdZCskt",
  "key17": "4s18ynVTtzkVNEAVTdwGP4XAsXrmuW8zfDjz1nK2tnkMxEWMkSzCG9stS57MHJqAfR8GtspmvwMmwvYhH6nQa6RL",
  "key18": "qsrMq5Tfm1ddjDBKExyaaCQ5dM8MJUtW988pngAfps1jTeanyFSktPocaynvATPigtMDy32u137Fz4ERujpkBCR",
  "key19": "3wPPsiRDZB7c1tqJXKyXF2PcRkFg2UexM529VEyrqQJiTE9FrK7v2ycM2rACbQbFRDyCf4ACvbh2YoAgfm4ewU6",
  "key20": "4zwTFBCZBVLknbWFsMujjvD5AdkvtCJoxwJd1nCqtgucaGHbH2uqVyCphgnzzYCpq3jiWtcbs83EWbSJqRuEP7K9",
  "key21": "5z7ezpBUpPXngGgM1o7nUFcCmVopT4B1DjBzLuDoUtUsw4jKVadzPtJSkoSgAEAG6L2CTNytLzVuXkHt39iadyaK",
  "key22": "358R9mzdEqp4Nwti4oQnMCQeohXJpfPKx1PcvfaBuCnnGtgYfdb8Sfg693AgHxEs6fGMsVP3ggkjgFJC5Gm7cLg5",
  "key23": "4kw94S3pPyPx9QekEz9QwYZC1BGw3atBKwpy6LQnfXbfKdAw1ndKfY8LGUVweQhDUG3iQcqRUm4UQsaZFkB7crbd",
  "key24": "2KtzLekaQPtdQjq9wXDG7YtzrVuWV2DjiBmoPFEjz7bV78sYX6z11NR39Ur1Mty1CTpPc4wA4FrD4jvqEq8TqHpp",
  "key25": "4h7EeXbLWPKFFixDoiMSMSvxcA4unwLu8bSG5Xyazzj46WZ6DEoxLsPu1bUBNkUDYVeM4VoqDTexzcoMQbeqnz38",
  "key26": "42zvmw7pEbP1kULnVZ5y2fBGhMj7XQGVCC7QoqunynerdPmbfU6bqPeeWfwFHwFLHQTYN15YSqBoNDadJkPJJuw1",
  "key27": "2C9ShNFeNgZgGGGstHty9Sz2V7g9b6bR1u8yyaGwrx9w2YtyLBp9PrvQtT71k7Uv5kE1Nz2nQRkznFXjf4daFGEQ",
  "key28": "2W1FKow4n1Lf8kSqUkHkUNQdBRNzrmLQ8HwJjMjZtaQJqFcf2jMfVa5F16sNGwbAjWJzKH9PpmxKEHPyKR7BXrxr",
  "key29": "3mnp6dsmUv1AXHdHLAh3XhUXnGuUWnGE34VjDQPWGpMpD1XqeXkToo4sTT8zgYiANweWMc3EFQJMfaaMz4nZRGsL",
  "key30": "2hx5whPFRTLnNjJsp7LPmArZra8CmoCScjPgBPYc8ZWSequPs2WmRu9z2n3kRMksNBXDcqxmRhDHgi4ZJdMYNjWk",
  "key31": "2GriFiZkzitHRathKm8PT3gk7775NapdNuS8erPDeCNajVh3DjN1pZZyNkTA4vUGG5yGMFi18ysc7Z937Rs5ccVg",
  "key32": "2kj5NEry3fQxRU2wRYu9yDvV9yKWRheRUb2pBsnUrmLLtnAxSVJspKapaGzhgGKcVjvuPhaUXouU8HskpnihyQsf",
  "key33": "3CpruhaGArtAyp5FAxbgKGv8UjXZWpbrKwd7VTa4SrMmxFegwPMugwgXhe5R1CpnPLGk7dtA6xQBjeZPrcJgUr4C",
  "key34": "2rW7urKAFwSZxXNp9ApkBrjpRLNB9MLZPSXSxaWmHbaxtghqvHmtkVtBGaugAeGmVm2tZH59YaNXGiNgEpKNDkQM",
  "key35": "YeRLAEuNppYaY6C4PVNbiTXZqUNzeNcA97oFvhFv8NHt4PG164dufKD6ehweRmE9CxZ3HC5uLvvffrbaN2S965f",
  "key36": "2Jb9VFdDH78RjyV9jVG298RZpaXGbHbrLn5rGsvf5P2uqnoQAnPLAHiTdhPJVGmaaaytySMQnHaDpMhvwFdPxKte",
  "key37": "5xH3WBRRfEyqdmf3Nh31wh5bWgJU289XSrtfpY8ibPT6iC773CD3jA73vaFZ6TNKoRCYZfpmDHtEnKW4VivHvq2P",
  "key38": "2r8EdH2Xj4reHSjr3oJgeqgF3ZirDppR2JEWh9MV6w1Kvi87yhrBQCAxYS9SkS5d3CBcKNpFgJohpJPvGzxbLmSj",
  "key39": "52pvfF9nEc1XVGWaZdpsLgiEbXcxHKzD6fMsAf7ovZsvacxktNuXo7K9aaU74oY8XpaWhoeW3X1o16X9kPaaEoDs",
  "key40": "5XQFqNvicGq3adaUSMgU3sxF9oiGeUs2xaweGpyKbECFqFcKtkpSE4fThSyWHLnHGuaD2hvsF5csHGXQ3BosUQSQ",
  "key41": "3n1PQe3dtG3Evpdos2gNUi5Z7HtoJ8BR1QdaT1g6RgFXP3gs3gtAe4riPn335EqbkCVhK7Ak5K31vKtrAzvrGV6C",
  "key42": "3APFHt4f7xwYtegjvU1Ba33ovE5sDrbdta83HcWQQBwb6o9x2iguACaJWoRzgBeNupQBkg8ZAeQVhPfM1NMN6qPu"
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
