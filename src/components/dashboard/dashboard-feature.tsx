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
    "473W1W39xj2vjEkqQnVcVCRc1UP8NRg2AkPkRcRHQZmXTQZ6H6gyMgpK4Dt7Qfox4mhRuEeQ8W848h12q3Y7BrBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJy4HyhS6Cajfbc1uXbaL8LyukvAUzWGjTAKLoPFMjra49nWC3o7kVKtL86hiVMmdWJioNbXkJQDdMjCPitBdeF",
  "key1": "2mzpxhZTpBdTnQCTzAMF5gFi3yKUQbJJVuQSvJ24x7MjrbACMcmhrvdPNv5vT2LgRVvJXPkbnQtAkX7k5x6Mu58t",
  "key2": "2jME9jnjYgp2dTB8vHGXkFqDxF57sazALDCGQYqoJGpPAEVZRvKNqxM2GQRvoAUzxAkbjfJNYvLbsRDJwJD75xiG",
  "key3": "3GVY8922wrusvVBL2F7bYUbAmyysBhjywgAfXTQbNRvnTFviEQjZiNLeduiZrvJUDbNtrfGhRsqc5ToZVwA99W3",
  "key4": "3gDsxU5gbLcjhFyZ1wuWbUQPYc2LKGnVRrWnKK55bC7y2CnkyJM4oJvod8gg4VGD5CcLEJWjLNqwGXqSn6pLXiVc",
  "key5": "5RdgRGWaNHMGgmdC8KYJPqjzAheKBzEaH2hDMPvFDLtHCVa724rLqybtYzAERxXsXhQDV5GhzVXC8XYs35sY1Ato",
  "key6": "4Jna5Lb7p1eCbRWXEXQ6rhPYsDXEUavi91A4oXooaXtDrnrQTk6ay3Yx38kMk28VbWdMiN1HJAHuqqw2BLrsUYqF",
  "key7": "54MPG6qfqz9nGXDMaHkhJoseUV8T6UaSk5Y1eAvSguzxc9GdUUfD2wfbGP3KNZB1LAUmZZBd9zQajQsv3SyUajik",
  "key8": "5FBnr1tG1fHqGiBWvkdbWnV1zJZT5q6G4QnJBTMv9feqkHUuaU4Mj1opxf3rtQhyMW4YBysTGuLMoJxDTzy7Y4F3",
  "key9": "52DuyZkKAZePYXeYoh2abVrUrCH6ys5tysZZpMcRVyFDSr3n83f93TaGqFXmD2q9ELW7WZLFEqrZF5kaGTjZJsHV",
  "key10": "Be6oCLsNWKG5DmU18FLj7RBpLcx6QmJAmuNsbsPNyuiDQvL5MikKQ35BXRAx8CtugQEJXqEvWmGLetG1FK4Z8Bq",
  "key11": "4Nd7MeHnwtxf2s8iY6vwwQhHpX4RK4H1XoVA1sWAqw9rDmKjTWQ83NppUe7YCdhUMA3DHAanmXfobFjrdRpYYruG",
  "key12": "3wfXvj74V3gTjeE7rjmfH7es2Po6riVtgCb6NSkAW4UTY6kCe5eiqiZWanJnRqs2QZvBaaFX8KxsbQN6kHZa5WcQ",
  "key13": "2Aw99pmDwsAU3x3b29DPXLxurQgBo1i3SLMwt9ScxM7zqGSX4nVFc5mCTAD8tqrjoXuXtKzeKNShoNbmvtu1ktFE",
  "key14": "5zboTNy79UgHz55CrbSVCYocjhneeVHAqQNQrQXg1onedXeLGAi4SooVPdY8axL43j2ThnL8MByrgPUJwDq7K2NV",
  "key15": "4FKfmkJMxhCgMt5pxFkkvCVJ4LmEsqzs13LUUp1sLREo7yhj4ofd8dUCN4Z7Mwb5HhS4oSZ5Ju9GucpcFUxDSqAf",
  "key16": "424FnBrErJV61VYgGzWg3guGQkwhkm4smMdkYU8VZdnmws2PctQSBVrZRpiwkP7JaNfWC4k2WTNi1uFpDt9Ga7cV",
  "key17": "4FCtYe9SNech9iMHQBnHJvxE3yfEur3iBg9XKgc8sJQUK2UFuDS5kcVvUhsvssrRPC8dFt5CidiYuyuYVJLTPEDX",
  "key18": "3DxQUxBBQXQ1RTorcKAL3nvdwzKGubwqazKXsrU1d6raYEJDHDCFQh3BdEnT7jDZ8WFQCo4GALaEHLgg8jEFsdkw",
  "key19": "4zyHEa6M5QpUP34V1oKjPKmVP1uYi2zegHyKxkiCndZeMBwFuriuH1R8bfE7HAm3SvrNF29XfmbDN81T8XSFynJX",
  "key20": "4ZqkNFTediawUV3fUrWwFX41eJF2qFWpFSZ1gJK8JF2tQgMJwLzDa26cUvSK6noRHYEruozbz6Fm3GPT2ivRWazm",
  "key21": "2fpnCxvwM7uukgpc16G7DP4wvsz94Kf276GLRkRb5ZkgF31re44abQQTW5RyGGKLCtR58CRGkaQh8pr5HfkT26E7",
  "key22": "3SEYLr2phqHNt4QmELY9UTxvN9RxM5YMntYY6dMd2hhpEs4qor1RLxYnwDCpwgYwBGftm1LVPiVqWKPhKaAHvLcT",
  "key23": "2R7ATSWwfNs1GJ1KVjCton3uyT9t4qBHh6Wu7SxAkhrWpotKjG36GtwVtypotf2JUWQW3w3T26j3TBDkUv7agQLm",
  "key24": "38CzGyQwWHMt4fbfWNEBJmi92FBgFZH6FpeeY5GkQJgojTE1vW932BeZyGbehFDLP46ycd433ZepjoRZtmBxUdDJ",
  "key25": "5kc1FwpP6YFkDac6zrxzRg21S4jyyQDdFaBcu3E7RWgzVc5kpFaCiA7dmgVpvLTYjTtiGPTeAErHKk3GvDNbCm9M",
  "key26": "3SpvJ5TdyhoTUBNp7hzmjk4tLfELMVwcFKhcCab8RP1NVakDJewMV9oadVHpwjq5pMHHDtM8QVZPwWPeGCit6HW1",
  "key27": "3hBYpDBB6BUxbkdqxC5oEkPVuYGiwUa8UGGx6CwuwHNBPoD1wJ3tbEXM2c3eFbZzma8Hm8vCW4pXu5irVxgQuD2v",
  "key28": "5mD9YXsZuhqR9nSwtWoVouRAJFvRDGZDsSdtcWXh57iQRruUxMMo1WPgJpnMXWy5srLt2aNSdcaRuDbZ37c8U1pX",
  "key29": "t1k3PbaSbdqptsgtaUzij8ynv8MfWF9aWpfXeXxhTgjkx2ZtdG3jSF6FhvV1R6TuiYvRuuJqgqTUAyo6V8rbjQQ",
  "key30": "35g3MvXvN1Lpm1KjJbCjbnoXS8vZdibCDpAmZXJ3vPvgprNfZVQ2LFGV4JcVcDqyia9fCbRhtc2CtnikqhuQThg2",
  "key31": "5u9eXCzc2E9ZQPwTJdLzVXRv5PBmdV1Nfz5NR5jqx4ZEnYoeNQ99XSMna2XQaA2NkTY6uQGMVVaUUo6Q8S8reN5p",
  "key32": "4ciL9pzF6fkrdpgAdkAzReV6StcUYtLRMwmYQ8Yivaa1GfhLnStBXWdQR75uwAJxwbAh7b3MkAqpoLkkk4GU85Wi",
  "key33": "38snnKh4dn6QBffdqV7wZSfZGtrB6nP6M9AAr7nSh6Wpcn7Fos2Ap6ohsjgotFG4NK5h7vbxMWqhy2mTun1VZN35",
  "key34": "4rtExGiqaWHzasSdJ5ye3MzimDXLn3YQwucMhHBip3d3QAPM1br7PKJrXaK2uWQ1d9JrXB1rPkJDHgxoSGdBT17X",
  "key35": "2S9o1nCwMwguKrAXmqNsEWEnimHr483Npas6WanAPtfbtoRYzQdoBSe2L4onCkTL8E6AcjhEdB6JR8dZVdjkrczX",
  "key36": "2GTL3a3S7eMQ8v9nDBR3zY4aJWaMv1fbs5796UA42afSdKejh1FuDAssQC9zvydrfewhivUJXwVwPCfaWfsN3ehw",
  "key37": "3rQYpEd4pZAo5Jj4K7coDBMLMUpYExREQoGrBK912PHPj2frnTRU9KoU2YF84WRdjcYvYyKpZBVinUcLG4NQhNa2",
  "key38": "3LqMHEMGZeicdbLHA23TJXyD7zHGjUL43o9wZaYknujPNx7X7XP1cTjPNXxdqawGLZ7fjUAKFSti2Yp8SYrh2EbZ",
  "key39": "62GpYpgMgmP6U5KXvYrMvXbsGGMfys4LyuHrjuRpgAKfS1v8ruGT33wUbtuTb86F75biYj3Hztpe3c1uf29W3sBu",
  "key40": "22vPRKjiUhRoQRBAm6Y32HoKetEvaHeebQQh4jxknkCuK2hj13bfSG5ExtUUgejeDgzJkNpdj72fZhSBPAxW2Kys",
  "key41": "2Qttbveja3TwDP2CbQfZihVNaKTEgnTCaCv4M8qSraCCb2m7tJpyrnfyccQfvzDE3ZT39JHdjZHZbMCUYADHK4ox",
  "key42": "5iR9KqHRW4nQwJPGH5W6aqQsL6FtsHV487h8fWSjAw4qk1V6LiLA7hR6ywY9kqeBNxwUoC5fhwkJ92xSPYL1xTto",
  "key43": "26akpAFY4aziJchkUA3L3YTSJbcUKXQNE6zzavGKVxAnsc3fkr7Wr8CvWYSh5ve9gZQMEw2UBFrNSLs5SgzAYmDy",
  "key44": "5ndFMGpEJLYhpUDDvSHVZok877JsDY69qBjce644hmsF13DdAeoz3z6DmgfoyoasiPvByXtSqPakvqefqkRKwurf",
  "key45": "5vjdRe2kHbmZYuKNac3DAzeBgNLkr5kMFkeV5TpgcunYjPYwhgEFduXSLHYKaC2NM5Paeg5j93QAdXdbefPkUvCt",
  "key46": "2wh1GaWcL5Ss7Y4KL9Sm4xqu8EjCu8jU8BjYutbmqPz5aWjzC5fdVocvVDzPYtArUvHFJABdVeiYCD7Hki8AqhuW",
  "key47": "5DZpPZpa1vgaeWJ4pQPPoM6TD5aoArQJX5yU14P8Ucprm7Thc1eee8qhDni5TxTCJqWPiC4QiEizQCzaxKfcn2gd",
  "key48": "53pNq9fY3hGFSgnJLRXze4szLMcEFFwMecGtvWdMakMh8Sw4Dnhn9Lh8K9aZ8ip2ezm6UvKVXfWgEN6DdQHdxUsF"
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
