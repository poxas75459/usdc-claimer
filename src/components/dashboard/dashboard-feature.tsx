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
    "2SCSFf1m42yXvVkPw79EXCPC4NBwyanSFvQMX7yvXJWpKuGQJuDxUSh2KU46hjTH6s419r4nRtDSEsRuLtPDXcCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mMrxbGcUo8AXRE2wpuxMXeA9J7UMmw1aCP4P4GCqicDyzjxKe7KLBBiET9Mdd6v23s8WRiDvTQnJdWKkAFVQui",
  "key1": "4E7eN8GChn5sXtcWPeuz2tmbc8eibVqo8VEzcVhhYQvAqRsxkjDEcGyUBmq935LGj6GQrUdvRxZcZESD9MXiWexU",
  "key2": "xpUM41Y9PNAwFmgdRCmXtcw311TMnN8FLvCCxLUghdk4xbLcGSLRbDq7HBZy1pN9VtYBeseW1X8dnDfYAMxA3Xi",
  "key3": "2PM4THKnrpEdjVtUkm5vx1nuRUFdqWHH454ruaxDcuLeAbPhiTBruUXM4FVMTQ1ePGmPmmTFCxwdrDhNQ2E24Rjy",
  "key4": "X5A3p2hGgANtJawZHbWmPYEnhB83Jst6dkX3MwKpuMYzKiMiVegjCaGogdU947CTspvZniyYUdvnPE3sr95gbJX",
  "key5": "5C7s6dXGwRgh7exYGG9hWuMNVAPSC4qvT9QdC2ZGzrkxVAsaZFvGaZ1VyWrBXoPJgCXbDRD7AH3TVr9Tq2WwuLCq",
  "key6": "LP6SC9ud2JJuE63HRuGCFiKF9mBaZ9DLf8yzqBFtTvxAdV82oEL35e5pk33f3sAkeqrbkeGyX3zhzgZBfdxV6yb",
  "key7": "YYmzVD84pCVSCCCRBkgtbSURCnBZTpLCRyxx48V7vzAhK3G2b5dXj9BLJCdoAy37tCyzK3D4MJc2wrCkdPNgQyn",
  "key8": "2wmwkhSyRm54aqeFV2DRwBJg1QG5XL7F1U9ne46C2PSD6U55gZQZ1xmCRdkLKCCcxNUh1Vj26g2KtdNp7cbDJpxK",
  "key9": "2RgJYBQRUPi52eQKhj3HBNqXcxaW34kZdk2QYEFebuVCF4nYNMiQUYAvdtHARjGKu8W6xiDYQQKJVX793osA7KXL",
  "key10": "Nyh6CfWar9EAkUrYKsnCtSndesv5v6FphsqY6ic1LbzrJjnUVxvt5WrRmSnzwwJWZV37Yiy3pTELRWQ9MajgDFq",
  "key11": "41P1sPxGY5KepwHdn6bzkNysiNMCGysGj6VtdkWXMoTwfVwAmUtBkZM4WDe6bD7ZKsmuUMZtVaGJMuJZPYCxnmAa",
  "key12": "2xemyaPz92rgDuGSjwdhbCUmbCP8q2ffyyzMRNzvqgfLdFKjxHF4cTQ2U2jAv66AfRNY2HSa6uHDWYEHNRCCkASG",
  "key13": "3Av8GEPVo3e3H3TjUGfQjbzUbLnJY8sN2HSdACzSTniCVasnghKqCqtBjDth1EsKNBnicLTajCmh2vZTS8umVkaW",
  "key14": "4VNkGRkJFPKzYrvQ3nCRAS1JvCmPgG9mKkNCwnRQeawdgCty2MAjW3Dv8g2NSWGq7paRcKz84PNfYP4eCQJRy8Y5",
  "key15": "3dvhJt5DyM73Hv7d8BPqPq5JyLPvyuLZxse2fUEUCU1ZhnMSsundVU9CakeTZ4qLVtBRquYXitd6Bf16RA3LYmqZ",
  "key16": "PpN8eWCqJvbU4HcdJiCZrLXzNDBinCEj91Qb8TyhLKx5Dxfyd2bQN4qvePG8rqfR6w3RGS8KtrdVjCfEomWVHVi",
  "key17": "3BtZ62NXsUXJBWmaL62tg5Swm7VHZ5pU99CkSjPbzB13L6QeL4kDRSqru2PnNx31DJH1WAPc1buq1aztCqHM56UA",
  "key18": "5Y8SDMVKd5E8kLAEVrPA7UwrA2atidD9xjEjcVgt9aqSdJv6PiSxgYZYjEZUzTPqShANvSim1DKZNA7AhfruSKev",
  "key19": "fz5do9ds64jw1rhs3aUnRN8DwAfWGBVPhRAfxPQXHC6i9wxv2dxtdFhtDrwpEfsMHz4ZMqWmME9eyDrkJ2QeDAY",
  "key20": "86BPzkPdynXLkeQ37SfMCbAbwoDyM5v7p59TpSPT2o9kqMdLA2MPUK1mwuBMAPN1GjT48oeVYZxZzEMUmbQVnCd",
  "key21": "3AwqSU13VsD6LkRXY4jXaBDXVjWnjFr94wk1X1r3FmrhnQUFRmCs1rAJopuodz3HDAbeiQUbmjWeNsA5rnLWEmoZ",
  "key22": "3VskM25XPWeN41utXX4dEp9oGtudpt92AXprpmKPMgTd3uWt8hiCnS3NYH7SPeuKAYBdNpXJsesgPFrV6B3ehjqA",
  "key23": "5B6FqcfEKZ8oTuvTdVyaLooqcwucemZwKFHHBfhd3daF9U1BWzQYzXW2NmyCFkWGiXPv1zzLC9huyFom9139YDw",
  "key24": "3qKHKbS73WgQMjoG2ViWJoamejpvzbPQrSDiV96VHvC2qZKb9aXpGUu3L5v4DCJMS8GhaaE3R1YX9WFwEyR1r7DD",
  "key25": "3FBuABod3YVCbuxWtNJR5kMpa6iADLv5vwTDkmbUTkCqsDRCumLmr4rYnw1rzQDovJeXtkSLW4uDHbCgDmcKCq8t",
  "key26": "5M31HZFZFAZ554fL372BGofdRztTYJwuiTJ5fiXkf9CgrD2KPKPjzhfVTgVkyroXazR2p1QwmT7t8SMtxXxsgfGB",
  "key27": "z4d9nL5uXBaj3NVJWTJErpXN7V9hy69dHjQ39RktdUCARSKQA9xKchfAUfHUx9DEDXWxvgrLAyVfb3tCD1KNSq1",
  "key28": "4e6uFBbDweKruckwKc3xpfbqY7UQprrD3TfX53xdse45bMVkzqZiYBMxCjNbaNg9cDogMKNcqezZTxbJ9tvHjnCT",
  "key29": "3Do7kGDF42yQP7XZ9jpcJ4jgPxFSs5sPZ5brLHdKxxhs2WPbzcEopnt6diXNBujmZVQdAsx6RnBCeRSbDuUHJkqz"
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
