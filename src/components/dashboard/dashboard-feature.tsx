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
    "4NDvE7foWRmfVXxdhywrrnRUSvH4GXjcPZCMCZU2HVyLrAFyJ6CNyYC2LNUg6EoFSD2uiPy93Vhnh4BZqEPEgmbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSGpLRWc2xA3kfdhNxpvRd491opPvFmrgCu6JvaktNg6bf4KQGkV3Ca8VkKLWQR94c5kuSd1nyeKpYJquqNpBD1",
  "key1": "22tNQydaV58AnUZPwrZkA5HpSnS72K41Bzs19oaq63nvza9bDWbwpJwPfpMyBp9YyGoYiF4wHqQTyXQPBKyu8AwY",
  "key2": "5os1PakUJfA6LnHgkisTAhzXGkM2vYkDQAu7CqqaNC2wSYrFwSSGK1bFFd5moYdvJwva8K7FE6pw2vARnCFenwKA",
  "key3": "5QVPSBEU2W6EExKGvr8nuN4hE2N9RkGoenCUBbpXvhEgzbkyaJSrpAn7dbVzydMHsbDpKZzFBYEyn3g7pLFGsZms",
  "key4": "5DRkSdJ2CjRf5VnLiZRo5xDYeT82mtssWxcBgNfih47coPUE2B5EtBkGz1on7Dajz6c4mxAM6fB8PkCkijPzHC1T",
  "key5": "4s1vdXRakqyV7dvRgMvFdoxetJf1ryMoAJMyECXT6bxTu6JyMymbQCJspRpEzxpoAsMdvsphaMoWzgxqyj3scAp2",
  "key6": "2o9v7Vt6WmXuMpcSttyVLAkX5fAFmKEu4FLkuqbU79pvBwxSV1teUPJ7FRZ5vzDNy9hfzd363o6c4QVE2cTvprFD",
  "key7": "4yKBGqtnQSDQWf11Kxwff2VD9uhxpHNbmBBsU1mbuKSitSTyffVGzFBuCU77TkmXtDX9UowVgkJwJ3DVP6N4pcPh",
  "key8": "4qmDz7RosZCVaYdH9LA5jn42BdawbKNFztcmHJHKS42d2kRqv5pX8FfzHuzZGFkJdXKQ3WkAEH25fdXvhYpvUWGR",
  "key9": "4m9iBts2u73XUotaxiE9MTB7ZCN9gPTT7uu1GH4MKN3QZopLcjP1bSAs3wfDFYF7bxV3dq2eihLE3UEZ3oXxLrSJ",
  "key10": "54gnM1UsTNJuuJyMdkGFxGJwK9VShtHSTwZ8SHqdzFnWGqJgRpN6AD1S42XABGchM6BpRFJq4tXZzpFBwfhobMVr",
  "key11": "31kgYLniAfgD5mMct9rRqwvn4jSPeHcwMaHcCPQHDYGkYsjM6wbaEjiJ5nAiUJgtWHpBm89MgMSFdJAo8V7tUjhN",
  "key12": "5B2rXmpwC3w2K7dHVuhMccGLnUvXuLGRRaetFp75gqhDCCrdMN45rXgDtKhWWqn7URDmCAJDTPpswq4qvRTQrQpE",
  "key13": "381tsHJjdFHe48tPoN66MY2n5HVVrfdS3PZc6oBYKyaujST5Yn5TXHqMbXJ3TPXZofPLKjTouA9a7tR9hnoKVdZQ",
  "key14": "4XfHsiKbE9Ufp8rA5yXshtQ2EK4BuB1yqH4Yb17MfGEs2oxEmJBYYQdAWN4Ekqx28Aee5MWWEEv8B3EZ1tLi2MdG",
  "key15": "kPgNCHp3zqkNrWSb1PRJnu12q6c2CFkYXfGUh2v3xFmHj8rQny4XfDVqo22iQ67NL4Bu9GNLZzHyqWAPHYDuX6p",
  "key16": "3Fv5esAX88SZf3AcnYavfprK3jfVTyVrTUjFQ2K4U9ULQdK54XK7DncYkadkHnauV7ogsuR4V9zGRKBaKBgyqVMg",
  "key17": "2E7v8FboFQXnTwWtYYE1vXKGTU5ZZdq1AEsd1skixRT2CZevtzb7RMwj2v1aacQhdJAomxG4CUtRq6HNEAMwimEd",
  "key18": "27maDXLooWtVYZC8KJ9D6VhbGiEWf5h6V2ao9xqWRBdeTxhT1Vwr3tYoayyHQRrknoxs184Fn4ambyKCxHU8Rsya",
  "key19": "5sUnHfsimLFDBc7LqiQb7hBVdfhpM4XdkWUgV9fyBxYCE5pjSgQey7gjc9MVxdD9oAanEvtUjigMGPs1JG7MWeTr",
  "key20": "64dtM4GczgVUtpitiPw7V3Z7SW97sbYSCofkGcjyWHt7kVQaopbJEzSTzS6aG22gVBs8fJEcZq4SG8ku1kbhECoE",
  "key21": "2AVRPuRYVMBrEmAtfRGAsv1nVipNh6qtiRhEzBNseg1zn8SaqDSwNsPAeGKcecYAnJiJxGnWs6ZPLsHSBnkFmjJf",
  "key22": "3U2YBaGVnajrVDZvHn1p3FDXdTTQTbKxUPfxs6FKLnJZanxXoAtDj2WcnAfyvXeBWPKsdCAwS1xYyvY5GMCbeU3f",
  "key23": "8VbTWtQarm4e24iAZGdzzyj4YmBNvedtEDi8wpmudMm9w4P6yXge6zQeFAM45oLmkMQpnpUWQtmSg5aZAQvBt76",
  "key24": "5wpKMYQEBtRaN19bJ1TgFTQKR8VsduUtfUT7ipq2LNTLLUxFjs2CNhGnfsFswQ6SYnYe9MwvCb58cWKjVc5X2H9r",
  "key25": "2btS2Tw9Vh17onWFrkYYDqfV96fdHkHjCdGcPqNK2t6yQdr39h7xULCgMpUsWMzYtwrZyeJKbd13z9qeaTConcpu",
  "key26": "3gaApCRsDBEHsJq1uydx7fdTubWzVk1cQLCYWrpgb9vYbUywLE7gC28Ru289hFtmzAdGbHhLcjYbgHAFjMcFF3om",
  "key27": "5jbddQ3HcS2Ms4MWXpwnBxxxzhiZNhywRk7ik85zPg21Nbc6MnuoQh6uBXExLq9U5fVK79ZoaZ5qPwTEhTMQ9PsV",
  "key28": "27cywkobzUnwSeBK6cvJnHxwAuTaEEVmwaSFmVuzfX1GiQ5zjTHtdVbU9iTgxdeNzYPKSNa6uD3SZKTm6QQtrNfR",
  "key29": "5oz5KzJWjCPbnxvUFXYVQ2c6G2FQyZGDYyFBcafEvVtDEcnPMeRv137oguXdYJ4Ff3NKDn4JpSZHxtTrL7t89VUs",
  "key30": "3ACba8vGVQEpLhPmU9fV6kJs4TdzU6RybD7B8Mkw1t1sPqj989g6SEbAPrTuBWB9qmaWnsmgEuSWCzY2N4H3GYwd",
  "key31": "2FwwTMYPv9t8h4YQa7zkvsGMvAdFwpZWdWRBujXDFDveNd1eFotKQx6kV26fBswJWeaz7WvNfo6SmtT44GVJYwEk",
  "key32": "56zWhzko8htX3exxiMytXbvPw4sUGGHpyxCQ4DDfziP1w5GqKREvbcmLCf2BKxZX6TyC2zXhV5jXsVSDPsNgWTPc",
  "key33": "3PWsw8sMJWML9FmQZsL3zSPVpu6ZZMpQ9CKk9S8myp11mD8oJjNRVKhb6yGkGzKCgHFPX5vinJoAUihXZntuAKk6",
  "key34": "2oKtzDCsFw7LnRw45eDTssPNhSV2bX23betwLLHuP5m6mxq1mxxVzKzU2CvMcWDovSTfaiRbLpCah18G48561Ydy",
  "key35": "4UkcuHmFqrCj2TMPVwjPbmxQgjC9gb4LMF2EcCcFJhjhjv4WCs5r4R4ppJfeoG6qZvACXamKekxUVn6HsKJG6AFr",
  "key36": "5PrKqQEYrrT9SfnXYZDYkuxEemt8hnnKc9RTWnU1nJHekH2LYipZatnJaqCPUVNMHv9rK33SJuZkuNN5KmX65vhN",
  "key37": "5QXhaJPXdwPaGG7W4EYevDVSDU8Wn7zHhbXuoxgyYgwZraoWrxsM2TkApKRvys92NthXgHzAcC5YehM9ipU7zTAt",
  "key38": "4VyC4A8XZU9FQjQJDpqCw7p6XezxaYL61TPmF2ppF4PqYo9u9pxGqgEyY3hf5uw4ufm6UDEsWY83877xsDdriRDY",
  "key39": "4RcsRhsxex94H5iw9WysrwBfjQ5EwPS2UWAaipVAjaPTn48W7CBxrbYvNewtmPDtAsY2awTzDhNyUSaKa3ivAcD1",
  "key40": "4iqnL9AwgehZJ9wUgGNwZVLSJY12f7fepAzHW2UMiaqY62KT3CBdrS2e6iW9tfViUt4TnRNUpfAwqhGEPWsm1z7W",
  "key41": "3H4gZbYcfjwtbo3G13oB9aXqQun7fTb4kFNvhbtZRY6qzgAvX5iLcy2KQvmvkhRxpPRDDz8vMyWjqPsdKaSf21u6",
  "key42": "2WhcAxbC1WTWGQ5aTm2oudt1zKRW7MZzpxUcuFm9oKFGHfkZkzSQG3va8ro6TvDSFZBTEqZpezVt4VMoCt9UWMoj",
  "key43": "5zrYgbMQUL1tzZdifsy6NoXv72fJvayJqYHqJNcbtYbksG8hteUhP2TkZZxeuaYg7hVEoSURkVDWDzxUM6BbDYJr",
  "key44": "4qsTPFRExQWp7Sg1crvg8ZnVc7ncWdStQGbFUY3dePotiVUWWG97WSVtPq6SshrdQ3DBmNNy3e4pHYyRShQV1nVJ"
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
