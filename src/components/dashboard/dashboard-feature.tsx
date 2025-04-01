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
    "43zeaacHUac3jN61KxXRQ2jg3UCrcP91B4Mju5vigZeVMWu3GCX9k3swGvyaMbR6f27ya2yn5N5VAj9my4Y2cbEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mPgbw8TWYh8gH7HVt9DffPNV3SDtfwDp5TDbqijw2At3zP1cz8v2F5Y25z9oH1GzpNVv7FnZbAusEgivgRFAvxY",
  "key1": "2Ep3eNjmgoX8xvcWZkuCaW7QPFEaMU14C3jaKqs5LPJdJkhFU5P4qwfJLEPEsqcYVe8BTj9mtHjEBsVBivg9FV7T",
  "key2": "5qbvdxxn7pdTuqXKPzMHW9dEDG5dAW6Ycdwmr9AMLSaDRcRwZWwGbgitGBwZEfzGHyJAHbFVc1QJNoqD3TCuEnC1",
  "key3": "34UrHSUan3qAtGiudvXGuT4aY8Uvrf4tmyiEwSb6ahpbuKFNGm6pkf4HsjhoPLBpwToPn8RE37eZwXbisFW3gEkY",
  "key4": "2s6tVZQ14m44r3k5CRP6su1wFMhXoY13Vpg77yeWPmAUaNrG9Hi4o5H7qmJQqv78YQp1cjo4v3YrcG527pjSaHi5",
  "key5": "4VZeV3ayhJJZwBcmRESGnJKzibCVfhAsXLmGWFR9oump49eUgmfnpe1fiSCfMQiUBzFZNjxJ9ffqBXGzs5hRciiq",
  "key6": "5XVYN5kShKCU7n6AV57NEJKRPP848v9Av6zF1tuy4CagPcCFX46BbAmpGuAKXUXWgQ4ijaZ7rEXvkrtj5bJJ1u8U",
  "key7": "4xx6agwyDUZtCtiAtxXwS5zA8D2VbXqAm2kg1Sgd3hn5FYYh1yNEgcXKNgnEe8RCisnJ4gDboxnXHedw3ZqCZ6Rj",
  "key8": "3fAnuzTPF2urQbUsAv7JkpRPc6KBgJxeUjigJKqAWdMmQL9jBG7YBVsPuLWANGMCd5vszEjiHMGExbDqkKBaTTn6",
  "key9": "57Pc1fxRUP1ff86GPkthkYMDrBDshxFMpdTapLWQW1vkKfFv2DE5tMhbpGENgznNkf6uyFCNvqyQB5ZgUqmtDBER",
  "key10": "4T1YrJZMDXFXvSdBrJmAgCHtVxgk4nEairjupmir4QLu2HvgrXBYg2Nkqg6wUWW94L5Vup8JGf1J3GcGhGcKEjXW",
  "key11": "ysTpqUoGyvzdr7vMoXiTPNF7MRjrGY4H2tKxBCADYnSUA6hzz76Qpbgc5YVYp8xZzJUomjPku2Lr7GU5KXHikjS",
  "key12": "3xobzS2QuD4ciWAja1Udmw4NVhGgTvZJ1nF7PoYypTeX5kQTxgCxmiyncsfrBUKVU7SwwFbeVrh2PTjcLxhQr2Mn",
  "key13": "C1K8RxkRW4rQCxAM58uqfS3ZCTorh9pbMirBAynwy1EAyfXaCKZfh99FQhPzSazQR2hN4BYC9oEYXZnnEGFEUJt",
  "key14": "2E83GqGBVxK9Z3jUnDJrXGe7MpjpxiJDNEqHo7ho3ifgjcBmzeyyVy3FxbeML3agU9EMTEPmYXvqGzvZoPKtEaW1",
  "key15": "5U17YQW6oVDuW8RgbHkQ22MYRddKVyruqPK2ivGqausZwupntkAXYauX7EsUbWx2zsEEY9tBA56eW7TVfh3mNVHf",
  "key16": "5Aodd31voq9xHMy6XBauuZjPDpd6eJB9um9By9UowYKhrYgrvNH4L7hQ4Et4RJhHBpegfcY9yVCFCrVKNUzgyyei",
  "key17": "3u9TqLcXZ9Lnjxc3LPQ7urADjARvDvPfQLCvJ6f5tZUduChTxRYmyJpLVfCGwWMPZnai2HWzyWHvNgNKijLU1pgt",
  "key18": "24LV7qwd9MpyG5fJGRee8yVyLHVmyTs9MQsJjv8oW8GZuHWhGxw25FccT5AhbxkWGocpSu5CFXFgS24r7U8kokRo",
  "key19": "3tmW6spSv3vjjgcLS2Zft3k5cDcHX3ivKkxtUYA6rewXZmRnZxTYkXdSevent3mYBmy7u81hRUJ3prvUtgmwxx65",
  "key20": "3SKowBiqcfPTsB2eQkrgFbb2bV51WDdKdGTUYjmsijiQJiR8y3XEzMiVBmpQDdApZ8ToEeqF9eM3TS2Siu2KJ67Q",
  "key21": "3zqDYKUJ57t8eYzJiXg2d6kZHSrwwQoTnpunJgh4ijneC527Bg1s5Zkxjtzte97kMjzErc9eU7RFZp4XVKq93ZfG",
  "key22": "2JTtYtMfzgEv8HLMZWfXFSr6mydPbxUMuiCSQQZvwHj4qjVsEumTGmCPw8jGdpduhQtkL8SQ132GXztTCXnGkjze",
  "key23": "31Z91AMGZV7zxADx7jw5d4sRA8BmuSK9eD3mSFJrXxn55FE6bZpwaYW5KregNWiUtGqkTYgGzkzMHxunNRFYRoEu",
  "key24": "2zJn3khwdkawmDw23KXohQKQ7qJNV58tTFnEsRKY3v1qV33HUMYUCHKC8nxGsZouFexe9r9k1SQj4TiJzPhmNGV6",
  "key25": "2QfYVBPULaStJs4kPFiT8ymXny1oeq9Tp3CqVe2sz1VBdLQAtEARqC4L6gyHrKTuiJq7PS86bwFsA5xhcszpt6eS",
  "key26": "4zgoBtYWMy4LGQXmDfkvm5iBVA3Z1TTw4WxUSVSx1o8jHTrro3CNKk5uetqY45kRFZvDc9TQc9cs5cMDQAfjugGx",
  "key27": "R1cQzStTE2Mn6hsbbdeb4Q4aefmMQqZSsdXWGD73ATDCG3TXPEBtmxcePhn2JXG6m3Pw7DTCPfAJ87vW3jkTSec",
  "key28": "4EvPfPAGZ2s7D6NRRMZhKJ5A8Du5uts8r1v2tUgvqqPRaWRsAZFycU1T9kWER36jNsiM5mGsr4WegCog4RBSzp49"
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
