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
    "5zSP6ajdtR9PJxmmZg5wWZLRPsk622uYzhPKQVVqhZrTQtYpgrKMi8WV2G7WV49Dp3UfvGt3rSkwjvdwJUbarfzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tr2yFaFQaxxcCSosf4DPeCGYUAkrgWwzWQ3QxtetMstQWiWrxg6m1EMXnRwu9FuxBHGSBKBiGDB1998751QNZqx",
  "key1": "3LouvzDZY9H339qSrNNoDzWPgGjKjDSAG2k13CcSeN38tB6kpP3HMidtk2inv5Lm7J1mC7iYHF7ER8VaARtfoUpf",
  "key2": "214d45fxiY1mCj7pWt6BQrefoosrpL123Zt9p2yQ1UhqbD5CRReWKnJoTyywD1H8jmjaZ8BTGhn9P52g5tdwq7Rf",
  "key3": "4rhhJCuYn9M572gu2yWbteLyj3nfHeduQQtB4UMvvvbmtVMihyVwsyGFSWjKDG9VjmuNqy5y2WtZo6ByWo3ZejC",
  "key4": "5Gq8N7rxCvw2QJbv7jReku68YhCRH8shWMX6WULeD2BLTxeTBwti9FXHZ6uTxA7CYD2GWTU3xHofyZrCbYVRWZZR",
  "key5": "5NsT48gffULmdrPfgxmPtrrQbMVhkovAPnjdCswqavRmvKKR8p27MXG6bcEgnBcoKuBiw9WFGajkmELH8rBJ88V1",
  "key6": "57njLtcqmBUxp84o2pzjNvXgoNaEG9Mc9VZR2wH55eB6SRM3HhA5DouCjcFwUmqc7fcBZpbSmjHgQaUNyDAS1UVg",
  "key7": "5R5Y6g5DotLBCtom86qFeSbnk95LqgDR8vjTrfq7YhZBEDfXZV7J5YwJx566AFUmQqYZW1gbuUikHoubJj6rwq46",
  "key8": "5ZsDF5HXcRnazKUWZk5YtuJXqSGqeDyHRLM8sk16JAuPjNNkP37xH6mYZB2ViRkJ2asYHn5Z8YQbVepmxtfPJJmx",
  "key9": "4NV7o4LEDTBagPkL3NzAQgQKvG3RBfye7baDcf5J2xbtyUyGA3d6ACZsymphDGSkeNADSqXW6HAE6VWeC9ALRFZ7",
  "key10": "4JAtEuPd7WcQYhvozoMUzAcnnT115kym6KVFWSTLtc2gF2G8BnRfNNBAC5rJ8AkhG18FCdwKnzBSt4QsgVazZSJX",
  "key11": "3DshMovJixUMKmkgkz7DY8M2X9UXRLVJKaYN7DkYVgsqQQpjYEpcG3q2Zs8wkEyoAREApGzZ3Sf4DHkZnhCWXWdv",
  "key12": "3At6HXagZ8z3zHFMC9rAWiZz1kAHBAQnxo715MCy8WkdLLmFYNvyqDrTf9vgfcDBR631eFfxq4BBuQxpgExzrf3x",
  "key13": "4mXJtex81vAkqBvmZPN7mfFpnCohb2Br75besEY3bjtvf9TbmXDCijkpREkyLekuHy6dxDuHU5TcGgjG2PF2GisG",
  "key14": "2GYcwv4kWAcX6BKVLJ8L1hVHuN8ZYKXB786eh3PuYk6kznXVedXogdmdBJKi5PtTvs9MqGa53tucU1sh4X5SdwuU",
  "key15": "2hP2Ejp64TtgKuiWq5cCYGB93Ux6nbQKDb76HwJaemXkq6bxayto1n4LjVtUSsEFxn8Y7RT9RUGq1dzw4xtBmcMz",
  "key16": "R2AwADppQkaxZMueLEHacMwoahuggk2Y6Gd2qsr9AVHu12mLKDCw74ny2MtY1vdupaCkn8UtyZ4e9dHTjHp1Vjt",
  "key17": "5z2pPiCZiX1cPTZasQFMUg6kRx2U8SHxLmErL56XcHhJZ4zXjriC3mtX8YvBcoSK7sGJeHWi1dVWQWoXXACa44JY",
  "key18": "4NfxkwbuoqvFpAU6wwSJtpP9wDLUnHM1uTFJjdcvECUSsd6hQgnsMXar1Lqb2w5edApGayWzknfi2GjwWiAbw8QQ",
  "key19": "3EPJZyKmnDsEGvLjnFM5bUaE3or3MXNv8LfaSxnVCe1BLK6Q6X82CDsmRscxSdq5WizszF9ER82o67s5gyTfjJza",
  "key20": "346Xf8YYRNs4VUnRuS8JvQXV5kkCdZtokdUe63SVGta51zTAWWaNXFHT2p3cCLzbfBExk3rXvxh4xaWXSoY7NuRf",
  "key21": "2Sg3TyiDtLtQSAJdYYPVhGp9xCZd8E6awbX5SPc7rXArbFKWEJTDRv6oPnSUuMYGiCrSKRWGqyByLWtAscxTEbK2",
  "key22": "3PddbVmEEPxQBhKcJ9R758F273rWZrrnAwxxN5co6GUUgjSGf65oNCp2CttQKyUgUE9zER8eXZhkyvqUVheLUxTg",
  "key23": "5cduP9UNdvBfh3KSc6yTKjUpRdzM77ujNmhWNg8J4y6fHeeoyDhRyzV3yAXUtcoMpKByoRAy33EuqfP5HUC6NnqB",
  "key24": "3WxWTeufJkeiSvWvM7PuXM3HLgDP44TaB4hBwyQ36EyCVDoQeTPGGJvBRRPvaSSwGbisNBXTtb1nJ23KaiWdW17S",
  "key25": "65jG1kfeZvPovJAFwaSFsFLy84vnSkKNee178jE2HkTySBkaNJE3E7vkh7kmiiSvVF73v3Rz8bBHNk9J8X6E9Wmt",
  "key26": "2ACAfV6BrYToBTz7kmQ5ttZfxSjbeSgryxm3nTtvpszrAtb959zp32Ren5ECotBWZTz9MvJJ8RdsjYF31wh24h5P",
  "key27": "3txPrsoWpkMn8AVLXotyLn8njv2FKmbdPSjiqENoKcpvh8ZGxFYqbJUGbQR7mr3cbQfMjY2EigY21VaJg4LbWcUK",
  "key28": "2MfMq28yVcUwWb8oEEkUHvTQpvMjNGoWSLKS7mvAQx3RrNzxZxPVSYfUA6euyGdBAr7wTbSGzx1ktX37m9hJcfJ8",
  "key29": "4GwJbnpL6rDP2RdEEhxXzmuKXG24TfPsVpCEAo4fU37EBeBvT8LZiC5kBvG6cBtSsJ8g9tsu3EcPCkB77smRjCQe",
  "key30": "2Yt22T1GzVqPDgR72tcUm2bLxSjcuqTk1Z7UzN3HRVz8RpxVtKzMSvQab7KurcJhdBmCKAkFui9K2MRVbVvwKnqc",
  "key31": "4HVoyg93HfkY6nxwpdWXKgBxX5dxup2cQvRNMHQEAXTANAE6GPp79XKbva4bz5oWVqMhB9Kf6sBB2AA9FkPzDyLC",
  "key32": "4eG3qxDqGzNceVDPbFxWrCFbKGRFksHsCgEFsBQgTf3g7kieMwTp4weYi997gnHVxtBbdRkogbBMVk3Xi8EJHCpj"
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
