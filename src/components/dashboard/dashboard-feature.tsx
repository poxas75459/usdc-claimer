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
    "2Udt3FwwXmfo8NJ9wtXwvn5yBhACoCseEe6YjZMF9FVrPJnM7pb4dKNvpi8xT4fR5J2Bxb1Dt7L5vFbCuZyktoZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3gADW4Nx6PsvxAdD4TD12n37B4EX8ecPt2TFP5CKpD8XeJFuycJRSQuyv4b91ZGaReHw5Thg54CdYkCa8XfaXx",
  "key1": "2us1yZEZVVHY1wgHFNhEyfvANiooVcMM9c9iscTmytnGZKMXRswUAEGfDZ6uRURT7y79zYKG6U8M7d7qkHP4dbh",
  "key2": "4JCjKumJuStk3npWoiy7tWSyy98LDL6QR7pgc6bhpGwg3xga7YJurLAz79ii69fuPLGQTaRcwZ728KDYQK7UAcu6",
  "key3": "3hfouwEb9KBo1zrpp1ZvvukLQRGim6mCnmt7TCv1VAf1eN3pi1HNBP9BGFo82xdHnAg2pLGJQcg5X64a2CjUJTJA",
  "key4": "36Mv26cpv6hNCdaThtCe3sFftpDNpn8Cj9FL2Utnwd1NDBaoTFCsYZNASAcCECAoWTi9VHCa86NWUUFt6HCWDK8Z",
  "key5": "4FpPENxqzRNXb3VVGCDNNPEJQxwqSCVQJPWPJMudtRGVSQXJT7bjbU144kfMbUhJDbTkkgAzUtaUCG9sc7JpX4D",
  "key6": "2AWFf1gNbHDEsVRQdNDuVm1QtpHBRLfyYmrZho2MiGeQHFoVu2ST3a2vbspo3arrpP3Wq7G99twNctMFBnNGtqMJ",
  "key7": "4Pc63TUTXuaH1JdJYHcXxtGXrEyyKvk7WQ87mcDdbo9bk8f4EerXn5v1cKG86PFbwuMjneM8LceMQpouQBU4awAo",
  "key8": "5P8dy21QQBDWckBU1cjmCVbxRwEEpjDRPz5vT7QyXhVSCQmNcsJRT6rDvPyFJXqbB7NNEjwGqyAZKheJkc27h5KT",
  "key9": "4TyyNMVtDAJ1y1Cpj8g1o3CKMDkkDTmuuRLhaJNVp6iLY88AGzzzUg23Ya7XukzPvVdzqdf6wSyEUe9cWoxTR7Vh",
  "key10": "CKUiCtZSCfmD2jrRKzjMVGXTg2J1HGcF1R4x53YKt8LfX28Qj2tj6TS4TujGNimrixzVuXo9g3NC5Ux1jMWjDSV",
  "key11": "3J1m5sumxAoeN1bD62KAZcF4eidnzsWQNfQcdMaLdKt3dHXndoSEQvVXQY5Xy7pSixCuGiAEw8ym5hhHodv4ttJQ",
  "key12": "27C3bN6BnLWUAfB8d5SUShnhusXTSKwrhZyaFCQtaXUZdrZjDEHyYs9RTUABbityMcWKzrrwQYUuq8aXj5Vo6GG2",
  "key13": "5MTrFGeoCrocRHti7nVjwfTzVCHJBQm3JUh2hX4a4WbXNxy8jeA6goGeFcG6c5onW634sj89xKFL5BiCEytYCTuq",
  "key14": "5ZPWDCRvzRtncuZ4zn71EYUyfPjJVyAWU7wPijjYJG3NyEm1LxGsvovCvoyQBY42cvS5wewpkSaMQJkyufe3CxDZ",
  "key15": "2Y7YzLnjr8n6g8p59ZaAmZkEv196w7PMgEeVBCZhZAPYmy3583i7oApXg9WwXoRRMwCAnz5EDyovrSR8fkMhW4aQ",
  "key16": "1241WjgKfXacevqxAg2FnAv8pkwBXzN5ctaMjZEo6RhUTyRmbh1V99YqjzaFuhf9gic8dNqHQDQ9m6himswg8UFH",
  "key17": "5dzbTEYiJHnhFbnmmk8osFRGGNA48NHGoRbhkSM6Cjxja1n91zsYTvLmpaXqnpeTcpYNU4mx2ELwNMVWMaBeoc2H",
  "key18": "4CFc3ziyQhr65t9eSM1vEce8Qs7EJMznoDLL5Nn19Eh3oa4sMfbw9NYm9tBCpp4P8TvpjtFkidgVsAPQhzamPeoY",
  "key19": "3UB1jcGPhK1TWLjULbxo5rjAcnqkGB8ZinRge3BXyAXKWoHdtpBJTcvvYe5hb6RUG4vheCKwMqWZ3N5AsG1Ak8Xy",
  "key20": "2JQF4AYzgE9RmzMUSeCU9x5MqCn5FFv7dyQjZyq5c3PY8rStayPjux8QaRANK2PsMo3pnz2cYktqXLNhcQwakS8n",
  "key21": "4WPPhddznZvfVGav62mTmZNMpjDFgNxzgmNiSL2TiJGtGbYukG1ppQd6JhXpLpfrp5Cuqd7x9qMhYkZ811aq6wEW",
  "key22": "3CL3u2Ad3YMpSx3igpH5qVHVafDaU9dt29ua8p1NWY3eRE4p1Bf9ga8hhwxUkPTmNJRfxAxxAKZSuffqFRBeG7P2",
  "key23": "5rCduG8F5B7huxRPQVfUx4gtNEiz9sFjvCkzWd64z7sHzL57Giy15YWgs5sWEgFrssssFsSt1HnhbVKTxznH4Km",
  "key24": "2J1sdsDfFrE1WXrMB4Yu6YPKYv7Rp3t5fGzmThu1wR9XpkHmKScd8cJGmu9bNjzdFBFibwi9QLgKQ9MkBtS7C65D",
  "key25": "2Hre3UkuRDmqPUhChpv8jJi7MQ9x2ysUe6S8oBfoydsFYCGAUiyD73Eygydbx9TqLyE8tSQNZP6n2PJVixYuLzow",
  "key26": "N8BFi4QYe9fQwVPbpCBctQtthF9LSd6AZkFQCanwdJwvHBpDkMeMk1Wnnod1wW9PcLoAXXHxeXWHgTdLTBqqKsE",
  "key27": "4EscHcpNq8dYRg9u6c8Ub15SUSX2zarxBJj44Tzky69s1SscQoLhpt88ZFBhxTSF4VLtwd8zs3sedemKrnLsd7yk",
  "key28": "2V8yHhRQ9DskTQju8Pznr5y7fR5TQioat1fNbKH5Qbcxe47PTqLRGEg3Nfn1ggjSdgM7DNNL4yCffcMJi9iRT6jQ",
  "key29": "5Fz1gqZF9BwMAeT1EUnzJ8JpAYQjyGLRxdZNgSBxxkjuxLiv3KrtXebpFifsp8vTkfJiuR7fx1TyT8KnmRpavokK",
  "key30": "2cguXGzfnTzfqMietDqktGL962H4MgbmQimop4tFY1m8b4xgau9RKGucgJEWiKYAMsPhPWFSG4FDJ3CwpVv5NSwZ",
  "key31": "2FJa6ZufiDS7p3pzzjuc1gpPU7MEMiS93dHZyyhcdCcKMBeVmcSU3ZvKGk3u6XnrjrnNnBkz4gDmaRUNMjaaJWwD",
  "key32": "24ehToo8ayWZTReC879bSMobruzq2NUpwvf8dhj6YMAfAGWbBqwE2NmxaBFdmghMYezgMhrHt8Kn5R2qDnzHRbor",
  "key33": "tyPVoAcJWYbt3FLVZnM9QAjBqXU6AfLL55RjgWfq2qieJB697EXKaEYyiXdw3oX2BxPrGCq3L6H8xyPHS2X269f",
  "key34": "JLwJZxWBivNMC3xBLGTHUgUajzkBKN2VU8y2pK24FUVNiY7nTVicZt5sRGR8vow33d4BF2qxwAA2hzW4fKjB65F",
  "key35": "4DLFHiXVSptHxiVoiF483tFJvvo93X99RLjXXdm5R4mxoCo4AmFp9VNkEzExMkpo7abRxNhUSbAFuFPSsSSAzMnm",
  "key36": "3M3dKgngNkq4yKMNiSxb8J23gTJWXGBEj2N2QtqAiLDkQYZDQ1VN4x2wxBCQWSFJXJDrjN7VaXKmbNBj3jZTSeAj",
  "key37": "2nu4mA5V2mWpKrAaeVsZhjHJWLrpd1P2dvoPXxXcuxALUhcLM5dyWdazzbSZN56ywfeJ2kP7VDY6t64z17uKunck",
  "key38": "3b6czRteQexQKMcFXo9mw3WHaZ797r38F9zyYb6nt8BV3deSaTf8z3JF8e9ji7eDBKE6T8RMMMjbGBHTQ6G5xra4",
  "key39": "2E3AJvrdKVATnMNAZEq4eDJYwqut8UeT4PACt3cA2YQiYK4vaeWtqEoTA9pv7jrPSCVnDXaiMBeVAHRxd1sv8WnG",
  "key40": "QvaHAz3q467hHeQ7M3iAEqPowjbW14VBCco6D54wnUar8cnzDiaeXqQRvGxixGDgQzpJCjDiFFitNoksJu51haQ",
  "key41": "4j456c2J45bQGr5wEzXJKo7m5XjJuBT558HA9vpNHYYQzT7PWSLeniYHpKxqgRMb2PQ3zyer9P77XwBBN8gF2ckE",
  "key42": "5UM3mL9PRdWreYia1FxQEHXoHfEcLYaZNN6PED9A4jRm3MXZybyqrWSqQf2DMuSWDSvHa4p4tWzJrCEoVZ1Twyvg"
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
