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
    "DLngetSKgAk2pMnmFvcBMrtJovfRojxNSxYVVmwXEbRzSqCbmtXNANvUUKrvLgzLXLYgvXQmF1DM386kN55PFt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ouJc5RyMSkpmRsxt7MQwjjjnCkkKBMV9iJUemwALZ2jSwUBQpvh8zNHRRU1Zc1efKYVLwvZ8EyY4GhUiWfTf9hd",
  "key1": "5znioHSKeYk1fGGypAs7NPsZfDJy3i3FiyvvQHwV9sgyKwDvG6GguP4Lb1LRFS5S36BUYywfxM4UL6e1vvuRzZkw",
  "key2": "TCR3k4n6sbH7gjaFQTPrXiCThjrdE127XiiM914vt8E4obXJUXv3cVKd7xfvQ59nqtMhbKxPevSba8bEWC7qiRR",
  "key3": "3n17aK1TNnd8oaxUSqtYNhmpzJDAL3uescgEgUW1CgzALf99iomkWhGJfB9FLGYYjnB9c86JwSZd2DUHXMd6CM3N",
  "key4": "3Ltnreuy7b3PXxCWshkQsy5JFJduXyE2HhLzbpVK6Jo8oPk1EJn7ZtnZQq7bXX6ZBMw5kznUGBzyrbhQWaT9sKFB",
  "key5": "4eqiixHvnTqSgWzaRfpS83Qr2C7XiPZs14jeVCx33MCUYg9VfmNJJFJsUeqWXAvRNWDy3gjFnz2LGR7vaCEEHs1p",
  "key6": "3RFbUEf77PCyv18JogUa7XuRxBcCxe8wZxEKHNuCTuymsRbD4vuKasnhSyCsJDRymhjJuq7uo1my2LqCqdFuppa7",
  "key7": "5o7oSstVHM9gzyZDBfTc68WJDtaLnZG7MYHLkSLjNuxdbJdYVgocwV5tEWjiyGw7nXbhRWtkVnFCoumcG6hS98n6",
  "key8": "22PcQbv9hqQBTMrPCVay5cDGF3E48fQjptk8xBMPEeb72eoCNi2aXF7c5xW4R1QvD5B8ZVoeuBqdPLWzgg6eyrCQ",
  "key9": "mkuyPpguqzS5FyiahM2qFbekSpS1dXBYjWbFyTnj9GNuu1bNJcmf4vHb8vMTG8GzvkoWHDGsKjwNCdXK8HY5F5Y",
  "key10": "3LLvEcLf5NR9GWyicfbXrp5p21nM4WNdWstVYB5ffshDDcdTasp2Nw1uA4prvHnPmsijzPhqrj1Nma4AjeMKL95f",
  "key11": "R6MefZkZnvqgMZ2RMM8CZ9X2FWpYKJMfuheQ5yHtvkZiCbWYSXLyTZ33ZFXkHeL5iRNPdiGzfXrocLDJm32juHf",
  "key12": "4Gz2PwZeKvhFi6hX7MJZFrhrBhR9qCpPk2eZSpXgRn1NoFQ8iMH8vzjPeJJQ3EY9A9KHdN3iCpktrnR9otCK6bwf",
  "key13": "3o5xLm1nibiVVNTuyhxqaxw4fFSnssaekSe8HJoNauEeGgiV1uAnxxeEkUncLdwmsqUqrMaTLV1xWFbCZyS9JALh",
  "key14": "cm6Y9crMuiBhRdGLPig7rfJgwUG7V7A85673qF2JosmA6k4V3HTByiZqtfbRpvnsh1C2W8eY3ysQbDx6LnqmYGr",
  "key15": "5yqLbTmZ4XKTNWjSG4z7Pao8ZSA1Erj11sa6vb5BwupzSTC1QL5u6q5cGaxUy6XV7quEtjxCMuE8AVYz3fHZ4zk1",
  "key16": "4W4FaRcrRvHr7FZrBFZMcX9kyNsuwCr7UCXT73h8HznnBUdbq7RX5CbJf6pcRifnbRiHgZtWheUMHixfEHkxY7Ly",
  "key17": "5o7cKeEVvC9Wq5X2whDt9ZPkvGJTCU5f4KSeS18Gc9nmq1qvhLcZE5EVkNRUzRXvB1oq9599fdL1GMHMqfo73rUA",
  "key18": "bPd7zCoSkUx7MzTi88igFpHCFiDyAYffmmAUKJN4CwyGJBeTNFzyhgg5aYs1HRuggoP7T5xg6HQdr7N5tchZSWG",
  "key19": "G4HqYc1d6qyjbpmaMkiZGwJXkdwEJCwunvC4tffV7N5pC312sA6DpVWrhjsQDmjFd2tJCguEM9cz5xX1BVkjVcU",
  "key20": "2WvnGLnx5DkmHnfDiKuJmLAaApCT5bxsBRzqFvUSCqBmCFhyFw7pZS7e46b7UDT8i3UAUa26XzBYks2nXut7v1r4",
  "key21": "3RudMX5rdLbpz4h6ewZ8muoaCmqPZegdTCa2tW9EFyQ9MkHpzZi8dcjUucqqGbVNugtCxLmjbd4C2gGQDSjWGa4T",
  "key22": "4R14a1co7zAZTs118r4DcKmiQGiVbebGgqYYT77BiNvVj4JCfxkgaHknZTFBLNQcHwyu3m3auAwXwhgFNe49NE6K",
  "key23": "dLyMvpUD6LmKFvTXv1wwfysuCbW4op2L1NVv4gC9ZCyiVuhVRCMoAKfPThJ3buR4pVwFJCME8MzVRQHnfKX3wFX",
  "key24": "4hphjUUbT2rESzkuPuDPGBZhiUtPJBmq4krFFtrit9AH783xGMF5qnRXR18XwxSgPwRmHptPJ5AcRtwV7R5z3xGb",
  "key25": "45WsUcp5YPyQRod2TVQSszTsAvhoKocZvLtQqTJD4pDP7gob9Awatuge7ESiXRZdJEXHd8i8FsQJgntCe4X9itBJ"
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
