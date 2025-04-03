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
    "RkkMVpfW4Nz6eJLhTrbWpMmqXKF5fpE8FEXgaD2q2L87yKR2M15wY7WmTxexip5aNf9w3Uht8QXBR6wz9MAgnH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AvKDTFeCUqpXCJ9knnufLTiQxYDTjjSbTgzXoVYsg893gLD9ChZkcYUAEs1L6GqQsBzDXyHyshiLWokJLe98LMt",
  "key1": "5jBPsRHXHLLUYGKSxWhULwtNebECd9seGVytiKcjwKewwPfQ75qBtZTCsF8caPvVBEig9rifuKuuF4ZXWvG6jdSK",
  "key2": "3o559VYvra27XbR9x4F65cijwSX1xkwmNB9rxibrRSvVFfbERcMYvLvC3eQ9YNy7uCThN67qq4BgUo3RwPv9g9Jh",
  "key3": "5aMsuCExDZExn3eMa6FGkf3dN3GNNXSLw2EWK1RhTLYaeNSVTyVmn8dCVwaa2B5DJC5yPaAKhnWoLMgLh7Pc7CUQ",
  "key4": "tNYpVtYhqxS1fA9b1bPkdn1MJV1LXpxnrMfft5nLeW3Dr5FxTo9jjTS9EW2hJtkH6DZgjcXjNuYpUZAiiDgSfQ1",
  "key5": "4dMg9oK1KsT8svbpKhJxRBQmR4XPhTRDkGEVTsoYnRFedSLG1NJzEm6r1WAKLqXMjjdQbMgViJVCTSzp6pXfoCsG",
  "key6": "4E6ALGGAEvtJmoeGCi2WxUiEntyBEWcJgTa7n1YhTVMjLihsCbUyyLZEhs8m4yXFyvc9zTFaKxcfBjhwjgQD68P9",
  "key7": "5SMDC1H83JaMFo59KEwNtXxoQjqkDf7L8zXzGb6RpSDtvE2tH8Eczi3CFwS3QZb1QEfdzRJCHU944xJVpatjCNuL",
  "key8": "AzLRPgGgyw9p9CRv9J8HHzSeuX1FVSKWyjo2T7hK7VVTrYxMnGTYQFZSxsuN4wAk72zEd83mn3zkULj5msXnL83",
  "key9": "2FeJdPw4tSMSLtWgWQgjt6gtfiRMdJ7mN371abkiJWtYPj1yXRPsPUXDHNXxjo5eFsZwUvQQGqwWX2AD4fsw52JX",
  "key10": "zMxHz5k9fLx5dpPCEdqSGoBvsYhJhn7EjTxEjD7Py7Uqt4ud8pQFheWxovko5g76jFDsiJDHoZWJJMT5gNK5d7Z",
  "key11": "KNy4VbfG5DamAQswBWEuhDbMBjeqzrWSVMcYZkV2jNW37jVCN9yHNmEtXezAnHRFjv76AnBs8ynPwJNFVix6Wjk",
  "key12": "4MxgMf6srgguf7pLAjpkgpsNbUrAgwtd6wsTJWNwJ5fw3GJSfZo77Kte43TtPZVHaGiwVJRo5ifgtexAL6drmsoK",
  "key13": "QPG2StcdqpTN79h1DRoMqCa9NjD3VYBKtPz695a77RXnS8mp9DKH5sVBSMP2JhzmtBKMoRJADBzNDutbbd93jcZ",
  "key14": "4Kro9ygrLssHZGT4KPLnCmECVvesL8sqMG7ag1ht8MTZ2y1h179ooWr8sXJNFwxYeFhdrLRCTUNt8fB1NTQ2nABo",
  "key15": "2tjHc4zAqaPmnbVmRweqitthRSNQXGvq7t684Ka13p1iLGLVncevqiMouozHJhcphByaj25CY6UjZrarGCgRMvuW",
  "key16": "hxcXwu9hEG229TaH9oDemTn2DjebGSMnw6C96Yt4pfeZ8g6bHBao9GKYnaUmr4sGxR3he41sPAJjj7yMwLC2x63",
  "key17": "5z7eeNQcyTaXd5CFFDRxfBc2iFQUM8yPN6LwnjgL7dE7jHrthnkzvmxdAQZQiid7rdXrsBhVxk31SWpR5ok6DZgo",
  "key18": "2kGYBnq4fGrWdvkCzZeYsNBfj71QCbGyXNhQFEyuwg8seBcD3EwCN9dZ6fzAMpP7ZQL1YKCarypp6EaBLpLc9Hb7",
  "key19": "33cbCfx9eyYLj1HHRhbp5SRbFZmT1wnbMTuW2X61isDRiTYXX3NWdPehwLqa8qjNYGGZVx21mB6RyfTL5pcGYNhY",
  "key20": "4Lw88ej3ZyDpZ45Qj2ug1tHgSRGYvAdcu7EqMHwGFTuw12YGZh63hDGz1ogVyvq8X7m7oSWUBMKHit3WxC2E5MWN",
  "key21": "4u4suKmJVSzSx3E3pHLjrML8soksCxg854jngNuMhZ7RCtUuQXvgdwucRs3S5D5yW7zhgP22qDBfkx6o8AsC7bWo",
  "key22": "54qDwznFhCsdbZyL5m85ej6kASMzYRcuw6FPdMev2vxAC6X8uWaDcKsqe2JzUtMPR5F5W9vK1AJU45k9G2UV92Bm",
  "key23": "TqyJfStw51dDwnqHvhMemCFspahchZ64QBhFKBtH5mamwzmZzA3kfmfqnzFfho6uB6vzBVcmmqRWvqXA4A73hDZ",
  "key24": "4E92YPUxsZKJwTXkWCncXMKKXQ5QGHVS32LY5Dqvz9tondRqXLJwQquGovEp4kjndVBeUVE6jzqV9NvuHdUha4tm"
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
