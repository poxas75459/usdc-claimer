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
    "4dbVQZtzUeq3XrWMqmcGuUYCKVxWHNELFRJ61d1c3PC2QkPSjh19CHURF7DuHkTqP3Sdj38CBsKyLQ6rhx4iPL16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVhfXmN39w9guAJyeMZHdnvic2y7QvDuBeyom9zzBmvKKBvfyUZknQV147ApoPLJWxBQxw4d38HYW4svfozPKUL",
  "key1": "3N4wKXJXYqaSAuybEgEHNpmjCb3UsEWtHmDGHCNYTTsKZGke52it1xr811Hp2GrfPpLjmJJZgP1qXqdRny2puQUU",
  "key2": "38kG4TTP6CuMKR8w2No1zGLX165pkLCFSG8Ru7uiDec7XXA6MW8P4hHMSSQXDjcE8bKUQaJt3DkdK9Hztt7gXewf",
  "key3": "22oixXZXY9UYkXBGNoyp3euz2Ef5GwXdEF6Kym7U5eu6tJFWCq93tpS5JuVCzafFPYnnYzhWsBz59JoUE7iEVGKE",
  "key4": "5Saxoedd8zMNsbaaYDiPznTrDsWz22Cd4z43TNEten1TdhKPGdWNMJs4prHNeiXEq9gspJPaMSFx8jXqeAKHcMxf",
  "key5": "2mYxPqa5GJ6SKX1TQvbfzYbUE5MziLmHaeJueQUqHweDgTpK8J48K9j5eaf1kGH12mGLdQVkpNvV6tyCbMVEh8st",
  "key6": "44K3rGPhiqMxxetJePhLUhYtUqUyj9D816d16Ec4u6n3JeGPRXwkcexvxa74RN5r3tTdTXBjj1RnGzk5jSvVtJxK",
  "key7": "3Rdyoka6wANwyt2rrWGvFytMhasdcrsw7oL9iUHXiFbuL4FFwtzr2TxswWyKmKujaSckrxMh3soou82szNCoW761",
  "key8": "2UMNCxUkY98ZgWRUeudx4b3y2oyRTEUhJaJvf2aCBNwLAM6BRk2WHp2DeS2ZU4NCW9akG3UztMzYexRjg9hPVZYf",
  "key9": "2G5FuMVz7s7XJCTdpnkZzezBNYhCT3UAuwwuhWXDWd8QMHTUVCs2sdei9tJV5jrYeVRdvrvvMj98HuU9UWgdKB57",
  "key10": "4b5Kxoy82HEWwxu2dzLVSMF8w5M1ad2AAmjBYdb4NNfYVMDfUPvQXpqJLzsodoZYbUNbsdvzk5gr6r5ELEi7BL69",
  "key11": "3MvFePFQJbD7LyYwXNXc9oFZeva9aTXnvi36TrBKD86H8BxDe3gAwAh3oLFR1FvPkrwSSeqJLSVVPhBmoyLGVcto",
  "key12": "3iS9ctcaAxuynL1FFMtGQTtnKrCFSbhBvBjZaT4TTpGAGLx7gt7FZkPdMKovED9AkQ6ErgGvVjxc6ggMKvV2MpF1",
  "key13": "3mhZYgxSyCpeVsQs3snGGYa7icDg4qtmmL1uJTPvBis14Xa6K1XkUgLJoXZfEKVrMiAUEMjzYUPoJp96hCVuPVun",
  "key14": "3sEkbxqLcgsEVSXfiLwSRmUjJyew6Yxo26QfJekDSxZ2ZXCyVpi87qAbjMQ2WzBe8Tk26QcMFuoM2xYR1uKR9TEf",
  "key15": "3zsBKzoVk73nPYa1jfg1Qfh5P9Re5YxUGnZrgP4czBazZCGDBdLTaeizz89n3nuhwJBQMRcv4gozH7DanyVTeUWh",
  "key16": "4tnnazDSMmoF19Uk44BtA1eJs87eMxSSkei6uCvRcRsoVEd3WH8xmGppDoayjnTEDSdsaQW2TUxv8J3tVcPFmkPE",
  "key17": "2boNUrjeK1cnv1tHjEwZCHsGgLK8SxJ33pV57LTdZWFHSaf9AmrFm57erjBDpDm5Ya2EbmGpFyKsBoC6cCXJtSyQ",
  "key18": "3QJGbMGd7SxBpC7DW3Xf3eY166uMucYKGw69dMpwL6bgqkDNJ8ViQnBjoENsyadxBvv3ujbnPZKHqgJFHmyh5m4d",
  "key19": "5gkk4LKsaHFqZ8H1P5KuFAjyXnCJCdh1ayiK47LPpUok3a1AE7KAsjLr749Q9Qyf1YuW98PnFJDf9w2bbJpXMpPm",
  "key20": "4jFG3deMpW321U3o8VC1Tm77aauUzsF8bCTdAtG7MXJT8sPTc6VZYQ3XNVC2CJqBZwfXRHxxHvycrQ6dkVgKqP7n",
  "key21": "3rpwXnmyiFRs6gpR7eDffjZHTMsC39fup7DgmfnwG4TBEBqKcqNc1TgswshNBh4ienwVik1yHcAx3cuzVRouHUuP",
  "key22": "4NJCVpjwKD58vLdFwkH1uQ9uQmxrsKhdYcLrbu4KKCSgw93FYg4r6svUJrXpxwKx5fyUc3v4WEVDBwG191HhL9f7",
  "key23": "3UvNwSgVF69dpeGJB9aq1QU9tDBomJQaYar2Fnuq7HYgTUcHZ7xr9fZ6okco2MoPPELPZjLVyFJ41LM6E4Ci2iPZ",
  "key24": "5TYxVYs3ng4Lf4kgw2V3mMZjDs5QPnNEUXz5AB3ndng8f6KLamzh5fKkdvo7KB9Th64wkHvGq3SEHA4E4bGUi2cN",
  "key25": "2jkm9z2oN7YfTcJR77oEMHCAAxhL11LXfgmbRfqtPpcJmr5xE37MdToHCum7MCJtPXNFu7RzVvWk2H7h5RtAHfVX",
  "key26": "5vBotfPxx9k9rsa7o4Af4JfKN7uEW98jRE7qWwEtkwjMNgcJXY3G4BGGn7RrJJ3CG6hMD3nfci1vArrYd2UWQs13",
  "key27": "36n9BXuUyTMNaWxskRaE2xvd4hPjNKzs2yKnX9DrK7n9K15VekNyYuudq2V2KPwwF9MnUBcWegT7neYcHmqSQURF",
  "key28": "4LazDSq3DMvur8mzvftYtFnB1pCPjs1b1JikcAr7GBdtphUmfezuauncycvwngEicNGcu5Zs7DvyHdoAoN3zCNFU",
  "key29": "52DqM28u8HSVvvXuxX96Djh1ZftTtm2MQdPBwXdvabdfx4udatgjxAk9AwGzPqGtnM5jz9tKpgSq4V62y474Cbmn",
  "key30": "fUM1HriCX2atnvMQ7pZdnqmgyLfAuVc1roa8H6i8Z4M4sWN75W3pXNbCJa2QausiyuhFwp6ewr9xDTojeDwXaka",
  "key31": "3MXur7GMGENi79crqTXwDLrDMftfCA3nzTnL8nv6i9KNxhWQtXr6oSLomYMbzwuwtukdRzCG9wV5j45ayyhqmDzH",
  "key32": "5yR5yuUzm1sn1MkLinPV8n4nWfpQGBuHdpnYNEq75vrmwfoG9sHuhc4ADAuQ4Sc6t2SAZTc5vUa6J8j7ZQEWX1zg",
  "key33": "2W2xWG6SJX4PBqnLV7axxPTjJxLrUzQt1hJBamrXiZYwEsb8yUoh3HGwePPAPDaZM7rg3oFQxMxki5RaJZxQQvPk",
  "key34": "5jBeQ6A7whvuiuyg8PA8TD5v6iDLfgHSzYuyiCNqRHxtNFR1C46ti9krL7fiDgT8qnaUjxhmAAz8s97rKQV3iSh8",
  "key35": "5nfytsruiUJzYjMpFNdQthsKVHqYwc4MuDKWeowuAg9u6oqzMxyoiUxhNXU7K8r1oymANp44xMw3BYwb2G8sgs29",
  "key36": "5k8DRw7KKQB4LXzQPDLwtAddqgH2xdEGvPYHgdYMN3NMFE8pBTJ65JeZ92gCSkHsiAraikw2mc5CVXhGoKeTzP5v",
  "key37": "2xLANbtHedoJ9Y5VnrYy7zJD5gHhktY7gt9YaEzBKq64TdeUz1ziVGoSRcyF5GBWB7D9afQZE2GuSXZU5c85GBtb",
  "key38": "7CNuPAqdQbuc9b31PwgDqmubusnYGakhgfjPoWjRoXrPWQinxjyDGz8dHzJcCXEUprBAKbKE9me1mbRu8fofSik",
  "key39": "3Kvwc6HnYzTtvNFhKZo8QUstuRKW7MWLtHrvEkQj6vz3S1NPJFQaaeBLMRrEzfF2LXyxsRZkZaUA6vnLDqyFhh6G",
  "key40": "5AQoBcWNb76j8rAdsB5AZzfMQineA3S84RxU2QXrAm45wXCQQhhz8nDusSCYJUrH8mmrAgSZYtBrbQ4j5pGPLGRD",
  "key41": "5AqRfmDLv3qEJiUfwXd8qXinsYfMcLLHvtxbENCP3r9UuyPmC9HXsofiSnH4RpC7GBdfSsRKYRCne6yeJYmAbi2k",
  "key42": "5KvftZeqFfkgui2dPn6ErbwtmdRL2Tru3VghSiRq1YL3e75QHAA9x3LpvjdgrB4S1XcyfnJSnz4BTe3ypFmv7QWz",
  "key43": "3xeofLzZKr3eDirfErX7giD4r9vfzgM6XGfWNPDp5jns982Qyuw4y59tKvRDjCrASUBtUXPehXEhJnWNBDCnZK9N",
  "key44": "5fo7tCSsoU884dAwrtu7uUDMBzCgCpDbrH6ADMiDs4ox1B2NJBzcX8q9UNDLRxcL8rJ8NgqWG5cTS2zi4xYk8SoB",
  "key45": "5GAWJwD26v9ZQ2WVgXL93ZFerFqPhuMi2a1aUfMEPFwM1ny67XE5H4MoFEfaHJqiV38BKMLAV4Cq4zHUSmEu5DtB",
  "key46": "5WSifNcc4KCRNP4GsgSxwMMtuynby9AMn36cb2166imcTcTSvfpbu4Qj762sqZ7Bwp8ZPqDhozR5hCDGZQiRrs1u",
  "key47": "4ADTus4jWPD76FoPsgsHZnHADzHW6ozy3W3sb5YNv1PdxHyVfgvbnvf1RpewF9jeQyXB9EbQrMwEeRhoaLt5uF5n"
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
