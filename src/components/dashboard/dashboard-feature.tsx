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
    "H2cUfBQQ2Xv7WmGogH5KdLzpGAJMX9zgYPN8cGGWkGp5Yeq2mgaVXgoqKCwwD3vJCPffq9qYniGi8NGBqwkaHdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihBAyruVkh1NEaNB1NtmT92z76PcKC9z2gfijuFFdAkG3Uru34Vys2nnFoXvxkCkKxC2C9gbNnPSSkVgf3gsy1v",
  "key1": "3HLSuU69Td6x3aNMqAHRqtFBG9uCLGPwNEtEjGMZ9GNsAazbXjhszctLVfdnujNTmZH8BBHG7zrz7SPzN9nBoJ4T",
  "key2": "5p3ab57obBa73FaXcNFhxbTvpYXcpB6pzeUJpLKArRZDsthj1JH5DkqHAFeKefuKCFQurQ8wBTfX6Ps47R9rQfSA",
  "key3": "2kH998fkznt2jq9ayeLVj2XrXTnAeD8frYH4VDP6LPdjRwXMK6rsjMcV84PzhYUvCCyds3jxXz6Gt8R5e3ikKqk7",
  "key4": "4ASyzBTVyhvqbnBfXHVyV9kd8ucPohuBDZNsxe3uSVLD124dJrxD5Dvbqi7n2KQryaNdw3Bzjym4fFdAFedxnquL",
  "key5": "3UPLLHpMzoepiSuZQrewa8cuGC21cnza3feiDWPBtD5WA2Bf8UaDJLhVCvGwqYKvRLtUMcJkhGaRH7Wtjy7k6NHx",
  "key6": "dHsdVPRH7kgaSGvWELU3PbzDJnw8Lue4Cy5fseuFKsAt2NpQLmVtxWDmTk8FYozHiU3CPE6hXSdrkPiBjRbdCeu",
  "key7": "2GFv4RJC2mhCVCMNAkmwQLBUc9EuBztRudLn4vtHo6ioMAmBStyAUfGSf6iDcNSe3DVk5YSq3FFcGodcgUw2313w",
  "key8": "3Y9wksmmZvuZve6Wt97rmmViLLbVk9mQ4BUBc1fyWxWCDzTLiyZPqVvPtNBkw5tZUavUJmMrjdqCRB7mEa5BRejc",
  "key9": "62zGC22ERTfDajvrvtaeskxnf1nFigvdD4nrN8VFxeCg43DzUM1Z56tUyFdhHSQAYMraN8sF4LXFLCCxknSs93v7",
  "key10": "5pHc8JrxJHBSZFFVL6GfZVi8iJnQ1m7GhKBPNeu32KWStNsyuD4wLH38N3FeNJZGSVzmSCwomLYiGsT8KS4gnurG",
  "key11": "5dEWtPeB233t4pqaEKnnAdBpVuAQmyFJzc6PSrJ8RdKcoWqTnG3DBJjVwRYKRfvsiwuNian6VMbaFzwQ8fkwHSod",
  "key12": "25YPFjaGk3XuMV2JyTBwU2Npeu5xwpGZdHwGAmXtXbxD439qHKuCUN5tXqJmPaQTDx8P1TEzTbP9aLvRKN4ZPCeo",
  "key13": "3aGVgTxVm1nrxPLfxSyJ3JN98D6SkGgcTPbLWfAmy3wTUVQnJLsVPsVgzurSQDKh5zCtnMUcYGWLk7Vc9VUXF6Cx",
  "key14": "3w2m64qyNd5K7obWQktQvQAZ5X9ChTU6xhRFRrZzBYGVdEJMt4z4haPak6N5wcVcfoX2mPVTHADQuPtXYSusHMv2",
  "key15": "2kfc5ZmQTv6uQXEqxvnTN8VdQ3vWpBfWEQmc5m8GRt1cxDg8LBa5XANfsVVD8hkZDN6Rr3FU7AAfSCCQ8wDJMEUj",
  "key16": "41mFb2jSc1g1md3Nbc9bwNbgJQ8ByMPEYabG1STeho2fbAcYjuCS1KRXPsk9MPrdA53ZMdHXG3hD1cBxhriUXPCR",
  "key17": "MXmr1JfsSYk4DZxz1cMbozr1SvhJtaef5TXY9xymeCiKeKGxzw9XaTfZtbdvNvnohkQqRWvxJvjc8WzsRGSHBU8",
  "key18": "5J1bP1rkoGLeTVDNSQjX9mBWqyTMNU7oKSk7SdxHoG2395m6p8cSGtbXmXZJAUFKnjbc6rxrow2QEe7tMhs3dmWQ",
  "key19": "3aka1EtV1Ycvt2WUUv4bRimM5PPn1o6DDUSgy6nnVCbv9RGG9NqCnwriiTfULLa2FXNWQ8JDUqMuJmK7NFrPk5iv",
  "key20": "5BDQkyDh3ya7KGcivR5jSbeLn1a1XeYgpyvyPyiVvkemGBY6xfhaPTdioJctFXKR8F6Fbn6KhG6qXVRFoRxVtPBG",
  "key21": "3cPzXUMDxfqo7EAvQN2qnfBqbTffBMKuouSngxPJPoAFw66ydLvy7GKbQfEU7mytccQniE5RC3dAzw1JNEcaPdYR",
  "key22": "2Dqm37TnnqG1M2MR6Y4THNrVUujBfa4X1xbrJMwKCrR47gRoazqT86RD44vQ3dGXnktCKFsZcHwgEKcnsDciV2Hh",
  "key23": "29AkrE3S8pF555Gi2bV4JRtMqC6qPE4SHSpfPzbnwbeamUmyuwf6tapw7SA9kjeLA4BDcxBxB1RPni4diu3MrnAo",
  "key24": "5o2hBWjsLAuoDVRuN7NLErHSWEip81iPEYBkV1CNDBFdcEbopRCETqjq3SyyBToveBABHRDvUdX8qXQv3WqKahWp",
  "key25": "3aZ7qxi6QvixrEtuJMgEdzByM1vCdTuurp9UzzzHpacJPAMZi225bf27kEJWrR8Wu24x4nVoDdi9LWJ6UcieVgHv",
  "key26": "2PzpxsV9Q9qKj15jqaYPXhszA96SMzcsQGsZEvZrzuD6P9zecBmXk16aA9RJkVyNDUzN9QgiuNcFEdDLmQmdJaHK",
  "key27": "3RvnU1xUxY3Vai8ZrXLtgUXgm1vdiRLRdLN9dMxgrnjSWCyWNSdXq5wEHyFm87QnjEmPDXZX4nzSwzZ1UGQyRZQ",
  "key28": "3eUpkbqgeLygoc3ovXTHgYbGPA3vXWgF1mWtBbQNDAo6ardbg3VMv3MzcY3PnvXfgJUtrNgK8wDuVa1BPyPk5kdv",
  "key29": "pqR5ADJSKiXkye5fVCTCUQnmYoPECV44DNjnwrc14WUWdUVXNNNx8NSw4AbwsYpVstaBahwZst6ybnF7kSuUMpf",
  "key30": "3NFAQSkmzEG9AJizXMUErX2iDiy8hrfhawr5CCbD8pFsonq9weHMNfFUDpJgiKQ9S3WH8CXzexGVn87dp1Kdr7gw",
  "key31": "4Q7pwiAn7C53VmXaPuevitLaQ942Suuz3NieNEqLoHaa5sgjqKwNeafnondab6jH2MmhGbfRio1wjC7De3kt5Vh3",
  "key32": "2xcZygn7B7ASNpQ5V6jij2Qhbwj1hjWnyr62yD9BtxXSP2jvErPRfeP8Ymg1yr6kDzTFjoBqZTHTsLxtSdnKGH74",
  "key33": "34sVnjNGVNHTv2umYT1VbvoAZ7fiF7kjHrc2mgwGrUKMEMEkZsvzHmk2waGvEdT8mykvn6fZgvYsWnBBziyLUSox",
  "key34": "2pJ89jCLuU8zRDZ9SSDzMdLsn7iFUnxgLX6twCegKsuqPMmA17STFn55rsYxDMY3Njcqj74Guin1hN43RVquDe9B",
  "key35": "5bT22ereakhMc4z7bvELQDFqshHq6M6QumvaNxZR7vg7VtQHPfoDLMmUGhfNqCRb9xB6X3akbkcwzHY4mRyAtt6b",
  "key36": "3PYHfPtnGrJP6drwsevEhJgMinh2HpjUbx4vxdm6YkgMW7QW72iqJ45Y9aP5d1TqnRPqGrA4PZsBUGpWP8wWg9VC",
  "key37": "aPNRRtXyFyv3jzZQwe9MGZA6ouUgrDAALL9C1gyV4gy8vCccQ3fAX6veSMqAGpo2Dk4MUViXEF6VzgZtfHYLB5x",
  "key38": "2WjMiLMRF57Ufgn2UnALD7kYrXkCTv7NroxeE6YiPeWahnqsF4qAcEU6HhWDSDjBB7GY6oEmKSEoDZKKqkynQSK7",
  "key39": "4ncLEc3YmqK1j6NfLRs9ht91zjVNXTb5z2LqeGQBr8hQHFV5t4F811PgBXmzd4bKN5szSaUc7Ckiw4LY5ZwB3sNA",
  "key40": "2gHyQFCNBPMUGQdrd8U1ik45XqKqJeR45hX5R3vy4K1XaQD2tTgHwka3VnTTtRJjayKp59rwurKynFGF4uscKpAJ",
  "key41": "2p5DxTBofmW7tFn5DFLGbsurAXhgPdD4HhqYgusrkpEQneMMdEHuTsi3ffFTgfux7jZ9TxqDMQ254Bx2dnQp98hQ"
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
