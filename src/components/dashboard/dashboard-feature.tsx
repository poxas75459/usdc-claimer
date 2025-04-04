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
    "2XdQ6WkvCc6FYiSRhLAEwKimbbhJ2RubjoxoF38jSpCMH4SJcGr747HwxmUk1wA8VXddE3Tzbdtc8JeB3zihJuRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jyuSmt7UjAnLwaMkZaTmPNRAGbo7CYqEYCuD8Yy55aBhUfMk16AoG9ot4K5CCAmBPLNywXuErSN9tEPyMHhDeH",
  "key1": "3r82r5o9ASxrrDvMPqUSa2W3ddiHp25G4s6SSP3JLDCuwNsrw3TDvAEqGAfFi3qRJK9bGmEGxGERfqZhJhEvjkDt",
  "key2": "56WE616ve4YbF9LcDPW8QPH4FZnAuszd8PBFqu9tJaWTXuzDpaJ39h2hxf3xWTm9cEpRzY6G8YAsiefwkLAVt5q1",
  "key3": "EBGT9sjAf4zAQhxUZnDwVvobG5jgpLF2xBBneCHeCfHR9WqmSSmVz4w4RSkzGZ4JnGBGwFJYqmfuaV1Xk39o5JP",
  "key4": "rVcdeGjT3VQP8heyvneAycgqUai5AwUopewRUejumtAqeoW9rFx5S31Wc6mmUEL4syWF9Hk4Ew3XLdd6oQxBB7f",
  "key5": "EQknGjSksmEqraCQmwswuM7gWkydiznnnAmMWiAxRakYVSyqW9SSFfvEeeUnUDDcFgQbr1skKajoXiSnQhTqsMQ",
  "key6": "3kzq1epWKS7dDbykzG6hbQgfhEmcAqfAGWV4gGtLUdVE13guqhVmJsY62jku9dgJ1yJW3pZASRBxygC8d9jJPiZ5",
  "key7": "cKJcQ6h5NGZRmbW6mnQTbmV4ydnfbvEajChYrf2cPCFrN1isf8TRxkGD2ZbGxfZmWHHvdi1m8kEvhouRtheM9Cx",
  "key8": "2H4hRzzrvTXhVNtVtMCgnkNXAwdKmMWoVpSNmRkLjUEKdRmanKwFVh2NZyZatdyK2K37rLYyTqrCAmtSWPK5VXbq",
  "key9": "3zyDTNvBLrWJQieyjzjd3BBso8eybfjS32CwZjuYFb8vJaMZDkrZT8C8ok3ye8GqgNwdcY5bfHTKxvTFXBbo6YP7",
  "key10": "2rNMdZrHRavMcXNMNe6j4xYqL72eTYb4YJi36BFYkkfkTNwxccQjSknSwi6D9HuLwBez9g5r2JoyLAcJZxTeuzeU",
  "key11": "vnK7mBEhTpJtt5tdFrAoLLRULV3Wr9BKBV1MkQCN1vJ5fYo866oJcvaWV4EV2vrwdKFgrHUreRYMmNjMroU9qtD",
  "key12": "5a3esFq7cZVsTg6XQq1euuVvEPB66JqM3BMeRrzxiuRNd2xZ3i1H3gC19UdzPsKZegy4WqLHooxNTZpvFzkvquQ7",
  "key13": "LVWCUrC7Qqg7k2E1raufwxFtVcxnHwNuAxcojciE4WBX2HGW5UCxWpQmfvrBMyUocrZeSdu5dPLsdpL5ygyovX8",
  "key14": "5Rnm6LaDk7RAEbjyijwVyt9dg7tMWJnDytNx8TyaNm8isJ9kwJkDRsj49s9z52UJQpvjYgAYnqWT4wTDgnE6Ww27",
  "key15": "2pdzx4RL8p3BA7kCfAcJchpVw2paoEshyTeJRFpc3K3vAxR9rrcxqYrJ3RnuGJz6YF1jw5gboDjoxubZWQM984eW",
  "key16": "5Ydt42q9Q4TMmMitGTuFZB8e3bXBw9prizXp6uxmQ1ecrG6Eg1rA9zzZfHgz3t1ZrEtity5DHNhsUDupgZRc3XmA",
  "key17": "5cHomhTbZjLvJXe4bHy23VckEigJx7pjxoPQNF6Taymwc3SfHj9ZuX4sbeJQQTNvD6i4UpQWg15GpWJVqxe7H9dp",
  "key18": "o3nJCERZBWej3oGcNcxUKp1mFgS5EQmEiyHMxhZXYHmGx8ZPU6B3TEtYjFuZQxAZuBRcBaH54bwNgemjVnBArNm",
  "key19": "3CUgYSKJ6NUmMeqd4BaNqnmGXESbAv9UdKQpCGAsn2rmQKHssXGL4315if36G4HdpgP1HVAaeeM1ERcxWc1ZQywy",
  "key20": "27Yawy2JtbqZdiZQUGHcpqJPRDvoEXyum5idMPVemJxyRwAGZVSyCzBdEnGQQzh58tJkTM3GvjbzecKgTPjQHStH",
  "key21": "4nQLMpoCuYRc1jGcB3J25S9Te1PErCVUibX4CmFXN8jv5fW54nhG8X7W5ZftjLtbxM5qMgnEMzhQRDNGfoc4h2JG",
  "key22": "4Dq5Za7TRtozhgoDG7pNogsQJ4SV7oEnHjTZB3P42AojGjsqZDNtUJJcfVz2EM9SkDsBm9ewVJTFqbZQuVZWM2gi",
  "key23": "uEy8LUa3cz9gvupo9wkeoXfML2PFD98iJjPordXTKHGgRYRmrDBawHBmc4yD3Prgj46LHs14NxWz1BiM5K2GhHm",
  "key24": "4CPQLGKihtDdgD7APUjbzXwGYhn6qKsEkBrsA5wsR1MGwyHV5xdgfxrCKWWBSC8ZT1pprSTgFS4AiVNjTazwg6T6",
  "key25": "5m1CQsG3sSkqXRQpFWenED6dktFb7buFiKmen1Yqmg8WjpPUsjJ3UNmfF6iQc2rQPNN1nd37x6hxJhNLcpDbNevi",
  "key26": "ZTdXbswSGfEuXE1LsB61i3QymVrStnM19bgUDdtPymWTUXMHRJRAfJUJ6GuAeWUq1WNZnfqTzNvSmnrsipnrtan",
  "key27": "3AFp9bk8rYTZuzGe8DaTVsFdhAMcDgAXesVW7A9qAbmHjDGD9vP484MC4GzXkAGKv97AjNL5qNWT8WKo6vhhnsSB",
  "key28": "54jXJnEt62bcXsMtRAFeK4nhb2Tcth2uJmBLGabZAkPVpjsf25YzyeSakEvaZqPcjTJwqjgQ11BwFXK3fufgZsTN",
  "key29": "4fR9MiBCMggVnedh3r2oPQ838ndA7kKghgHQyg23nxCGJWxNF5yPD6vpmFMnkstYhvY2ZdGEsQy8FQofAaRKe5oH",
  "key30": "5SwkHa6ZE4CT6NtVy4YauM4Yne3JqgcPuYU71AFw1fLbUBu7ZfXNnHn1Vj1wEHRPtMpAkxa1NJhv3yspGb4c5L6N",
  "key31": "4PXHCSwRVouqvnoWAMWWgAiRbGSyKk4T1tYgCtVCvgVPdzvfgQ911PZKYfaRP8f684V1R1g9Y4fLdzxh1iaQs8VR",
  "key32": "4P4LXVi1r1TUHYEwmGJvc5YiprBnviSmLFyiFftRQGaNu2UXurPMXdXP1TpqFjTqA3WJgiHuasktRovQaqeCE9pG",
  "key33": "36DTtjwQixJxUt4S6hMJaUTYPwtci25SyEx3gHydx5VMj6B5C62DeoHAxzoxzB2yLMd5YGdooLqhUgekwsqQyaJ9"
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
