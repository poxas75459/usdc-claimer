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
    "a1ZjHG9tE573t1J3SyRoRBJ4VVspiD8tfcUt1FNinthPv78YBUHANLucC2xsS8cXPNR5A7fPrRxefHdWoHnGDdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4q9VUeiDVpsYENA354gezqx7L9iE1KJxWu2mwBbgDMHfhNeWGyt5Mu1m7GvxBM5giVxqJYLH9KgGRQ14zx898D",
  "key1": "2wQfgGKmouAXfe5uVoqCfZpeBBKxqFmgZmKbd2Dfqbr14xKtEZwB3JSr1YdgrjAGg2qWjNwEHwKy2hSFKsk8qDP1",
  "key2": "5WmZJhFKX4euvgXi33jjRvDmuisnW1sFELwoJSmXCdksFiGtCqRw2Hda3sZWjfpq1d3xQtFE3QeDkEWVrRYUSeTM",
  "key3": "3exB162iXLoW6ZrJFcdzigX5m5DZQy1MDyjd7xvirJWGYmHKid3Rv8ikucSEcSG82u5WjoNmzYdpJjvFRpJDZb3f",
  "key4": "4TdjQQxzkXsJgejSkHToZ6YYxszTgqH78iWEFQFWy7zNfgQeVyrmfTNZ5ETFHLd564vCh2K7vK3fYE8njQ63K4zT",
  "key5": "4LtnF9eNDrpKErRyoVSBUoXeMU7ALkLKbUoivDcGT9TbWKhUyWP5m6BhwuBM59aY8ue1eP3wNF4saAQ21JywsWVK",
  "key6": "2DmvcdahyLigHpCguLKGh1eath9kdN6jcXgi4YWRQ75kmzSbGrk8M8VD6CTP3ywbmrCkEjBiHuHvR5SYR9dXqRJN",
  "key7": "3sK2ZMvzMWJtj596nbQ2Sj6G3RDkJYmSFBsiEsb28yJjgzEiNa6Ece9mH7xiM2xD8XsMCZxWkCJewvRSi4cnPs2y",
  "key8": "9oMkN5QCLEnKj91DZPWuxD4MQ8n33pi3UudQNPMGzdHCYqrS1MikKXmYu2UrLutDu1HneinXbneMYdx5cmNiC9k",
  "key9": "3pHzauhQjY7ppifprc47rgdUwhFhK1L4K1WtrhZ2vn5R7eTU3CEv5aSdc1egwUckAXSP5HK11DQAhNDPA9B4KLLk",
  "key10": "BKLfcYw9YQcc7k9Ka2toRNw71vSgReCjinmWt8crEZQfkpsqHAPe8ypUbZyHqDqQGJodrWwRQaaGBf6cz76KA4e",
  "key11": "4AXxrGb6g2rt6d625eUTKkZGbD8vPTKrHaoB9sgxSJwzamxLKanmCXr5xZPAzVBo5h7vfAQ8ZSqQfARtAbkwaGfX",
  "key12": "24XK66EZDLFx963ddKN7dVPbiwWvDFykKrj6EDK14VGY2MioM3mxkZnxNos3MZrNS7AfJgErCTLW1imbTkXQTHwm",
  "key13": "5FgLwoYpNapiCPEMP9ApwFw7AJuHumzyPopPHompBE36T7k7hVKY8QGTC7bqNSVZf8Ck1MiSfBf7oPFFbY91CgDg",
  "key14": "52x3MjPb3nK2j7rGyHHxZbxrt1Cb1TctLvxwmhVfNvAm9ZnTLHC8s4HtTV34tHCZfukRKhrTYSbXcsBPH76aAMkv",
  "key15": "5y5dtB923FFYyB51mK4XP4FY8BzNwXpZjpWzmWqpsQGgsHN4ML2WPuYK6iKZqvx2M2WezMhWSdDgZacGVkGAXCpF",
  "key16": "5znVRFbXeCS1SThv13eDRYdqSXQ2MgPeXDjxtmSmHxpiGsumxeDDAkWFr988EtV6aH2nygNTVcGsDESxjkUZYEKC",
  "key17": "4g9yFXRXu9Bz5suX6c9W2K276axD26PCaTAKeSFNMc96NH7pjQv2mwxXTfSJZTCuTzkYLjEaKt5YsHYq8vVAaPfp",
  "key18": "5kEM27eEG9Ki42mknXnpdsFgPPe4WWnUQJ5gNqgrmS6VdcpgZbpUGMBg5HaqZdDGVTFspfNKHkCch4ScvE4fHKtp",
  "key19": "2hihsW8jEX51to2rH65fodGBFroVffd6phSTgRZftymipeZ4BSuPuEG6L7ih1hpRxkysUGZYPErr69MzvZAW5CT9",
  "key20": "3yMpSLihNnhei5NVXXnAHogJSHcTwuEyK2U6ssarTGspXcc3FsMP23tkvcw1mevn8fejGyxzWHPcGSttEMEiYTa7",
  "key21": "4pP9wwwrU7fGKxReDgH3AYfkRXoCix66QoABvtx6G7za6c1yrv3eEPCKh2KJxKHcuvfwf8zjZrYfxDf97NfxgtEJ",
  "key22": "53HXkKj6C8yXerD9Fv3iDFZN114j4hBFTADqUG95QyTg1RwJpPbmX8MJ7xNfcGYqCWdw2coFWJw6JuEAkyWsBE6G",
  "key23": "XxE7UJoSx9vxzYxxpFiAQxLKuWcy9EgTC4voaNGkHNM5NwPYQwedG5L5uBA9M4vv8bBTL4tXXwt1wLQcLArWiqP",
  "key24": "3h4vfUb5WGQHxqn4FRQtM96bTebrTtHnyK5jpRqdec9RnQ9mqLiLAVn8K4by2kaVkQaoruJzyhPZRXPZuoeE4nUv"
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
