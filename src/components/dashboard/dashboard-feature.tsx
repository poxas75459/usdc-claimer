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
    "2gt6d3bYXD2UP5uuT8FWxdcRmaCfbHk9ELk6zCabQTm86kqkqoz91g2JkMesYvpYpHmNpdNaCCbwiB3NVyvbfEQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzE97bKofTHHQBf2asafBPNUyrqZpHqAr3Cb9LocvNQn96FHcWygYsGHZt1EcBfT7J5KPf26SSc1NJ3dAzTy4xk",
  "key1": "3s1JRwc8CCBif7aNCoYaZFNtLEz2vyHF6es82699qHrNytqzNh3DQ238C9k2Riuh8S4KiV7YH1GMkQ5D7SKTQR2L",
  "key2": "4qJrb7YYfRjFcu5RaBCLNumTocy6Vhi8zJLdKX5NtUNTLUDhvGPihHeP4hwMPrehKSet7LUUquxFqjqgVVXnQwKK",
  "key3": "3zBrqiHfCpViC54LDciZroch47egwVynRggcqsmcJtVtkhisYmc5g4nj1BBcXteGqcCgDkYpmvSshRpwApTXmezP",
  "key4": "jHcyht8uwrsFRMfuqeWzucoxKMuMv1YAgQU9rXPQZqj2eRS5r5gBunwJKHL6TmEmu818RdBkfPPBsZht1iU3K48",
  "key5": "5uzJ2QhiFQisxcdErEcTaZAgFEsY4ugv2FMs6yaCsgpo9RL9fg31k1Uv4rBcz1yHeqFFu6z2RUwNPNTYoyzv3dr8",
  "key6": "5dR4eavxYmmd4nzyohRXwtcYgoJ5Bm61NZvJFyJA57ttNrsXaDDpCjTz3kLKLHinqVtYau13fDVYzEKNM9x1yfDp",
  "key7": "4fLVQCtSCoq7NoWEpjXNrtSfpEzF6g4Jm38vGYkGG4PZ8hWYQk8JvfkyWGsDM4XRD1RAN8DxXC3aqySuMrxvTuqV",
  "key8": "2tdWQP5NisxrbUd2XjD45imtuAiSRNE89nXbBTfBnahAwgK8EpAR2jKQsLZ2diT1p7ysS1c3Bygne4BGvY5uwg4o",
  "key9": "23Lg8WV3hg7TNsYrmbj74Evci8ugwFHk4377R63a4PRNaTTPAFksgpVtMBV1AbTCzqPranMbAVMMVKxWTDgxgu8U",
  "key10": "5dRjVtuwVqk14sAv1TQcBk19iC3DT2EPU6bSZQRD7KBmG15K8LBe1aTNkVWU2vXzrVwn6tJ6WfYumaNDivv7eyZ8",
  "key11": "6qiwhLwNzVpnHez6rrbjRJp36RqZ3jPpUzjUrPA2inhCr5SYZ5KBWqacZ1bdWVVzskkFbPB4ERge6AA9bfqfV6L",
  "key12": "2LdSSxTEfPVDAn8ohrXrfS5qGdnzb3W2HQKdNKSqtTTPp4Eqs7LwgdBmBfLDy2Md2wB5NBMpCNG6tK3MQN6TfVXp",
  "key13": "51sCjotcdFnXLWpyyRVSQJjCXtGWovRfMt9psYZBiAy1xVeNbtSJYkYPHt48oRWLNYgiv2Fi5NH5qArpkjuM2UYN",
  "key14": "5u752jteg6DtFEiZ8CEpoJUGwD11i1Yd3cLUAanKAPEaUxx1Y9VT8WXRPSuxUm19AdnooAtja165GvHdXsJg8uPm",
  "key15": "59xKjiWU3HaxoHdiYe2LcvofVfJiyeeMi3j3AFaL1wmeeZpmCN4WmmG3DSWCdmViGBRy24VeKU6dwMk9VjVsrgLp",
  "key16": "jBuhZredwkFxSS5SBmr15nksG6HXjPDvecMUh9axHTuq7zZfYi2jWcHoKMzCmy5gd9sM6bjJSbkpFmcriNaidWB",
  "key17": "4tVKqpM4HJHY6bgqBLdcVBmNaRHqfXup8wtafgue4CAJN1UC9CgFgKftEhD7Q9tzJTpS1EGDP5tBab6ngs3uXCPi",
  "key18": "3jYKSy22GsrikVGyxFM5aSnQaAdF95PYm49gvqNSXmi3wwESQGLkZZNHh19kh3Ps2gQHkUStxEFtD5MNebTMoC8w",
  "key19": "4EU4XyS5vp9hD5BcfYxcvoL6BPTkraGWg6oxwJ8riK6SqwVztFsT7Sa4g62pLvtQFcefz2Rqk4FxQgYgivFfGq5c",
  "key20": "2GdmNFmdVcNLV7MYAU1MsckLTgCTdjEajLRDEnwbH9qmsEtQ28uGzuEL3cvb6JtNdeLsHGtSsESkzwwQ2AU4B95U",
  "key21": "RTCLZFBN8BGuzDETQeTZ1djf8HEAxh7Xkb2AJVzrifxdtmzYCPee8PE55bZ78RWbAUModePV4TTLnXdJGDFFEqt",
  "key22": "2zsWjQ4hnNxqk2kymddGF7Sb13qSNsHdHfmCbpVh2aeRn1tpjNb8vRDoLTQi9Mfp7uAx5bi8eB3EBJg1EgCXS4H2",
  "key23": "2nZx5vjikDdn3TqZYEDRt7Hnh26pNkuHovZWRq2Q5aHtnNhyhdfdARNC8By5HK3vJjeEdkfnaKd3f31eAkD7my1b",
  "key24": "29in9oeFbgJFjXYgBWdZ8MwNAUrs9Niir7MhVR3E1NRZDF3yjyJtDxoRGiYS2fztAFjNeuZv6WAHhVPU8A78yrPV",
  "key25": "2WHDmGQdWc4B4A8Uc7x5z1c2CXhNpAAHMK1QdiZriQHkhXBMF12SsrbyfaMKkErERaaznfbHHPLebp7K1k8aMpE9"
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
