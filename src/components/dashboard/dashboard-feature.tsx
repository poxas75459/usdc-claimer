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
    "4Nff5SriYKCqJK3N9vmqof81AfrU9vcKH3wkiRYr3U7TDKrhoPwVixuY6jvH3KD22VkxDU6T7j9BcMQ5wuct7GvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6hy11pxQib1VXyLW9iuApw5Fo97ki4dhMWCCSwNvsadBXM9DLSUMkoB1kLhPqsAL6yA3yJgZRgvwG6UjAtHRuC",
  "key1": "3eMhCHVyEc2eUCPCRNkDRLNQmLDsqgUXP3XMzJW2WNbWiFUuqLviarH3GvsajSYiGi7zivgz24c3s6vsFrLwAjCv",
  "key2": "3JQsD449G73pZwp6Uxu9LuZSyPBD8pqJyACWTrqRtLkQqef4SLow1RLHW6ZfKbc39HSpuoaH8NBG7QCbSNfN225c",
  "key3": "3FL7qDHcgGCg3eFwkxB6BBkxKN4KR8WzKi5FcGGPu9Bzvf5DPygrpEetZ21RyzjJMS8fv61FnxBEqVMoPdRBBHyN",
  "key4": "5uFLHJjRxGLvt4sLF4vdP9dPZEh4YuWPNhV1cfgC1Xere2SvCE48mdadoHe6496fTXwN6Xiup5w72xCg4nbx7vuS",
  "key5": "53vXCeBvf3cNhtt3QCj8Wyq7M8S2EekG4392vvfqEfprHvd9QCGX8966CDHEzajuohHMKtWogqdL5n2wgxCqE9D4",
  "key6": "5E89LGqQ7tSeKYaSdpnTgS42A7xyrfPWKEK7khDVyyxPVrKnA4dAjyc4Wa2ks4H7r9MGpByX9QKivKx7w42Xepws",
  "key7": "3P8PzbaeTHNiiAPoTKwbVDPZKpQmXBgXhnjAFyMGZJ7k4gg82eChKGRRjyb4ZuxJTn7kpPmYH7c1qnHsbDwNGSht",
  "key8": "3vEikXLVVB8XFQEA4M9b9vbv9aYP28AyVXAVD2r5TCLiwuZSAEMDG37sCqe3MvjsiAw38oJzXKqgrW9bCBSHZc1d",
  "key9": "24BGQojg8S3Jj77Dhy7RSH32KSGi6EpBSJ1FQS1oKnEHpwc4dvr2Dw3rEnrDBPCyRkHrEifLdwvaXpidm55gZRoq",
  "key10": "3hhGqNqLDcHisJgRwdmnYqUHHcv5394Nbj9EexQzQAKYCvcMrVk4NsSSdmqSQc7aEUxVJ2BVyXZkKTKyuLqfwvPf",
  "key11": "5PD5iCnmzz9aWVS444dA83Wh4xQmfdqYPZdDKYFaAJDabo3T332FkcRNRAxsxNQ86849c6C7oLywMFTkRobxPZ5F",
  "key12": "3wq7WeBPeA8wZhdpPYeC2EXgpAJNZHYpnxK89HaK4pWDJ4GdZZUsTKurVVEngiLRYy9CuEmW92fmmqjUEFYMyQT3",
  "key13": "3Xg1sEcSsTeSYUzRWUXpMD7Bdhx9nmHN9Rq1ikV6GN4wowNpBq49sedRddR4QwMkv2uwyhEtRsXAdqStMMpiKsE9",
  "key14": "3sA3XwbAbThUhNWfKtiP58bvcXaRJnHkc9fXUEZFUEPuKidhUwnrQVCT6hcvNTi5exfS1sxsupScYa9A4dhEF6wg",
  "key15": "3Nmxn2pmnPn1rN2jSXaJ9ZwEoe3imS4HeVqZrZRbkv7usSn96ajwPTNkTrWLyoZWuqSTUaofDfMrt4Ss48A3VoXh",
  "key16": "55TDfEcz9mo3iFiPjZP8UzEMdKZWrjyBJQ858HkdoTPypb5mTsPCDWD9WcTQgAb9aC5mCeATjgwyH2GqtwZBiwy5",
  "key17": "4Zazr4Tv7NGad6w1ArPvwPWjNB9K8GqTyvBMr25aCMgk1aKbDm8ohUMTzZzKrRNUUaQrBJca1tjD7ryHv8Dime7C",
  "key18": "67dZGppPLzgZ8HQhzigKxrd2PEEdMnrwEcwwf6kKyr3R39Fem7C4mUPmKEozrKU586nH8uRH6aap3n6eTcCXTGxB",
  "key19": "2tsSwvHbX3qVnUV6VCZ6dsJ416gisTrJowMWECJtPmZNp3SMmxPP6K4EEyy2V9ZocZVEnKka5gc6s7Q8bW41EZ8H",
  "key20": "4ZxSWNnBiBRJYfhFHR5BeAADuSatDhJUrqYCh4FG28RJv53qnu61dWrL5TdYTbkjBZDmtfGwvU3KCgLBNmm1UCvX",
  "key21": "67H5jAwwrUTvs6TkW759vQijtRwedfbQkADcWNmZEzfPN5pGECsBTZtGyT2aP56Bhzad5Zag5a4bNU8ca78HqUZe",
  "key22": "tveLu5JK8JdPzZDvfRUwjoafjXgvRUamMBNqXk4DcL2afuACoyrCW4L5RD1LuYiuk8jcPDZmaJWuF1436FMKjs5",
  "key23": "4bPDja899bTPRrPJygitkYMPRmdzKZV74L8KV8eK8uxSRT2scyKBhUqSm8XV5d8GMNXveTzPMJjpwzwtnprDmp91",
  "key24": "2axQCdqA3cVPYQSKAn288fTodXg2bvLaeftPXqNESfg2jrndnVFxEp8NrcBdqXmiJK6rsxKYdHaLMPXuZAQuqgjB",
  "key25": "4r4NrYTJk33TYZotdTyC65qeuiANJ8jG7mFskRV8hvYoExkbLzT4e5fLdtmXjV3cKiZL1RvARjcUSJKdZe3X51ax",
  "key26": "4UaqGKjZpkSDfU7xbwhJ2zwDQRTMxP92LV8HTkyoKDWTA7XT3Pzv7SFLsdTzH7Y65AxMokzMVtaM5UBoCLMDj3iV",
  "key27": "2TF33vpaVZog7ErpFRwixLFctKSMUmf5xWj68rbKe9jjRpJzh32NAR9dPMtTX4yDu1tcrEKnmqxAVNWSNH58iAw5",
  "key28": "5EmSnFSrisDEB4Zk8vi81cBGoqgrXHUceDZudbgfjXZ89dQDaLsboQnc7ELzbNVUgf5ywGrHRckzFLB4t4Ha1Fpc",
  "key29": "5r42p1tMcTQCakPrT1pD2XgzqvYJBCAzcxEf46jKLYP7oPPvv7EAyw8w8X2BvKw78cc2JhjWhXVN9ZuSjSbS6JKo",
  "key30": "5ArnA5WCWSojpGCSaorv161nBRLg12MnjXxdURFH2GvRPctkEbh35Rq6RWGTWmxYYBAkERfzwfG99EVpyNj6QniP",
  "key31": "t8TQejjpFNq3aEZvQcMrDj4tk5BLcaCjJrZZ22bLhx1KmVMEP8Kbi3iUKJGBBHNqTA3Qsj7CYcV7NCbgui6ip7m",
  "key32": "5cLwiHinLYmMvDHum7woStwXYd5zMFh3AFGn7625m5oC975XxTzYy2szU4AnAKa9C5Umw4APRnYaz65g2WeexgL5",
  "key33": "35EieMDBPDEksHa5SA372eRU4yJYhNGUvJEQAJjy2ZctsJrpEKqhwTtbUD26HVGm6uru1gFppk4XvXBDCJ7cu7mX",
  "key34": "2icZkoexq1o4cW3AJrb3Y4qYCfyjz3aAonsRDdwdYsWTyb9nDEXoyrd98NMJQp6Y4fzjo4bJR5EX6Y1mVweV4e8u",
  "key35": "2h8tQWNYaYTWGXeQ4xK6QuQKcbwfehz3ZPgTEPJMNGNcGByz5pAAqpkfzfovgior8D1bVkexvaYiyspRcU8w93c4",
  "key36": "4tfKibsoFR6QHZHvrWPEKbehW5uCNbr7VaCzjMUcUToK4fqY7UjoPzGyJttwChGd6D42T44edssecAGSWBbX4VSf",
  "key37": "2SmucjA1XKCGVbp8hYRX8iSZTNiJpGp61SgxnbwLw6vxCFceLG9Csxs3FLBi9RzvqhHwSVuKVz3wXyvNFgjKYFb4",
  "key38": "5oCng1qKXJWGspie514V6vwVcv44wgK5vsAbfqSXu6uubo1GjTDA1gAKZKRJp8B3AtLjMBRjZoEh6MXvmVoNzuCM"
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
