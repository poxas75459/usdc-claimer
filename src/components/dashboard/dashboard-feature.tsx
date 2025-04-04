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
    "3Qwm9WsUKMVx1NmpkdGSqVHnTEYmhURk3a4o9siwCEA28gBnocUYrh4wUwtt2E7tNenaKNzYj2zDr8tARDEx2v2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugvrP83RHeJsAHMWTPCPGF1FLsH3mqhHTa8usRJ8A4Jj1HFoaw7rkjSWKgjPtwcGyn1vRT8n27BSjXUanGfBjHC",
  "key1": "5cCAadgkRH64SoXHQ3592HBHxYHns5UBeEg9fDq1umLKnSv1uyqEe893kSuPPFN4NKMnjijWighDeULedvp2AygQ",
  "key2": "tYHqFAMppGMKoRDqLUr1QKModRSQ7uZdZVqHdkRybze49AXUJSoEcfjjDDLxnnocHwcvLsvxYL4G4yQvVgCdLBN",
  "key3": "5Hcm5cZatV4nQfWeXJ5WS7bhpWAMgfokhR8aHksWAFxoXSLWVncnbSvnjw2h2qbt3jY8tUhhY9aAvsye7mPBW6J9",
  "key4": "D8C2iJTbcV15xCm2xtLSNwM1ZWFXXFQbdQFVH3xSMFQVTo97f4GtPhihRSTT6TVmGc9itj8hT3LvusXmcESkuBd",
  "key5": "3RD2MvziHjdU95xcAjTEpwemHFQX4vvWk7hhqSiJkkyJmmcEyEE2b3zWsWKEGSzryzagYBMMVSRbudBR7hW82pTS",
  "key6": "2G575Xu5b5HmFgn5q3YyrdCxGLWHpwt1akVNSHaXt1UJidtpGXj1hfmzuyphHrcFV6cPRPEnJ1bkh1wRU19pvwst",
  "key7": "3A5XHiNQo6wKetQYYPKnDt3FgWxYQM1aHN3pr5r6it7bqyVhbw1hw9g5sNviKBcF4xR18JigUiruUjWvrVxKcACE",
  "key8": "x25cxxdAWTtax5vyKeaNztND6dxqgJGcug2tLuN9bTjQcGMxCps5BJSQMrnM4sEhWWkcTssZnpCMJxS4HU7dFxF",
  "key9": "5kSutAczXA51y8PeZEP4xnbY7X2pcJaMR5xKS6KEQtJPAYV8vcXwRaSjZdkpHUM47bYJ1xXBqjSmmANbtycoSEFn",
  "key10": "5A8RpdQXESW6zDRCioz5fTGjnNSmCbqcLytLCWozhtteDoP74rzrQByCi4djfaSpUp7RhrV6iWrxpDCQDGYKf7zX",
  "key11": "3upZVqZzTKpzLiMqRFpAj8KHTNgRkCjSP1i9aEWHaGgqPrb95D5YripCoVshuVij2xYGLv6heXo1497pdkU6YGvz",
  "key12": "wehRDE6CYUmgqdQ6ssMDEhbvvnqNbEZrJggFsJXU3nHMcvEsuZnTza9Qa84sbMbGDy5Bnsm1Lncf3b3HXDgwFnr",
  "key13": "4Q1ShBsfuiMc7CWrTBEetUYhJNgtB7v56MjUDTKDzkBEJ7cSoMdG1Y3AJ4aArw3ZSg5vdq3n6Kg2K4FLazw5E7rx",
  "key14": "36PSJSu3hwxVZe3mCzMxZ1ZaPPzrqsbPmmjqTY4a8uEMMdxcuKu9rdmyoj22vvELQaKMyPCTt1f3vwRnWsNpiHrR",
  "key15": "Gv8JHQYHuT3udnKMPKqu4Mz2Nmb9uHrPX1xahPLMuQhA37WSK1WhCGs4CUoFkRtP7ETjsms1xeKVJ2xRjEDswFa",
  "key16": "EM4GEZkQ72ELCkZg46BX6X7jL2mMqGGZnxR1nfN35YNVLotja5WtQdHyYXo5AYjpv5KfD3dkQAaPALwh9fd2zLG",
  "key17": "2jcKJGmcRyfgu5t8DFZ3Mu6GPCDc3yr6hwCyggtA2dXP1SSQ8pgTwvqyEXyHkerUiSYCGQRwWnHQE4xPuaPejMBa",
  "key18": "41cZ8P6uv3CsetQxZTH6YUSoC22uDbVpmhyyQBtSLm3MXoWEWBeTVQjYnAnqKr6ncHUbD2r7n3zCPM4zfhZ9N6Be",
  "key19": "2rM8MkSdBb3TMssPPananzAySVz9nXRexHzBhkZ1sQ1FGL157QW2RoTcpJ9LZV3kFRtNK7KZpa93LnvLbsttk4sH",
  "key20": "3SZYA2DUc2KNdJNyriMbbHdfkiw4pD2nX3dP97VzaQZuKpKbcXzAG32KZ5KZvDM6iSMDU6AGjJxWZheJDjQubSVY",
  "key21": "4LfrnCwstq3gg68GQRgzzLyKTyoxxA68QFS5f7anMiy5UfJUgWCREKVeLvDd2ubndYA79rpaLEWrJ9ZL73kppArp",
  "key22": "5zDxUio82MHkutHe36MieAmU7g3moSQZLDUh8Wj1kPN4Q512eonmcEWRTMsogWtQgGkEDmEPrsr2LCBSVmmUhx3J",
  "key23": "4tR5uc25bDFbhM1xnBm6Yv68ajNzwQuKWSh5uMpFrtG3bzJptPP9sX52J2zGtGZswNDySNuHURkiqp1LsY6m9oyk",
  "key24": "4xaatu3CLozPPU8kTXiqNq5Z4TggscjNUfMydbhXevVEQCJGvTqDZWabhuyQcVJAZFa4RujDZZseRxwEPGtLd95G",
  "key25": "2PVrAkGhFiVKC7ssVgSyqc39DSEnu6yoec5b2CkiAnKHRCz92aXDiQYznBomX9TadgGUDvX65NYT8u37Svfacbz6",
  "key26": "Vt9zeqyKmHbFPkRM5zdUBWfE16GeFKNP7Dk1FM8foH1Hsq1CG38LoAparYfwtkaUWXGWFYPC7T3QiXasGSCSPNA",
  "key27": "45ZnJCc7sbrs6e49KMgniLKM9RhJcMFRPVWN3ozciMkAViuosamMDxEquZrkQ4eSzGJcyU1HrFM4ZAyQ9P3CyvG2",
  "key28": "5RBymCyTW2rNbEAuPrnG5LqxYXa8Aw8AGZ9wdbJpByCrTnbeWqB8ut1CQXqNsbwwJzBrWe4KAzhvAqTSRzEGBgN3",
  "key29": "32M1jJ9n89pFJ6qy1D5R536nW2bxKDNTVjEZKXPMayncHB2abrKddkVpZXVZQNNHuTUmxrRVvxfxPy5uU6wqZB1k",
  "key30": "3a3PRdsEtkKkzSytu7qEhkqgkSPHFkBdgr2Ry82zA9YYgsovkjv942xWFCeFtTV28Wh7DkjLzGBkTrcZptvPzdav",
  "key31": "3jT9vdYDur6WdABtBezuzPXaXyB2CgjoY76onx1eqf9P9owdwbnKmPVRnibnE7QVruFd37awjudfMvpR5YcEvQZx",
  "key32": "2zSdU7yVGpTZhpyjZhsXzWwhXudqrMeccby2UgXPSBr1mcK9paxB1CS6XifG257xu3JWHPNb9aTaMx5FN4xcvcYt",
  "key33": "4cj5LHNS6QV2DWuwisRhGV9ZwzSmDpounrTjHb5uqErwi1ETTco3miKT78rJVFXR8GGwZNMAnNbyNic89urF99da",
  "key34": "5WB3yzvZrRvGcQGmZTfnsZpg5Lt4SBup2CzV17586f4RLSCQtrN4qimsSHJ8FptsfPFU8fGnC4PdrNA9Hodw79vo",
  "key35": "3wVTtWqHv52rUSK6XLUk4SQ15REnCQuEUtufkdVqme1gAAepYtCC6uUUy1T4Sq6ZEZv3Hkk2LHvejd6LhxYzfGZV",
  "key36": "MhnaxB7tmSQd4MeBufTQyMpWgPoJMpSJ7dYcHk8f1kM9nfeD4PhuG9mgvjoDnHCsDRz8QnDYurFL3uJCHv7DDvd",
  "key37": "2sNeMpgPV1nsfPxfd3aupbU6ZXzzSxQb9cbG69opHJg8hn9GmDykp6ucdyoXEGYRxB1TsipqogbeYkaRc11GXyTu",
  "key38": "4A3xwPejx8sJUo6jPoNTKXyybRgoWcjvQbD4cYQxDnaRmHoAsVyyZV5dyptZ9Wro4rffvgtfVGfm3aikiMk3sbn3",
  "key39": "2YGWkboyMjo9RiMqmkfBMruyGQVkMLxHWFSZpVPdoRs1JKroqrdNWXjqsBPBcza7UfUsYNz4LvMLnTM1sS2WB1Ai",
  "key40": "QndLrHxTG72WKDokzrER8nqF8erVY6WCQdxwBhxnjfcwALUqfAFzBCSZwUs4Wz7SYFugm2NfmEFqJPyTD4ri98e",
  "key41": "mmnTkAFzW4DqoG3883KQU3EZMJn9JLKg96zaugZuxFBHbNGBWqzfmJ1xLF1eYJfwtVdasnUiiwYAiaWF8oHHr5f",
  "key42": "32KVxsBMZ3VZdLmV7d9qP15xXEiem1oPwFCPTcQvkVeFKjts9suPZGAJfrvYpffG31ZfZWwo1L1ZbFpHJgkvm9qC",
  "key43": "5vyHnSuQUXZccUqGWxwnszUZ7kn84rBGg2P5LfpjjP3k8jwDtzVdyjdaXaabN8ZnzxC56Qb6khhHyZL4NDgymMNk",
  "key44": "4fWS9puxKCjD15oB38vwJbfaq7eqf1Ar7bKjF6oYiiEn16EFu6d88QXpPPnSC2RMxz9B7D4Ga9xmyGYhbeBgjE1V",
  "key45": "4LGjpjFYJkF2SXQSdNDRv3vxposooonZcRt8iN7GjFqDFMsL8mhQH2TDhPQgi1gXygRRtU2c2QjzMemv1dpqFAgg",
  "key46": "GuxC5NWmuvta1uoEbtW5Gt5NJ7AXHkpcNHA2fERqAReWCSDQUiXU7sLcKadSFy8B4tTPB3ZEb8TwpFrcUuCogEP",
  "key47": "5w4HGYScC4cYMVrzVXhwhx9w1tRAPx9sbAn23kfQXrb9Ghp3s5DAMMsfFdjupWaswzvxAL1cCqeZf4AAQbEx1srq",
  "key48": "2RD7MNUsaW8hbWMZCNhVJ86tz5mimMo1pVggfwoPQ5jH74L4hRkcXVNqat7VbWK67tvGxGGNyxEgRiWFiAgNZkk3",
  "key49": "nemqpjCaksMuLGkHf8ja3dADUT4nYgXLAj9QvJemGUR1o31M5rjQYtBcaYWk7udJWUQugTKbMiHseqzisif4tFT"
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
