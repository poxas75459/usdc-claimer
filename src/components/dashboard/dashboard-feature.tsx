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
    "4HFMxwycjS8tZZMok3HGiJr6CCedWpyeEQsySmQLFZzXfeDpx2xnK23Ke2hpejmELo7774JchcbepvrC9uipNchT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417yZHDCUfPn22wfD6fJaKu4gLv4vZteRj5SWYKNmLhCuWX8FwQ7Nn42RNh6EUaxReNESUVffz76hwH5u2UiXy95",
  "key1": "4pu24XeiwqwmC6LF2p1osmGmykmHzjyzd3TwyM8bCn4ofMvbwdUA8xVtHJdUPNkY9Grw6gbKm4tuxf3TmbQpwt74",
  "key2": "cvaXepbH3QGLTE1TxTL6cgdJuW1YJj7Zm73f73PBJGPw5wB6nAathD78MeAfEPpXQKzcZLirVbgPM7pYFC7afJD",
  "key3": "2iLHiuK7C5hCEgTTfFRPk1f7B8osLHvFVzkSPm6nF1zdtXBcNuft17mBtmanBL5hnK2r3bQTRPK1wXXRH6d2Vt1s",
  "key4": "j8121J9cMbf1cnX2rBaYy3NRBEbPW5dxxt389gnnjRvpSFy2asEvNgHyuMR6G2i9fFm4qXh25ofiqr6vrMjjcWu",
  "key5": "Dr5h9z1vMpQvPvYx4U9Exd1C7SgfJi14PBpoUbwnBnny6c71fRF7EBYEfBiCg3dT9XZxjLUXS1EgzGVUpmZzhaK",
  "key6": "2UBFwGeE2vVo3DCvwQmdnQ97653wHQWFvUt4hcqBjgf7TH9bLJnsGjiVC1oCWwinqczDuyU75Y3izqY2rh4b5XnX",
  "key7": "2eiRKqqeTRcyVSjUxBQMiCXSCyKnSE7KSKHqAKpqiUAsPb6kVgdq3NXeoadYJeFgfxTqJxHtaJZkxJtWvutC3pLi",
  "key8": "59SsvU6kv9F1VBnXTuUWdC4J1LwMyVMVERyVSgSGabKTWGMW6PbkBJpMgvKS9g4bLuSiAN5nRBEGRyFQmFpDMzhh",
  "key9": "46A4A8aZ4JcZ2N4H5fsWssunD9yo128UZmSbyekcUTWmDVq4NMhVEsucnbXWZ1mSgVJiWhzJnuFtAPB2AhH1BW8B",
  "key10": "4htJ6fYwK6UHqL81HkXNtSkTBqmeNb2coPBXN29BwgbXiJeSgsDaXp52ymoDomtQ7CNSayfsSEWM56Hn3c8TEj3B",
  "key11": "2reC6Z69w1K71s8rLWeqVonK3FpT86fMCeSXQ6n8UAaFLkGWEa6LUJwCdPdPZKSVo7HwVAyaChXFjUA6254YywoA",
  "key12": "bTWeE2CykZoJdT5LoF2oNp2vro7rs3FA7bDspJQZGMPAFGG28fhiPaMkdbzqmoVsdcumizpnv3Yjv95n34UeFFj",
  "key13": "3cfptSggVvuAAfBNnJbb4EnREghaRmVHoyMEkr5SATbXzGs7b9kgQcdvPwESDCuF8vgKF2dDCs6UfwySPq3uKDju",
  "key14": "36h7dJEfqToQBDTqwxYwTfCDwyXGbGJPMtPgh6sr1KFApk65mGBdkS8QbpWMJtp2MSqPnSwXN78PA7ZxTsp7yz4h",
  "key15": "39dkDWnthhohJyF38FcGdV8rF82tZ5T6u1cLbcBNt4BFfFmdNoinwuCoDn1w9c7W4Apo9S1cZ1uygwMCub1pFxhW",
  "key16": "5qLNb8THDPygveigTHj7NYjJTnQ6L7F8hseLHTmDzYCsaEuBa6pUpMM39umQWGWCuTHbPKyEftpF8B6ZDST6iyK7",
  "key17": "4z5sYWUpZPH2bXRzf2fwahDkhiVccVvp3BQTA8zdCBKhd2DxH2srdN2EJ8NYeWXfqp3bszpbi91H9MrrWPNaCsFv",
  "key18": "7skywbHdNTrmgSKvtj2yQVMTxywTEvRVpkj8hLz6RdSLLKmSFYgs4Qp1P27ZhVbiGD2YCb1psjRAZBt7byaVErR",
  "key19": "3N7tugiCr5qWXTeNvfsSz7iobJWNLDDTzwj5PzA1zAtkoXt9e1pBTuirtQicA1tjRkZneM1ffheys1Dv2kA6RUNx",
  "key20": "4ZWYXtDUKwjXP5PMF9V5fMrRVUU69yNiSqY4heTqoVe7ddvcjWX4BzVCy6NccPJDUV7jzjeS5MaPUtKyKWWAxahK",
  "key21": "5dFVC1HEEs8wfCE97jnbuWtq1vPEx7vgSaZD1xBN6zRaw3Pej19yLVQkNJ2e96tJcd45tYmWDxTbyh4URV74NP1",
  "key22": "4hF5pm7bk7ErBQELaoAx8ge36P9sr4Emp4Zb8YFqAvsYoSZMQY23gy6Z5TFzsxjN2aci5JBuVJ8AdxYnkLi7Dwaf",
  "key23": "3zf7Ws69EaQ2SqYPmBySyZ7w4fnZehW9WbCc3uzgVs1Rb3jksdpKu1cwh3hbqDRw19NkhuhHZZHscrVRTcgxC7C4",
  "key24": "hDvi2YjgXMmfCcFnQy8GhGfuXZAGEBJ4czm6TYEqZzn1qzahxg5qUXt1Dbt3FUXZi4mfZGDmk5s1d7m7o4j8LVn"
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
