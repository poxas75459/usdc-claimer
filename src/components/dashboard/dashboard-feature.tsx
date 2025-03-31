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
    "2d1NQbGHYfRfieR4p6xUHgjxmtheTPA8GVJPHMtARWWB89anni81xhuqU4SNRBNoVNK3ryUmhrDnPUMHN6dEhdqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4BrCrbZjt27KyBca3pa2bBh3dbKVPd8bntuTM8BTTcBydMM5tiSSCz9xfwrL8GLSFhM4k8LKC3R69Bi8XuPCR9",
  "key1": "3R6z8aFPgeV13VyWw82EmKa7stQgLwAr8jrRWkGwYfqVbPGaqn6pNbNUSyhP8J74WpaJhZf5hS53qL3YaWnLLnTf",
  "key2": "3WqL7MRKA6QhVzAVkyKTXkaVB3CYVgSKDsGdXEvRJfXzTW4fiVG9wfdTie1RwcEkPepgZCVHCFk6czEd9Znq7HMQ",
  "key3": "4Dki5CjDtbzLi2h2Uxr93PzvaGV4N3Wiy1U5fHBXB2avN4N3ZJPXnrayy3uTNUvW1hHYkBQ4fsZ65uvhEbUCdWwX",
  "key4": "8vLXT8jjEgVfA3X4av5pUajnuQW4nD3SPNgFavXu7ksWcdco5QEhUKzkpRTn2XnqREn7AnJMQVgxGsy56Kvwviy",
  "key5": "4StBHbb8fH25uQ76xcVqxrhzddA8r9DA8cVLfr79FheDTBSzKT6e13tMvZ4xPSveMbBxEfn8MLe373U65EXohnhM",
  "key6": "4E5oc5feErYhU96wRq9gxTWqM78rrVjiusTjN8BwpjcG2AR33ipqtccr4k7XRePU4Ug3yf9Rj3vEe7K2WUddWRce",
  "key7": "2cvFP8KtCqPeWmPb29nR71AtdQwughGZZSNAQExoChxKA7j6XPaJDe12EBUgjMrPjp89JzRWenjBSM9QerVpuR1b",
  "key8": "2ae1Gqvg2K8XfcqM7m1ZXNsxXc1F8eDgUXCgaApj4TAzfL8MChKrw9yhfmyFYoanXeViQT6nGEY7QavVcD19sHAk",
  "key9": "2uhw2TResKvUPD9Bb6JiMYXVd3JZ824i7jPsi1TKtRLo8V1E61eAKiJgFQgjxZqXoHDkdyoDRkwoWiQYfQHkq8iP",
  "key10": "4CudTG9x2NWAuRHmp6bGeL526MfqMcbNWwQWxuraYLgsy8dMmG5bseocKLHKNUgANsR5K5eF7Tp4r3CQRPcHmwzT",
  "key11": "31cT7iLQV2jg14RDWV3B3qhTXu8urMhJ78FTX4mNkZgqULA9edco8CCcVBCuCaD4ij17yAXN5BfGQdyH5ZGUf5kB",
  "key12": "3v1WU6zwas2sYfeeMiJnMsU5SU5mwUnZcrFJXyaX1Nsbxkv8bmTUN492wawBNGwQYkBseF7FJKSZQ6rGnfMP9wcr",
  "key13": "5NmE1tv6xwk9hDdAj3Do8QuEPhbprNcHNrhAcG8MbbPcScmdtBRkDT8623EG7JXR3As3yswycsToxen62C3GywSp",
  "key14": "3yq4f2YFozuovJqKjMVVxSREtJXP6k86JgNjr5m5a3NGurKXCLXZMZnx4hpDxELKzXQ4SZipsyfYB6jSYzfC4qC3",
  "key15": "2tb7AyatRmjWLj2YVTnBGwAT3H65XbXboy94S1W7nPHDZZkay3qDiRoyxjzoPxHmuBZUS8PGggvSvJnwN9YjeHzT",
  "key16": "2BYXUDarqMwZ94oL7kfk3mgXGjDCMsdcRbkmGfGNEBuc1mMx116MmUS2YySVqxQVpdTJAXoCjSdk9L7xXy8pV14V",
  "key17": "5E9bMLMvWCdWfN5oEsjAb9rZEbHNzphv2qwFrr4yjntWa1cN2UKwUwoKJh6WPFaft8fq9ixhU2LpAr1fdN2s2F4x",
  "key18": "odk9X2A4N6yiSk7GhaukciMis1bs3Q2xjQLLm4dn3xDGTG46xK1w2pchqZDuYdqgX2AK4p8pmKrfvDnocDTNJij",
  "key19": "2Pkw6np9fp7tbinqUCQ6gqYDxXaGg5kAvRbGiPFX9VvN5Uw5bhFYTV6gGhn5o8u3MxKc4bA62jTNxgPAQsPVs3pQ",
  "key20": "2GcaJESydH6u7LD1tjhBgi5yuNmssj26xYbCsUwa2nXkMk3LmyWQWvzTp6HsCz2HFbqwARuj6RJjN3timd1P5Kn2",
  "key21": "3kPqSjWDSWiQZmye19utNtPjZ9rQhYgmsr8u11pxL8BGPgEut7CbaFyxkByf273CATcqWiuqmEgRf1XHSYD24BSQ",
  "key22": "SDKDLwmfo65W7pLhMkjroH1bK4XV286xtEvE5GG7Huq8eCCHPb4HgNyuUK2uVzr8bzbCunPUfiKezmfSB8fZyKe",
  "key23": "4sdXMdrDo5FwmVrm2cKPeD8oiiyxyyProGYtKJXVgvaewjZUqpQ8aZWzBCRktVsr1JBz4UX8h8a1RUaKvFUkb3TN",
  "key24": "3Ny1PEtm1UZ3uKnDsooBzv6Y5Poz71M3BuatCpLKHwEXhfgAEh7vhoTvUXiMHjnLDiP995B4BT1JQSJt2KwceK9W",
  "key25": "5nAingUzgft8YNr1CGR43GGhXmoGhdUyuCUzA1e9XPeGtZeBJ8cYxJe5gMvWJePX1B4Cw21xPiutHaxRgMcGiFU8",
  "key26": "4ph76cuM933RTXkygvxXXjGpCFTB7VDr9JkiemQD5UB5hWvuCV3Mz9JuyaY2Y92gbcZhuAZ9mtW9MRhfzibERaMQ",
  "key27": "ZroL2XWy3f8yBUtAULTugo1edJyWtfDhTnkqkbyR9Acoge7kCYdEcni3oSf4BEne69XaWzMJTdHYrJ2Eajgdi38"
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
