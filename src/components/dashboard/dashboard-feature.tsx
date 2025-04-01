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
    "qWDrzL8EUdYwxK5YwhXAvjispWCCro23a5C5s1NhKyNZT3rsUgwrj4j4yLFUwkQSVuuaqm3W6KaCNPRX7VQBqA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDPsi3pAhNuUk9TMktZA1TEGMQVmPCW5gB2qDGunwz2JEmjM7gi3PHebJmaNNiETcpPov8yHaFmCE1kCfPfaLGX",
  "key1": "ojukY3nVFHcHDypfVudWzc7bT2R6atFWxUpk5wcRABDhzM4o9G4qRG8dH7P8TSxy3fcAxEkHRSEJPBFnC2Ciudc",
  "key2": "8fTJQStwXxythCMgYqx2E3krEfVJRSMN8NjTbK12VFbCirZc4DZK8h9yH3wtXkbRQcyZGHCAiLHHDnuzf85McvF",
  "key3": "2Hr5m1u4CpAp8NXWPJCLt4jYJRrDjHP9PZAekELXdyLW2SgxsbCXjME4H7Bt8JMMztrcR2L4oE4LKMkotM5Y3iiK",
  "key4": "26PnpNETVb1Ch45wBAeXEmdowP3TxxE62m3N11iHDzAxvGtVX1irw4RnrD8JS6ZVNNo5vJ1CRHB4suZPw9mSwYYh",
  "key5": "2e5nRzJk83kytNnZRD9oEysmkoJt11MYo4G4c7ynRSU9SFCuyrwDt7yN6Q6X52un9uvVFyDmkPc3Ff7gEbANtvBj",
  "key6": "3eZ5o5m7y4cZbcKNxfEDBKsTzeTK2DUDQrmpFGk1MP8NBsq9xpJsFcPJ145vvh8RjWxsAnQ5EzSTeBybMzMvxukS",
  "key7": "51Kx4r84euRrp26FCwuesv1337mE7MpMmtRHhAoJ1YwU1PY38wWbFoXSTo2Jw5YPGzYcLvFi8RvVkLrsx6BXoxmW",
  "key8": "45Y6uCKorEi1Cdch9wZQMU7mNcDkuTsGXYV7WtxZxENPkqjsjSqipW7t3HHFrbC41LdJhy7iReUcimRQ9yuvQAvh",
  "key9": "GXTun75Z4hRpSwn4yejdHCQkfs4mCPAx6iN8DJY3LLdVjymn6RBapociDMUpCZTnBo4pPC6GdssowmBq1FWeMHG",
  "key10": "4vynek8AHCajStaCvXMd8WpQGoozgzMwcFf6RqwaWecnorWLtpq2Xp5MXoetWR4qJ4Yvbxf6SX1mGXhdMSf48iyo",
  "key11": "5tqkJrwiUNcF2JczHjfUaK1bfXsJwji4UwebgLJ7hALjgg44GzKdthHjCbUUwWizwaMX7r2yGx4JvrJSgX6qd37m",
  "key12": "3PjL7V3NJbsH8bow3qVuKGArSmNLDUurUCYk1FzTz57SNaVa4t8JDqE6oQJV517meW7ppnAPgjc7nHjvZNeXPL1u",
  "key13": "4DM3XJPsnMk7oXuqX8rgzHSMmLiwYZZuaJse8jUnCLXDQfZGGej9kfMJ4EhJVeXXfsuGYeoubAMqtdunTfhYjm8j",
  "key14": "4XAMaHvUQSoeJsabnQtwTL46GZpMKsDZf6K9kM72hgQA6QHUjuU23Y8LTrh9GYTVVfwxNQVxBxVx5BaJs7oUJgCm",
  "key15": "2833uAsMhyW9ARuRwT1vsrcuvdFDHdXSNRofMCpWuXbQafJa6PMi2NnnXyR38dM4awLCbg7BCkv287h8KgsoSNN1",
  "key16": "2BSXiAsomRx7fVmBSpGCAFCkiiXKMrnk8hPGfkycCLJMjuMwzAraPJNDaGFi6Gpt26K3A1rwQZyU8L3twcUyieRf",
  "key17": "4pbjFh7pfVVbm7ujPjKpzX1tLacoeTGrzRjpad4dAbdeWLvosf6zrfKhHGrRnaxsbv7hFy2DZ5p1MpX7pSYs4Ymx",
  "key18": "2MZazKCXqr2rDxRBCKL1MWBabtqHAgQACtKUnFUkjcHbYQZGUswGnznp3Urs8ewu9zULsQzvS66xeX2vt46SeG9S",
  "key19": "2JrNUYkcwCoG6t5gRYE4JFoPfPaM5B2RbaXUE19GSNpQStyGJkytS346akvy8RpDfTfWLDcMdGgVra75PkzvDuJf",
  "key20": "2rXKeWivv575bWAq5m9eCzaJHJkZTJRVJMCK9zNJ2pG7bWKoZcjxsZnsNDc8Ke9WKLT4TxqFVf865EhVmdRM4RNs",
  "key21": "4LARcxWDbQjSbPBWrYWhk7Yg4xHZ7ZGmshuaPPQxYKCdRL1c18BDLngHDUyzWaWbejCZUmHgUtx4X4jPeCjHDFDy",
  "key22": "4uF5G4CsTVdsj88U8x7UxQbYRVVnESfVRd2GnUjchVawN3VzbQT8AAmwheefB19YpKQkbfwHDu4LNzv9FQ63pLhq",
  "key23": "5G1Vc4ZV6FnuaE4PBm2jR6PyNXrDiP4R1a9jMZiMjkFYFR6HKKnB6M3NK6My7nZoXYhaLsbBkLbadmXc7uMkLGWR",
  "key24": "4Kdnt8HyhuxPdnaM4xspCRB7ysf58Frq9yCPEqNp88oG3BW6gm59Rew8xHDTt18X2cqHvLmNpFmLyc3EjoxKrLvP",
  "key25": "2HqqXgzWNJro4GvE26rReSHU6ZMCXzXW2JwrVDCKF3fEK1ccLMCZkDdJ9bVH8YFp1cjtyfez5BLo6rt8kTwjtT5",
  "key26": "2p2N7DByzee8rvnSpu99DShMcz6n4WR7gE3siFinBT7mRqx6MnxfcUbtR9SdEkcZrB7MDSo4KePpqbjcTmi328PD",
  "key27": "5CMQyonmJoMLDDpqR2s4utp8exNW9Ms41fWDHBNePFHDFxNC4yBjGVyamHEaYKAGCjpJF9Epz7FYeqKtf9m6cAmp",
  "key28": "grvdpisSnDqfY7Np73YymBJK1VVhTnbSBSDC6mYpKH21D4mVeRMWwjZKTCJwjn8xTdhXA4XuXUczr8U4suD5amT",
  "key29": "5iNYzAiipxaw5twjDf7gqPDQdX7L9sLWQ455K91aXRqAHJfnaCcuTxAGpib9dQr8pZpDBGS9nhLCbLEEQoAhgcUp",
  "key30": "2G9Aaeem9EJiDSCQRcqVKRAVCTrsWS45oi9j43fAfBgzG4Ehgi3SN5mirtpKkj6SVByjkPokQEkuiKgGpDrQ9Z24",
  "key31": "39hSHd6jGik55etcXgdJ8ZLGMMW6zmULp7HBfP5F2527MsdzMpY1uYZh2Fd3Pmyy3ESXQoMs3SQemajt9NxWZHK8",
  "key32": "34oxecVrZJ82MJ3kj4XyE1Ttu9S1pTYuneEye2ByiwY3G351hqx5n6jgzhbwvJYroVZEPwxA8KCmgy4Bh3iZu7Jh",
  "key33": "5UjB5bcYFeyvvv1hDYMBicaxQcdpn3zKdtnWbnnY3Ua5RLarpECPNXvnzRP3v61rgeaLpxSuYomVAkZhEWKb7Qvp",
  "key34": "4PEDih9hyx4MXbm8LHSmC5UiHFVmyvn3HXjgfMiHgsFuvuH9SwFw91oem5kh45bLpzfkCfh7bvJzATkoyjMrSAFk",
  "key35": "2aQPX3tMepZYJ4PMdgEVErrmsJQpNGWVxn5U5i82SwRo2k83x11FnqDbyVr2Q7Z1T5b41gNU81DEFt7ydiY5r1jo",
  "key36": "uGCnWks6scPW8y591yAwz1ArMkbPX3eV1o129F5Yy3KBZaheut7i7Q2gGhEPLJAyUSGJoL3gYeoYQB46uvcDKuG",
  "key37": "3wUig9g5JWomax5KQYsKNd3cra6HtRmgkTatc3eDKcY3VTfncYU3DoPgnMXNn5NtiacxQbXUkLJydMvhpuaUnwqL",
  "key38": "422hznMoekqfiHuW82SaYXBCTNJXYKFz6qiFcefRdJRaQainuQrw7oVk12xbf94TJxwQK6f12qBHS2aMVm5gFFfi",
  "key39": "5s8dEu1SNzyqCBXurNS4fhukQahgRFJ6mAf8RTS8pEqNKnGsGn8oSwHs2bPb3CCe1eeJ2S3rCPcdD8CFNwtEZzTq",
  "key40": "63ujvV4BCvnVN23PpWMB6BrhpWJBHVhDAy1KXrwYumGLwWbokaMt8xvqmZV7CfbmVEng1xy7mCkUgBu1cp6xMJoR",
  "key41": "2Wh3h3f7uRBDmGnsr5j4q7XEEAko4q4b7He58tTqkXgdRT9ZLykaxB4RqxuWjDTNBwUEW7vMQSniHUsd5MqegXHH",
  "key42": "2rYf7mrsJnVXwJHJ5WewES2GjtBxT7fYVFarJTt5H6begNUZWXN2Nvph5MjEDppJFjSBi7euB3WFx7whUv7PJhNK",
  "key43": "4aKX4bvs757Mc7NBnPyCx2UKd9x63hHup4oyauyobCD25SBbrfShSKjyddtJMmehj739msHZLU8cTSj71kn8YfGh",
  "key44": "2RcUhy9tRmzMx2TYrxz9BZHQY2PCympzAXj2kRwyYJPVD4JVtsntx9MS22ywy6egN1hgDvPr4AaEActTCHB4YBY3",
  "key45": "5rRFCGuwA2nkX4ou1o2pDUxmDXXtPNFCLaNisooWQCnthExxQ4MEHKsB6kR6M5coYeYevJsCvPhW8sJnrKk93Jnh",
  "key46": "51dr9pQ3eF8A24ZkQujKcTDjTFvmUSgAJky6bRKhsR6yttptMFyiWdh9VPzAjRom5YkiCWHHtvWL7xSZw6g2hoSM",
  "key47": "46r92ujaFC5YZEoaqMa8kZUPwUR57H4foBvbbdPKnTmywstEmjYhPYHDXqH21n6C7oD3oQoCr1KuxzgfkAfnjNfU",
  "key48": "9YCx3fin5wTSATe1YxPJxYAK6n4B7sTx8jtvL9RwN7uBEWRNaz4yieEgQhW6RoNbyJj5GtTfz755nfFoSyAJxVU",
  "key49": "4kjfghNiKyNvyAJHic1FCBti5DZng6ULaThvoEYyn6yCoubkRc6gt16d1KHjXaNy4vniJaVWnBomNuApYvv5Rd4y"
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
