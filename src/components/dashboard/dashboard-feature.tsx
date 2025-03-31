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
    "5P3PygdBFXidSP4PpopHLqifZbjYJBo8aLfbjBKtHndZwPXg4yMGBFPeEMKuvwoxyYJW8i1ouwELyq6mQAp8CTkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfFXqUB1xLvuy8NUcujjxgh7cMBGe4zGhH9MqMBWiXjay4Jit45KAMYHXceZnpm3B7o4op8H3APt11U9GL9Z9JR",
  "key1": "5aAmMidPTK3VKNB2N4TQx3bfRmnSdWHwvLt6gibd3CF4jEZGvd85kCqpX1rQfBUWjpT4BJdDwfR8ZqtSN8vrFGiU",
  "key2": "4tF8KLP5Pc5B8wELXHcJmEdPkQewg82oJsZWSCUB79mNfN4VxCgfX26VFFnPw3NqRJLusM6nfH5ygQLEokG9FZ9w",
  "key3": "4QJpRT1fkqeMwZnPK6gToEynCTLhs19EAGuQ6xS2ep1ccvyWU2UWs7vBFuv8EwvosgGRDsCEzLSzuFt5NRwFrtoU",
  "key4": "2W3if8RVeUZs2EbbivdmE8KVTw3hQrvonCCAGUfLtaJQLixXnnwPMwgVmrXviqfC5EZrbhy1GjwU5iVqHCrH2A3v",
  "key5": "62Q57mVQuhoTePnmeyrhWNgofZaAGXPCLohVkjogZDW15jkty6K2MhgqG5ujHCFjM7WzUayLHvPAqdvQhJjvLpbF",
  "key6": "5mvgqhNS5Y6czew3ZoWyvh5wrHjMRgREMpgZUUirjKZidKU8jmnTBi5CzJJBWcHf6hSc9jcr6b5Xdo5EUcwXhDsj",
  "key7": "5q4jPXtZLKExJ9uqoeS3Qc62xQ8EA9dz5fVCGL3dUSSFtYAX9YebHB1WbXcTowsDFgB7EhxQzeguzxpuntUd9VR1",
  "key8": "67xKN8AQLHA857xufKWYek7EtNisqNwfvLYCYT5tcmp6a49G6r4MoF5wm4fWan2QvVpPfDcxWSWYiHPCXKYvhti",
  "key9": "q8U4ahaD9fHDdtRPw5JMdHdroKt9a4bQRm1Bydxc3Dc8r8wX6fXwLe1ViwYBEtC5yUJ5wBPZ9GwzrQCondSB1Pe",
  "key10": "5Cj1KpjRcQTy7fy45d7FjPWTDcRVWcGBtyQK1pxRaYugVLRuDq5HAZ3BLhAeZKf7tpFr6yXbELUetPh67xAEwhaj",
  "key11": "4DvUNtFWiL1gvFxXmTJj2BJbKJNZS4EEJZqZ91xFjbK7fv4Ah4ghAG9NXCKNhH16siN4XoBMw8ghKNLspb5RnocN",
  "key12": "p2DeKp58PwpcGb5Zxzs57tYAjtqw98tiYkDWZV47yVd3sUWt41nAbchad557NS1gZoFZzED8TodBjVUDwDHghd9",
  "key13": "76NMjmTog2hcKF81g12HUc8fASnJjFAa9a1XW1MZnEfDJn6JQpT5UZjZCMTpfJADivqT8DM7BpHMKszksbefHbT",
  "key14": "62PSrWMijCM92io3ob37nEPNYDPFn2YVbb2wLCX888VFAhqeBV8AjtQUh8tTNcq22uAHNjLtDzvsT5ZSDjdBpyPJ",
  "key15": "59MaPnevF6DBKKimfG4iiqYdk2u3cG9FDM7E8ZtfAwuAh86VRyX3FwxjoHuexDEJDSgdcj8sEWynHpZdSzjKJxTr",
  "key16": "3vp3BfctHtyxdetVzeNgdu3bpsEpQcRhf1XDY5axgzhnrY6XDycCAvdQo8XmFE1bmTiLeya1EiMiBypnfdrA8oYF",
  "key17": "5eQqo13dbEm6paKToxustSgmXynNt2gVNdnjHM39EJvo28BA8bCodNTNYKqeUiV5PWqUebt5H8QuzJTGVNUKtemP",
  "key18": "2pSsnFcNTsRzCMeEPCmwzKTk4zCJf915fLytueA7FShw8FSdvFf1DLwFBHes2M2cXCcrL5Z94is7UQ5SoUR8Pj7j",
  "key19": "5TnfSXiLPJ1jUGimY1KjLejLdiZwd7DAYmEcKny5cayKNPV1mrVw2CiMqgYtSqtfqpSc7vshC8xWUjEeKT3U6FgQ",
  "key20": "4xMxvGGNgDbpj3TNtpSxtRHUzawpHzrupJdbQ6FQ95jmHj5oo9nUqjAqDMnWXXYWwhMNGHmKnncY3D2D3ezjsq6Y",
  "key21": "5DV3jND3N8xWkkntAHHK3KaTfL8CykKRwFj52EbfMgtCVxMKrMfvjo8zNCDkSbcFpr4DCfr8dSEDd1G1xF39t83a",
  "key22": "4rxXhTHFkbaSD2WfBh31zN9oxxacLvz7MJ9aUWzJe8yyEE9q5G8H7E5WzAUwsLeCidrm9b7ikqsFzWJvWAmzh7mi",
  "key23": "3ELU95Wp7Ta5Jnoo8uzJqWmykmEZ21ErPMqzRxBLbjfy9WrcGSe4KKiFrPYKMTpD9Z8jFUSTKGu1UTFWWSGD3f2N",
  "key24": "3PURf1js2RyzrGL3x3CxPwcmpkGkPowSmE56NBfaUawj2ipXgE8yRTwCVeqBoV52GVMoviZZAfGpfakC1biC2d9W",
  "key25": "2R6yGmTKfcnPjtMv7cbECd9bBM6WHfhTjMtNobf9rfthZAosn9f6ZnCCiv38tXeLyHkroZfd4x88voABAF1HFRXs",
  "key26": "hwMBm6gAi4TcEifCj8aTjCRsSNPDherhMVte2EECvptNDFeBMTmKYXhTakJTVUDrXXpD1nMugND7eb7D5Xuktmi",
  "key27": "L4nb4cv9PeQU56Q42rfFuSke6Mw7FoxiXkB6FeoQZtTmvsSANtPJtcoWbStscgnJNDM2rPSxELsmQYHJ82DscAr",
  "key28": "ju8NVuXbmchmPv2cNnPjTDidwXz3XTrS2VSNzhRDvkQtQDuuyrEji8DC3HhjCSzWznHJcV2bwrmvuaaiTJAeGQ6",
  "key29": "xHUdeVS378nRQjcVz1rrZUSsjFB1zJmAsqz5zAHcAYbp57hpQAkQLV78tFbt75asQT85VfaxS2pLJkgsJFPaoPw",
  "key30": "4QVQCKgK2MCiYbFqWn2Mx17E4pwgrHXk4TPFDC4oVFLSokPFiQt1VCjSg27A3Po7t1E5bA3WK9mE3jdDJzxoC8Hk",
  "key31": "4tpus8xfL8pABJgPZbBXQX5TtNQDcFjpnUP62vgS3M2TbQ2uRAwDXmBeYv8uPt8tAWKzDqapyCERu4YitsgojEQo",
  "key32": "5XmAPExsK3xZo8ZEAaQ7hhU4XWNpUUwfYNQGfopEMUiq8iqWzHbakX6BAZcztT5oLx1E7Boyt4Z6ZXimMRqGexc7",
  "key33": "5h8AjGyZwdBzV6ZdobrDjWvheNHrL12NmtCv2FFxGvxAZHw7hR83Cdbn1sC99HXDGPsqhof9aG6Fc7jnuHVgwj28",
  "key34": "4nso4HPgVBjt2AjXMcCMB75CULMKkHDTwDCagbUSXNCUCVv2AsH6JKfips8NTJAfaYt5heg4yjuWjt2M7YpQx5fR",
  "key35": "29a32GndGMzjf3qSdwgW5ZRcrYLWBoh4DnUdDqXk8NJRxp6waWERsoMbsrCQpgzpBX7u8AJQMA2MLDJWMEYVyUKa",
  "key36": "5UbeEBMZejDLg5Qm1kq653sN7R3gWHWKmmBG7iXzdwTCo4Z8hfpZPfG4rWcpy4oSz2ypfL7U5yrQuKjudKCyaV6",
  "key37": "3i7nvuRHqmCE78ZUAjGKrbdwY6H6BMF3BoHbRz7j9kPopXnNCujoPoEaYgDqEs7CXjFZGr8D8Q9Lyh2euNytU2eP",
  "key38": "2UmTPeEoQgKmT6jvd1epX1PcBqczS3u4wCj9PttHmPoBnt6ePPohoqBMWp8oRGA6PM4iGUAmeqautLPecWu2RgUe",
  "key39": "5zANF5Be8bkEKgsiUfUtj1GNg4xftTwig7krKGUS8mbBa8dvsVGqzRLis5uQyoKbj6Mk4c5tsxD8bTc3s7RDqDSN",
  "key40": "Z46CmSNpJaQSKxFwu79W9SRLYVYmKNDGNpjmAuJ77GFQ8k7v61KSBS7iMiMsdWvzbFueJhmET1WDFiv1ERAJnbJ",
  "key41": "3E2fVyhCKMnW33EVa9jUPT8zyNy2gixofDSSTyi37ExYM27KyASqsJCetwaNeH1mSs2cUxtB2ufDXGR5hLdJBcXZ",
  "key42": "48Qi4aDS4Xk3rUVd6FGMuQwoHvvqkFUbEXnaPfWBzhaWbRpUu3TF7tutvXCcsmN3n1DabZdEcG9aJWAmvWsiTvY1",
  "key43": "3nGv54wp6w1Yeo2auMSPQAWgGxTJJ296cZq1jAAaYQYGNK1qbYBxthp5BWnkJTRFY2sWhvFfVfSAEdzRRYLZGso2",
  "key44": "2WFvxWFPHMQz1byvo5aJyENcEgfLMu4Q3kGRf3L88Er7KJwHiQw9aUze92rnW8kq5Xf9h21SDzPBqTFkXxYCViq1"
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
