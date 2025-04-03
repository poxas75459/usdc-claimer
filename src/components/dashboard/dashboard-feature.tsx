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
    "55Aap1vmDYg5y1HB4oLt8MhmuAkdPzdyQSjsWDB2rFpRqNXXzWpTuGR1tJLWTKKoag6HHmTZQmBXxmEoXUtaX3JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbPv7dLwE9FAC9X9gUnkANwCg4E4Da1amqMHKBNKsbx1LYwVAr5BZgPtduyvmjrFE3WBfhpP2dAw8Z7Bo2P47T8",
  "key1": "51pbkgYCtsZ3qeZvDYURP7tmXJQuFwLTkoyiEpcLdpbneAC8hLRPagptQo498JyDVDD2GSG56RmoLY2KsP9WJg8e",
  "key2": "2khNCVULiP2effbMF9jmU3zzHppZm11aVKM3R5Hm975KMgHnXnDwPQy8GvcjyfbJ84Pk41KeFT8j2nH1R8zs8QRp",
  "key3": "31WfgeQNSYKgReTFNmoSavtUK1mzDshq66cFKg4a9BpHF2EZ3rsy9gvMsbRHEvN1LTSyxFFKLXdFaFMKvSBfj7b4",
  "key4": "2tHN7MKQJFyrnxM5fPysggsjBTV3kLEG4KWBWsupbGenpUgNSTQbP9th81VChVfhT4PZXnSvmPxwvKssVMoNrGpW",
  "key5": "ekVwPhDYs394bWZrMp72QW24XAHYJ9vPDxLtq6ZnhoJ9QJSQa7iEYz65hik1XNTGLtnctiFuwjK3CpGx1nRcLvw",
  "key6": "27Ln9RaHhPAS3T6JGgkBrAC3RCVrFE6oFnPuWz675aGkZSnd9kPNpPsWzWmV5VBj7aFoKfBxqP1dYNyvZN6bsWG7",
  "key7": "3JTmPRbLuVKv36bA5qJnnpGnhdWQuEzN9HtYqbHwL2Foa84MVZNsFKg9CFU2Z9VyTh4q9cDwbTZ1HRYVsT7DhDrX",
  "key8": "24B8nEpE6m2DHz5aCP5ULPi68Fe53DwnbHoVvt781nT9Ntk8uZB4UhgTctThWmPwVGhbn6n3DHHpkidebEDGYRmv",
  "key9": "4ZKLwyzdr787e7kRfCuo1y65tdiMDAQQr1EWaeHPW3G7vh47PWQHdXvoY7UtyKL3apphaMuiVdYPP743PcHJv7TB",
  "key10": "PP4otzgiGdgKYp85P1gYUdBixocYwx82yiZdUFcgZPqFF9exbqwugU2Mr9HmKx4USFe8mdEcDUQBpuUU6NWTqrF",
  "key11": "53pFWs99SjS4GPYgpWdm7cKvThsgRJcdfwxphnRtSZAP3TcVgZS7KSsXSKJPAeXfySZZEr8hTYXoDuLxCABT1uXr",
  "key12": "362UwQbNxC9gfdR4cPtd7FiBotyQi6mVfojBuvh4vpRZHErrEEdqfnBp2ebd9MTPs1qeJvwSsKNhWTGMXeA6hsFB",
  "key13": "63CkgPc5Awg49MWj1xhXcgMmyzFjasPBrxixGs8xsVQqBh9piR1XpYfsguVqtk5S9FYHEJAUNjyuBYbYPsz4CHBD",
  "key14": "XDamaZn6rLvnXqpdPirkLhGhKNTT43vatcjUJuxDdUB3d6qZUospepNTqdtrnQabj5AcPGrGoNM6FNdP9GCS5Hi",
  "key15": "mP5tT3SqH8xMuNRNhLwCMaC2rHkzaprxarcRhTLSoVHm1BkpYYV9P9jZuWjzA746y8Erc6wUxS5CcbmDsj542g7",
  "key16": "9z287DmwyER5ZLmaPffz68pQ1msrt8mQdMHHU2uuK7GRP2JZcijtiwuCngNU7NReauuZ7pAVztsX3dVDFJyFe4x",
  "key17": "54fmKTP4ehT5T4Ug3PLL8jTzYERbCVkMyXSgzo8jDVE4L3Tyj58C6BTk5wQAwpTXnXKFhViBDVAQwzsmKFhGDXM5",
  "key18": "1Ya2SdBW15zba8buLB7y7RF2pVX8MVXinVHhejeTivJTpbg4SAJjVbswTpezoawnEE8pYrc52ZowxfLs7E3Pmsh",
  "key19": "PNPBtRs2TRYZaAb7JBozEcGHm7kbcvaWzaHeVEr4cfJzrDhEk3ZgYGPNKTwkv1evjeYpYm4S6mCsakZ4frbVnkB",
  "key20": "3C7NBq7ngp6j7ogHkL248wpGxpYmkoCS7dzHjSsUF7dDKXzoq5nzxwn1SzY8dbs3wn1BP35VU7sptApe7s4nDnY1",
  "key21": "5JfZCfd54M4fZdmPqXPNDDAiMK9NjW6Xipvap2AH1vWCt7gfKN2yrGZKjY41zzHLPqJmKpFBszWn8dg8tCF1824f",
  "key22": "5tzkmUD8QV4munPUmyjqtXPDLwWkAbDb1AqpUajx8PVDTQgAmk5YvKZsGBMmVuZYbDU1yDVM3ZdG1gkNMs2MN3Hd",
  "key23": "5d2D7Li4Vtu3cjGthmpmTYPrq8E8kipRwSUMaxcjvgKtnigQwHxDtACYDj274EhnEMudz1ogbr7vBhiboxz7b28t",
  "key24": "5UTNAkxYZaMPNR4yW172W9yVMqDpxXW543j7NcJb4c2KvF5xqqDuMfL1yQsBVuggeb74g1TtmsNojd8tQ9UFcC59",
  "key25": "3gkwRXrjYzxzXaqdfB7szDLPp8ZWuk7UjFgh6BNeYHf3EVEVFBDcPeYWYjrTpaGEaxTfJq4247HpwpKtDXNEQQbr",
  "key26": "uBUC3ziSpXd9w9TFkVD8NM3aXqxtEHZHdBbdt6DMUstWohNsErsFpWf2obnSXtaGe5veaonW7VMteQPBts4WLF5",
  "key27": "3aNSUSbwXCnD8peNcpETnTmi3UnePSsTEjQrhYnGTaSfpPaDkN7pGSPsnc4FakuJJKFett7HN3EhjHwT1SVNUieb"
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
