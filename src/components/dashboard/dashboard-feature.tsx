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
    "D6gGY818P5kemq4bi2sa55zDbzM4FeiNtnfnEqR2QKeTx9wBucFWoSBp92kiZjHG2haxvTQpWQxs2wKJ4U126Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mwYAEdnBqG6HN15RGUek1VhRpYvzqyNdx5zvJVjByGiBMHYZZPw5k7xwvCa7MuxSEzn9f2R2mJLuQR7a51GiKjJ",
  "key1": "2VFJFMZG2RK4uqf7Puytf5cVds9DhKSxmH29yLi8foxJHu6fZ8PMm7pmGBbFEsAfVikDa5vZbcA2qcNYeRokonZ1",
  "key2": "4m4iRPwiP1eCdTcyiFptTab3YFvCe2UuASuc6zwTFB5Jjq6NCBTVv8NDW4cD5creFQhKCHEnUuQNFPdGKDCSQ5C6",
  "key3": "9HFb3Q8DdLFMTV8qeDN3BbL5qPLzfpGSWvPBk8GoFAoGH8oVsugkMTkiu19EH61i8rbwyeoCypPKRfkp2GEyJzX",
  "key4": "5yUC6uYTHkfaZCYbPxLUkrub4yky4pkxVgsziCUPEacm7P8g5RmjozV8cSkSopmbLzBbMNhoe8ogvSg9bxrdH8Nm",
  "key5": "Vbq4d4NnyBMZwQYy7ziDYmMZiYRS3kjXDLJWJQTWYs97CYaCKsyGb3rPG9W4xUsNNPJRByYncNKGzs6BPoYhm2E",
  "key6": "2AdJAWnUzH6VyP6mEujNerVcfnfDSnhNdtdEGnkkNjtRd5xJg21kLGdo4Ucy1jwNwrF46nNxS5ALYkiXoWviZDeX",
  "key7": "2nT7pcYto6St8HpxTGW4xjAcgLFNZMZLCKT6BUS3jqGNReuK6rdsMWxvJQc5ahqdfnzSaHkc9chmKpQNqt53oTCT",
  "key8": "5YRq34P25zp7tNqbY1wbqFRLeFmRcfi9Hyt12yncJqkih9GrVpemVRLeNiHFuNTWqe8nBom146B788jdFwuTmLc",
  "key9": "1FkiCukGgBsFSKJvX55dCb3YzvmLfepkLGq3TYfdp4mciyVCaVFPNrzcoB4LMbHBsyAicL91QucDLdU9feW5hva",
  "key10": "ZnuzhFeSkFiCxD7uWe8wpywfjcAq3A4WZ127uxCwY5SJ6RmBwQr99FXNxcFRq4QG1AXV3yhHYkQ2HVWQNg7UfzB",
  "key11": "ZrhDDy9UDrTJhPhb1WtdKGQW4aHxxhTVxt3DvtnvPb3moXSgzZE6L63zUdZP4veyN6htPq5vxWNWCsMFh7XSAuK",
  "key12": "FwupaVhfFyz9kDcUvZMDykNNASV6ds4nHJBLmkMQYyMqCiuZxcs3HFjj3dePBmYTBLM24io1Nijmz5FTkPuBCfP",
  "key13": "RnHjudnLHvtVjsMg4ejwjEQcD4D5c1mhyJHzbxqt4KrYM1k7pdJGrS7U5kghCvwQXS3A8scaawUWNwykJfsD8vV",
  "key14": "2yLNkPNHkZjqQqXqzpR6hrq5bdrVu3qtoeZKNWPFLuBLEZJL7WAEqLRYAiTTBZYJR2xAXw3Ef8efZPDdU2C3F14o",
  "key15": "UhBfvTHhgJmW4bUSsLAxHc9pW393qYgVQ21fLDbnrSRpS2bK5oENdDU24KTYrsZv469asCfyuxaHS6bNidC9Puw",
  "key16": "2LHosTPMqyLw1PPR25Sa1994mofUeJ3MWQXZvwfPxKsthsfyyQPPo7NVD4JrxG9Yo24Zb9yW8trZg6KrDQCJN27Z",
  "key17": "2Drt3MMESmrKHJKp9ph3ikNQWrNkxVdhFuWkxeMMZKZCAZCbc25seyKwfQZdsr4GngcPYy4SC4rN7MTBNh9X32rT",
  "key18": "4d1AM4114QGiHT6D7yaMo9etoJ9rXUs1ny88UATL3RNR4kVM54LMeD9y1DtrnpqT9YVYKH3jC7vDEPMftTWx1hbV",
  "key19": "4nBcyHpMUd51nTp7S74f6zW5vuxyBcpe5yTYifmt2zDo1pYWKyrxDxi3pgnku5YiKa7MnaDnY8kguSw1YkXW2FSB",
  "key20": "JRJuJw1nrNSJzQf5cErHYWgik8A9iWBMyHYaLjxiM2s7z7VbJffSRPmXSHhJgNnpNziyEQ62ZPe7gv9aHhhycqH",
  "key21": "812J3HLiWegxgWpcXDBtSveufP5CwaLNM6yvQ6GgkeXXCEGjuUaxQ7XPVowhq9aTyNStRkRL9mA2oB1sHgAbVVs",
  "key22": "2nj9UqpZDrtYmj8qJf7EvmBfL3itpN9QT2ue9EZtg6cmSbcbUVYjuDp4BMPRRWyfZYwQqk2vjDEZANdJViCxZCZX",
  "key23": "3CViRstX3RuXZMJVCXNakAaFaQPHpPkTq7vw6aMm87gbN22pQ5emaHN4RhtVyAHNSyxk8LzM6xgPX6h9buexAhKw",
  "key24": "4YEpJScGcSbCLEhegEdYF9DYcRjJvfEFZ6J1GoGi84vFQu53GBAitqNiomDuxvaMugojZNSfCrKAQ4wKz6qzQNPi",
  "key25": "YUjQXuNdJ3JTJYAq2e1TyosVSRqTFa4H7iccf3ViHfcJ3w7ZapakCYsbxFD73QpoGNDnNFWLtqGpidP8CZyAH2k",
  "key26": "EzSwoJmu39fAUxN4SHipt3jf2mH9n2vE6FwhJ51naPULs5tFJZfLAeLMTg5w5HHM3RpBKz4wYdmuP4cTwbWJVae",
  "key27": "2fiwXSf1Cd1ge7ecnCkTrncrRvjLcenuLC9w97DptGYjy7JrJxqgB1EXaHhvxGj2YMoymDKo751xUqZUnBgPkSvG"
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
