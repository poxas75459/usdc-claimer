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
    "3rxQfUtqx1GbZFheop5yB4wY7eL4kp4Lp9kVa8iTZAxCsyw1GmeKuqowyWoyx16Mdz2wxjRHLFUciobR6shioUM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geDEEETeMzJX1TJNM7SUXqTGxmkAqv2x5ZZoBbf5j4nymkePtS7GfhB4viCYuf6d2z2c1AxMHN8akBCQ8mAvyx6",
  "key1": "5BwMeoCrDdciu9cWZZzbxZQeEAkZB4qA72Y2NAhRLeh6xGr6wQgnAuE4RCAZXpyw4h1yDKXPKUiUR9xxcgZnwRb4",
  "key2": "3gsQeYwkYVF55eCBeKgoaH6iqRv73VBMHVfk5udN2xjw2eHQamsoZ4iDSeiiw92f7LVBLG2ok6ZhygTVuBnxjTEb",
  "key3": "4viWFEi9CcqZqvQMuFcfN5bYwuCBZPNr7rwixWWvb8rAnHfQvaUnUYdcKU2u6tVMGUTP7NnBmyuLE3jceUS6VSm",
  "key4": "5FJuywKypdi8xz7Ah5iQ3VTwpkTVf1CNV5iSyUUrhsF9vtToT3BEuZEDPDTEM3qW6cmcH83juqrMtVQwiEzRWwme",
  "key5": "4jcNUDqLqZ8fauVjRWU8fNuauCAvmVWXkv1p1dr5c8JDzsy5mmSLeZQaDpvZXD98zA8AnYaUcwyp5gXkwxkJQZ2r",
  "key6": "3T8jJWipkovRFCowgZGYzPyT91uuSVw4avyeBD2uFMGPMNHR93aHMPQtAzuKYfFcdn1voRr5gLpjAkNaRV588ppn",
  "key7": "BdVLLM2Y1YrhvwkTotk8dCH1ctZPR74TVn4ybZAxEPKtm2GSA8WAPLzHnSCFL3kWvbR8wUBzB999UVmMuA8JJD5",
  "key8": "3QzpVAwecTuKEFASjz6Y7J4KVN7F9cjNYLCJh8pe99AXBC6mRCrcZ22XYbZz8R78nJ61cpkWLQLDXKMGqcFxDckH",
  "key9": "2Ae4chQnJz8nJuSKC9zvj5tVA7owqTtAL4yUDH93SKCj3rXifEqyFtqfQaXTbwsQrnn2Wy1K1RiSYM7efyb44BGi",
  "key10": "2G1Ss7C41w1sajvYcLVF5bAkmKGBqd7paouZjavyrW845nCGLuFmk8Sqjxu2XN7vpPVx26a7bzXaHDzZ91B4Tajp",
  "key11": "gySwkMcf7EAmNgHH5r9bmFKoZEfLMDBP9GN1Xsnx189G11jvtnU3mG982TuQxVn9QJbUDDxfZ5urDY8QfyptQci",
  "key12": "228Vbop7KFMTKAViD9Gi1ZEBJfb7APDDugnujw54zAH1anFFzgLyDveYzgXbsfNHLAvVAfP1fpEJ812q6fFXECaA",
  "key13": "4AWMgBqP3q1R9e4jUSSnfMWdqkXr14XhWUmdwePRijuATvYv4qPov1pTDSDvctsFMp5dLqvTLxxgLGPSbTSpeJAm",
  "key14": "3Cm7SV7UVzi3zrWBu6jMDonx59aJdhQJ34FD1E3RK6SSBbSF9GxFr9J222EnKuLR17HHFihJF5KL1mkxjRSfcnWx",
  "key15": "4jdzv5JNbW8ZfdVWMxp79jqbEkHBxBeNeysJncWrn9dnSTrPpz9jZBEJvtqQcGV5wnPrNwhw4ioTsFnWtR72kWEk",
  "key16": "5kDzZgFzQmoCYxcb46m1H7VxSeNJKZo3Da6fyiRr5BYaaoY7d5WwBE4xwHQTA7ABuzNVKYFaYwsMbzfvNCa9HJsF",
  "key17": "4b65ubjp93Bau7xyyux1cxYxgEK4esHYrPMunE8f5q1NSnjjyAuH48PmySE9kPEGvpy6CDFCFKrquWLHxCtUVuj2",
  "key18": "44nfjhbwZxje5iDmEvvWNZ2W4J3hNRssSTPeUqDo3EgkT6zXaRkogoz2himWKR2RhCxeSpiPzVVxB7eh2FgmZ8Jk",
  "key19": "44hws9YG71myXzm9juNxurAgYS3rwAdUGRMt4NGdcp7cmkE6qgJCa67gapYgoVnPi6R3mJZByobzKKztKuU6wYsv",
  "key20": "4qpFjGeHTfvmy2mCAqXNeT1jhPo3p3pe9a4Q4m2gWsL5M8odeud2kqsJZuje7tDX2EvFJWuiXK8ko8DHWScAvazm",
  "key21": "2H3vkpBiJM72UnYwjkrCjvp6kEJjNkMFPph71gqUfUw4MusEQSzcJRMJMaoSnBfEMjZVduEw7eUisDWjCnbdes6H",
  "key22": "3AZxCNnSJmWHaUh6F3PHf516s8q7Vnhdq6Nc5s9ZWtu4RtCt5RDQ93gtdfzuPEvhzuyK2BLmPE4gnh5o9bFZJamS",
  "key23": "4UMDuQJJYFTLPVpXmMiKxcxboW7zSkTn7hobPHeginD2EcDFLH6Ta2BM8usDvxMaNWtBqeX1HEdAoTnMUz8JBbze",
  "key24": "35acdRWkXZZAmjZLx4jc2xhpLSBRhjWkvVWtpGcNwMeCxe1svDgkkHizdQvhTyEBXQ9EeG1K2yt2tyWia44gSWgM",
  "key25": "VNT7L5qtMqaahroaH856YwUrx5hfsjoFsqsvoFtPGu1exAXSaVTHbK4gHDZrt6g2juqkgnY4Fvj6BkCM1wJBMYT",
  "key26": "47TyXFc7WVbfpMmBVFe5McceC6KHAKSFDuKrkbsevkgR2wirjaLWkaB8AAUpejP249TDRrepzYimDTDmPV4gkFgK"
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
