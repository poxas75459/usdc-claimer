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
    "51AnSEFnBVEYnSkmDMo6vxnBYBJuVeTyQzsvBZvwHQv8VZFCgNtJcX5ijkxZP4umT3iPkqSidGQy7VdVGR6h6BQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3coYEc9ydBK7ygD3BYb7u7AaeGFpzcK9AAVri1o71Wxppom5vb9uFYeEtQJsigFU4dfGd5Z849FezPgq2PEJTygd",
  "key1": "4TSYgLJoinLfHUDoAYJMUSML8MXGx5ExKs1aPg97nHZFZYhJvqM6fvGvwKaoDsi5K1NUvB5y1BC1bBDU8Z2wU71L",
  "key2": "4Jbk91zCknkShrdShU1tfA5ei1oVXGDVdn5bTrVJQ8ubXYkaknTpFiBR2nSSMFT6gAYiqTTBi4W15UAJJV4Fvon5",
  "key3": "4bA5th9uwbnpbKBZy9roct3R4YP7PUJ8gLbs9p5V1mAtQWe22gb6FQYe2xM8WfrCwvhxGDESR7Rb1pYVKu97soEE",
  "key4": "3fcNcUN9Yd2JFAqqbonBJMMnNjgFs9Mm6XRc4Y1pzTTcV2kUCdVkuMTLPaPZBdZw8KB6gwYsSX32Z1UU2mGj4H9q",
  "key5": "66YEN5vqTpkYHemrJkXRE1KSNsQrNkByWrpkBHaSbRkS15KDJp45jjfQsGPXe8TXtCZvvk4DLPZMQqMJ2FSNJynC",
  "key6": "4XKHvcEszNnjoWApnZJFbDMnvxxrzmzNGRdTruC78Hx1Vpuw9VwboTUQpHnHoZhapcGVWHR7nJ6pD7Xpgdm4VQBs",
  "key7": "5tNsFnso5mtNsBfJqFSpFPY9gioCuiUWpQrKRqnQPPJ9LNgCrnaXvbFCpmbcWpNoF3mnrfdrxFkk5H5VYzVGCgWp",
  "key8": "24XBjFx7x6pV6YdrQ6pMQDN9hDcQXPXmWVmiFDTQH1rp4QxVbgK4bwZd7JyukWF5Yo8Pm3Y8KwVuPdR5FCBWqLVx",
  "key9": "2F61rKexAREx9NXoCfzH9qs8mBWbio8xXBWJXUrGPWCLhYwvkmRwnbKmGtVmcYMyUmbNhQRMZcLzcWvfJ8XZyz3p",
  "key10": "2AhXcVwatZiLU4oicXKRPScgQcPSg1YjqTrUMEjWRQD4A64c93GXPFcUUdHiUAdoSR2JYdwrcktYQQMav4s67hpv",
  "key11": "3rYwK8NcUKePTHqz34guSYUCwdEGvDbFYLasZQVRs8qtSvGQhzUTxb12mRZ2FVkuXaQ38h5YjYo4HcERj92WmWut",
  "key12": "3XZCRcnws8Hw8py7zBMzrFTcpF1jeESvbR3kuL1fXKs4i7zQpVm2Xm3tVssmCrgu7pNuff32CAmP4D97anMEZver",
  "key13": "2avHBsMNf3EKkg9KWCrG8ocwazBoWft9v3M23E9JZVgPfk41npn2BFPnVPnnzEqrUVScRgDdLfkmFrFVwLNCWT3u",
  "key14": "3mgB9JSzGHuSWknsRUki3KZGYt8Czi9Hk7UPxYRhUkUHDaEDxJrcP8Kg2K7ApgwmJxurFNvC9dGL9DLn8LjojyPX",
  "key15": "2Y26T4YyoV2zKRuA8E6Lgmnbh7jQzDGJCZvQnyrQ1jPauVPRRKd6t2Q7u4EddCjxeLi9KeVHXn99Lkm6sjQ6VK1R",
  "key16": "3L8Q8NTn8hsb2EwXmxjndQkpEGvhZ9FnPSAqf8R72XPXsHzXgPRP9Vuo44GrTFWS1iL39ReYJ1eyPgsi752g1Hrc",
  "key17": "2g3EcfdUDiSQMEotzRXxgDoc1DBZUg5BjQsDWZ46Kduv6wHu1Qinaydz84MKf8VXZmAS3aAeV2KxLrn58UWgxAY1",
  "key18": "3C5peNqWfyH3bS8B7GkRwQRxDEVGZ7QoD9axZVFZVv48yzQzEDt15hpyKd9QFijk65qKFvbBciKHaLogpCizDho5",
  "key19": "2etPathL66HVVJfT4anDu6KHZbsT4Yj5ZDzsNPPeKbgtmMPFEa9USpg5QJ1nD82XrvLMvGxwARTUHEvs8guSRRkX",
  "key20": "4ScdkJFNKLNLpyDoAenGqmKSWWs3HuucJbZdebaFNYiE7CpDcjdPz8mGpNCBix4kWj5y4SwNt9N3WsXCAfD3Gduk",
  "key21": "4KbNSzZ5hzbvKar1F9wgoRFTDVQM7Yy7uWZ68HDp6coZs4SXpy3ATzEJTHSiRsEC2xG3zFn6xeYjkDyBCkD7xga8",
  "key22": "2f4f3ayjSpF8w1ifKBioWAWcXSSGmavAcABndLmRg2cFZZkYJgE6WppM77mD9649buuYAWLgi9oCdXCFwssMepci",
  "key23": "4wPsvrqNUKpVM7gvA1A5nVYAHmJzh2WCmsrgF9B2zjJLrpd3DpMu9zbUPfj1vWteThWR17H9N5gm6XxDYtwUaUUp",
  "key24": "2qiYXYmikWumBzByDAPXUo5ifGRkVf58TGXRbJz4uVoShvdYruES8J2XuZ11H3Vx8sKTFjscNGMMA6ueckW2nnZE",
  "key25": "3fDiFfgAWr1NeMFpEiuDMuZzxGFoqMH5gX7LDRg9Dr77R8KbAVYRr3hspnkNRTEPmfaNr6rKQD5R4Nkuj9Npd1Xo",
  "key26": "4NQSxRvk3ztijrsvhiMkfukVj9WVu3R8Jg7L7t4dByimS45gvTaezZq6DZUsnS6w5YERaNf1HvEBKSi2Vzae6dUt",
  "key27": "59v4mKWqAQ99QJnP8ooy76RYf3W2waGYsa6tdo81Sk4FnbJuiH2xbZb6TmdtthdnAEVv6rURDYUfqzwRUpuX1wnA",
  "key28": "5K7gbUX8B7kPbLknJUCpqFKCxBFfX26jStZQFdTRABzCPUYmkeBHugyHkmobmodeULeaJ2Gqfuytdbjq2JPmzicb",
  "key29": "4jucwtkxeuhBmgVmVkLhHXRhbEDbbrmyhxxK8kCuCDB1Q31W6Wn1NtDXAGitCphzkuCTiABF14tNM7Azo6LdTuqn",
  "key30": "4xjmmAozvvw9yXxgLmcvGe5PyzWYLgT71jCpSU9UJAcGfW1GUjGB7r24baqoP51n8hWBz6EHUPioQqEQppjDESRm",
  "key31": "5znwK9NSQm8Hehs8cLcPndA3vKXjVR7amViVx9Fmx96NUMjaHN7XCvfVAxTxowTMkb9rCx2r1NtcJVh4sYSRo7iW",
  "key32": "3Ex5oxvnemfKCambwAdPwc9Rw3QC4yPXWyss7XJLtHh2rLB9RSFSEBCTZeYX69sDfLXKcqP8BKLEne4WGk4Bie3E",
  "key33": "53eqEf5ZAkZwXmoRXtiA6ZjNybXUzh7PsLQYXMzZR4vmH83TzLND7fsELX6xrzsTYWe62GJvhU9umGF4tdbXuabn",
  "key34": "57WxassghieJ4yqkRy3ztQrpNoFaGNWeeR3u4GvHpJLs557n8YHRnaL3q1yPFjKhyicPkyxrNnW7tFcfbQ7RpKxX",
  "key35": "48KdCxsjEc8S7q6iWo1THdWBr3dQYzVcaKGmvaEEN1iSrzSFQEmssMMKLhriL9ssm8QV78SCZUay75EzVTVsg5AT",
  "key36": "f8abH4Xm4xYRAhT9Jpd1q2nFuYp64NW7SBo6QEbP8zpKJ6sXfXAdhtSNMtde8qTDy62WoMCcihmGEsV4gERE9Wv",
  "key37": "4sZi4fHXVFqZABcCaGa1hMYusyGnNSxffRZyhkdNY4ff3SoU9vedmPpvakm98pkD44mwUkn5RPLcSeUaj7T1b8ZV",
  "key38": "3XyQQXjdyBVm2PJ6iBnfBbF46FdfhcEPEuu9V7hen5URvKCEWU6Ynhum26iHvUFKLneX2yQTKA5t5jcwUaphNNWM",
  "key39": "435LV3Rvs7n2hC97sKCcm3qnbiKJcNkDNPeysSh3ean52z8dWq5nZjGnkVgeNb1RRVqaM1nUTifxfnTgkFS6LxU4",
  "key40": "5Ynsa9VMLEURnATN3U6RhT2x8tDX2tWvCKv3PYHTyLYnEuG23D1AQDXV26EJxiYWXWnfEqqBYE8KBve5YZ5cKoMh",
  "key41": "2WTbRyvQ5F7CRZqVTSqxsifXcXg9BNLdf58DcR6QmaDUedRudwnqmLccY81cv4ZPtGca2kjyUu82szPF1VpxcJMq",
  "key42": "xcy4rK4M4pm26G9w1nsLjxdqKoRsaqvtnmAr9UWgpR2SEZFf1yaXuJ6bT62GEZmiWwRWuNwUAa5iCByJBne2wwo",
  "key43": "4pmSca2XzrrUL3cZ4AyfosHdpZiVAhrexUbnsVPFj8dkdypUhpg1zQJuqM1QzcVNWwDkoAb14SNf1dZ1CePAhQBq",
  "key44": "3te1c95ahoLQafrrWfJMu9REjbyFn4KzPCSMhtChgrkNaJnJmaN2ej5AxGzy3GpPdwhDYLdVtazC1rdLr5vR5vUR",
  "key45": "2qm7S7bE6CzXKYNdA7VK4b9firLZSwE84rerGAmrn1tG4p4JQeyb2V1zQzP1wxRTRWp4AZqNhN3uPyhD65e1ke1b",
  "key46": "3nybLhzqdTLG29VumfbnTTcRtFFuXrsPPWPTdiees1xfQcVZ7QjrV8pMB1MziNaYhKwkHYMCoVJsyacWGfKVdBiJ",
  "key47": "2s6nfPUNM1M4uWjEFWv6r8kA3za8J8RTXBGn6uBXyYe8My8RWCHp1jWMQHYNCV42YbYK4T2AM5HB8cDnC32tj3TY",
  "key48": "29NGq7rFNmebynKTg7MrHAGtGkhcoefDaLXfd7cyqmCXHyYhbjjPtYNXco7mUttvu1a3U1XQhKwKPbbrpJi5Ge3x"
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
