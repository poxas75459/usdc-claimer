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
    "a2EP5NykVg5hwzfwza26SDDycack8k2fyGdFA1GztmucBgkuEcR3MUvdN2GDWW9d7dS1RQ3UwH4cD9ogzzqVkps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FSNj1hxogU4mM5kwHXEuy3LWpMPHiDx5Kb6Jr8J3mxHKvZZvVWABFjtFzMBp51ZWLxdxjb5a6sc7r3UdvU3N9TV",
  "key1": "4LzgpShioTT3ZqGFSxd4f2m7EFJe3yQURSKsTzHRdt84QU2Ne7XBTFbH2HQLtuuetC2sYXKwPu1EVxH3txoBESjg",
  "key2": "4W7NPwjcLXQucDpoojniw1RmJnTudFfRkNvg9DXwGZ5gzbeqQceUMHcZHnqKFEByMWrN3EnnsRmcddXzdE2wHfom",
  "key3": "25GG5vZmfG8oWBzBDtjbs4Y7jP44Fhw9e4LufhaYbM8wJBc5m4EQEeffeCc9Jd4obq8XWijx7ADs8xm9RzB1qekx",
  "key4": "2ig6QZyzoGcxUbyNAy3MwVNPczgKdE88QfQJJZKHtd2iT4jjo72gz3AZdxRZjHvCoLmpkEWvqE16akXVPE3hJtEU",
  "key5": "3iDgHDWD1gYntpzSHsKAiDzHJW3GBqTKD3WHtpFQgu9XzHnxXGnjWiTYTjTuhtcVoXJo1QwnZFqHEZTb9Aizpd2t",
  "key6": "22t7mCNpZyLNdNeMFZZK6nmg8VJXae83nT4aVLeSEEmAfgpcLzXMsEqewne1o6qy8CRtuiJccnY3cHwLpienPH35",
  "key7": "5vAP2tYwcHmsirMCCeCQXnqYDGYTBmzF36pnWRT79s3hzq443YLiZ2T3JPRnTizJNkZYQrArYCYvZqc1wUPZdpMJ",
  "key8": "4jXDrvAaKY9HdYMeRJEKFWQCmWaJGwzaHGc4K7XJhCmV6VAB6QUVajUSZv54Ki3WXkfkP7BbPon3xzrc3eFVyKiY",
  "key9": "5DcYmXvrssFidyjBWBGsEQL7VniG1niYHfkTCtbMVAFDj6jQaqueuNn9PfxyPR27w3dhwEowJpgCZt9e56bHV4Fp",
  "key10": "4x8jVrbnQSg5MH8USLkpmhU1MyYeVLJ6fkEiamvg6MirstE4B5xKg1SP8hMDFJC2EaTPv5a5zo6Czbicn1kA7eiD",
  "key11": "5mqSB4uKTiGWybvcReiVSV22vt4NPRrx6D51n1ejfKEoKKsUcoQ4ZV2gCYgWsWa97Q6pc5s5vLqSZXq6HEKNZujT",
  "key12": "476bRMDxE4kBjJhHcqy7Byp69WEKHMncVCDgppMAZfm1uA5hpmRLwaSFWnydT9zMuCkgGTmzeo8RUm8i2sqjT12W",
  "key13": "4EzzmynaZg1ETmSMBAQcZUePo9BbzQGPL7SA7iByEHyKnkrXLkk8ZaPVR6U6DL5TBMhYidBynyouT142YnKiYsRS",
  "key14": "4VENQk5FFguuQwzy752RXqHdej64vNpkSBEprxnYAxNU8m5Uq6uq8T767ANYrWr2AMdnkPNUxGaaGBmBHSKAAnWc",
  "key15": "2wtZbaJXoAojHaGT5wtDL2LrqG64pX8yzgR7TBcBbGfZ9asGJ3s7nadDmsLsUbiWR2eGq5SgwqTNDGY16zjSMrHo",
  "key16": "2dkhxovx9qiZ7Ju3U7mR9dHpY9Bh61q3UshHAH53KFGDgAPoucssevgUGYMqALLr8capQ8ZPd6kvX3J3FsNowBAs",
  "key17": "2YEKsCkygr2pUE2t4FeWEzaGFNzZ7iKtQ4dU9uMmmbFxApWw87QX47nBcMz48uepDVs6Wu25nuPm27LUGga6Ghii",
  "key18": "2dxk4TJtYBop4CrvgZ91mYAw7D8fCnniB1uWxeLSS2MfiXqH1zxYZ9Btc4onVXVFfHc9CzH1DoGibeoDV5nR3U8",
  "key19": "2Lda5VLEwpfFaFhHC8EupnBK7aM3x991jfsTkALmPfWaQ2CmXAqbaxy5q2oq6hkK6DUscHvue79suLKwBund3hVx",
  "key20": "2uoUCkpomNF2uQZE4ZCetRm4qGyLzHPZvubkELeHNqdrFKZpsZYTaFcMb8ENRa9sxTwRYpU1QiVBpMvs1QEBGqTr",
  "key21": "5vngKoLkW87RNYNpvVUd4XZv4cb7wXTJsnKskJZYxKYhSgpfdx9DNrMyhhx1dX3eHVN2wr6ZYo1ZDGgzNEkpaTWA",
  "key22": "mkiwH2mte5Qo4p123cwNQGyez7gxzMft77opaE91YZFS7YLWgNvQWmjteXzH1NEugNkMTQFG9x264xibRLALVfV",
  "key23": "2LnNz9qiNZs6o6eJPFpznQh2stYVehtBLxkhWgNaNS9bYgydDNTjW8fjZ5Z2wHW2pg579wWbZoqhLkMEfav9ns1A",
  "key24": "3cii9gN7Bucm8h21MV46GuSZLaPHvuAkUzZ5K4q3PpsXqDuoZUgimXAwNP4amRfW7gpJhG8fZhJdorA8PLW8TnXM",
  "key25": "ncYZzjLhBWeUrsM21dujno6W93h3EBaCWP1AKvG7pr5usaEcCHKk1A8xd2osfp14V2CmdtrUNQjgZrz999PJ94i",
  "key26": "3iaRp2acWzEdKFKtYdLBhmkPTBMU71MpU9si6m35zjWAz5SQxMVmcwEe3nPPopMWH5sfYauKDsVbeeUeMw9CpLMo",
  "key27": "5EEYnFnjHJWXdYVgA3Cax48npviDJVTwjcM71WAo5KZKggRPXaMg44rs5daLjceQk1xgLNXf3Jx4KQD5QLzMu8Ev",
  "key28": "2MRh5z6YxTnSfwB44xsuqqZXj8iWvb1p98YY9Zm8L47aTjGX4LDzgwXwYZPvTBHQJmEiwftwQ423RuHnHgn9THST",
  "key29": "317qiW5DQFo3yT73T3XxzenMijYvS5KorXwJvowrd6ARnwVF6iRmYxTBjZvSj3F35ZdYf6SyMVnx9ikNXEuG3Tzf",
  "key30": "67DkVRMpaPWSumDahHL5qXYXxXxdHKQnNQT3qgxTisYuGBoShSM48tvhv5NiY7vrTJ69dcHcekbes5yQcSkWMQ2R",
  "key31": "cWjPqRE3CwkRUZAh367UKdet9CchcVZjXgUske8wDaJVYgJddrNmhQi3QLMsCNWbxE6AsQdmvrSzDAkpgyxXLNe",
  "key32": "4ffTkKEwndaTm5NZMybSdBXCDTrMrj2tXXTVvUXJpWZb1oH5Pf8iEPo7x682DtyUr74DNUc77A9J7zrWWrbXXSej",
  "key33": "4hqJdH79WTgZiwA4q1vy2kuvunXegsqZ2qySyjDjSfnhgMwjJ9UAZTTwfVQGM22jxjmCmcrMHrK7sj6ApCFCo4Ua",
  "key34": "3gW5WH4cP3vxqSaD2pBwtLPCBqnfg9xssBHqWMrfoXsHhm2aY8UNrmW8vnyto48iPpsZqnKgzunvwD6PdwJXQkH6",
  "key35": "37tSR79J6tMXfLZS3PZhxdn5BTJbQXuE4GVoQ43meLSwdLK89SMKGEccJCvrJwALjTJSinQDTLsiboAPSpyhSoeF",
  "key36": "4xG8JgKxKrowR2LNgqemaaNZum5bRLtyppU1nKHo5pHaUmG1YBsB2otxxvQh2k9wGu3N31XcuXhnkFRCFRBf2HqA",
  "key37": "43XaoNDpTuduDcoUxR44659FR3kodRFtCPmkD6EaExsPFaKPP3NXxB3jMwriZmD7XdM3jZE22z391AGvQvRDRFGq",
  "key38": "3DfnnA1ocZLY98u9KKZeQER6JZmffiQkAsFkiSedsQBdCRSUW5d39d9X4YiKe2rzi6rJtyKvdDSypguzCCE9B2QK",
  "key39": "4CYuUNdQTBgPkgHJyTks29KnDkHaUHdUL4YXSQQjhPzeu5Q2DRKNotKyFBZ82fWvAChP3dR9biBGZZ8sguSu4NJJ",
  "key40": "2KKe3WbMi8Do1akMXuRbcf4d5vDfdFTVTnxjjBjyDKWRKX3KxaQPen8kjA8WvSiCLa4EHTbQiQkogK1rwKuTJRJn",
  "key41": "5HaxuTwhG91oSQC9SWDriaEK5b9i9zWvJe6XKEH5NL84kQNdHN3RvHpfimwfb6fTKLo47aYCuoSThT9yegz5FQmK",
  "key42": "415uxGvd6XmVBJkDeWUXhnTcuwCVJFYfqxSD8HKWetFA2ASjyHuZWbkix67XUva36B469JzfHMDDjjsMcqgagrec",
  "key43": "S5xsDCbpWUHBfLWw2e7nSFTBdp3jpynYp2tvSTA4Xdtk88buUVDgSZwwMMRoCSe9jzqrv6W3YDAHJQAaWFrXLxt"
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
