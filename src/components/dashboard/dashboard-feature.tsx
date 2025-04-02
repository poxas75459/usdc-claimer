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
    "4sfJKoS5AXk6c1UHJcjynUwiEa1wZk4yqYZ3seijtWAnAJK8Td3gJZeTZ9gNvcKpou2QSJ1mwkYWfhuiSTm7GZur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dfkpH6WtZhz52jhYqbfKfsuo8U6f7hAmW758MkfCXGYJr71Mum7WjfapomyD3zVcD14sH8e7qPc3A1wfQTpDc1",
  "key1": "dEpT5G56FWPVp3DtfKkQ4V8DpS4huGT7NnQVKDKmfrbxJwrrTewKHsNJ2PusrDWJaAKrCpsLcQf3CZKKXUvMBsN",
  "key2": "54P4RVF1hYnjL8sqZ5bvxvERBAipHDi9qudwML1iZ9EvwR4m1fXx7SAHRwHeAsL4TFX1yn9GpSG516Yqr8zXFMwF",
  "key3": "2JPRA579oLZ2zEP4Wa8WaxxDtB8uFF4GaVAJNf9rWtmWHzupNn4WsFkA5R7pDY1tWFb9wMjjEALkkEuZJ1MUAfRM",
  "key4": "2gt4TxGNnKex6J99aw3zvnZQ8n9kYbWqkvEvjtuQKcnBkF2wxo4Z4w6zRbSW1wDv9v6ijRM9nJeibiEkRaAgiPHd",
  "key5": "2DsAJfGZiiFPH1vkfaB6JuNcs1Es3eaXvWBMUVVgKNCfwsh83jHxsD1edyMK5hHpcXSiV4HPw92oCKtyjMeWmc5V",
  "key6": "4z7qVjDBe3uz8Y7bsemS4H6TQnmB1nRwAHLtWGVxmp43CUysDgJhFLMW7wyeoD4g47o6gEMmRgxCjwg6dRZiFyfD",
  "key7": "3MNKAqtk7wLHPPUKSp1ro2jx2Y6W6TDDiJceFDhigCbMekZ8rX4vfZyvHgJpAnqKXnG9CYdsjte6kbkSd9tdSqX6",
  "key8": "RscGURW8sMKDqyMortz8P269trtYDU7DDz9q3FSxsDzdC1oQvh1ibsjd4A9hEqMdsUnWFnFkTKQBZV3A9Jeuoau",
  "key9": "3WVadNgUNceei69s1HDXG4MTQkpQcExTfMxjzeWwuHFkgmUBPfikRubS4VcUf1wtzkwGRNBvSMZcPD4jhw9Adzip",
  "key10": "5dFESgWypPtM7CFSypGoFkRod2mGW9hzea2zHTn5krimLpsB6ZZcf3mCATbbENf58GcdojSc2CbaLhHJCmCJThxw",
  "key11": "5Uc1NyofsGMt8nVML3vTem12wq7cqbAfWZgF7uPseMHiNZQtaC8dWTjrL1gC5iQZ4vEAYbhyZwaJkgPjPD95EQt8",
  "key12": "coQba6aE4SLZm2b9DMU9xrzN3zyANgUbRBr38aJRhS9naijVQ892yc8RZPVfkZ6dm5w5HXy2b5rLypwhSUasVi7",
  "key13": "5p8PGDMYYVHVCAbzFLpzUqH3dxY4d4zHC1rW6JCcgG24XNBYLedwDiCs8JyAkBtKGkrBWPUmKaSebxvSYvJj5U1A",
  "key14": "4dG5EA38AswhsqLEwcNXVXyW83j1EA1oeMib9d2jXVFaU6SEyjnuKEu6tq7n8EL399Qc6swQSQZWiU4dPASbhq9Z",
  "key15": "4XWyeevVtfVLm6PhuAa2Z969ZrXPg98uKBiRVRVteM3sXGzBxvBC7GC1TUpTgPq8w54n1otqKYnzLP6wyTuxLUuk",
  "key16": "3bd3tPsNrpe9TMLZxP4M3cHu7aARpsaXgATpJQQ6pgpgobaLx8vZrmbatpaxSAdcjHB1njCPXLsWgdgteydeFzSU",
  "key17": "3UUGMoFByGFLo2PGfCQKehy27AXHJwSviNvwffDG44dxT9oAQnyaiSeRHKLT4pd2fwu5QXmVYSZYtkPqMzb3Gw4P",
  "key18": "5MZnbTKF1RFaiENf8HAv6NqrZvwqE3bS6ScYpEeCAjFGdg4sEwyPvWWmWy8EY1BTV9a7MzjnVWcFPmfxamjcZAi1",
  "key19": "N7j3ab68nVr2p4RkhXJ7Kgs5vdiVsj526uobuuJCkBhakgH5ETpXVckem8ifrgTFDFSRNEqgTV89T5RS9zSLCEK",
  "key20": "65gCiPW1fmXJG4CZjFzoTej2MQiiEXseLT68JbPBzLsQmn6EEU2RDBe5RxvZjmYVEvAiASM5LMCuMRn422yAQ4QD",
  "key21": "3kcUCJxY69e9ridyBru4ta53nHJTaErTzjzJRKpmH1Ts8fUKJnWdyoWtC12NvohQsdH46bStVAH44zy18M7ESqzs",
  "key22": "5rMA3tEeK1pm2D1U5muDKREo6e9btHBv6jQwFfpzaKzsjzYgSyMuJKLiygfPVLTjRZQnwvdAdtwu7zw5ziYEwtAq",
  "key23": "3jFCm8cW144UM6vKXeLGxxk5BYEzoFwf8AeNHWYtNJ3kkQ8Mw4RfsRKCfBSUqLr5cujyYeVeQctTWuyFvDhPjCjV",
  "key24": "2VwohpsLwpG9bUKSvd9Jd11Ku98Vn6oQ64dySHNXtg2cBuyk2KXe4MhkqDrRQX5iMc8G64Gfvk8DnwNMWeNweADo",
  "key25": "2uSPibQq6KTFTHRVy9dFwm3g43BZNLpB1jXzC3zUPe78AC7dxJiBeXJduYEBmZArRkUJCe9ELqAJrZCgHCJtCrzx",
  "key26": "5r6yEygwFNR1f8jtKsnSSNebs5h9fsu8jYzLoofvC7EMvGj88XZV3BFykbU7Zyyt9fHkzzr18DM9izos1CGer4aR",
  "key27": "1avLcmd76ahfmpcm9mHcfi7YN1YEm3UkTQeauqYt9uq672GrsFHT75UbMcFycjGm3SnvxFoVrEgpJ9BiSD327NH",
  "key28": "4XogyaWZLVzTNoqhk48zU5Y3gXLK64ndSQCrZVkJDwjZzeqhPP2nAeWHUEM9sM6cEAoieiJF1oarC7HNyNUow1NH",
  "key29": "5rLF8WwNzEvQjwD4T8MogGiiXibcVxrCEM4L5rkVxkKWqi6o2ykcSncXUiRFbc1kgKvogCCrSnhmyF3PbbPXzxrh",
  "key30": "ni82ogtADnZQGVz6mE9eBw6vxWtgxomAFvGj3Yfgt7dP1GSQZkjZP5F5nBHcBaCCUHcdzA94DaYt9R47MvPYaHw",
  "key31": "abfukvr6yLuDfa31DWUyC4MhD9AccmqoqWEmKLbPEMMEN6zpQFYjPUfeNerCV4JQVtHMAfzbXse9UTFvmYHTPwW",
  "key32": "g9KvDeNrHGCaL6GJtpugncC3eH3X6fUvrSwp7cHqwPcSp9K63D94yCqVH5xqsePYWxb2NnyTQbPUNTowwEoUHas",
  "key33": "4wGfE6koxPkDdemBqdPPsA4eg5sgzqJpcqi4ehLRMUAhbzQTR7BfavEz5NxLLNrU9b2F15mRZB838YB9fSma94rx",
  "key34": "4Pocqo28yiKuxTj5pJ4u2H6AwBcPh8GRWpaKnTBTgaqj8NbLhY8KY2vpC8KL8QcvDXnB9xUZyG2m3Bc38WBDQm8j",
  "key35": "3DQNsL5A5FtXNSCbiy9SVFDH5d4d4JLdXbYnVeZErLtTCaSC9WttiBd9UfHTR1Z15DTNcFC1hqsaE1H92KUcuEhU",
  "key36": "2rHodbtdBddFhp7biHPyZNnrcSVHbR9ryuxfVf9AKcMUDkNMDwWfqwUHW216rCGYB8gfsdD31U2MgY2n1WKdSaC6",
  "key37": "46XmxcvhS1ZVgUXQRHQHa1wszYZGzewFxxKq3m32FhPf4xKGjk7X7C7erNcCt4TYLJ3BX7yACb7BWVmkVDKmd7Uh",
  "key38": "2tWePZ3PvYDhpR6Rj67UowRoYARAfsFNkhRRn8C4XDVQgDD8xUMNLy5K1GTpcysAfaJfaEKEdbtai8Bse9Q6ErBk",
  "key39": "GV6GxgZyWKirAET1XHyyUY65NFzMC9Nj89UaNr5MFUuxwmksq7ARvJtf6KHFLdVNazs589LaVb6puPdYTEoxtje",
  "key40": "3tP6nicUM4gq9zyrk38hdoMreLkZoM1ec38BTjzRGVZ4v1Uiyo7SyQJkWjWWhsYuMwtEGu9XfWvC272xur7UPLNV",
  "key41": "46pQ6hJZwXHYryEyMDt6GxcfBatesmQVeZnxDahWhMtBG6RjnMq1z7jNEra47JMGas6Mr5SMXXgPaK6qdmCTGnAA",
  "key42": "61fhNKUCxS9qAdwBBfpUJ4LqExx7ivJhCk7i2AmjyDV3cSzg823rpjZ6pXHWkDbThbRDQHCESAyPkCvfLD29bq6C",
  "key43": "5DMKSKZrVVK4Bn7SxQATSNGfoD2ZCfohsMn2oGCqoqfWbqpAd7EarkSzTQie7UpXwaSmBcy61qCzdjFZEA6N7ioY",
  "key44": "3VCsixw31cBgNYaTMen5CJfhznN7wt1RYZAyLRS7NqCLX4h2GjtKLj17CT8cLFZtwWiW9QriPVhSE4cqGnt8Q2Bn",
  "key45": "2JV1xLGvN4SXaQuhJoY5yV72XF5YypfgT1eVTaU3AWou8FRvvbPy7WxzD6WinnKQrcJMoCCDQgb7jhKJ1vN3CN3S",
  "key46": "ShFcKGV8v9SjJdcvKiYRfYsZtp4ZvBkNNPYJyAchPB8mnURkvf7XvyGYJRG8YNsRHriksWBbpZ9HxRrFtMcTRz3",
  "key47": "2L2up6x4px2vYtk2c9iJpV2w26eagUpi7QvxujcmYaQTKux1BeDdXP8UB6RTgAq15Pm2gy4gavCZr9Uo1yHzYiKe",
  "key48": "4rp1EtXXF8dPmXyGWgBWjsrv9mzMLWjRGyC4aC7AeBRUzSDEpjVodP26YTAdZ4UgeMKV6zvt8ZNLRijMCpn1xgg3",
  "key49": "3wi2NPr762aoXDA9ZWrTJLJfXMsqqPusA1H8fFjwESYVqTKB8oVw5hfZsTYMNAiqw6rPBnqmc3UMyBkc8neLsLc9"
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
