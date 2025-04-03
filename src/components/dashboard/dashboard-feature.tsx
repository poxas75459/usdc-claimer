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
    "QVUCsGcyPLSLsVZ6yAQLekxjCXGUkDB2VG4TLHgCUBV2rwssosq25SJYEsmaJ5iZi8k4fdhjQ8CJBiYvDTJByTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCJpWSsFgTxvP7bYBJiTA6zLXtXeHY4mW51S1XMUccrpzBwRfw82FB3Sd6qKhTRogdvkrpaU6xAbz8cj58AL4iM",
  "key1": "3Wo64oKhJyYXxcB8gcfL5FeU5TduC7zcMBKKb73dn4VtMU7vnrzAamuvnjvAsmknSSJyJTCwCfBiYrA49zRewA2y",
  "key2": "5tKuJKgrCoCBTvtuMueuH2NbZ5YzbzbtqFDWNVsYytk9augcRkrAKQmhhXQA3t59juaur6aNRKCcXRK3gtYY3enE",
  "key3": "2H7ct89CE1mvzmMBdBorrkCZxU5416NJDCGETTP6nQ3xnPxfSF7UafMgy8dyEFgfAmpzYQApZ6ybFZnkvgmz8RXQ",
  "key4": "3u7ZUZruRobiAJGhfKqbHMy7qgNCa1yXQQXbrFLP5Rai17u3WLsXZXVEYUdKgKvyFi74xfvUUKYCA5VXxxzqtPuN",
  "key5": "rYvXShB1LzNbjrGi1ks8EUQR5ELPgaCAuD2V2uMZ1STmNxP94Si79Z3RazFZa3q1beSidQDKmTKvxTwjUP6nA4v",
  "key6": "4h6JGdtwGXunEAZSArP24GqcZYj7t4hRLdZtXSC4rzJ443rrZigV6Wmfww5qDbA3J7Cp3McBWS4URUNADb9RSg6m",
  "key7": "5Er6Rp4asnq4SaSwnW6fp24T55CYWaCTHT9rosHUrJ8d6uSgmgBCAyCRCsa3cZmMe8V2kGDYxCkWEaA7CWaq4EhA",
  "key8": "5a5LiDee2TboDYs2TnvGPqgzuDLUaaj9AXHPAJUXt4dWu9ojqQRuTacvEBqCZdE5CohVydg2gevbceegb7aPSQ62",
  "key9": "5w2f2n76kZoKxn8kpadTAC7HDtx99wU7maSWUwcSVtTH7Nis5URva2T6GCU48zyNEnn8aBTuBEUHo2Mmi8npy7Gw",
  "key10": "Mo1tVnwkv69j7DEBYCTvGrRFK5AMgSF5yYnwujcvFVGXL1w8UroFhMdZmcFNTSnKquGjY5MvLKCBTGrfdapCkT7",
  "key11": "3D1yFj9AYiTQPPjYjqBXwr8fwppg3BCkn6RQC2MnzfPT3dRGgeXWfY9n61rYyVgL1mW7NMhQSnEJMph6GXdaeBVM",
  "key12": "SY3RCacrFwP7kDz73pVpLcWAqzJMF7egm8znjaRc5bfoZFKj58XAtir36wGuqsfjjdvUqW2ND1epPLPQQ11anXw",
  "key13": "2hmmAbPdqsiAjMjXiLnNcQUuGY4UbiwnKAfKubire2Aj3JwTwUeZwsK8BkJ3mefMmmjki3tVytgYnyy492rUL1CY",
  "key14": "4KxrT1hkJkqv1Wa1bu2SBDBVMto8yvAQe7fKdxfZx2pDaAqxd7bpAiKeTC1AnDSbmL5L1n2e1mfQF47UbBLC6pR2",
  "key15": "RkAhdzBmsg5nGsLghNShN4izWtWiyXHxu2jMCWXCz5kRQxf1M6QbAgLULiVUq3siTnwVXiU4XuqZdL6RTBHPYiA",
  "key16": "2dfgyuhUfJXdbDLggSzsWK9565f2MaADcBAHqi2jZuuBfkhwtPwyrmAaVNC28HJP2YjFQ7ZR5JHdCW5xKes9HgAG",
  "key17": "5wkzjjvHU32y67vVdPoyt8Kpunmti5o1ubzJMFkQxjCuZtLiX7Xx6aBD3ee1v9M3XUwK73ykygqSwVLys223FZ51",
  "key18": "W7mZFJDvzZWwNDZKniqvk8EjYAUtvPoxmYhiQKWVLQuaQaPDkvmDY5Mh1JZs47Fb4khtN1ZuJYEsELMRX9v16Ns",
  "key19": "44qLvHcBhpkrY5TSczTVUqNj1BqA9xsMwMbZ7X4nSVQXXwQTkFG5QMM4mBDX99wAys4pbpN47ARBFz1tw427qVtR",
  "key20": "5Fvb4CkV74aWNdLpFDaap1rY2qq9hgyHBtHxuYTgM9pudVmfYz595bYAmy6e8JzkHdwuEU8XWhucB8S5rAkVpHoY",
  "key21": "2Nec8Qq7MoPg7mQeAwdT47c48fwhQPezF4BF7fD6L6DUzt7Kz1fxnevACQvaAZ2ULwLe1ZymWHczS1cyWLRPjXGN",
  "key22": "5DMjWa398kfMDBMB4TNsbqiLBhpcGfJ9JLJivnrgjjTNcvBPM7etJbJvM29pPqaNQRSeHTNTd81CtGe4fgDDdXeL",
  "key23": "2kAinzWrpYqFpXxJg2NQTdwSxjYg75GP8SJFW6NMPEUsvGNG1TEiPSi9vfvJLBZtLDBqFGCfFnqtaaXuupVVQC3n",
  "key24": "4sLhoeQacuuHTYp8n26cruY7E7Jgw6DPAtrxLXBG3nRdddTeXcyKeHJLDhzxpUnQSDnhFoywG3CFCUutxmZgc25s",
  "key25": "2vUQgW6q26LJQUpS2u8TaitahzN8SrF3fAT7HGu5au5gMeDSFPRdX1NWQsAtyGHZu2ZUBGqMTBu58cSAzPeVpJEW",
  "key26": "636cfsPzYgLXzuPEpSCcDRKPgrBC5EWrdEbmwwaL4eYfucK69EvKUwwp5cTqkWn7k9Kee4VKAydNYeU4H7MweVcC",
  "key27": "4AT85hqVj5yV6M7Ho2L9byBybSwLYsxDVYjeFPiCE1N5ii35iyfPVacpHdUGv5LfnMfyJdHj757YxNQWUVSQiR3e",
  "key28": "5VZjcpbay2wYmW2Vn1SYMZnYQZEWZ3mBcx6yiBD6hSRbq5cTZHcuSCJvKLa9FjihoLcE1xnerejcseHdE7VVW1qY",
  "key29": "5bpDJq53EfFJqhtSKsnwU9h92VmFezyjsmrXicH596pJ4U3zfYnxnWaHiW2SeQzHhvTFG4koXHHvUHLvUfL3ULW9",
  "key30": "3Bu7ADi5bEqVSbc2JQLV3EAg29sJBj2c3kU2pyU8EQdUCUWXcTwPKCpnqbtxDEbZgZTKaKnWtP1sp3rNcF34NuMc",
  "key31": "4kEvWJoJLf6wJ3jWNr9YLeVfQFjwEUoGtrXFo9UgjTorLUnkFSL7zjoaAGJ39BLs7teS6aUzXQ8fjVQoJd3Mr7AY",
  "key32": "rPorGwo6KH9qxHBq3Ptj2RfT6fhCFtNbgCkX9C2qiapr5a1wLVUzb96BUdp8JD3AG7ctLcWowYYViNRibX6m1z3",
  "key33": "2HtHxiH3VK1iSZQwfXLYNb6i9BiCkphRCeMnhTKQyHP1nca9SVbCFcGqn279Saim3Jnm7agCdZtgFQ3i8518vzFM",
  "key34": "KeT7FTV6wpR1vKY7GWbwBUDyJCQaXvjn1nQ7wJmXuydvoZoKxW2wT44cqKj6T1JeumTi8FfjK44bQS1aP54E4Wt",
  "key35": "4nUdZr79ZWJS25jsohTcReNRHMcvPqjmp3JeNCUT2mrZfiRbwFSceMSekTSaE7vLBm7xbbqtQ4MGFHouHpm7pgVG",
  "key36": "3MxVF2U6U5Urb6FKyCS3U3avWo7D5pVwpdn1jQejUC6S7RiKWFnDvnT7pyMk2Y1JR1fityUWm1jYWr4amzmbzWuS",
  "key37": "2Ps9rWmRgoq9Ph7RXGJzMv2RkVdeDRC5VBd7sEM1iX5XmutsZuqzg17BGXArzwv6r7T9Dycdqy8TueTcapYSYoQW",
  "key38": "4Sw3euPASPaibFvgteXaFHyp17v1GvbMvfyKd3vvqSLM8g4gxmdWFqcmASb89PeABS14V6VRYyYUe4iNr9eFqQ1",
  "key39": "oQv95orEC7NQ5VkdMVc9eKD7cd5Ds789ZjvT786WWMY25HVcYQD5gBqdy8dx7HMhjbnwXhGmK1QCh8q4kVyR9wr",
  "key40": "32rsmoUAsR38hTbes5cEg6dLWZ1YpVP9AY4FQgTe7TK4vhGmfE1J4S1pDMotedi1WrE4d6HfQqyozpxBoG9qA6cc",
  "key41": "5qfRdkpHsnLBvn4pL2LozDGA7AerrCXtnfaNNsf7YSodKv2UJUozMLdTca9V4e2eGBF1Yzv7v3DkHEGqfmkUjuK8",
  "key42": "UrA17GfkpLm4VUrWU65rS4HdXDfi64BDdh7zzYEBQRyjkidoNGAyJQqMETBYBaAf2q1mPhytmYtPq8uKxjzyq5D",
  "key43": "5ChNdYdEUA8Q4Xu2QpvsdWacrRcSW2jhDNH3tpmg6aZAj8fpixQPDrAw9iAAUKrhiEufvsuSoZjEfUDytzkgwk1n",
  "key44": "5H3HezZSkWoXoKBnwwT7wvZfprY1YotnvE424Tfs56zCEE7bmGd1DHGyBVvrR4xDtyuTBeFfbSuKcEPf4cwPLByz",
  "key45": "4NZSZxtt6jUpiK3GA48AtEguizs2KFNJ2M2XpwnQmEamaXX9ufrwPhQRnboeGqnc94z1Bfu2MkAshNUVPdUtneeh",
  "key46": "464FMTwLRrncvomD7e5oRRgRMJZFu5p7hT9CzZMCyz1aYr8cTZ1Q4RbLViFLScYXfKAVc1Kjq8TVgcmUhqnLSQbu",
  "key47": "2MCiNirU4hRKmYUxzKrCVFLR9e9ZvW5v2b4dTENu3uGd3RFC5A2KyVsYz1YkH8sVF2bQSx56oBuXz7YbXTAzXfkt",
  "key48": "5hiSgaz2P7Ab2spJGXLrrzW8p3GvKvtBCrF4aaCwczobbTS1wboen5C1vG89eFNkpVtR9ijCdtZeYUnAExk6jzta"
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
