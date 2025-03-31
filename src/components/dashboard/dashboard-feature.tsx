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
    "2VTnDuAxhS2JhvKtYhx6k3WcaRg38u1fbeBvrxZVQmrXARP5sdCT8y3CvFHuf4Yf6Rt4RSDREsyc6jnyJihhWL8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SgdS2QWLPwwfPyvCZFoE7BA8RCzd9yz9yhatsvRFzwAsmKwArywSXmwgDTyAGxjQ83Y5E8xd33JCdVJJjAvTMCs",
  "key1": "4HihLtJNXRvThSK6S3opjhUNXBDtZcFFUj9Xuc5EQJHxbDHvyhj5xsD9cceQGvXb5EuGxbtiG2sYJ478evvTdtge",
  "key2": "4BdZ9cE9BCYE89XLr4dUs3KtWrEA3qqb5vRoBnv42SZk7owf5i2XNXGxHX3hZzRH3Bbv2iwoPDhbRdPFMLYZRxh3",
  "key3": "43ssReyWKbtVZxrHNmTfyZnS8bF7i8EQ1mFFQ1XMaFoc5HMLceT1MWqt1zr28nwBpMpGwYx8zDJY8wt28w8SKwhs",
  "key4": "26Uo1w1zCdtT3YQa8FaskRqh5BXVScjnT3R4mFNjP16dH1b6VNUDX19qzkKJixpsXYE2LtuTBfZULQ71XrK4KWTp",
  "key5": "2ceufhZUtJSh1u7zZVwPAdVUYS2Tupab1mhesiBgouCaY678LbsCpXNiFUMpCjmEvsTby1J8DSxsVKsCUcYpKXvZ",
  "key6": "4BsmJBtXLemWVP7Mv9saGkw4sKcWkkAF6G7KswT3Ut7ozY2X7XSzr8L3WEY2w5Y7NyoHBsBUyfaYRxqs1oW68Lky",
  "key7": "f1aDdspVV1GULpTsdN3wfawPzkS5KSRDqU4kPGchyvKyb7fQj1Azvki4U4aqtGADvoMpEp1kteqZBPZdoX2dpVJ",
  "key8": "2HV9bsxVo9qJ5iwrmLRL8idYC3X2j1RQueEJN4neGcm2ZqmxATrHkULXqafTTecmF4XYaNaB4cYyjkYH3o6ULrZ8",
  "key9": "szuMeyiNugEDgv2aRkua8hjgQRNvmxmNrF6aY2ssbDKvSiY6WFHLgadFQoTUyjXRu13j9AEn8458wt12yDqBXfN",
  "key10": "5r7cXwMc4aH7h8m9KEs1ZLtZGFZoVCpn47B92zigSghQ3ciFnRDmnb8McEzH5A61JU8yZiUHyjXGu7wb4NHsLkFE",
  "key11": "67d7EyGZj9gUvw2NFifiBmfzdX6Zp7WyVr6nPPqW1qCaYJv2fToVHosQR3mdUr8KqVmgNeY9Y3HWUqcQx4id8gAX",
  "key12": "5THgeWzqvgRpK9HZ8M5cjHNBgP9C7AFZD7WmdSLBtph5QYBE8XHri6mpB2KsmAZeewJzHASHnNV7xsEsaugz5SMU",
  "key13": "3FV93WveRNHSqbfwPDkVVpMH2mLWTAa138cposTzrEUuB5xVPM66fFooX87WweoGrXWS4pJ5tmNs13YwgDsJc4kQ",
  "key14": "236xP3XR99T4oKtbFREtqc21V5oAoHWqgPnTpanieHmNi82g9DFsEdSiRZy52P1m82U8DkbQfQJwBxPTmfZ7XzSB",
  "key15": "2w5EpUqGPANvHpe38f7FU7cD3gGjxG64pn6jhmsbEyhQXmM39DvcRnrzV6CxxfzQB4DBG2fPYXWEv7pbxKYsEAzh",
  "key16": "2Fkesypo8rRBLRmwieYuuBz5sQF89o39fChNshr7j3KQhV62bGeRwG2eo4trssG4DXqZZcGyiAkfvmkfrUWokJ2T",
  "key17": "29zs5rzdSVTf7JGMJtZYmPrRA3BjC1UpwifjLSCWUodNTW6pdrfT3eoL2neV4oqtokiAEFqqW39E4E37vxVk9khb",
  "key18": "VPSkEK1fW2Ge3Ai8uYxZTfQsxyWnBxrZczkQdwmRA8q45zZg6q2aNUgm2dy7hMk4Waht6Z5e1HkNAUKBJ5CVMuE",
  "key19": "5AZ5d1aDf28f585DowW8oDyB13s4o5Y6ui432LZbSsfEfezxtp2HwD5NG74LAk4JC5L72Y6rw1G1m149WbtZRZtr",
  "key20": "484eUSSWz6y6qPTFq56P4yZKuikx2hjcGqH6hWdZQBStzkHngL3NHKUoT4w4Yr51J8P31aYRbMM8HDZTVuyBR1zN",
  "key21": "5HkKzyn14BQyEy4Bhdhe7TAvS48r3FzonMqRx3b6onc8LyUCoeex4QE9KcMzxBPWeMo2bH9ZMdhbC84M8kWjzT1S",
  "key22": "kUKrsgTFcYXoC4qwdH6mQqhyZt1dugHx5pyVWAKNnkcDMScDkHMVcVunTfuHaZ47WJWk6ztJEWfgG7FBSZPBLgP",
  "key23": "5KYcL5tYTbZEBeM7bMws9fmqSrwNxkJQz53YysSmt6NSWEDtA38W5H1WsvoshN5yppbf8WbfiFe2tdLkvAaNyPsN",
  "key24": "h7otPpNfjPS4ytdkx8FrtDFdfNyVs8zJMJ4tYPQh8iLpDDjfXf7JjivhFW4Drk5THgH14NiEVaBoCZUq1daBZZA",
  "key25": "2XRL8tEU8XR96UmbUqxteSqv4R8pEBZVhfSg6fsN36rR7KFe4RLBgn3bJhx1aXvoCYmWTnDdftMzo8sBEPy7ni52",
  "key26": "38VpfNUFGmrzg26pGaFFmzdaFwbPhLLw3615pj3rsW1Yes2fmHyHBUVbnVwE9xBFTFYYERidRm68VcWitimLhFAV",
  "key27": "4WWoQ6kXu1HceRWczCiwLxXhkawQLGuqLzLh5PgPrWdbcP3Fo4vd7FMRdF2u7sUCjMMjY2YgzBA1R31bSiUY6dNf",
  "key28": "4pahYZwsZmUdFzeRHxoiH1mGb99MiBXHXov3nhDGt4d4hvEezzuY1XX52KnzzamyBqQ8JYtUHiL1JXsEoTLYVCf7",
  "key29": "4yfowiG2nfXW4HvVLatfRfhKiC96T7DVx4mBTY3tc9DfdFD6411YFJkdCARFsxBuRcJzG572qNDeNv61TtFymm1g",
  "key30": "2BfG6aAWAEZZ7tJnBYSGUYAnwJwn9FD5sbyP2K82qvoG89K6ntytheozTWP8xkutzkkA3CAzTdwcLUcr5oidr5Pm",
  "key31": "4doBJHUppNiWbGkBSZAb2dsGsitSdrtPWLBHXgFk7tvWpwhwKUBMrnkEuFjZ2dhGmqoyXdGUHH8itM5UcAbZ4G5Y",
  "key32": "29BUp4tCETxZGkYXvgTe1gen2pZ9wZmU9cPdhitpjjoHU2hUEuijcw5aTA9zAzWqzZf6GjWHuFYSS46EzJmvwRn5",
  "key33": "2nbCMFLozTL7FjHmXvnqSQXqUS2DG1K32ymiF6r2uGFAfZmmSWzkMBZnDyGEJyXqEQxVbqDvLzZd5oS8vhUCa3w4",
  "key34": "3HwJbLzLtQeSJTQkxR28VaDCmrthdHhLXXTMJRudJ3crQeVDMdhRxGDTK2neCSJPdt2oFMgr59ptYogxvoric9p4"
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
