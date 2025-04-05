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
    "WWJCxipmKgw7uoA9nxTPa35Tj9hkRoppWd6G2qLBVfMidYoMCMtvqnz7PV1yysHx2CcMkx9qw6LZaAD3UaWwNcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oF1ZY9xXFL7gM92DqmxgBTBBWHN8fzVjMyUTyRwvK6FATwiTWwLr4bqPxkDnfo4b4HvuD63EJgGZAZvTtmbuU3a",
  "key1": "4sM7aE2odjgKjK6ixtYuQt73eAQUZJZBbq1g8s9hGTWoMtmSM7STubaYD2CkNkDsLzUHsYkDCf2bvM94yEe7zbZQ",
  "key2": "254F36W9wB5C4x7uMqreASQ5JGj1AMA8Dw4JX9N3zPhxrcwrPHyF6pVKFkbZPTWW9sRsRAMt19QtHhu6AjHQL3Pi",
  "key3": "5kcTYTuYnoUemQeosu6HbVpJKEDHwhFD2x4sVNzeVHFojpng63QCS32dCKPo2nyfuBPd6WtEBctMC5S8DJMNcGoo",
  "key4": "3qf5P1F1UVoQuzSWmzzWqeFsSSrHtCkbLW1hDMFbaXjQ1HEcF4Lex7fJT2kUgDwoabQLvdPhfmLmGS9BTe4zGTvw",
  "key5": "5PddQx5DYn8PrVDvB36TKU5y24QJYXtwWbAVguTpRFVrF6HGkEdKkpX1pjwJksD6KnAsAxzef1WEk4WVGNmjzcoc",
  "key6": "3Bot8wK3CZhdK8vgDf9gqtpZ5Xavn8mvHEULnS1duszeK3ZgurQDx2niS6Z1DP4ELcH5JDSyhbnawDaNKY1pCDiH",
  "key7": "3PFFp49zoj4MNh57d72w9hXJX4SgabGRdjNQm8Tj8a7QSZxGYz9G2MajRmS7siAvr1E5LrwvLhzF7KdeKmNNp3Hr",
  "key8": "H5sDCCC51NRVN6bXiZqFRrEUmM1Ud2UWJfJPrPKy3XEanxy7S4HXPwXcPLkZZsuCrbgmohaWx3UCXDpfsTgpvJW",
  "key9": "3DPjjJjXG2etXK61tEMxBVbUAKfFC3PqSYe2FUmiFEkFTrkAtqGJjcVAMFFevTeAXwnZNJFom3nxjyPC37PSRGYz",
  "key10": "3rXhtQ5VaTraotZjkBobGVzL8UevP8cwebDHMcQdp5rQHiVKuHQR2SGXF7VmyG3y9NpXL6Mdi15vfrBeR2XUtH2H",
  "key11": "5h6zn8LUxCd8MJsCJyn77FXWCnJZcKhJxCuHeD5PR9XL25TQDjuFSsrrXWvuBh7ukZVR4JpcJTHGdZKc6xNJKZEw",
  "key12": "951FSe2b6NnuqyVQx31UMUpbykyStE6VWJpHp52bobzkjJhcPEJtZBRzMyH39tfHz24rg217HtbTG7aUmvMX86L",
  "key13": "3yNDQpk2tECmqyabtrxEmB6H4PwMfwWTmmw6ykkzomaMEtcdvKE7G6LH8vkzrXiao14xUZLfRTufW5Dngzs1D194",
  "key14": "4dBrcN2WeZxXcEoB7wcjH1Yc6JGaitJcW8VM8h3X55rkem7LWJR8H7EUQZJRGVRPzWxwGqKEbArBeenQAQav7HEC",
  "key15": "5LZBjYKT53y5igbaL2ASEchPdKWyQKns2C6KqjQ5PLnq7CmJrXAvZkEWATcRHZX9mzjuUfAJy6g6KhoV8SU4S6Cr",
  "key16": "5bvAaoDJsirCXJX1YGKJhR3zh6w85eCLof1WG5zhiScgSW9S7HtoYVax3SsGaVkqDR9Vogcwy4mMWWAKut89Wi9Y",
  "key17": "64VUvMiJvBo3jvUyuAjsXoQw14dJT1peDj4cjvVoWiWHQUdJsnSJ1d6qo91q9kr6i41qD5R4epwY8NL2ucYNnrgF",
  "key18": "54nwfgSD5rExXnKPN4ttq5ZPdzpbai5KB2cPEYTMHzBnwjs56o75AypEiB5e7c15xPPbaKNoE4eoN2GjBCpMYUTY",
  "key19": "5TXqVJpP29jo54BJCeLDNsxUcLWFMuJMq93KNA6W5wYNJPgNuzToKzsfhRzt2Gk1mnNwcXAoGNXV2UGFDYCsh7Rx",
  "key20": "4MWxjaCsyEQYvaXBcVVKXbxzQVZ3wTsp98XXNARmfA2kXaYTJcnj6RgJy1XxMYYv9htSr3S3BsKX9h79zuHFtecH",
  "key21": "YqJcxqqvVk5eb9pD6eoSZ4ic2iU646FzZLcGvJnTaBXf6aUcAA8A6efH5JpbdZzoojirpu5fFNgnbmH2bnUPAT4",
  "key22": "213cdoqcVKxuyhJ7tj57TQcJ39YbH6bZG154tZwixdqn48oqsgd5FzLBuQhgifSQrNoF2URoLwLtjqmk5YXA5EWp",
  "key23": "2SuaGwSx1VkQ6FU5hM35huFFvWdBnc7xAFJB3NUC9yoC4qsuHuswUscgwrnqX6j4GTMeyNEXKNVpJ8mtRRw82EtJ",
  "key24": "3kUAKnSvCVXu91gi2YPfUwUTM7cgtn8UJp3g1NN5sJ7EmZaXFmUKC8xJWYAhatpFjiNG6aT1QaQQxNiAb2Js1E7i",
  "key25": "2aCuRuUwzBBAs7FKq7HQ7WUxmbwJfkYc6wKiAbYtpPEwTRJPjRxNy7eTS3q6DpKj4wpPhbRbY4uH38cQMAQJJKC6",
  "key26": "2wopSEyWtgoep1ZLNBGPUef9X63US2cnqGAjxkYjVMbenFSZv5Tmpa8LsUQsiF1LyE6NdsekmTbKyELJZFiC9zck",
  "key27": "66iQB1RfR25DowQtzmzxCStVtmDUUJXk18EvzauPvbDEAscMwf6ibTfhjEJFApz8gZMX8E3hZeGNstmEneVCAPKe",
  "key28": "65PAvJeUeei54ue1zUr8ZNcYqUBoxBpNjoA3Syb9Fj6RUfxjFpSinrjYgSUYPxBrx8WUuXfAd3BgMxcYUxSxwhAd",
  "key29": "3U9Tev58UvVAnLf2TghTq8EWtdVVDS5DJjVktWEkCRemFUYvTA7vtjwCEakCjTPSuy9zKwW9J3MoBrotMdyJxqD5",
  "key30": "oSBVxXuBivux5pSKn2CDnmbHtsaKyGLu4vXRmADDYRh1dBpoVXgo8ouRrBm6NELouJfo1ze9nRRdojG3JrCwKBJ"
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
