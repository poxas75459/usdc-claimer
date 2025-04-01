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
    "48VnczxrG1KPrBiwJ3DAg2k766C9WRTxQebyjvsJNBhhtWE5z1qx2JrMaVnTCTrQ8yA6gbPbdoxUz5C5xLvVmzhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kggmui3JUHr8KfaBTGwR9Srm9i3CABbD4YtH5j2S3pSp25GDzdapg66D9yjgCC9r5M1NtgFJMafCTgqPTyjJxrk",
  "key1": "4P2YcbansccLf3bv7byA3jHvFQvon9xvrgfwaNnKTUhjADPXNM6ek8Z9dxoGsm9srBUgYrKHPVPVd1P9EzUZhVJC",
  "key2": "5c5BfEgNmff37VScaVucHiN4vybLaVy2vBt5qg7VQgsbERYHREMButptx1UrocjrRRjDBE37bDNYjj5CQog8wCEE",
  "key3": "2Gc828W2e2xXbgg4yKTGLJ6tkNg1fAFVdUkrtMpPeARsXEZxT26FwEBzkBLjGnBdUaSkNAcgzRCpW1oTaLgsTJd3",
  "key4": "4wKRuFhTNroDVDkMQex644S84t4VqcUfjDuQ9yNA1K2CGXEUJ3a2FsiKTXdYTFrK7sGyakbxZyBwn7CPGruHH6u9",
  "key5": "4Q22DTSJUVVGjewAodfXbEyuNDwcmFbuwMZdtKRihHCZHUDbzPo3ikvNK44Kbpds5b9vgTatK33NwhHWk6jdY8WV",
  "key6": "ycy7uhBLPsVbZrVm3dKn1zbLbrFneAB7ramQEeFqgEUPHd7w3m1DyTcgDNtkSeRKUtYBhZemPnkdt3NvEZfDTqJ",
  "key7": "5vj73ik2qu2ugoo3JXdxkHqZSjxMNdPdVn847tEsYwhQwoCzCQkRb7KuAPvKi277vMEJdE8jJPS11NkGk5918KXp",
  "key8": "3ay8FCpU6P6pLdtckocdDfwbKrGp4HmiKpd6h7tTQ21JCSfTXP5CrpjHzbYwxnXuCci7mNf7ZK2fYQQmNiNSKRrv",
  "key9": "4VDtgiZNukyL8hy2HNkQG53AvTLX9qiWNj7gvxhsJM8wEE6vkCXUR4nDAtmW7dUKRDoewJcuryTZKQ18WDv5rdZW",
  "key10": "2oGiWsarbXGQQLPfFhmbx9fVjRZN25MZsP3KqHkvwHPEePXyrkbeBoyRQ1Hy1mhRf5Z7u4SKBmQbY4NaTnMznigr",
  "key11": "3MxV1Rwr64cmLQBQG6CuvzAPKZSBNMNKGU7hizeNa7pUADQnidL1c97CJFY1M4RXBwDDq7X3me3MZb7DofXzJMEj",
  "key12": "u3tLy9h5YfNF6ngVs1RfpMdMAbXT5z2PySwGvvQch1XjDv7fK5VwooBhZvPBsXvEKD24Z5tMarAYTypeV6zHjCV",
  "key13": "4JVhcZ5ViPDxvRweCkhZsv7QpYiZ1d1jjQ9scPXmmdBZxKbLjSjBunQ276bEWgBxVEQ2TdanvrQUEBk8yhXSLiMR",
  "key14": "f19UgsVq3KKf9BVEg2r3RJGWFESKFV8XQaXma5UqJxVUuMcRPKJFMt9WRiymWXZJcku1NtuhSD5R6StJUpdNpet",
  "key15": "4p1MVV449edBxN44ADHnzh5Ugdwm1U3KuNaQjD86iBn1rAxPuGpt18EMffyg7zVZWcSj49kqrN7PCgnfVHKfvbyp",
  "key16": "5BFnHLXX4kwJWzyqDbBXTw1rdqQ4VrcuhESkxqBXaxsFLuzvwdBhxQuowVYBMqZAWnK2e5yVNTf23HPEZWZrpWks",
  "key17": "4TyEQtAs4535EKpEES3inYS6KaFBaN73bD9myw3rPKv7snVoBMXmCSbqYy8nVBs9mv3yWnmkmzYWJzkJUCNrgqpE",
  "key18": "5sb7isWPwCdEsc2NdXrxPejAuQUPUS9rR4Yf68qvQLQGXqWUhRCg6ZNvtaDAJaHVcdmJ3N2zyyAJ6rH4d4UrGK7G",
  "key19": "3QSv2AAWfRNZARF8czQsTpkavbpMsFAC9VBD1GWsoySnGR53LTd1bthBaADe9N9bBSxoxKH5W13xAmwDbuaatcgw",
  "key20": "RJH6Rs8Dhpz5sGY6P9o2TvFii1BPRBv4mvWcughHUQzMKmnBCbwGEMQkkUauxwYEJKCfr1zrgPjz1LE81rR5e7G",
  "key21": "5wjBz8JpygcMAyKmRNKb2McTzwMEnRruLVz1ZYkHPkLRAAE3YJDZiUwygcn3hxpnTaRJKCbcLunfDXrBpQtvEWTP",
  "key22": "3Jv8j5i8EZQmavtvCXGy2fC2N5JCEQQwjXke8BEFKuQp3dMgB2PT3jJJDYemV2iS2fwDekVjLksCa6m8TJhwvdAH",
  "key23": "2k2d1vAesj3Lmg2AyWrHfgGViCC71di7ME8gEDjcpuFYx4AnNkhXF3YjSpQysiNFEW4JgFoFVPcJARswRM1Edw5o",
  "key24": "5omVhkTyY8SRJ887baVhfk4SLoVJteb59Z8J8JR335MrsMbpPo2sSqTuAzdRsrJRKmW9KZ2JaZmSWpDo8rBk2rTJ"
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
