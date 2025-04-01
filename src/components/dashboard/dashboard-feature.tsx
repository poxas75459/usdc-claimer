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
    "2FtXcWAs6FqS1HF2bPDUANrQW5qLCyibsztFiLayt1DgbT5xpJRvviwhsZHTNuWGf2vSNERUzXffqTHuZofGh5Dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iaBgom4jv7njXXpTfu6EHSNvh4dPEBDJoAzigkQm6rP2dfTqWyA9tQi1Ewtfq65mSNbSSNQcU45tS1UdGHTZiKD",
  "key1": "2gczRs8m3o1Vtk6WAeYiB8wktmc4GAsgctf4aKVSbNBGQYJCW4Auwk5mvYJgQHFdhzPaC155UH98aLJvxTu9zyiz",
  "key2": "2qFhqb2qUzTyyhSXFeUostSJRsJ88u9WB1hFco71Mei7RCXE7AbMo5rsXXYowzcrVxdwfQNNxVpMJNFCap38VAwG",
  "key3": "2Gm1g9dAfF2Km7gcfgy9rwyXT2M23fagABKn4gUbtCYDr7nmNv56e6EYt8HnSEP4iXukMeWd3DDzsM7dWPk4WmMM",
  "key4": "2G4QbrdpvhCnQpficxxGX1kmtWZCS2VDkoDXaziCTVLinHVfJr9KZnkuTjvmXppUnce7gCggdhvZpsb2DN3xuPeW",
  "key5": "2Zud4zGTv6LmhHdHjxCAapEe5Cu6fnXUH91KSwyuArsu7FPtrpWVxmtwN9idzmsJJuvWeqQvtyKghqrAkWR8QzZG",
  "key6": "Gf6wNy699k4b4psyuzg4z7HfzFVMbw2WQWQ47TTVcm5jKzACTtLsT6ECUTvD3ZHYAY9L86ryZFhfwgWvi6UUqrW",
  "key7": "29j9DYGmRR2d8acx6jBQmtcdsetCZ7cikXUyQmcfHwWLFU8QqeoSQ3jAbTyyxwpVFLNejfSqQ4vecK8Pd8eNL9qt",
  "key8": "5LB5BTucxdED4c8bwzUoH7P76LVvRUh9CL7XkDUpCqMeEBs2SkJFfqXhbWTcT26kzHz5wR83ZDtU6U2eKawzoTg4",
  "key9": "4apmqhavdVeVv87s9pQiUMhRPWWeA4XqRAaLGGM4DrY4WvsxUh3cRo2vCN6firefbAwRN84QK73wvnYpXh7qAkPN",
  "key10": "5VnRWahGJsUfHp8JbdZqs98NDhvJXGEcFuEq8UB6Tm35YVqyLoGQ1SKNfCufGkFFp26TPzr5dJgT8qQdBY6vTNEn",
  "key11": "5AKV18XSAMHkC2bSwu9Lvs69jP9fJdt62zMPHhJV7fJmSizB6jTN3TvuXkZVoZAAj6h2RaZz9ytCHMgc1iF2hGmx",
  "key12": "arXmgBTVmEvk9asVAKdvuMiYAdA4asPkzdcVFJkQZFC5Zvt3YtV4n1ZPDgvng3PpbbKitNx5jNk71jWprLAt64P",
  "key13": "3qUG5gbscUeYEBLYhhcbsj1UgehaZhojhRajFC62NLFAMMwGh8P5WzdnWUqMFdQjrZom7PsdwnRZYVDbrPoCujef",
  "key14": "4RBAbYfb9CUBFbfp1wQ2ti1tX4hJQkpW5LA7wNR3v6sdemV72SZ1KH5HjZdnvzRGF31wrsWHn3S1bmiPRoUVh5QW",
  "key15": "2DD5EvV1SkSyv1W9Qgd63K1TwRhXAbBrSkMd7SHrovwQgFf3dWYLqVZyj8xZ86fHJ6vT4MSUNmDcVto2w8xY7kZ7",
  "key16": "4QgGGBwF3SbDhuENnhN3oo5pmLUUKkJGSncsSd96nRhmz5VGjHJTiwMVgTBsRB5LB81GcXBdM2vif5BXWsPuYaEK",
  "key17": "42LtsV4f7UhWTaBMGFk3oAguw1JmrZqoCtCrwK83zCJDQ9axrAci6ZdbXDcYUgNQXhNfymScrcNamAiR3Lypb8Wv",
  "key18": "61uF8D8mr6HvhpY5HcHtm4YNidNc6Z9HgmfY1i5uWVEzWauEn2gNXwTdVngeHceHQjBFJAJx3idcw1RTsAfhCJNH",
  "key19": "3LcNSAShqG18bH3ZxVfvTy9pugmFa1yA77L6qkXZr7gKcxLFmgBgiiQoAYZcMJEfWfmkKC8bWYYhrjyundck3J13",
  "key20": "4QdajddfFqsEwDf76e4bsAyoJwBwfemQSDn6XuZHsZ69Q2eTxNFRbhbKiBAWeS68tJdQCBbKR2ePrazeLordaoXi",
  "key21": "CvGMSnVfmWfCNh3mcdezLTYe1Siduh6rYbJU1UmkHLmqbWBoCr2GXfQxHzrfKG6FBxmWtsbGwfbxkmSnh64oYNN",
  "key22": "5uNKFMLPFwByE5roMhCapsFhEDfdorye8c6MfpeDtnyDfK68YVa2d2oKqsUsZ7jYDo3iFoAuk65LmHyLF5F6wRWd",
  "key23": "4BfL7Q197jyb3XZAMENd5L1uZrkmsSmAZ1VtxpYngF3EBe88CarrzsV9Fve3bsErKgfDZ2uigvyVaGSwuJ1Ppant",
  "key24": "4jDEqRzsb5fvx7rPjfkiCPgHAgtMd7FuzqCcL8JWavtgYxAyeM2HsHpA2gA57MTkwhqKt5f3rhmuwBmYifvLAFaD",
  "key25": "4Lv9q4bZBzCjs33tFShx5XvELPUWr5D9VR6CRNf3ZTYjSTs7d4CEFk3w2kMa7p78TkmxpNuFa8BsnupWfR3eXvJ",
  "key26": "oHVDpJch1Bt5ok4q1U3HbGqATHYvXWHmVyy5hEmDNL1uvcAta8thzoPiU4YyPBFbmvfwJRSWb7Wkx8NoYohJeX5",
  "key27": "4vKpwnCjN7vBEuYpAHsvT6Fo6sx2z3MXZ8D31GzFTri23UoasVhjTvPDcDShpzWX2xkf7KUi3K8Tnm2pDppWKPyv",
  "key28": "4AjGR7zHTUi16nubXLW3JUsRMot2FKyRAX1kvd6CNbG4nSeHqfrfjkqJ6eyEnJr2RgDfKf8KKLgzBuSswj4THqgq",
  "key29": "3b4TspjzbtazkrTwLHxFboQdgWgWYDWLXu1MphozeXK9exZVw6rEe2oyZMP86h1hRcgWdFZmkLYo6yeD4JjxcuJu",
  "key30": "31w6CsXgD49cvfQ1x4Uo3NS6N2fk6EwN9oGWVZPh4ppPr2X2rsDrWXbdaw3WjMjD4ntxckH7E9bHcAm9efGxLobA",
  "key31": "3owFRMVYaeQXGoRMjotuVh9PnkBTiC44YwzRT5iipLE2VYd7sdJEGT8LJsS3tRXSKkuHKu7BDZDgkM71eukGZa2D",
  "key32": "2ibjcGvbUjBoPQVsEPxJKErRniqausWFRFNSFAf22bXdbT11NGo7fCY1o8rTmQNozGKXW9H2p3fbMR1zwxtuXEPi",
  "key33": "2VRJRRkhUGG4CyAi988GSEJzLcgabJ2vkZRJ36p9G9UAK8kTdhdhyGgSjyto2sMM2czmAHFdfcw5qhNesMShZiBF",
  "key34": "54jiocx8RayRd1nrpkU1cyuRagVjcgddRNzR8SASkJRKqe8qe9UcP2AUDvuzbutMTMpWG137gPAXUyTHzGsuV53y",
  "key35": "4Zd6nntuEgPLuqbiPnhdiYjxDZLhQio3eubxuG6Tdf41WuCFVJzUhHvHbeCvM1t1o72fuPgGEMxq6ovyEPS5ZPaK",
  "key36": "2fVTwj8Qn4etYKzUcsJouNP1FRghCV8pKaUqKkih3SizVUb1EHrEoMRgQFsBisq9pv2XXdCBWSQiQPQt4M4yx1sc",
  "key37": "5Xhy3ng8Xjsmr2Keechtac7Gw3nv61dZmMMnpeZC1xQeStpN7rRwhvRjuNcWQAYpt2MU8iL78PoUL7Q2hKXCHQ1V",
  "key38": "2d7P9eRgMdyJU1LMeq9f7mwoFi6oGBvzbcvng5NHFmFUjZ6a7GQPzjwoCksR21JMWrEXnWMEGucFRXevQByGWxSA",
  "key39": "5iKgTNRDAoA2tm45kn6CJBjMgQsiEFeYvoaxGBqYgGS2bQV6AXP7TKCzi4qMJxzZckqwDwBGqzEWYiW5wC9b1o8e",
  "key40": "2SyybqZhDENguQEBSLZCFXPjpjrrRHXNdmQVVbnCAVPbtuRPd6FS85qpkDMbWo9VLVMKQpSqLRo1Rs44EmigM4wT",
  "key41": "aVcBXwMkotxnWNUsunLfbVCquxsKT2B22GL3TbKdmoM3UD2EpTzLnpwWX3wKEmxJBwC72rWWKE5LdaPqYX9wZgM",
  "key42": "9kLUnnnDDSJw5v4x9PBmSKYN3YzNu7nYubXW45eNQtBeCDTwFrpHZXVGUKYwgyH7oJFmE9turWhB2NEQXxHZPcd",
  "key43": "3tC8gGcFGmkJjwCpAHgcsKBBUVMWxLBjPRvesPfEMcsSBg6jYMZ4ZHLjeSt5zDSoLTna6ocrfP2LoVd9GWtSgppm",
  "key44": "4yXCoTeStH5aakXKAFgnoMJXnoTAP7MFySzsEXzVxaWy6XSpPevjJgfFgN8FHfXMAsTt8gL7vCVx2ZLCUG2JA4p4",
  "key45": "5568F7JwWtNFk2bs8SSoY5WqpSC9AH9g79UfbnGmqTSAEo9b4axtYdefZQCrhvVeru3tRZ65no8TUivti9m8iWKt"
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
