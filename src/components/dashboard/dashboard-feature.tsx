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
    "32wBsKHpLReNA37UhYuT6kGV8MopgqRsvrw2UaBxLJgcWQJLYeLBWcv8oCSa1ysgf42M8MMCamuhcE3Xfudtxmaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPtQVCW3FvJvaXEvkych82EiCgFRibs3medz86jCjopU6Pq5BspqJRqoQtzieZ3gpB2ZzBWi3P9Hgr5yde4MSuP",
  "key1": "65VNYxbVU2ZBoM4waVm2yjqDqVsVjerUET9cxrUd24XtE4RzY9LSBSaGtzD5BnbffVVzJ6fpEmYLUAq8xri4SgvR",
  "key2": "66U8ysGJdmztCwh9BHYZBEQR8eNdvqWcjutWMTLtZckuWwpgGmRqdxLnBrMMJccEvWgRAFCPTJFBBMG8vgLJ2fo4",
  "key3": "337Bfkn6vo8vx1HxeiWNmgPrHcE4fZLNRKwr3VSdL8c3HKt4dvhVjNxPYHTX9MBS5gLKSBj8sCy1SYXPFUHk2DDd",
  "key4": "4h3F2z1dTMrd5snDd5PW3PzXVhZxXbguCdVc1AzixYiGYHX9btQfrcYok6D37CHc5qiTY6277CG9mLZVYBhtyNm2",
  "key5": "5siKqHNHcbTwGgsoUoZWvfA7T9VpkBZjmsMfmBPGcGRUJvTGQQHE6bsPhKn6azjQdsHPmJrMdn8ud2LbZYaN26hA",
  "key6": "Ju4y4sWFRRt3AXnj7MtAiT9VKW4r8RoJvwJF5vCn5pbuLtB4MmWE6WnsFBUQHUu5SJuUAeVf4Fw36teK2WaMNaC",
  "key7": "5xR6behANv7LtnYGhaLgUokBLLu1wNKojguaehpHwmDc4VYiG4SMzi9f7mEhTLPD71USuRR7zRHd1Pb2EgWfWRMm",
  "key8": "2DYJia9UwFinYqKeJxCpXsQUh6qKBJC1L181JZjKkVKdWDvGnJfvWEpKPmfEHFWHDSxX8piebRPrcAeXLYrbYq6U",
  "key9": "47bqyegqV8Y4q53sywhCsVBcFTJKa8XAHPKGZozLtj9dEzb2BhRyPM2qGumwdM5bLGSZupj6T6Dy6C5pDWZH6dqW",
  "key10": "3EFdJ2raNGSkFK9iLhgFYvmNfEwGkTLHsrvPgebK3Eu9fY5msKXNbRrXHXdrQrY4N2b1rS4478XsbBsmubgJ9oye",
  "key11": "uVZW3x1EGuMMyjjaHWSuogG7VB3fnMvW2XiBkgvLYDs9PHsCJrWr9Kqep5M3TR5VYVaSieQQBzJjuEynNAVe2DX",
  "key12": "5v9vswcsAFnyMsHjaoRy3ECh3peTrSufMSNtQT6tbbfKJzBmndnmocHXyJFhi5PzCZ92sFjsDRQTfYxYym1T4yDQ",
  "key13": "622oinFYAiZiC8emm2ZbX42nDHd6WAuALN5XvDJSnRW7u9Dit3EojsW1RavHBio5dBGyVCn4En3ugxKTyWkcrh8o",
  "key14": "5Aygy4KsVmgg2ppFpDTTAU8McFFENsuqBB72YLbJ55vBiSjZjffS3ENfN1zbDVTKfrbiwzUzh6fTBGe8GSjUnMtJ",
  "key15": "5Z38yhw4yvTmmnP1h9TfSu66YXbbfyxUBartJhmHyHC2KEQ97AJqWBYecZQtjquAyX92Z6RbDdY9VusHV4QiG32Z",
  "key16": "365hqkDtQ6P2HvVYBLPYFKSMtCnndSGmT5WYARUQDpohGBwH1FEs2kWkkPkeyfke1yFR8y3Feg38krs1tGp2Zagf",
  "key17": "fMeSaQATJJdd1z6WRjsVLbKWwSzfaKNiSdjQjmXLJgM3xaSsn5T74HB3PrNFJzxuqTvUAXtkRhFYNC8rHrwm6XS",
  "key18": "5ZmEkqxC1Ka5SFk99Bvt1XmcBQdsa19QESVjAnqJohbXgey4GF1YDwAt7dwbeaFdnRgoYfd1Pm3Nx7z9D67qiwW8",
  "key19": "5GzBdEt5p8bp1omT76NreMiunWG4KKdL6w3t9DKY94V6xqcfEehvn1arsbYMNsSMCV2Nsopsy3jQbLQjSoTs55RW",
  "key20": "5HrPFY5wmkPNiLq3ZAEJBvqcS8zzSjGpBuRqUA3XTBUc2Gdo6LgEKUBvo6CqNSzdCpd6ESicHR7p1HVJi9bhNebA",
  "key21": "431QEBuE31Mv2SHJ6yBEw2ohykXB1pZXEFYcBHZuTcYsGoSBx7kdVviXMRJaVDRd3xrKu1v2zo9odkQuL4gjpABK",
  "key22": "3qCgLBFQUR342nFw7po76WoNV2vY6MtnaPz4g1bxetM5hdu6CP9XTkRDjmo3mT6FHGFxGHfWzaNEL58MD952HMvh",
  "key23": "2QG3ouLWdnv1VAjTCHGYy8Tc7im4sbBzortfhAo7nLfCU7Y1w3PNCmZ35B3VhkNKyPqVLhMYxoKAfoBxnkbrGewx",
  "key24": "37BMbRm7geBRX2XQjvaM4nmVncNEhTKuy3Ug94PRwK5R1dZ6BpaxPdFmAzWx8d6fA1C895ZT2vYisRURSZgTTZmk",
  "key25": "4MHZW3R8eTiJd32LJ3eUd7jrYJp3SdNMe2QZSkBtfrD7TcFMCxQPaj99MRibDqL5oZDv9iC97P4AicWF4SKqmotg",
  "key26": "HrJ9AHpsJZBrAFKzSHzBkA2mZippXpP18TDAL39434yggVCMfJSQAqxBgqKfswS8VG9pM9bPDsWjyKcAWPH7EvG",
  "key27": "5VBynbgYyg7myeVxauGhU64jSKk2mhhjuaRgxAzRyzfxnSAdqPxSKa8gNkgCzig9z7yyrKwcfJXNrPLmzWKecNcf",
  "key28": "3SGdK4xdn2kNZ4tBbke12z2FbfyxSzD5tdkaKKo4y3tELfejnPChK945YdTHkhy3uFYJYAodypNz38hdtiRsGN8G",
  "key29": "3SurSJo1HpyVHUNoyTiegRP1T45rJfAVYRzW4T9wV94d9XYPtQfkC1F6SrGjpKCibUpwQByrJG6TssJb84kvcVBz",
  "key30": "2NUTidSQMjFbGq6CsM7oYEALo2BtfEcewbZzz3YSPv8w2NyJoVd5XAxvHMenDQRjRjwNmKj46T3bQprpyGTerqTu",
  "key31": "22QFcN4boGM8RYZpf3SKob5mvFktggmPuoZUDn1BoDWdb2gn1EBmLUJC2MDJbDzEpiUSV3N3F6KSnETVoorHnox1",
  "key32": "5q95Reo62QBGt1WHAKhZShMFZ6LkdYs1xKoYZhtPUtPthk7KtPrCeL6Z3DBkiRkSVMMzaENSaHsQP2sKStYuynsZ",
  "key33": "2W8iejDL9e3U86X2Tc5VmhE4TMgJiLKCDonEFUKnTKPZh5X3ikGVHNXTLzFXKc6QaFN4f5W1uVW4m8qTsdpY8tV8",
  "key34": "4mu3zFLigTZ1FNcwCcw2E1kM2sPsDaYQ87MZm1iZKuqe2y6AzeJm8LRpTGBBK6G3Zt6AtHeLd2sZXxqvyrHYpH3H",
  "key35": "5rWHUMuXYnr2kXtSpUGDGgANdGVAhk3s2GjCmJF4vobKegAyuJsXZvnd3BZ9Vsb8thHRa2LDGEATSo3nWe1hWsug",
  "key36": "4gpKazQwKTQDqw9SpJeNqdb4e1kLeY8xb6bXu56Hc5Ewk6fuPkvBJCdKoxccNPHBQ5ReaLEUTsN4UPEpCDRy5SVW",
  "key37": "Kpd9JrJ2AGtTXmwuid2cxsx2tx4bwW9FHK8rxJjdpaUErwXinCtY4tUWWcR9rKXz9qkSjHBxTv5fYUR5wernW5V",
  "key38": "2orhJrpNhb5zXyVS4VJoJzs6R3toymejBNECuyPWpBNQeZp5yoZUvCaKEqfgHQNxynGNyyAn7qvgVqwHxYMdWDx2",
  "key39": "2iyi5xTZzBae5Fn3dJPzsLJLFqfYGicnf8g4n78x1Cwb5vDqk4LTcGSChzynqHqNKk6zAYfPpBnGUwKBLKTNMQD",
  "key40": "5tp7iMHJZXZEEzR9QQKNTjT7aFQ9PdpxEPDosFd5q19vpq3pzzC3JtgzTGacUTJ9u4KwJWUCREomeYm6FAinNYtP",
  "key41": "2nS8Rd7mL98uTFAarkXVtZvwfUPMcg2v34rgXwnUKjMMTWN9fw57XFCGrGrBMiLLje8Cwz6vLcKNhboxFRcUA8tw",
  "key42": "4Q6kpzoLbFJS8UMejmDXr3Tf8mXgGEtwcziiv8P3Pohhcqp5muMgBGuPjbbCtFoR8Es4XLCZQH6opW713kgYtuz4",
  "key43": "27Dna5hinqzteJttUQpfasCAuz5Z6zCi8upVqKx7HPcBdcPLBvJsZwLWwMoiEeWemgqXNk1oip7LoHFEqWWPsNNz",
  "key44": "GmTCyVeNoWx95Q5eco4kFku7zcDzhjXhA5RX19id4N6X9uZ8gpkQvj9yaex8XMk5XrVpxrSKy7g9PobYrfTw84y",
  "key45": "HK8GWQRYLi3Cpb5uVP3Znw41YkZsmm1kNreGRf5NfusjiXeW111U5zTJMn8yUUKD1sa7xnvQchxk4twvMjKE9zT",
  "key46": "5mdBLZt2RWoLx5wmZxWMPVwsMWp8qV98ATgZAUz4ga1vBtyoFbzAZXKYZS3KZmhfd9MJDcLZqN1dPZ3j5qPDdCXP"
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
