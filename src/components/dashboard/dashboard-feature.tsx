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
    "59Vq8XvesFEPUJqimmEVjaam1G862qWZrX5CQvYeHi1wFX1MrSSMvBco11eymcRMLKGE1FM6CYSr3joieqEWHtN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEnJec6h9a4C6qEXyjLNLq7eHS4Wh2rAKqiHYWmkgFFST2xYYgPYrVwA9unto1LmSNBwZHFtigfjW1qZHkkJd9G",
  "key1": "3kq2Qw47bjUAQFcTLxf4N67HEiDkqYL4trsjnoPwWyFsECfayUjBmnNKjM7F7id3GGhXVzQtrqR6XfPYoYJA5ahq",
  "key2": "2YCEwpbrKwnMYPVzYFQA77zSQvYjaao9dmFXKTv6HncCNwGccHVaHkPNKUdeA3VhcGUkBb352dHfN1j32RBeuDHs",
  "key3": "2g5w9Sec6xpVcVzXeeM13yJhU5aXZ94mR9AYvDEPgYznS2CWGsNo5hdpFvWWSXaKjRBrS4AUXG4n7Gtga4fiE9AZ",
  "key4": "M6BSB9phRzVTDsX97L1887SEnYmag2hqqwtkxinyqkiQj2d3MRgfmLn3KdYxCuecAJREW6WysGrBauYZuKe3Dcg",
  "key5": "3MiBRr8hpPjdSSex6EirJiYffnbm7wPKjLSgiQSg4QWY86wYz76Z9ZsxsCMV2PCaV4uJjz7oxcbKnm1vWHywNhKQ",
  "key6": "5xnFx4op45XmvY5dDEsRiZxWbYZKC6vFb4t2wFhzZXkg8iGi2TSbn7JAQow36risyj2he1S2Ypg1zKmFv2emvLad",
  "key7": "2gY3JTFzMwjUq2CReUj615UghovV4TjGuwA6zgypfJedBqB3qymbUKKpJwodHeWy66YmqaTwbQXSzAbZ8PQTGeM4",
  "key8": "5qdYjRmBooh8fcxBtfFuT7KZca59heCvdgW9umUjRvB2hvnwtG5Ej6Q3y2XZCHHNhaQVn4tTu7hCPb9upoExYfVu",
  "key9": "5a9ttrJkKpnWeWEZpo7vYZF8k88fGf1Pxrqf38sFPMuAuMUVy6g5HvUbpmiRSez5tv9RYPyyoog9iWuL2bUHcNJ7",
  "key10": "2JM4LndPvsZipTB6Q6qRFBCdSGpw84c3ntte1d4S6c14ks9rNoxi1B5DMwXd7qxnUpR3Pb3MxA6VEShxGzkMT3mn",
  "key11": "hrnYE6XE4BoVRgvLEoPBGqaAaiL8Etou7v9hQF6Y4ESVdEWLcDX1dfnZCf7ZZ6TvLQQDWxB8qaDS9BAuWoCYP57",
  "key12": "4J1g76ijfDT3zEaC6wYPJmVu8sxGfqxAvi5uk5FFzc7WVHywj5iZRJB1V4XvkEjxR4sGp5mCPQ4UTU19TbPSUfJU",
  "key13": "4bQ9kMChbZPigUtcq999cyrH819ToqGrnUQCh9RgonTbK7fG2L9i5VYxohcGppSRkeuYpwZQoMSq76HZ7kCGr2sw",
  "key14": "66qBg7HjDB4rkfL9Pv48XfLZ1LGczZK2dGDxunk52YR3kRu9FzK82sratMWrrdvscWkBMSt75HST7PRsFiZyFFy5",
  "key15": "2Teutc9GPWnjDmekwzxgp9Ji5YkRH6EBaGvTosj4FSC3crV3quTWm1g75vuvZZSNHqkcsfvyDodGhbZmgdWgBHM5",
  "key16": "3XtdxwoDeVs3CgoCkGgixAia4zVnE2JN9Gh1zSxq2faMrVcC7SgcB4vMkza1CK77AK8nr9pNar8Ct5uMeDvuVSgx",
  "key17": "3mhvvN1A7HJAGJZc6GJVTaYHG3fm8haxe6jzcn9p7zEnqzC8V8zdo21QnkqsdhmA8XCo54JKqbpzC78TWC2K53LX",
  "key18": "2e5vms54mGea2tXJnDTvE7CZ9iuCLKuVmFvaq1TPWrvTZncL71zRLZZ1iSuMM82AjtDBXiUm2m5Kr9WxFL47UDbb",
  "key19": "66ibTVL7hgTWqkQs9a6BKHButjYh4ySfBzqDXLLYUUij4asvo29UfUPnJ7D8L1qb3XbrQFgniK8VsECb4Rg1X3kv",
  "key20": "4bGEPHfmLw1vtxzmsNaKP3SFxBjn3kxYnLcGYgbPodkTKv8z9ReoPTUYbFGSbpPPUKu6SsyrtpittSDMqYFFTRTS",
  "key21": "3izu8bdxwx1h5JLe6SqfJdS5dSeNGK2TD5saziQzysMumVeGkQpYQHULrhvWZpN1w7qGHbQY6uFMj3aJwK1faLRA",
  "key22": "3VDieQPi7nvY5bqFNTvFDhYUskt6qKySgfD1ovbwvNqwGdY1QxvMLJLJxaQvjK6KeDkamKC7RwcvNK96pn31psph",
  "key23": "oPe63d85jkKydsYMErAknm5Ct5uf7s5ZKVeKRQribGbc2ZPJCgfu5kJjmQFz1J5Hmw6JZBqc7Nmz7vrdB8C2tMC",
  "key24": "iFzEo7EPcngWzQSp8ioKzmZaGVjM2hzbEjcAXL7dAtQVnGCL4S8nciGeWeLepWfNufitLSVRxVzgwtbRxjZwFAy",
  "key25": "2qJkx42xTkZp1GgxaoxNAKjMDTgzaNkmgL81cHNdGfhnamNBnkpFdbKRuLL1A4nWDHGvSA1Sbbzaq3AVekGGxkMU",
  "key26": "4UEKv9uH2ss6xVnWMBS4cZRDyS9i1pwwqXe4WznphqeacDjd9msZdG7zAiNadqXFcF162QVhym1mNQAeSa9KoCPG",
  "key27": "2YnX9NnaWZ5Her31DQNKPC8U4VmxQ2HduWFuT1s4oc4vnHv7iZCvB2uB9p8HKibdWnyYzd9fevjyzG7aDeCvNCo9",
  "key28": "4sTV3uhz199NsbP8z3Dpf1UiAUwsyLZAhdbHRKd2tADhzvSmg656TYB1rFJgC1ruZyniGHexn3czTZhS81NCH1s4",
  "key29": "2cgwJttF5Dm8gDZGnVbrjFaJQA7CXpc6vppkp2JgakxNet52s14CSHcHQPPLKAPeNKU95qfao1Db533jMzM9GjDT",
  "key30": "36E9scA8Miqzs7RmR8ERmPWa67GwnNiXRdvwtM9crSqRKUkUGrE9AB1y93KjiboQu5VcanWmQi2dAUiWjkoQo9ya",
  "key31": "4FMTm6HwVRu59zmpKXwNS7z8e4nJSvdD3cFrj5SDFbhV4wQ6RDWjLbSnBw282QqQgSo5NLwJSpg8zd9hmkZwNscw",
  "key32": "513yuWJ9w7kMY19nQYHGcRKHN77GjGXxvBS4EcRGRnwzBBLF6RBur61XPqgfDD1vK9NYD9zNbSa6ar3MgHNoXZVC"
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
