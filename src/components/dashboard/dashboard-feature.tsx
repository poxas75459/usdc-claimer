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
    "PLHJWfecxefRG73zjp2f9MpWt3PDTzuM4Rcz6viXBequHS7XCb76F9WZYyz5nAFaNvjVg1nwdVMxyra3VKF1wNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPDExSmFazrQNaphsJMkXeUaRc1tCjGkNUrFo8ZcxHAAe3R2dCbFmRDLAvcdrpAjr78QfX9uTJFu7tLvURdXz5F",
  "key1": "5NKm3E5SiTPePGCw2Z4L62YaGeyeE5MP1bVagt1iPULBmaShHxnUXry29amaonhoVUK3ieRymHGbVmFW9Gpdm3o7",
  "key2": "2PocruZSJNPFihnh8coLfYeuj6CzDwXrGcpyLPVq7sjCjNRSpqDSte3xTnmPGNimRswVhphBRUjq3FQbiKtZgVej",
  "key3": "2SxmhbeDmTqJ3vvSC6Yz4Z5nMKcHq8waD9SqW1QywF3H9nub7cP4mgYmNusY24kaEkJdUJ51y34LdJjGvfqxZtMv",
  "key4": "3uYtkDQmi3QP54Ht67pUpJHBXapnacn1DtzFwAuFhcYrwk6iNGaHNUgm8sSxykbYyAYkpeQSSTkazdim1UcPxm61",
  "key5": "3JDEp3dNDY6hhtfTkfco7iYMmnTJoxnbe3MZBskmELo4fQGgUGfPp4Kac4hg6sUeSmNpTZwYRd3NZUFqTCLyuwcg",
  "key6": "xp3BuPHDyz72WxbjCBjQja8HXVhrXsHHLAHKxiAhKds5jdkGjksefE8CCyhkpFtDuGv2Dx8GWe1h1Wj7FLMe1qL",
  "key7": "5BXGARckcyn13LtuLWgTuDkCjYFXJpPCrYxqzHDGHivijhe97qx4d2by8LhbFHjz2uM4bg218eYnKZnpwyfsAzbJ",
  "key8": "3TeLMc32V7pgdtggQeNDHRu8eppPP3WdwcPFFFtP3hjhPkW4v7PHWgPpCmmdwTgztJgWX3SPTcokgyzJyXj2morU",
  "key9": "2uHb2mYERU7AoLPwhNPungrKpHJUXRtD1xxqM89onPXQNXbGaGcEzRFW4pRaZokzRbdZnx9vdjnHnxMoVLzYDCU8",
  "key10": "33GaQvjPX8673dZhbFBhR8R6CMxm7vCHiGPuhGtGW7XQd3HMm1Pi8GAFxi1gVM6iY8br2MR3nCzLQhZT3F23g57x",
  "key11": "4Hk2L4n6brhQgXBfZBRc2WeqpaUSEDzEUd6ipihVJ6c8Ke1vW1n4uReZtj3DjjURUVZgCKQSZrPxEvTqDW1a3K4F",
  "key12": "urJm1pyVoyyHrm8Feiv4gURxAgboY2nLbBzts94287eozhTEnAjsp5MdeYwqSwTgJuzHP1R8wnhCR9CLEtEerg3",
  "key13": "57svycExRdAmPaGgooVFmK9NMs9dFpdaMMGR3kmGrHLF1wSRDLit8c6c4hvczm4kYwvptMN6Za4W8SXCRdvTyjZp",
  "key14": "SmW3U5dse7kkBMMvJG9cgfGmkL256ED9nfUFunZP3ajKMk21tCqxdBjSJpBoMJWpQzKLGtzkHSXUfPskdxB7N3S",
  "key15": "3qHCw6pVEzXuofaLkZwYP2t6NRFR1UPrFKynsBau38cfDEMG99rToaCyKMFjahTr9hqM2Vu1tZ9EQJRdu5NX2LHg",
  "key16": "3HKCnc3SSCMW6n4kJ5E7J3pCcpKWkPhgkj52oKPSxuXiYbmjDEpyh2LTEf7YdPjFVt4bVQ5vXR1BFbZ1MdYJotbU",
  "key17": "3fSdd4g5MRzb6aKHjyPhrbSBoCJe9H1ifhVxFSteck6dd2Zib4tRqctqNbk5UDoc1QvapGZx2NdQDrbyWChnLdA6",
  "key18": "RQRe4NZL59sYPgAkAPZB55y3Uvnw33C3do2EqAt2ornp6qnj1FaomZYmK9H1sGwHWPBPyhR9D8LpYAK4W4KrMGG",
  "key19": "5QjRf1k3R5MAqRFjA5tJ9paiM1LXuuAeXxMTed2utdmjxVR6iDB4J1qezkCJioGWaSPNbMfNp7yBMVzqdaB3ydh1",
  "key20": "4JHw12iaZUKSAuQJtLk7Nx5A1EfDUi4WSE3rs5ZdEKqzHntdWFtaWGeHM1dtZDcnUpRBVoTc1myaxqyDpp9BMpC5",
  "key21": "t9Jp65g334yvguFUaBvNTX98EWw1fzRJqSaMkL9CE5VjNpvSVm3dS7i7YChXuQWWXbWPV57TMHwcAaxhfL2A5Rv",
  "key22": "3QqmhJT42bzuYVwWf6vqCATSzEFDeatqeDTYUJBENH2hgpv1yU7n5VVNB5jZMs9pegpQmjVPCJKhXu5n6GiRBsHK",
  "key23": "3Bh5eY5gVNiYTQGz4j8pr6v2KwF3yZCqL52Y8nkBUkokjtcPXxcQDnUHaLAyweCENtjZVvjdMJQLZNW9GNADR7mq",
  "key24": "3fBu5K5hzmkADLiku46spGo394qneXsAJvxAXNjfXLNSHwVoB5nCmXNs4PdcwXSodE84txei9KvNJUwKkkfANcrU",
  "key25": "4JA1eP8nV1fyQwgvQ8EGkGCfMKcCHWngax12WYLMaERJC9ur9Sx5ap4nHf9N1KNcB1cHXVPazrKWrG8EjkinWgAZ",
  "key26": "5UW6NXiwFnzkCHQPfzXKrEKVGWXFB4euBzJyZU7vibTrjdF9XcAXT77sc5LLomkg4LaVfmD5g98ZiZHoEte4dgG2",
  "key27": "44JszsqZ1j9ws2K3n9CpiXXKMAW8oVDyyrH4xne7yYE3MQtgcz132mKsjKk9djUFjxSKnpnNmTwM9LafVShNFDoX",
  "key28": "5mZ1XZKYQFJW5XMptAXYD4WRdBjTFKMQxwwvA6VxNFbjnzXoGwXLHiBLZmT4zmhFautgrYXwr3X758Td44MhyeiK",
  "key29": "444jVKTvpvXEWHHDcioeG2RD4mmRt1AChg3M33LjywcJVw6tVBYJj1ykYa8WoKrmG3VsngHBHu5vdgHAENnzTTeR",
  "key30": "5Ue1WXjasgUodsmH2HKJQs34PpF6orvD43XcizSFB5X1dR6uebdnYNNqMSR2CHgHn8RM5VBHVMGZkmMCn1K5wpDn"
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
