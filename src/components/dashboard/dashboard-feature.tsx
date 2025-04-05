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
    "4Vp7VXQ4qB6H7UEMt7YRcLunyLXFycswbG8cnzp94hi5n6RbTsqZxA26cFXbTiWePDrRyJq4RoKWSj9bX86SB1Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGTjP9wZUKCs4tQdL4G1LRydm1Ctrtc8NhKyx4eMn4Hfj8aMp2kt4Su4Gbq4K7xuNWL7pCxKrQhxSUSmVvseb76",
  "key1": "uuyrwNb1xNYVgLUPRiyCfn5T369qUitUbTWDUekrZb8U56XakcbPpvH2zZgDaKgGs1RS36wpv9CN5ruCMUgBzCS",
  "key2": "3W8ttDrw9x43S4vXLzM3LGSf93UrHBiGVPS6wky1YHoak9C3dzeivZXvKHWM2HZgXLSPFrL4SnyRTBfJbARL8E97",
  "key3": "3fMrpF1xCvJG7a4tjmi3ADVBntW1HQ66RKk88wMPZ3Dk74DQ1GKyB572RbJZApD4Qz4NLsGfFWMCjYc2oCRHuoAK",
  "key4": "2QbXxKAMuqyKXcUt7C6kC7rovVCyiNwQGo1TDFmiqJpSQfpbqnL4261B2QZw6e9zAZMebTNrPtk4PgmMm8ACiF5c",
  "key5": "4oqpbgNJAhW7J94A4VrjfvHzAtLYozANKr1vrdSq52Hiyyzwdcy2admi9ToBGBMjpwjkGk7JnabeYNePDgWQ5ZYM",
  "key6": "Z5YQz3Fai5vLN1SBzX4KWnLFEi2StoDyT3knTHRYFgDSneGdKLsUTvQaj2PKCeLEbchUoa1aRdif2bGMMGFbGo4",
  "key7": "3Xsh33gATNjrG2my4u5Kv14dzLU7ihk57JtQAJEmUdgjRjgsMqr241rAEsQzHyxRMgEA2z1QjabCKfYsF3Jdwb6k",
  "key8": "zL4wuw4xkuEqwnrb4LSDJXxmD3ZehWSvD7GXkgzZmWUMWMosnciTbZXdu4253DqJj9FvQjLYSwSarhvHamZhhrH",
  "key9": "4w9o6eHjQ4k3YWXHYy2EauhKLXcMU4EuKHJWyaB8DX9Ti534AXCsH7Nm1XFdYdo6a2qbRpUWepYDACSPYZs7jkpj",
  "key10": "45izmeGyvNGNZgL9Q2X8RELwQicue2egHvr7SD8kzStD1yq5fJeQmyVcipFMAv61iCCAL2nfWUtDRe7az2y3E2Nr",
  "key11": "4M9ZF6aVDV6oSwin6BjgctYgKek1GLkZ9H9cYKfcuon3aR2dYD6L26wzXxjg4bbgVLboXFBdcVhGauyt2M141Q8k",
  "key12": "h1RtupDz1wmL8rEBsP7dHik3ZwGJdPJz8WeGAZg3DamRQRaRprBs7DHcaeuFRUqMHUxwxqtXbrgMjuSCvMN2Hyn",
  "key13": "rUnkS7rwBpo451VS9FqnFaJcrweSYngKt7PTmS7NhWyYJir5MSGZaPMWHe2YV94iXLhBAp1JXpsJfy2BXNoqBCE",
  "key14": "542gy7HJQ7GmMdYALVUpcdmyANvnDG3bEdvQchMJDwYR3bNevcgzciRnDJbwP7k2m3ZkzMA6rR51qmPwkHg5BVFU",
  "key15": "3x1BFTFx9KWbXCXKbV5Y5vWmxxnckC3yvkHnMvspGMC3e9r3tZDwrcFzXQfwr7oknedmZw7KMznMB17y6qV4Ju6o",
  "key16": "25xBEjcjZFZy1XQz7q77a8SWGq7mMAVcN7zoSuCDQTc7mFCVxUmzgrd189RMPr3jT69rKmLV4RLzA5UJKrtDTBPN",
  "key17": "4vCUuveRGJx2BzYNLdWEZDobVkJSnB29X6rZZgMWbZSVRTbz7E8gabUJaxfMr7Bmf7KUouxS7jWBWEBMmcw3AEVC",
  "key18": "57iE9qHdhBgiR2b8im8e87aAuz4pbcwfwySWkEduRcgZuMssEXEHovVHYXyEYucfuMD3R7wYhmTRbsNwVMXSgyXU",
  "key19": "2cCgQBZG8eV4c7JK1wEeDkRYFA5jfyf1gigPT2KUshqp556kMCQcwS82d82WjnzXRE18i5ZbWmtDaak13g142oUa",
  "key20": "4Fa7HnuaK577TsnS8pXNfN1KdkrH6AqTBKiunBvuKWHrbMTHUp1yX9edzPn3Fwj33o57nA71XNmGgXJwjQCSt3xe",
  "key21": "634fVtt2575m6pGZP6SvKcnpbCeB8Vp47kj8Wsmpwe9Y9LKkYnyrPd1G7YR58FkYSfRNha7R9AXJ7C55saracvdS",
  "key22": "4voWEBhueVfirxQuC9ENwrZYveY9PjMQFhfHnMEzBvQSPgYDoB236m6GTTD49ZT3Mchaajn3rTW53q393DHbwYJi",
  "key23": "2hWSTmybZywYKqj8tgwskZXZ77MZgkKjzhFRriTAjw8Esn9RJQhcN57Sc8uMnD6SZeJzCqMXNPwMMobxN6fre6zZ",
  "key24": "45H2xcm2BzciPMtfNKC9TzRkbkqwvMop24w6NQD69YrivpZ5uKrNKLiSANR74yagexcDx9uEFgkaM2acbPw2gKLH",
  "key25": "4TQVDEtbwNSucocpx6JycBvtatixr83c92yyKK7xkPVubNjNxS6oSnMNbm6N6yP1ixs2KFg2HKpdMs7JfjGjRZi7",
  "key26": "2dM5mp33FxtSgHLnGuJHuQnfpZABQNbFagb4aZ9qifSrSihRhup4LgvjGHSWrZ9bcQRnXeeSZBrUZec4k3rxUjCu",
  "key27": "2KUmwfkdSViZWLByH1Lc8tspicagqekUqcFfrqf8f8GArCVQDmYonWkjosYUx1rFMDUXnjqgb42Prr5LunxuyXRL",
  "key28": "2mo5thieePy9QC51pgRYfpyUwxnfmaX4zhasJeHu95cKdYjHZDGPfisYYFFP8Nwb2kv6XQX9s4smZ46seeS2wZpW",
  "key29": "2fhxSj3Xzg8754f7EikzgZmkqUSp27Q7BYWh9q1xXD6ZgZY8cT1jXoZvgKPkcLAYVfpr6sjS7ga8YNMJcN498Sbn",
  "key30": "gKHHTJV6KfnazQXpALsNvJg3tcGV3R2dj3n3or7YRXT2FCpdZkcRZXv2FEVjp3FHWnnDD6wuGkbFZ8m1vq22kCH",
  "key31": "YWpeGvwvqFW9jqZ4pMTgsqBNSHsRZvJNzfD1h5EazetavN4vMYcGvta3dJqenKudzyABzhqhPcd9bwwG7maDeWr",
  "key32": "5fw3e1NwrmRE7pqEYznhJx5Z2HPAvz48pEUYW4SMVkFW5q2pHZjZZxZxrJSgNSoHkGmnP1fRPgYBQE3qQRqXHWw2",
  "key33": "2mtMQFYPt5AmqLAfkHRxFb5iD3u79TkxPsEgTSuQhQ4WDrZpjiEK8jNoA9mrqfJ4LMrbVtaRoNzhcoV4Mqh5wytM",
  "key34": "5w7tkrTEvi3oZ6YMm82vTTDh1Y6oi5b99ypLUxJp7z1nYM1nJ3oYipV1Jj5VK5bXZEW7U2X4gnTZbHPJfVGQ6y7T",
  "key35": "4G5XKtEB1D2bzvEhiyfts6UP9qAfGfHjgCc1K5C1DzADQ2q4NgJLLbKQGH4D24J4U11jPojSRS7uvyC9uUwmEXS5",
  "key36": "3HUUUwuJm9nTESjS22gfZsSPvRv85DkqURZaaY5Bz3CWExD4ac4Q2wZhai4v7Fi9YFH1YkVzf94qcy2yngQHPQJq",
  "key37": "5UaWtHteZPrGhGFLZXThQdVwKrd5ai3RaBHaUHURKEsrrC7UwE4mF7hGiaBZRupf5tu9SV5pbweMibHQwGtG6UnE",
  "key38": "24cbr8AXtwt3Bd2LvpgsucPGVh15AD2gUeKvYfy7B689i2Aw6sibZQFt6mo4q99jYi47S2wi61RoxGggijp6L9Yx",
  "key39": "5cbQeAM78gwejpUdfK8aD8USsXjg1J5Sgxhf1P19GQAp28fB5eobGfoFHrVmvYoha7YuyjNkqLtBEqfVy9ivgAWn",
  "key40": "5uLQFcSidzvTrZKZJiDsJDAVdkdd2AGJduTLcuCXkvB3ursWTi4cQn5krTTff6Mqosa2bst5ffgUyjCAxVui7VaZ",
  "key41": "fsRXuGHjJwGaf2NFQEHPEZGQps8W4HjDYtjuNZdUFoM9aMmTHfddaHYF1NCdn2ExRHUE8Xk6g3653i2iZoz7a9g",
  "key42": "4QXYkTKGHXCvnqKgq9J24NdwEA8DoZdYbYT91KttcjfrehGrxdKa3mCZrR5AcjjNdgeYgFXvJqPreG4EzJfMGNFC",
  "key43": "j7xmbFBdRmdpF5vfj4o8hSp883YtvfV3BS6Ua2ttk6XNdCacXG3JuQNS2tsRoHfmcTmYotE8hkTLgnrNtk7RrHb",
  "key44": "3TevHTdrPjiDiYnH148Fd1RbWJQbuVVQLRjWKWxMT1YLVktF8RhRtdRfDP5MbEp4umrYEDXRu3k9RqbR8YyJvWs",
  "key45": "4dzdYLnKZk9queQ3cRYNseTberor9ibWpA3CtoqNyXb4Mjcow4ZYFC7R6PMAJVToojm2NbUG3WGa7SFMPF5hNUXv"
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
