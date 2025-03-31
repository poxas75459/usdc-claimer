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
    "4a3ixLE9rbsTKybstRGJkqm3J3Yb6cciP1BmyTsU6iB5CAeterMJEJfwjxLTsrdUiRa8XfUfoktbYYwgZ9jZgBmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcP5RDqMifi3GNWxXNCuZ8hGnn2D9g7GNzPhBSvLutESVPJ4ScB718R4L2rt4EjPMiiZP7hc1cPbqMYyaLGrvjd",
  "key1": "51YaShR5Y6HM4DE83pquRnxff4iMDP9DCA4fsxzpJ3GiLG17Aja9GYmcZpVr5qVoHSHyzeGuGbH2LFtsyTNh2ME4",
  "key2": "36d2q7wbLpeVsm8ECuRhJssBbYrVE1v5c8G4q17eNuzA2VSygqR6MGa1RdNUJGUcwjAxVeH9bm7JwxUMCWqBZRj7",
  "key3": "2PjW3CAShWx47ShYHVjBhvoyDiyJjgDoYe4h9FSRQbBYpEUFuUfTB4i2CxrPvjyJTmkRxmwD7xNA8MQFQschq4ce",
  "key4": "3zfNCvfReCf9VZvv7xKiyrWAbXEf3NYXDGjg3Saxny9ZkJoVF5CUuz1S13zp5FAuDvPpQEYSTmnZHkJmHX89eEci",
  "key5": "5Bdw2eVv3ii9fU8jj2furzuTT8F4wmU6YoWJh7eeGSbJ34bFzPL8GFZ7DMpQXsRjUSbjeqGq8UQ85xhx3oZGPUfJ",
  "key6": "Ni4F1RkrSSnsTXdyX23mU3e93XrEW6r8reEp8XkKdVQqxRJkqqoRKMDcMF3PGZ7LW7SCTpwhREA74YrH516a1fM",
  "key7": "B23kPVHN9UNpr7TE7HgVVWEsLad5RUTrmyN136BavhZnYqBvHC2bmx5BRy8zQ6sU9qdHHJkv85Fa1P74KLgtZ3p",
  "key8": "RNFa3bxXT9MVjRRv88KBpDvVkhmVKJf4GyoACYEzD17nPgUDTxzokxtU9jv5Q8urvaioCmLbqWTh7GR7MPZuT38",
  "key9": "66pJ1VDvpXCuczACJD4FEMD7itFcSCU67s7jESnkgZMARMn56CfpwaRwsde8WxzbZ5w9s7aMJ7SuALxBvDgtSNhw",
  "key10": "5LpnbMMYwjaDcCLpfaZPpBTBQ3JQff73iDCn8aS2SSPA6wBPW1AfbyE7kNSsoCnQo229MQaTUkfCTDvGD48GFQGD",
  "key11": "4Xx7fTSoDYe12KRx3Xs4uGqhadZ7LmVdAG3awUWJwtJZDuuxFbUzbgWnUa5gJM9QkJW6YcmgU3eKp1DneaWviDoA",
  "key12": "2YCLU5CUDERFFVA64ErVTSYCHxcz12NdCAA1wMtjKeu2Az85y9DvQ2Gf9dg25YvcTRC7a3S3N66XcEvVyS1rwmBk",
  "key13": "27VdSSp8PL7mnv9HthUMFj3ruzH26DEcoVDJS3FQGsa3rKxba1Ke3Dkcbj8BMRiw8L6RxCXgnyJRH61zhbeEYzbK",
  "key14": "AVMoJ8NYP1SeT7w8FUCrZ4tSZ3RNWnKCdsXENRZukkMoVUfjstiTmnRBs85nVnWnx24hz9GSTY5pqjvDQaeswCT",
  "key15": "3WoxtETEXJdyFiWinPqFxL48aZAop4jqna6m9SLtMx7WWfkyGK3WcZsNhW9fqmjsvvYLGUyBiLHSWzZzexsoSiKT",
  "key16": "QFRCJ1NfjDq64u8N9PxWVhrxfjXUBUyuBALrN3BewwfQyHR9zx5FW1dEEfiwRPR5aoiPirV8Hd77iZWxMsEpqG5",
  "key17": "3F1U5MgeBAf5oX9ty73Nsr5fbesWm63XbXZ6YfvEPEEw8KGhQ4BLpkRAJ2sdRvBCJVXjZRTEQc7FAT29rJkEcY6Q",
  "key18": "44pH21rmVeg7ySRC6cbPX3k8gjGmUmRZSdfBMqKYdPqbDAb5r1j1HxYHVjLZQhzjf8q3XFZCScEWbxbKdPNhu5S9",
  "key19": "3G786UkVzSv7m8MLbk8uZPuiiQ1H6SBWMxWPC8hzcn7eJ6EJe6rFCYohvJb7ksMUJH6xywzDG8UBw4pg5vWrqfFm",
  "key20": "iSaVboDBpJCQGDYgCjYYBc49KeuRka6YSmnqg8Uyx7RoVXUCzMimqHCNyP9vLWoTEkjAYu4tJc8jWvvv6ZPetrq",
  "key21": "2C5Dc11LRgZ4WuvHxUSU5dTudvWGx2puovWtobSfh1xhp54z7n3XDFMWPSMY8YKCUawvpqeMgrVAHBdfo6KJ6hnu",
  "key22": "4t5SHkTngozkqueVx5t81DZUGRPnyPmzMS8ZvF4Xm1ZKJscNnNxD7v6M5MVs69HWpbu5J6HSNnpjQgKHoPy5diFm",
  "key23": "5rBS3ZERrosE68EeYtB23Jzvd4zTEFdHL9bbKf2As6TdLEv6A4KpydowYNpPquRjdMm8HRYBHXzYYnVFJSRn56cC",
  "key24": "2ntDiYbS9FgU8JNoEY3FuEERauaR79dAdFUfabPSmfiP2Hv9pXjKVHL66F1H7AmHEdqo6qqMr8KCMAxUqgEE42Aj",
  "key25": "3yS5wN8pUjyJkAnP18uwTrft1M91hMvUHHR6ws1nvM4GTYVmEHYfXubMfZZ71jGD3feboh3mTyyPBjZdRn4smZaT",
  "key26": "zX3W7SQ3xyyWgruKqMvDnSW9H8JpVPkUhMYatGkCQDhSBA5EgSmzER2ghNMikyVdYy82koZvCkfrTTr6SHYhrN5",
  "key27": "2kG8VwkiWbvndvKCeXab9zrXA3wzYFQ4N4AsiaiqdH5u7K1HFNYGeHCRnati82WEEnb2FnRVzZbz61gH2awNzMnT",
  "key28": "342AuaFgiDaeGG56yiWJXaLVCU5FuHBCv5vpvah5XSzUkNb1GuD1Ep4qdWQ5ZKDxPn8F2j8B8PsfjfyiDbDWxMSx",
  "key29": "626VvWDuAozh9XoRcHUuxW6gV7PCvVgp5ZdHfDYLfhRvvDUytEbXjf4jHgoMYSMd9w7VJ8N2pGDVHDn4hUD7qxzd",
  "key30": "4vMtWL57dba3JLrmu1A1H7b225sQrVSY1fhGxgE6LyBUHQ7AKuEjmaMrgwX6ori1wpLbnZWD7FmWVTG3eAEfFY8b",
  "key31": "Gm1SQkfVSbmPu7NfYw1GzYHGG8DaSM3TYK8XvXELBoJD1uF8c6BmwHi7QcyPCsTk5Rcn2wtoa7oMuHwteSRTrFz",
  "key32": "4TvgT8HrpjhetRCr7M8xiT3axDEYJXTskHB2a37q39qT1UAoPhBvM534gjA5q1uEisjZ5BWizaq6aPeZJAhqAJD3",
  "key33": "4rP1ETS7RaUwV8EFWmWuZQinYY6seuf6DJVe9az2dtkdK2SEpyxTK68G9heqUwPEaxo4BENf9eCwd4jv6DjFxLma",
  "key34": "5imiWzzdDhfw3pDsBFzapKYXL5gQY4TfP7FWSKwq4Z7prq8UwerQ9xPJXEwCqkes7X1qakuFaQew7uVTBSB4Q5PR",
  "key35": "2i5iN6ADJZnDFJPA3CHeqaKBBKhhs5Mk84eg6Cv93SeoVJdNmyVimA5kiASqhi4qmsxkuHPBCNg8TbXktzY8tdXi",
  "key36": "srJEbNfKSRbnttEDGmBd6La3mWFuwZrKZU2oD1tVYK9Nzd13qvaT4spCoFwP29bfUcVLk3cmUcMtn8ZQ8jnFkCt",
  "key37": "qzaKhGsvbzy9yHEW6Ppdvod86N7upRjjKYLRg5o1t7MGMS7NrgjLBnNXKDeAF9kBb9911ZSK736mhpXpZgqNKRu",
  "key38": "5tW1EZbwNJAubEBzEQyVc3dmCHcmLaJJ8A7S6PRGrCADLbN1aVDTuTBUVx5t6cAycdEbiLbm1vnLkZxNWizZMEGA",
  "key39": "2kc64uQeDA52JkCfcCZKYgg1jV6dJAyqJZ3FwbazmPJdJdCzSW8hpvxwBP6AzPyM3z5wJh9S2QmaBFWzLpmmJah3",
  "key40": "45xCfuJ2svhCoM4Tq1pAE29EYim2CybRuvBE6MhkKKNoN3YEXEV9SXggwSqjQLyyQTUhzJpgpqPtpPJ8w41tvLze",
  "key41": "2j3jzk6ogEh5bmdVpJcbV9Dm7fJTozTZs4Gupw6AWiKiJiyhPo1q2DRjy7s3S5pCJgjLY1wVFTzARLW9hjyeDcVT",
  "key42": "3iwVMNXn64iquXQBgdQJbArKVR91v5KzKrFALvzAyKEZEQTHuaqvypgj7vR8vVG3JkQz6rLe2hQCBn1CVPRP1FkG",
  "key43": "iD6uEaQmfQWZyr9fQJWkwZ8mVXp2vFS1NYueq9YnnUiNfsbQAhXxBR5ETKUoeSM4z28ESCGygDq3K1fb8XNPnkT",
  "key44": "7ZoNPmDWYywMC1i9ADEufCb4De2dJbVyUsC8LbTKfDiAPcYCPt65phX8v3gDJko7QAWWTHE5YEcGv7PSHvw6PSz",
  "key45": "3KeM23yW3tNWqjDCAjQtwhzxdFN4nNhxBVqnxEVpjujWkosRvFmoaLDxMwFiq4vsZuvh37wYP3ritk9zijCPm2s6"
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
