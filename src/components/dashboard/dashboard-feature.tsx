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
    "2Vd9PpJumuq6juKPSjDzQDVafceJkHeM3hxKUoTz39nNy3JiW3mePRvdkDtZbxjzgkKDWSXMN3onQrbRQWFmeyHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAkeDy321nS1MoL2EwsCRPhqQ3apg2jJ1Hb4AS6UjD4RfmMDD5LXTX79Js1VPqmLDSMihjny3MzqQ84QSH8qBXw",
  "key1": "4Z65SGrTqt8FRe9bNNBKaKC7FzAQ72GfVF5DKvrXZqhhNrmYESv1bYFSZTU3mUQu2bFU5XMT8S5xoqHX6EmA6n5C",
  "key2": "3v1zFU9DG3Bii1P5BmTVWH5Tv6qmjay3Haa5uPhxpUC85nKh5BXf88hVeo9qsGTVe2mCGfsihEVC4MRi4uWZiZDU",
  "key3": "GwwPeyVvYLMedRP6LseN6eiycnHJynwkYaETjhM9jy6p5s8wTDAcfWGyETbNSUErNLk6Vgiu22Spzsz8UFPoDou",
  "key4": "3uNifUfjrKVxJhXfz8w6Xk7W3YuPiaTRZB21Sikpdd9hCXEKD7jeHbCr83vY4EKgjLVgRQ98KbD2EczEzR6KVHR1",
  "key5": "QKKm7QM4dGyqC3UwejiaJaJz1gHsgMxQiRTp9dbsSo8MjqVwf5UuhQwtAdNE7oKFeZqMeHXJ24VdvuAprHAUvuQ",
  "key6": "3DUoTEowJmrXyiGUhqAZo7RRrpASqSpgi3H2LzLBiV4ndojzBvHYET8QwLwEniMBkYQuJqe6DpDmvjaHdxUMXPzE",
  "key7": "2JoZoY9dEtpZ9Tm3g9rYQFLBxDHBQB9oejT8APAVxMq9p6pjeGBE5sK31Gu8b1DJDo9WXhGWqSbQhfAs8xvMcffS",
  "key8": "61Q7vH2Z8sVNYjiSgDdVGp7SutYELfyKHYVGgPMR4o2mXvPYSm9TLotbnadS8DWV4XJBccWbUNYbGxKVDLpE9PV4",
  "key9": "3E1R47aW8CqmRqtPK73pijTGXGAVhwoR4GnE9m495mdxyZhydRA5qCT5bS6t66B7Sjz5xDkiZK5MP8cpxs854PRg",
  "key10": "a6PY1Bv6DXnuYHb6fu38RySBDEEken8XjjW9RGVarBuWo1Ryu5ZKKKX1GmAsbjbXf5prHp1829J7MprrdzEoPev",
  "key11": "5JdaJKrBTRzF1VhfjpjEwCorRDchkqaFW1RR4qrqM14UppgxfA6pC1NMW8Aqb8VLoSyqRFwu4vWwfh39EUBUJdfS",
  "key12": "5abGCuofFZAYUdwybR7jP4NxHCfE9NibNYK6HHYq9BXZVcWxhNewTysqhyWvSLdmoq3onv7cBVjzthcDvvFxcmTc",
  "key13": "knuU5ScPQDe5GcaP4NU2BZ223EKVLawozqzYzW3ywRcsFceDVtKwZvUUcpkGApSyzCXQrBancwxT6WvGr3NWMoi",
  "key14": "4n3SnJoeyST7D1L5DKMgbRHANTYra9ZEgAJmr1j4k1n4jMrtWPXgjH4uxvxz1se4qGScDX87RPGnSPGScqUXDiQa",
  "key15": "RsVZivFYw3pbD63X7671S8qh4MV51htk11D6RyetNySq2iookMbpePNe4dnTTxqPH7t837fARCpEEEhemn4ND1L",
  "key16": "3wsdRPGM83rzSZ9dc7y7bd3sM8Jp9nneEtrVW29gFYaUk4WvagD6bY4B6PBn5KQsJg1Q9WJtGSQQWbyyg3fWCket",
  "key17": "XijZQiRqSs2HtPdYS1faowPaeLHBRYXr1MTdhBkMJfvticLpH3WsmaYwWPW9Ly4Ddxu1LPSGDuo6xkMPRYY9egn",
  "key18": "4syumNJPYE2RtmrfAz9Y3HHFqm65MMFf7D7tYp5rtphu5JjR1WyJ54xA2PvX9Y1mDZPzMxyb1Fd1MNKiX7567pnH",
  "key19": "q1AfMmMTu8c9h2SZpQVAZ6C47xWp4yPZKfCEgdKQQfdxiQyhbZCf894fLnva3hb8sAJnzrNJ2ezyhoEZLipKoSg",
  "key20": "2Tp4YxYozdcf6HPTwQ9TTSewJiWdzujhosCGvb7TAhMBNpoEYtJsePrAzqa22FexyGT48xH1irLQitSJ9r4zG2kW",
  "key21": "4KtCMtNFdiKDHbnsWqvkpsPf6Ld3Zp5L9XZ47U1LK54SXnmgUgHGjfjVCeK9zwnT7tPxZL85DnVKD4PwB4PneuTc",
  "key22": "4eFc8w3RJP7AD8D27ZGo8Qy6KeyvypSAFb1eLU4n4bKJyBJX2okNPmoPEFQvE3rMmAV9VpofEVQzPwzRZreNt1wA",
  "key23": "4BWgaVYULcMtpoTAamMGXDRfdi6ovBx6qnLjFtLfaC95hRn3f6QMYK5DQAsEHNrTbN7hs4sctPPGMZjBCYpZfTXT",
  "key24": "2o5brW4CMaG1ECiP1fdgriNFG9qhc4KtM23LqGw9xjbgoBeZDVhYX7aeKJ8ZBLpbLPtkw4BG7tmW4Xk2WUuiDBSe",
  "key25": "2PmrV5m1JuGUfLNtXrQZWGfCwrgdnoY1xWSp3i3AGMHtt4Q7C1GGMbknHaqYyp8UDL9Lnmty5bqkx5sjmmqCdmnF",
  "key26": "5wconPMr1acnLAnQ46vrF42XcRQ78eSPdC3fUDDuA5n4PxYtLEumQ9uERsJfuFGEt5ks4iGNiKsZjUrYzdov7mxR",
  "key27": "2Esox5WBAxNfc1T7RSoALCD6E2pvofQdmYhHARMV2a1QRbRYaDbx2LFmffdUQ9iwpdbbubvekAovVJjjYy4BrMVb",
  "key28": "2simpwvXZAkvKr96Y8pUefBHBumycCcTKtSKwNFGGjrtmGhBH5871fo978KKbWYhScBAEpnwg5ihcEfJjn5dYKmi",
  "key29": "VPAXbNFyh7GPKSDKcV32WBfYnGMMoGXTtmcr2ycT1FV8BJiDhzunow9RNABmiST2kJ62RB1iK1ojE2C3CgnYbRN",
  "key30": "64VnGV6cek8GF8qJsNSobtvhdizrnnsns5QYa6ccuMo4JVSpXhfSZsXfyoMzzm6UppXZ7WTYSCQbnMc2ovgxJZft",
  "key31": "24TUK2ibjkVSp7B3wktiSkYvAQQCoHJ54sMGLWmeyZehoM8StDJaZCFCPF4qm1VLD657dRZ2xLXBf6aRbShb1pzZ",
  "key32": "4Dgaa6uKKV3qaQiw6kZuhUmhkT1VRMAX3BE3a9sDnUoBnEPexxXoZFBbeoJNdYbW2yKcsogd1pG5v96iiuNUNxZC",
  "key33": "2ZkW2jhsHGL1WfsQNvMJgAzNBBe1shQ8ETR5GJ4BuBRNbFxhvS5SnSo9yqRyRfKYe6jkf6Qcayv4RRvgBXbqbxQq",
  "key34": "3PGMtCgjoG6i4zpYKKof3HbRP3Sk5VbGhk7s3TuJFFHBV8nNA2A1XeKjAk17SXhiLfMwg4sv4WjyspgyzXhcX9Lz",
  "key35": "4gKSp1aQRVLUbpfHkBH4sipoi78BRyCtz6mGc8jhzBMZxCtrHRY4XBuMMKx6i1dPhuKTPuZAZ71K8GC9p2xSUFBu",
  "key36": "3AARTcGe3M8fYVRyySfcoWk4U24QxdqJZHBRu2Z59PJRS7mFCpCXMU5iFG5KY4M2o9tcgR669DcXuo5RN3vBPg2p",
  "key37": "426ciS91M6Ybm6HH74rpzjwkmydaBsxbdx9Y2gbXjKBwcWnae8MhtxzMDEMceyUkmJpPhgPz1jmVxHUC7RewuePy",
  "key38": "3DdFJzPc3eUvAVj4qfqXFomC75ihBS8kLrqNmcX5T5r38B2rfiVHgXst5gdWnZBKQraLAokGAJm2v2nVL46iSXXr",
  "key39": "shrWpASGnxug4Ud9xjuL4h4MrWgTVQJfbDqMgGhtqJx7PLG6FFHnEJo7qWh2LomMrVQKSvmyn9AEWk9sn1qGT2J",
  "key40": "25SHWtAsdm3E2t2X7Q3wJUuAeqw53qp89VTHAxdJSB8KYBL3a45xMqg2SsWwu33qMSCn4i5q6utCj8fk3oUpdRZV",
  "key41": "4XELaCbRtjtukjCV6N8u7rzRjWKG1g2rGutVyDKVMN2ryA17EHxRnN3GHYGfHx6wEJZgdzN4yNB6jtkRa3VqicMW",
  "key42": "4C8mMspfZQuJtmy4yfZzG2SbVNMcN2NZTwwSagAuaEKiKmbidVuywjfrZCYMSfYAy4oie2UaeULW95nKpDRVR8QM",
  "key43": "2L2YnALnN33WxsBZU36mZ64iWrQ2dzn7V4qJcWVrTP1UqgKquHZnUYFttwBxr9SPzm9WrcE3oFGCokwht4MSrWsg",
  "key44": "56enKJ2XMHxctCfW6BsuidzFiRou36yXKfBsXa3LQoQe1o8zsmnEoEnUP33fBn32wDWnee6Y7JSLFomLB9jpJSNf"
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
