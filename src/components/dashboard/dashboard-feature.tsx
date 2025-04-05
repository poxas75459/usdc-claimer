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
    "5huyxW312aZvFa71wgw28sqDHpnNKEwzh4TcSUCbsXdGvkcGFrFwjSLfMPKsYPMUrvxLVeRQ4PKy7T3GxVRq57d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQZyPn1r4siJUVhWpx5ppAfu3nQC8h5Ro5G2a5u667D85XNg2jVmnJJPqryu9673Jju6ZZ9AxiJU8FdqhTs5BH2",
  "key1": "3npV7RE9TFHbqUzTxvgcnWm89ZNtCn6MY1ZgjkBFP6TNraMGq4ZwxA5v15H6ZmoMQcZwebXyJBWh4aSHpXq3eX4H",
  "key2": "4VvRYK4yzXYmhWT291twC63NGti8ahmGYvJ8eH8brgXozMbw2yPXkiSd7xV5Y72qVmtmynTDrHcFLbUodUqxvPAW",
  "key3": "65mqpHY8vjXF1gah88dxwJqSXG8pkgm9jAepoVkhvcLwG4DwE33xQ1cDsMygWWXDCFAuJ2kHMTrsxd4YTeZvDbjK",
  "key4": "2oxamAxu4WYzhYvJM1cUL3WMZCxgVjDfRzKc4BChwgXJ1NMuQ3BW7F8ysmcAivmkSssBU1LKcwK2NF1bXK264NmJ",
  "key5": "63zRDx8LbPqKZqMFTrDmRMPvKBjBGcypx8ybBSq1ibUtcdTRqnkgPes128aJ8VBuXDmYJ8t3TrxmpJdWSHxA9kRs",
  "key6": "3AhBBh1qRaW2VVCvgCH7zdUvqZX3VvD1ME8kAQffaGYVXduB5CRWWCcTcipWErSum3DriCmgoysuFSCLCeWX2KE2",
  "key7": "4qTReL5ZWFa2ykkvYDxA1xHQGPYNenTdMB4VqU12p4u38kWSdmuAJnenHHfSRjNusXVBVvvDRFAehSuutmNC3wEA",
  "key8": "3HwUoewpSmazfsBN3D2YAvA95wvf2pJvaAkmg2Bi9Qv3GBGLTLVePJE8YHEUnvUeXPcstmy86gHNeFDXu9BqiqP4",
  "key9": "4cYv6UqphpWg2WdM8T2XLYbDievwTuv39aH4usn5Wx17yCWnAtmvJRFaiMyR6cq6UpQDTcBR8h2jAdQp9qMu5Yg6",
  "key10": "3iXvRMzvhgNmfTphiETnWM4TDDvNsnkbmDTmYjewice65N54PqHcsPvvjXek72KikdUKyPZPBVSLKN8jnUu1RJey",
  "key11": "4sD1zRrVGuPwPS3PgqdM88e5qd4Ei3Xi3ow8XzSwpyUPjvGA43Amv51AgKbGNYirFNV6WpF5AaQVQwusgBMGmYax",
  "key12": "2mQ6xQJzwZsy4hR2EPYvFQjjhjvEeu23iL9UhfjnX4m3qoU8ycNnZgUqPAQWFbbqdZGByr3CceupmKvwWBX2RUrn",
  "key13": "5KdfXqjTWXtZQxgio6NLe42mtAuWe6i1SwwgEB2YyoiagiEDyjuvcuW5wz2rnfAJCqPvLkF2B3E38Nfi9Z44VRP9",
  "key14": "4yxj3Cw7EdvwGRVn6Ug23e6urDDTXyy4p2T1dXuNMtdL2zaNgRJjkp83f93jA1BskfU9Mh1pbxj8kSCeFsH6Nx7j",
  "key15": "5wZRx5TgjzFaCQk4L7CCP44XGBX223GKHFBEoAXs2LtgFXCknjc2d3s6mpX8KeL246vrma4TkPWLepfdXM591hYE",
  "key16": "3VawPWY15ViZR3Lnt95cFQJDvyCS3wxq4TRoaeYD8C9Gtb4xCUzmrYpgpUGdifA5VeXEL6PQDGdH6TrNeZkUuN68",
  "key17": "3DCf9T8VxTSgaff3M65JtU5nUpRxmbAXCL6bkf1GRNFrHqSk2rvJ6AdtctazWzqPjSNYbvzmZKZL9SGAzxJJgdqo",
  "key18": "3uUSPobt5sm2XDCVqhT1uA84hV49QP571dUDPAXdrwUTPSbwYKsiC85G9dQWcjruaV6h6tcx3aK5BY29TfvS7dB6",
  "key19": "2hsqTsaXFRpavdYCjceYJPqHhSCtVPcEyg1kdVrKFJc36urdMxPGaDKERuLsNQUrgskYaWStKsiPYb94M8zBFuFH",
  "key20": "4MV4NS8rGJXVGf3ruyfQcQY7VKsjEDVBVgGnA2hU8L5hxkZvMLRbEb97ymSedDpLerJ8fD1wQup7GHoMQJKAPFYC",
  "key21": "5oW5E2zGbLBeaX21oJCzGKSUf1zcQpPtzBwyUSvrERQT7tRdqx8WDXDDwixCav8xi66bvgUwbevcUr6TDTPsAkFd",
  "key22": "5nJx2s7zrs78zw5P7gXGixU5A4zFRi34Jcxm55ECMvawSC1xhagiMYfCmB3Vj8dnyjPU4txobB7JoQHcFkqFsVdN",
  "key23": "2naWLjzVp96QRc64pJpMRSi87YghCxSPjbrDvv8n8VvFuKwk2D8hDBt1a7oERG3xZqQjban3qG2ujrP2nDyv3PTm",
  "key24": "4bb9fXoWto5onjsxHtWE4k9wYTmBPTVzMHpmGpVihobksrKtLtP2r4fnf7vMG16Q9bJ7GHF6NRTEXtX2GcYAL6Ps",
  "key25": "45XX4cWME4RUDdKj1JKqQ3WMGNR4qbAjfJS1qBGyiwhYCD4H4Rk3z9eRGex14QqC9cNJMza8nZinPYCCyXkCDo4u",
  "key26": "4gP8EhdFhzom7vpPgREMbHeq1icqdKJgEhRPTYMCN9ajBMVZW6EGGf2oCCjbppk4KcQ7aP1TfrPLqXedyxk15iXr",
  "key27": "3Njro4ytAo8NudCsDCx7VAqXwdu4VDXDnSjF4sra32wfkVYcCCjgkjtQsmxBLpCfbG5j6HW7yStkA9yN6XxLwgWu",
  "key28": "5tpw3cS6aHpDHa5x3BjZQVp5tDpPgdDibpXa28DXjYsmY2Zk3hBacuK25EguR2QvwHoA1eK4CVCGn5GMkEGepqSX",
  "key29": "yRJeuLCXut3PdcEUEx8vKwzkPYxEUVTSkVuGWr3esDyXVK7Qy8Y3cxysFFC9qb7W4yAkiFfykmmK6H7YsyDn7ha",
  "key30": "5kLodzLZGakKrMPsYrNuD5CgvBuUfhvwmVnoCXi8BmVfEyxMcx91skgw4onKP62b7wEcTrAYhi1t9V83EKc9hUrX",
  "key31": "3Ns6yeuAa8MhMPEYh4dvT9CDWMfiTDaSWXEv4mo2gfpaRedWXBVF3DYXMg4WDFd3sTiiF9Za76pRWAJ1zTKYQTsv",
  "key32": "2bALaFUVXrAERc2AF9cRZXjGDyo7ax4mtxQNAaCGrSphViCaUVZjbcA5BzyHZXaXWSFrPNQ2UzDZLxm7g68No87K",
  "key33": "3UVosfvWfHkNc1p2zVDvspSFFgk8T5CyZB4YfuoGrRyMWkFcfbMk6QPEeVPPP1PAMkMLxWudjjjUQH4CUAkqwKVy",
  "key34": "3phCnswonDBCL7nT34W4wJd51JJQAPjsWTXLeXZPJbAZbZhqfVJns6LNmmhCZtv3SyRxAkLH62ExQFM93xqMwfi2",
  "key35": "2BNQzcprmWjqqoT1m7iCAbxoptH1f8sF6Kb711fEp7xApGVFR17vNY1aozF5Dexk8U5v18DNPj45QrcoGXorjjC1",
  "key36": "aL2VpDMqj2thva2Y47jUhS4AKM9Bd17a4iYxPjJ2HGSBrpmPAKgV8pWTWnJj8txg61DBbTs113HPgFr7bT13L3k",
  "key37": "3jPQvjMpu3HB14in5AJ3iRDo3LMxUV7Rz4k1zB8BuRQLEvNNCiobSVxub98o2V6j7pAQp1YJ6p9vSpo6hdNHKa3T",
  "key38": "65ASALnh5qdqmL14iboiEmyw5Pyz6oAPWLgFifLS6adtNbyrriZc4Rxf7xumgTd6dQHnySut1BYZDFBKH4bDjoEE",
  "key39": "3HmtU5M5fgDs4gbBp25qNZ7q6Bg45PoxsJ2YpfxpJCCxh2raX9ZgxXfBo8s92CZWDDgnsznfrXPzUKWGXr1XhGMP",
  "key40": "GPAV8z2QqQ5DtKoSjRCu5zR89uzfszn7qPbocuBdswAA4madDRcn17C5nsbMhAiR6WK9mMtB33wpUjZMpzWiEmo",
  "key41": "4j2prHDSrBDWnq29MUygZmYjqVnVpCW51QcCWBwJQXrAnv8zcyp9fGhcKUJphrWUAJNsQa1fGYgx4gsc15Rsr9Su",
  "key42": "PP8rQeCStQGTSRxZb6iXu4GZwXax2cGpLqdkgwVjG9fMCjLMPQWAhLUP6eoLYAxXc4c8V1TSRPv8E4hgGvsXA2z",
  "key43": "WzFS2RtSeNUJtcxdAZHubZrWbk1gjhz41riFw9snhWdPHrUa7KWzuPnyfQrehi9mGUk1tVGPwEBrbi4Ph7apf5u",
  "key44": "2ivdW2aGXPdVwjaSJPgPxr6MiNbmJEPzkULZiq9cLiu31p8z3JYj2RGByzEnXBT9Agkr7jtJgSr51cvuJBSwCq1S",
  "key45": "4z8ntDBoSW58TMfnG7iKNp9CC2WBJ3fVkAZVd2b2GBH7i6L2NsJuemaqJDzwF5ZK36aBbs79vkpXAxuECw2STwYW",
  "key46": "2QcByaQfquxkfy2PDjW72vnfFihjYT5W3Ma4LUMgbAgFeLFbABJKimCWbRjNqbsKESA9B2EAxZ5XxsE53D7cFJnK"
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
