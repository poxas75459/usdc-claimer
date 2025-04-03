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
    "581zn3fX5gxEngP3QEKWzWPfRs9Wtp4a1HK1UxNoDs7u7z7UQriTQCKwakqKasgSnEFAK4DFjz3FihraoaVoykQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36imq2fLNBYvSFMyY4uCkybhNu2vZtQcBxr39kG9nYCdfqe9UAXtQjFMkwtEPDdWR8HbtxqXb7dARKi8HP5ZzKmY",
  "key1": "2p4GRx6kkGB8DEG7nu1tLjR4WnQBa5gwdqCLmxtVGZekdeVYJFFrSVq5bEv8R17ARAZJ8BQunze8VxCGjQjrBnv9",
  "key2": "2hkcorjfuEXkTpVVzRvJpnNJncMEwMNh5WvHC4XjRLq6cwJtnEVVMDmi1HQvSF22qT7cVLbdYshL5wxHZG9yKgJt",
  "key3": "7r8hJL2zPPT8CgHosczLB2tvYNDRvv2wuWMee7uuTvr2r3bCv1JwzVz2QKXDeccX2yeZbVFb9XxqgNeYs7PJbQb",
  "key4": "5fv7fn86NKD3dn5tQDAWSzVmonjHqgcqMKdHRtarsMqPASAN6LaaDsYq18bmPBN83uaZ9YsTYKhwofkEwUkvLgLV",
  "key5": "318DvdX9maQ8eXpWCLdpGrgS2YZuN26z5aBNg6BFjffkUrffPqXhfv7srqT61xM64vBmvBQPDow2sYtPfSDRfe47",
  "key6": "3ZZxY1WSkQmuvG8HR8NxG2hVbTnAwfFbehV9aLhHXMW8qNDM31x35nhPxCA6AduQeBXGBq9NgKeyh3nPb8vFx7sN",
  "key7": "2zJKtU4KW3zRJ1Dw6XXN11YzqzLHumf1UokmG11DyWK9HryySZehVhP4brMz8jPXtYjwZvVsi5aPKxJAYnNUtA1j",
  "key8": "62f452djhq8ALJk1Bz6T8cZjmLvhxk332S8Xn23qLYjxW2EANWZEsyDF58frrCwydBPqrCdktZMKL1eWMY6J9eWw",
  "key9": "4i6NeKcTck7W5ck9PwDYqL8cN4VfZnpKHyDejCJ6x1jKQZwbAaiZvntW2xyft7Adf1pWsyoVbT8mpeJD1hy9r2i1",
  "key10": "3HfqmuADWeupfKMaKHYGiE2xrLvPBuW5yaWV4aqHdY9VpBhXuvEPh39VcJyJyUx3pBwGdp2HVhjizmfj4kkG3bxP",
  "key11": "5ejXpeyLTLdnMgot3gdwymyfMFpXzRpAhx4yyVcTpoaMqYxbpDXWpQ9ESasiLRq8S4aimbo1DJdgsjUW6PtwDX5s",
  "key12": "s5J9MkwvxiGb1KkZ2ytZsaiebFt8Zig5NnfKmjtfFoKn5478g6v5PRWjASujLEEkF2Y7HaHy2JzmB1yi6ju49Sr",
  "key13": "4Jz2DpCwVXoqcGoSZqXwihnXmiti2dM9JWWgtXXUHFZfPxZ3t3o7nnaNic3aTtY9hMMwshn1zbeLjYbo927jquwH",
  "key14": "tCBwpDgEa4WGpXh9FJUHoT1zMH85u19bycTvDGyffMBf7mfgPvgtxuwfxcuxmx3Q5b1Ljbe4nPhntc3uh8oeBPw",
  "key15": "274PWdUxVu5qzbG5G7vZMdGqjzjnMYpdUgFNRAqv7fno6yCUU1MBAKGe2j8FABti9VcJNMivtFhNWdmQUE5vAT7Y",
  "key16": "2HXXWapJn1kbc72VywBFyj5zaprcadFd8d5ZDdcT5SPLv98QErEjP2wBnsW85DAhxsdXuvSaZNCiz2JkJTf5UYwB",
  "key17": "2FZAJjSq79CLjnFJn7QFbZQggpAVE1YNCbwdGzzV13Nwzeot4HFaT2oHNQ62fwqXLiJoT9XsFJQTE5k9AqBHwXxj",
  "key18": "3nTMhtvA7CicadfpbL3Tsy6znM7gR5hFpyiMgdxdR565dzSSa6iva582VsHe8xNDDvs327HJme5LdbpcocQrRoJp",
  "key19": "2SSLf1K5wQ4aRoJuQzec2UAyUwj943jn1jepYu25Yw64p3cqi7Y7GN6DZXQRttEczaCwg6wD3VEZTjBSjmCXoy8C",
  "key20": "25rRdpcJp6jVHZgMCRkzhF9RCDy5suhaBTPB22w19EYyNSe8eJgFGKZbRdag67qDTDnTuvZ6jFBXVtuybkD4MJ71",
  "key21": "5cDrtSBSKnP7wnN3K7xraEe6GHy97pfGKb11Qn4i69iEtrywpSECUhrNq3Qy2b6NSyBLRyTi1BrW4ySsK35HXYvW",
  "key22": "5gS3E7Utt43Biy72qZgKbUA2EHo9RWUCZECmp3fw1kGkBAd5cTkmCi38Q5CcQU5jum4ReLeLkAKtWhMLJFmkwZEd",
  "key23": "5yzpwooEewfE7GWNmhgbajxDzFh2sP8HAZHbxNmhicafCvDqEqUpbiDWgPcW7C3Wm9ZYAdpDMJZevkgtyFWGcSvj",
  "key24": "4eJnr5tB7BU2j73fspNaD26tenDPNLajJTTRz9LFNPpJ6H2LCvnyy52CXCrU82skUxrHEinUsTsm9nCyTYtB7gu7",
  "key25": "4x2DrXVCqUJ8SttJJNygAJzFNuogrytiYqi6oEETSV6CntSmYKauL8Qqs8BSjp6tSw6QVGt3zG6VujkonuG98j6D",
  "key26": "FE6c5GXCPHn2vesxoe1D6fmKsd3G3m2adVepT1YB1neL8JbQfwCvCUjVxJTtYjb1FRkMDAjc1qYwgW2hH41xpEi",
  "key27": "3XL1bjDgWYdxk39Ndjgh1YPXtxrnwHMD2shQtxHM3bcnXYyxgUsxKvZBp8uhxyFvXaSniGPbqz3er8QSXFnbAmMn",
  "key28": "34KihKaPdF3fncjW31HW4hqiFPWygGTzLj2VQTZQhArXNQtiJaeyZAWQwLmbzSCG9NXBsdriDRo66e19bexQJn9D",
  "key29": "5dDF1eeHS6PwxBvAUDit4JS1qDnF6t3orvfUpfHa1aoRtXKf9a7hbAnHcQqp16ELE2yP8DEPtrZZjChn1gcJWhX7",
  "key30": "5i9dCpLAmQAegJUowfnLEDzBco4WNi4VeyQq39YtU3DWA8JEBmi2ukwvP2L3Fje7K7XdPUraYNJWWT9FkGqGY3eh",
  "key31": "5nDt7Y4fRd2DdJsUc64C6JWDxtJ2A24UuFY9BRbGed16GFXtWNqyqDhe25KSZzYZLbL54b83iLVFqhupc7igjVhE",
  "key32": "5Ra99FLPgphAs1qKNxFrVPhmdesPRgu2QRnXjV9xvSTLYr7xG4JW1c4unGVw86B7Wou6hoZos9G85iGaEnRY5kff",
  "key33": "5ca8r45ZTwJWd2mKxyFUTistegGEuqN5SEixT9VRt9rLJQx3U7jRMTjmKSJCoEu9iebm2SfKcfrR2y8XpppAdwnf",
  "key34": "4yKXjbEGPYiF7ZgBC1WVAUxxSjv84RCPo6ZdZ2PDieCb4wTaqEZf59UxUoZJgpWcLR97rh2VB5NUQrWeqRmVBtxQ",
  "key35": "4sG8kctogPvHKaHWTYqkewriPtqmu4acodhkksCPe6i1d52KvxewB6NnEYuGT94hQErBthfFwCbMzkHRc4dZgPY",
  "key36": "rGRWNAeYVu4465MaenBgmdrfx9QgzSFeH7dnK6dizKB71iY75ySiusrHC6ATF1zufdxgJnmxc823Zg2qimkQnQp",
  "key37": "5mv5W1zjGLr9JPrH7FPjg8ryv19mABeAym34H9w6zzh1mvcAcFgyePDopv7zSdvt8FU7FuzteiBhXWWPKq3rYUBR",
  "key38": "33xzejUoiFtpRaF8Gi8WuSi4NpsSHXTEigSRpToVBKecm8z9Cer1runWQb3EPFyA2e6N9Zg1oxCs2Ww394GhbxLi",
  "key39": "wwXFbxEM2ttCeRdiqmrzX8TcbdjHJsSMjyAaRN2J9EpCH8u1mSeUUprU7ReBuz3JmLmSDoNqawVdNm1fcxznpyY",
  "key40": "5nXvdreCbNi2BcxCqxo9d9apHZ2j7TtMbHahGFMmcqonHoBtq2HgeGEhBj9sAYKSsdCvBgkJHrHzKSFuG2UUg8rW"
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
