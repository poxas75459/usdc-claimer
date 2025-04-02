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
    "3oSCmuaLhMoXaHmkYwdF2jQyZXLRtEAFgkNzD8w9XzNCryonzPDE2FQCUQXDDcjA1Usj8J2w61E2qGokCLVFhwPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpunzqoUBLH2UTJkyyym8YKgcRNQiS9bah8UkiT9rCuEMfubzZECx4wsuuiEaGFAVeqxosjKUgCbSvj7Anb3rTx",
  "key1": "rPpZUCHUyrcxLJKfNuEGFxwiQW1fbBBDVnvAb15A6yDjihgQ4iJH1oPhX57kXADbRbnPh3iXpdHoHpR8Kyu3NWR",
  "key2": "gf9ViK84U3H5SvWRi471Pe7BDtbc6kHgQyPp5J9gZD4mHzJ2e7JybYkeVhBqJVckxyDBxevD83bXDFSzpRuZXjQ",
  "key3": "5L8eShtrcxn55XF5enDvf4bUh4ycarrCrXviVrRpVZoBcD1bQKwoFyGEn9WbaLNAGjUPKMSCD3fF1dXUcUowpERR",
  "key4": "MqPGxheozaohW11eAmmmFTnP3Ez5D1tPon6DyU4uT5y6XUjaxK39kytEmaoBmu1fnp4fz65qt6puzPghPYTg6me",
  "key5": "4A2o2pw56CvWuqhdD2TMzSJQ6pqeYkHg7VYLQn8a9C1uB7Sb75c7qTd3Lrb5cDp35ouQzvcX7agMyBXqgKt7LFfc",
  "key6": "54EHEwWQQQXdUHfwvs2r6Eqyf7zQqzQ8RCbULGPzZwHKobXEPCoCULc37odaxpo3f8CQv3S5Qs7zTZgMbMp6SCTF",
  "key7": "Js4TXBWZagxBh5qwCFRmaZnLaK9GhLzKTftigvCfpk87EhDiCXE74Uu4FSjUYNukh2Nut8w5R1LhcMGeWKwJXDR",
  "key8": "4J7s6ws6ZaN1r5Jf4dokmYnQDoXUzAXWNuf73bc8WN8kXeEBsVeNAesjHYpBLWz7qxJuprPAJLA9Pq3zAFsMVyZM",
  "key9": "2YpGioNiZ3PKySzZk57deuigfQZoXfMiKhLuPDVD52C8Sno5fRuTc3dtWpF2ViFDRJ6SS495BZNsEm5ARfBNoJi9",
  "key10": "3Yhp3LZHxptPFoEUvZyhDZGimCUuhpcswLqWLMqnchCDVJmc4bYgbCucEU6WkzWv2ktzjkMw3zvJ867LJUfBALUC",
  "key11": "2TELufuZj49YmFmC1PVQvqcXNw89vXykh6a59yeTa1tqnckZhR4RUwtJWFQe2nhkknk2iyLLKrEaz5VVFkDnKY5d",
  "key12": "4nwVP9PXMmchqcmNQjh5aenhw3mh1ZWzfCCNvrYPyRrRMMsLfWghECszFJxLxh29Kx31P4RvUCyH7B41gzMwTNTU",
  "key13": "EAKXEAAtxnQtBMq89eGjfdP1FysbshLexFp35WXPxqUqwtxna2HpLJRDkfyFD6BG1wTk6zLeBm1xuxHJMUGk8yn",
  "key14": "4grA4vQiPsgyCpSu2PzR9vxn8t45qsqJKDB4NF7LzBsAKC7zmM8WCRG9wuHYMUmtELJiNHDnZdz4iLvNEb4JApMp",
  "key15": "2AkDFVsjDj5Kfph5CAeD4yeNirkgoTNkJpDkVBm97s1Cf5sSy87nwBf8eEtuY14ptzVf9mt57ceWKS34nk5UHJe6",
  "key16": "2DffqEQyrMJ1aBmY8u6ogEsN7s7xsz6hXqUpfQHWq3vkJtNRPqWCs7HBveb1AhuZbeUXMwPQ8JUHva1kpkji1616",
  "key17": "2eWEDjvdYhRb6zDmzxG3xK6T4McwkgmmbioHukCXvFBoMf76pJB8zH5hzear47uepphgquU63cjDuAUX9uUr4rLq",
  "key18": "2CikwLTidHgMxVk3JJWSXD5yGU6nzBJrX5Z5w69ZSSCnwRAEVTGA8M8MfDz4okPFh5k9jg2UADJ7jroXN6DwpoHy",
  "key19": "4iBTUsZEXHeLFLxH1zS4ZYqrpWtG2fdDLWm3YBeq6hJHhz2yTbjmRxMLsnSZww8wFpznurgdJDNMuC8kkM4e8t9P",
  "key20": "3o3jNWzqw1Ja6Q7FSAH2LtLj2HN8HGgSWA1K29e19yfLrxh35qZe2ewWk6LvjN8PG9oEkv5fgVp3U5KjUq5EFVB7",
  "key21": "5KQKdjsSjonwCTsZXcGvBKFxKDPUeqaGQFc1aC3eEkbKcNsjgWCbM8FWwLuBuGDAVcpbc5kFwMtyqeJgNPD7Wxqm",
  "key22": "FcfFkStVAfpXuR46HA5mjjokzyeXFRxjQ2yLNXqk2iqdjFJYiiawQECPfRHWJmSXGzPKR3SUDt4ivRArFdC6f4e",
  "key23": "3rTzc7FnV3Cwkv7L7opN5ekci88RF5A9wvTb5FiJjVVGRXqQyzpt6d6AjhURijZdd2WviNs8wvK1vzai5uEdb1yv",
  "key24": "4hjftz1ri6HiQtShRV3wr2LZ9aXtKKaFVGxPyBJz49e4izRtCzCyypi4nouZaovNWRPg7EnrAXbnEZ92NrtiGogW",
  "key25": "421UmDSZ1hZZv6rL3JZS1sTMhWxypyccy9UFY2tu78KhfSdwyVd59SpKyiis54xhZpwASYfhWnkK6RVeFoX1pv5d",
  "key26": "2QtegHo15A9WJCpWKhnKKCes3WprS5Dm4xBSJhxtVriKEdGxJQj2DSSGKhXRCDNryJwC1ZPrYRiARDWM2LJGnZ1n",
  "key27": "235nyu9eeor6WYHQyuRdncqSuLKG7q1etvnxWQ9NoQzqs1zghGPgQjxx66jH7ofTZFr3iDYy6gFiJa2KqdzHFTkV",
  "key28": "5r4dfzjbviZRwTfWAtDSrThAmM1hAwgCjVjKcdzNXmVzkE4xCEktFFJN3Fr4akEbxvbuTkPeTireJ2gd5u78DGSZ",
  "key29": "Y4EASm6sqAsVYpTUfP1kXV2UVo5C3wj15phiKW2p4r2HxJE5LDdFwt3DfGa7YYVnXoVSvamjshS3b2UunHJaXqX"
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
