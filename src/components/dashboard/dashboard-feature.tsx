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
    "5VdhCGpboXHBD4zbQfn9aE1AhyPwa9qWsisuxkGDKayYgsxGaFqQH1uMnZtYZXsJfBW3ma5p851NZjQnVwb6eFGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fBQhZtyKctCMS2ygS3XNFU9hrD5RCCNtHNWC7weGq4tk6JtGzbPCFVCwq3DgECZGpYBmmftA2bbnCbWMCukoTFa",
  "key1": "5cjtTkSVhCf3RhThsdfrj2yxj1WiDB1R7ADzq6F8H6ySiTFp8AwMVLTRQCo6aqoBPYncjDVfmnj1Y8E7fF2hfaPK",
  "key2": "3JWM94pzb9ztXA7TP6WEXVtAjXxWbbjgPtgu3FYgB7gbP4FPNYsU7VXYR4cYUJi8XV7ddZNir5L7c26SFNXhwvLY",
  "key3": "eqp1uJ3APN7FKpehkZ1x5pNJ9QLMtGtNkVkxWmMK53r83Qf4PPvzeNoCEYyZz9hMQqk13gYozUoyjttwZEA1Pky",
  "key4": "57tnvU7Rmf6SeNa8M1DeUPcP2GkUxFJEzsVs7tzf2zorzTqd1CKDR2uSKTcMZ8Ux4rFCsNN8z6K3EhxMgsxVJ99U",
  "key5": "63SGRGb5rQ6YxnSz8pWxT1KQtzd42pMNvawjyMkJ48tVgEzy5SGBgeExpcSeCPvkyCWJ7dwNbjnJJTjjqNKwPnK",
  "key6": "SV43QsjivgTTvuDdGQgidmQ8ExdWKfc3Yf6L58WXb687Yd4ezpw2RUvpsLUfjWGxLJj85XwBbU6aQbJZecaiJr9",
  "key7": "5K8a76dPmxjE1wBjaTGMq8nxU6wFag1txo9A3ZTtQnF7AKwwNbSBxzigxNjP6U5VTp8rZ8XbgfnfYDYWpNfAr1iU",
  "key8": "39cJSdNcXNGLPGJpHVsHp8HWt4smdSMiFgwVN7xq3DWFD3nNp1F2TEH9cyShqhgddHmzXaaAgK6MyX9PMAuiRmmB",
  "key9": "4tzRpJ87R9rRexXFfjx1hgrXWqo6KFKPk4eahndFEvUA9sc4562HmEvxBGwtWb7T54yGVrcqLa5NaPj5AwYFUcpg",
  "key10": "3aPvyN1h5GPp5Lcs6TyFMZVPjA2nbkUi3qK25UfxLdwfLKak1ag4YY4Nay8rjwL5x68pJSewuEPyyAnBKLbs97vS",
  "key11": "3D3ThhLsbf1iJsMFzVLJQPYTi4e7sS1vWfPiPd19WvynoVCdbxcsbuMaSm9NiQ5HwbGL27Nk1F5JFmbXkW7HaUhg",
  "key12": "j87HfMCgMRCBPsLbsAD8SqRrJ5xgHPckmBrFn4VJGe4Hrnu737Mq37zofcBhczaG48aUyFxTngzwjKTdhAgGLyL",
  "key13": "4pwkKFyWrF4G4yPimy5vrHTsWnNy4pTcdxfC6FqbUBKh3D8MEvz9Y9cXxDhfKQVJhP1sTvFLfLp2xrhm3LmUR21N",
  "key14": "2ysPMhzUNbrchH2cyj3XjgAz16SEpsYA7kovwMdubttR6H1a69darz2GsFpD8so8fwwLc86SKtigLdWvLG8C3gLi",
  "key15": "51De9PR7LmaoXkQx8PjLrsAufqtqQ1PkDPCh5NGiS8NcLs3EDrvdy7n9shwrhSJ2fXUsRC29RpsDpJT9hqAQQEvM",
  "key16": "64WfpCyrPBVge2dmjWLaTV6ggm6BPdYKckLvA8inCcRtpVxfnqSuPebyfe5EjSuqf3czS2iZWvrxH5JfksBk7Ncu",
  "key17": "g59Lhia3Dh3Syz31UgqvG4eiBcTbLwxhMvzK6PfCowStbXFeUoEzzWX5JKcunEZKWm28XDMPsPFBCPGDCoJbY25",
  "key18": "3e5vBP5pJoQgunyN413qHj3iQHq6zbwAumCLeQ73oVqskiJTxGCgWuo8zMYxbMQgP9dpWnwGjoahjQYcm44Fkj7z",
  "key19": "2tbu3jxqjM8uoFUPiLLg5Ez4U3cduE18mtk32UozGnDkE9UX6QqE9AAvqyNruFJivbm7BuUFkduof8h8GVd71UyJ",
  "key20": "5C34VyUsr6xMPzdxgw51C3scn21Xh5uJuQ7aXTyww3Zf1xN4rRBy4GRNB36H1JqjAC92ZQkEAN32nEBQQmyURiEY",
  "key21": "3dqkiHyceb2ZM8ZssaaKhyWFnFjvHjVv35po8GFzz8uVtzbwcx2G54FbTqttHGuzafX9KuLSA8K2eHLE6LeRqbsC",
  "key22": "3C2zcURdJqPAYScHmZodce12Xaet5bjS6UVK9KLm5vFZSXoNPDd5cU69f2se21hW1xn1zCWNLj6hLgqdfUKNPq43",
  "key23": "3Y2yw9yBXugs9xjUZvw4VBz9XRMFtrk56WrS2uehLU6CK6WR3XbbcBQF49kF7gqQa25QafnoxWN99bvsoQ2kt8Yt",
  "key24": "3oUFZ4Mq8S5G2gXZtLviJHcn8nacbTkTUt8hUNLCCUa8ETw3V5VwBpZZnYDLSTvPgXyBRbK1cPvFj2t6LPvxbHjL",
  "key25": "3c8R7qK39wUxJSx3ohxjRmoqV4UtqJEatLgQvownvDKoccG933W49vjph48df8PLhw2Fmub1XA9AucySaNFYwwE8",
  "key26": "3jGt9Bd15UG9Mt4hjGcBhxYGtigaKA8RNzqNo3msppNgetS1i8n9czTxDDb3vvmmQzxWkNdF11FRdktLGAsQHYw6",
  "key27": "4HHWSmpimE4HhcJEqEUy8oDxXQk219yZsVcTjxFLW9sFUALr8cpGM3XF7GXaBoUyCMAxuJ74umRxy1LVSp2pTSuv",
  "key28": "ExKghxu9fwGPvG7JQxFdQ7ofiydNAruQsmZeBfe8m5LW9kBSbzuJ1AaB53XvUdr5joTgLZEYoyiTAUbPuhRjqEf",
  "key29": "2Vzw1dkb9obxciiqsxR2RhntTcDjwsUDvPN8YdRSy2aUhkeqDghmRNWrnR7rbFysAkKtgJHRzHXyNntm2Rgy2b7Q",
  "key30": "86jqnwYiPV1g5CHj4B2gYzcfcp45UJ5TUwoa4yFgR2FHCKACrpeyFaW3HQyyyHKw18sMEp4UaEsACWH281HQjQB"
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
