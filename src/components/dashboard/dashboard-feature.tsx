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
    "3TXiUbzmSNe2sWdCnP9Zs9VJtSZmtWH7xh8Kns8gP3A7txrZDsPLEQSm7FyYfczULc6CVsbuodpAtN3EPQe5BGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvvN2dRVkSFGBRdAvoR34WPGpJPUSNe4GXSGuBsmRjW1dT4Db2zVcrYKZWAiJkKjjViQiwhMTrgYbb93Vf9zNBs",
  "key1": "5tjSPJ3nRfS36CPKRdZZjU8nqhQLufCXGtMKUSSbsX1XtN8g1WMub9gkCKvCnFFo378rJCrPJeNxuZUbZMsb358x",
  "key2": "3wQbvJ9LrDj2y87XxWVpTxbguHjq5VxY66rwbic1sQ5bTvhSGuE5jNXNCASQUpFWK7mTmRnzc4zCjV9HBdgAGoNF",
  "key3": "5GMu1G8MB31hTPDCXXJfaSezC7td1NT9s3X7rtnMR9suZokeTXkezujYBhU5z2qVfGdDXEZSn8FD21b6AVvii8mJ",
  "key4": "1jGnSjCfHRyZ1FDFk5BrVtd3JNEP5Z8GR6uQobwKMr5StXraKwPWj7MyebqkAjS2KueBErHQeBPvi3h3nrCxVfS",
  "key5": "mt5NqvQfoEt62JvgpuRWXh2FvPPgcLcTdJpRpMd4p4NAaC5bKh4YZTqR1jUgjHPeNMoyuLJoXLU5fVUssmBTvvF",
  "key6": "5YSawBmysMSnRJ7mZ26d4DojFqLBufbh35boVwbbf7GLVANCzpaenfjc8xwzdbgGGyD8ubxAGFyLyp4A9k5AMpyX",
  "key7": "dzLS89scBzGyNGUGtNHuucQqWMRsVvU8BawaNXVGM6P11WBqiKVy9azPsejDbYEz24ceY8BV1W8CYR2UCbdqqce",
  "key8": "22ywZwKAu7tAVDBmL3Y1jVUoGtWj5Fjwp6sMhZCCM9pKZJNg4kMX5gtePaJtyFigVEPekrAoS5eUwENvCtBitj9b",
  "key9": "5NJ5jeqw9Aw2RMJREU2tn8oR2ZYpUkLt2MxumXtur3timGL6efdJNDyfD4YY5LhDTmEwaostKGR3M9UiqfsShMPD",
  "key10": "4duNkAFd2ctVBVVUUrC9LHMCf5DXUCNaHcPfcVP1gdKyUWYeVhd3PMVhXVjFwjrXFAb6SSCQeVz7BH5iAdsEswTw",
  "key11": "253LYavw3mk6EVvBsPGb4m5DACAit3przWuUU5sGQHzM2JRVBwbVska7hojWVAzzp54UMr3Dwca41sx87UZx8cSY",
  "key12": "5cKrripybBTtTNh1cAmS9WziNvEJ96SuDRiyG7kUaxvV28khvgVZdZf8bajBC1WrWbN1svcuN5wWD8K24CMnSChy",
  "key13": "49JMnoQMzqkekSRbviJu2qCeVatzV3WVcN8Yuud3qg9NwkLguSSCxfAM769qz9haeA4mWUnFqfCdJyeLk83mUKKJ",
  "key14": "2UroX9ar1H9b719dVPHiTkEqbWf89stYqec7SQfGvqRsqYEDckBkaZRKgsWB9ccd7tWcx7dojJP9fS7BhFZzTj8Y",
  "key15": "4f7xVKf2gdJvb4NxbVf1ShiN1MwmkKt7rpYMGfvP7WL3AMPaeLhguZLT1LJDSjWhc6FW5n2nJ1fiEWfWXJY9yArc",
  "key16": "3TyHetubhY61nLbEmwk6dGxtmmpeeZzgt2dv9XGACWYKaZJMa1jUQVqog4PHNCfTR4jLnajBYyY75RiWXST7wV3b",
  "key17": "3WRPdFiDCv1Ndxg3xbgH5zNNmVc6Z9iVA6gCr534TwHqV6h9N69Nd9tRLaDWq6T5zch2PGQCBmT8EiTyZwDuAMV",
  "key18": "3hKDTFSmDSxUcEVVogNF9jfNTfhoVtqko8Cq4mW6C8gDsxF4VLAvfPUoMXagx8P8T2xsMKN6c4Zr5Ykair8VjxTb",
  "key19": "4Dotrdw48YAHJVsPZLRCe67tLxZNKXPenAwv59GvDu5dgvpkn7MwBHWmEG7BmPn6vVJxw7pajPTZuFKzs6jP1qwz",
  "key20": "3RtouSeATYV97tA5XLoMEvxbnrpBrWRDvxetwvmrL5uFR2t9Mk9GgqtaqgmgYELMAbcVahjQeKanaHK7QXvChJHo",
  "key21": "43Qdp39ZvsoMCPZujniNFAU5fsHXUqYegY6pYUkm17CdQo7mpz8Bn2Vo4CP7GgpUYNoxrYU6tTpooWRrckWFu4Mi",
  "key22": "5XzEHJHt6Rgyen2RhGzhaAnd1RiWc1d7iGVansBo4G4siBY43ZMm7bVM4xwrFpZSuGEMz3D4Uc2611gnVBHAwRNX",
  "key23": "vduHrLR5fLMo8CALruf69KMbF6TEpzFJCytFJTqsNTLrd93CMkiLhZxSpBGwo6gTZKbAqF8P3qzNrPfTcYwqQ9J",
  "key24": "rfLrTVpTQSeSurnNnR1D6NYmd8bjhrH74ifKwYwirg7SiJeGnCPRwPHnwiPcEq3CR8mKeMkxnYZagW9JsoZck1b",
  "key25": "2Nb1bwgJ5p78oorgbXpzfSPFANDg2ctFrLKbBSdBqahndQDNKDRaQ2onEkNdxic6V4xzGoBS3t8ciny6QtJrwhq1",
  "key26": "2vfvdfCWArHWaYPyJGHbtJUsnopn8FAmWDuGwxiMHvZkDaJeAiX29icAVALC66qnTAuRtAa8o2dTn4B4he9hpurJ",
  "key27": "4SgXVciuHhRwV9WQsNaJrYYmU42vaqw6T791WWHZxTLpkzVF3Dgn6T5hjJTt3D1AhVrbP2ExqkVfdcoUYrGbgpRE",
  "key28": "2d8CsPZiBZWwxNdgojMogHH9SxGoiSie2xR7SuircV7WiMPhAdTqrnk6hPYU7ueC79nkGXVfkKzTbuK6kJ1LMeVQ",
  "key29": "4nPqzYApQEh48gWtEMfU3mjZQnit1FzW17L5rWpDPKHz2THR14dpZVA7RFRGJuyZF7iBYE8y8RhCrGMetD32yDpf",
  "key30": "2cH77YQeA5RffZaLgXmaKmNCq5UY5PC3mfpBbhKyyiihhtdskJxRchdSp2dko1qH8aDwL4bj5kAjPp8LgvcUzvPw"
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
