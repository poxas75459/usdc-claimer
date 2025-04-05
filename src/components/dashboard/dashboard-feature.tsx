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
    "2B7YxkmFYZP5mLqTpztFzh3oAmBySt6RdhVdo57dXcU2Hzcv8PK8Jop8x8RtojT9GCCAEBSp6XyrxvnRMTCoHcRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8EherR2yG1USGjj9AJ6qrgzJ3SHbjeXMKEUJJDwwQjqiz6e4Ab5EPMjcGSCnKKPtvRxUcjsgTEHdfsy9xLmjg4",
  "key1": "5HGyNLy4SJTkYsFibXyUZLN8mD1uFUPpPmJt1TeJzfbUGZzjoSP6eqmahSpkYQx5nmN8DNSTsesJGEwgw2Y4bwBh",
  "key2": "3ZD3VaoCW7dt3AzgSCvdmANVdB4cSwQtdbhGxXKhgVU9EdPfduQe2oVoNXjwwBVaYwnMCpNJmyUjpE6Kca4kNG7y",
  "key3": "3YXxJisTc1rJGxrBr5CEwdpwDuxZnqhhhH1FtNJkjkX3keRnJhWdq8AxhPAZBvoZ7743KGrkosRe4hi24pUaqYeU",
  "key4": "5sCN5XGv95MUTA4Pc4C5CcwDk9sSnrn6TJhaAVj85x1QoZqFrHMeN7wTk41dPRpPSLs4U3knfneNSdhQcXByStFd",
  "key5": "28GnApTTaXePHEK2w1iz2L3NXZWKR94bE95ZYPAphFzRFZ7juVjseuvf5VMVgWhM3REtowYm8qTuSuStHnQYkSmt",
  "key6": "39YW3yAcqU1CwyCDzczf9DMpvi1Y2BmSEEcctb2jhgDuyjxv9P56WK7v5a4VWKaTbfaMHK9Jq9ZUtuMUgmJDmzqN",
  "key7": "8SQhNe6cm8PSTKkmEqKWPREyNZMkqFkuKv81s2GC8r9y7b2ubcVRTdZMUMRXUQ6UUHKTzojtVx6J89EoZwrY8h9",
  "key8": "2DPTa3QZWhsVZmA5wVvA4vnoM6sFWDT3Zy82mSPdoLMHQm9nnMYZJ5FkRwVYRMfAMUMdLpxwBP33xQ7rDK6MUapV",
  "key9": "5dCKNMVx67o3VFU9dRD3bHH1xhaVorgmRuPaLGV4XHu2u9RVD1Fjd8dywnJqhGRoYCEHjGHTaP819Nwy3UhjwmGs",
  "key10": "3QvpRrcEzvyeX35GKNSzRGVzfTjDAsH9xAYNKxvqTyZedar51XxorVje4iCGvpjNFQYNarDpFh7z8UHqcLLBM91s",
  "key11": "2LtcsT8s3XZ2n1g1XTnGrsBFWHUSQTn5ByXHvu4xQJTnP11XeGEyb5pUDkYScchrhZVkHPoim7Q37dYMZetzbZJZ",
  "key12": "3Cr3s5zrMAB4Ryq7LKtyeJjUWsXu3Lr53vMrhU7gqM8hc8P4GxmKbVHiqYo7aVDdf2scDuVtuYUXYtXyrBvGHaWW",
  "key13": "3fur61oeVsYfLQ6YSAs486FnCXozHXfvJKXKwX5uudKWbto6ZZJrF9f7TLUCKJW2Abo8qiaoPHiaR6oc3SDP6P3h",
  "key14": "3Fwx8tjjEAZ62oeUhYdmNRqrwMpeQcbicgiMe92T32FBqDmJ9wmNHWgienN6jfAiqT6whuxaBFZJfz4jYsEtBFdM",
  "key15": "65eADZQViL7Z3qxNQ8FscQ79cQmK1xfKqj8h7cGTxsRs7Fv7K3WUe6DRXCLt3q3yto6iKzZNkKLYHk9H5Mgry49M",
  "key16": "1eNv87C4Ao65qyJutnEcZkvWRnaV3Yi7Z5LNnV3NiUFQ6eXsPf88Dg5U6ycsAiRrYTDeiCCdrRZZkUKWYFUCSfW",
  "key17": "3kK2LxCZsW4zQmTuHtSQiaKrdBSdESxNQQr8WCxyYpiEyRLjNQMVr9UeRXH2Sq2nzpxbwp3Vsst4ueqqFnSSraUw",
  "key18": "3FGh4mUp2TLK31pFgM591v3VtJBpWLZ5DwdsQ2xBbGsdYgu3N7tiixGwPEmb859KJzUtHAteqpNUZd8YD9syQcEv",
  "key19": "5UDZ4gorWXeKmA3Ys7Sj64TqY3M7TPbsAbCqRE7BYgJCN9TMefoNJKidMNLSA48RtJCG4C2Q62VNVxLeHYvFLKsM",
  "key20": "2JexCdRXHQEWoKaFFwHJ1GJrf5Fjts7mxWruNhuNBfqNVZEQL5J3oErUbwsJ6nZhqrJgNXU61ubAJdLLPsKHPLgg",
  "key21": "55224LVhuDKKUTNg9iiWmh3oNYgPDhAFEXi9vPQguWabHNLvadxxtK2hCFJLJToeYVw1kjFcb3LkdZGfc7ihSYk9",
  "key22": "3ToSUTmeVrpXpJ3HXkfFqpQw3d6uWXjTUSqi7SVSGVLMpxLp8iiXFNSqXSF7xqvRX8MuPB3dA2kiLY7UChzWtDfm",
  "key23": "5hj7NCez3NCSCchmvDkuvkpjX5Tv4inHurFuR6iRDT7eqrd1Dtpx5Gd4UJ1qdEjVGhogQPqLgrMPuFLVbeGvD63x",
  "key24": "mokMGaZiPz26KBddicLkqPJfbaSPEu9k97aWRngJFuJJUAdcRdpkE13zgirb9d1TKHqEM8dZoT5WPASdz9kv5vM",
  "key25": "wKCiijyq86hWLWPFDVpQnH8TJfGokjWeJ1wivzXFrfvHAAzqCRCEs5mdbQMaxoU9UmQWaPJ36i8xJwgBddgKBsA",
  "key26": "5m1GAknLm2MYTpXTHeYyjPWiGoN4nnUdN5H4Cq7GNLi7hJnhV6weRAnv8HBMTmdLtBMC6vyGKSQ2otiGa2wUMNyC",
  "key27": "TTEyyMxtHpRXeuSe8z2SV3hndBxA65SAzYoGmDYGpgzm6f7wnDtaDxgvTMD7qsSqL616GstzVYLWmsnEqNgFuFM",
  "key28": "3zH9v3xRMMeEfvRvhcEWw52RyTX4f1h7k73bWauVf9GoupJhhzkWPFTqvggW32f9TvwWAuuVBWVpmUaKvK8GDmQ4",
  "key29": "451mBXZZ1im7zVA5VApor3zzL8AJo1QN88YGMuGERPHfXwPHoqh2kzCbnL4EwnPzCA52nEH1b3TDr79qwbyuxboR",
  "key30": "nhXXsQeKVCVa2Edeg738EpiuQbAfyctBtn1M1PgsRqDtQGDPkSWXGWWdyaJVhs6eNQh7dCCVAXXXCuzjD1V31Ea",
  "key31": "3h3Tf4xtYBvLbtDzQd5e4aLCoXK2MCHX9BCR9oPszE3kRghDyGujzr8maxoao2pqHmSGdXbkeSCdEaRX7jaeiRmw",
  "key32": "5kKiR3TTLkQq2FjfTqNjquoN8LcKzTLLZ6XX15ERK5opNrnm17AotCCjBLSUpEiw6m8btiLm5tABa8xsKqGKTLvp",
  "key33": "3FBzA9uNj6E95wGBifUA4EW87saHpxaKBx2Dz33Nx54ExxDH59LFD21AjVgwFhnyy8HoTtGjvmDKrwVZosXLo348",
  "key34": "5SquhgjsSZFP3QDGxUBfM5wanBPQ3TaPKpKtJL7xQ9kbfmVL9pAKJHLYT6cyBN9EatJoAULXdyGgJ3T9PS9zaVL4",
  "key35": "55fNthtY1Ba3E6pEq8cC1iJYarmw5KbqGT2NjapfJ5jCYWEQvU4Vuk43Tx8oke2JEPFSPy9wd9FmYPubWBu5puz2"
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
