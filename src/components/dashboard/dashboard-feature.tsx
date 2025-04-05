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
    "3o4DW1nenz6HaqCVJn89swXBkUKzMakgfG3YSRTEW5ZErr9WK2aDmbkGcfZwR68CkLBGVqJWUzqw4TxxU7hSbVdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TFTQMDBnFrL79KUcdk1qCr3HUTHQ2jj1AG25tWmwtHsHTYz9WwbWKSdW4z53Up3ATPgC5GK2a47GDYyzamVjujc",
  "key1": "2yBpTWUufnGZ9rqyrUs9uRTJiQiUK6Zk2vhdNKRAu3JjE3C6tVTHnSNCBEpA8whbycK9VdcJjm4pQyeikBGQDZCJ",
  "key2": "2QFKjKYaBLi1cPjAmC9zfqW6MJQqM2gDqhhBEQPf6NQHsi8Sj6FZxBXWNT88nUqSuZ1Tm7w1mZchrWWvfMELUKsc",
  "key3": "4f9VPnkoZCx3bfzLJ3xUquaqQ5ThWpqtDYkmXb28KfUh9xiNgXmEkr6Q6BUCRZVv9bavgggn2Y5zrNjgtqriLBYu",
  "key4": "32cSNqN85MfqzNCeGrfuVVvXPFveeihRtpaywdPg6RA6RZDfm5EhDSsn75QXpDnqoGP4WjNbWJxvPDVi2MaVE1a3",
  "key5": "5S4M85GQV2AtLqcWk5ySvUy6SgEBp6mysdi8YVjHLy5DCL6KnafatdbnGxPbJftY2hK35B15nd1CZfXUgTkDmj2a",
  "key6": "45KWTVSZz83ZLCeiKwytpWq1jPUFLDNQyPh3XRTbhf5SC2rnLpd5qF9YVWVGqZSqxLZa6KujfdNB1NvYjsCR4tU8",
  "key7": "2ax9AMb8btu75LJAZWdXmECE4miU7XE3arajKWU8mAPmKyDLjKNhq7MPorj9H8Da7Hhi1P2PzBadU5dL7kk41XPJ",
  "key8": "3ybxTxk1FaKxiscrqoxVuEqhMVbwFsyiuqNWbfYVXFgf1TDgmgATUgRejqk8dQ5DQ2qvVt4KbJzYh95hSJPqGKLc",
  "key9": "2noK8Fk3ViLL1rraFG71DGnEmNBv9CdRJV1z4YLRHZoft7zr95U8gmL7STpPPDmZyajvZ51UBioCxEVGjttG36uz",
  "key10": "5YhXWC9TRvXh86shdUzGdfMEgrR4YUqJMAy8PLiwbNax3JncA4rFUZSTbQWiuBQNTwLX473aqoDUEc7sFoArVBGu",
  "key11": "4NBkxRjL1HW69CMJtZP1txFT3FgnhBp4jA4WXL62dM1BVcrHCEXEusMgTxn42oNqpfWR36qQNuTciScuLJBT5YSm",
  "key12": "4ZBXU1AsMKhfeR2Qyk2PjCMejqagSt4ZsCMK7VVRB5yJK8xZKRxmwT9aUWbzZHwFH8v1YLisxApYJ5cpZwCQN1ut",
  "key13": "3FkgAMspcnDT218RVA5KeG6JVUhFkonPZLqLvXUik3thiu7VTs2QT6Gb7KcLTWLm9gLugrjQhcGrqDKkrYRshRdo",
  "key14": "3LxVVhoaXfzwNfzjVgdARbx44zwaZFww1pX3vGDGwKus6SgjQF74TkHTH5SV5AnBfFTkjHvEd5hYd3faUpQUbeXj",
  "key15": "pxJPZoBKpjQv8GAg8nag4q8tJqSfJ3GW2eYhZnrJriYt6kSnSBciDzqwKzgCVtbobPB1VWZPDbgpCdPBDKLx1Yb",
  "key16": "5bVqDfKfjY2ts2Mojh4kRD4dJCAXfBJ4x9DLvKRL6Mv1dqLtK9hu938wfYoyhG8jgKi62JFAnUkErdDyDYSvSjyH",
  "key17": "oVjQtaR4gQK1h37KDVjaHKenWypQnkvskf6KAKNGiemiXCMDVQFp1vfb227Vzs6H4BusU71ZjnRSAGxLWYAX9PT",
  "key18": "2k4w1cK9GEPoQqpdD5nAEJbv5mZiQYXpothz5h3N2wVk3TTrXhyNpmPi4WtcSHS4MiAZUK57vfY2n5ziBQD4ud29",
  "key19": "278ZJcF93ryheKGaEE2eSN8cSWxhKwZ8WKitTAMw4VTAWtV9tRNkfSykdaGiivU1iykPeVSx6q8YNNcNyUVzwSZv",
  "key20": "26QiBETwyFJFDAyf9kaYop5pBNjF9yr4oF3VyFyFz51Um8wSmoDjJrMtLLNxZFxhAQx5UdYKZk5khbRgJZdNYpad",
  "key21": "55sJhmCHrtbD7v5qgmKiRbxRSf1fvYkg6kbKYys1D9R9Q3tg68aQGrAfCmdCCqdoV4ysgMqeqJu3gS8GWDDkMsVb",
  "key22": "2AwWiga2Gw9UVTyorQ8VnbycQXWjRA74QEPquNvW5eB8zDqmkV8aNTEVyxYLqavJVMou5RLunSFeiSiStJqW1CB9",
  "key23": "4UG72MLYRUfeSTZ3TmbmVcQawjpaz6KVUp3yTJq81uBUaRuRi5rJUTi1QB1MA7EK7X1uGjYXDTqytqRTjtLKVzVH",
  "key24": "56jJhx41n2oKnPf7r8ehVg5x2ER9xYxCMfb1dcRoSsHbQjaaVCu4S2RikwyFTRFbTHFkN1AtuCyriMJhVXytJumc",
  "key25": "3S9ZNooK5xxXHQim2qBkNyDH3E2GKaPSofPorZN3g4Rs1d7wzHZveSCwR6Yw1oop9EdBsUnjy49NrYHXnAZAhFJ7",
  "key26": "4XW5QKFW5qx4jBi5mKgxFASfTDfaAbmvhV1PMxYprw5BtMSN61b42HSsX84zYFkcdmQ7QTTK6bfyQRshhKmfEZP",
  "key27": "43ctVgeNJNb1KSgwGJCkMBtJbhGsXCcR6pJRk72pTfrCYQhyNhRGv7tjbfkHNAewWyZDeRtJsLDzY8RDVPtAj8nY",
  "key28": "rWSnqcjc1YNzDHAxd2H2oxFge1wvb8X21oohHRM84m7nnmfLMXkivpZ2EwPfdjBnQQRRKdhucHBvVKPMVZcHmFy",
  "key29": "3ptrmNzYTxYrE4d8vPq5z7y7Bzne4dx3cAUwebVRjS41HwTiXeTgpo59r7UjoDDXrKakV3yam6FmS3QNuQ9VXWSQ",
  "key30": "5JMumbKXRzF9w1YK9JPkBVtGXGvNDjoPATywZ4YJz3wViyiyUuKGr9Khp3umF1rG4Gk2PJUGQGGkyXv7E3a5gbeh",
  "key31": "2xLoG9b2PmV5yAcq7D3RheBsmtSrvx4kdhNqKTPidbqEadG3cjU1dV82qsxvUNhS6BcCTYeTExiYjDpjznZHxW22",
  "key32": "321vDJe6KQT285vKUFZgsb97Md1McaNUCV5hdhMXtJju2Hp8ALwiVrZWjSKRBZYenAHhvLw8rNLkKgAZNCWZx5ec"
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
