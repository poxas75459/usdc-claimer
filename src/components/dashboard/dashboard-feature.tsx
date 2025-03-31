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
    "3HWbo3iAcq4UPfYwyfADyMThTD9TzSt5WpURNSwktS7aXxUveLdwmomDfTW1hy3X6pEZF86msWqznUurkYSoVjCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRe3F71tNq4aS2QiNGwQEXqQTXTDwZQeaW5aEpt9sNKHLSAdTaGAnG9KFiXw7YqNTj7CYKPffLodM7UUU1ZQVpb",
  "key1": "QtZvLgbQDjNzPBV9iDEQ1BtkQWeAeZhp56QPV25ZaGqQ82gn5wTwLde2JGVJY6AFkwK57HnHsczix3zs3LY8PTf",
  "key2": "4KJQgrkhVo4kPsK6P43LEKVUejUAfK1mE9idV4tpqWKP88Uzs4v5RL162NCtt3xkwmDKf9vpizsxhDXteA2XyhRF",
  "key3": "wiphr1s5iLywwEowEVcPwfHHEczkdUsebB3WnreW72hXAPLSrPFX7AhmuBHoo2JE91GX4c5jnmGKSYbqvXCKLDj",
  "key4": "5XdnG6EJ9RHDEscFYSoTANe25pCn9ge3qQeaTmAxz4eFD9TdPguUbUeFdcPtdJFuKeZ2ZfcVVZdCNzgKy3Si4z59",
  "key5": "4WXhfGt7szMMvqDBUFgKa7wC6NZKfec6uuNeGbg8NvhZXkuEiWTqwGNRuPnCBFaZMbSPR8wTphs4ZPwxFBVg2sKz",
  "key6": "2BrCTGKtLbLhfWn3n2B9niWBXbW9TgkcPZHkHwcJvTRZPfvQeyXAesbB2BaCy9VqWEp8KRrGrWVBLLLmAWu1c4cx",
  "key7": "3mSAvxkW87PFg59yhwfgK2yBQk5PUVWcPvmMNtEtdaEkYEacocSsaPvCpwKUKeoyH6rHwo9xPVMYTA4s6rDuwx3o",
  "key8": "65WHSPM2xYxfi6wzi3jgP33mAdpXYXW1qZPYX4zXUr5LzQPqxvNze2Y3PsUps52dufgjmaDVUdKwhVooxqngNFct",
  "key9": "2FPQoefLsKcuVxrpqXg5grBwdqJTS7k69Spr5Sd5nZbUyAbeJsMXvoKNmfUyN49A9W15u1BJ4BHmmXak56C2Ns2x",
  "key10": "5cd1PuFk94RK6Bmm4WCDwHTMebT2NfmQB9Lbmi7vHg5DL6Gt3gPQfCMJTdkxEgNp1SvZQaM2cUH6END9icimrSGj",
  "key11": "6mTcHnNEPTL1vQwTDiBWY9jceFahc8cn3VGXzDy5iN6ZAXiYpdPt3u4qTuLRv2bVSdix1aZi46azdM1NaJfDp2A",
  "key12": "2t6KtDGBmnKAwtYrXrN3aWmAXeUfN4akke6DXq3HB3VPc968paPPR2R9dXby16AHXUuGSRoJF4PqfTQuRTH2LmUX",
  "key13": "4mfbqSA4ScEbAwwSWcXQPZgxmr79VsdsaQ5NjfAgwxddnXFcpkJJgw17EngzJEBrovSuJfhou4op1kkUk4gXuEpk",
  "key14": "4ba6GhiHDNgj1u6Rkd1VFmwRUjJdyPHzCyM6UShg3Fp9WMdDeec2iYt4qwZy7atH1SxAUWdSgWFk9uCe1w29q1qu",
  "key15": "5FNVTekM5UbS3YRDWiruwJqz28zrJf6Xd6F8F3kcMCzxTFn5UTshA33YpQnGUx2EKbjtzJruEYEy34BXWK5QDDsK",
  "key16": "UvqPR3E3KYzD3cSw4gDhcJBbPjo9rkMmuRUEj6DGpf4FvJ1eYXmRL41wwYuG9wQPDPboXJ2xESUWSG1cTZkPrHv",
  "key17": "3Sff6C2UtVY8EdJxYSpyEEXDLg8yVQwdJu6B69noUtVpZwtyRK2Ht4PEH4Q2kvWypKnkdaWEuxJAm7g5LDV4jjCh",
  "key18": "ohJtL14R1wg2Cfiucy5bZeNfU4MC1ZLaDPiK7XnkjFjcnSAvtqNnKXAPzdPFUXvMfwDyh1UWb2yR161dYnoeVB9",
  "key19": "2sXtFbxDkQNhUZ5k3dSwBENyUv9GsoxATS9HvNBJhNoTCDmdMUtJDzNZgeQVKyvyhAq5uPFeF5UQnimBhm1ETVMD",
  "key20": "3MyWoNvNi4EQQkzGkVCkkoYs6FBmJSSyBwHSbaY6B4Bftfh2nkJLSv9GmFpWMpp9oDNNYTLAab8Ygrwy4mA3YBL3",
  "key21": "5hGSaNTtRptNRexSP7iDzVFA7CN1TocydL4Lj68uHkLaNA3EMJM272AqYKf3JdvpGmdZrniwCYsTiC4qFDtXutAe",
  "key22": "4r2FWAWCpk5vwQy8ZCu2opiY6TWMWtZyGCix54uawU2KDDCFxoPCPmtrcofmAntkQaPTDehv7M5aa5cmiwvRhsv6",
  "key23": "5Zz5oCkqiR3FEqco8hEwiAxuA8jnRP2N1Z2Cev6FMjD56LS73tuoQx2VHYkQKYEYVjQMWRXqiwhurzyHWCs2cur5",
  "key24": "3wBnFJMogUVv2qiPduWKNhJrVX4SGpmt6FAaXn3aE3sh1vCpqzN79xPcKBuXpkAdXPjBkLPNBgoWKFjmci4vbZtj",
  "key25": "2jkfNJWtXW7qUKM45VZTenjaFSd1CrAKuZCz5yssVMXfA3ecfzziDExm69FezuSL1QKUXXoXMRpSTBk1jRwPz4QP",
  "key26": "LM43mzE8XajnYYM2BgdKMRF6XNZFLi1Se85uzE9rpx26mKAoZnDqY1X4KbJRn5vg2ZKMYAp7tsG22wBUj5BjUwk",
  "key27": "3kUfjd7VHWuqZcRPSdgCqLHWLuUbU6K6KzN9yHCyS52SVUeNdSybU1EZjKNgUpV5j81MJ3tvnMZ6QWFm9AXPY8zE",
  "key28": "EmYRYkZG5gVHvyh89C2YQpkaDjYRUdmDWkexfxYGDNHg4rvqG28x3YrWasan8wfyjteVPu6MEAzVqa56zrAGAHA",
  "key29": "2Y554Un4hw9nEbcuTPVBUiCdPCdkQDpHeNmLk5zq4xCAekP1U7Ajq46EHPveyrhpLAFbbj2JqCd8st4iRbioMRZJ",
  "key30": "4qtAUVoP8hjJyQnwjb4vyUuvBVLNV7Sf2AeyMzA7ggDeiPiK9jt7zg6qzqEr7V83RSnqxawqFMVfKwsn5F9cUa3V",
  "key31": "46JPoAJuzAcBq2iTPKJikF1rEpqKinV92V5isntgCVwT9uqYCGctEm68qJoJELY7GBRpRcw8jn8wZwKaNZMTAcYk",
  "key32": "mKMSn3NqAxP5TgZeYGvWyHLuFv8gHatUfc1Vw5fyUDti3odsuM46t8tNac115exCp9Qx6PfLsgz5oFnd9wL4CiR",
  "key33": "5h85KBhX6pzp7AgTh19crFctkSoNN25qv8JdZbNvroWUc7oqZJtqPdRHsCvbZxgz9pjm43xqrELvT1UDeH4BfEF9",
  "key34": "341sCFg3x7YQQMifF6maP3AxFhDN44X2D4Vc1A68abbvhcdz85KqAhz88HVsx4xDGqdEV4UZfCBnVDs8UsFeswpg",
  "key35": "62t7tkSjMQbd69NhViTwyEukJt3QxWSKVqAaQCbZKwU3UaPXZzQX5P3vgBZXAZXEJftCPQWqxZ1zet3igKgeYmeG",
  "key36": "4Bcz1oPpC7emoC6DzVgh1S4gxxwCbRqnmbBMMGFsPyH3CKu5ysq5pasmcFe8aG2BaYHUasmxwBvLA7retpQL6QuP",
  "key37": "3wgohoQMEQQRjmXxXvcQanmoNbvNVMUFwzgJxat2qMfE8wY5DAHaqEJgHTSNdgi9SzJsdNBHzJawXwU9qw9XRhSd",
  "key38": "2hYsjdBgxBmJwjjY3zsWW7ShiYSntL6sePSmT7oAXN2oedBCsrkcmP9ciSMn6BG4YjF7mugK3GV1w9WHvRbauTNV"
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
