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
    "3BENztXKdU6BckMWQYKYyjbxmULAbVpoSpwUPNWcQscRqa7NCuFsNP2Mi42fDVSncp9DWF9Ppp59XWd2cHeBYwqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYmyM1gC9aK8Kqh3oZQCvYjRAZMdFhZyRJaU6BPqgv3EVv41prSbNQTA3GGVMi1DoBiwN5gAvJT76JBWB3cLjC6",
  "key1": "2vKJQxso37GoEGjAgjtRiV82iHpUmTaLkhSjnnebpssQZTzaVSm2t7YUeL2xhpdbpkBdMHzGsrRGCpE5Xr8BLCPQ",
  "key2": "3d9bVtZon1HYBA6r6rKgysYFPbWA6En6GZy2hko1WLCs7P2Aqg7fMAA3zzBYkTgkH9t51uBzFJnXv4ZgXsZbWZgd",
  "key3": "4rNLX4XJ791C7yp1LA9gCD9wVA4VSperJ9Y54FEm23jtrytGEJoUVYt97yTt61hEAoCeugWVyod7Fzxt5fKojEXT",
  "key4": "4dqsg7VQ72fu1CYMHtjoGXMK1hvfUQCsF2hqq1QDA2cs3pUBhPpqyk5HgFtAv6E7KSedjConLakN7uLhMtRn5MbL",
  "key5": "3HFJ2g1XoodoJvs8TMKELtvwc5jafC98xMvJL61S1zTJA4pPKQbNyVtCsgcZSATTP76Y8ZGkLxj4xY6c3zkc1Vc2",
  "key6": "RqKdUcf52PBT6RSiXHUWfJBEj2JZijAgLXRF4vYN9LcHjapNCFSt96pHwFkyyyvKnEmKHouMypegb76UqcRrE3s",
  "key7": "2yzUWygzbwcRsQqhGs87ozQ7XMejNM1hccPkLcB6wWqBRYqTdHpt5cBUSzJgva7jbkcCe3U7LC2tDc11LXN2QQiy",
  "key8": "2K4Fgn94sEcCtsNct4JamBjj2YmCtaQCi7yBuEiAjrx57rfcaQxhTNqGHg9zNjfFuubtPCokXvSqVz1hDcLBMdVC",
  "key9": "3PCwsBuBV6ZW4gRoUXtq5ejakwCxVvds32poooYNbdgPk1AUw2YzEReuak1MhUq1FyFy1G6yGgb1uwqyPaefndSg",
  "key10": "4J21qYMxgAgoPujtfssve7hkvFVWSKqD9dnsfzzWTBmW9YZSkqdq3VVTd9ujx2BDfJfqwEsmmdUxUwxthq7vZXK4",
  "key11": "2YBDVAPFovQjXUDM2gy4jfAWRqhuckruGamEueo1pLq3xCfV24AHZPDrmVNB1UiXdgirN8FgjZjDvSxuama6R3oX",
  "key12": "2GNuSBf4jjkVrNJgw724QbStkFbWjokocPJBTFktLvtWU8a5Gb6F5fKis8fGVjaVw7zNwJxgXjjkeashYgT8qB63",
  "key13": "2sDbmthPhLowZU6hkN9SbaKzZz3bePbMkeg83zDUhe9X9Ba7x28yJhh2HdxAayBWpe9pVTUMj8oZFLVxyafHBnUJ",
  "key14": "3hcAxVsJPbgQkPqF2bZY3cqc56cG65KUS5eLZF7Q471f6eRBCT7R864j59Ge6wSZMLRcHCedW6ashr4UV353xChN",
  "key15": "H7SomLjTpSHPz5E5BRahSE85CCFMexcRZYAcguEtty1rnvz3DKPsTeZrpnuvbHLdv8VfbGi69Ht4NHV4it381rW",
  "key16": "61YkMPWqXbYDtNBrbz5PDDabgCtGP4qdbMhzihjQbZLDERqY9ypW7S2WA7QyUtEtp4HGaV8w2FdBub5Thigf3bKt",
  "key17": "4n3VY2T4Xug5sVan9gpafmuWHLv9bEnAfwzPMLmMWfvZLeEhZa4u1tDfRTwTTyQ19fhDx9tA4Sk7oNsVgZbC2nD8",
  "key18": "59tqQq598SG4N5CaVFfUn2dLX816TxK6mUC19cYbMYyuwPPp3ecTKFb7qw72MoixiRUSAy7VVfmr3TnFctFcRdCC",
  "key19": "332o8Jyus3rUFmEGHWvRp1HYqutb8q7TA9ZNLKaUrYURoFC2wfoGYro3SBABZTs1qtTG166ZWYp2rRQruVxF7oRL",
  "key20": "5ajyER594Hsic9CJn8AsmXYbWfN4xkyzZkz3YCA1tN3XV3EBw3fBs8HuqRmGxPTQFJ5pw3jdaVwiEC2n6Ggk9ATC",
  "key21": "3HTg7DKbWoLDXaQuRTKiyYnfbEt7rVAcXdLg7UFYjxGexPHzHu4oVyqcABqqpLLsnHn5sRGMSXvEks7rJ2TDqyWd",
  "key22": "8rJE99CHBkZ57cdAKzw1kuMURnzGP6yiNsGSGQZFJL3MxTcwqokuqtyqwQFVcH1bRPiwr6FQGUHGRyYmqKWDFMb",
  "key23": "3Hgms9uk3p748XxWW6PocLsudB9mBKXm8RrSsTShwzCBXjV1ybsPmCAAMn4gk3ZC49tfzuV3eZqXz46QqGxhLnBx",
  "key24": "5iNBtY7xAUv1MboyWoPapJcPPmStgPN3vmTqiygEjJCXG1u2G9tabwWduAFc8TSxRKqq1qRt77DswfGVv2ZxfJaP",
  "key25": "3d2X4ktH96Mccwgwj8w9vyRsFREGfoRFBBHpaXeu8mubryU5aHK7xNNmKM9ioSDeSPDDJCR7cpWww5h1ZAqB4NGN",
  "key26": "SpYWiCSQQ2fxEYPJifkHWbpSY55MXGG9iEpob3pFu7r7Mx59hbGT6kYB4edR75ChrCbuqzwSkkkpWHopEvzFpGe",
  "key27": "2CpTAyJLAeCNUPZiCQAwEzVJYQHz6KbyCdJQxyePyU4feHBNvX6WqHtMhgEhP5MQZCEdZxtY5ffp8qyUcZP1Lxqh",
  "key28": "3nvmU3EdffASExQXxgtuKHeWy4Lc1WSvWiu8krP1JZgXnbdvpSHj4FPch5ncXkrNHBy6yYVat7zY3w14gKeHSpqV",
  "key29": "4u2fe7QX5TBGFHSQM81PMgfxyn6XTXKLerroFsYJcv4e1ri9e9yWRVHBeKtssBa26oTfxFVk9nzbQQ2fe1vf3N19",
  "key30": "5J5fQ1ECDPX2xHdcTLaDZcbyMocxCQB6MBYHMt4inGN4HvYriuzKYrTTXDVJA4epX7SNtk2ozRZdo2DcRAWtWW6J",
  "key31": "fpt5G98RJzTHo2bY84ktu9TrHY4THms9PERuehMVskFU29xnn6oAEY9UibANBKsidRofkH6EYpV8GnFoqc3hxpo",
  "key32": "5shZPr5tjSy9KcxvfoBJC5XF5jKdvc3oQ3mVEL64jCbTQ6dbdxWb2w6P8v47oQ36Xqy16pSgDhzBj3nJVSeTX1bq",
  "key33": "5eMMjrMamhXGi6Q2dLmCfESkTLR9YFDFCoE8hD5VNNAeKbPQEDFoTqbAbJNhZqymCwooxAiZarPQonQmfBiqqYwX",
  "key34": "5jJzbX2Cn7CuyLPw4ywPoneR3oPKFSPfi7XoVgUQ7BKvvQeJnDLn79F7hMaofGx35WWhbSP3Sf2uBFjHJ8z4rxz",
  "key35": "JoTtJ2vAo4oVnNVfxHqVnDhwHLpisPFAvQRcAgZjc19dPJsS8kqfje6xcUQAfbrPzHu8iUVfWwhKHo5vvaABUeE",
  "key36": "oxhVTbzVDiGRgZeFCdQAPNivFTSfmspfi8bdeN8rB167p1necja9ZdbstegnoRSUEzFsCWowo5fY8CqPqSFYJum",
  "key37": "4ot65Fz2q47kjgXMVCJjUBdhennREdfNHb8CsgHSaf3mpLb8odDdPoiNhRJkrMhccJaehQRP7mNSeGbXTQa8RJnw",
  "key38": "5Kv9iLStCYMofUFc28t3vFbZuuhCKJvMZxBY3C3y4j9rphoH9gyD61QAXy18RZrzn27ktcxkX57K9y73FaGQTU8N",
  "key39": "3X1AzcL31ceHHdMpA1aAiSfk63xZRhrkzyXJMAEaK9x2tVF6sxq9jQ6fBMKUramkFBmNrfL15zk7hk5TUbMaFByD",
  "key40": "51qxTwE4g1Sf85P7grNxhmTShDE43q2WGPk74jtb9PzEt6zuRPG6DhXgT3fJZM1XHjGajwunGmSGoTfJYfVywin",
  "key41": "52mUvMB3qB8aGSAu2JhYu3jcFqHJMmBe9GT41TXRZcTiwa1rMd7Hc7m9ptEavHCxhNncK7uVVhXBXfAPy1WFUWrj",
  "key42": "J2tmvoZumQbnVMyqJLUsprD9TgSYNyHaEhHcauSgWP7MajN6LDQK7L9NMS4fMYpxem4sQavxd3xW7etTWegm8WC",
  "key43": "6LvqU8j4vrFngjxnt7oxbnbY4xRrz83x1QeGW3vYhRqceXHPe97Ln7G4WEAGRuNWuiRi7bsMrCcuHZftLzJ67A8",
  "key44": "4NiHsE4f9C6rrpp6b88wLzMzPpk7ZkezCGhNqHRLG6TjGA9zyhw6BLFqucPMNs9vepjZt91q7ZRbtJkmDMC6qJRf",
  "key45": "5D6TbCK2uVT2wVCLKZE9cMsud6T3LtA9qr4tEciSbCMog1ukPvj8A4A3eNDtgYWUDCX7tiwqehf7yU96SAQWHYyK",
  "key46": "5u51oxrs3MhDGUPQUCmJhgvU2zBnT57bzD2Lvx1MohPkpoyP11ZyyxG3ChW27kWHG8mkB2s3q1pMUW6B2LQG6hP",
  "key47": "35hGzbNb7LkvqbPibwCu7YmRTKopVu3o82jZa5vJprbdHLf2kKfhgPmmtLVerJfBoQCs49kjgKE961U7WNTVTcst",
  "key48": "5NQ6KZLTLhmEjmaNFyEs3ui8PzSjfWRrPY756d2Fy8uX6sKDeTJoKmtWXBJHCu1bYEfc7eVKQUCbDvDhdp75sSK6",
  "key49": "DPZ1YfSbP4RV8QLUCuNnTVuMATx8oZd29C9d4va2MNq4xJBmYGjAKdgpAmhmFfCv8a4xRCjx6YB2Q5aCeGQMXs9"
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
