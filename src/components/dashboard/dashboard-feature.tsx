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
    "5asa7Hnk2Y8fp6AMhR1wQobp7VcsNJDF263kJkQScjpHaaLif1S9E4qJwr7SGRnMvzMWRZUvjpna7a2trTEixe4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DFQTZzMACsVkKzBBR2iCdCg5HWkMyWFriqyuo6fJFC1r9SrY9p64hzZuaAVgPEf5BiGTseYYssRfMwC14mLJF6X",
  "key1": "2T8CNvbUHEgn9L5jP3DWDjxvU4Fehj9incgPGhrUAuMLUuoCSU83sehao263MfWXkWoTGCERPhHCiyeVoXHmtYdH",
  "key2": "cNdeHbtbKTzMjhnAo1CHnJ7S76uvK3AAbT7krcjtUn8xCRt3vxTrcbmA5ZMme3M2b9GZPEwJ6Bfqc6RrWw8dydu",
  "key3": "3RrgKRejvSKtDAUD84Arsaorv28WPGwbPn82RazfuBi6dgVyVAWf6n87opYXtz38te7NthgpnDbkCcHsznb9ANA4",
  "key4": "3kzkUDnWMYqwVY8vaQ3A6zyZGnNioq47BtyV9fpPDsE4kRZgAHbRRM9yWkRNXVRkbnoVscQArPBz2gbq4VZrMhkk",
  "key5": "4Fv5fa4hbwqGgG3CcXWTtSD77SrYB6p1Vq8QkyKUjDyGQXtYcE5F2spKHq33QUw723EvHocobS3q8XYBe6u84oLD",
  "key6": "MoTXAbwqXnVwyv94gNZSp5AVYBBwYrK4av3AL46jA4Dr6ff8hjqhVtnHSCxEwhvC7TU29Ndpsba4GhB1b7cuCgB",
  "key7": "3GYG5A659nXJEZnEWHgK7FXq67492NPuUQGkEx5QLqoMqTVUGHs6Z9NwHXPmsLJef9QeG4FMugCjQrTxb4ZVoubx",
  "key8": "2dcANvhVSLJugt734knGSjjm8zv8cdBsNZZFA7UA1BcEyGUYJ4zwvhaGZmptnZwrATUKk8vJ1uwqF5cX8gs9ecTc",
  "key9": "2LmEi4auKcBFRQNQJrvnymLAgmArcPpWYWRzD1tp331yU4TFrnyoRui8vqiwFeSxC2bT98PPqkD5aqPtBhHwcroy",
  "key10": "4SsVXpM4tuRWnWGovmna23ECt97qa1KMY7oG5YmSFVja1TzJg5eohL9SxKDQkBcmRoWH7M8LvdrcK9hrqgS4LPzd",
  "key11": "FmQ28fviLPgzLtjiUnXWqYjdKXMKybJsAmYXoKoy1CsRZXvKXsjH4SPa3gmPsMswaAhHrsvYHeDPcVNKVBVkv9d",
  "key12": "4wxqeBq8AGkLKREnemPChfREeVgpnEbHV26H14sVvxeT6soGeEtvT9C1bNDJryGBSAPir5tB37FRBgK33nXk7RE6",
  "key13": "4C6TmbdcuohbtbbmkAWHJ3qxykmPnYfN9KmPMBHqAFwQpc1DDWS36LhQaVnJTiDGB1E1aVw7xYbffj7eeEHgWvRD",
  "key14": "j3fza8XDYKzwe7UTjYEiguLoyf8RtpQ3N2UyCnF839fDgL6ucDPbxPqSQjAyj57S4CjrJddo31qtqizSAhYLRgY",
  "key15": "3rgTjoNf613behHPuKerYX45YTeReaGQdQEWZQ7XHPZtrXa8mWgQ3ToaEZQ5p7WxN7wqrRv51PZXms9B7MbUhdHV",
  "key16": "2h2hVhygbz2FcdVhVhrVgopKMttDCodcq6XALJFBzHsZBVoTBTyiMvbxB6XPVr9fW92ZqrZxKga8SMKL9BK2q3tW",
  "key17": "38Eg4dpFYXQujaoXZJrcLcxEbibJ3o2rBVSJknvdjjHyuDKRexBcYtBHBEweYmJGY8yRGkAPCZQp22Ae5mZAEJVH",
  "key18": "2nKEbJiPyEXp4fCikXfSa67W5vNSVJPHqoMmYPDsS2PFWzDGMuUPgGoW6C86gJC42RLrApHkaUXL9D5RaPcVvN2C",
  "key19": "4buYe1TK1ZuZeYq4x1Ec7hiQnJ3aSEXkr2hMzw289jSDovLHBDzvE1L3Gi69NycqnTz27NPZZ19qWXcUSfQUsXHr",
  "key20": "3q7R7wb1ZMPvarrmJdDQu6LLF61mTjyyNUWatPpnEB3dgvNxcLxWPpJadgECTGHExpEoq7SxnDKbXSjM4hQJarzz",
  "key21": "3kDRWCRPb8x59pDg125RiDmwMwmVsErkiow8Jq6NZntFzKAjkpm7VeAgX3dRqkELYNuhnNnc986ReE3Q8fhcdmPX",
  "key22": "3c9hK4FXsKGmcwbev8uV4fKY1PPAduf9pUGu8NGW2t9GGrjh4bEaXmKCs4Na8rdcvAF7AfsDfgd2GsAwKtJyD7T",
  "key23": "3kg2QTkGp8Vzj29QHV1zsvbRrYxQ2wS9QLnsmf9Y6Y5PpH3vFXTNMbQDTW7uTeGdHLvpMnrH72B1gPFv75CkAkKp",
  "key24": "3GSACjatvBDqcAV28WDKiDcJ2MedR2mG53UYTBC39sxJQM7Ncz8UqnFNkL99h44JZS8v2xno4HJmPJp5AgM9HaZQ",
  "key25": "3XSpQYXF7WLH6viEW1x1v5NLu54Zyfgm8vZnRomLBmwu3u9rjWFzpuNoyFnirHcycN1zsmgERRiLV9fPuzM1yRuh",
  "key26": "3E9en6rAzesutmxxGGdGvqxeU6gjeDFDCBu4JN8qEZDi3JRZ7LSo9EgX66GQWX7gKpgEjF1jQHT3iw5885ywscQE",
  "key27": "DG1EY8pbnRJSszWkjwAto7Dq9Rc1GmdNSh2TtE5kQJxqbjrBcJ2tTtTeP4hcbk5Xm2Yh4ThvSaxUa4Nbw9jAvyL",
  "key28": "53kqWYvfwdPvJ5PT5qGbnh3TqbGKEUEw5SMXxh3fpbmkn42dKDtxkdEo6XtE58DNBcNNP64jdzDPqU4C8MM1ytVi",
  "key29": "5yBEZ39wDF3EzPQLSRt7jBKUGJUzjfmMdJW8dFBnu3g9a5SokWKcBT1QgTrH2RKM7a6wJferhfPb74mZPwjzW1BU",
  "key30": "5zUBEHPsTMf8ftc1yCAroE45RBRgnKfsBEVDZxZdKouZtzTum2uf48sB7VADkCY3nXbc82WfNXCKdXKKaFAHeT2z",
  "key31": "4r4LPmpjADBdTgUAxjSjXhRHA8LpWjG9sdSGn3TGFdLMf5i3LedFRqdSNmXoRc4CpjDKLp9V33yXLYT1Nm5UWVeZ",
  "key32": "4DrdDWcZEQPoe7LP5SwR133PjavVmgTV3vv698KYEmz7U89hxosggMMHka6eunzdQwDKD9DPk7SDxAypBhkX9tF4",
  "key33": "3CTHy8kAcKFJzErM38LcxmEnW9LkkoUwXU1JH6tMRtknqLbsWXKx1BCeCCBUeMkqCWk5M18QAS8t9GQMFwpRZrby",
  "key34": "519Ta6z1XjPhZ6gGEgGgif4PMc6wScAJdvGYJA7V9RXDUMynu9qJXUNGtJmnL7DLwQduGYMt5aDFYxjcp9WDX82Q",
  "key35": "fcCxTWcNfhLbZEDMGB9mgX8CknK7fscKMWAZCRpPxdvyMXS5HdJtEuvyvzMtaC94zocBfaMsr9JWwaq1bfWXc7Y",
  "key36": "zvdgrw3C2aYV8ym6xC4vpMhQt29MKbTDqMu24v1mB9LpxGXuznUmn35kFwHRK7wZHVjoqutDg6VD759mXZhzWa6",
  "key37": "Ad4jyxpD46SMRVf3ESKae3d6ppDkWVguXbHnCHoBCCqyepqcuTZwM1xYk4JrsAurfGyaArpWbbpHApg91Sb8LRM",
  "key38": "4QLqdJEmV4fta5Uy2Gpeeqtjdg97HcMPGS9znRiv2vS8X6F7wWAEVdpVermuNW8bSaSNtKeATBawbMeb2MKQMNJU",
  "key39": "5XUreArBtA8vTHN9WnFgdJ5j4WibZtGDxDd1zC877BJGSJqsSsLucfHVW2hfkwWcwuRrjPkhzhnDjmhBHgsseD8z",
  "key40": "4qvZRJhEDE3K1WgBssk8KAvzJAG3NWAoNmtTPWwdEqCAUZdLc9rrfWGfVZcXwjY8GmFBak2H6uzdXcdbmiGSSCbb",
  "key41": "2JDVno5SKuajB1C9WEe2J3sNWMo2QFhCWKJu7A7ww72Fyr14FKeJ7aXAENp7nE9DYJn3jeDuaSZY9ppU9RAeDrgv",
  "key42": "2DkYDthBMH7W4g9ww5fEENxSu6e7XUu86bYPvMVsdytDunP1v4VzC94P9fY9VFif8H3ciK8bZgcQnSrAtPXRFD9t",
  "key43": "54QyWz6bqu1HEwPYkCNEWaxYKh1yhEbaXHyWGY3TPCWDwvDYfFKiqE7Pf9vxWEetcbgorcYnb9F3rprYrACuWue7",
  "key44": "2toEv6WerAjQ9bfYCMC21Y5mHqSEYuYWVHnExib5eNVY5YkekYthp1WDK1EuXZjECJpks2ks1NyT9TyYBvrwLPVc",
  "key45": "3HgH6SEaKYGvdJSrGy3cd48oPhq5CgsFMvbz2ii6y4PHHSRtZAtYLqZtMXJvjJBDAWRsJ7UZncay93PjDEdvy6A8"
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
