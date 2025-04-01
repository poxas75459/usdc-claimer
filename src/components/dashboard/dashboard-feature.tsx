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
    "GSsnJCWQg6RBPGdrkAX8GcBEmfCXVEZC7ig9MN34saSoVgAReYrXZHbj2EEhXR8KkMpRparR3a9CsRYNSSAkXPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJJh2CycjzvWMrHGWRfpzKKvtoTUpQtugNibf6mZesZ6HCa995Te7FSEcLxGx7tcyHrRDBbS3Gt4EWasPCnjV3P",
  "key1": "2JMtEQbRWnWHFfQLJmgGHx7tZTzakR3EvGJpwFUKYBRbgLnfdsdr3ziVbdbcPFsedxZi3P5t3Wu1n6tigcxTK8NK",
  "key2": "YhuWFaR5P5ovb8WJ6SwYoHYXBbKdKzMcPDtTVYxPRfYkgznJRJdBukv3xnP62pgEwRHS8NNvLc32Ln2d7D15wdE",
  "key3": "udLW4N3jhFfDAH1HPvjMRM3dS9GNPAba8ii6EGgy1Gg3gtTqXgyGMqsvMGHHzJUJ8dCdtdZkdZRTHk4nVGiZNAp",
  "key4": "3kPSaNrYHy5GJkKrRKxv4wUhkwczVR3W1CZr9ALod3FjkGMqE245SPs27NHmy3L7ieaLzjHp5cs4h6EsoVZcgGm2",
  "key5": "3z4QQkgCdmSAx2Qv1EeLRsSwKND1shey2dqKTY41x7SPRohHHqCMtfaAy5DrmkUZYdafvPmXguSP9qUosFC7EmLk",
  "key6": "267sZRyNYZzUUT9PdTp3Tr4WAgjvRV8wUhgviCkWci4seY7txmPytKUha9fwKtHfroDtigUdGvnDvA8XhQH6Xc89",
  "key7": "4Ti3rZKUQW2tmUkRRXgg8aTwPmXEpuTLU2GKt9fxQK3VG2dAdj1w8NHVKdhdGd6N1CuwkSUnr1R5VnqRudq4tKF4",
  "key8": "ibN7WueKmaKtgw8eZrrMxecYHpbs43Maf3jomFgxsrbEs4JmhqQe99jqVtYRjRHjzA5fNBnPeXk1vVUBy6DioGa",
  "key9": "3jVqzL6pjLQ2MFGtB7eJPsBhExFyaY7esQbABHSt43m6FuicciXz1y7R7ExqqbeD2C7d375MNy2dKoXVngpGoc4T",
  "key10": "u3181RQXkR5nw4BV9aPpxsrbAuPdM1BKZihjLaL4PTho6oSU3cGdfEZMzNoR5RENJexrErxnxGLN5Z9RQ4JuFFV",
  "key11": "4rVDCewxs79wxzt4dapT4tTyJycYvPoMju1rGvQwWsVFW4cJpJpFSCVRAv8kaCtFxB44nBCgeBoqiyRVwgfwghih",
  "key12": "61SCxFRKbE2Es1qnNdeFMAQk4NFV9z61PJVTStGJPsq75Q8xQfwCyJdost3oB6QZsPTZDWR3rGxokHs81YXnjqaQ",
  "key13": "du9ynTKzYesHwDWnGxAHVm7gPU8kAEoowLJRzYVi2zGN1PYywWfL6BSTVnm9oxH3AraZ7SYj2fa6GT76KTWB9vG",
  "key14": "EpWCmTN7DrEShaFLZ6iQ47i2cpuXrVRWhFs4FMYphvemWBRgxv8BLZo76osTuduq8UypBfiBLUS2mA29sFxfc6e",
  "key15": "5Vxd6vVjoeLbqdd5643CyoSid6A2yzM1zFQXubG7AwrQri2BE4xexMWPASFjfy86mxwpAhmud84PgchDhgsZgDqX",
  "key16": "4GcRtGtUbWxgzzwyNR6g4pAJbEJUQshDXF1yH4bnhagSvtg7TADLb8gFLArUvaEQAgk9BAPK9z26Pzah5oqYdBsX",
  "key17": "5ePaXD7cgWc58i1Xn26saPovJHtC1bKizoaVkhpKVHaCx1Dttfsu4zMLRC1PupTudzW6ztCwSD9MzFU8WQCsGRKg",
  "key18": "3rrhh15eDeLpc365VwvMKwcH5wuHUfasHWmZUAoLA8uZEPNVFfdqGg7xxzoArJhYzLeoXHhpWMGYi11nYTXC2ocM",
  "key19": "feUSy8pFJjCGVPzaBg6DwKAf8SugXCgwBdwtj4oKuNBfdQevEXeCX2pgTsA2XqjadqhMsDmu46FZUUW7TT3bbKD",
  "key20": "5B9HyKPrheU5UEqh38h43MCNF5vyNzUHPEBzeRv4jT2mwrs7qQQggra2iuUUVbqcUuTeJuTqkLqgRpMSBynHgBVi",
  "key21": "23jBf4kyCTmanUXKKwubCwhzLMmL3Nq8B5djEwBdSPTu5dvAi8daX6nHfJ9vMrssNLBPpDajKzLQMJvHrxxMYHpV",
  "key22": "5deiyyaHH8vsW7rwPuW7MY17UUkDY9ppo33n5N1CV89BHutxmV8gKBPJRcD6ij1CAuREd6jYhrzEBdt81f2TKBtu",
  "key23": "3N1vM91fyw8xWT8NvWKrojyTXBR1Xm4J5GL9xBLhDtTwnJXaMtEk31YtwTSJmxZMjEeFVcRgCuxLJwxzaFTa1Mzr",
  "key24": "4H17djbXma1LMuoohx4DPuBgrWKRFMdXQVTU6vo7y5BRCAbVN5oAMBgwRQXB96zNd1TeEPxQgLzXP2c5EcHFZgwY",
  "key25": "2q1KhjKo7EP2YbSqFGhga7Z6cNwudzLvPpjV2neJasC1d2LHmCDHvACbi5kaJcMbD2ShCciBVt13pWKh8DAkTPLY",
  "key26": "5Ahaaj79Ru8ZrYQeugsGGTeooX4F1DMZU9rcH4NSbSHJoDA46boEBeRXkGVdRQYzXXSDxd8PH9T4rDhLJhh6mQHh",
  "key27": "2ncL7YvdkagAqaTYdHUDcTBJ4y2FaF55GmccMfbcu3QLZAi48899xLxahDC6L9T76ArUq1TjWZuq1zgCsijVGu3P",
  "key28": "53JCtjV812CGVwd4kisbbwSeFqhkWHmGV6q9kc7B8sMnPkuHZkrEyDjPgFqTtUoFsF6AsW5JEJFgfwqYWeogMNZW"
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
