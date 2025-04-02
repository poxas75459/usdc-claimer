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
    "3aFDEEtgVCBndNA4YBoyCGsPCbBCMDSrefSqDhS5JQKiPomNKu8HittTYSc27H1nzETnMkskdDfMwfUwRf5B4Mts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "443H1tHR7cY8UQbRnXEjJqwbrFKEv5ZQzqNtP3gcqCp9gyCaM2DKT4J5Cy45LDshX1aJFgpG6YC4Bgg1FRMGizq6",
  "key1": "9Fyb1YsBHEHkEGZCUESh4b19k2SgdcniQVL17qAQFvH8XAZxti4HsPLFbTPSrNR5pRiTzi3as1QcJ8vathJBvcF",
  "key2": "4iivChvD6GTYnAVQjPgDievtpMnEgaRLCrHtLcp7cpymNK84L5FDsENDUHAKKacs1iUftzZMXUx8dVSwqP8yGNXC",
  "key3": "26zGq84sGV63nbUvS9suKSHjN1MSSevbQaY7Gh4gDpe4Bp5aSvaiyUtw5g7UV7ntzV2KAw9f3xfNKbQQwVv6SARk",
  "key4": "4uGaiupZzC9bze9BkybyK9xqeQmPvjzCf1fJyYa7RfWiLQNQxPjLwdHjpcDacZHiqEKELpmCyrumGBcacAVTCdTc",
  "key5": "3zMR5ZY6mRUvjT3j1VTK765jVSRyVEvTnJwSVZn5aK7tsTUUmcfTNcE7yWHKNR5QaqeRas5z2btBYa4T2VLTfMQo",
  "key6": "4aakSrNCh8Lo3fZeLwXJbNLq5yEFJeiSHBo11LeFw1dfyUjjDLfEFnSENtUiwLbYHd1ifr7fA6PuFRas7VPSiqjK",
  "key7": "mDtbPwtdpHsxK68Qj4csayUUNxPPq24YTBYqoAuemYiajaiqZUP3XB68WvPZwtngbUqJvQ9hG3wF2fBKMoBpc4M",
  "key8": "4s6R96j1od8dJzrgMN1FNjHf49XYVvumF4y1FtotSWLa7xFi2Bj7pqiZpcJL5aN8Y9W6xVjY2Yo6rMHsLERs5SUH",
  "key9": "vjuG5LdGvSbDVrFtZVuwgrixCSJ9jjHjBZXTqyZa292g7Vt9qE8oJigK5HFRP9P4bH63zVTj5gmagQMMJc9YND2",
  "key10": "Hqy5DQsc9jCocVH5hX8ovCMBgpVTZpgKnUtFPNrpZmd2PfKfAaaJCC9GergqUGfFPUUaXLz5DNfZDv9mkGiyXAD",
  "key11": "3WJDi19u6tRE8o5tJhoHpWt9cwZfhHoH8QRUo5ngMNK8nuj7xbxV8SWaXrxjeqmubjbG3Qd4MwUMXz4nykKtWFxZ",
  "key12": "BX4zUMBGSQiciFUMd4Sf62DYWZeWarToZiE56TmVo5zVDpAhZ8Vp4k7TRCpHJTv8S6nowgycmAJ13uDtz6cKuoW",
  "key13": "4hLjWaJEYxnaCc3rz6cyiJgeunEXXxwMAjomAAdkFKf7XaufQ2bP6RoZE6CSmKmnqQ6CASYZUd2DQfGnN581w4u9",
  "key14": "3ncGuGsLQcmzvxAKLHatqEPzU1iYiGpDG3rAjV7vZiLFHgx8robsQgufJJ5MA5wxdoLUWzsGfJ9wF6QCdJfVDN6p",
  "key15": "CR9QEERzdRDvEyKwEChN46JWESEi3GCJjAQLFoA2FNKTKV1xC3LXWrsBsX8gvoGvbnhcjtcjK8dzqPtqkbCABi8",
  "key16": "5xJmFxHhq2Gxtdq4NRjFe3YRBf7JFZ1rPtMsCgZG4LPoZ3XKeXipmbcuZVZeMbncfX3dfhddKfGtZuEVC5xagDxR",
  "key17": "3kiaVdoCxbH2MF9C9bo3QsJA5BAwyiDze1Mnu1nyJoQSWFJM7SMw4PSVYS4xu6L3RZaXwhT4oNqCY1naitpbexwf",
  "key18": "4ZeVPv5SkTWJdR8b3sDm9YT7iLCTks2u9qfgaC1t7s8ZAwHAExfMN2xKgXJg7tNiS7pyi8dyNxnmzdxBvEVa5EpJ",
  "key19": "2XDmKFFLcx9bhoZv9dKBfruBLGPMW3X82x57Y1891a8oKNmgjDSB7BghE5eV2Cddm2AxnCNRN53myuocm47pzmHY",
  "key20": "3dy4dK9vqksMVmdcwkbwPV2pwzjRtBmKUAj1ueqtn7HTa5euFZEScp3NTXpdXa8qkrr7snZjzZavoERUzN7qSaz1",
  "key21": "3BcidR9BrLY8Rc2EgJT1LhQCfdBN98b6HFEKpVhc2NYJwyhkDf8ZARKqeZ4aVuVZX1aDh2tUcA44cxKYcAJNDAP5",
  "key22": "5Ta92mXByzSWqD62Wv3FEEaco3wSXsgoQ8PmXC3jtt1nSKoDeCXtUGtqZYLLBYDzDCHugK6mfFM9KB5tEBkVzwms",
  "key23": "2CSyGEX8HKENEu31fkoytBN8MLuerU7dHvJTURRwqNCcW5uEYpM2gyt3ats64kqyXunc7Remm2SkHf38GJzm9vX2",
  "key24": "2pe527og5NFVDhDGyCAx4JmsYwkStXYM5K52e8EvyUEXdLbbgj4dvnkCyvVdDKLGQgVAHDy3tpb9vaUpn9jaaXxQ",
  "key25": "2G9yP6YaioHNmigKWao13KSyjakfgLt6midSqq4ACZWQsH7DzdEKqMNVh7Y7Fes4vvCDnt7H2dZ8BacTd5aewnsm",
  "key26": "2C4TEu4we5kFLiq8ZdBKGQWTjzj2Grc9PECvDNJgNFKeFxXYbR5f13Fi6SVYC8wR3KT8hwsAwaw7aZdAnp33gY6C",
  "key27": "2FXB1AhoUoibaVVnFKdSP2qXaFc13ibk8iJwMa5tdorqxmvykFGayZ8GJnx2c5VruUCY9oLB9izMYZ1xf8hP7MhQ",
  "key28": "5c42rEfTsYLbQhKfEUyngivcvnKpNX4xVCyXD1y3Ue2p47iBSipX4v7SzruzXgms1iGHGEHVMyn433BaUXeBueGb",
  "key29": "3LQiUQihS9g59NkT8Zh2nSLPbqQ28d5hDVAZqVxzVLXoZTrf3fpPkCus192evp9TUzFHmqXca8LsYKUYrkY64DQi",
  "key30": "3TyZwsqUUVufZkDPbTwPBdq3fVdxYfR5W4qkjQJC3pvXTsZHw2J9Z7dPpyaS8wUDRK5Ap6hFk6BTAjhPu7ni1WcD",
  "key31": "36whuPo4Nuxiq4oGXchgEBm6G87sfQPi9hRomx2SEqPE9fUF4kvTTgbdcUJug47q8kta4NgXpY6udB7QLjrtkjDB",
  "key32": "4zyrKqGcCg8Sm9Br9NHZ5mNAArdoZuHM1iXkBgMiVKQx8qQEUD8SsGF2CLp9M4sdEFJNAGU3bqiX7VoWRHxTbENv",
  "key33": "25FVwZEUjwBsdNPHFn25KoEWyxnwWt4Jbd1WKrDdpW3wpz1Mg2K1MN31EhctnRxud2UdGSrP1We9cjkrR6mChuTW",
  "key34": "4UhteiN94oENTXDwt8Graro5XLMZTQ7jzqrdyq2a6L9c2foYFHXcJYSrt2LQaMmT97NgcoHvgKvU6DVDyVZw52TK",
  "key35": "3twqT1XSKz1FqWdGwBkNEoAzowWSizoMs5CQUEZknGFH7wFJ78xzuuX56idpf1fW1maNzuptqEcxG54XYNK8J3L",
  "key36": "3fGwMeu33X8wWPgAjA1ugcGEArQHXDewko8rb1Xw27QQovEWEY1nXiV5jbhxRhoeGLBGvqnXTSsV3E2DXtWxRkta",
  "key37": "4Qdy6Kobp7y4WoCnmiByiiSzFxEfKf4b2AbLZ13zKgQZisKDky4FUSyuSn7YZmJ5qnfk1KLnPFb3wzZHfJynQznX",
  "key38": "5LWPHECEtkgjaSnWDodMamuvHrCGNfcQjwBTLtNfybqT9gra3ZYYuA7EoozyNnH1LrFEgygVcJAVKqsh5tcfkYoX",
  "key39": "GyB5MvNKow1sV4F1gsaFrZsGgA7YHgAAtPHcTKG66xoaoFWHZXQ2BJAkdfEEfSEYbMUwpqRTwS6oMezaFnkuMk2",
  "key40": "4XqTe9j57a7Hab3jH2Xux44YL5jj3NsQsqQftABsMZnH7b5LtFJHYXqo6N2Bs9c33NYLvZpHFRB4EZHGfBtHKH17",
  "key41": "3m5pYfuhCmbvkfQ9QbsVVAwHekfRhNEdpQwJaVAAbQxVYzWPUBiB7AijkGwuTdLzsbyeqmBrZLi4cm2Npk9cuiN7",
  "key42": "4gwLxc8KrPHUWWZwWxEZB3LkkZE4DsGUPMpYaiyxcB8sHeD7xV5yMprGpgwWuiKhmqHvqe2CUEgMAzCpFztXunpi",
  "key43": "24RNYEBJeZ8zvvGL5Nae81uN6p4hKB29YhznJXjZoNWxuqANTebZvRmmLSVJC9oamtLdxoYXPYNRTaKKZABnToLN",
  "key44": "62GwbLvryKGHgiXn3maaHk4NhQhSYjoTKWYNkPyk5zbcHGrbMQLgbuGBGdFVNLgahaYTh3Yd8ich1VPUUCgK4vKu",
  "key45": "21HnyMww4utS4pQ8YPX8d8FQPmTN8dnCXAiAxRE2aoyuMnYBU1NgtUCoJVtWo3LMjn78j796nATzNz8bdkH68TJU",
  "key46": "5b72BJoTqZMLKHNn4DRMrq7Ux8tMuV4HqzxNNx2w6Tjo4yzy2HK3fFLnVaKK4u3nJAHoykhJnzUYMkunsyoZtm74",
  "key47": "mEbo3c5AWbJPYikeeNB8kSxHwwssDUXrBQmpFsb8bftZcRfXZBLeYumrv1GB9AQ7QnobByX38z48upjJ4kYn9Gj"
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
