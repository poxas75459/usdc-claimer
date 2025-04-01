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
    "2s1gqxUSL7oyxGQrB8M1VcnyeV9EgdNapx2hVhxH8AXbW8TsNsANZD8sqjwF2Z8NM2MYQiFbkEnwicKDvZxrUWCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCJA3reFYJ37bc2mpXYDMPz7vNnm9FimGbp6iNPC5uARUtwbxu8unF47Dp2kBWSsxGi3LfYjussGSvxFZabBrwc",
  "key1": "3UwrHdnLZCWRpvZS8HVs2rR8xJy9rpBV1nXBxFdQNAr5fRryggxQScRhzmSwe4XFA2uG4aate377HzEPu3B8j3Wq",
  "key2": "4BmPJT4ebH54MEWv6YtPGCFhP836sMv7K6Rg1DoKXt67RX3LdTqkPfTvXr1TNJTy91idvsMA1kc7bqvfcd2sVtXC",
  "key3": "5uG6d777MiLudo3iNYN5AJTcM9v1heJiUdKFHVeANaYnpNJksomg8QDb95VByJhCJTmosTcRByKaTibtD7nNwja6",
  "key4": "4ecQJP53JtzunX6nJYG82Fnd9mG5YNQdWzTCQGT8stCmiu9LhjrmPwKUvewaFryiLjce3WS8bUCizHZqRJ5DTMqa",
  "key5": "5aWz4xUxxZ8XvXQTUMZAisZFbLSejYznS7adtnwwmMMnzyTEqNsMaUQ1G6QF3t2P48CTRgLmwXdGxJUPiutmu8pC",
  "key6": "4xgJ6ocFbDuCCXYSVACe7tNkyqTiiFyPtxQMqJRwMCC6oVd6T8CCNzXJQJ4icszP1jqrLSoN1VxrtccXHdZFf7vB",
  "key7": "5U14D1CFDnfvrmgdKDCNwXGRzcbxFxJwLMK7QmGuCAxo5VFuG5D6zfDhcPxRyepHPvbquzAifUnJjL6Pk8aZDzax",
  "key8": "VuJouSGbWGxoMxBa3mEWVXeVaMEH1sMQygUnjbbDSUeQzVcUPnp47fzx8cihBU7F8x2yNgpAaoceXvEJp52sQwm",
  "key9": "83NBuc45CrCPUSnjMagVPf6apxTuQ5AWWzsJdRN7jaWG3RY6NaHrDrdfn12NdZdxRCcXNn9VBKaP4eLa1Nj1NGq",
  "key10": "3aRmqSrX2Aa3jrC8WbYMZmGgso63geNWJfVwSftrfaLEaqAHN8aaE9feR8bvoujkZJuafCjS8EUybT9zPHh6kYL6",
  "key11": "g463VjgX1U3iLMvo5rLTyX9YN6KFBTRYMmyoxaiJjoVei7jaGe6L6st8sYHbQAzY2xHoBEWiwvzkvvwiQYzJGgG",
  "key12": "3Y6v9wHcqiTjhqH6ucxopskUyL34eano3SjxrnU8RrnBockCKDwfm6h8v8MftJW3aDLBWR1EZV3BoWBsVA8SnfEf",
  "key13": "3Fa82pLvKrC8Yb43iKHLMLUGHZ3f9KiBNR3BHywXc7QJKaaYiPZybKdezw5KGXvEhoZ4SM9FqQCuzMck6YK7hgCC",
  "key14": "x65uN8MSCfoG7FXmCKXoz1wdTu86vCj95vMs9DvoUdiE48TtxCTRcJ49b4tBj9UshryTdJqUi7xJWURcrxQ93q6",
  "key15": "2VAZCfW7P29PXQCwyKwaEfBGoF8BMb3MFL14xxrbYu4DtguV5f8H4aKbBeAFxobtS1BNNNo2zq3PpeG9rgvCmLx8",
  "key16": "3myGBCFiB7mssXp8yyQxHV9ZaKQZx8DAfmi9iCJ3EDhpQeCPbxfPdpz8girZSfCUM6ptMWU1UNGLjFECaZQpze5Q",
  "key17": "4Ub7Y89gKp2KrribBzoviR7kNhR1rUKyB7avNEGzjQN74GXAMXX7NxCzokJeDfpJVjQ553wx7oKuDMue7dR61o8Z",
  "key18": "JR8bWWgBXkJhGs6veBT4k5zs5zLMV8AERmDVAvfmK9JdJ7WYfkMxUkVBRpPmnCGrRc2XJdv6AspqDGN5pYsHqkZ",
  "key19": "AAfML9ymW8buhh89XCLdRDPKuBWrq4n7CeaR2zDttrWrAKqepGUvt5YrNWsEq2S9cB4gd7t6Yusnseou1E9iG3p",
  "key20": "4iEMsuENv71UpahswucnLofvjWZkMTCfN1EjZpoFeLucPN5f6hbbVXdXzUiF5qz8P5HtejT5R8Ydzz5KwudKgJMq",
  "key21": "91tQrDV3KESAAeWpmXBjE3MwgufRxA1Hkde2aH8ktjFY2oJgvNYh81B8Tayd34tKbuzwVPfXBrrhZN6kZiuVxWH",
  "key22": "3oN8DjSEWHp1bKqpYZ9eo123b6iAQH2x5rvoHzzuktEfhSkLdv7asyutLSNRvUUGnLuXK598mUDrMVxiMzY7rTkF",
  "key23": "53yuqubukGkHB43R3kMQU14QVs6EqF4D9P1Lkt9FQvGy3Zwis897884DVgcPrJkiJmYTUR4xdFR2Zm9UtFWKWBs7",
  "key24": "ibNcX81DP78bo18bwpN7TZ2EJvAdi86aFTEnw7mYQNKih9VAwvfBcMM2GKB3yjS9kAqng8qHbWU1nDiCHrDNpLm",
  "key25": "4MWEp7KeE4L3gAPyiyspyNM5Pr4cBEa2geyjGjZgqatpkoGgQVKTnyjjXGNW7C4zZadkVopJej9RBRcBxWJQiHmR",
  "key26": "awnXUv3Prb4Fxg5PNwLzrXEz82t41f9xVzxs3tUoSeY3nLX3EYBb8z3Hhh2wXXys4ej5AKWPVFm53Vm8dvnAVLX",
  "key27": "2CfsPbVqPkKxSd8VETpDJorgF5FJtUbgw53fX868rgscpCF6turXkxb4WpWJGArusSZuaNpeVMe4Zji6LAYV8sDP",
  "key28": "276hZQrPMSaNBQhQQdNkkRfwq8LXGALjEjdzCdjAugF1cwau6JRD9bqN8CTZjooDCwzKLqbcsQpyioLAhXnkBBuZ",
  "key29": "2eq8F7T1j5Pyd8fTDHHHabAxcoXr3Vchxt4s5zqAqraQY7tF4waZzUdPntRaiGkEyVTeWyQFzV99tBN43vCD6ba",
  "key30": "2n43GngGeJzokU5NEE7YBf9KPaoGzznTk6pGJ1nxYnat6WNR6HthUiPrg45m1pYctwDHL4WPPp86Fnrg9ff17bXP",
  "key31": "5WLjKgFuwm5GnPpKoL4g1aUDUpHizsVbSmQ7FZk6NqpEMkKXgBKAHCqRfF2W3STFoHo7vwhk5Di1weyapUicYqbN",
  "key32": "3hJCQcunkACXnKomnf74NLR5ukc15cLn7nVxyTFtFR7r6urf555hAbmsHWQUK7i82j9CgZ82QE8theNUtQ4ttEiW",
  "key33": "3oxtkEaJ1M8NCeDFqUi9KFVwqSnPkpTGkWtJAs9h3xbEvdTfCJwX9YKwuDK553zGMTCKrvH8H4uhsNLAFmtJfZ4s",
  "key34": "2494dFwv8WRFtqZ2jsz17P4DaDqG9fhPXJ9KDnezkiq4NoG7PHZyAR5Q7mqFg9eAfxkeiHDxGGD4QGZAJZ3RTp1k",
  "key35": "26GSXtdt2ZFRci91CimJ5AYGZ3k3NU9QZf2dGNkmEU9hPkBdtMkFhsfzMUoczy5CeCyyMa2YEfn9BU5QEJxpi6pq",
  "key36": "3ZTYpXXgx7YbNruoG2AyTtEcE9p1decutwBKhjMyToXUWdcskj1X9C9XVArmy58SYUhvBohMq37mJwHERJhi1EdZ",
  "key37": "3i9NmdsbTsx6BpPAPXPRbXStAfQD1ocktGAjzGyRUnYxrJNWsuVbSEyUsw8gXpBBUqouXcRVoMB8wzykpvYAkr8N",
  "key38": "2AX9QaUxhMnAVqokobvefpT44ZFx8r6SYgTnxw56UmGZLKc4NYCz91ejpWDpL9XarUYp8fu9myTu8rrwhMQp53RJ",
  "key39": "58ojRjM1LvxPVoFSHPSKsqPHM1xxp6D26i9JZMRGhHpc7CJtD5PnrJApTRHiijRGh8NEAeuCNKU16KvDcDyChG5G",
  "key40": "2RyYm8B4WUfbMaBS5s6qM7xKFrV5uMaTF9FoQ1PvrkxBfauJ4gTXJLG6Q1F8jmTuSZRdLJ5KaAGNBd92pAHXFHpe"
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
