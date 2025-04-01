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
    "4eGmVeZG8BGubMgiuxsgwozzgKaWCbgfXjbxeU1cjKwn1EcXCHyPewztP45niWmNm63xvCA6tJbWhp4aTvRp1pre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qPodud33TC6hmJrAvreoiWR5GWdCRj3MdSnsvrW2H7QwPzCN2S1gDYt5Rrvu8jLzM3yjpP2tSyCGc6Kag6wEdR",
  "key1": "3rVJL4K2dMFjK4Z9DsrUxC2wgTtMErJiLh6J5LaPXwLUM7cDQHki69NTRQ8hfZcvayVPG56Mgi7cwV1M6jhwQE7h",
  "key2": "2MHCAcmibkLd3xvEh9Psv6C7mniGvEb5nfpuLP9sFWmi35hYr6ABhTghTkKZjjLSRy8QXVmLDRdeQLBWkw42Y1ta",
  "key3": "3VumhSWLqmPtuaFrzSjQ2LvwZFcCuf6ukJrqRxwjzt2QqFned6i1uDwg6twB7xirWNyst6vPh2QgbHpQi3hs2KCc",
  "key4": "3U5rzWc8Qv6D74cNytioRfXxH3N6fAG6sUB1AkLGPwX27gP5XzFGm7K767k1uu6cMyrWd5NC4guE4rhe5sjqbCnp",
  "key5": "4hLMb4yRKSPacyNKab5bMtJJ7Ka6k2bzEm67TwepTD1VYB5aBcD6nkKTp5DijmexDstqdTJAauPmcUVGBhsGuEJz",
  "key6": "3bjtZLuAmbBsN8hLA2FDXx6yJGtfnENA63SQW9fRo3mdiVo9kbfYXxgUvtsYNxUVbngRf1RtGwDDsbELwHX5uiyk",
  "key7": "3VdQknC1woR7dWeGauPb1B7bUsZdSKoZHXMQUeqdeJ7vSsuRUCmRB9LeJmsUkN5Jbd3tWAh4Y2kKcudn4gjuw5HQ",
  "key8": "3qsii7MJeSywsCxE8HEb3Mw3YqKkTJCFyTMXwajR24YroxJRPWpx2dbCseawi1tmD5xNpXPzqPYpsVeDT3E5c8Do",
  "key9": "2edxe2SyMqiHt9YjBuxDLuCM1S2oaG3C2rrTQaEigNiSrDR2axi7kCczBLRdriQEkRRXVu8F46XhUBr9FovEEgHp",
  "key10": "2Xdqg8fBb73gdg4DbEHudcLCDYJcMFcUeBahap9QjdTCfKLvVxd66XZGXgDJp85n5q8V6fDTxJWG9nvfYJe2FVQs",
  "key11": "23RzTzPBeYrSexm1bgJ7YKxrtwJeYDbPoVgKz9iFqRJtnMnNRBkhEnqPTXpuP7xxYocX2yZD535wu2R4vrUZ6JZe",
  "key12": "63G2NqPM6kSFidLRuA3C8j3EPF1tX51jhM58Fezh3xhwHURERq9vmJFfyW5XpuB4G3KHSZKwGm8kqQqZx5jciCem",
  "key13": "5hmM9zLKaECL7pY5uTN1MPd6qaVyJTtkaebnfssafKS5EKSrNKqaJQ9kLH1Kwgt6YzBS8CLxUEyq7QP6UG8x2pdW",
  "key14": "4JwqKBNbtBueiFdz92cwecw1rV4JKm91pDDuXwJwLQtSEwUbWiYi6UT4B4okKqpqLbuXNjyd4wWAmqDrZF3sodUD",
  "key15": "dvECeFP4J4vrJQQa46ZAstEFtNHTEquvCukXFVGaP9WhDffjrK66JoLc3LWVnPr51q21bVo9daiuUhbGj59BrnZ",
  "key16": "367gjpTJoPeX58vsKCSAiVE5srC8ysf7XjsT8CQH9RSqm2qojjbhCLftgT65LHSKzhwH6xuzkryiDpLy7qc3X3HY",
  "key17": "42y9GYJyrQzaSCEJhLdVbiinQW7QD3QbnksZZAMKW1iLz6YSq28H48dBhV4Z4xzjo19EwbL82bEpmYtXbJtUBrie",
  "key18": "5eLyTyQsc5RPfryCNvKbh3YhGMzdYkeNPugNitEP6ZvTvc2j8aeLNuMT88M44HbUEvvd9QARZ9qG3Q6dbKP6opZD",
  "key19": "3nWZnEcMnmuY4VUVHgViHJVWxKTqREAbMQrzyu5MjVKFHq598pUHDLsQdN7TMdFRDMEmHcRFiwqtrLUFtC3iMvwt",
  "key20": "27SUkoDtn5VPTMigGwQ8eKaNTpAJifHkZrpiNU8FxJvYkegaSyNLt4h52GXwh9rZsQJwwmmgVKTGa5WdyygxnFad",
  "key21": "3Yt8kQinhnFDNsvaWTemQypD6cjoGBrBMLVYha1WW7fpXA55yko7v2P8bsur2HtczQKsyEFoywBhJZdDdU6gpCyC",
  "key22": "4rKWEQoFi3Tm1atNZ8nPzfS1cMtz9g7woW4cCHzcErCMNtSuNRxE4qGV12SwTtHsQqFBPUQsGsbvPP4K5m5pvVJR",
  "key23": "3McXpd5fJdPdcfauif4qnmbwxYFmM7d1jqzHrx5DNoHinLPFTiXMuKjJfBP8vsxym5XXxpmverhT3JfqUYyWCps2",
  "key24": "245ZFL94piNTtfAauShgsnuE5FmQpkxLpkcxNmU9vz2CSnFCRcMNqfUFXo6LkLXYPmCxsUeS2GJHjMwiz7wDWNYa",
  "key25": "2ddHeWw1tKquwtTJdULxyKAXWJm3BcrB3q4ooFwJHhjnDKu24bnkgQ79B1cebB7dhqQpzpjLi2aQ8VjQLwsK9bwm",
  "key26": "5btSN6XAhJoS3FKPeyLZWh3DjhqAn5LCPS4nQcax3fJLWd8YBERDGAa3kqK2vvd6jAiWh7hz75fFR2Ef5Kr9vaa2",
  "key27": "2jqRvdTbaPVDKiyo9ktLtBj93Fq5vTCGmXvW6qp6Ys29tvQoYeNdUnr6g2t581nB2yuWGJsqRQmrdgH4Pexde29u",
  "key28": "4ejkYNHWqeZJK34NXhrmN4piH8Jrvo4Z3KNFtAk421rhvSVKCtmdcvAdtUQGEE5MzNALZxkBSSc5nGA6bLsMPuuh",
  "key29": "yHoPCmroLSksCsBvDtYq4qq2GnLJmiZDGm9xe3hdTDMPoMA2YKqAH4A51qpzNXJUp1gGnLk2uqz2uLepL7NbQwJ",
  "key30": "4CZXLgNX8pK358B5tUx64sqNPaQmJLDL7TaHu2zL2S7L1U9DQ2Vcr6U4UBo71UbEpLerUrrzCRt1ejzzNACtqQWE",
  "key31": "27dct8p3fa9rqJN46xCFV9D9sKeALUMAiARDw7Zsd6ZQBREWqa5mo4iZo2Z4k1SqPyH3D2x1gSjJ2inPvcbttS2v",
  "key32": "5G1Kc47B2hyFzVoVotU9AGa9SPCdREaExar3fD3Egin42C2Xa1Mq1ePAFVtVnLfMqpeub8MA5p1yvwHmK3Q2W4a8",
  "key33": "5DyyvmgtgW9VwvgbZ3keZByKxndUZnxzzkwJULSYVRXr5UtGXLa4qKMrykTrRvMrDJH7aTpcD8NXDDzs1poERLPY",
  "key34": "2w8pZpwFEBZBGBRx1V7h2q7657s2JyYpT77vi6FTW86N67xdh4WDLuhvNTnenAjB6Xtr5BPp1cdwru4Vbz7AvK3z",
  "key35": "2JRGuMdTtEZqKsF82bf3w7az1XpJ7hhvXwaJqiujCtCfV9KKh7fkeCLjHgH5e2SxovbLLE8z8tDpSYnRyfjrquL6",
  "key36": "3g4EK2asGRvEdgQadfkqfTDAGe5ea7ftoweViAV1V9xNj5ajgTtXNeH6JzipR4kiE775Umzw3n9WeiH32i7dte7N",
  "key37": "5gEEihYuSyqJ8nq8PH5Mk8SeQsihp5YSxVRLg5cYzdzar6EPNSTrZMTgtYUnidNqMYdPDCsnfFT4ZGBUyD8FhL4A"
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
