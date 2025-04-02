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
    "2ujGaZ7djVWEvncPXciKctFvgyniqGM9qf9398vkarm7Fnbdz9BczY5GfJ3CWPKUo3UWD6fLeKqDwJ7SUhf6Fu63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4rSVrMYQkrVEeHAvkeNNJpQhgqc27pWtS5ULT3kVaXj8GNjhCXoi2ivHh7T8aQuEBc78DgK8fLrehscZceDP81",
  "key1": "3A1ggt4umXysQd68ohQB6LQimpDev7BYjJwPTBtovAU9BSkiCof67XLjbxhqKHXW1i84zvZir3aZaMnTAGPqDSkN",
  "key2": "473TYDXt9ELW7E62HH28tLnPBmnfH21XbiWqoJNhkgAXezP2uHjNEV8kngDkStRdNK43x2QLMtv9CzhRpm8tJy9t",
  "key3": "4qTauApDezvssQFhMNUmyoe3MZ2yJZ8nZWiVu2P7mBKidxDz8eRs8gkRtz8zMWMYK4p7J3ozJVy1TNHXSNNioPMW",
  "key4": "2TjzigTmv6J1EfyoqSUtoKaPX5Epuqj8gL6JdViqpXUhCD3of1WaKBNmcUeh5qKwheZ1311oCRkwbcTointxbSjo",
  "key5": "3ZGjd5G3pnJm9pRiV6ZDJPxM7XXgXXyjpF8w1dZUuHQ4eTwAVXdHkM6gVgeVtWriqmEhLDGwu3KGsYwEdbV7Q5u1",
  "key6": "5k5vLJrSrygGHNGPcf5G9BwzXA7z7B9n8eJu3etYoGooFmE42KumWWJGx4SaGqRGKNSNY2vAg4S2kyGQWiMGGQ1i",
  "key7": "62Sd7EhxbJHgReoyg6DRM1Jc3sZPC6p9JBxtfuTGQSexBmZYXrwz5am8ggwPNvjbxbAsqHLJkLpKKCV65JsftzZM",
  "key8": "2Y3New6FpmqvLtdpX3ytU9Katumy73FJnT6o1WkExV3bpjkPSayUH9pjzE5Hf9W8RRyEExc3KjxQMNBaixFAEzcr",
  "key9": "5K42hrh3nQpZfuxTy5Y7N3fYvgraaudKcH5GMfsCE91qaAT6EF7PQTT7uqHUHf7gRGdUDhePL7jJcR4ePAHrsgSw",
  "key10": "4K42mVv8gCU5ZbmtHbuwAHxiLXXnHjGgTTnaMBjiNRJRvLvrrqhQ9Mod98LztsDtJb1E9KGexj55ud2ghrSANvx7",
  "key11": "RdExQnzoxHfzEUQDnwZZbuB3pHjCwhZrTYyaZbuqgak6THiquQNC69ne83tbNiNro1p86ymfraeawqe8tS8txz6",
  "key12": "4Heu958pr6Nk3fT1kHoNwthcLyLv3s41Z6px7taRafBkXX9FspeWHK1KAaZ8tFU8he6NrL1qodbahcpuCeaL38nd",
  "key13": "3YyS97zNHyZGfTuD3rcviFLo7QFA5pHk97KkcMDM11nW7Z7yMSWRYG3C4QB8Q48Lz5a8JE3UKzE8wmq3DUY3rY5g",
  "key14": "p9L9YX9wdrxw2YrdcKqhe6T2j2fEGMcNaQ24AdjPVS4X93qrVf8p7ThCXyHhVFfbyFkffXVsUoMQLVzLVoLPmxv",
  "key15": "2Sn5XQnNkLyix9KKbxGK3vtVygrj9AZ44ZZLxm2rCcmdmKdD2FqN2itMB5c1doCgwr3AXBSsa98VeG5sre6RA7VK",
  "key16": "2NiA4chji6Wmk9k27ZFSCjfJZxsyQY3Qki55t2wBsERmVkhu5ghTdtLyitT8qDUSe3oE7ceMUyfVzX4PtHF6GbLH",
  "key17": "3XTzK2Tq9xh8wkfLvHpgo7JyphUJaQrEnzGEBudAZznubyzJrUz2E3aeoheehphtjunN59ccZfRScy65KWJxGBAc",
  "key18": "nyYzL9eqMfujTG7HzumQM8zw66KbnCsUzsPHG6hsXcn8AseRLKt9MHTWpcJbqeEk8HiHV6ot8939GhTpcSw9bvw",
  "key19": "4qPmxUN6C8GKnfSCwWiZT3VUWX8vbsedxpuLsgzPa1q5Go4p9yr3auqEc6PmPeUG4jgx6NXdov7of8ETFjNcce2Y",
  "key20": "4eat6QVKt6iktNg1GV7vTCL79iUgZ8gWznRjSCeQ5CuwcRtzLU3CUYzUBsTZyiF2eqdMYxuZWDMWZrjKfVFVjuCQ",
  "key21": "5QYTW5kek51XUxsQg2a7cegGzHAo8LeKvsRrdMqjXNa5BX5K2593gUYxJ68dDu8hY9QkHGZjoEqabVT3D7ZC63mJ",
  "key22": "4xozysmqYKZvVhUgUfUU8F5DxhvcPMh1SKR9p8thgKQKefFAkyq5TGRpmfLeLiazj7QFN5FBKhUbd7J5XSVzxS25",
  "key23": "2vGESG7ZhQofptxnJkwJsjJMcKN4n6WWhcuhoDimJj1zfHaQTMnDuXEqhnk2VaiJfvxLADTZtf9ZKqv8KX7TY79s",
  "key24": "2edycFD3XnRR3yKf2ZdWWsgZfCc1oz4XmT3cvvX9hVZv7rymBwU6fx74KNvJEYeeYUibtmVQwEb4aah675bdPyMP",
  "key25": "2FcWJx9eADQgx7cFe7eWa7ydD5sSRSjLcV5BUkaLVv97QAdr5gHhWzz36jfkkTYWsbW5j1tXmjsJPfg3mR7aUwK5",
  "key26": "4DwrGu6J2gxyRZMsoLE62dvpBLAiWGz1Li9rLqs2jv3chkAWa4njGs82Tmr4Jc511YvZxQJCZphB4s1pWXj77Du9",
  "key27": "3h8eZHZrkoGJmJLjraBsAMSbg2GSWATFcoZPR19MFydEwedGs4Xak8c5zjiBqhApaJLRow6FUaAPF8CeTDpoZXV4",
  "key28": "4RDfUa3LXZedg1EjtexY5gHi13Gkdf3d1p8boVckDbgJCtpxGSKruYt8RMU6tFQVn1MqQ44KrmBuG2onmGytRXDR",
  "key29": "2gNqLZJxG8bVp1s6vgKnEZMYzPDfzM5KbExXLRaMK3Hotpvbsxaw79ZfeX4a9ocoHwLzxQqjpgvSbLqBpcTQPtP3",
  "key30": "5V8ARsu5f6JVwiVLDwv3gdavgQ8MJpXQf9vwJwuC39HwwpkS8cKxBqY8Z4Vp7FgMt6cLH7hFY9wukAb8NpgxTmpK",
  "key31": "5ayb44GAzigQ7Fow6p9GeXrnMUy6L7J8jnJg9fEdZfEWgGhB3G8Lakgy5twuxtXhXJLLdv1ApTNn3UPNo8qihenR",
  "key32": "3Ai8qAiAYNeUdZHfp3kPcuB6fhSmYpfVhWJG91K29MgrxJAySZvaP3Uh25cTKQQyMj251mCq4x1gsSpPtD2gLUH6",
  "key33": "53dE8oXkurBDKZzBi3cv2AfMGjdD3Z63qdwUDPQKHSTfncJ57kbiYqtPvFq2fCYorNUY6Aegs5g8Q53q6XmJJxyF"
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
