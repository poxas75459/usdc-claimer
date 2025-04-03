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
    "5qatHdFn2GfjJHSJojFZtZJewiz69vtt7aBHRtZw23Vf3v7A32HBkHWbXWiQQoac6P8hTXRxA4LzjeFA5hU6XgN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQLKZ4HQCd16D5heR1M9rXQ9zpp4NprPbhjGBjexU9exW3anGJFJGzbS8WHA5CkUbYMii1ddysy1ifH5VwwiLiT",
  "key1": "3YVTEKTzsdp2DLA8WZ6yndSdkffVvm7N9LFzScVbqJbwZXB5dSD5vVVk2T3gQQKEtDi7GRJDVj5G9bdA9qKfU7LW",
  "key2": "5ZyikKWgiUREZv6ww9BH7XUWAS1SgNWBhQ9FLWDpD6JEzEsHGcAZx2TvHfsRLmja8UsWL21EE82R15vn9CNaB1EG",
  "key3": "KvZxmr44pR8LH7R6tEAvAVaKKqWF4mzC4MPsGDi3FqthWXxv1JCGB58LNgefq1gTBwjsu1YBUghKncqZeZHTyLw",
  "key4": "3DJ573eC1Vo623GqSkBWeNCivh3TTf7AFSzyy7NfviRnmDjuxjBTtX7dD6mAHFcCkVonLmErJ2DS8iGKhuvCULnJ",
  "key5": "5wPiXceA98y24yYMe71dpsaQbURajGoHs3vwv2hYMAkga5kdanCd6hovpB2TxLFQHQBNZBQy6j2z6e3whNWc4jMw",
  "key6": "b1kePLqE24NUxHtRkA157hp18cHNkGtrkDhdXfsczcydNX8K8i1D5NZW2GkKzvyjo3QK5sE1nZcqvLzFWvoJBXB",
  "key7": "2gFST26atGnE1LWvHNv9JpEgJ9N6ro9U3jvb9KeASu8ZL9kwMGNz8813crmTVk5dxUiDVJcRU8WcYyNcAk61JyEQ",
  "key8": "63rq1dKj5RcG383Ukc9LdwUYCCYuemfidgDG1eWsdUtaXdJw6CHNgkikj3WS4dMJMJzm6kzCe5nFWXSrt6AtfeLP",
  "key9": "FMYegBFyg9uVeveZeNSy3MeUek1kDSAFRUx8PfHegyr1Wsqo6fxES2TzNhqapudjnNKnapjHL1C2wKwyN4ajMag",
  "key10": "2AM2jT38GjttrfB5jVbnZeDQuk2CZV3VJQoBnT6yQ9TfjD3mAsvHwhzZGThanwbgvK6c5n24qXo8yLMJHKhnS9oE",
  "key11": "5rk5jaWeTdJVdj5YR3D9LHwJR4mvH1rzuuFkjyFJ3BUjc7PW756SVcaDvcrx73HNmFsYX1oosQPDjMYzPWVAdFZT",
  "key12": "5DmkDWUDurBjTdqjRuskxnFUXDtV9GXwtasF3WyNJNUGRBsY79J4yxtvx5XuesXNXsX5MZa2NUNXQk9T9XTWXS2x",
  "key13": "4qEqqfoYSqrRsrp8PNFbRxYz8pwCGcuvF7qUEJYwF9ZNCAUjfY8XwAzY46Mwgk7AFCepypLxaEHGkazCYhopv1fZ",
  "key14": "614MC2AxKchV2pXYZMoUP5YUkex1PwwMzJS46tmwhx8e6DNTnhrg8G8mGdpZw84RkBiE4dsBgaXiyeGZb1Eabpb3",
  "key15": "ieyKXVjcegYwXkKG8Q4PNEUwVVdjr5CxjaDwWe2TBSVE8ghyTL9AZ4ByzZiUsCjiNTK81wYE3CJcx6vvXcUjqt2",
  "key16": "5cknBC79xGiNvrKsvQEY7UVZf3V2S7qf7FhewG3ZNSUvHwsBD1JuxRYVuARxts9pyLdFjjvwi2UqWCPVGZWTFYe",
  "key17": "5rvd9AS5j9Xa4prvEFoip8J9HcujxxbyhytGaNKuA2QMsKtZuoWiuUUv1ijgt4hsaJ8o81DjiV63qfx8HkKkkfRT",
  "key18": "4dtRrfXBgpbsHLXB3NuCP7KqjEF6McBAAPgHkpyJXzkDhmJwQmH5wSR43EX5W8qCP1FoqgkdnpoPXP81n9m8DcpQ",
  "key19": "5nt1wgzEmkXGJfBo6RcbzncyecZonR8zipgebXTzWimaF5NKXqRNncmhxRTeyZd79oqLwceWNMXbnqEVP3pHzUiv",
  "key20": "4976Hv4SQfh3bWb85BGTcSx7rZ3dr5ryqBZcyNKLW9DxSzifNZfok5fwccPXPefBgiYPD632tsUDq57sw4V5z2R4",
  "key21": "23BNTyRdj7a4xab3gbhubLAJ1i1T4AChVXVz926kt9gwmtq5cTmAmPgheC8tW7oBXVqQj9JjbJc2gUKrQsbkVZE1",
  "key22": "4TXM4jd6WaVCnhp6dXpLk4HDvqAcKhaSmTwRFVzKEVKMK2rXL6huqnSeqr41ne5DroTaePMixQsAxRmNDpkzGyfy",
  "key23": "3Gg4gCHZF7UU772WEJAfPVmDtP2ySxZjitDb4wfjrDct5HyS8ZuZqzfP5hnxjVa3gr9tu46MG8Ya5oA8fPzAZnwZ",
  "key24": "3NLYwij8LLYYkyz3wTyrwV5PgiGMRgG63qbwVVGWBwzZML4TEb2Y8xFL7vBau1VquBDfkWYUCPbbvz1ASw6F5x7z",
  "key25": "24gUWs3xWqpSnrAZGQzqs8bWVmyWd9gWnkFLNX6PCAG1LPmDAAijPL2QDwi11298p4ME6Y829Ho3ymiZ4F2mLQmR",
  "key26": "bG6JwomAwWbthPsrE3Ku9KkJraDqWyum4HQmjYxRjNBSRq8x8kMPEwCpeBSoJhaFGyyQyHdDp1JCH8C1QtYXXgs",
  "key27": "2AkoaWn4NrEjHhvxA6r4Vp23NjjGV5V5wwVS6hW9HuM5Lh2Msghsoqhv34MerYoaswSBW917FsCWrwc5XuA6rzoT",
  "key28": "2tdne6RWV1fANQfTSf1PeFFfwnSFPzCQAGBx4t2Cmqm9rCipRiqZZ2MuaJEp2dF9Fcc5CLprbLAAYujyaGytZuuZ",
  "key29": "4XQhaNvUfUJ8nhvAZZbRMfMKVYRu9sXiX9h2kZ6wP2piZ1TgvKsUvpkWmi6aZuw3DLuu2qS8G1KZJqFMPkEWnSBM",
  "key30": "2buaWwJBbzsfdiADqbSrw4Lyu2pCBzHF6GxdD5yLcxpwTytsS2QTZqHCAWqjUzQZrJP4CEUXo2sAWqUg4pnr7HcR",
  "key31": "39MbDGueafkQsG5jVSXaSqYWakwZB6KuXKkb9CChcYRYJNJKnyJp2Qfwv9txPWpQEsVtRxsLpXu8dkPnwcvSmmY6",
  "key32": "45qaq7cK3jrz8LhfjRfM4doM3takHScSvmDXNz9r2JCxU6LyC5TsXB1wqnEctsDsHxgqWUesu56zvtV15JFCfqPt",
  "key33": "4qmHZGmBLuQFv4nwGuhqKcyWNpkCZsHcrvtsQWYUPPtzL7UEwbcHYtFVcMeB6LNC7KHPhpPfsneLkyvBe2vrbuko",
  "key34": "4NV9WfMMN5zdJ3sG1WPrkHPfd6usvCgXZb9Dd3Va6ScFa3onXd2JvJFAtGnjSfidG7BK1MSp12bHMfJfBBJpfEjf",
  "key35": "HHiDGFta7FytkrE9HgDUEXQsTZwUYfgpgnd4HyW9T1jQjajWLLSEZshcv8iRqiCgTVezbLG1TrXYkgdx7cAnM2i",
  "key36": "5q2pGehrzwvrx95z7W2TfMbAqZBBYTWDwi3q4CHhtukBygFZK73HCEGuDosu3U1jPDzKGP5ApctmVkL6TEaLJnUT",
  "key37": "5aWFtCPUuakxQkmBaeKMCq5eAT3Gdq9yCJCgHqzZmDP2cTFz8MbUFqTBryEs762jyBukXGdE9UJmBkyU5ht2oexY",
  "key38": "5wErCUtWpjE2cdDTsqyW3eEnaPDT6JZv9Kv6h77DCGeJEaE5MvFbS5MPwTkyc1SkZuy3pFhL13se3BG8Dsu8mzu8",
  "key39": "3n7zfHJGc9NQX1LS5UGurvDfFSRTFxhsTKVYmyWzGvmNGruKUWfEWE5R9WqFsBc35iH5NhPVkUwyT62J8P5PDSno",
  "key40": "3xDaLUqdXNCyetoDYN2D14dX4HVFd4ziMBNoHGZXM5PHKonpWJmg9Y5WCEA5GLkTMHG2AtdeQjQ2F7dtg7euiPK4",
  "key41": "ZoiV6kUnpfS8HfTey9k5J1FDcVLzevjtxpFVC6SGx3iuz7B2V5VTCUV6jKnThZmeFFcq4TfPY4Z6yvx3MMSv9nL",
  "key42": "3Hne427Q39HhJ7ctzyxMkgARYfQZ1PMcAmwAo6xqo4GeHxsSjacHVwXq69C9upk7yfWmSgFZwy141B4jJWiLEpFX",
  "key43": "57fs8d4RaTrrVFwpAHwhfgL9PpNCdVMzpUBKxUxa6iioNPJJzzwwJK2ZA9qTtX8VvpjpbSiLujiT4wSJ7XxRBD3o",
  "key44": "2acaEAoh1SzJA27bj1bYCfZkZpjMEncDtDomGzXVCf9mj2t1FVLiDuUCUEp7W2CGsSFxvX7oxwpDGD7jMdp4EodS",
  "key45": "2SvskofEFaVzFkLG7ACRY5t9VSg1PXNqQYDJNmxXDQaCzo2sZT4g7yFS6yk9Yih8XDJ4oX1mpj9GTDCXnR61dUug"
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
