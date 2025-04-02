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
    "53CH5J3T2d9SDXzE3W8XNHuJ7Q8gGcrGCeg5kZ8Hn97VS6Dx7fjsXvCDeqeXSXtBDsQbrMeg8ZuziKiLnoCKEtpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EjKYPputhp2gwfAPDfgUp4SEGpV9J3Xm7nYda3HrRM9xrj7z5cvgH7aBBBHcnVauEYBJsHDCSLB3mSSHmtELa8Y",
  "key1": "2rQVu7WtD7R133LGS9mvUi4tfQawwqcWUqN7E1kWCHz3X7RunxXgsWZ8DSLQK7eBKpPd9LxYLXkwTnuzJzFmC159",
  "key2": "2VJB4zq8arTDNB7tbgFPgxjy2SC4zQzyzhHz7AykPgKFcdLHPaHRy7mytAHmaNyYtaXqaBCn9pifQwfxPqcqQV7N",
  "key3": "3g9dfTBDHUMrX3uQiiDkVpyfXodgRwun5DPV2HfzzAjMjuZx8cxUuMapPoVdRz7F24EpbfDyp31Vi1mG1bnteUev",
  "key4": "iAG5p7ssUYDAPDe3S9aYPP3H5qBP7zBgpsxaUve59kdUSBojiFGqbFryG29XxfsToCXB9Wo9wvyQMBj1aFdda2Y",
  "key5": "3reVo2LCLUb3jQyAu8oQYsQZn6c7R95outHxAckUKU8aGQnkvAb8KSGLvFsFP1QRFeG3UdxaUMWNc2kAsURtuCFh",
  "key6": "4Qw17bZ7YKDDcUXGEMNtRHpVJuy6M2F4f2Pf4N4WE2AsZitZuwmET2NPh339kahkccYWuWggLP8fS9biXZ5Bv8ni",
  "key7": "3ekSVyK9zUtvmZxYzbrySP3wUdssUaVSNhsQmEip7AC1oZepcBfpyDR3rfpNAxSPzjJUoJZobJ9MKLExfy7R37cs",
  "key8": "5sJ5QQMMu5raXojxq7G8gq1D541yrKgX3TweFbnWju5Z8zawm7Nnqsrh24bHWDcsCUCX6jTPNwZJQyA5XVnWTAhb",
  "key9": "aUR9b3R9GF6ZP6f8b7f8NufWtSTZH2aR2jU7VzNHfgTVCAeCc9qPXuU1rG7H84ZxAZ7esH8JqcKL8rRkbn8QCRH",
  "key10": "YBk4i6ZGcLsogB7sT8zsSVe6UVDZCvPHmZfs5xMHpMveioT3YkBtepFawoca8G1hZTTnGRVqHm6P29aLGu2UHhi",
  "key11": "4Xyd468ub1TPidWQef1AheZixWMQmQrsV3D1VX4k5Q3QNkXbtrUwiHNSt83DuAyPXfyqqRvqxhkfQB26jziL1RbK",
  "key12": "J6oMUsyxJcaaHfgxtFbvsJAiNGqLSMzbe6LMYpATZbjY5T3waCwQcQ8rLZxxmnWPgtbZ6znqe1RxUjKNTb2oDd5",
  "key13": "33k6x3D9ScSqEhBtND91FDiESkpPXt1NbELfRJPQ3nJzZijnRo7SQFUVUg9KXSWTbRodQ7keEyHvUX4pr2PSxeaV",
  "key14": "52MmgcQQLrzYsmGXEoxPCiaof1E2GT9hnAL77t1MPf7nc9ZiW4M7Czoq9pwCASF43EzMNtqTNCiTykCsNCPK3r7x",
  "key15": "YLAJybivkDfqYiStBzYZmFmKwAds1i4MY8hSX64rYaH6heaiJWFWC1MRq5QbS7xyhVKGMpvbcbi6fUabx17w49R",
  "key16": "3dEU6XhFmAfchj9f1YnkE2Ab96oTSVBvgCDm9JoDYoNkcqEFDfwb231BwAs4TWg2tMgLPaiEoSKFFL2UdUNxAHjF",
  "key17": "4PJdQEJfqYsYNnvUh6b6B6jF1xQKPYJYMLxSLGuQVhPBVZcy1KTDLnoSTHj8h155akiZTX88NXdYm7ji3iQzn2vG",
  "key18": "4U1E8m8QZAy9Qqwy5qMyun6V24mciwBfiNU858jo9sGhVPWFrjgmK5Lc7PeVwKZHbQmPK95rBdqM2DvcdJYRJfEp",
  "key19": "56uy2fFSmvqXnPCaGQAJVzVcoZR6EP48broDa5Hv7mRXECk3cygGQL9RYnEYGNNpn2cJ1jyTnPsp7ebVEJKFjkgm",
  "key20": "H7n86e4aL4NxuP7hbez2LPU4T5i4SJm459pwbG9abTRM2UrGSRs64qpT7R7QrjYMvY1m4PYheKcvxrVzK793mS5",
  "key21": "5U7xQwWYf5XLnYqY9xdnpDqp4pG8WcyprFNcv3fKjForN2SUkirh8wKYDRsaNCazSWiwpkVQAzApYLv6Y5kq1gFo",
  "key22": "39ZjdMgPJEkBGKNWofmvgCr5ExEVTP75A3FKaZJdaHrANSsknc3aQgz6GNs42dLtqCDjNbXQmBBoeyuzvD9ybjD3",
  "key23": "3zxkd9CxfKggNRS8DXK7WoAmnbFDSM5DJmTqa4qcjYHcFLJL13qyhvDwkVC7vrTKB7Cn23EnAFwNwrHmbjBRc8VK",
  "key24": "66J6EUunfLwXnbHpJhRiYrirjdpnEFFQev2W8P7jCioC2gNqPW4kKV1zbkDwdkYRb62fkEk5jGjEp1gL1hd1Ehxa",
  "key25": "3NqLgqCd8hoYoUXTJKVgmddXMVyRqAwssdsjSHLAK7YadduCDN6Ax1ZMwKwNLy1M2EeqLMKT4q5SBMftF7Q8cL7",
  "key26": "2wdcUVVoWRPQF7HY2t5CLroLx3BJrBreFccM4qWMcf4VdUnvDU4yEtuAYqsLySeiw72qCtZCA9M9UMV1u38ugC6M",
  "key27": "212iJuBvPEKpv7jBxQCtYrqqB3tRi7pF4tWX2nJ6tneZDXegRpEYmg4mQRDy43ABA7mVZLw5M3StcBNmmENgSCjS",
  "key28": "3gji7XxqxHwBd52EpgEWPzhRYdWdyj4DuvPe61VLX581jhhzyJnxyhmibRmmnCeSPfypPRp466TaBmD6ApdizLkV",
  "key29": "43QHntoR1sD5JwdjTsxSdonUwvKcHLGXw1AUtpKUqsa2i47ev9MvT8b5KWjvjS62Muc27wNF8e3aRPgAqc967pST",
  "key30": "59QUUkJtr1LnJpEbHC3yYrQ5ajkwGAmQDsBT5PVQ37KV6Z4cBNTLkBMiFxNUz5uWYb1mE58yk47mVka1NowE4rV8",
  "key31": "DWyu7zhcAux27qg7H4oLsXBwMgnBnnWBv7ou1xd7UDYt1KD8Hzw9QsES5LphNoToJoNykJscbPvnJdMncqDLMDA",
  "key32": "53s73MQAiqYxNK8rgCVLF5pdAE1hQ4En5r2FpfVLC4bfarZ3fZf365EEm8tdkXrDiBjp7ZFGjN5xkCDVHcJfvwKp"
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
