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
    "2LsU9eL6EfVX4PVdqqnKs5iYda6PE1ErNUwFrUVw1QB9DVmYqXBvRnU7RAKFsB7bHKkrrFCnhyNC1YD1sTy3BhAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6tpwmdoXzgxABEDVwFaP3i4UDV3TwzR59iZAoTaRktv3AJsbtfxUqN1ndGK2CWvMkEPvrB9ChKK9or1Y5UFNuN",
  "key1": "3cAmRcNv4ToiQP3aMBaQppmKpxMpGqPjgfYNbVnkfJqWqdF46CjgeuGH6eB7CDsHnZNno5i5n97ngAgpz6gk6LdW",
  "key2": "3v2UdkimdhxU2KY4GGssr88WhM5SHprnMCBRifZnehW75mZ3h2hkSDTMw8CAtRUS3jjy5CW2CGSx7AZ5T8ZpagQY",
  "key3": "3x5vNQxe4JP9jqqpAu6THvXiaK4Jy8WtXV1uAyN7EnUd8Ybkf11knt2EWFbkoYZFcsP5jxMHVuTpG7usvaXSpSH5",
  "key4": "3wHX5sgWgu1DxQb19yG9a2cGws5iTZbH9BpNpJWdvZSd9T43QWvkJGcFCcdxMpbeNsFeeX8vntZxAAjRaySKMd2Q",
  "key5": "4EA8Mq9r72noMRxYE9WVrFqVbDSY14NtUNjXMkPs4AkpZToqUenng3BMCxCsQXWQd5cQ5qdYYydKhUu43qW2FwwW",
  "key6": "4YMNG8Kvg9GisyGucfj2GUu7T23S28N2iuvfRvkqTnyW8WPzdZeehozVgUuGwrrgd7Kz5Tm1LAoV2CPF2ygG857P",
  "key7": "4aLhM9J1xsyvRJbSKcSpcmR2yNBBB294bF8cEb4wkD7vwtcHFcu7P9JR5TBaB4QsVT6QY95Lwje2VW4D9nxPfatG",
  "key8": "2idxB8GjtWPgm7bZWoXEcX3svNsimAZR8rZ4K6n6qSe319ZDFDhEH4tYuuKn8uBCYGm4oRfXeJvzWtRqyoADGN7H",
  "key9": "3FEAusbxQbfpwaGkSx1QUQcwMyoTEzYvEu5vN2EBXFRc3dU8AHytNyLpDv9vywX1Tgkw6apJvcgsuVc4rKxAZi5d",
  "key10": "3PyejAnrw7ixR1Hp4NPdEVFvsxFhmwB1UjfWWKfTN3z7Mbe1XqJXdR9FbzgpMB9ECLy9Kao32gWaQPJct8GVXVm2",
  "key11": "52aBxRKQRwVTx1PtJFRqGk1hTUyoygmCwR5mDTHjqJ7mWThnJFYsJ7Cwv1qNeMeYoUceJh7H2J4Kd3cRqPxgrG7n",
  "key12": "5dKFUkEEtyMwZbFEmSQVvtTxe8hDipnjP38pMsBA1BFX3oiSRBZyv2a4myq3br7YiHnP4raxECDawRD45twbv83n",
  "key13": "4JUHAUKLZZW2p8C8c6hx3oVf3vyamtc45reNfD5Ynd61yFmmLtV69n6NjawSpvnuPeqX8njq7T1r26jJs25ZTyZk",
  "key14": "5xC9HP4b9PTqARVMEbHsMZrHpQtT8j4DCGjwcknUKCfCrR5UvzhqVfMm3epfEff8xjf7BPaRepFi1hSvAigQikyZ",
  "key15": "5EafDzCLTbHhMGY1J9cVNuEGMfvUsc46yYG4YdXUZXV9MMvKjozoWfrcc7snJdWjYPL4acCdw2kDf5tZxeGuv8EW",
  "key16": "3D6JY3LaSnGT3op6LCwWqX5HgrAuHqv1vGRCcUgMMkXxS6Lpb1pykGSL7HmRqJF6GLRhPBEYyqhv3P4ijymLmcH",
  "key17": "5Ysk2emQf452j2pDHFQQEPbkGSSoEmdxqCMV17tkDmuLXvQiwnCzM3KXQ2VBZVwBLdrTbDSScyJ3FwBGTW7SYFDf",
  "key18": "59EFYD2PMFnR1xaUgGWiqbva2CV4ZxC5ksTV1VPkF3KMPWUW1dFB9DdAdWeCkYFjVEJeVpBtA9MSGdCrZTeznQgo",
  "key19": "5TQWXFfVkLBn7RgVMYT9bNbnYEujhuzUZE6oDPsVKMVLnuVhnkMuTUqUpPnbw5t2EzPqz6TEypdteq6UbXGDJNBV",
  "key20": "5kTVpLh9Ze8W8q9CYwvZVu5yjhAvKj59yv7RFRG9G1CscttF6To6m9eMLoRBwbZds4A2u46GaP5j3Afhwnwm67QU",
  "key21": "yARfrCXbj2d7YQiTEhqoxxMqefnAfUZiSoqVHtFY1ZZJfWFddL9mbvJEV1Y4bWXeqaoyozwYKHFDiAw4ZSVTnaw",
  "key22": "43Ak9KKTVGH6uujKmuFSwHauaZe2ywfdcFHJ9jLQq47jWYtJPZmWVPh54yNfUtJ7F2UVAdQk5Km82XjtEPxDrhQ2",
  "key23": "56uL4wkD7CTzKVkcfYHLj8jijNCRZSD9KK1tEMJUXHYQKvh46UX8F1oA9HfifBE5P4oEP7cdT1z3aCvafGheTBae",
  "key24": "65AEA1BdMaoaH3PxpVJ464gvzGhkVLGHjt2psnHGA1V3as13SL2wK5P1uqRectaLHtWJMoJEq3F5ge2T1tmApeMJ",
  "key25": "2pzacu6CsJkQvqPEY5DdFaQrr34vYWQ2v4rBpAaD2GpLjc1vWZrDoN1CWa9j6Vw29Bty6to3oAowXEyUJN76ALkC",
  "key26": "5FxM1N4djQqk99ZLXEVb5W4Sf7scqMziX1tJmNAHRuja8bhcExtkTYBXGgc4xf9tCjLrd2RqSPhCkowaybp2TXnU",
  "key27": "44ogqy1JdFV1qs6pgcqA8KxvbM8ekrVstPRqk8TQncM11vEaAhgrqPnjbn5KRtJrQkiadTfhTHPxzLpnbawbybmN",
  "key28": "3zznGNvyChvfLXK19AAZUHrbaefVT8phcusVQYJ9aaGYpQeAyC1XG5dnFFsHF9BFXoWPeHmR6TQ3394LaPPkZmvs",
  "key29": "45z2TkZieNmy1avg2Xq6vMNq3BsP7JJqVxDF4VBJGA1wV1aSgKBLCpQfeVMnCrKn7xBSE3P1FhrxXB4PKP4whnDK",
  "key30": "3yfjMrKBvnw5d8ZXVqj4czHdqaMmCwadj2CCLN277FGonBvw1FKQ6ZnQnDEdkVXCxNsLn9tT3P97S62S7DMrY8XC",
  "key31": "v24Y6AW63iJJaidt5FPP1GxpusWjPPt8YXmFJqcEgWnGJTfoL5kbiZka83FephzB8TFmR1w18WVxamYRnsHzZw4",
  "key32": "5qeutUGKS7PU4k3n6hWwmNKEtCUTepgbsjvwh5CS6dtNuwpn6D5iuc4ztReGndWtGQD4Vtj5PJeEKZwBqXEhwmpH",
  "key33": "nTwnztboAdC4XKuFyPfh32nqWZ52qcFiwafdJi4CosfYK23TbnU13ebVBdCLHvGdGzLU2wEcBkPp1e4Gz2zz8cQ",
  "key34": "5Jf17UJDEwEWsUqShJpWv1Qi3bxtGuduqDN67bEs519X8RdQVZDA9N7uuo9SkQEtMFHiGfAnWG6WMHyKLCcBP5YQ",
  "key35": "2UGzuPNQxjMX4anFaSEFnHif1c6gzu5aUm9MvUUeLWEjX2K97t9zmHAzCb7oQ5fJC7bJ3AZTJxDFqdKt17TxP84m",
  "key36": "4xUCx2pwkD1jKWkT3nnw8fHphC1d6LYPHC3FXuMDZLhsWELP8wf2cG6oEiT5qoszB7KTE6UPMX553KWxv5fTmFUx",
  "key37": "uhJ4hxp5fZ2iDq1bjrxNksSHsrzLdubaeGWP2JTsC2mvXP5qdFh3Ydvu4zM42MkG7toTjru2qM8krDH9rVLYVWN",
  "key38": "ZeYLSaJCdqrwAJWG49xQPXMxbmnzFkfQMWtE2wHuCHv1fuVE7MWL9FcFEkqayjMEhmMmShMDq5JrZJy3MxJzBN5",
  "key39": "3aQZMarWmGWVg2ExU9pAMmitG4ebpcYc75RgX5fwBgWW264MJtmCpaC1BMCRYK55wmPqiihLL71EqjprE6p6gUQS",
  "key40": "BhfDo1b64f2ZRV8b1T4DCcXPxe6hGLmrkUX3PmeD5WZ3AVLgs2i9CGhcvphGu2vXC6nVKF8EbX8PKq9eqQJXVJw",
  "key41": "4eaFQSqxh6b2t61ZECsX76s9MXnFxhNcNxS5q3oZCJd5VMqtKLvjBmtECgRdCrGQpFmXDER8mVCvk8EFgcBj4Fgv",
  "key42": "nhAMYH7xueA59W3QuDMb8mbgZnLNqggpYcDWy5ZJ6kN3rFVwHEi2MQUk4LVgXowLxQ5DG8e7mwmyvFzyXWtkKyW",
  "key43": "2KsVPxXKY56nyd6pXcpnYJfrPKHw12F7db719U3yskA5MgHNaZUGE9AoUnJy1LGX3sPFpBjasXjpGRqkK5iBhkF5",
  "key44": "2BW2zq2dVuLviSQoEATyT9n1g5wy4DpTmiE45AkbEZZ9w7BpZTm82pvA44BHipEC1bLbJqYjFqe4CCbcHEasX3Qm",
  "key45": "213cfTR514TWMhGs9s9FTnDcRc2ZM8a9PJu9GA6ZH2yVzcrgyFGDQ3RKVD3KZ6RDLdD5yLQJa2KLwKFLgT2Ly3aQ",
  "key46": "377bReobrsCjbxXcMibEYmce7nUuBxiR4kkS88cDhq4jiNLPYXk82CQvXaEcuutCwahpauEPs8fnLyhnaSrk1CmE",
  "key47": "2x6MJeN7v6feLYkWoNjba7Nmk1SjGFzxQ1fNfY8XtQCQWupysTCzV9mBA9Hyi83ZjknKb9uKZ1cRoaWjMvt4xXxc",
  "key48": "4GCJP3mZ1S4BXUqHuAAsYzEUzaCa1cjiSshx5r1XEMqoYXRkmy92mFUPBxPffzniZcGqcx9d6ad5xWBEeDWM2r1V"
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
