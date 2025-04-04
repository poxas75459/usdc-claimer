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
    "a9h9YeeqqBEcGd9t94xdrSCpUV7amvrDoRpVvspvmZAAt4MGnA7jD2UmeaTuhspgcA5QZD9cVUWCYayDjWS4fER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvtG4w8XJydd5EYJZZWsy1Bnax6CUrPndjQsh5Ln47oLTWnfDJfDKukJUDVSMcrYLaLvpZwpLCjjvaowYtnCEwq",
  "key1": "5rthj17dYbcTf9r1nimDMNDUqpqXUGtyYVgE3oYYz2Pv7zzQVkkHFBzcV7YB2dSH41M82EBCufQxDw1exQn1pVWx",
  "key2": "VsspB45eerWegpwZ9TVx49SxXCg1Ymu2J8pGwWSvLcTDhJwy9eHRRPdkSDWQDxF8cmoYvYNSFLxEtRFw2nG8eUU",
  "key3": "2CEKBEbvWPiukkvobWtcC24KeaUwAVEpruzbpvT5t7mu5jFv3mdgsJx4Fezs7MZb64Um63ueGLfS1AzgpAXvrHLA",
  "key4": "5xaZQuvWHTCKcStkoUViC9XV5BAEKAq8w5w2HRdw5KQ6UnJ4z2HzVSc6xe4jUTxSWdxyzofapWnosUTSnRa4KFun",
  "key5": "3TR21EA1X4Tt1nXBEMZJcp2t6qbnCFhqR6Ey4a2vSkKZNTfvmeNkHTcN2TN2ASRXAXkx37ZE8B7eqq5meyB4wYxk",
  "key6": "3S9jnmJNYjgFqs7AgQ7gjfyk1dsQodacM8S7oazRXcKPF7jt9ungrNcDpxqVbjRxUdTmoRreUh41fAV6uaCH5QJp",
  "key7": "4Mgk7CFoehwG1FnTm6mdoaFbML4eraFy6bVSJGqXiXRBTbwUuwsAmoTfKXMm2vvhhmYpRJzJnwNxxSyCMhSucBiR",
  "key8": "3TALdSqchVhgiRdqn3g6ensBkjNe4Q96568oYbvWH5VU9cbfnhCYFCnv1qiEQqdUckcmtWei6TxzLyPzXJ3mMLiq",
  "key9": "3KLcWXjwvVrWxGRR9vWY5EmzrMViH89CsYZytpCopxaJ9e5z35hahP6sHBazorXeuianYHzbYyG86wrdQbhTTxsa",
  "key10": "6GJ3YimNf8xqMQG8xnqY48qLyBojHJeDRb4RcD24RDcRJD8EvtM5yc6zgRd5FpowjAwjwrsN7SsbMu4xJvEp83B",
  "key11": "3R9kpNKn8eMWfo1mSLY7qsyXWtkoA8o7B9eCdFsYqQUjNjj6WwjUAqcBG1w1KR1TxqnRBLdQDaX4jpWYoM2fApJU",
  "key12": "1oJrqRU8m2nFg2cHugUULH4ezZZ8mgnxmZHQ1NMGf8631VHwZokW4mByQmw1yry4btTZZgJ42jVL7ntA7WP7qtK",
  "key13": "4T1gJ7kVNztVZ14XQLzAWmKnpA64PyAVQAgvgRspj6WRxyTbUcLAxnx75VNVH5f1nEiGbFjsGY4rAUPWyT2Nyp7c",
  "key14": "4ijNG2eZ58V8zfxyC2MHuLKaqpCjTddDzZsiJXyohcaByLUTXpxiEZiU9fHiChtE9pNFQx2nnjyWjtmcvjv9Ey3T",
  "key15": "2jTzJ4gM7UqRTvnz5TfkX85FR9gaxqF3PN6fYwrWNZRCjrJao8Xrb3KLosHpiK11G58oXbyHKPaFEq1rqqVieNyH",
  "key16": "61WyjTNNcB3CZUdiPDuwxWjoNtwV84hj44GVCLSMTf9gtBqDNy2mbtLJpeukaSeAE2ENd8CBCdrcwLv6YTzz3yLK",
  "key17": "3nBdZKYr9jgHwR971DAhWGdr6XhEBWEFUyFpfoLpzVwcZAhvFG94oiqKDu6CByJqsznvYuuL38z9f6AEWWm7Cf8f",
  "key18": "5DkSmMD5UYJGvs1Rg9DCbvjtsfAu8a9K4Fzxt19A3Fs292GV6sUAzVDvXCTFYBc8xvjxnr6J5bFKipNvqT3jXBhW",
  "key19": "2pdbgPriDNJMAKZkezkJhuEB9PZj13peDEifKKDPfgWGTDXzpV7KM3fWZeEDctiSXZ8ZRKmpjSXRSQi7gyF9fJDV",
  "key20": "4TF9d97jA3k9GxZeJsK3h3FR81xybxQuEam4HPJnoQHFMcE81DTLuyzHW2L5Xu8sCnRYV3f3mpbn5iiHwJS4dHsG",
  "key21": "4SMW4PASzb5GT3NMvZKAdGJ639NQZ5yGGcjddCAsqJHSpRNAgoUJ2DEZFegdymRwzxkdhumo3HvkTPJuPyHT5dPU",
  "key22": "47SHhHLeE5fxK9AGQWM9bc48w4HTEtAEMQmz3d6LANYCNon73rHkZGRbAue9Yx4ngw7bLCZibf28e2wTmcwdvSsV",
  "key23": "4SDAbRq4eZh4R1KUVLTz6TwaEcmpfMc3NXyJzLRzskovb9mGSwh56g9J1ReLiJtkZ96sBJZSd44b5Qxgh7ZSxLkL",
  "key24": "38DkVD4GGT9WccBMcbD3fNB1sY833RDLNm2e9XdqzRBpp8y9KUN7NsFUBC9ppKHENJXtE163AyueyQFm1GUvqyaV",
  "key25": "2sqAWQDJSC1j8JaJ6f2Y7jZV2xoPchr47E262gcfiYgab3ccWYKd17RRrgYASe28PR3J4Fg9St1TXiLiM9qW3t55",
  "key26": "YpRUdKHj8uFQmGQT5QhizyRQbyuKQW7k9ENjDsyZWXD4ivTHA5khesnuTPqWbzrPCgrci69qN7cC78366Y3FGde",
  "key27": "5jEUqy2q4g2mhkcfhAKahFaTsofrzb4XeP86L8eV2Ga7ZvWzGvy21zKTKKLpBn7G6mRDqM2kfidPEhrrL86aDXQT",
  "key28": "2B5oH4wUejZMtTEMBSrwYJjigdqPKe7yDZSM4xW4LaohjFGHY7MDa9Kt1im6RHaSVp7p93o4axpaoJEKmnvseNCz",
  "key29": "2Uc4eJYfjZ7EB3uf8Hcs3UTG4HFZPMDPbcNv6LKDhPzeA94i1Z61sFZGHqRV965qQpKGwtfVBtiWs4L7d4JMXTFc",
  "key30": "5efvFR7wBosKmwuLCSzDPca8qp1QjY11NFr41vj6KrjNA5owBVCKQecFSrVrmnKccrarJ2DDaqDLbgbL6XVXafVJ",
  "key31": "5tepjGyqirypDXDoBum9n4Y4UUYpzEgmsMobQm849u7z6o5qj1hkmU7RLWEQ8bjtowTXCFbeN5T4eVSWZwWJSWUx",
  "key32": "3qrr1AEwJuSfocrwCsofcN5BUAciGELDNn4wYWKZimbiXxjUR5e8YgN7d7LEe33ySSqt55CzXTL2JXe5sNMBVS39",
  "key33": "3sMu5rBeDmoN64eSZE6mApcBMaV3fTzUK1gm738DM9nQbbtmxmyhcXj7pRc8MqC8UsSmNYbMw1EzgJeu6VCaGS9H",
  "key34": "3isVWnAAwVsq1VVFpu5vyAUcbPYEdbHxu5nGrw4QyEbw9YZc8qvFfyipgcZTobzjNUdc4fszs6hxdLbdZFbwb5yu",
  "key35": "Bf7KdWzbf5zt3cbm1Eb3rDyEYgTKxUKfv8gdgxpkELWC6nMYjYthAFU8tRwtKTz5uCcxjiDau4zg6DHWpfRDS5P",
  "key36": "3cTfsR9qnDPV3BUqyaGFM4YYCTowgKMm28tsxyZFbHxr3esm5Nau9WhQnB4Tpu7ensDzJ1XcXAqDEdLXkyyvVG4G",
  "key37": "4Kg7p8Qmy7SexsqWyeW8vsfcs4xXs2DL84BHmaoV5Qbdwb3ZL7SoTEkfF5UNQEJdM3MqSiPYXV2z8uaZJaW4RKhu",
  "key38": "4cSmuWuGxSDEU7zkbTcruquf1sEi8pCHxSJN99dpzXdhr2hBMhmJapoxxDhVE6sftuGNbHiWDpZCQW1r9vkFtRcx",
  "key39": "3cHBnegSHhPiVgptE3jA4EVY6GLr28fUiq1eArUaAR4qfYkbdmWRz5C4Bio3D44YaAf7mcEbnZiYyXbNLweVv4hg",
  "key40": "3oTWss5EWxtSM6aEekPWKWpQ9cBP2nNoU3R2yipN4sAus12ccxW7tXSfsHgeA5kn8GLSJKfpe2q2pnGVApjR2c1F",
  "key41": "4aUkWjs8gXRvnNVLYAw23gMSazNh1W8X3L8jUeJ2tmkHSKLiEbSbGeKBqNV82Bys2aLsPhDPyXWYuHYizkjyadx5"
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
