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
    "r7PN4eTc8mSZSywuJCqTLakLQ4Uq41wue48A9RyJGcVWyPH1nFpCuDbDqoSLKMfb28gVSERDWew6fs5KxgFRsxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VetbfRAkN52KRzcmC2CwV3TunLWJvkXi2KcUHRLqA9zQyKQt6hbmwoqSyXF9gbafS5B1cfWZHCjHpH2MsjLeR8A",
  "key1": "36rgEwBkoPKt71tqQg9gsWPCvoMDC4NKTV6PWgrFKgcNXYHAFAPDAZsnaxm5VQSk8SjmFKZHuzgKifZYChvUaamn",
  "key2": "3iCKxZuSwGgyGeRu23yX13uazesKn244cHirdydJCwUGwpAq2Tkp2e7qgdt3t3H6GgxnjdjJzuVfMJy9fLeDqAaV",
  "key3": "3qWyZvDgZaEktnrmQCL8JDp2ebpUnSwXQccCUHyB4Z9wK9TdCxhok94thza2hH3TADWP3r4dctqf6cYAyVSXLZWa",
  "key4": "2M6XAkFmw8o3N9uBvinfDthVRXVXaTK2E8gc6yvDcKxGZ2vmRvRtv77yYGWAhkxLwZdwYx3yrt2ufJrXjW3c4ejY",
  "key5": "3S3y289utkj7cGXDWfyrsGngx5AX1K8PQDgvfdPba8iXQ2kUsD8bEHRNwyRMQuhssaN5Xi7XMeU7iAfESM6tTCdu",
  "key6": "72K53XmsUqXZfPqLcWrFipURzQm2AUycfHNdCsnTe5HFkRgp46XW1fKkWELPhsyRToZecf4XMwTCWfMCBbKerEe",
  "key7": "3UEG3TryYN81oSsSncABvGaBE9We87EgUxb2NTUXhrxCJoQ67TohDmzD6Yc77oGbKG7V4NPNEoASgEDrnTdLVp44",
  "key8": "4hVQgDZ2oueUUrT68hRkwss3mAtfEXFTkbvWrCoF5mnXN1WiCFvJk4JqxZ6orgUh8r9q7nAb5yDUokHnXB75s16s",
  "key9": "2zZrWEfjH3yKNQ8MfEX5UdMZP5UQhAzHgcYfidnb31QobNKYsMxUZ2rUCQpnZEPzrU28PDYd9AdpuZ213iLDtVKP",
  "key10": "49T6gyjmvtQcPQpiLRvc85Cx3nTEZDJRXP7a8tMBHUL11MyNEHzK5i28mRgHmciuNPKbgMz6Q36GsZBgod1FsiZo",
  "key11": "47gHX6vjM25K46DwN1FwvY3X5iSNvDqe2QDXduBiBLubeaiTRTp5eC6nxMnLZhqbhEqgzbkuBtzsbjpyQkG97yub",
  "key12": "4hFJmzKPXxi6iEZduSx3JfGrGzLTeb6A9ssXWDRAi5Y7BvCBAdTeFZVqJtpwyduEjofYcE6gmbRonFHJAhHUuH2U",
  "key13": "4jCgfa2SpVnuJvHQHqPoLqGDwRjV8qJMFhJgM9GMLTJtXcdkXsruiWwa1bRr56Ni2dmDYPsHG1HLu2ozNXG9s6CG",
  "key14": "2rTiJTQndZjnMvRFqmi9qGMVvYGpNm2CqJb8PJNYtGQxZTUeq1XtqHJUqGMK31jeWe76iisJbt5pLJR2Dc8vyRJP",
  "key15": "2FJGm4N8hKbdKAaf95GDEUQ4E1gJLYAH9fFG5gCbrnyHwMHKqF4YrNK8PFEeGKP9xDP4HY439MHbjuu9nj4HucUK",
  "key16": "4EWHD67FUbCTBVoe6TqynABjEt8S4Jv2MUwz41zE8TUKGBxzTrso7GMZPjtyW6EN9FGPj4y1fLsBAyAhjQPeRhr9",
  "key17": "3mfudPJrAZbmQz5K234HGPDmSEPt21zd1xWeJq6vTYRpygjQcoec6Sm1hbWLJmstvXBNNtK4WoQfp5tGRbrWBNsv",
  "key18": "B7rfVphKHkSgiyvFCvh51D9fyVVLM74o9cbmrwse3n2D8VgSdRaEn9NxCu4kcwS28H1kdzeRdjXjSkDaT7eZFBE",
  "key19": "3VicbXctT6kjCAPbf1VQcwyVJUKAntea1M5VwYR7sEvEcWkKuF4K4M6peUSqp9qKEHUS7Ujp3WQD8zWVPZWTXX19",
  "key20": "Qy519s9tNb7rzUdPvEUe3LXGbxNiEqSk1rY3PZ3kj9Lkxv93CxguKmEBS1xeNQm77ZjDXrSdZ5ppFaDBNfWG2gG",
  "key21": "QbwUQKtUafR9bVDq2yTneMPnqpr8F1g4P4xkkK9iChvXqCAsQCSeHp8Lew4WqA8AeRELxpxgGmZwnegSp48Lr79",
  "key22": "31fuoAy4paJPV5mCfdiaZ33AqsHMqPS44reL2EyeYeeSqoSTfhgevkE2i9wVkgfQXCdwpJoYAHKhmWU3fegNdYFK",
  "key23": "gpqG52pkggdBMSZqqFzPAh3iiuDW4wEvCnvPTpD6SB8Teq4fo1piLWpepxeS7WK6NRj8PGCxhKbXPYduZPiewPH",
  "key24": "TF95XxhJKeNB4MrqiXKymkffV2TYYyowgaCGMappyVg8gvdxKrHFXD6zpGYvm4piLhyNKqhViYZqXPEPc91wdGi",
  "key25": "93sXMZpX7EbSSXAsum3mzyBMD4qcJCFFceygh67f2McJwxjqP8a57VE4ukr9N4TC4gigP7665fe1ahvA41nKVgE",
  "key26": "4RrSFoVPcKtBNsFxLUsLe11eidhE5aG5HXjWqXStVsFbUKrwgkLpxZiYRNuGX2Wh1piDg3YezHCBziM3wSwXrBYE",
  "key27": "vrFuES1a1yV6S1rxaFfbk928sRP7RBu3VyG5ttnsZuRJzR9PXmYZHfaYDqq3eSr8nSbBao27s2rCHeGHxC4U7pe"
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
