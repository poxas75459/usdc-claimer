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
    "4kMDza6mQgesA8CdwVEdaXhYaS1jD3uEAUDsFPaNZsVgt5fmQWpABE9txPWFkoPnEBRtYebGBWjPZS5qPNf5sja7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fwUfVUhRNpjxmvLBBUqevvPG5aQXADKcV2y7yoWmK9apbGaV9dyBSxDvRWHEnKUREM8xcaxwSeDJzG2dyDANphP",
  "key1": "2zGoc98w2T1dtdMDSaWpjdDfhT2wSS3fhRsU6RF7NfDD28kgRNGkn7wEm9T8GyttFgTReFevcEk93tdHwxCzyvZo",
  "key2": "2RogXzyoLYLwbqoP1hXuc3p9CbsPbqjoowrX5kBkFEAz4WFieq3PxjpRntFhk5AEBjS8ws5gA8469r6yatFt72fK",
  "key3": "3LaA21Fw7sFDsNsBn5FbvrV4GrQwMSo5aXqNNfYscCcCYenA2PHhZc26EwBxu9p85hdfnaLtb5uepoCjGDt3JZF4",
  "key4": "3u5Cwv4kUzmiL1nju1HGpnHoFewCnCv5TbBYoG5CMPsxRMM6exWpYbHZqS7Qr5f28tD9dGh6pvGncxKm35ApGF3s",
  "key5": "4GqKvH6WmQCgxiBeBUkSNUPi2TnhH1tT5bkzoeh378EjmnjPtmLkHXD341Vw4dWjpTH1wK2C4zhRFNbfmAhpwUSy",
  "key6": "4CfpZfADD6KXBnGgw3P6mjrkZncXctP2gBayt9Psi3fGYY6e6TDa3AoRntHnZ213rMarkSf9UpZTatazApaUTgZf",
  "key7": "5FA43bupiRp74VKsWAbUzXGfVr3813uCaQbxdzuG6zc6agTGRRjwrMxa934xuTZDiSevoShetujhEv7rCyer4a97",
  "key8": "j1nqj2Eetr6Wt3HE8KFv3WEALoMq84FCcmQhspLTEQtrLpEFmxFXpA6Fhd95h42XjcQGxhV68AJKhRJreoZHwWe",
  "key9": "2CAdzNasR2yf1tkY8ooAZTmbY259Ky2YZS4g1NGGjbSdLCzGc1zZ9ZJwFMHwniKMEMmkCjh5Q6ifywXgdp1TSvjy",
  "key10": "WkUdhYeDu5xFZ5yAgj7iCgCfSNgoXHZGqWuwmA894BySyw2mqymiuTstWz1wJNiD5VJfzA1p9axGZtHqNQQ3n6h",
  "key11": "4UscYWRfnAvkfyrmyzSFrKwAsoiBHHtauV6oEfqMyHDCdKHBHTTbZRJQH96uKXFCUTbx5KfvsP1dAohEvGkAdKeQ",
  "key12": "5Ng5d5ceb7s5wTf5RmYSiamjB32zt5i26QzfchQ5b4NnLPX4WgHRv2jF839fK746mWNaY3ckLW9p7PWszQyK7dBB",
  "key13": "5WHV9N7AZF17regn1ncfU46VKP4mHrFoUkEUUmHyytVPCRFquzx3jwQhiqtwkPoZk1ro4U66B7prx7E6UbSQyNKq",
  "key14": "2BdKTf2QfXHmDuPHJUE9N3bkHf8GDtrJuf2Vx6Xhfz92E92LaKjopsk5TRrno8PdaBJNhsKq1DtTtjDwL7bQAVae",
  "key15": "2GwSseiEjJx3GVEMPZL4S59CbZHanmzAg1wZgVLjUJShTu1NCho1yTpPybKVdAwdS1xYHTMsV9xTG5cmgmfYSdLF",
  "key16": "2AGSAbW1ao2mDAv8xp69dbrENNu39iNAEpKEdaCpLPCGzkinXcyvHazY2cpuRUN8WhwHzYHSZDQbGBhj2FarMxVr",
  "key17": "3iqti3fswp2Rf2SyPtt7vXRj1XigGDRC7SHorU5SXhs1KMN8R7sk1xxQ2vwC9R3KfvBhTH4gqdWFo6JBFJV1Q44u",
  "key18": "9DVMJRhQff5vhFhx8duK6G9a5muChTigBkcBeQkEQULL43FySZwxrcA2pPT1MS9YDQoYR6sCmkboFmkJdWSUYrk",
  "key19": "5JQxZxiQ2PkevQopQ1zGFcNS3CPhsYcHfJ9pTSz85pQy8M7GmL5JkNqxRDCFzSBNaJGGWzb1NCzgYCsd1p1vMqft",
  "key20": "2iRhwjnruuLa8YRZ8UcitD5aSCbHoHq4HYERE2AMY5LRuV2vaeEm94Er3KasYVec6GZ4iT2Wbq5BScyS4yGwSeJK",
  "key21": "39XQX3aAikAfx15KRBBwaJ9SaHAnffSFAbXtnk9iGxe6YrmgwFtHXqNr8bxmwJigHUkYocf9qViS7KG1vRGJoxcT",
  "key22": "2Buk5GPYWrSXQEf7zrjbnerheW39t1DCbpoi1FvvT2Eq1eiUAEvMF7idZb4n2n8BnbSJ7BABUsDNm4pjW1wVQGpP",
  "key23": "5eMx4BBgE7ne3TgRZFLEmVAzbYPRUsiY96yj88ciY79CriUY948gkZMyrWye2M6SG8ihpUsaCBoBfeffWbXimsAB",
  "key24": "iX4H243NP4LQ39dcd83oC8a2dArgujCk2w7eHAJrXhe3kxwwgWd8Qus28KB6vkRadEPLaMSFSXRwkt1e88x1Qy4",
  "key25": "CwmfS2QjBWfdyxpjZ4uzfoFS6WqjoopTi6yCKWgfEunpsDTnZSE4zSFEwMfHy8de9aigHz6pbcVkxMqPoRcJHku",
  "key26": "32zSRrfronev4dVNDYHWwx6h4J3uP7YBndNJo2E3m6S2R1cZHjhh3dVGS11tVHiRbsMb1ydmi1oSx7tbNBkvnsXE"
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
