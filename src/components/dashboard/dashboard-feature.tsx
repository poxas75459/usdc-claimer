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
    "4gwLeGhkaZfSy9JD9oPCn8FUtqNiNAHyfdMGjxCFxB3gUQ5RmiKehMzV1w7XDWc33dtECMzkaDWdXt6C3mc3mVpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xxFkRQ5asXKD894ZeBKKAqYztYmmkZv7y1iUMSLYeS3NGsppGQQNrkdFiDT1CGp4dKMLjFmwyWLqiRM834gSR8j",
  "key1": "35ypJ5ofFm2z2TtcmS1muDmi5Pp8iiQCwNKpb9VX2QRqQADc8pXUcKBHJTDz5ie1L9PTzSPtLt48KRSvsts8TYXr",
  "key2": "4ieWirY8T5tHPTqVF4qTQTADgAHx4pzUw7QJ8xNexWsAiejStGb5pUYnKcreh3pt2W2pzNgd4mYfjysFN7CZKup8",
  "key3": "2sDQxytoxjg2SKbJfdrDQjEAC56dkTKJaZfuvhzSCH5MBXP5aUJJ3kqNgjcXXLgwsxQJsjzKDSnyv9xpATKMLw8p",
  "key4": "3HDgaqQPPVraxrgxjKH1xmFKh78m5YwUP8bFNdtGTTttuHEnf92xoZaGLGN8EA9fvCajzBFCuoHY8F9N3aaeT7uy",
  "key5": "2fdSzEy4LXXhRjZQ711wBWEqEwXjVueeoxsc9wgd9wWP1vtuoN8En5TR19ukw3h38YewrMtkeuXABoNxpP4CCJZy",
  "key6": "2QEndDj72qLuMxaYwtGj66y1qJcYmraTjNfufxE4AQnRo5xUwcTi51ojErfYxF5STrXuCu3p7cWPpwQ4JSs7s4Gc",
  "key7": "2DDpZ1LvsrDzK89X18ebyetEFVVM3CJdzXF5i3mHpFNfvP7rEg8btF6p1XE2JEQ5iMJDFVsMuLj5vj6Mbx3Uk2he",
  "key8": "5pVeVz9658Pxpa8aQJsqx34qducjy7JGCuyeCRwvPDE5nv6gawthYauKaP4NyjSZitcVg13KDWGtRhr8Jo7RH4k5",
  "key9": "4dGgPhr2cLWdzFBChbDPS8Gaai6Vp3hENvoZg31ABnZGrDGJiGriYrkfEk7HUnWQF3bSZLutZKR4CT5MAeAX15Q",
  "key10": "5nnoaWSZtad7iKHMQh4K5gRYGhRS8TBpWsPnudA26Mv6f63JXp4ddxVuAP9hN3YrWJT1C8E39sFaTfSAAKjJudfk",
  "key11": "2rxDz7x6UfPzmkSWZc4irQA7V5ZzA9uYmzAQ9UesbNSf7absCQQzZa94aUf9pXgoS2Hv3b1xoNC4QzSnWCrmEHH3",
  "key12": "5z2Rsse51aCWgtLKt3BpzosXoV6i71W8yeKnqFwi2boveqWsC6iEu6iSZvJ84CZHVhL28DUWcgaRGXx5Qiz93dFP",
  "key13": "3Z97J6KKAFwicGg2UJXJHSkRLhP418VAniqwtLczSMk48uBX1LQLGmgatuVMd7KgpJs5wP4NrdL7ijgmC3qFNEG9",
  "key14": "4ntuX62bSNmd7xtYo48PhHLQsWTuzzaSLy2WVfUJSZMHLqQyFtsUV9EQoUvqt5srTSkPuWpw9yAxCdsTfcXDZsZX",
  "key15": "42kx24BV6CQXPXd3x7a5aLsqx8xU9khkAtxuNipBwfgeNwMHV4mNpVPGJMn1R7NvC7RQNZ7Vh5Yaieu1R5grwnww",
  "key16": "5o78AE4ugtg6poZ8razKpR6LE8PqvVsAvnPU2LAoWQZ9nDVsihGsF1xgCuk5oGtsPzdJvbuXNDQfDHtYm16tEpB2",
  "key17": "2X3bfPETnss7LLkZeMCyAyvkShrZVqq53YP1piSNcj3Ux8tGvZmSrSUZmF7SGsuqhJ6Wg5MQ5G1EqwmpRApspWRv",
  "key18": "4nBueLNYsPY8WBvsJotqs2cMtqs3NNhNG6fU3tsAiD91ATre8KqxokcetoN6q6zRvvFS57BJsuFLQavHcMHUHFre",
  "key19": "2guCC5NvSR5zP9kfA7adjZbWRwUeWY6iD1nj5pMMmQgd4k6sfmunmxKwNNcqPVrdzycyWsE7XSWjsCPYxfNDMeWK",
  "key20": "47yNBKstdWhsgDp2w3aeHHpFAA1git6QQyjMrEhZvJWNw62RaLtjcSLXMf79HV5vXLWGHXvEk2deFT5ewrtkURhV",
  "key21": "4e7HaPkMwquwPFERtrXZd6EuyBksE3a2ZXR7ry6KZjYmcJofywEfPM18rWazbhqGSfC1rhL2UmdmabhQFPhNHjz1",
  "key22": "4C8sKiHuoPfh3cwPe9pqXcyabKU6FNnSP1rNxq5CTpiQVSpyhFWJQiFMHeTJvLBPSehKgBLCdHBoGW9EVGqL8y7H",
  "key23": "Vb3mPp6bbLc38UNF83QbLEqqiCc1TgwaYWTw1isLqEcC9r2Jwuokkwb8snJhW42Rsxu8uaQSXf8RGpT37vhtR5c",
  "key24": "SmbEXDuXco2nNDjwUX3qpWEUS3rRGYq4vWXNh1xL4sZY5TXacTCs7Ghmo27rME4o4qh7jBPUncW6kqR6FCg8ijT",
  "key25": "2Rk5rRD9pCsfC1iVpdDgNhnf2rj28hGJ67cgWwKqDwLJMZHjhbtkXTPY7FPVHV1SBpC59A2qWX7PLT2g2La5n6JT",
  "key26": "4xqNxKFm25Tw74ufibYtq4DYNQSuXdcabHJ6nRcK8b7gtg3Bp6WSopjRTFCGQqxrPSVDxHwbkZQbr94kX1tEdg3K",
  "key27": "3zrLknMjyznSGGTC56s7Hv1pfFspmhtpibqS71xGtwCjxY6UiE79MbyBJbAfrmpthNbvmMUmZoXETkaZZdvdcvta",
  "key28": "xDeuuCQpf6NaxvXqX7MBWkrNbLArG9H47fV16mhSSmPwuu76YRzKiDBf14FNCLkvnbKWMK3Tm7F8LEXzaXngymZ",
  "key29": "2UHhZEPsypoRpqiPQgFxEykU2K1zLfbf9TNrdBWv3NUgbGnN7LHQBEq48GaPv1EPvu4NNuKswsYBPdckAeqx24zk",
  "key30": "4nnt6VA2EezarTWYTCKjmoczV43hh9FY1CatJNQ5Fn99YBGrVeBY5AeTKrRfZ8PEtf6zP2E7NDZC8qebmZqL91SK",
  "key31": "3mvX6J8wNNn1BryhqW3Dn4yCejgeYAT1AvN64WjwmvFEhispyVmLPMigYGZHPDPLoDLtisqbeeqzK2AX96YtLyWA",
  "key32": "2S4K8wGG4rVh5SAQcDRa4z9FD78YaiRg5ePr2Rfbfve4mcruesXhbEcC45HZczKgm5QZVdVs1P9GiAmKusCodkQc",
  "key33": "2RA3po3yd9Q2LtjwZaZmrCP89HhewfvsmnhBLZAAMbL8pG992fpc4vkTz9Uu8hWDc8zhZQj9HLiRfmgprJ2UGnMi",
  "key34": "UwRkQGorzZzukaoNDUS6PTo4Nzx22C6AWviYKn4wTUSMQSHujoS42P6Bnw6px7G1okqhTDsbtTtqBxYuY6QS5Yj",
  "key35": "5oK85soLd6vVekiMnwKSf2mWkeA3VmRmsNTMSxvH3PwqQKGcUrYkwF4cMzwJadB2nrAsBXdHQFLkxpqXKMRYNFTC",
  "key36": "NsAirEeJ8JgjkU6a7zxh5gyLpWuyQgkeGSF9TudsHQ4fkRCaJL77vAVEoNFUYTg5h7fYcAYEg9WML9T8DgofVoZ",
  "key37": "5tk2XTZJCqLyJFg9B6kAQKTX1r3V9mE1cPF6WFAmMGb4uJgY2AbrkTFbKjniPHTco8eEF3tLttCv67YSQjeVFvV4",
  "key38": "3ALFkVGNPiKwD7GrQjwS9U27dPJhpoegcXfAC3e8CsxTWrzajxi3iR8XBYbSY3xmz6fCPmVawP3JgV2e5r1jJawY",
  "key39": "2tsgNRiqX9vr8qK1KTeEghYoSbfQqLDGByh3b1ScLTTCiVgFTm7smturVxAT6CWfCrT2unD7nwmwMMbkdZLPaxGm",
  "key40": "4H8MPXe7HRCSXdMjGNxeoTAj5NkMsSHTR12caGa6yXGjq8PMq71GHGxgs1gV29EecgdM877HfCGzJ2x569Gwqnjd",
  "key41": "3AF91MjHcLw9nkuLfrQFbPtCLv6GCE7SYmHcqPfQDQKVoDuDNHFXw2HLmdqC9xX6u7jqobCQxRDB7k3zKpiVNLQr",
  "key42": "3K66Mrs8hnEHihEyrq3k3cGgbinhkLL7fkKXoeXtZKhme4ViPDWrEFeffKv2kkBsnyJgY8dhBeHaUKNp7TRxhAL5",
  "key43": "3uQbeuUXPUNufai5r3LceDzY5draS5WRpZbtQ1H1PESqiKbYUkJWK3cMyAGGwivPvDhWrTLYaL68LuJJz33arMaH"
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
