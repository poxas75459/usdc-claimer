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
    "c7RNGrCvuwvv5spdPFrv8oR9nQa1QzG5M4zh3RdWM5TQkQ2kvMm2WxEa5moemdni5hgLLjo4jzKF92YaoHUtRnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ok3HG9ZCYCEAsVtoCCu4yyb1kPAXz6SfyHDJAtYryDHkhnPkNSPG2b3818EiJKduKm7PHbWrU6UyH67TTXpJxLV",
  "key1": "taYrepCczqDd2b2E23rfVREFWLfwzFkc3hZahseuHoAVMN8dRFs3fvKubVQTDEcVXfWotmywXY5JqX1dwcfCFX7",
  "key2": "dHehjXxeiNFP7ti4ipjUrphFyhXP9ebFbQJS74kTEYKEQUEjZf7ByKSLUSM7okvSi7vMH9rnVsPiZh5MhDJ6k7c",
  "key3": "5qbpQG55K9oQmRPv6zWf6kVAK6j9op362V8Nr5fAHXSv4rTuvyH49NDZK98SknBFvJom9wzCVVS3LfFRSdE5tzHY",
  "key4": "2oiYT8i1hpZUn32H1U43NtVCt8Gehp12qMfQfEce9YdixD9sWa6sb7VPUBLr3xj71dJFVR7pFgg9ZC34uHLhd8gJ",
  "key5": "2eixoAhmWMn7chNKurarmdsR7invCUmEmcGfDRZ6Z9Qo7AYnGPHCrVJtkLzAkv6ni1cTUP2S8ZaQeRCN2vWTBcvM",
  "key6": "4hx7s7SRkcLaWobsyYgaBk41zQeQLLs1BFkX3yvLUdAwnCqTFKF65gRWxBZHpG6nrnhW4RbKXiiPuuTTT6BXPHrc",
  "key7": "4X51jdpxfxbJ3SKRaQgMhb7tpM5hdUFDeRYMMtqqjjXSuaXzUCHEJQ51nwxsckNSVpySMuz1RWDjbfFpFcs6JNnP",
  "key8": "388hceP7ACd6CoHRiPMBEpVGagWcZ4mBJ4EVHAgj1YWZNLrXB8XykoM3Tw7bYdGbQJ1xdu2arhT2R4BnH5EPZRN8",
  "key9": "pWhq3r1coFQCX1ibrmRvi1uDCepPuigoV6C1wZHeywGh8zszNjECHCvVibEaufCQiQdNVr7boToDg8jsqoE761a",
  "key10": "4REjjbc6gikwYia7h41ALPcfexRfo2gXok9mo4dbKRULCh5RFd1qgwkqK1wGWXDZPEx5yrABPbWhnde8WrUrw1oc",
  "key11": "DJ24UvPGgskxpWT2L7UXdMsP9n3vmH8m9HaspUfUrmEBWS7hJubY528RVqvpNj5XWbaY5SgpKM7KYaSkqBq19u7",
  "key12": "3TjKEKE6jsdBvyVck2svQraJWnCZKtvGtFCRgHJWY3smkAumDTKVARgvigQ745JFUqyeMwD7JVjpCZv85xjU3DAX",
  "key13": "2bjYkMRQmK2YnR6zxMdvibfcB8ZEAmnJzmijZxEWGFw3KVUaiDdqd8AW3nZxw56xmGKsg4ppoZ1bf6coBs1XUhoy",
  "key14": "3mCrDi7xvMQ54p7mhdpZBDJK7f4vufAsMzFBZpcRioSjnSZZr1kD3ME6ycght3sw3DqR4uTd4J8mXsqHymxjeM6M",
  "key15": "45HXNHvo1eroKJ8mjrSyGgjMMYyLAZNv9pazkypYysPLAvMzKxqB4VMw3WfrPz2kYQAbFruB3jxqXhEywidNsvZu",
  "key16": "2vZkngeUfiffvMXuRLmkATvb9XFX6Exy6Zgs4VyVM7wqurPz5L5Ungj4s3hYF7mFP8aPeJDNFGZ7nSqc2XL8oNPZ",
  "key17": "5NrFaSFcztrNtYXs6jmeKDwwxrioUB8v3WXaAH8nYP2e1MQC6T3ydqRUNCXhXgojpnyGfNKDTsvVXayis48JV3XE",
  "key18": "4YcCqFaLrTkgtn7ViToU4UahZqPJYwDrFEAUHwKUemJ9QDeT29SvrBUWt7pSfhxhUpPKNnxDJtdcPJw7d9EMty5N",
  "key19": "51TGBKwAdNAiqN4MpXXmqP9cLaxs7G4WrcU3pG2PJ4tcjm9hV5VNDCFRdAgCkBSisHMamWNth3hL2pawJQh4GTuF",
  "key20": "p3BFmAoRtdqwxhoRz6Fnx6VXWJ7zVfzp7R8ocbWedL81tHZZnKjkLkxaj4EZ3eD54PbEWedHXbyzDSJmpca5fNH",
  "key21": "yuXAQ5FHVcAZc957MaPCuC8JWa89RLNXNUAK4qXFNGpVPDr2jjtmhdxLJDhv2YGGkR1KiWJ4fpN5WwfohX5BrUE",
  "key22": "4KwbZUfHuu5WuB1QTqCBDvAbgWXaW9nWqzN5jxcQUvRFinjbufFoVccQLXsFspmP7Dtn9inUwkuCTLDwn9a7hkPr",
  "key23": "4NM9ziAtCsvBEU8b6FJF1vyNQpzYoekhy2rCbkoAbABvayGmh2ijcMnPtxumceEuyzpNySNp4q2juPVLs4kUVqVo",
  "key24": "2WVCnqugqGzeP4goLU3yZpvP49AmqdDv36EPRrjUxo86wRrL5EH6MJQkoFJCrbS6PwJNagb5kTqjoDYRHYw2jp7n",
  "key25": "3jK841uBPKQMWezg2eKa2xoNGQUZDMhgNoSoAGxgGqq5UFEq5jFqt4MMtgRfkh24dAg7Sdhzw961orYJoHcjsrkj",
  "key26": "4CBHy5tJ5s7ajmRthtpKcV832tpSAn1qStWKhm2ogR2LoYpdbXmi2vnkoTVnGYVq6dGsKjSLyG1QrsQmcNcM4UbV",
  "key27": "5CfaSdVQ7CFKjhsfVa4CancRi4bm9RmHtXrDQh3D1NFLyHvFWNfBDHBR9usizyX3nGkFN9BerHmMTjMGRVR3W6pT",
  "key28": "4DM6C9VZZY9BsxibPxU6stJeDdCjEKWrcmod7oYcyJ3WxgAj6FjHkmK7Vd11fm5mQBGzCjTk4neqfy7hbpMSgw3i",
  "key29": "5oT8RPJUbeY77xHbu61aNsyWYy43Ygxftm1dXru1Rp4bMKjWRQyqwJuswappuFvCc5jX2iPwCKTEc17M3M1hcaUj",
  "key30": "39MchmQqM1GHLwjdo1jz9BxVJkqs2EeLF921oPTsgd2TJhX7Tkg7A7aSF165KiRLEv2sbMfiGoiQ6t2VjiRoh2sy",
  "key31": "F6gnYP9m34AMNR3PbH6u7EKqSUdcKFZhV4J13msJ27wmh7K6nfWm3ZJx8cGCtG9vfT6FipjKWiu4rtXSWR2dGSd",
  "key32": "qUB2g43YzwRH623Uuf8gAgksqS1HHSu4LSn9FuerJxAfuXuoxccWaKEQwQLLmdfjYPwhYXZothmpFQRNNUzGrPV",
  "key33": "5TA6th49rFUUsbj4g4QSwrKxqFMHfyqyXoxx2eFrqiT7n7EuLcrwSfZ2cJmqup1bygZnaJTQdgE73yWWah7Gspom",
  "key34": "NT2cEN1abFRVoXWmeTMGrBSn66FfL7EU5tApemneyggaXSi1ut1gcqJhbsASHejgLc35x2zDuhbwp4E97uaAuTv",
  "key35": "5V2h6jNv1UMypSVpdQLKbfZnoHzfFvVoHWPp7JuLLb9b3Yb5jJc1QMiLokK26wGStc6HxAfj8TQa6s6WjLAc6jgX",
  "key36": "4hBhpMCQ74eqPr9ikFZX7wqKzzybepAFQ8k1GF8T5gN5QFrw6Rvb6szJRcyBhLqrd9WyTkbgBdQBwPR7qWufCLDX",
  "key37": "5h6k9g59HpZopPZCyQhmt2QeghFc6SYse5Rx6A9P6AgNyi7cciTNFQCxBjLKJqFqQXLBx8atppnLZm7o6SpoE4Wx",
  "key38": "31pA4446EzsejMd4nH6mai4zB3TQXk8ASYqnqG5iURAqBJCVP3mkd6td8tFN4ivunTYy3rkrnrVamLSzrDCfyEBd",
  "key39": "2Kaw1uYq76yygbZSLhZnRAeDfrb6iLaCFXvdR5CVaMBmp5DUoouNb8U2xDDxn6LHdAtbtyHwxHktYJuJJ6eRdBh2",
  "key40": "46XiQoYdb3JzeUqfpK31P6dD4CzWfrNGjwscACEGfPZYfcfNoBqJAgRBPTR3LkG1gCv5U3kTLhYx9wvRSygY8rGx",
  "key41": "2wxDLiqrEvRaqjc2EAy5wmDJZnyvtdXJmNtDWnrdwpKhLYzqtURhXjosG19NuLM98TVxbcT13XUVHGf9U6bAXrca",
  "key42": "2HN2gDR5JSd89tiQAVotYEAJ6WfMnyjDSkZxo6pQdr7dD1M8b3Lq5HiKxYZrg7ZtxmsmBL1ZU6ARstGYLoF4we66"
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
