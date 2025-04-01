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
    "4WDPirHxRKHupVaAeqtQx2xaUMTAZuMPXNnry6ycqjMv4ze2nmmv7cNaV9vSGqRZoFPLpSVYXX8T8e6ADSxNUXbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lh8PmQXRBZzDpjNmJxPjMCqPbJhChiyaYj2Cuaqv83bTU8EEm5NrXUSAGbAHjfjJnkUcTRawCfmCFywRyoDwy32",
  "key1": "5wtD7puVUVCChnvMpe3CzR6GR6y7SoqNbkQyiN2TiE9gFLio7aTiVF8pbANB9cUtJNipyp8r9ML2qi6jqZJiboPs",
  "key2": "2EXgHou2yZgpGZZApwBYBQtRSTXYTKSxpQVZoTe4usCmCbPGc7U3c15ogcMueYntUYjCLbmK2pBGsegn2UKiEAYM",
  "key3": "3zsY6b2fEcLfySfK3DuVxBWXWYPSnN7b9xxewvbkhKLCWccjVRsJikbcpEvkUx7kCzbjVxtU9HCNiwphdGrZEz5T",
  "key4": "2VixxAnfpr9dAgsxHgmaCuTKiMgwwrwAqCd4tfVBX3drnkoLNw3u73JJuhYgt5H3XuVAMWoCg3wiw9LHwGrF4xB5",
  "key5": "4hvuHoJBA9PneejjzBHGbdgPNW4JG6Lgvin85QCyLnRRr44hZcbtRW19WifQHeYmi3ND2WmE3gmEZ11pGpx2GdEy",
  "key6": "63tANexMkAYFeiqHUtXimSoPdAdv3k2pFMiZW84AYqPZGqGdha6DgpKL2g79eQpADHhtuKbRJDxFpKB5s4H3TqY6",
  "key7": "4YCKBPGa6Sv8troR8u5DqPLSnX32qzDZ6WrkEjqUeuUnF6hv6YY6e3CV2QSCtHHwLRDdPRqkaZgpxF8wxM6zUCLm",
  "key8": "4Lu6sTnSgkSfLTVujxwJYcdAvT2E8619qRQpTPobDEzSvkdYELUARgxSxWUq4vSZTWZFpYaXQBHnmU2dCKYmXMVq",
  "key9": "2DXoupr7HqCRZEsuBit42BAf4ZwyuFuLdmYc8gqV6LV95JfgGT7HfCAC4Wt3STsKtusQvKHo69DYM5VJd4PZQqrv",
  "key10": "4Zgz7Sig2wkNP5GuSxotUmKQhHoVkULGqknj1o65qMeDhqpLW9PvNtVtWKzoNogw1R1vPnZv5h4b8hXgg84iAgrj",
  "key11": "4cXrf5j88vrdUYXEwTnFiybVy7Q3J6PXXjrFYHwP1PotYUJkS6NMtBsNBbk5YMMFJxbkNEHRFvd75Bhp87DZWgVE",
  "key12": "43zyJRSLXeAtQY7c2xGQZx1AMcCaMxbwZdzPvPBGZxRfpHwGzTLUvjef7XmD9hHaFDwVx4Cyj8NmiCQpodQBguQF",
  "key13": "17nvoUNfJHfWhQkqoggUriAxk8nwd8km1MsJBPVbLKKiQzvj9MHyQzTNXuKoc8wyW69rmmfXdwa9A2M5vEnqAYn",
  "key14": "479JSsEiA4qdQe3J8Z5jCmSG9rKqkgsG5fM8JxNcWUQFAo6hXzugcB8pbz23pXVzfQFgj9Uq85Y9gXp6kbXxQnMW",
  "key15": "3BDAZEvZDAa4FajrR66LZg3BVL59f3t48aXHfNaghks2GjSbjdrMrypjA3HeWsiWp3kUK3z3LfenpFiwviUVcJ9L",
  "key16": "4Uzv3QrhAbzREPMXLJr9oHg1Cc4G9AFw5yoRKbMKfBs2FQ1zQvVu4GLirSQFoe2ax2hmdFuCCfQy5C19hnFT1TtY",
  "key17": "4nje6YSJp4XuDZiYXWLSNozJ6kMK9N3siVpvze6rQ4F1DJxtJy6v66ug5pJ6NGRJq5FhrsjdMJD27KPs9edVeqjH",
  "key18": "5t8z4hejLHWPVD1993ctZCdfFzcQyqhK3ou8hQMxpS42qmHANVQNkT1Jn7DqiVzqAzCDBW9HQB5Nqdb5aFgc3Kjh",
  "key19": "5dgSSvdq9DKPiQimetgFFr9egUmr2Rt8moWAoCrXhL4k9rcx4MQNCFzCEkEDmLfmHn91yJJeESJC5Tq9C3DUu7RY",
  "key20": "4fHFwP1r7Nz7rz7cUAVbwYbt9ejArmQsT6np9n6n9ZreJ8J1RJh8gm6yTTZjG2NPApaWPnpCxFSS9YajFY1mCF2c",
  "key21": "5jaiTm4AkHGyKD7wKQRQs1AwHSfPWdD6SaiJSzxqSDj6qzctzoVunVthzTU7HVQ1PA1WLMoG4jnhyCnE3GSLKraD",
  "key22": "42SeRGTCfdH6uvkuALa1hgMte8yoTq2WSBeNVMMDE2swAMQQFPJWgwgd4zhrkXngEpcDwP4a52B36YhhdGxNiJnp",
  "key23": "5WDkLk79vRQPmexBrQvZ3ArNmUUPc5GoJqPWc2vnRUwTVCHMa43iV9RLG8pBE8qttk1wzrJgHiEwAozLXowS1qQK",
  "key24": "49WeUmefyP4wFAqpywGrfP1vHvuapFAG8CfEU5N1PPZX3sDTJWojf6mjk6DxAqvMa9hy6sM3s3znERofVXjTv7qA",
  "key25": "3Akq3NwdsetCJtexJQzuHLUe1CRSbfuLWZHMFdqzGtAevAuypW21PT1Vswp7J9jWnd3mZ1kyf9jaVXBpjHG2UYp2",
  "key26": "fLFamTgNkAeCdmCoJnygYMiZYaDozyoTCyeMcJuThQBs542J434ZBKWMyFevx5SoVJpMmdi1gGRq9sNHu2AhdtA",
  "key27": "5cn6Fuodh48VcqCCL6jNe7U8WXgh1rYfz6sHfuYJE3nT2yynaaNxzvvDeRVWgN49C4nQfkv91mHThrXFb3pChND4",
  "key28": "51s6WkBX2Mo5pvYDfWaCaxgCQR3ihSpesNL9ddzs5TghcsjTYqpq6nFNpLaoFag8TzxUCmb5QhP2mcSEy93LJjdY",
  "key29": "5vMSJK2NDz6vaxzW9SfReMREo2iuWRPYrwjSV7FF69nhRce2xMHh2Qd7hKJAStKScGkXg3bSmkHFqCij1cmh2GjC",
  "key30": "TbiFyMbUe4WMTiieiHK3mVdKYQV69sEXZTN96nSzCj3BLZQbKYdVryivzJBFbTNZ4qzfrCSnVa3p2vHcPoNF53b",
  "key31": "ckKh8ujiw8NWqbqQh5LX7VzqKUSayy4p4iVrodHgLU2C7D4SrtyTpTonmrvRhJ5LueFoi3uGgFu5PoM8y2VVrKb",
  "key32": "4Bee9c8UsEUAi5k4BSNHoeTpT9u2G1yZ9tHCAU7EtJshKfMVAfdjNb8cizNeECkpMAwaJx3aEfg665r6ZL8ygENN",
  "key33": "qUE4zWMBDQaskcdUBCdnzQX9wKw8yDj5hgxEP8Ga883NJ4nMg1HpmPid8LfHU9N3E529A9Ur6Rxx5g6PST5ijGF",
  "key34": "3g3EXHBBPEsEZ7ntT2gB3bquidBUHVyuUaTfW5Y7xw1zLimMf9NKSk6yNdCG3bvRit81vvLxoWmYjsqsAjbLiTN9",
  "key35": "u86GyC2CTtk752DWM33CcQZQmkDYNTE53xoMc5u2nCXtRNmFVU31PcC1u6vA2SDuFDyEbwoBvMn4oB9g62WCFBs",
  "key36": "35Z5TE6SjCtzYojFCk677REwdFxgshEP3dhpA4Sm8yRqQaQ5KuMVvPR5BmZuL4t1SjyurA5y8f4wnFyKpVoCNkFv",
  "key37": "65421TzahSDRVViSgxo7cM3VnMrV6yLpKdkTrXDBbvDftSvARiJR5UbDqSKjDzj5MsavNe4yCfjZUtsxjvT8Qbse",
  "key38": "64etcwMCdBQXTEJv3CTRpiqrgAzmegAH3pRgWYZmoMQ65a3hkCNaUi2Gazyf6sa2Pfaa1HVrWguezA6WsFfQmELo",
  "key39": "4UZvTTAYUpVTuiRm7efyKLFcdWpNJd67gDFRd3bLjToy69J4HhAYWVvt1Lj3bFoUWnXexpcUECfBiupb5BzzV5YB",
  "key40": "4G1mGD23b7rSc913m56PaEEdb9ZLPNHqEESKdbhEk7rBLmm7gUAwzrqqVjDLxqxyDbnMA5BMs38e4gzAA1N2Rq5T",
  "key41": "2L8T2XhP6YFw6TFvUryCdjPi9Ci64eMXdT5ERpzi3QYArqQd1ugptiKuXf5SF58mDTgN6sgbu3B19J5txMA81T6k",
  "key42": "RUQQRux5e9JnXzMeNsn1TmUimhUgaX6T3PeZm2qZ5JzECHH95mD21ncjA8MR1tj3L7Q3QmBEEJT8CmMMHni8xRT",
  "key43": "61EwbyJbxppaq5bg9YAviUzPRWQb9VUmvVRGFKWoSaCYVdG9DKjNCoBFftrqS75bGoa23vxLQQw8pCdqXaFFf93D"
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
