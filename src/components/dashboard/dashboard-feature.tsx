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
    "3HvENfMeKAqkyvyeWHuG7TJ6L7X1H9hq4q3HCDEGWKzu5AyHLZsRySYLAD7HnP49LrSvNgDreTqydaWtSeifoLRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N1p342TuTaRiUiM3HRzHtPoSiHTZPWkyKhyRzP8A21qBSoCuCWnUzRFCA32harXiFicZK73hR4ZuXcnf8mRCBy2",
  "key1": "4u6XpSMJn2aFn2JnCcKMHrHY7msSVJTJfR5cnFnzHYNhY9QNaQDtZZnDWTaCvuT3BQEVuvnS7Gmg12HmMwhieoeL",
  "key2": "5c85ooodrKqQBHgZP8sC6GLPUftzPVSQ9MF2xaTeRfoBpywDvSdBYeDvimHfkmtRBYHR4wDcJDSKi818mJSb6bZ7",
  "key3": "35C72wsVt9qrjTHp2xxvw8o95vB5CZPj1rafkfNe2ykCTfJGhwrhaFja6tHNTqdg6BgfgAv9AGs5G3aUPo4htC8c",
  "key4": "23mwoJVXg2TeV6WUzYqy6BL8NdTnySsD8CfL1gZrukDL46jsgzJXVSzq51TC29nMMgPDw3VwM29ztMbfuFReKkrg",
  "key5": "3wr1R97SSTnsNE75VvFrXKBUJQnUjmhMaFsJLzvzcfe8cmgE5XtJUxKk3SYkxrubEeHsCbhxXV1kKxFVZnHt7pF1",
  "key6": "666nfY2DxEhkfm2fBgFdCxnCNcooMXGfBipAQ3Se1fLMosurFqjLD63v9Y3GUzrVnUg9AVBtR1NBBvyVLNS3SMkL",
  "key7": "5ie6GrNcmmrAKpUzYsa336synZ4NDQZRiVE1qFYW54hF3NRccebpdGAWovK8M3QPEhvnrwGVANNoNuW2nSvFUaPf",
  "key8": "2idWSuXrRcNbXZcamcWDncJAPaAF58eiqhDNC7f9WaEYtozANGfgeS8ws8jeHxJDCX7MKU3L9HJNCzvZfa6FEHVq",
  "key9": "27HMVwcRfanH8YLPfKR9s36xYdzB8Vf1UKrzMxHUpXTF5m2QZCHxp9eHBBeFQrrzQDZh2ogTZ5NwUkxWoDgKYk2R",
  "key10": "29utBH9by9Cjo8zCcXtHjTQGyPcBRrFvyKtVekVFXs7eeCd5sh7KUqhxvB1GPDXk6Xi9tHFboaKnAbfWs4rXXYHf",
  "key11": "2ZqjEXH1XH6BDtaHwUTC5FCKqDfL8VC9BQNkjZYnJyttjhwQJywanZoEJpDshLhQHbjDVd4ZVoTKg9NgxMmfCEwk",
  "key12": "2LTrtamjrJUaoupxzSwy86vincGkVZgWkqFKkQMhhjmpXDbrtx9CyfMM9tSeoQDm76GvriJ61Qjo5LfjDK8on9DV",
  "key13": "4RUQ92ZsxAtF6kPn8nef4Si8QsnAFQZUxHJcbBH67xNcHKJ1PcJM2NCwP5Nq7niAbjmcKbNLYn8r3bUJhxzvv5Me",
  "key14": "5YPogXS8akvbbvNGvXfLCYWbUWugqLDEgqKhYv6dckgvgrdws1UC2arrNuLHiwveo3t7FPzAWqsuZRAeN4mPwqtG",
  "key15": "5amMVqz3dLGrqZCM88hgkUSFKUtP596HU4WNepMxV3dGkFVgZzo7CBceuJzuKqoD6TxTntjfSM8mgMfbaTJdgmg",
  "key16": "3axvvKFhKK21mQdDwLtdcvCdoAKurH26JsnJJexmXtJNMmfpd8FrR8YHVsa2GiL522T75epMs2XUCXhH6CCuMV96",
  "key17": "TeEgbtYwnwcFVZBTg7QzguFX1t7taNumNuWwbpUrwVNk7Azj5YcksSX2iuTmqY7dCuXarzjZEw66bQpCDWDMvSC",
  "key18": "2zyX7FYVwFBgir5oRb2gQgvwCEuF5x6CPFkmXgUKjYFQ96fbs1KU81TFMReD5ZYwM2nessNgUtRdd2wVo1Pbo9fJ",
  "key19": "32G7XiPfknVy6ijhkamLMnTgNpiwCEzxQfHCXrbhZPMmMy2KcepU66izGaaqPYKwMGLGRHTRXFgzoQ2YWjXTzhpL",
  "key20": "5d8g9cekK6Yuaw2N2NNGXwU9pCeTUVfJgLw8DBr2QQaDMNKb4K8iWcj6SmFzDNaD6hTUh5rBLCGzh5S95BM8hu9Z",
  "key21": "4gSXMnNCfTstTuH43ozxGdVS8t2icefrLNpR8wHR895ciY88R1ShcDnWbno7vHvcUKxepVySgzacQ4mHYe5rh4hM",
  "key22": "5YSRxFBHWAyPBhkgheM66iPovbw5hMPp4cNSrgbwJGdyzpdoepbae5VySQ24TwH8em5nMf24ftnGdafGrcfKjdFX",
  "key23": "62gmKCZ3KmZrW519krLBX9SJuzUwYhv4kfe52qmhuR22g7rDnSGKJEeCnLCDXBFbc17cg1Dt58wv6vYGsKTfjrUs",
  "key24": "2DucnQWGivhAhGdmHafn3QkyCmQ494XsVUNUNa3jsB6zxpb4HtvbygEwZkXJxasgujEuJx7yanw8afXjM8hgbDcU",
  "key25": "5tA8GrWSmEmL1C6yJeHjbiQbp9NnMAwhZvNH45tc7whVgVbTn7MdmMdgVAJVuoFU2EpksYn2PwJ49W48Dz1Tobqe",
  "key26": "4oSYyaMgcX4Ruqt7tH8cPL7UX6MzpB6y3pPBxDLCFnjebaCiTcQbpdP9PsZwijr3W9PQ4WKXZ7X44bpJDjrHLKsS",
  "key27": "3erBKMVvajXvsrH6PmZdut3wDnnrdHpWMLwygXPa8wxNVoV3BFxsGaVwwAydw6FtqokUCP8hSxcEXLgdWvkwWR46",
  "key28": "5keU8hFsNd4QB6HrV38zN3qfnzWjrwrVP8KWNCp4AkR5kuZLXSG7D7iWQ6UiRCXZTK7nxP5JrwM9XtoqhAV1JiXL",
  "key29": "473GbKH46MA54UTWxB5HgMLQVAuAevMMGuF14c7Cb1vBDBAdczrzt98BvYHwg7mrw5TRZ7hUyTDr5UJJ3gfZNYc1",
  "key30": "3eQ7XE21awmB7v5DmUNpcQiqfcJm2BTKQfFujPHJEEixP5SG8qEB5yt9JAD8PAYLiFVT6sVxC7PCa1pH9wT4cbb9",
  "key31": "4zSncpH9aN3tGHYmiGNi9BQzUx59XBZ5xTcgWsxXaXDL7Uu3Ucvpf2nVSkL2ak1TN1Mj26BmU89iMbBZ76DC4WQq",
  "key32": "2fvZLatFsvRiRMjiDVXfBosbpwRo8RVax8EP7NgbBw8SVEJRgyPx9HE8FNJ8LHdzB3BqZKW3GobjPoBE7Eqef5AN",
  "key33": "3anN7tWXiCx5AmDrQqi3Pg4gVnsi7kxdKCPQF8bKPy4szU5iEqTEzEMuwLzcwPVhS2uWycoVxqVeG3ECRanAdURQ",
  "key34": "26gNiSiDqs18CAURfxS2q5HAvyz3kPuDTxGFmgTYGhQho3qGtntqVeMZyPwxj4n19R4uqXvJ46oGokkAYH7SjWyv",
  "key35": "XxW4AzTYURKK8BvSm455PcUxyn4ERzZNaet6DgWFdts939fWrg8y3L2Zeu8EZ9tGXgf6ZjZQbPu82vGTpuFesvr",
  "key36": "2nNvDPFoaqhwSsgPFRxFLTqygfCFyJi6PXyyt5cMoCEHT171uP8HkPu4PASWGQwxWHDT2d2myH8FpfLJeg9MGsiW"
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
