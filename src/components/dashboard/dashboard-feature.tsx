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
    "62tmuu8PeQPGCfGuZGeB8eZq36cfYUSL6mTJ2xpftKbzenwWkUcTCY8tYuCT4QEUeJDsxvfJLCwM1KERXHuyj5SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXXpNf2NfWjcgeMmJ6xZ6Gj8Wbro2qxuLiDgfHzfV7VCwEbgWLA2L6Y4xtR1JN6zG9cbaBpxgi6Qd2sPZ89XjrV",
  "key1": "4MxfeW6jnpaKW9CiXYEEoMfHsE7BiHmoiWW49nzLJdyHJe2LYdh64E2Adr31SALHuzbQfjnTqgBWee3dGTHubKAn",
  "key2": "4sqpAsyXrhDc3k8CwD2XjdHVy969XCdpheVeBfnmHPtTSSHsdzcHa5mAwLF9LnHEbi8mQFEemjhf3nk3vcswccpQ",
  "key3": "ytBQ56tzHonUvqiEZi3vABo2LPHnUt8tzVGNEf2NK6YViHL1v4mSysNsaXjSo5hnkEdUkCg6H95Jw9aTFMdgStd",
  "key4": "4h9RohVdZMg4KcfRYuhRteJJWYoK1tPNubau7ynU8eHFmTTAc1VRWQgXEwvW4yaL8jzs2TyxaCTAwCST2ZfNvTUh",
  "key5": "322HcXhcDvCGuVie1eeMAYUBNMpZQW9gU8oZene318hVEMpJdTs1v8EE5BvaQWqsvHXBXqPrtFnXSiBPTZwNxyN8",
  "key6": "3RHE8Qox5CH12x5FTm7PWLLvuEULuvRR7ZGeP2XUZor5dUde3e136CXhu61NE73BuX97HN8cpyYbDjX6VDiyfbLC",
  "key7": "4FZMuwjzAU21Fg3tNNvATGNXQNb6s9SDJqRdLRh67BkSvymvNmbMTbZV6HqzUdx2KLtkPhkDuTFyd1JFTjqwxWkf",
  "key8": "qFgFhbj1WZW6nhUiot9iYmzjwzNexEHVvrtWmKdCvLo8KAoKmmCtCDhQchh1UxLwLn88MaoAQEoEC4hgZ3T32na",
  "key9": "2ys1m2vTwPecm7i7XYZWWKyEjFovJShKpfwZifahst7CG4ABiLuTpZc34Zq14TfEoinQny2EjvT9SBem1ZCvDHoK",
  "key10": "2c8StZGrQk4jPd3QMozgsGVtz2XF6e1uZnrf4DHVYkgiXXJ8GFNb3q8VYxouRVVzTn2siywxYCPLHi3tuKsYJbY",
  "key11": "RePbBTURcCsepjAA8VwDfcF1GAR2EAWAfsVnSAxMC8Fm7PvAoEd6YWJq5A7mobQH9aDCwMnjatFimqjziMYfb58",
  "key12": "b7yaaS3tkFzjQF2TWviVc9XReh4wHRQ96oiERN925VRrfMYGtmkZgijk577UAhduiddeb77gpENdfnnDXrczkwj",
  "key13": "4FjA2WCidUne1woQuN55W4JNgjpgYXBjvQZ5yS2ZXhAJxW5xiDuwcyW2rQwTAqPVdnrLYmGSZCijArqnr7JeNYH6",
  "key14": "2riP2z6Jzf2VpUC7feHBxm2jKrbVPQXu6pdzxaNVABuKCL6ytNLD3menqFzwJuHAHXSGPNtsCfyEazgN77weLZtx",
  "key15": "5vgARQFJ8X9QQmBQXp53ArJ4yDbu6FtDYRqn7td9jcyQT62XbZReRh2j24BnavnqRUQsUT4FffgAQZqbdAReDgqn",
  "key16": "4pJxR6pHHF8uNkuH5Nt7rhR44fTntcNsDsRBmR6XmcNHLETL3vE7ppnKt7p6V1KH8kkQHejGeqXEETGbnxr7tA63",
  "key17": "pSohi5hbvNvSvfVRTbwuwNSCsTB9SSDPnj6kifXUatfatYj1sb9YAxm5pHj84dr1JHxMJ5SvJ5gZdJ76XxAN553",
  "key18": "sgVFG2ZF78HJrrGwA8Ff7PF2esmTrCV3ax29THCq8N6mrwCh91jFM4dhB6q2u2X45CC5NCpdVPDP7bUGwwcspST",
  "key19": "2DC3jWCVNExAyi9r2L1YztHHWDY73hxJnLoFjpry3ZSAwiBUSsfoHDnkG9nAfSZLBpRpzT2HGFqbPcTJmtysd3kh",
  "key20": "3bjStd1W78sDkLRHE9gj9CfcDUw5hx1D8t6ZxjahTnX8Ws5kbR7H4xjvy52oDGBkoZQvmzw7f7ZHUL1j7XM1CmHY",
  "key21": "5M4jPBMnWMbh1gZuuoZx1HYqJPur52ZmpRUNimFVNvp8Uy7d1ojTSxyjJquvoRStfcPKRmVdrpqago6Er1hhhrDi",
  "key22": "sLv73ENzZHTekor9mV4p7zduqhXZ2YAbKTwVDbdYws1TMfkVuK3HN29kUTa59KmyWBQM8ZeqkZuyTtoSufghtPv",
  "key23": "5ZxPQBdj3MbKvgw6yfjwC7C3ZcthB4gEASPs1aLSBabB1hwz6SrboGHhs6kUKrPx8uoFUPHUA1kmsvSzoniDzmEE",
  "key24": "3bA1BLQLmWiPDYyuxaHB28Vi1kKTss9eRUzYcKkWopP2Z6ogLDNPxPmb3rc2tzzthVVG2xpbn65pgtYoRMAT7Q1W",
  "key25": "U8YnFKWrKcw6XdbveBnpgj1FZwzVoGTFpXonQyTEfDavs8KqepKKLxvAkpMyErrxaAqFYC7k8yqkV8hB4gAqZ4v",
  "key26": "3GCUwr3t5sDQknaB6fwMTL2WhF32iXGgbuwYUbLsdT7Rb4uCwmsN1VhgiBVuXEvq4MgDkn2xotKUczKjHAzSq4w2",
  "key27": "ZyuJoknCp6NkcfPxtjHg85rgab9y49kux5UJnuUiXCdWXKxYnHjHbkASDQaFwcYR6hw9CjBpbRcPLrqrmSqVarR",
  "key28": "3u9DxSGig41TsrUPWm7P39uDhATugaVfG1KWyhBrgNATi51ZT8Pd8jzbypgK4TwWRSgsRVXgWgwjpBLtySPVkqLj"
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
