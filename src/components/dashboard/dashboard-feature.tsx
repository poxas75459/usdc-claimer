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
    "44wtAnisaDex7nMwJtNTmBhDJHNE3BHLGi8GHGP2Qw2xNiwhkDmBRnnyFeg4okewa6Ah9wQoFDp4M54Ue2Ex4XjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDk28T3LH745oYGqsNWoErAiQhwrZDRSN1SytPWawbZ4UfNozaLhA55wyxx6Ap9PwhQAuCnG7u2TTe2bD3xPSWM",
  "key1": "4mJ1efaz3YS8MWV1iEQ1ha57Z3Wj27Cp5LEJGqwRRitqKiPPuGUFpCThenUhc2FS5grW551gGQmdpKeg8m1s5bDH",
  "key2": "4o1rLTDH4LMwxfQLUD995hEsJ9kyAT9ksrvfANSs4GDwUa1AUGa4pY1FtwvEKQzTwbcvbBzX5yfA5Q9cTfUQecoy",
  "key3": "32qo81n8fa3FQDwVMgv3Xrw4GztdrWW7GzkScpTGEfDdvWyszQhpDpzEYiHwokUd6v2GNcAzeJGQELbwYQ4Rg6t",
  "key4": "5XXFqngESMNQeCwR3dzY3uPXon6MyhRUmGVKDovm5bXw8bN1RuWqp51DUYU6aLa3mud9YyAdM2CmixtAeqtHegRv",
  "key5": "3EVqXa3QLmdCGC8EP95aGnG5dR2kuKwBKJQoKTGdeUzcWoGr81kspng2MjFpbtiWycKEH8fRoPeCYQgp7x9jrzXL",
  "key6": "iz63jVDD7L6xqioEDBbfb3P55asYSjb2PY8kFg5CwX8DcM5D6ThJqPmgTYQhedjEsCrEUBzjqZudBLpRkJv2kC3",
  "key7": "2xRD8LngMfX7JR4SHie89bJaVD5KuE5uarKVNL2oLbrCaDDhKZaRzgWwExw5wEJ4VRw9XDiGb5p1oW1WdD1b2Gbk",
  "key8": "4ZLwvCVar5ksoh9DeGcTcHDoYAaC2q6SFv6YKd9MNNv67oUNDLxNbunwn1w7t1X6ZTWWCcD2JTb4G5XXfG9ZaQbv",
  "key9": "3pjP2hNbzkSzYnELk8M7TkChsXiMG4pAnuwDfhKbTnCsQk3bbsDT8ujqfzRmxNJCv9vRFsxGcQrc1awNQDBtGeiJ",
  "key10": "2ShdgipFCgsdkHmCZNByvgSUzrZG2oFaYacZth59J8svBb2udgTYgnjeG26w5ZLt2i4xGQhqamoJRNG1c9LBYG29",
  "key11": "464Py2kPYdBvUvDwFRpKc3xfNAuBdjHi85779nTh5UERMhk7xArLw3puYM3EDefit14Y6AjxyH3hnSd4GvADcVHm",
  "key12": "2NRF2RXqMbvYrEo7TPfDSYqBnmQw5C6Pt8uj5E5ARvRXsxdc7Wx59u2Bzi3sLbxu3kTSFVNBhNinKSQDgFon9FyV",
  "key13": "2gkkhJN8RHKgyxo9g1B6e1DAJV8kHpX3rZfzdLbTfNvc1jT9WQCXVZTpcQ4NEQw6zhNM2tnzBHPmpxbXAArtUCBR",
  "key14": "63Bd9itBNrSWzVQvFbLDDT6VxVq54nDyZdwDXjmQ1omL7rGbs2kJxaGbjqa33KizU4ga8wRM8jJoRVao3StqJf1N",
  "key15": "5gFo2VNsQKeuwNJmv5fNFQhQCK5JPQqYgtAbGC3SjbtuZspar265DFJ2irbVWZUUPX8vDeLZoCHKiCqf16FVEd9v",
  "key16": "4ARVN1gVoceCqqynH4tKPY3TEgy7y6YtvcDkkjHNdB8tP7yAcFtTwubWGsTBUGaev6hA19UuTPfTxvhhhYEGRTrc",
  "key17": "56FXHLoGX3WUs2SCJwSqpgXkRu6SRAGw4RoxeHQbahqEKuRiMLu5VojRxyNgUP3TjLFoJkDfUzMjHDRo29PxRzbA",
  "key18": "52iZHuikGN5SXAC2ki4VDkPVAM1RDEpYFLDY4HD1STobT1j9jUZrtdjTdGTDWbUPdjn5TW1Fm12ZfGTFWrfJkYN6",
  "key19": "5dhNzLYWntPhvAkxTdSeG1uxfrzL4W6Bs2fQ8kFo8xj98AZeU6XuBeXtvj7CjDzB4wJBK5G99cvTjL6v2Q54BCPg",
  "key20": "55wxHdjuipsPPx5vLuTzZbqtnwAfqApH12qxMzjgkaaL59qvMNbsDhwc7LtkbM8pMUei1zMuVsBnmNP8ywEKatvN",
  "key21": "5EYggTxk6m8tX7dcELuCdudyv4MJvv2zFEG1KticvPEdErYhKoGfk8S7yGkSY1kDyvhMgtq3dxvMC5FJftXpXKEk",
  "key22": "BXckrZXcTm8siBuuNS1Qd5EDz2s9b2ysAJCC9osCFQSyqh6t4VYnNxV95QhVa43WANtA2nTpC3JX1WgzUdHP2N7",
  "key23": "2CvXyZNfXibsDGpsUpxKr2SvYLiayYq5WwnDVeSD3sMTuJgznwtQNo9gzpQaNx6ijV7zSWvvg1vpFFpa3urHpPdr",
  "key24": "5hHorz3s37BHa8mB9dXcoQS3FLRdmV97FfEv3qr96i266TmRa22Y5baaqxMSpzCNB28BxwVqjeDipvyvhAzauNSW",
  "key25": "Lhkmt7f1CZns6cvwrQHDH91uEuwDSMk3uHyXexRzMQbraB18oFJFYYUSMW6juyGAmoM6X4yQ7GEfHDfMitUu7aC"
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
