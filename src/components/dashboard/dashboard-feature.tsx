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
    "75mPzWmrpSY9mMJvpsNsdUB6SpXB1N3YA2BiVugBLPpJU2MBGcsGdDt8nFpXYv18cELEMA5hRt2zvs7UCvzGR2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zn5qBxwKkrxPwKfFGgRQSdNEJPdM7FnjWH3Q9jB2AWtGavfYd39eRDLVwYdWdmBLWDWdUT3sVeuQBLU7X8nyTRB",
  "key1": "4i5yrjzh5LzrR8wHBFpJQe7W2rTxaD5jK2xGTaVKABUuUQV7qY65acXDwoS99YFNpmEdvHUr2HKgcH4PYDNdXyKS",
  "key2": "5gfmfHm31RfNPh7siDmFXVBeaNfbptQJwT7rCAXSHcCKX7Wr4z3gZRAMSAEZHG2NF1fgTougqFLpiNqxZ84AQkH9",
  "key3": "4hrqZqXFDyFSvpeGgEXVYSvB6z9NrCJrF14YkkcYLqRvV5yiSMmj18ksVGV3YddaTWkUtRqtvYB9U9iJmd6ii9sX",
  "key4": "4vwLp6xHfWaPWPzP1DrLAUHhB7xGds6A1xg5FfpWJrSL2ENfzfXPWgDtok6seX2xkPdJxTDmPwEGmUyCM4q4XbnX",
  "key5": "44KEnP3agHGBhnbMo9S4A3pnAUdo53kiaELB5hMv41Wi96zfzLEhAnkeYS5j37hMcnFbAL1M2qvduuAjPmgdY234",
  "key6": "3LEG58Xwb9xws6c3ygpTrM7Ld81wF1A8Qe14FKBACGf6RmxSDoaeo1aw3ojExeubAphr5ZC6WrZQokHngAaHeobA",
  "key7": "2k7Mev8cbqgH6P8Phmwjmb5ysga2L4NMUHcX7BCLNzgpBxUpcNmfiNrpNHr2rYU3fMWbgqa6VVbau5MxjoAHqgQZ",
  "key8": "4GSeS7REKP6qrGFRP6ksjPZqWrM596qKzrYMHEi5nqZ4GgGsYdQbZJHrWLV2QfR7NL6iEPLsHxb144BS8KeM2JbC",
  "key9": "3kLDLMLVx9j9CLuXnPLPkta6zUEEiRSzniVLwF5sqVoiTvDgLyZMfZiUqv3tqUvPrY6v1r2CJ3VBjN1kbM9ngJgA",
  "key10": "2yJR9pAKLZaEYrwZggEKxnrtQRaZZjAtxD3s6ZRESqrrrfDAnhJXtWAz6baPVAmSreJxEa1FYXPpGfqJ8WMYJjef",
  "key11": "5c76LQr7di4WEzdGor73PExoeMwATGutg498Vv5htTqfKSCHqxjwysJ26WFbJo8QNMEnJDkYka76tvHtmWQaH1wk",
  "key12": "5MCRBDEw5quXzXcXXmxHhDj1TRLS1xZHFmkUHGZ4c4rFrzBvfvJrTVcvcCUuEu6PZGct2Uuz1dJuug7NrV9CqDRp",
  "key13": "277wHkPTLcnJN8Hf1VC264xmt5woPayDmEZ4T1vJx8MC8KwyCkNN3GSPREh8YLGevbsc2Tw7osiuQB5rEWM4Ms3A",
  "key14": "3L5Z3paUupKHk6K79pTgZCtqEsgU4SvBRmWNUxP8ngEDpvAVpepWzD426y5rjCiztdtxabWShrUGyUDZBu3qmEcP",
  "key15": "bHXknowPZncMeNZJGQLMrVjvk4GyvjmctbyY2HGMa7592S2NdrLBfya53tK3sqZtaWjnnHCd8iYfhSVy1Kxu4yF",
  "key16": "5S1TKkBgU7c9x51cPizgkLp5XoANB5JvXV19oJYmNMZzokgzrtBED5Wr4fgYeFhgocNtfH4d7LKKAgsRCmBwV5Ya",
  "key17": "418gRyD4xFezEzV8M62GVdCUGFHV8NzbCUmMBGB9444pY2tSqpieAUS7di8BH6W1Xt9cktCt335Py6E7rfxNXCAu",
  "key18": "PnZs6unGLNvkn3t8mWurCGUCf5D2ASitkHDhhVD54SGQd6Qg1eQ37n18z1KBMBkKPSvsGi2nN1veWUqpg1EVgo3",
  "key19": "3ZXqpe4yJhyiFdbVDcckcNgchdVPiTMitnjRss9KBNW39AvpqevsyHPG2pz1Gorx9U5BPNsV7BRNTEGmj8BJNLiy",
  "key20": "3c26auakE2abP2mHSguPAW92PwNB2defhq5CM3h2PRMGdcxrxYvcYzA7f7GSKyWxzt8jH63L1onBoutXwKHQVoi5",
  "key21": "hqjFy6R5ciXHS3e4jnURYxaerddB4QzbvEoCWWnwwUj3zzwTDCnQgWncvm8fRK8wmm12VUhQ37BSu9dTKTkyFVv",
  "key22": "PXLRgsgkHW2LkSsU79QBiDkr2egBrbFPKXeP7D3arQsRjCif8wd6xzGeqs1D1fNtQmAVLLAYuqMFXgshBkYqtfU",
  "key23": "5mFUTgzhKVyrgc7HfKP1mwo8WbygpVcnqyWsFYVw4qzbRMRLVuXTEDKF511eYiBBoBhcmpzY925Pfwbttn88whoA",
  "key24": "2BzYjrDPrPQBbpk8m5fsoNEDKNTKfMBmxQYFSRGTDNxiLb8BagCj7vuUq7WhPC9F8PC7GaYFSgYhjM7GcCWX3xmX",
  "key25": "4jxGJYhdNgieV11Hsdq4hNPijoWfdDGGBfYptF91jYK1LZzTCjxBmcogZb5zhr9HFnqhwBfxPo7jG67HDmo7oYiJ",
  "key26": "3iqTMCCdaxAn4utJVfZif1cRmeDSijTNEfm79rrUHnj1amE5VmXudf5U4ciGHgdxUj37zwFU5Hmqc2JuJLAN1CQ7",
  "key27": "4Jt9zFDxTbdC1VoPHjGZKn9A1Ndcob4Yi2sQUr7u4vpngbzuFw58rG1G6Gfcutx2K4L6JjTCA5WMMmoKY7NtUkdf",
  "key28": "4CyfEDBZMp4JmGgousEWLMZYDmy5FPRJmqcYncHGptHkCvJdShng5j2oooXgPE3HLcsF8o7wqKtZzbQEAWKPEzXb",
  "key29": "3oST9jdruXFmVmnz175zTGtVhQukwCXxekdApYkSS2R6Hxr34idugph1ux2TwNh3WeoUXckRkeWVboQrZGenQxEY",
  "key30": "2HHmm85Y3y2Nczb7Zu1XPL7MKbbXzWB9e8cy7W7YhcwzLbtKPqFhYJoiVr2ZfuAJaTmRZomhKNpqbvTeQyt6vYxX",
  "key31": "5PR2txHtaYSAneLsjkLGKx8u9ASFbknJC18mcCQSmacDYSWPfnXLmtwrmBxqV8L7BzBmAuNRiofEGum3VE53iADa",
  "key32": "5cdvuiD5ZnRUhtBcnKJM3oAAmaBMmocE98DhbuwYvJRE5om9jdmw7peE2TsYEh1C5fHv4U3QgFouyRYtcUPp5LjY",
  "key33": "58rmj8MuWq1DLr5AYdSeZSS6LJcd64vtAcZZdwsc1xaYK6rcmARr46SFf1vZrip7UWnUGvicBw3txVqPy9XJpYLo",
  "key34": "4EZw2Hi6sQerrYeNyMhH9M2rBw5PaXGxvm6hbA6DzCBvxmrff8mhQvy97xr5qZdVGLtoysUwAxKYVdGLwEjJUpV3",
  "key35": "64vEpR6aPjxxijPhyVHFL9H95BTjJkm7oFv5w4z8JE1k9hq61Lbsz6S3G7chxn2Jb2NLA86cWxKV5Wb4KeHwreez",
  "key36": "Tm8Uge5xqT2zTS3BZ1veuByCqa7tZtG2R3kYxwEqMiKUrWxq1NoZ1j47v5F8Ec1jDHS8PV8EHB2v5qyXXJ3Lhkm"
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
