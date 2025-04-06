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
    "2veDwizhErPx4TDEUGpJ7WRcE4ASNGBJwd6BeKxXxD6i2q7WWrD9Urx1VVBAgmAXFmQXUBGG1Ld3MmP5fwu8U589"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejBydfuQhsGyTjaLZprQUXuXQFnYP4GFDsAS8zo83kSGfTfjnLqLSG6v6UfjfkgzKugyVz5U88MbSA1KHfsUDd9",
  "key1": "516yoadKfcLT8HQH5pfyyu9nrWt6vZpta2LDZj6gsCsKxkaGDvHjybAYjDkTABpHGiN7FTZGYvWoz2n8uQhVcEH6",
  "key2": "4Fymhuy1StjqEcoXFo7KVqCrh6zNKLh8euZvuou8dz5qr9nAdshBYERd2wQsVuDPtNvzr8a72qqb2jMGFZM38v6p",
  "key3": "TNtpa1imD6aBETnnSTWhDaYMboXLdo9wkBsvhP7EFCGXnFwxubn9AsPex2RLPZ5mCdhVob9UDj497R2n3BxziLb",
  "key4": "4m4VDAXW8256U6WPPRcNgmVozDAjgtiFPqLZuNziLyLkwaenwDUAEUAkCYZoH2wySN18WXa7TifivNo5gaBcfGKe",
  "key5": "2a3wjBgRQsHdD7kcj5Z5zkvhhMwo9XhR5umkUiwzvbbiVNRjXJoQQgnjNBhFNqurSAeaBZ7iEgNsztYAxpbvDMRM",
  "key6": "2Bo9ZGMpjD83oJXBCe9f5ScA4Ci2KB8Xena76Qfo3xpvM8b6nwQuR9MiFQTcQa2wrjBgtarBnwoB3NsPgUdeAkk7",
  "key7": "5QA4LByz7n3BvYstmQ7uUqFLFeGTkdzjpaG3orNyfGzgsxTg9pCVhMNAGantoMnU5LPPH6cSd8UcfYqyh4UkSmT5",
  "key8": "5jLDAaFXMMJNpFz6ribWQUevpZ1NjweJipZmYi3bQTFYkViEwTL67fwjyCUhBVeCkXR9VNnCQxf5g5ngxZRQZ3FH",
  "key9": "5QZP3PXfP8m7FRUmJumgS7zgCSv9t2VxTUqpvtjwAaoqUUF6t2eMXwKtWQZMrv8hRzoFnmKVauAoE1sPy7wuV3np",
  "key10": "46v4TMseZdddRaxxoi7UERuaTTgCrBaa6GKFZ6DT9cC5GTM92mtKoE81BivQHeceCBB1TjWZbC9uJgorbQiu77Sj",
  "key11": "5E9nKhhfcuughc5iHZmChnEUohRJy3esiWrGtpuCfJahTpJVYzacNZLdmxy4WM11pA1LMSB1NwNgt7GeQXqgz97q",
  "key12": "58Z6S668SaDkGoH2S72uMPKt4riBZLnyictQSL5e7r3QN9mmL6UaHUXszcPE1tGGpCAnJHWa8s1go5DwYJGDnRvB",
  "key13": "2n6Xes5N3mF3wFom8fywPt5AwTFPTMkvcbfJ1FdASypqFqHMdxGPJ6f6svyq5Sb1gUnWfuYB2HSPrY54PEQgKb5B",
  "key14": "DHNCFaynK5MsFXyxUyeQYZNJq4HTUUmKL48k8iZHna3YPAwwJG8gsPAfVtiAYSuEyvgA73ygxGAnesG1usje2wg",
  "key15": "3fFxMrRQKyb9FEPNF5eoVWf45gTW414sd2sWMQZbJDberx6ixVdrTXPz4AXkFZF7Pku82rZJs9zEUAoJBYv1sXd6",
  "key16": "5CxZ3dQY1DkyW3mC7YQwiA5nz6v4nqXRMRMNnFkRW6fiwe4Lm7v1QBuHYx1WWN2XrXqCm3ZXdaEcfFBAHeu7ML6u",
  "key17": "2i65wkpbCSvUuiJBrvPJf4SX3do2xkY8hqDzAC7tMSow8zHVq75zpRYNAESSwAZTyffKDU6GM354rmzfwQkQHiKt",
  "key18": "DHT5oFAypiHERyDb7W7uFQKEKpMQzZ1z4XjtATmBxFqsaAra1NXytq2BbvF8AnVNLbu6DH8vvNW4K4udAZ2Q4J2",
  "key19": "4TPoMbwd21mAQ6yeim4Sujb8JryzckQ1YzmxMHdUupTQ8FhtpY5e9ykihEJ6QbZnpMkbcahU7bUJrkSzb7C1DsHZ",
  "key20": "38wyM62U6boW4KvPshvbjhkpRTLp9CkoRHMQzFB6rxK32segUvPcS6uVTDiY1gRS6V5Ap7ET5uTDmaYPeW6qurjv",
  "key21": "iKf9DcZduT2yfXeLxJZs4KN7ZQMPCvW1PNvAAnpaXW6cZ2GTW334wVFGVLNAeKc1KPjDnj84AZb2tXKv8mpb7Ed",
  "key22": "5zbJycfWCVWfrZyQ3RksKpuHE7NpmSkDDDVRcFG8km8uya5NNFZ62RRejSXao8pGVKDy6tQqU3z77RTmWKQe4WQB",
  "key23": "RLcAxBQaBGDFUvbqF4w9K8VHJEwdqqSxc3eqwsUy9q9bs71ruRApDcWGDa749wEHBxxq1L3K2S6zYRVAbcePCpZ",
  "key24": "2ddrtm4pcXXfpZ2ggQTm2kJgbPj3DmYhth8ZHHUx3mc9e2iJRPRKr2beQvTpfzDjTtSG7XJyiC3YeCB9mUcM5iA3",
  "key25": "5FKpvbskEr8sJcReG97bBtRDS9SS4mhAcpLz5kLFkjSR9MKAEbng48ZgSMpGYYXbPgfnDCGwD1PXrDmsArKJViFR",
  "key26": "5nATF4ptmCbrEJMp2DSo8qdtSj6yyzkh8nNmwQq5SvGyjnSeFUWTbqoDfJhuyxyiM6uwDbPhHMYcVpSL4ZocbuK2",
  "key27": "5n2FovRYVviafnTL3Wjuzz2PePfcn2gs1nxvfFq9cLqiFbxW1aUyQkk6F4oDnipAbrkfk67J1RPLcUGjyQvqkgUs",
  "key28": "5kBQ53SSoz2mgpjau4LDtjLAbrEL1uK6mLTS8vFwCFuazXoZ2XqdzbksCNZ9DKKEqQzawG7dn8ihFTtFKDM8rvBw",
  "key29": "27AxgzYp2U3YxSJhcDfsYSem5FQgJkhpXzwMLkEhCBjF5MS6uejNDzsFkLVoV7cueex5GFWvBkS5ChZJmf45pmcu",
  "key30": "4kFKmi84RJM3PS4dxPT6SJvBfZfcuy3wPGUAG66uiLybfdRoPRjRzpMsLf3BNRJVdUJ44TUBnNv2Zjfc8Xc1yieY",
  "key31": "3CkrnLiTjXyWyKLET8TLix2f4vdMpVmZTkEAQxjpPayHKXAME3V1jzcwwJRjok5mpsvYLxg896NxCk4M3GiQPMtP",
  "key32": "HBpkCKpXNZErdSCt7Qapeb1HWnPAtuMH4Dhtsq9WLhkV46NciVtUv4gzVu8WhJsCScnCNvZfxdrbD2C7cX8534m",
  "key33": "Rn95bHjeEKEKcNQgRh8t9CdhmoB2fairwK9kFHdxtTxyTXhuZyrYeZgYPSHEWgKYW92CzxTKrnaHF4BKdzBS7yo",
  "key34": "4ZLb8m4FnGPuqwQgQzHofPWBUWMbaeDPSyLujVKu94UyhArCqPxEveN4ZB6X2iAoNei6qJdf62VUeDXoz3gMaeVu",
  "key35": "2sEY4YdTtELyimLvaSaYBvDUegLtCTmdxBSB8PGxJqqRnmHNbuBj3552WDDpBKAuwGwFuY63tFDmrQte5ZTroPKz",
  "key36": "51Q4jK2HoGjeFG9oJLZ869QHMcFQext8ZJQnAQzhAihRriU1mJPWZLknijvFMjbHnR2ZLXWWwTta6TESh461h3KJ",
  "key37": "3zhmVikFJRNv1NXtf9k5XkSG2rzjmyxZUKYdBtEb38fCYPKFzRGZHg9yEXTBGE4evinubyxgjyBGeKNc5s9pCyDs",
  "key38": "26vS5yATooHrJXvTngMyuP1N9Q918UnCo4caoCVgeYQjzXfzSZWfwUEcXhKzDXCX9xbanz79M4K3kr38j6g2iDoK",
  "key39": "5sXEGTJCbnqgM17A7PtDFfJAF2NaFQWnu2pzDcRFwBJQUGWEucWp6xXRPwUgCVm5whvRDB8BfxozETbxqdNrNTRD",
  "key40": "491AwA9EUrc7E2kQuy9hghmtmD7wdV2wknm87qKMhW4WoykK69Tvp2LyA3KNd34CNc1MR7NzZPEurX76ANNrc8nQ"
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
