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
    "3LDKUnP5u1joAJiWDFQqpdYfsRwuSgTVqddWiD6r8Abfaq1G3XwwtNzNiJfK5AWeSA4ZK7YfJ1KDJfF8tjcqai34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYyLvEPwezjMAWMqLdxwXU24tgfK7BSJGAKKuDABF2G188oao1rRSeDchaidxkay9NEV9u91i6m4j4sGUvMcQwi",
  "key1": "3vSRV73ZGAQCYCzDd2YLyXazeFEgFbgHrzPkadTZLB3h3M9fUuBbp35Fbh9dKcp24fZ4x1xJA6rSeqzucUvsKLL3",
  "key2": "2knu8jRUffXz23Mx9VqWLEu7DFzUcUvxtkxPw5RWVEoxoEoR952yQsSksVD2Z7Pnm5Up7cGEgXpUbVywSwAjG223",
  "key3": "5scdEdQUNjNgajLP87HWDQaASEsFQbdviYVcKsuNjpAAa9iDTcyaEpPm6H1LGH9JaKtzBEC8NfrfST6aWcU52AuQ",
  "key4": "3XM6d7mGKWv77BWrKtcYMX3DewzzXFgTPWY1PQ7qKt1weFvjFX7nmb4zLvQ18xzcs4zdkck6aU19tGw2SuxFiZrJ",
  "key5": "5MfyfxmgbVFTLnZeVF1FwuQSGoUJe332X5iVYXkvTmVmcQbyz6UjpjHDMZrwPDRfv2hwewLWPyfhhCXQneHjf53t",
  "key6": "Ar9nd29t6pNnEiRWRQyrJ6opkyLdBaQWRHEUBUW8bvh7bZXDxUd1FvFLTipM5LH7i5ihaBzn7MxawE1t87H2DKA",
  "key7": "4L87BjKrfCYySnWDaUEdhjFgN4w5HvKzmK23h4adFGZu1VYYCiHHwKU1UtSYnofQgBfKqho5f4YT4kohYNH1SJKj",
  "key8": "QvqTFN6mkTDpKgwjpvuXACb7DsZYipQN2jeLcAYh654izBTPSJwVBaQTrkTXJCarMSc5pegk2VvWHJ83uLAXgJJ",
  "key9": "5o8ZitmKHek7zCgVTkN1S3QVBRBf3sQe4pyE9nddwRmP7DgesJC3XCpUvKvXoDVXvTeVDDedSn1REadXsvaxw8Fa",
  "key10": "bNFEqQfBuWugUUY1q1giyyamx5hLrGMBWZdt2n8ed7zCTj4xUZ9KT96n2vT5CZoarMxjmcsWgPWJMeo7G84jKxp",
  "key11": "HHdSv2HmKZrYyprzVAtM2p6DZ7hWtG8xEvXWVhEmU46FEwTF64W9h1kWNzrLfmrEJ4VfbeNCDa7e9FTm9J4S5c2",
  "key12": "4B1SPgsDALdySpuM6ANbtfWKgK844VrBVH2GUUfML3jYPxcp7fXpRL2E4zBj1zRuDbSNTFQnwVEcRjMtQFaAE895",
  "key13": "4d51XGAWXL6Esbg9pQ6izXdrxbjwXk5zqVjuNhEXfs1max9MNqutK99YJUWAhswLasVxmDAfYHEMWkJhnCVQAuUc",
  "key14": "3cuLpMhZqqfHZZJUXyWDvEK43tw2PTNBhySECmDBsnjR9BaGMjhN5SFLzmnjnYBeyembjk6qxvdtNAsg97uqwLWx",
  "key15": "2Ds4xjNU6DuJmEL9Yu8iNqKvaBZpE8b6nGXHUYGNU6HueaBPZMqtP74EDsRSdrsHo5JEErRGSihAs1j6mRkwmg9J",
  "key16": "58QVSsLoK5F62H7vq6NzmmcmoKVNLojqyD2AanqtKc7egbpMwbAtmhmRZqU53eWsTKa8utMd5S8G159fbHBa3J24",
  "key17": "WcoAZgQ2cc69WPdiHosa1bQgRsEPSiG7PkiicEWbE4g3tx8ZmzhMFX9oZMY4jSd2wqVCg6SRxAPwMiefNBCGxwz",
  "key18": "2KKraicLM2xuD32xwgV1xh9ufyQhYyTFgvsvVkh5oZTf7BrwSaC5sDgSMJVswpqD9VpTBe7m7maTCguLMrKinMUt",
  "key19": "31D25ihN3BRjfMXnv8w9RhMBriuUpf5snjAdriobST4q3sAei8d6vy6191yZqQDDAqJ8tPq5wYz44pCqNR6x133D",
  "key20": "37aLyn6ZqLWhMC92ub4VTwaSMRz5fzqx8awXmBkZeDqcMWzw2dfAYbyX3ejtXfpUAwQjr8A14HEkbpYF7tyqYxfd",
  "key21": "2diJeA2dpPVg8Q36mPR1BnZ7yeT8XwmDLeR3s2PheQ5VXqnmMfesfiZdoYfprx6CXX1u2ojDf5hrmoEjkN4dmZYA",
  "key22": "4BH5upVtE14UJk392E1mFoTHswSaEemQgW1oW8ZuaCH9CeTT36ZuUik1ZU5nHVkEHuqFnUegrKGMYALttYYLsTXQ",
  "key23": "25VYF3TetdKgcW1p5eUpVejJUsqm1FZUmCGAxnsmGkRtSKPqsXMyH8Nm93nQmXh5dU2WHsFJj3Dd1BFmvrAH1Syi",
  "key24": "e7dNA8k5LKwSFpPiaKJjfBV89mn2H7iiqoDvC9MaXcn4zA3DxhEgTLjbBsDVmkZPasE5oBaoHZrpNd3k1nWNNAe",
  "key25": "67Vz2WrRBBuru8q7cvdhDJPWTw96ChE8XQ5GtXN3ouZGjBx1xNDV7ea24a76wDL6AFvQQGHsrG2YKbFndGyVaqbh",
  "key26": "5ZVfRNevXMsetcCAEgEtq3URwbmxoWqR4VQphViUkzDau52jhPiXKyhVxJaLXZN175SQuWPF18dGqNn8Az6bFVc9",
  "key27": "uDoe1ePkQn6NeyYMsvjRvi4dFhRDQCPiHsmMPnZUU2nv2RaqxzZ3QoqDWWW8k3Gamh4UMirp78eZXUxXfVfbCNP",
  "key28": "5v3EuCpmw4TJ8pEzP2GE4Xb4yqS8muYVAoQtdxoNMPdjZQKc5WmRwAQkdgtmsvGAC3T1wVLW8TUVAhsDBsmeB632",
  "key29": "4fxKBro2gMja4ZVbuurFzXdnq4yjv4P3t6EyqpffdWfgZsXAdX5eAX4Ry9VuR11ctL1pjiSGAo1seN2egCpxSHdD",
  "key30": "36ms5SnW5R4msSXVkxCbYaEc14wM9Vey2swkoQbo5Lf6eVxp6L2EGCv9Af9xJTLprQBC8vYrpttWuSkxXrNkSJav",
  "key31": "qetuRZPxrMky6BxiKmy5284d3dNrbGNJSMpMSz3Jq5zuHdsL1WuBdyp6mLwxAWz4AKWZZct7vhuQ5Udftaj512i",
  "key32": "3h3xzBLNmX51YofcrX1hsnV8RvPUtwyhMngqxn4XLyXME98kA31VCbAeXV3pTVzatfcty4tnARMwfpXXpLSJZaNt",
  "key33": "2zwZsCD3uZfKtygeyZQuqP7pFhz2inx65iRGt9vPaqzDsVKbMa19VRh3ZyvCZnJQEZeY9SxZt7y65WCxxBLb4azE",
  "key34": "54iWRgrkozgMxC7dsSW5ivyRixk7iRqaPY3JD4U3th32vPLhsXpA5CJt9Cej3yNgKnMunNCri6WDTctPFD4kh3xe",
  "key35": "3HcJB5MmtoLytTcwsVCWiwjVaDA2AGCryiLuj7sxt11rTrrV3v1uxKxvdGCRNugU2HuK1wZcBYLp8KQYq6ZQp27K",
  "key36": "euGtMAT2go553bzv7GJc8uXeujqTsA1SVNyzKmHmbAk7CNFbZoexv38Hti64XNoCjWpZDhRd4pAVBNRJQAeCuK5",
  "key37": "M39MNTztmTApHY989EodbNEdZ3KwKvncZ3wLagbRi92zttzEUo7f5wGPPHCU7B8coNHzkvZ7Gqfb7XxvQW8Qp1x",
  "key38": "3kD9ykdHkHEhEAMFwdokoYnJouZHCu2pcCgkCRedvZsQNrk9EmyfvPPXRibQBg3CfAqSC9nSSW3EF6nyfbdZvSuZ",
  "key39": "4cMsb5s38Tpy1GboHFiBMWLHxDKJ36W1BZBBc1frCCujNEGXogQoxmdxxSYogqS885YEBWYnJTBA4qS6yMmWAAMN",
  "key40": "5EwcMe8yNWmMDVmfAYaS1tZ58F214xmBBQuNT6bDQqMVYQ3BdJurS8RaS1ueJHbwACahDT9KVfoR8P9NYoNC8VLP",
  "key41": "65dtF7fzTs5TyakTzEjBo2XsXHscURy2XFboCUFSB36FeRa7PHjm5TVojyBvSDs2admiy6C5M5FHHHzJixgLCuPe",
  "key42": "5pphJSByDwS3ZVcjY72gq3FKHacqfgaCjHtRkBMwHxR6QPqu4WgG5H9GafKzMpevqtLVXiB6N9P4cT4mk78ePLVC",
  "key43": "5BAasijGPApQ4qCJLNuLY5BhVq7FsNfc2dGoZPyoSwSBFuaoxFn5Z9Cd6oud5ZQXMN7PHtrY6mJUJiauShQVXGM",
  "key44": "5oZ7S118N8ry7kjue54A3cds6PP8iBb9yXpZejx5XFHEQNbMBQX6jdwYM457ZNQnS1WEKwC75vGV8oUoGcRwEzwR",
  "key45": "5xmjX2agod153NVNt6ydSyT8H3DNwAQcUQY5X1YNLewuRHGBtkCHCQoRSL9wv62YdzE3ciLnmdxxCG7KbPYQmz3w",
  "key46": "5tCs1AkAjXT9V2bhoVeqEDzfeTpZY8E6Fke5EEit8y5JNhoiUTcMpsj8Ta3P1MZnDY95frqxwi1qoQ2W4DXxmq6f"
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
