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
    "2wWAeLdN21J4fTYrSB6yJxyW5RBEaccLf6TPfw2cYNLGubkJ9vKz3ejPE6CbQxJN68hZXN2NQUXhSt1sX4uMNiQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "487Arx8TfiZacGLNgKrjmZMHoZgJkX1LwM5G43XoBfiFFwyREENHSvwStE9btULRHy7Wzdn2qrbCTyQvQRr5Zc9i",
  "key1": "2ErKNk58N4cFHvtZP5UNmbTWiJwhkH4FQNosgLw6dVJksxV26c8Qc5Xy9PZaGULfaY7Rh7EEfzdtv9ZcDdU7xRLY",
  "key2": "3uLY27rPBJnsVn7rfEf4WUcvp1arWcUMpw78cxWTkJVQrMFKdt8mu7YdwjWBCJMyLbH3mCHZUdSFpPbNSpKK3QD5",
  "key3": "simjCmzffg93ABYVNRFo7JFM8hgPf7WvqCaaHmwPyopxq39AgFdcqKjWChtKyxdAdicKEWPPFJxRa98eHBV1mjM",
  "key4": "5yvy7mCEEmpvmbMcWypt2vMEY9k8wDPfsK5Mhm1gULXGeKzRfV1YZgo1SRUAYPzaMNU3JZmuTnmLvKo5yzTFx1xa",
  "key5": "4wChLDjEEzL8h6WNnS1yk27x822phkw9JrSfZQjBvs9rozcSsA7jvZzxZu3LLUzyqreb3wkf6GH1z3byXUEs8bzj",
  "key6": "4WQB7bHeayz62HAwbAuVPnzougK9wAnTENvSbfvvpV5HiUDfHLJ1PLwq2rGBQHcfHVeST9bCG9GVf5fTJPv6Kwfp",
  "key7": "2Fr3QYqZvYho8dqrbRYN1NyWBeyLyRP7MHUMaUZCoGWCdk6SwawfTnca9J4fKCU6Z6pCCKPT1RaSoNSVeyipsbNg",
  "key8": "2yhDBrExkwySB35ZyDukkdYsUCqjdRB8cpdxN1MgreQCysFvQFXAemfmhyJLU8nFKnG3o77iPHHiYCG6JyacAC94",
  "key9": "4yqpkLBhagqwQMm7PgcEKeZtb4wjcARfA9A7hGqrZfxDuX6TpNqrgputM1BokkJ546xYsRwXyW8DWrhWy46T9Ja1",
  "key10": "2TtrTRHeCLhYe4LYEBbT9zk1souiDDVAQEqgziXxNdid3n7itUA7Sk7wQxrDug2MkpxTpZBWQr8yRnHjwJ7R4WD7",
  "key11": "5ghN8RwVdYTx9i7c5moBVCkye9Ckzs8VWMxH9dcYCdNo179fu6p669qcWRiqzgSR34QxiX8cS4v38CXPAcyFG9BM",
  "key12": "2F5eFQU8yrL2BzWgowQdHYEJg5Aqahbx8u5R8nhNtMigfAwFAiFVVAKsCyEax5rjKG8FfLxFVwmPP9mU5q8dT9rB",
  "key13": "2aNNsvSoEJMY5NgsqYU6iJ1aFXDnvCkWthmbF3ZMDzou4YPVKGC23A6pYupbTuEYyGxk7QgQXwwyjeSH5UyGKMAM",
  "key14": "48QQbPjt7sWwGZoGo3U7Ru1WznbtPGHX7rK377VKLR9UsWUGcmpQ9kSMeHkTQaVVB2s1DQFiEzL4Who3V1bybxvP",
  "key15": "MPn13cNb5hLrw8ecmndPpr9yqqsq7rUoskjVDXamcikXboZyzHzipiSayAYtmtHx3DK3VnUbE3dJKbbqVNuPz2D",
  "key16": "2qezvv9PkNGrayoB4JE137H57Eo74M8bdQPYXTdyLoChRbo3i6r3u4ftV5Uas3KJBPTvoC6QjvPoHeXWzQW35dRo",
  "key17": "2mUjdzzS7sex12ZbeaZLDFrmHLjvKeRWhv1Z32FEBivLpGmAcrLzMjybF1rBSdQ2KhRL18CBPLsRz7B6XvxRRbDs",
  "key18": "2bShzDGtQvp722FEFU5WujZhVXdj7q6LXyGDDDrd25aJbnPfsAhQG7Vf6KZxpms4VnFAuGo7kyMJJLA31bpBFxQ2",
  "key19": "51W7tm4tPHnta1zLpEShxa7HzvrNcWP9J9yXaxVJrqh4mw3k4b7ezQwCTrH1ZBXAf7NYxHPNDcmKJQc47dEqfe9x",
  "key20": "4uJcsic13YCiPpBN2GC4NBJgK6KRsihCd3AcaRFGC833AGGUTXkqjPM88LTg292teq6XEchLWt45amQQWsZ3pShP",
  "key21": "34GDFPCmPCMihhzTbxHxXSZT3iUDdpFkNuGmiq9SNQhJwHcXjCLu3CFJziLNNfUWNwNmHgTmLHbJLMxa95ARQ2JN",
  "key22": "2PPiBcnSRM8ed4g6nDnyT8izMMqDcF3vDCbN7Y42RqSps3QcMgJZrZaTmZmQDCw3FwaTwWMvDUsndqD7wFbzKZQ3",
  "key23": "5e7YDtwRZrJmtfrzbcowvFyZE5Jg7jXLMd5nvkbevJikhUGDEj2YMTCVEZXtBDSuk8sPUgCc3oPhXJSwK8NfGJrH",
  "key24": "2ge8ZVzkjN3W8Gj7jytKgacUNpTCqzgokL11dyu1wYjc1N9x8BNNYsMTYMdThARjVrP8RxxHmw5pgYd9xkYci6uH",
  "key25": "2mN7XNtaKEMTSv6wpvrp1uxTYE8BQe23Lvuh1UdMpgK9QRBnfQVW3cVj5hnoaECbjtWYAifAhnz5vYtA3TtGHSw3",
  "key26": "51F7dwee5CSd3zsta6BGuGmfpgmfR2Xv63hwTf1TCB6W3DFc34VKEDyoBZg3y3nod17RzKc4ubTSSsYmBWgqCdWn",
  "key27": "2QeXJRRBRA4BYDtP6twdx6XxR9ZZ1N8f91Yn3Dn5fR2fJPtAUxwgAgTZ8wYGbWCNKcXNwrAAJSimuMLkD2MAMpst",
  "key28": "61iFjhyGakDRPnu2Th1s4w3BhpwXSoXYPVMGBmxYQRj37vEDKbk2j6Hd3WLJRp2nSjqhT9jndrCak16AWak8UiHX",
  "key29": "3Zm21nNfSZumZnkhY74REXtBzFth9LgD5WCqdNHKg4RVs8gizFp8FsftADn8C3RPPa1igfYdqK5W8UYqmoMNrz8T",
  "key30": "5f3wpLRHw7Z4X22X34hvrdMwuifgSbFAKFiJqA6ZUAv1mk7roSFwXaYxbKGnVRSFViUEwtBGoe2m2fa5H818KMSq"
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
