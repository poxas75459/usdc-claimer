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
    "5c95BvauyHZM2DHZytjWRCNxxSAJpYeo4EkEmF2j8PEz2JWmTGfDzY64qUxZNaxqahoScP4SHqDiHUasyTxhVMKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJ5VqZgYKsxDpsHz1YEpUmqEghkkQQTUTabbNzfCTxqNocidPfBPr3GSm3oqcUgLv7y8YohqZ9GKunaovAYh7vj",
  "key1": "4ZHjExD3v9zX7sKCSRyHf41pTK2u8YkBjRCNai3CRuAtd99jYTDyfbAAJh8RHFkYtR9kJdVzXSuSgWMLAAVLkQnS",
  "key2": "qyE4DsUP1q6znxMqSDMz6jvAA8xrgu4qQTRwSi1Vghd4LVg8KtazhVwPiykmg2QstZQ2VAnLYHr8ySvZ35pbbFn",
  "key3": "2JDaXyY8SD1dEzXEYsg82cCmhTyD39roDPSy8bDMoWbwJrpUTeXxsGRr8TXeriWisP5LLaCXqyybQFp4h4Wukhjm",
  "key4": "4s5pnoPgkcx9yjshen829B53wPVV5w87TRswBxbYkT9gKxypA1LhyEkZgyo3Ki7nrLfkEQDSRhHbrNt8RLs89NT7",
  "key5": "5LpsLGaqXu4fmsL86JgJVhjBE9t7vEoC176wVxXs6KHfieivZpg22aLbp1SMsq6wsyeeKhoiA1Z5j4Ba1RYvisjD",
  "key6": "4ZXz3rwPSbkuPJTsgvrVTpMzc3YAMHzWzFXHdbA6p3sC3tPfJyhKCyfPqf44nTzoMxu7i2Pit5Yya1EbDuUCC5pB",
  "key7": "2HQXkPYiAqVe4HfV3EpiQ9eWnDK54NqLp1LkBB9Y74D8JUyXRUWaY6wXsDiKSNJvGME3KNhFmAgDzhc1BJDimDBx",
  "key8": "5MUs7eDgdfKmv13fn6tAEQt3kfnKoKPhif7oQNLwVKPq9NbuLAD8XnwimgTJiXghVwWxqkVwmLzEuVjhuKaUC8aS",
  "key9": "2RcJquxtD1Y9BBXWgN8RUJsZz6Ux56VSy2BvT7D8133Bm8xCKAFyZrZkfTZWk6RTNH9MK4ryDihvjqHHmT8Kkp9j",
  "key10": "2gFU6sBJc6gzrq53dB69GKmaFLenH58Vu1bsHcFgnxm7bFwpX2BNmkQVFG11npQHHGXUb3EUmNA9UZYnBscaXzj3",
  "key11": "o6SfjtPdAtR9mBJA7zmaJj5QyofEAfpJhwyD5rQHbo1Ln7tPGmhxTVNs9hDQjrfW2cFEBtBoBZVWQcwc9QonSQ5",
  "key12": "qCoYDMkGT8SXw8qdnxuf9Yu5YvX7rZj15gPkTz98ZL7j8oDHyeXYuNtVjibJRqiLquUZ8ZRLoWBhW7d7ndJU7tH",
  "key13": "3cuWTX2EnKnCX5cDccHiRYRMog5mibG6TXqam9RUT3aHNuWESd6YW8oFtTe1Q22DaZJhdcf5sTs8JBN8WxXYwLa7",
  "key14": "4UR95EpVfRwPLbZuxiGidGTGqC3qMWnBEYjRKxxBHjKmEjGVaEhcqiWAqwcVcrtkvMnSiqZU9cvaxMLmesTcGmwf",
  "key15": "4hkLD5rkbBXocrLVR33QmmraPAmjji8G8Pf6hCcWoKYMAE8ULEBN6bfUYpEwhtidfFPTbvmoQ9YgnJwyCWQ7UD9F",
  "key16": "37NMsFUwBKnWicKijTCdDNufPT7WjzZKaM3Z1QRCEHthwBoVVkJq5ycpntcUfUCruRfCKT3dPyPpyxKfcvboJXz2",
  "key17": "2Mpv2fwt7F9yGpmnfDQmfvo3Ko1YCrMnjJjNkcFwWQcJirs7r6qJbqePX1sEKJKiWgNDyxPNpDZcAgX1gx7U4c1g",
  "key18": "5NQFXhaDAVMQksjsYPC284RHS2oNxcDGtKRMvDiPi2qxw9k58SmZd8v9ew1tMUUk2RHG6Q5VDcQpQfP4sWugK5rx",
  "key19": "2vzsc7518zh4k2WnSfpPzwVHta62SmCQryoKd18iSCucr7nsA1GVGtn6wU7mcveK6EKUCGytn75QGk58p6Xoq7us",
  "key20": "5hUNpn65zq4MBJvY389WNmmbsZEeZ3JvDaXoH98zkLkAG9G7fMcRxTTB4kjqzQ8Kn7E1admUzHgEN8pv6GQABQ9y",
  "key21": "3FspYrPcvezPZHdSsyZBfpKimwDpGTd4LVmonYq8PhSDHXnB7MyPQznzyffLuXqij6x914EGK1sbCvHeHL7TVwVP",
  "key22": "5oWC3Y5hpdxrmcPPTVQ72xgYq9RD3KPH7HKFNtVtkeY32s8uoTzSyCzxFuPUiHNhB6AoZkKnYW4eYHopkHa869Sh",
  "key23": "5Ev1C2Uc8942EbxK6V1ZGqJ1T33U1VoZwzMQ9N27ccopP9JkXuYRsSFnLR7qbs1bSXdf1CqYWVrZT2H9zMQScg7c",
  "key24": "2ofLkFo43FXXHBJKg1LSnGYe779HfLH2KgBEaKByGL3qXSWAu4HszmA6f63Mc2oVbvhtUeGQGV8wewYDumvKMBtb",
  "key25": "p7xckSHU5tc8u7MKb9N3oz2HvdJ8fb8DBqDaepwX2fPJt28dvzPfTFRm6q4F3uMYxWgxDsqFaH6dgyJMwqfzrDm"
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
