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
    "4caksTxxgA2qfRoRovaR2VM7LGbtRDsS2HrJVuyJEECCXSMkwgLMaBNzqBc6mKuVgYevnGAiNixRYUz4HUoqJzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8LNNUhNziGr2wPJizrsMuyhifd5FzuaYedu7brn6R3GmHhAg9U2gTkjkzY6gtqAUM4suRcyzx3agUD7rmt46LR",
  "key1": "3TTHT9gTbdvwzgC5tQBrdVPZCtyJbLwSqvdKYPGT7SA7qbFGs8FiXjrBQ77GwPUcV8xWWjr8zdCEoKhk14oXMNAi",
  "key2": "3xqGe3rTAkGPKxN2b1fGGLcgoGBtUyPsnLVuANZxZcftSfBBWaTzRQhq8z5pj34GR4gwztWa4HZP8CWdgev5hNyD",
  "key3": "JJwPpUvhFRL3iRTyEzgMbyQfuKKU4kt9irYa9Dc44JFy9WNeVf8SKSpfPzTNPLdgfEWvdagASoQoLMc4PE1j7TG",
  "key4": "2UgnGDGNuFb1WiPVHtghPB9djsjny44iQHokLt7e2hYDnHCtrTZ3GpZPLAxwCCoVq16dKSa8fu5dhDTGXgz5kJBs",
  "key5": "5MoQ4DAMcLMEVKpLzFL1nPH3ADveu8NPtuVoaS2wyhCtecH44JbGfaKFHdHLh2VqMqx7juJDJsj3chJsdCqg5645",
  "key6": "3vnij318XeVrt1yyeZVLeTa75J9e7G35q8bNsTfvvc6H1y3Pytps8micgKhtyWa8559xgdWMBfvqrRXAq4zRNZSF",
  "key7": "JLFBbhBwhSv7m4NQdvmne43A4TSn6PkqvtQg5JsstwPZihLV6DanoXhRpR5XY5Hbwh8q6cigDHRZLAK3YZfpgQU",
  "key8": "26UQzjPqxn1L3eeFB8BqtURkqpeZn37Q469mHvuCW6gN1Km8AzFRpi5sn8Y679tHAkNm6qo2gTJpHd6U8L8Gf9sG",
  "key9": "3m3oSHaQiCB3jFAoyngc9fapUEKu2u9ZijRhpNkUVKJ1iGBC6M9K8jdeRu1KKCYoXtJm4xN232mtojC8pfavX7Rt",
  "key10": "4XvgQwSwYngyLBXiQsdYbxa7urknmvRFxNzQeSMvhkQyQv9iSyJwLiEpx8e4TKVuTbKKqxvfQgYWVmtrPtKELKX7",
  "key11": "3F1Gx67qiCjWnaFUkooaQBMHKqzBNvDaj3aduYXZyRW4rumvdMzgkywKphRZcVeQjv4b9eub6kkVV6UyappE31G1",
  "key12": "4Ypw6gAcdE7z5CiWyScq7Y3uedq7RfE4JMo5SsMi94TRSU7qjwD3AizoYYEhwfB6roj112o3pUszVDLqyhp8xUgy",
  "key13": "5mAnWKxGLJVTMvaEht5FcugDooXuppUUSMso9JBv5htLHaQFsH7KFBqqsqxd7yiwnckj72RKW24zyfCJByK5EhNR",
  "key14": "m87sDxvmnJwcZybvztfHzZgbBoEpMCmAyzask7X6qD4nMqCKsfzGEixzyJwwHhkJn23H6HnQZzV8VADgab6zm6R",
  "key15": "4Q6FiTrf5GPK5j4JEacrCHyhY72W5kfo2ady6WtvN36RfkbEyQtBE1q2J2cW7dXugAndR3BLMfwhJB6svzmSw2Mm",
  "key16": "5UaFx5QWH5qXiphQtGFmC8hocmnq8iErfUNABnqMAJQs6JAhTRzpp18m3JEWrFbcLts4C1kTMUkejxhq4vpDyYRS",
  "key17": "4XwwpjAvuRvhHn9QEyRusgV2orvZ3qhFydgB3VzsMyiGu91VmBYTeibjrtw3JMvGpzCM7AVxHDQQ97VuXXhem4dz",
  "key18": "5t6SqLBofMvRup1wcEfa6grynFjxPMM19i1KiSTU4Hp5JzMxnXq1ouaWdQjigEqfjhSyU4kVjzS8hoVXkF7u8Shp",
  "key19": "5HiU9KVjoPPSCPMEYijCtzpQ9dvWiiGY3mACF4ihNHbHk43PMiGctqDnne7BXZkPJwUBY3UD8gTssdvqC2tPexsa",
  "key20": "5DgJHR5UHKbF2RTG3wpk17WvXQPkbiy9YeTZQQhaVSVMhuakUtoMaDG44fSqc8CVF76of5rh92tWz8uW4r2MFJtv",
  "key21": "3ckEkifeQTPQCkNdNSwMkvHm2SJvrukfSo6SJ8rTpLkLMRJLHy44hjiYkfjiHF2vX2wkzFHsZK6y54oExAR7XWq3",
  "key22": "31UXekcncJ1pXdhcXbXFLENiqc3mCA5JSEvbrisEd6syjVJwDu48wJ8dgQLTTEdLawKefVNKq7vcsNoaMFR9STzg",
  "key23": "CneU7ThrNpP9DVatK6jkzCUQVTGG6uuG2VpaNafZdAPcvNXHHLU9U2vW47WzmZRjB1joxEooKL9b3hNT3jwL1mN",
  "key24": "579XHg1wThf7Quu7VGJrKbauAnqzM8dHuXWhK76GfEJMjsowTzeLm69BGQqMc2gSuKaLwc3Xj8zFPZ4u7h4Myz5G",
  "key25": "4P4vt8dkrWE3tYV5WdBqJtMyt4zxgMLb3mT2suxhaZXpykBkgQ3p3iD4mn4Yochm2GoHDQyCkZ4ELafskBWxUX26",
  "key26": "4ZH7GFmuCs4thpp7ifDYRShiBNhNfVVBezRLhRokN12KYhjcPUkTCJptdHYTMayTfyAb9fsuRFyqQwgu6wDikcqe",
  "key27": "4u2qJnE2ghLrdzHsQaKTzcbtCGaWrZPmSkasg9o4yG77UzGT3zwHAkSgBh7Frj3Ae8FvjJu9hxWnphTeroxAPZNN",
  "key28": "5wpffLjC8VmZtfpgaw5QT1MTxWHJGNdJyQ8BjtkNTNCRY1UdLmnFpnyBvvUUCLT7vcVFDENasxCaYPRMCZHD4S7S",
  "key29": "57evJk4N3vxSpF6xPGGRQ5WYAZFjnSEyMaLukbwUSMY8SRyddxrpNa2ybi3PKXMGGgSz8oVAecNX37nT2EnviZWD",
  "key30": "33EVA6qHNjp8f4BwbXQv98m9ZntCMePVRDpMbPpowL7Hb48bTeatgpXCX4MKTKGkz8ZBCBYzmLUEuQ2KAa3SBuHY",
  "key31": "5dP125c95yrBPdm9GSJc86DmQp8DnKhufn8bLYqQzsupwRcsbm7sLCeD8BRKviuW6AqfUGTctY44pnvRfZEGoJBR",
  "key32": "Sxpi4RaFeCjwA6AXFPG4PvjtTz6TuoTwpkNbzVog1uhTE8Tc1MRHhDZFww8QHxey6xWRpTm11uJ4Zmmxt6Mwxjb",
  "key33": "3qBDZsS4uNmkQMSUvNZ4HkC91oHwBDd29ocCxNBn8F8pmaqnMzfDDJKu1Gcb7cy6zXZbCz2Vvz1V68WNPKAyK5Gx",
  "key34": "2uZq817RFNeffLikambuYA57APutqX63QQH9gnk8PHu7zzz1j97xY9WgQDfXij7QmmBTBR3K2ghunBSsdJpM6HgA",
  "key35": "2LccmwJE6hcEM9rEgqepR8rerTa4AW1XrCUXt9pjBFaoGgNBHbYVK5rUzRZXmxJ2SGSYJJxVyPcLAorX5pqzMGQZ",
  "key36": "5RFdK8sACZLAojC8vTNaSgjQm1d1yVbyqzqBQ9E4CkQ9AbVnijSN23ajCMWa4Br89TEfN9oLDSKH9H7brrZVi1qf",
  "key37": "5faT9UL6Dkhxz34rXgSLTLMCpYvWL5iGshhbYjtsDFfraDndjMZcXRBngu1ZkyaDMBiLpUhabxCEFpqNiApd2yzm",
  "key38": "517gMgPkqdUgSAP2QCuj1so1aM49BCkqWi21kEnM9yLRauqJS7ijwLzsH3yVNmCHEHxSSnPLjkVUTcYdDEAsAwLK",
  "key39": "3kYdbYkjPHav9emkVBxm2WwaXEe833bToRQUe9wbdmw8B3BCWNoAywC9bsJs4eh2APqhrgaTbtAa9s9tP72RFK5c",
  "key40": "5uAbriyjXvFL4LrGzCi5EZJ2mKcbHdA2evLznqBKmJvTNdY4GhAPBzd9Y5s9cWKuuPyNDaQYT2ezpZz3UVCfZjDg",
  "key41": "5ED8Ti7vjCA7UqTu6JMwpTXGycWUvRKBLEMPovy9dec1KHDsp3v5WhrW7Ww9jwNuTqmhyHe7pGHAkpjVbEZzojV2",
  "key42": "2cEh9u46wMNEqX4rhQbzjgobjmonsQQAzzxfjPijkxjKKTV6SwkPu5wVqMwoGwGhWFxmQM5856GRUyC66qiagmyY"
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
