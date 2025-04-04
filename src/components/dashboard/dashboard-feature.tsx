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
    "56XvZMFiCd4sTqbtYaofs8UWZ6WGGD99NEWqAREegbLB52KoButdMjyD7rcPv8ZXMTjcMRCsBne2YC2EueS5naZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPAPZZhKtFMvfPQrLYQnP8PNsadX5VFLkd1Xake8sZap1PQCG4E99TPgPbm4Pqhp2NxLtqLEyFExB5FW1NuhVW5",
  "key1": "4989Nb4VE4gvHucWfsdhvrZyQ22kuNmDVDnbjd2GJgYWvqNxPkVKQqwPiomP66ubiFsZ71bnqW3Sf4Qg5rfxaBv1",
  "key2": "59oi93KhTEHSyDrz2cEz2pw8fXP32fQEocChmrmwH7Y4LoU7mjeYiHaXc87AVSNJRZYZnU4a6WiqbfaD6xVwHNmF",
  "key3": "DYXoP2DEzM7irYmfhNyxmcMZTGdFda2u5uF5dMsH5ZxsqKSsg2GxJ3q6esDiVmzPE9p2HTpGxfaSJCosdiSXTD9",
  "key4": "9SGqhvqWdCCWbqcvgUJB1gS9karniAtPUFEQqRCcLjnz8d5UrU4SEPcz7Q7yKC878SVg354njNgNxbA7p65sc9j",
  "key5": "4KB85xdz8nwRX2LD1iMWi7zY8yy21RTdYBgumMT9FDb6F72YJ9KwXoKoq4nCjoqK1UBtrLhud3bPxDngm6VbVSKK",
  "key6": "ShC5r39CQ4jKHtesi75adfTGKo51YzfNKgVhCKFRyER7Q9yxk9JEZjeZDgBMfJQhhFdbsugkGUhhrjvnmWAc2n4",
  "key7": "2r9Fy5q5Z7WcEAAdUeaY5GtvEyAcsfuacPxfojCEWagNPJLRru8cS3H1NNwwdWiagc8aydBWHXEvQPiiX7m6KcsL",
  "key8": "3HqZ4YqE2gdazm9bXUa8uGKMGfVpvePZdGvkyfzXqJCS1eL9sf2qCnWYtmQfLfL2fMZQVqCTuX9Ngp73L8xngjLy",
  "key9": "3BZ5sgaxWPbrR3YsuaWsZeunxHURY8SBYYQMw5zcScDKudcDTpBssDPyYRPPeRvyzKdfpkh1DEqi8VuzUw8Y8FoA",
  "key10": "3wxYedS4cogshGLtCWFeCJ5WpwEDwNqgwv1CTfkJdcKmXR3SVp9EwoLDsrnCsQw7kThhLbEWvdSJkrfWSR2wkrPP",
  "key11": "2FkCS85RMKBRUimdjTQduHWtbpYCkFSf3Kc5NaURcHaf5SeKkWHCHkPFEU5wMEpEHRVgft4bKbBFXrkAPirXb3Dy",
  "key12": "2zef8WQGCBVazkectcwK9fdBkJ38HemQfs4Fowyw3KU5yPUiquFWKj5rromySJzhGboJRfgNdBWqKTjyMSmt5D3G",
  "key13": "AMJDNPZDkfQND53DqscTBiZa38Qa8sodJuZF3WMspBLmL1DUoXTkcHzkC3DHt2wPcJVYmUfxFFhRARbxGHTKXLg",
  "key14": "4GSU5ngc6gbdxVtunBjJ4xKeCiNmoR3zXwjNvZReB6eDVG5zToaQddu8htmhGc7YHtp2NDqenSfWuzhJT2Qpvkyw",
  "key15": "4uH8SNxwdmCp2SKBuYBJ7dih9GydZEevTkyEFtrJDnaqYAsgmGoaNnkthBMC168VK8C796D8bPqcxGoJmnADveVP",
  "key16": "4sUM5GVCtRUxSYvQgqa5bCRJyVJu8BUfTfz23K38tsG8oRewp2Yx6rsKeJuNLEdnoP7vm7rDzPqWKK4oL9EoEqit",
  "key17": "4u4yixm8jyf8jLBMwt4WUo8Jubv3G3peXQJhgmF6wqSLpApSRZdRCMX9T3a8gnLejFfPD2XCRq67US4ne12rwboq",
  "key18": "3yd3sqd1fEPQmmuyDAFtAZ7o8ANMCUUPUZD5PXgSkfMXeHjiZaziTb3FDerb7uRBnyDRAb8s9DoLwTPYafvw7nxP",
  "key19": "3BeUmJdm8UonNfi4CaV4U9LPxj3f3ApMobF3y2gzEvEpjNbsx4HfUwdvYynprgvUXFDbknXQGJWHBu9SfvLTujB",
  "key20": "2ezxQaorXY125b2nvxCH4psDcB83ibbRnH8kgpkKx63Z5A4tmetCab2VVKesHLG58huCsvi4kG7tUbdEDixk8uPe",
  "key21": "54YEtf8YxCtfRzGU7iKdxxA3heFoFtFszCUFLt1x53ysACLYUy5FxQA1ARtRX3myysaeWB2KSH3izHqMPPe3MFja",
  "key22": "2kf5GHQKMpbeUTrRSrDXYvkeeCurfu62q6pGp8hNTjHAChJPN2zjB75oQnHNyXMwpy5JtNow9AcmZxyDcnud35p",
  "key23": "5LAvaiZyy95vNoQz5cize7y3BaqyjtHhY5ZKAg9AusEPX6kYCBjmNJfUuLYmuYY5Kxt8eUPPsSYkTigBwMwvnr7Y",
  "key24": "2aKHrfFU5stYyKvVXSMiLoBB95ZioSuk9YADbmgyksF7Lker154ma9wocpT9FpgSo62gBYMa7VwPBY9HXArz5EEg",
  "key25": "3cDinxLQqVzvo4v4CsNmhgUohwMWMMKLJcVhPjFxmi6q8odxMDo6w6dweZzoC8Ys23i1j6FDZYBfFSgHDDW7Smk5",
  "key26": "3XDQWtMYFmDwTMgv3hCcidpHF7DHubRuxJTZ6TtvmRo4DdBLNf6bV3WeDvd2sDKhSAFsHPK6EH4fonsQSqmVPwpJ"
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
