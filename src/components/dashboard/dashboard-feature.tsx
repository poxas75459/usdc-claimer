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
    "3z9kCkxrxUxSTaddQZ2rMJsBMJrViMErXAH3KrauM8Zhrq8vVyBg6isbgVmo5qZbzDPvPbYZGVc1YDb9j3PexcXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upC2azHY6BGr7DjkkiHrPu7AWmcgebDCRirBE4YqHVxF8BkCnLQVZZfyuy3QdzBQrApkTi9SfApuchyZT5zswuf",
  "key1": "BPahAoLhdUz3pKHzMBVM7Qn9Mhcq5RMR97eqhK2xqszq1DSAoNyWyZwH9hfZW5HbTZUUkvAMRH2eynTobpSvCmz",
  "key2": "35Cn4p3zxUfz1hmqhkRCRKgpFitrtV2vSnu3b76Mg644kHDFd5uRFaGYpz8wWpnCgEouXFJ58rZMMiT7c5Eu3RYL",
  "key3": "4oJ4YjvhReg4PzwCHagNFRRxGgiXhxN4jvoxshZmWZAgQKwiNT9oU9vuiZ4BFxVP4QM3NNprxJyJMDWnMdSfmfr",
  "key4": "3F6PzPs616foxd8DMfh4EXEbd7myFuspe8pfCwbM5MwEejbX8V8tH2UWCq9S3YBfwmeky17cSRtvLwCAZSa2bzTt",
  "key5": "65o1whMo1YjHQ1S3hpqeuHsH8AQJkrHXSjgcHJugVLeszT2i49PNdbBXVozyxrSEv7hhbwzGzSva8CxQCVezVrxt",
  "key6": "4PTVjuZPpUnBN6gkaEMu3XkpLYKk4sc7eB52wm27sybD8A1EFizc9wDzjzrrHjcK59bqv2L61udGq9R94gyCEbrD",
  "key7": "3pBKnuncUs58hpSd21xFQYQvkYYYavusc136sWE7vCVT94AVkzfHaGdVSnjMz5YMLaXbT8rK61XTzyRef6s1kZqL",
  "key8": "3EDCwBm1jqSNpG8uJY1mvm1HbrQJRjv7ArRwizKpZd6NYeGmBBvao5YRQgftzBQm9LZoSYy2beXAwga7kefYJF9Z",
  "key9": "3BnDuDoB6bPBJNepxtpaR8W9mdvxxQfV2xffh4YdFphjZ9BRQiq3mqi8N49THNPDZhvyCZh69gzEYhECVe29DQVN",
  "key10": "3Y2RkRgpqVTQyD48kMJqDsJBY3MePjUnAXh91nAcGvmKXrf7Lio85frSA5q2cs2BjzHDvKFMoxm5UEskYWmcVVSF",
  "key11": "2w1n26zaF2uCJiZJ8pvcy3wpA4KZTQ6nj2b42MFEq6uRq6H8dniYapCshKGvcguu67RKdcL9DqmYRDXPa1QdYNmT",
  "key12": "tSgiicj7MZpJpKDxGrrNYJxatMzQpF3feEGgN72w9QJzs7Csbt9R22WitaTPqRy7129QTvj9zVeyVMtBEaMmTjg",
  "key13": "xuzsmZjQt4xhgByrXrayzHNoET1CeaXMESmWmc7HjbrjTt93PKZjuTBmCoCjYuTohr5gMhTCRdJZ9mBJE8p7CQc",
  "key14": "582otgx7yujSTpzpbaL8PnJ5gDK93PCPkBpoN4FXA1hr3tVpoohvWRYaKVNEkC7deS3pmqe9rdvrSi8of5Db9rSL",
  "key15": "5wg6sVzJyCa6ANqLo4vkwWbiQa3DXUaGqyio4gupvdSGYZekTJuURthKXa78vV65kJz2ngJLz1pLf3A6Fzggcbro",
  "key16": "4namhBzhSnZc1en2DNHXGqEpKyHVxvo99kC4a1c74cT1nSMwtvjQ5RzQ24GvYBx1t9m3drLNn1iBywWCXKAKr8FK",
  "key17": "3pb1je3XDXnBC5Apdo1uZK1apieV4nVGe9emVcLzkjBtfiNhnXyrjVFnr6ioQA8QtXJYd9GPnaoDvTS3ArQ5e3WL",
  "key18": "4CViHZ5juT9Yp5KqfBgaSrLZKXJejmUHVxQW6TJFFnQnnZacduB5TAHzVHuKrHtwRHAfVsjjFtJCFTxui7jz3npz",
  "key19": "4BQ224QPLvc1KTx1zyEvLsS68MNjfypiZvxKWZC2MWD2pgqomcBkFFUDMRbrKfsMKX6S3t1xobNZbYgkPPkzttzh",
  "key20": "wbo1cs4s77QbTt7zhxD68tqAgspSHBprdqLzoz2zMKiyu4cDUJgCkMFaDoWvJYL61TZkhQdUFkVzWVkMiX9udAi",
  "key21": "3kSgH5BEdpnCebUQApMEgjBfzzACdzkWfhf2rtKrKTZch6cZB7UgNcx8eyLVHdurJ9HJemyaVrcQwWAHZ35BzBTV",
  "key22": "9KVFHGhjCkQxdLZyPYsgdZHKYiyR7jxLnfvSeyv6boVuFntZNS6HQsuLs36jNqZkUEHh2uZ1ie3PR5Hx4LQxS7t",
  "key23": "4PEyfXcMjPKXfCu2rtYm4HMkqPUhG9Nctd1ffQpiBmThnR4YDYSZ1RDmtHRAKGN5AnBFpeFxLUDoBBujQuqFi86N",
  "key24": "3EwTPQzfUNdy4q5fjyX4DUNYLiqfYQqS3jYRmisSKz5cec9HnXbUxoThMnG7yvVs55NH6Ct85b2SmSBsozaJJxNR"
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
