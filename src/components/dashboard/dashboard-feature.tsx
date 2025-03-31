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
    "AbpmRWEiJir3Kni9MJpVF9gMoiWJgzjPPPW6vMJrKZq5oxqZsZhFLu5i5Vba7NLGWp1Yvhhyd8Rp6FBtbp4KRz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSEYoK9dxfRzvpNB5mMRhDJnugvSAkMbNTuCtgekK25n78Zd6dk7NkRLkvZAGEZTgCbopUV8uRDLxzgrtmZ9rs3",
  "key1": "2W2zsFmW71Xew7Bu2jNgidaJ4iZnmJHN3fGKinTyeCXsi61mjEwsyWH8rmAsWKFKgeTG7TVqFbGB4Px1r1NDeXHm",
  "key2": "4vimSscYqcgimRiq85MKQsr9pX8iqHBeLr2vrvhg9ZBPNB3jxjfQjQQnuznhZMwsjWjCv7pozpgcmhGirCmNJEXk",
  "key3": "SbQQ9Z62CKA5UMgPjLhLGgV8osb8P6p6B3L1hutDgEeuWCGpuvcrTh3xKJAKAo8EJz3TzsU2tfyNxhEsj9jTiwg",
  "key4": "5L4Gw7AmJtTLT9ttwcags1L8hDBWfJPZn7wi9wcJKeFSeB8JzfKj46B6HdTkTrmdjTXWYwW5EHnwaRj6qvu29AMb",
  "key5": "3SX1JdhUb2HFswag4aZqF81Fsx7qjcKU5hYHJXtLAs7JUQAQj9LTAyjmAu1FPEg89buCMFaeLDCAC9TnQRLgK8aJ",
  "key6": "fNuus5G6MRezq64CD6my9tjdTuuHZTGLVcXuuXLqqtcLBau7CecAkvN6SayAJqXsARNwtfrqyhY7HDeTsmxrW8u",
  "key7": "3VYgRLt7gaEHYxuXmBf1m7LbFq9BRGHAWsKvzGnobB2JVXPNc2XLNudchgmwTpygqKHhCb2HTujzQgdTP5z55z7Z",
  "key8": "5uG5a5gSLkLDE6gzbUedcJ1huRH79V5rqRxPrv6GpmZPCe2QQDevx4wjvBN1cuCo8ET5zMjsDvHBskWqAChE3Ps8",
  "key9": "2RNfJjDMuTwcEj2brETYajnRoCh1DRVowU55vwkYwd7N4mM25hXp5gwhjUbMySy2Q4hiQwofqPakzUxTpsrpKKiJ",
  "key10": "2t8stn5TUoyci1QdxWwPXjTPy5syiFT3JzJ499bj8ymk9LiLA9cemAsk3L89ymYKFGhpbsCdVQ29FyAMpU1PUp8V",
  "key11": "3F43UsFTwhKL7YqhaHfTqto3MmuzQMnrrxPCFEwVQ9aEmLwRJSaL979rR2cfYH8n6cyfkKwM9aE6cwuDSoHhN7Dr",
  "key12": "3XtCTpyvyiVkhPic4yMNuDddns9wzwjfdYNZK1X7RDdFVXJ6woZtrjnrs3WK5EXSJN5faCbpe7hRMjiv45ha3Mwv",
  "key13": "mSbrKCwNxZH51jcU5Prj3b8wwV4EnM9RpsZnEDrUXfHXdoC4Qupp4sCHNmcmGZK4WhHcNwpxXe7qMQSaYFPgRDJ",
  "key14": "2XAXXbZbBbCekUSHVihWXrB1EuvDqTVqu1bYCynMaUfd1znR4KpvENRpkJ34xisvxLmXtkc2p8EukTCsaS3Cc1FT",
  "key15": "2bopf6L26Lohb9RS1fcKXRh6C1usS2LjGSjRVf4Wru4RWYDktKYTFiPoER6n6qxNmNvckt4WRMFNedbMLAe4h6zz",
  "key16": "5ggSeL2iBx4YLQKPZKeCTwqLctunKCsFtX1TKfkS5HvcQEN6NKcCC7s3Vmu2PDLQvnrKzScfs5ks6jPEJKL8FmJ4",
  "key17": "4isTCCAR49L1yCN3XWxxxkLQMxGLdvecqD5Wxk3sATrR1abWcwW4btgKUccqCGFs1qJ75gndFhpZjSLKZSpp8Qd7",
  "key18": "3yQT9PqFaDiExj4VfR78aAxaDeChUfMsFKxgtsk2N7jDShJ8jxLr8CnTRfmjS5XAVJRhbr5BzNNNyQU683mFyVCA",
  "key19": "kNnVjQ9c4mpYLfiM9Bgco9bBUVaciwx6VGvJCJobeD82uayyJ2yaG8i3YWMbujNTigueqPiyBgFu3ah7eNb9Njp",
  "key20": "28Lmf3owfqGsUM4Tq1NBS696f8FMmRzYVDdZQhHDnvZxkvige7KZvZmxHRmnqHjhnHobfvudfVvUMwVpyC8mJXQV",
  "key21": "2PFuEx2sVM5Td4wLJHLK24bp2oRcnRuD8m9V6nnBg7HapbPxpJUB7S7qUTJhPbtzBu3BhCZjcYrBTpSFPQpTmMXg",
  "key22": "Ncx4U5Yqaq86gpzTBS44dEbULgKLVb96Q9Mc2pXGrrNmTgMgThNU6CWkAjUSUFuNWahkG39jvYufp82aRUeRVv2",
  "key23": "2j9dZgauUWcHKinDBhYcC6xGumjY9UuZUN9cHysfUvr2jmbkS2nLh9y6y5Un8BDnp4MVD7kSvvWriG3bg9iwyBrH",
  "key24": "2Gb7qKB85ZGvm2qYemCgGXqjkDwDY6RRJVSFXXxVya6te4M6AGuKxB1pFWzBkpVpdeuo2e9X8kkDMArJQkLaMcMf",
  "key25": "bEvW8DT9RVLMyoD31vAee3H8tX5nZDcR4s27f12F1PaAopyRPNngfp1LFNbmFaC7u1MoRex8dFuNuMk6zrLDWGA",
  "key26": "K7cpxrshhL1h8quWuCttawz2y31qb8Na47dvKCe9Yji5oxSbophvPKA68sdMdJFPAVdi3j9XeNbWoxKYjMZsjD7",
  "key27": "3MkbFxdvBNC9ZA3Lmi1svWCQ36Jha6nz7FvK6Vr2WTotMG3Jj3NVqSVbi4rbtrBH66jpJqrbRDUjYYFDcj5t98Td",
  "key28": "3reYT8bdP6Ua8JtaWZ3qViMEej1gLN1CiREFXP99kkxCcoFF9VBFZEp4s5HeeWcv4gUhNMiAjA5bqGQTHsy9qBNP",
  "key29": "3ATwVa8ePKrEouyD1N7zKZpJNdmpAKLekkQ5YTeSX8LBUBxyM4u2VZFEmXidDu96ZDHVpRhaKU5AJRPZL7w2umav",
  "key30": "5Le2Xv1ja58SNPh35xcQ536ghRBsLQnLuSdMRTkn136rRNYBEXd5Goe1n2eGbxegy9LJygLq3dNSonnm5uMk9B2C",
  "key31": "5Twxy96bQuSQpszTePbPArQsendZ4GF996cuU41HPUJAFqZ8nWeMtSHh5xkArpqihoA7Wu4SSQGWq9DuT6nbnu3u",
  "key32": "311aMssv3tpj1YeXLNouHHpgV6ESvQML9tA7K3R9oJSDju7Btvff6fZFYF2XEc1FK2gRGc3okqpHRRAkUBWhFWTW",
  "key33": "4SUiRmfHgPvJ4TRV8b4SHNQqSjDZgC6ka7dr2EbS3E33PVbMR2XuiX5r9LkEcBA7Y5VUrKgBeVSgp55MvAi92983",
  "key34": "5be35xSecM4LvpqoHDEs4wgQi9S3sowRd71x7KYLBnuDPViyxcatdWporBYbaPFqzD9wpgVrQFMt8LRYvV9vJyzk"
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
