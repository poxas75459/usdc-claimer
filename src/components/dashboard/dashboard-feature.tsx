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
    "3y6rnkr16NnfLVAXwqd1ZteUjTRwe7gCMSqPAgoL6viE9dwzvjYLaMzJY2WxtyyiK7Mf1oCvUX1tLE7B9skhT2St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xcztNCcTyd2xQtGQXJRwtKqxtRhb855TpPP74aPpo8jaf1hbQN5z3WXW9e3RSxEBP2McLQ32beoBd7Cj3HtKPD",
  "key1": "3q9gPrZardAfxKkd21r6ceYZU6JdbsMZMDzzQfPNJrj9N7mDkQ2WZKEZVXgj9WPqrNAAwagvjxiCm4DBnmNMssy8",
  "key2": "2LAUPKY1b5eAVjVgbm49LBruTXXJvNYpAvKddbws1JecvDy2wLkwstgDrCnnXBfuVLsrfrYXMVwir7qu3Sm21HGs",
  "key3": "4VuXot6EjNz4fMANgJY7dKLmQ6ME55FvdgLVCVe3suN7HJtRytrow2uXRKrDcPW3x5kKsxDuKnMy2yTkbLf28oLT",
  "key4": "4hXaTnidWmJSDu54CutjXkFMCKa1gfoW6Lh1cbMfLRjuyq83Pq6ezRAr77jYMouy7KZ61xqtgh1HcTrbuiTsugqc",
  "key5": "26nrTSdjA4kTtRELPRtFhZ6mjNNpbwe3L57Hw19iH8W2ETnbYsZozDmSnwnsgttYD1qufaQUs3uN8k644NcLUorT",
  "key6": "3YaQv2Ncq1LX2GHMJmtM2iCESQj97obs4D1uGPrX2c2iyoLt24UyAujYi2n7jWiUDrjKMBssx8TNQDgnLhjR5My9",
  "key7": "3hoLNLxa3A1qGP6mKtcUBjEbDi5V5WGzfC2egPQTLvCEFdi4cudvN3H8aaQLLEFBB6w1uZMxVKN5ydr4CH8pCGqT",
  "key8": "3PBcWv15HKqY64ZfQyM1uuCJVQ16P8W6WKYGkSmtYHx88t16Wy2przYXzHsRs6LV4GnECD7mxUzQqQ67nYRMFvkY",
  "key9": "22LXACEp5u9XP1MXrxzaRbGoG1wTKJfLBMu14n2XMECsRcn3sYZdAbatNY4uW174Vos1jY24MrWuTcr4RfexyUWm",
  "key10": "2TKiJLE8oJWdLCUrfpTiPXT1ixkLug33tmDzv9ghtecCfPTDckgHjnxix4b5QowE66Vc8Cy9FpSMfU8t19cXcQD4",
  "key11": "2A4VLfpz1q1SziTDPctNySZLWxvhPBEG2RisUez7QN8exiuuzmVExChFk3aYShbzKwLMwyy8pkKQVQSyPFiLCGGE",
  "key12": "2t43yfr6M2k1ghCQtkPcNA9Y7c4n1ajBNA6ZSMbvhpR11j1Q4QST3LJWeUEd93vpCorfWyKjoi9n6r8bewqGyjo7",
  "key13": "41W6xStduAjy1X5XCDCL4BEtabtLSHbtoafSdvUqr62K7gP5QRGQhqdAAwQtabibJxv5z4JAGZtMfTpz13efR22w",
  "key14": "5P7WzUV6xbBQg9eTNEkgeKbhxnptc37GY6ggNyWTFBuYHeoyKtUP5Mdwnexb6rcNv6LgzDnLnN8b4jWakt8SnZnH",
  "key15": "h4HWPMVwZPPkqLQp1p9C7aLuR5qiZYoBHWod4P9QpeJTafjkcRK3Kk648JJDZGuVHp846X8bdEYcWyye4jXznkj",
  "key16": "37ecF2yqPdpVGUC69tMXiTaL3vnVPQPJ8Hfz1hKYTmddFY7pobDwDRPU59wUqNRDhhiTUgftGEWm5vvdFK4mNQbV",
  "key17": "5DMxfbBWj2qXpHMn4x87FZR99RZUtvYmo2DmiZxTFLtfwiUcLSCApmnRxSTxsafQoRK5RFTm9JYCpoBGMReqdKnL",
  "key18": "4eprmXBwftXmtqvywzM39pq1VmafUDiJH7xDPXi8J5m9P2gSs5PeJm3jMu4LJvGWW2jdjp94faEQgwHrsWpiW3Bi",
  "key19": "mSBvxhKdxhBzH7iAxntPC8RahpJNwFFCsMYtt7kwj4HnpbUso7HV6coFVAMK5y5bncsSjJzCAfWxDZrtTDvuv7T",
  "key20": "4KkQgPH7KVT73Yni5irkGQPsCRV2iDF9G4MWMCRy7t9p8gvnf8YNVv8zAoxgJcLLjTmhC3vm989E1Woj2mny5kjS",
  "key21": "4TS4PTHKAkgidqMEyghYACLq7Rhx8tzw8Qg5EGczxc1We86JaNwbtqeRksQyE4u27kpTCjv6pbf3ktEhnF3xY8vL",
  "key22": "5x5CTZ8vRsarAzgxrMsFnTzhKoxDx222sWCVT6buwDRD8VCxAYDiNG4irsxGc7UiFzX7xymgAVF16KLFPmDEqXma",
  "key23": "3ojic3ZzxReyPsyXsbDp29cne2GKKyJTF3joqks4PBGLK5KaUNuL76TKzx6qBMpf9q8ZZV1nsY8vWdauMd69bdMX",
  "key24": "Pkw3XB5BRSc64T3r3WstebjG39zEFSb9HJpG5pi9PXivhP4UcJmu56aSaJvebF1wamqowHu7J3YkwGtuVqtQfGX",
  "key25": "5kGo2tuTk4eF3ufhWYvmTghwPf4kxL6PTY6xpkpKYG6utsVbLPdjuiRJ42peATdCGvaeaB2QyVHQqvcKwKiH59Ld",
  "key26": "4kbQZofwLhG5D7gSeHTbmFLsHJKiaPhxhLNgzwawpyihLLxeCvgqCUNHUKB7G9NXNAjToxLVAd1NuMgxMZXaRwz8",
  "key27": "2seX475XgZFGwyxRPsMWgUGBCt5c8hzm4baYUPuqqPSzMz82fRzdNnUwGydnZfS8hSyZieXkdj26BaWgModqpccL",
  "key28": "66MQukf2wK5RR1ttL9xBuJJ1f2NXeifY2BPkXP4dZxkTHkX1yDgjm2DN4YfYsKGJteKxwScp7GTn7ANSLkDHJFd",
  "key29": "2PpnAENVvXX6TNg42hPczvhtPhSMRQW2QGuwGuho7jF5UHS5EZVJH2Sr619nDUFzZ564iuTsshqtgkZvKf45m77M"
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
