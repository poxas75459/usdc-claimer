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
    "hwTSjfaVivCcicHmL8qFEVT9y63KNp9feJLqwkNMoLFP9qgJT2K3wMwrJ9xssBPSLxArQceDzvYyRm8apYJoJaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkQb3qSvfDRPyqCyewBqdqJtDNYZYx8KXuBKiDHQhq8RvCc11TXNTaRZSMUM49KY7K8sx6fdauxKBbCuQjMn13S",
  "key1": "4Qi4znqhc21tSkDEBMxqqvKsHv2FV6oyCCn8fK2ySEJNC1ZbAPA61UindNniN8tRXjSgK1FqCtsmjfM916Z8HCxZ",
  "key2": "4PF92bYrMgEqYVDTP3dPHTfr7RPKjb1w45qf8Ye3L1VGcyaM4GstrLzTZg7xBANEFv3t1ASgpFSZVABxD589uSri",
  "key3": "4KSbMwy73mwosYJo1MAHxZwwqjzAdyRwiaTBhYRu5H4ADn1VKpfzsUF6TA2ZoA1ikhEhp6Wqf64qpU66nbknjU9U",
  "key4": "61NYt1tUkvUPVhwRefr4uS5eHXWT96bujTkUoaiSsrrhVXgZVPGyFbjUep2JyAPwr2DCKJ1y7cQAAgCas8qWHn1t",
  "key5": "rww4JX3hkFustyZJAmvY6UbsVvj55rHvVrcQrawrG3fi1HfMSaAhpEXfLnfcXxJ5Q7qe1abkASEme6VPrRr6tCs",
  "key6": "2VQ1KXbKnwVUxdsKgnU56mcWYKXbQQWeci2bALqggsYRYhgAWSioTfWXayubwAFd7fxmqAuifzxLPvSB2iPV15HH",
  "key7": "58mRyrShvSLcZGt8tqwoWRnCjiLNNgzs34iAL7V7VwYP7NFP6rnVut5wg59US8uRrPMwx92kyJ46epUVUDiyFY1j",
  "key8": "295JyLVynid3SEKDGfn7FbdzzQE7sMvgK6oHfz1MPANjmrd8RZEg64mC6HJwMNzTy1pRpT9epYto8P9QzXi4qQFP",
  "key9": "fQXQH4J9wFMVnT5L5ECWNbvYzqX9gdPDonAivRoYoC1XnQqLBKqVQU1U4LtgDR7K5hBW8fKaXesCHcFZZeFzysF",
  "key10": "5DpPfwXyNdMYzkjs7icRwE6hUpE63zyCMha5pgjWosYebZXP8baiMxN73jHwAncQjQpMu6qESgR8XTGJeWfTYbUR",
  "key11": "5tNnAHhHAGQZzsoCqcoTXPFmGqk7bCGsmSCv353BmfTVjBLk1QcQUWkSoMiDcetJeG1ni6Q3NKCTBnmdTTRJDQcc",
  "key12": "Vf16d1Aiyp7cVMRzSZud2optASNYghC1fkvrKZFwDzSZKHd6BytPusX54itzpG62JsvBZp9DbRMsU8FU9t46oz1",
  "key13": "2ZvBJYyVijNnRpsTkqXK9NCCX4axVSUySanYBUWfnwT722Qp7Jer1HfMH5vC1Ui5SC9UVipa2bUYj6BWgkWT3y4N",
  "key14": "Rb3T24zNQUkq43sop76sU1beML2QtP7T9cPEnsEYLBJVEr84Wxn6Qt2jkTHuFXa4m5ErYodYNLJiQyhzKKK2Btd",
  "key15": "2THyypEUbuMuQrAFaZdr2cnkmRsH3HK3wEXtbpVHt6AucP3cchbHBL11c1GvwntitjRfhGg3hvFs9d7ymQeSo7bT",
  "key16": "3JckjLJPeTu92eDkBYW9RSxktWnpSQm5QH6BnY4zUJ7rM7CoqtCaQPe4zVh6rpFxz84TAFdJUwXtYrPeu77aPky8",
  "key17": "2BE7Fkpzamvn1UhsSSx2LSXotRTaFhJF97tbnGZ3JrZwPArF3iPPpr88iraTnx58jeB6XPqibTkixRQmNbkFqSRV",
  "key18": "5vRyJxrETHQBfMtK7Fou1V2vCaJmy4C38y7ZN56RzvjCb4tjW86nL5YBrCUmq1gYyEn3taebnxgkDkXdqDSeNhug",
  "key19": "3mCbVhF5JKmX9AjqTjUJK4ZJrmALhV8VFtweV7hKzv611qgju8Z287YDCiBx1qQz1mwDagPC1LHbdrML4SyrGe3f",
  "key20": "4AgxqSqcxxFYsGcXf2eJnrY7KHYTAHgP61PyJuiMyWstSHtSB2mtfsj3ng36DpVv9cJhMmUGWkq79VBpTJVdupo4",
  "key21": "2cw2UcxTADZmhTbq6yh2s2dxNWbqyE2vbSZfi8tfuSD9Bt9euzHkdiTUhFxmekG8nvLfJ8TXp6LwVzXhFE16TxRi",
  "key22": "2pBxW1caSR5ZLpGu3q4wsddb1J3vGm1pyDdrp35MeAjKU2mKTFooaHtgeSWnSbj6Xjs5UjVjtGuG9gpxnPhcYqBs",
  "key23": "5ikF8zJPvAQXzUk72LPVrJ5N9z9PBqPUHwQokFZbgCZ4dcEarYnkxA14htaSMstdGV2dYJCoyAHepofgVSxNhBiH",
  "key24": "57JrJn9AyzJXBgCreRziyJ5DGyvDLd4Mg1MEb81GNV4eQRyEPyfdpmd9ktk2Auq2odQNJTTats7P3TCBbYp9Ra5t",
  "key25": "4v2n7JiWN9aNwMYLaTPLhHeiHUGiv7L8Gcnf2yRG1bTgrh6j15iBjV73wQJZ3ChGX3sQBgLo3miPTz9o6E2uHaL1",
  "key26": "4d5665SBsMooJsqovfghYKF1UTZwd2EjXQmsc8xJN62w2Aadcjod8qPoMuwXMpJ3KcGUu8GAKst275yBjnVQ9wBm",
  "key27": "3zXYjBaRSFkjC22UpN9hN8Y7UZu6rNZ2F5kCmG7Xak8cjTLiJUfzJAWWr7U1go8bEa94KpxxcMPXFkimf5twcNEg",
  "key28": "3hvzkVGCCNE7D2nS9faHoXSapsKpk2mPo76AEcabCXzAhXP3w87w7VkgdbwBdppdr6URwkUnCeNvPnRmUYBbvqqB",
  "key29": "eRpgswpvFDaa3WgrZtPPZkU1zR3MzsegNbLd1bkR27EUV8dJDxurD5SiQWjSRXMJFhUWcfnCgfcpYzU7vSLeUTf",
  "key30": "sTv4dRUn9wsJMRacZXceVEF2y7Z6J3zeV2B9uqrY3rWuXCux9oqUEL6fpEU9sV5i3xEzpgdFnCZnR9v6m15jx3w",
  "key31": "5rZ63T6kJknqbMhJ3QiDcqg7bnt4cjFF1Zj9AGTdMC8HNLeAYDymUzuNNL571hC5UzcjwQMWhM3ArUPA52RkrCvM",
  "key32": "4ywWb8mR5uQukJwpQ1eCaga9HCVySTGXJfJzweasgB8SXHj32V3NXG8uvpdp7S9v8hGxHua17W8CCpYtVqQxnGz2"
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
