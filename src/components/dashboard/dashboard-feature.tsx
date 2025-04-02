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
    "4PNxVow5mB2BvzM6NVogK4t1Z3wjY1av74YqY5ExQrah91ZhVfCKw1tDRFDno2uB2hZY9MpbUiY9HXVi7QrteESd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5bQPgL7vnm9KRqCvywnGMs655ZpESRKgHzNrZ5SWi6zT3XvraCp26yLKnn8NUXK8hiMMfrbt3sZQQ2bL8HDiyL",
  "key1": "bLcDUBRx5FwcS9Ka3YeHjAYyDLkeHPSdMJvRVxL7shJqaXR6zthwnPmyiBmfpb8iETdb2zGMqRuRjurnnCamCGh",
  "key2": "VD4ETDNaZZvjk7qrwHm6ejX16vAiAaz7RUz9mWWLeGh21WNuPjoUpkJ5jgU24Uh8xzoqqZ4e3rmu2QksugxGFnd",
  "key3": "5GqJGiUc8ARe4hbBX2mM4DvRNNWeKZMzjZP4R1rhbT3oxS4AsYLQoBouusrNvUYwj6eCFCFy9fYorJmZM1XXK8Dn",
  "key4": "5XXTgzGmXJu42TM6GSyNS82HzTFjnEmboAAxaL2UhYeCPqg6LCGzYwoTixvEqriJEBrytq5ZhC8QeVUgGEBivsnn",
  "key5": "4y7nRifTCg48PYqnAiQZua3qtmgHV8XcwZ3YxLQGGUrfb3Hpg4PPZqhA5rydBxXpjdm93WtoMCG2mTijQWXiwedC",
  "key6": "4MJ2asUn3fMKJRzmbYSiAVuqQ8C41dapGdCHHdgxjuauYDSJBB6WcTzRJTHwVwhbwQTNCHgstsTWHYj1EhsmBRUF",
  "key7": "2HExZzrdkJCqEq76xurcfWhrZ1fgtWQhT77Vbf2Cf3qSanux1ey1oYNuvYHwEx6ZMf9pyiiGkN4xbEsPZxrw98eP",
  "key8": "4zt6DqBuYLirpqXc3zAX1p5wmBEkCcEA3rreZeXW1B1EMntmgevjUXnaj8zLkq2LQk91jXyKVanx6eR5n6UTRzxx",
  "key9": "5XtTEf9v2WBYzMSNFDE3LKiZCmcsQirh6QNrcS3DeRT4h1FRMv9LTwfCeB69kAfCnEMkXVGsCwMz6GLkh53ncjdN",
  "key10": "3gDzX1sQP2xnZScc36nR9zGhKfLwXEp38u21A8jvsrXpFdEKsxRUrGwHDjA9ZHLikAPFwFtXDkF1FcSWc6aq8QBE",
  "key11": "24pKFR7asryMZGG4JiD7TnnQtr9JTTGwJsApNEtj76Ci59cZB6s14xjto5MVFuqLWx28VcdMAci5m78FUgu4tPkB",
  "key12": "3MVnpkfWfa6cX1t1mgSS3PSvgjXXKq2gCrPpmcfwj6xfVWRJHGHqKHnWWwQAPz4NAKg9GvUGnpNkXTmjFNoXwBmg",
  "key13": "4vF4XSJwmSfnX4x6kdkZW4kumjNbnqpLHicwyijMe74DgZVJSuGP6rsqNyzmPoyMzcyuEBtnStSDfmtXoScFC2Lv",
  "key14": "n3fr5UoEwxRjTh6ywJr55tbpmitiVEBXBMiCW9C6mk9W88NvEA7v9kafwRPdHSJx1qE7VFpnczkGEN3tPUFjq4M",
  "key15": "4fDREsUwZkeHUxmSbU76LjM88sgBpSGnmJxCoDVMoyxdYNBsgWfQtSzGvD5ZTekhuhzRpicCBEr8jvTGct6WmP3a",
  "key16": "5oiLmbsTx9TKgtjt6P2wf9JULxuwTFJkAS2xyEMMSNCJMYTu7QsMK6kxKxd5c4hNQYJ4tjrwhWxQeGuQSWUCFVmU",
  "key17": "w4j2i5nkYUsAK1GSH3HGVAK4nFg7f24C2BdBegQMpXCzX1HXpLd5GpdcHCK1CDv8merq2Egnt5t9qqUcQHJ5LKc",
  "key18": "4WnR2BpP4PuqxdP5xeDs71oTeUkypqATtnjMVG9QmbffJUonZytvbu65wv1MhhU8NEc6oactj7jbe8YishtdN7tV",
  "key19": "5buFD6sDXBi5p48H2uWoaHaZAjL562GjQqbtEKvysjuxAQiqFDM1pUbC1MByFgXxAus8p9s3u4JKCB6hLCrKWSfK",
  "key20": "97RiCX6TkaMWvfM1Qws8hhvCuHN6hgrxdgfRF2XDpwu8Q2CjPjern6gcGBrxaqBMgcjYtEa88tfCQSVAXqUc7Dn",
  "key21": "5kSBuZCZbHYniuokeoKQhfU46A7RRp9PVeBgDDKbyRgrnuf5hV4q7RYchNUCoJYLXQG9cB3LMzvAFZifYbsaruDp",
  "key22": "N8F8MvayEuwZVGDGcfBwkZjM35ddjStLepHoG37faQrqqvS3ym2mBtmtPYAuCehh5SAd6T3QFLd5XKJ6CsEdpvP",
  "key23": "3TieiwDqNqgvyn7UjB9HULsmbfbJmKsB1whga93izC9cyFc8t4KFzQhMn8mRLnN17TZQupxhTRopZHEVRkfAVV9y",
  "key24": "2txTJxHGvYpqRD24477guyRsXzNdqifJs89dVnB7xRGAveYSXe26yAiaDFb4tvWapV5U85PbadUbwvsHXEDk9ZPK",
  "key25": "4fatbDswtWT8cm9uvhtoSQygWJdKKTPHtRLXts5ZVERZC4BKr7GLPMPrdeS5vyJmE6R8ajd1Tu5f9VBfqXWrUd52",
  "key26": "4DAkBYqW67xKhfYppUms7Mi3c6St2bD2jtVsbaTxti94kSmXjJ8xcEWvLtY4TDVPN1fzyCa6crd3kZvvY6Ai4tAb",
  "key27": "3ZWRuvkjnryTfckkoakhxBXfXbzfgbF9UUfZ4FQZ4d4zpSRuoGMdthEniN1ECHruVEKuCQJwaAo4E9oxeehF3m7V",
  "key28": "2CGkHehRVqvYMvufC4V9thEqTtUzN3nhLzmC1CAFELN2HS1MrNMM5ncGF51EDd1SEgmX5ggRPwcyZFNxfFGSDyGS",
  "key29": "4kagaie5DGYFXHXAV5K22HFTwTibAd1zR4AS96LGmejUV5sCBm7zHyMWV1D8AJ8k7dtyfzb6nEMUSJWD639p83t8",
  "key30": "2G5nSbroThNJYkiF2Y5pTeUHQVrVNbbdV2ZkhsLRZcp8iP1dobAkkLen4AR3zMnwGaHTLKUX1ZxFdy5etjm76LZz",
  "key31": "28FmTouXe4SHEKEtMjwGoA5RYRKHe6gSCfBbYHPM6xFjYB6LkPCgSzbDyhRiE6WJ6KHPuxYBEafP56sj9MMuDYK6",
  "key32": "44QQf9VwiJaG6La1X27f3mf4ScrYVnGhNGprkNYhHGqv2SoUyL9yAbg2icmdDkwmRc9VaNkxD9QPq2z9krLevbP3",
  "key33": "4fwnsGAYMgHZMKXKj6qS6tnLxb348qvWowmaaRicddPm6EpWNjNZSSAB8iZ8A8CnYaNSMFxSiVFrfuRhZBLRZnJx",
  "key34": "ze9voPncNuSYnj5zuFwSWM3nirQVPvJuCNZEMcavyELxBwqzk5pdcBRCSRCLGzUkTiF47yCZhhEocGHSTTqnRHe",
  "key35": "4SPu7Q1Md3hxCysgqW4UUzxepBnt89YgRARguE6MqsgqQxdhhXhSLPx93riSKxyJqFcQqtLD1U4gwtTQJ4RUC2eD"
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
