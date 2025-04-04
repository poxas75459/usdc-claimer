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
    "3Bc5vPME8y6MCfmKqnNnDqpn9CFLoKq35mtphwinzMeJQtseDPGUxyDPWhyjvKnHDP8AEAxHL59Cxq8iNLWVvZFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGx3QgxCNVNN2GPpVWRMbDxg2Gmn1wzBeBfbsEBMakwygEhQz9B3fYZAPZiExsinAMqCBCsqLc7JnpM1ypmng55",
  "key1": "TgB6kH34jw3759stewvwT4As47MVLMJkWXNXw4Q91yAb5a4CVz3BhGWa8rzkgE4oPr7u6MfUy2M4mA8pbK8DLaH",
  "key2": "3gyjcYxNy7fowVK67z9y51nKjNsQvro5KWCw1Z3kf8o73CWXp8XChfXWPPUxRntnBneZn8fMnfUfX2SbmMyEfYgq",
  "key3": "2DoWbhMsQSwARBoJGhDtNHiVhdGL14RK1E5ku43Lc2NG8zDQ7BCxvBhnMUa4kDJJe1VMPgrY4ao2sbZTso75jFi1",
  "key4": "2GigRF46h5A6skJXAVjzAsVHNt4sp8WPFDv9W7btFEcGxWavUmtdL9FoWhcGvfJg1LYXaPdjTgaRHYsavMWQBXkD",
  "key5": "2eFYtuewJwMq5Jq2ky3eRRMfXCKHueCpf13Lu4AzSo7o7h51F6aUdeK1K4CGXC9vm5T4Aj4SEYzMHTih1QLuqMYB",
  "key6": "3sd3xR9pZE8WHNS9ku3kNwJSSHWEEjvYQkeNScsHEE1QQcFHy4Yf4Q7PyyAG2yFpyiLAJMq6vSgHcACL8PnzdGVi",
  "key7": "N1LfZ7JFGRLWh5PXEs8gHkNJmMLkNWEnwYqg5zVHzsMRHdFn2kehe93axZRQpjWJrCqAhYt7Cn7mUMEK4GKn3aa",
  "key8": "22HkrZmrpZSUmhzwevA3Tb1TeeRJ3rPX42VfP2zLtq6bXv6hq6XdA4zwajkLz2E5DLC2crrmXrJmdGQvZQobiwnG",
  "key9": "fZk6wWtw9cwW3Bx7EgJ5SwQWUzFWBgUzCDUQ4fLxwHiDKt9wdqcYsPK1Kec6soQJWYeX7FyyVZqtzdFzntFJhgS",
  "key10": "2BWhpvPRNSLmnX4MsdVJPXci3QJCXtpjrhx1Ko2DSaJnsUt4L3FUzZ8MUJjm6dLmiJR9NfQBWqKNWs7eodoAsq73",
  "key11": "fgTGZwY9nUgWgjJgrfPEJVbmeRqCtim9QfsKLMjz6vaCjgZLUCWxbSqbGegjEoPmGkMovYyqXQrf61beW6By2Qj",
  "key12": "4T7otiMRvzURyCjnW6DD9UxsgFG4q1t7bEDpij7gECufPmoQWvTNeMJfn36axx6dT2JDLwZtzGUELSxLdNyUn5A7",
  "key13": "58tHWJ3dkucyv6UU513pox4oxJ9EHtxkQk47PPhSDn7wuKrvgVCiUwrSyc45ijwQAMsoeVEwdM7pw4am6gvLdUAD",
  "key14": "4dxvcXjZw1ivbLexea4VzUDTXj9eesBaRbXi7nydtuMDnzCmEZ3TZ5fQjQTpN7t2zNGfSG4MAQxy34ofBe51HRqP",
  "key15": "2CgFM6txBG4LpPw1wQ9bP3a6XwEc6W1cHj1KMrR8BRVi1NDJSCE73xMfGUz8EKSqY6BZbtYCZXTaY8NTZKoVymDC",
  "key16": "3VuZgezGnzT2rbmCWhiSoUiE257AydiQFz3yY7zeR9atPxmkQwnPma8vYcSNxvSKDyUCa5kZmK411cPu8Gpi8GJE",
  "key17": "554iZNGapEmWXxPEPdQeehEek2C5uKu6HnyYunt7783FpU7fcw7qcTBfttycGTUaF7xguZXdwHTbDi2hWbLB72Vv",
  "key18": "645xudgHFtfhQUngNPtf1iAL7MwjtbG4N9RpgsAKyByhSzuWKHx46XDJAC7dSLCCiynqbd7xyXTr4CXKhG9YSX6g",
  "key19": "5BFLtVwh7pLHj6XgVso3rMrgfcMhSqedcP1cUoqPUUjxeFKJREE67XbM31Q5c7wTx53LKM9vGLhHGmNUSZJfDCu2",
  "key20": "3jnhm7An64nWRsXj6XdcUwDLNFRBtaMNkvAbsDt7aEibhq2N3vjSt1ULcXTuETcKayT9XaxhZhaAa893zr9oLR7s",
  "key21": "3njcvaGW4cv96zxx8RzQyrKms1NoBQgHJJCEx6PWuERb95AbEmFJy6k1MQbDfu2QjCeV8nX7u5kvmp6Bet4Ru9mY",
  "key22": "3kTU37wW9vMezH5TCcEabHRCtUuHQ7cfYYqpkG2YUtQJCha3yJs9wv2ZNjRsKoBfWimtsQJraBxUJdLRe8DqTcC5",
  "key23": "3vtMDgtdQhFP9Jzrkmn5Dv8oo56hTureReD9GmCPBkEMhPcXx33WUzcoCc6FMPsHSGKtWjD79CGWpdmdE8R9b1Ag",
  "key24": "64jfDa423rhKDtLWHRGC46RD9cYXSTn38wn4u1WjafcDQuzqQQ9DDr32B4uaKnnbcME1bzmUs7Qr2Rh4Zq5rkThX",
  "key25": "4mG3fC7kmMg513JFnbm6BLNrEe5mVFCVwQhnsbixCBNGKZdxhPPPEwUUUpaV6PKPycPEZhEpWuAFvvdQsX7Tm1u5",
  "key26": "5GeTDWhRS4bATiYsABegLaZTXcDk4RkUXboWfR1EEPHihBHkt7DxW6qjEyRAacqMV8cWCfPNNYZEx7sqGX2kj4Pc",
  "key27": "Edg412JDtBqRawd4s1d73xyPmK8BkMEgRkg5DaKVCpZNRzyewQPAfsx3q7yHQUj3affYXQqEzXU6MSyrr7SoZ2f",
  "key28": "2vrmARW57eAHWvqFv4NFtfdcnG8sGm2NRvGCEvpFTtTHsgYqKqNM9TEBxTEK55Pow5467i9U5mjwFb2uGYZKjk33",
  "key29": "3MEgUm38rM68vF6vvRECU8qWEUSC9QHujXNXAiop9HiDTHqowFqjDvKwwEDijuzjmeE1YWLHNj9qEwTuu3CZ3V2z",
  "key30": "kuE85YdkP2qY18LK33KDU7nBQtXMCVWmutXh76rK3fVnA1T1Xf5Nt45TPSzgHt1BEBoTcomyjZkCWUJPf4ERgqV",
  "key31": "2JwvNCKP92jbMXRiLtGJEAi7ck5SZpdQtBxv3YczGDXnivxAShE1LBRia6UEsKp6CfwYLX1NkFQhYCh23bahdyk7",
  "key32": "4xDdVCMTcwaYsQ183RYzTHfyW4YEP7wQBNBv5Mc1wXFdurV4bBdJFQQzympJmDx3eQnTN5SmD39yyxPvQ6ejQB82",
  "key33": "3jjvzwtUiCoUjiG4rc6pEHcHiRBWQB8nAqtzjKnoHEcycKAVc4jYkzCvXvZb2x285ttSJGbDL79JiLKtgJhLR9iz",
  "key34": "2sxEUMctnosxWVd4s89yXyDindNLQFnoU355iB82iRKiaHakC2jSWqxEtbEDqTqiLUAH1oRbhqRT7LJYKGWDhobW",
  "key35": "2THEVhZcM5jEwpF5TBqVqsSmgRX1P6gDMeTkAWJTGiuyDwRcrojsoCZXpz1VEft3D1qnnDpr31FjvaqrXEueLr5H",
  "key36": "4Bf5ZJXHd64GNyhtfkNhVSur67fG6Y9wrEFF931iUaB8H1QkdyaThb5mz9bcUUyU6yZcxV6m16wsAeXLTbtW41gY",
  "key37": "3V2zaUpN2peLrMJmcyE2dBmZSvmT3kpj6fFP1Lqe95xTqR2A2cJ7Lv9ycLCCh9YkHocKL4QEqRMT9RQZfTuDa7eC"
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
