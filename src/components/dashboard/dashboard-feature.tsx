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
    "2evm1PUiBxCUoz5n9TcTeAB3WoLGJ8N2BzcVep1LuxHC4V4i1GRwzBdsZ34QvqjJ5DzgV6zBMrvTAvdLukTBTCEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eMEwoEhWrLM4taCAktAWhEbgaZfTu8XtYJ5D3mnVfNqjzqzq2z2iUYc5FfmFeHRXRnwjsZZP3dC78ij6bsz33bs",
  "key1": "5ufq8b4Z7fQrwe6i1tmwuURb9i1e9m2gPnZgqahPtM9NdjAJNAhd8j4yqDwdrdcF6w7xTjDZBr2BsgVDbtzSVkgb",
  "key2": "2oGe1v7QZnaBqMmAsAKRpkpvcfKmsstpPtZ8FcHFCXCHrHhyHBmiGmuym9Mrcskhaz1GMJEUJGBfxxNZtXtv52F3",
  "key3": "3Mv1NaBMK9QgwFH7jtUSjinLiL7ZvdeAXGZi2LJLDM5JXD9kzWczhEj9bqQcKEKHvFALtQqxVuzhxgB7SCP3uG6g",
  "key4": "yEotpXZ3yo5NLDJPQjPNi27juSUQBSZ7uzuJctAp2fBtdgrqNJ6tC1XCTd4TC5MWufGbmoW27hvzhToXxAyvnTx",
  "key5": "2eXs2dhUFwmbDwDjAVkKXLUfdXJ96BbRxbCxpySpSpkvaCeC6aJAEZXdXPwWgUsFbEEwsSWa9GMAsbQWZJujQ4yE",
  "key6": "62c4RVP883hdqZ4Nywx5EMQde2UqhPFCFHE2wF2b9J2ejP28DPMzv6iVBAE3FK5as4ThrSwmywwopLMY5AVfDvhd",
  "key7": "5xpWsbGKocXdyxhnLqzoWYLY7pcPZJp3fANrMRMNLRGdD6QnU4ka2oKjNKkYY8wqY36rgmhyjkGn37TXYdt3uo82",
  "key8": "41D59x33Tdkwe5SSfx9AXRDLzBTVJKpLpbjxUDp5HqULKQQ4hpnUTSAHyEaY4mkaVRks8WVbohzHdo9r48cL3S5Z",
  "key9": "awqEeR1CLzXtHvSWU6fgnwmEHATDpR42fim9NzQNFqUzAKJxkNXYZm8VXYMJRwR4S5EoeDMdtNgxzsycA3TSvSe",
  "key10": "3ZhMYfSoT1SHMDgWRVUguctAgTGw2T5AL2e4JANHZ9MCgZhw5sot6dXCwgxZNSugf1koVDUajx5o5Ftx8BmJYJ2h",
  "key11": "DG9pbuSicXV8pPvwGExkb3SncANRqYa81fQLReMEDCk3P1ZkiprAPgHjU8oZzJAiW5q8W4DwCNVgyax96PioohW",
  "key12": "NPyzhHG8LmfMZrvDjrKTWr6JLT2bbzTsEPJoraZdpetqqM1DiCuR5vRbWp3nUbhWFVV1W4PLVBZgCA4GnWsn2hz",
  "key13": "qoAWfaf8giw3h9WCeh2NutkggKTABqj8fjGibYZ3dqur5SaNfsaqRN3F4ARx7nSXogottgyCFa5ERvKWB82Yr9U",
  "key14": "3YrKTXp2EZNQwJjboMhZ66RiC1JKWKtWN5vjCvGpLFgHuRff3P9yccw8gYjQrC729BwVLB1CZ2tciMXVnveoHD6u",
  "key15": "4soX3HTySdDiU3dRmxqDkPWk2S76D3rGk1ksZzgfWQDTFtP8e959vJgpttENVhQkmyHfQctmLBDMBDVsaZPykMNa",
  "key16": "2nhZiTupquepd4MigTAURDEFroimhVBpP51W1Qn9dsuaHhcKmHabC93hwjCm6vLmMm8ceMyWfiM13E5CBtTirimz",
  "key17": "5FCw71Ei4ehpxxNscbZvwjd6jXd58aVgBB6WEG13WVB9diKWtwbgZkhuhVwD4hcsuUMxV3ETTBxkgJxPDc69C9me",
  "key18": "4JKYk7P9TPdU9KUAYdueYFrb3rodhXaD28CKmH5d76qbmFGyjWj2Gan4r27CYXwMJdC2Cv4JovMd7itwZb7kUADD",
  "key19": "nqCz3LEtK2fiRNa5iSEZjvCc2AMSjbK2pocWrJ2N7QjAEbpef4RAcnRJyTCefQdbFR9tcJyQ4z8ZRKrMJR8Lthp",
  "key20": "wzHWDmKwWbYMyvW1wfd9AFkkpyFKnsNYAWbwvZWJh66iLuYpiFEreMniWhHawhCEBatFnJaAC4vKyFAWFCVzCde",
  "key21": "5S1A5GoEnkSyuGrawKW2o3wMV3gkRwJCGd7wqsMhFP96fH2jvyLQn5XNX8fJvshQjYaaBwV6tHqGcyvm32qUdAfw",
  "key22": "2LLZ6C1pVPCLxGwRRvpmw7QKMoZtNchCZAPuS4B4RZ86VDU4VCHrwojYpJYWv8DhyYwoGMLi8FCKAZHo6c7oEPDh",
  "key23": "4m62zNVXDcCASGKLAUviNgLV7owDv9psQgVNJaJ37HfTffegjFDaZbPYtRixDYTeMqvxnqcVWbEomJVQ5dSdDPJH",
  "key24": "3sjrXYmjASU9EqvPGTx4EVFbL6aMaSWieg2GsTxwH4KpGojr4ugAzvYx6r8C6G9EM7z4Dd5mx8zz2VAvqPs17XAT",
  "key25": "pqoVVSctxJsopQF1azd1oBnWvYYywCxQvQbpxpWL5YGWnwc4M3oacNYxC6WWztXaTAFSzAwveEN85fEZTBDMUCZ",
  "key26": "5poidaxtK27RT7L655zXuAiGYqKkqyrGvEn6DnT5oUjFSgC9xsnNhsMKSKnQBeDpAy7rfsmBC3Ga7vps6aRfWjJx",
  "key27": "61thxT8YJJNQMj5bEaa5hZVdus7q13d3jCQsHvJwGoebyV8wK4oyLcosGBnqsHXMbt3VZQ9tZzdB1kGBgEtSzajb",
  "key28": "kR16UKrHjHDaC1QTudVfkADmQtw3rokSaqc2ra6xeVWp61vwxxudS7Cqtm7mvKeUGbePiGxJ33BRSqMgXpHsRfZ",
  "key29": "4rWRFiB3YY6Do43WPxRYS73T4tDvpiJiALHepCDwYBdHKUr4FZ5txoBcZhMavdejbYhRQSSSBg5s18mrM2ChiGtr",
  "key30": "66a4CCREzoyfAyinXMnjiYBjbcxM6ZupMHLhjYXQKFa5Au1pxz9E8N6js8v1mrfGyftqohZCNtYRqqWbKQDrFqj7",
  "key31": "4qW75TAbLxWr3GdKRLQVtW1cJvMmMHLcy9uC9o1MipAHZxAUD9oZmktX7QmEo3UQTBzn9zfZj1Q9HJm7iHmcF8yj",
  "key32": "3zTHeVMgtuVvjYfUd1MeZ4TC13DVo8HoyUu1ZZ93JCBz1kComJLT2h8TxaLx5YsewgUXGYH7UpBVqFqFXh923S2c",
  "key33": "2rdVvWiCSYB6EsxjoctnnU7C2cD4ipcUYQ9nUdF4SNc6HrA3mCZzhvBYCTkD2VQNLC4XpsqfCV66XsxDCdfiXvmu",
  "key34": "4CA7B7puzsGLGuehn1HBkbWYLYwxT7CrkRFv7YqcW5uLFFN2mMUxbJmEDu3NWFgm5FmR4j8nB2QegjL6kRThQvsG",
  "key35": "ikqQGbxQQ7Sw4qKMQRobim23RQQTWM2eHnW1ZYSMduCwuHz9NAyDJt8Rni7F3vt4Tz99hc1G8hvmthfuerAQJdh",
  "key36": "6MvS1zHAPJdidSLkqRB6NMfxYN31iJCd15WbAqKkJSgukvHemGD7V77fUD1s9HaXxhmQreUcG1d3DcUq4hoAJhM"
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
