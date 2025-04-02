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
    "5UiFXYyWma6KrJZQdPnrP2N64EUy4Lg4FWjU7XRd9PRJU4UnsomuRfzLUfRkfGwsrNo3e6NQ7aYzeb7i5GRUGjz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbapU5U2QrHSptE3teNMR8BqEamTyYfmUU2rfeG1mF7yPqwdA8uKC2eARprVnWfmhbY6bPjqvFLnLgJVHqq5zvB",
  "key1": "3HEqWSkhfsJ61NUWS353wyam26ftExTQoBRihmtvdrtFATws3ESyefP8bKKXY9bzGVVWFcFtjacRCZ2EtpnACdhP",
  "key2": "4NsCxyFXMUErGVs7cPC2BqyghBqyPchcftT7vVmSarh4NVeo2jTaA7kCoS8Sjkn3AYJPKWKd54LKVxZ5TtCpNEm1",
  "key3": "GGL7UaPzBHKLVEDzKfeYCacCPY5Vepvk1N35HLouCnkhvBbfxdCVyNKTrCsouz18NS3sRwgSJcxxPJ63qSiYE6U",
  "key4": "2k1A3uFFJnfEqWLRvGcZUqhC9BgNPDTJW4VQgBBEbNGE7UBP9QQNqgfkbiq6QUe6NYepGDzLyWWzxrNwfzaF9Tij",
  "key5": "XNL3HwWYqgjMnjs53u4Gstrv1JCnmENVLi4W7zd2pXtqUcqYL1PWVhhfdH4iEwVGoQocLbs6pGiEZzJ7KGCXJYM",
  "key6": "2hRGSU6QWP4NcGu6SKKZF2sMQjcjLtBJ9mbc5Sw6c9ADLnQbFP7cVQQsJJK6dDsRg4yEvBwYxzVRSeU5Gyr3i1qX",
  "key7": "2Mkfuwco96FpSMA5yBkGHLp9i7FSMcNfeDs4fuDqzRT2VgJtgrwGLrVpPVx1gZS6uZdmhzu3PT6WRCBm9TpKkxga",
  "key8": "2M35LfoQC4x7N95QFqM5qieVhCeYgoMvUEFkRRzK2CgN5HRERr3hk8zsr58HC8kkZqB5fvBR8dCPamtkEBTXEBbv",
  "key9": "tWqjmULp9Pni5iu3bnouuoKnwsHeNofNsbZY68r4fw2TiAfn8oKc6xms761UiafdZKMTaG8QUMhTSkeGSDy4CqU",
  "key10": "3yAFin6QkX4p568FGvCQuQKq1VtnJ3zkUTPrfcKcAK1Hn8NKKLiGFtazB1BnwSzx7bHoZ8qzeQqyiQ3Fg5DUo5QW",
  "key11": "2vnBZB1yEL6Wdva27dYyocqQavnNrxcUqJC5ZboobGpY6uQpmWcKVi9iHgyKaPe3XVbx7YqzK6Kvv5fHGNnWDKGJ",
  "key12": "3QPEPg4d88w6rAYXYfKTGujrr3PXrYtEPmqjKeqHu24pHceEq2MF8YvNZ2EsGNJBSZRMpWnPrwqUybAjJduyEkPS",
  "key13": "NZnotk9QVqUPBBP4MWAPm8zRCNGdwhpY71xAyvTh9zsiLxps2X6r17ZnhS9kxQhpkThrKGvPsuJL2VbGWgpafr2",
  "key14": "2CENckZYexvTYQYaETSuQPxguCKopL6QUUv4aehun4xcf3qraeazaCxj1UraWAmAMsXCnwejCXLQdRZHDDurWPXi",
  "key15": "4tYuLJjKNHwW2gBTs7BwQCLGjDciRnCaBxhL1ErneKm91CcqXUYWSADTYrwbAmUy3Vd3vzGEy56ZYZChkjrgzYSA",
  "key16": "41gS9w5NJs2iCQbwFmu95HijJS6fG55pcp6EcSwsGZqg9PWTX6QcVph28TXkvMi3pbd6uNkzuAwdaxPY6QSRVBtE",
  "key17": "5hxrnbRiBThbAeL4bvip1VaES1NzzdXTri1fGAeUok3u34bk7SUwwKUBfZFEeYUPkdEgD3pQdCC7gWGqKAo2Z7UR",
  "key18": "5ZghxrL3EnmraCYEJx1pTj4q9zE5m1yK9XnY9BB4qFjAWTuzC784G71HDVFYvPgSdunhdAUSs6xFhagyFwuncr5n",
  "key19": "2oPunt2q8z74MDRGSzaKGpKS81YGbFALjeAodFLWcAGCMSZkniwYedF4EpmgWv6btMDmSDgZbv4D1bV9U1mzviUN",
  "key20": "2BRbz6ALYJL3yMfuEj66HkGeEpzy6DCYRWfzJ3gL6734W45KHkFA2na6jrsyY53PUKewbLynhkXsX8zZpQHhNAtj",
  "key21": "2VMikAPEGJcaNvtkd48XZq5tGwcWNAxBkFqSvgDicu5qVwzvqwgriuweKr9X1KHqwbFRcbVM7CJWqBvMyVoLg3D",
  "key22": "3x4u1shQ79yVPxcAxsRQH2AAH5hurizYwSWeEB9v4CZ7Pyk41jkLVLhDATy7hjpUyN16ZqJMt9GdTfik2aupPrHr",
  "key23": "o4HPLjBM95cmdfoifxL8Wb3NpM8vtfT2QYuNzyLgZm8nVwGWHUKTBcEp27jFp4mp9UanjgsJRagW3QNMzqWb8Aw",
  "key24": "9NrY4SH75dWAzXDtK8MKjJDfa9UbWNVCLk6f6BryL6p7LpfqHYbdGVNCENKUpc8pLohbFJmvrA4navmV9ZzzP9i",
  "key25": "2GAi2stYQkpRU6viCAZhCeUA91EQY4cukfrw2pLi2XpqpWqSuf1FzCPfDL4Ge8miJ5ji6BRaJ1xKNDXQ2YbBCvDD",
  "key26": "MMzFjv9wskheuVHJpF6RyAEMrXJeqnBgw97uvh9nCbr1eXKMtM8CmQktgBsWXZhDUvWqGXwjvTaF8s6rcB8Ubc7",
  "key27": "63RGH12QhN5nBcN2Y5zUMYLv4B6TzAevRGry77LL7TGnkt524gYkQY71E1p1LmxNv42Z9CK9YvvnK91k8vGx1FKW",
  "key28": "4AEDKSTo1tAPQGzFZ9XVqa8BbRt43EVV6EDDDuFUnkkPyFZ71TTgRfpgqGQUJvP7LnycQzb4qzVQgC8QVrS5Sdhz",
  "key29": "wtnx4AEUviow7vyy92UVvDdvn7GbyQzgk6Dn4poEf9xQKZ1DHRmGis7W3pJWSL51QEpeRjJgMNXyP9uzimMk6dy",
  "key30": "3ZeXT7M25scKLYpH6KpqZ15WRDcfcJduuSYLQZnnJQEbYzFjkB9UV2bqxrhf239NFkmofKGaAj4heH7fKFnsGUja",
  "key31": "22UuCcPSHkTozeJJDHRiva8DeassTM8qiAw7eqC5Aw59vmcw3o7JABWiTkdrRHoaX45STziJTfu6swZheXS6tBuB",
  "key32": "WRUTvZ1jWyVotYhHkRzpgX7zTPyUCTw3usfsr2YFSxv5Qx1W7ZKKWcfmbTBmbHRboZy8PFJdwDJ7QNCVawNjyVQ",
  "key33": "A7pTpHhdDhPi2zjkRuw65CwQGSkU3k2hz4vkptNmpTaNPEFrj6EduvaP1mSFgzjivr3qtoeRkJF4YANXQeZtHjc",
  "key34": "5oZ84QmhVghTNQBBVhET6v221gdaC11o8LdzfJk2Zy1Cg9LaK5M4oNnrBH54XVBQCmA85zX3vxNrxon2AwUdpp8F",
  "key35": "ouiptGmegR4wjJi2PEcssGRD3vYFYU7nkGp8QaTyBXXHVwUQrXrRBXJyM7a8w8kCLWpLfYm8kVF8DDxnHFAV22J",
  "key36": "3PfBin6Jmkxtx7mXwsjwdciAbHsgw84uHZPuHYyz2K9BGcs7zpmjZNFRW9hJuEm9yatxmEtiFuUubVnMumsGe98o",
  "key37": "616uq36JYdqNrkAaqVhvjS4Nd3J7GjC2cLP4E3Jd5yzKpBAQ4WW2NwXLcmf1jGmKnPvnLDC9oLqU5kgoYQUs2zQ",
  "key38": "2sxHugLpbo2ybr9CWREiQr4QbCJ81GWcePphRAAswZbkswowkcrATmLovzXbUQHBDAnKrAgZy3PqSvd8dVqhCoMz",
  "key39": "3WHFhJeHnGWPFc6XPSjVAKEo7nwJuUC1QgXVz6uxtkj48ae3WYEz9mrMpQHYZ6xVQt3kXECFpTuqZMsiw7FGDt5d",
  "key40": "2J3hRo6zvt6VE17obRSf22AwkKfsPWU6PzEPGqttpw1LmLki7QVasMUTbHaNhgnuRhaf2ZDjks71gUhZMq33j87p"
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
