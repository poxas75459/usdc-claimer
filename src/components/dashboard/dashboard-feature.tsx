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
    "3fbh6BfC3sNaCLoaCZjeUeRpBzVKNpFmNPLPdsP3XBzM3kkLQae8U65sG6HtB8ZgMSzSexfmprm1moNd5Uc63W9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhHAHz8Gvmy72GmEMW9Lc2wGykrinBUqSZf8vSM11A3C7aUCdAzxeze9A8VcR2Ra3D5N3Zx8PcmVy23g5aGKBwL",
  "key1": "2kJiJkLJ93j7kbmX4vQqbXX5QKufpqcg8UqUUPHtTnMpfaAwrZNnpVA8xhrGGyMKmEpxEUBMdUcA6ucVJYmTa2w5",
  "key2": "4b4SQK3S4t563EFQZXg9QADym7Q9B3VcygcceSHyPQVQtm5voywJHEs9BV1e37PRYY9qfVJdQVRbsUFav5oMarbQ",
  "key3": "4QBBpMeb4ZfYx67R94HhhNqGvBA2YY6iMe6vYFRZfWrSNzqm9Amjs7xJ2F7Gd2cKGTCsDgmTKaq7pZKWsXbsjhDq",
  "key4": "2rYyiPCNbzmMQJcLiy9xxtt8pFE3wzRyLXQYPRwpZ6Hm5j5qEJBwVE7wBngysJe6oJybAMgA33JsXvraDwcQEXUx",
  "key5": "4NdMz1ijsRoYhqWJrUVj7Zu8VR9bXHDg7mYHGhuxoWo3QxzqDDM9Ri37JpwCBu3mhYU2KEvQL9L5koSnHtR9fPG5",
  "key6": "4CUi6vSGbiwaq7KyxqFbowTLrpPT8dgLDJrYdb73AsJmMCeLq1aKkJJ661bSQeZb4y1XQfbrnaQUBdmLHYRbtEar",
  "key7": "5HFA8F17cw3HVi3En1g5NGW7RMuioytKheazgRcLNRQm7FT5foZ2T6UJGWw1EkErAvPqPRcsDTEkFksgUh72xdov",
  "key8": "56NGPGoEHzdSTPEznsiTd1gGnutKuKSmqEibv1DG9x1eF2ZJ5gJbArkrbT1sNgj9YDJ8JC1Bwg7E6B6YMaeQWwUs",
  "key9": "GDDKwjyaya9AVFtr7Zts2oSxf2te1hbzvB5K8gNVK6vLkqhAWSRoBouZXtwdhgf9Par76ExtidtMpwrjUi4TDzT",
  "key10": "5wzNuHzasTko5FhyeFrZBa7Q52RG2ZQDuMbMhy5h4LUWSGatUMLuh2DqqKKJpDu9ikvVc6xBLmo2mWfdKqRTzYPf",
  "key11": "3N6Ji8dKWe9pcBxsyBV7dxpTCxUE8bmF5pPvy1BTKhGUisHsLibNPUwzxTBC9QwzH6gvync2yhuqSNezTcjnYDp7",
  "key12": "2sygMHLR2XH59b2jQ4imARQg8UGVNA7Yrh86ueAEexvN3ojioBLjJGbTcmpJoNM3qALEBguHBotHvmzsfai6mqsU",
  "key13": "4uQhguUcmcUVbQRM75TzqR7gWQUfpEstyP7EjkewR9RDqku773Cp5XwSBdUPpQ4UYTo6hnUzEUt4wWzACfqLec57",
  "key14": "4WRPcdpkWqgys8hSvtZTfks3qs88e4Wirmi2W612Qhb72k7CTxqpDx3k5Txf9N72Eg9APSErEeDWgY6m3upvYMnb",
  "key15": "4fkev7NVsb8dfgjSMm9G67Cge1K5HgqG3BPWdrbXLN5VyBkYgGiKpj1fRmo3vUXw8BA6aJj6fuLwoxheu5nwp6BT",
  "key16": "p8Rj4ksXGMT8LMYMpq5BFUX2JSNNGgWQrHJAxq9Jnh4xGAonQTzgLY3RJVEurMkU43eNT874nmRJPTfyoDAmYB1",
  "key17": "51eFLHECC1ZwLs5dAp7xM9aeGxzYmp72C5JwJn24WKQBkhiCP4v3bKkdNU3bCJe89eMFDfmAeuSb1Yvcae64ms3T",
  "key18": "4ezjKAVpj6u1Kd7FDJrtV2Zu5RBtWp9T3YjK6kPRypej7ineiUdHCumEAn2qfPEguF27ptyCyupDfG6Csw7Ntdoz",
  "key19": "6EagbgWDyxdttq463V1AQuJ4WRGQpL3f7grtEbJiHsix3H6JuNTUxsG4gTvSDDjcWr62PvdvyEGubFBmYsCfEHt",
  "key20": "4u6E59x2R4zWumaU9BDiN1VXkQiqoLHwEKmNbfFxA1YDLGvSMuxq5kUi1hJxHb3rKea9maRKJFpw2dDYD5jJCvpi",
  "key21": "3yMXM9bz9QzX6hozDs4gpHtXk4XyqZis8XnFuEJrsLT5jEenQMAXnJWV3NGDLUzh66qKpCvcVVBUUwcHPA8tvQ6e",
  "key22": "2JFzxYmpmXdwbuYs3snUdoj1JtcGaKLTv3gEb2npJJgmMDjgGrpovEwxVZRTU7AmMktf75Aym3kimt2LF2z7PsN",
  "key23": "2Jv4g2zHfn2qxFDb9EjZEny9eaGw4VieQbLR2YAJ37kW6YP5bHNgKUigD5HNRGeatgsQGDYCjgRhwhJR5XR7DonF",
  "key24": "2zEkzZmkWdzX84Kord8hyBBmAt7VVaTs26FyWeJcVcXvW3A1jTHqWvreuG5xgGa3cPwyU1LfdbGg7ZduGGm8MumM",
  "key25": "Wi3ZspFrhSRhfsRgQxp5tqUxGtZ353cJKxzXuFHxWba5WrjLaLSN2m8wPdeARs2Yus52iZnsA1xyxBWqsjShfE6",
  "key26": "3GLVThCHoEkzH1Rbm9dQZSk5WnvR9zFCS1GLwu8NVcaXCaUDrLWMn7NhMAZG4wdbtiuZEmBxpLoWAmv4HLubefhw",
  "key27": "5NgHBKrWh2PD7YXuZ3CXJzC9pdYHZTEw74MjRNbFbj8fmswzLQFhWZdvC83D3Wxr3jYrTNce74TcnLc8SvQpF3fD",
  "key28": "4kCZMKHDgftwDPm9rLyzDbWtvJkusG8if8mTFK6Eibj6bB94deKEiwVjtTkw4igmxWsMJ2Wf7UZoYGACX8AbDvAv",
  "key29": "4A7MzYprRiRGQtJGACQJ2rVPgkeDyucEyaTdox1ogXuCzLw3VsPtdZcwA5Qow7dfuVbpRC59DyhwURV9XKry9em3",
  "key30": "4QFy1ks8q3KVaoZdPgno1Qgw7dty9KDTQUH255PKYUXVwGmBc3bJoDEFR3UZQSYZM43oeeSVZziSZ6gpUfzrrMNV",
  "key31": "Cfd5dAuSNPRueAhNzhmdLsyLha4xDzVR8STrLXPfWvpNYTFA9XtSo9Sydj2XPLv8Cw52zhzfpDn3jenFyYJuhd9",
  "key32": "3ZanxWX8U2sGPFz9GxY2T53AAfLDt4JTHJfWvV64Vbj1rW2nXQ7igWo7s3iKWrUga5VuiKDrh7DHVeBfrDYAc85c",
  "key33": "4fTAdTRTMoQNe8HhsWmzmqYPdF6uWcpyBdzjNirvNdnEk7swB1uopzbp8CP4NqdGcJod4hNTuStt8skz4N2LdQCc",
  "key34": "prYxtQo7czohpc6B5BZy6feSmjBmhinXjhhUBJSxJALkNcfD4iasu9PMG1MYyAf5MSnurZoDRwpsbmyWJmB1aQK",
  "key35": "48wBTnAjDoWsw2ASY5R7scL9sMuz5shdkAfhVxovdrW11ve7YG3Pr3xH8f2XAnrMuXNRS2VJnLaQgirjsJM69BmP",
  "key36": "25o6A9UTkP7jc8d2b2Ach9U6pw75hmWxHGDjTskMRYGS7hPCVkU84PpPfRJeGoELcWYp75tgSy9PPt4hwuSHXFb5",
  "key37": "3mP2svxPbMcbQNcRwbHSuTFoAHDSC6LUt1dUZtxP9vd52rEiTpY16M6GoGvK8JFNgc1GyXLSnUVP5SxeR8hni8Zc",
  "key38": "2epeKkvi449HjH6w92yYgbogdjwrVmwzX9im5ArSF33TQ3xSZ7gJeaJ4WGVZW6EK8ES6DdNzW9PBzXip2S6KuLa6",
  "key39": "2KPp8zeMq1EfWNZY7YAz38x22ZatrnvTnH9yZcvWVgg4bePUcKzbMZ34H6ukd4qqhPrEVpBiJGBEB7CQo9BRquXN",
  "key40": "2y6dKAAHyWcfYBYwMr2LwwMdNZXTurugui9bH48dX9pbrLTd1qRHwL6o7Sx7H7dNC4UcCkMNrtocgYtZSzx3Enze",
  "key41": "JtmSdN44WKQeXqnokFex8jk5ybGW9qcUMs5mQmYNGwZ4kA6yaEezHSmwfhX5q64nxD9p87a1GwxzvCroGh6b8Bk",
  "key42": "3gkS3pj3CesgGu4Yph329JiCXFaj4TidFu8fp45RWQTnFHEWj2DdoTRCRkaAqNkGP1etbnbymTmducaJiaCbbyjh"
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
