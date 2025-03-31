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
    "qdpVM8SDqhFURm7xKV2UqSQq8RXEkfvmrzhx4hqRpWsRaHdn2gQ6YNj3xzyf3xkKYnF7syzWiYxozuTW3sUH1VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BysgZQWYUNe4bFv6TCvB2VAuhTJkSG2mXhrh61Zv8LCq3LrivE59WWBWWZpjgkfKrPEge7xGNNW3gknNKJeLN2Q",
  "key1": "5AdRoHEjvVJ2NLtiQMyrPRxj56Z4o6sQnM7k8oJPwSKTXZtycPLWX63Tg9ZyVMbwAkYCR1nwPaeRaWBD78SRborP",
  "key2": "x7MA3DGU7i2JHua56HWaJLXcDRYcKFaPqJ9VGx67tEYQ5Ptxyf3tANz4DdhZmrucfnaKrX45tamLBPm3ZXjP3Z1",
  "key3": "2qp3vWEmDCGUMggwkkiKbQAwLaDtpoQFFNC3BjprEoo985ArQiUTML5CuujhPwDzersAaaefNad5am2ShF8S2P7R",
  "key4": "5d9CPwXXS9Y5tBK7vUe48QNpQpfH153qdeqhkjC9SrGhZF8dnz5zXPJtYnp8TnSdH9n4oy179pJ1xEJacaoHKrLW",
  "key5": "2W7w85b7HUW5cyKegELQjTyyFpA2azAsxX6LvMjThop4shbpbyAP6LoUB3mJPefZ8mpCQ3zexkfHxbSyTJAckKHu",
  "key6": "5mL2cW5KrHrjz9hsQ8pUAY3HEfk7tFjPHfjm3HynNJiquKJQa5j3EcprdjJ64phQh5wJPQtJESUDUZbwsZdkXGJu",
  "key7": "4GvMmsVWmSJGjMCXijupfqgxutXWVjBeyR8yYQpBNmziJasNSdK1MhQju11TLXfaCp2DKnr8Y14VCmuHAjuMACN9",
  "key8": "4X6GgqexuaefT9ptedHZi9KVzKV1sM7KP9Dkrnqsuz1pacnvUFwiLpFtncvgWqaC6qAjMEyn4Z7hc23i5B6DnncJ",
  "key9": "RU9KYNaCoostCdAyBPBUUtGqfLwenpv2VrzxGcumtcd4YGFGQZms5DdC74UF31VKQgFponmVj8yKLkq9iwgw8rd",
  "key10": "2gdH9n28C5D8gDQNoHhvqgb4szJxCCKzCKuy4mX9wgxWK97vcbSuh9RjEzJbPp5xgH1QVFbJKQfPmzFQo3vqH5Cx",
  "key11": "2yZErSGxUamN9FcK2NgRNujDWj95VNwFzwW6Uz4Wc4tzdKt1CT8VbPLR5UbXHgwo4PajuhbjkhfrSrJFyFqTK2R2",
  "key12": "3iqgw4kSxY4x9MZ31E57ReFRNXU2wTXNt9PrSW8xpSVycdNQBfeaF1rGHbvStznGyCTjmdoLZViKqULgGLDZdvtP",
  "key13": "d7DSPGR1XLhUaxKKaQYhmbyjuHhM2r5uYegdgWdMwBja1i9KnrwJ3G4NiAbpjr8AU8KeWKedHdqNrx3MunfTqUP",
  "key14": "vVitRHqsPk2KVMXyAWqjPTRCt72uniMUTsdMU15H9SUE21oPefzCq6nsTiurMxE46mHPH7rkka1cmSzfGmR9KBw",
  "key15": "4kP28T5W7et4FiZsoWhER6qFCy5uT9QZNy7bB39FMCAVdJpTkVGS3f9vcXsR7k6Re8M9HBQG5eNvHy2ifUeuDvqV",
  "key16": "5D11Fjy1oZ581J77qhTEBfEHJ9yScRF7nRReXJsnAPVLRG5b9nbDvY3BJzF8f1xqFe3hRWzjkMj9sbr8yWYHXeMa",
  "key17": "2fZ6x9y8grQnMRi4f4CgkMfYAdNnL5WoV3P8cB5mn6tqM5KESM7NptTVESi8Z4L1m9TPqAe1p1V3B2LH6kKosjVY",
  "key18": "2GY6BQvSn7MC32DPUuwQth15DwqenS1ZFi8YkbcEMigTxFtw1N8besWCwA3bX3Pg69yQyH3xUseezDcUYRUjhAZy",
  "key19": "5RPLnsmySG9NUQMP1L9duXmJdicy7fjdKChDvURfxceYJGMSg3843J84HPABp94JkqnGpJkGwYijzXK1pj4UWkBU",
  "key20": "2e9GGkMtgvqoVtQyUqEiBfeG16BZ6cwfeWYnQJvwDoh8MkacAozG1KPoo18SRZoRK6XkBPHwrWGAjUkXiGW9zmu5",
  "key21": "21iyFmfQoPnPQCSgzWUiNn9XSUPe1Bv4NknfTjjCrhXzf8tDiFXsSDtr2mH47jD3DVqgwQtKqzbDSw7H8KW5Dm4S",
  "key22": "2iuv6jxdmPev3DfDYVnNJJbxesQd4dhENGUU2UHD5Sn8LvoSMUgogyY3cMASz6FUNW1Cz1ZFoThgkJ4bpJ8LgAEF",
  "key23": "AM6a1SDFg8MUN6LVGipew6Gwcgp5U1AdSM99S7XsvSzQKauH7373ZNQcZUz9mTwaktmw3J36nDdBmqAS4VRLqfT",
  "key24": "5ncDpnz6aKqTAf5qCk4r8e71uYuFoBLrZgE2TTjEWdbxf14N29w9935d6rDwBxvajtsNvxb3MFs6kWAXX4E1TDXt",
  "key25": "47EjFEPyvpYqqA3nnvFyZmv2d5Zv4RySuuXJZvjynn4a3QbG7pHon5rC1ic3hY2aGCt2exfubwhTpbVxdW9Dxq8s",
  "key26": "43w6VyYW6FuEqvkmBhgLrUKe2DePgQVE2X6rmD4Yk6BeV7HU9MBAMFmwNx7joZoXugGeAa7sBdauwxu64NnTJnUn",
  "key27": "5TF1cjeRXNgTpXHLpVZUmXJdTNKqU4LfgXGxeNCH5jiRXdhD1rqj4r1VZ462N9pntbXwfdMX1Mziseuuu545uvZd",
  "key28": "5MbxESe8SRa29VZ8yTee2iW6ZqMqvupcfsEZjQMsf8JwtEoz5RbVLM3Avhaj6TDtJDES5wQoLGqzoQrfdXnJfzF5",
  "key29": "4MKtUNfTDoearM7TgV8JvgSKB2LzygtEksxQZhTyg7yTpbebeqMdmys6R15jW5dg16P8dsfnLZPbKwLstdambbCE",
  "key30": "4WVuGo2KbP41x1raeLX88ji22wKiNWPe71KVTHSj2DTRMW1LrDK5uWMuqiDxVDFVEs9sek8y3PyVCooTWpreQzxU",
  "key31": "4WMMYGG4JZK8ZCo93mqvH1oaNEpeM7kbZf8GneMYumHiMJSFaYMoU6fhCrn6YsJEEANjmzkBaJGNSgmD4J55WxAV",
  "key32": "MjEL4FWmgGRXsEbhqZWVHSyCaXzLV4KpjAPW2DyCkCP8VfZL9UB1ajVe9WtWgzYL5SyF5w6RHgg4itdgRaXYJ5q",
  "key33": "2q1LEKJc3i7k8MVrBBuXNNLNSdy8iGAZxqCoVSX16ED3cPTuXu5gWVq9BSrAGY31XbhvnDLHDCeqBkhtpJRLRQEq",
  "key34": "Stt2eCxryu4u83hvWuyFjj7NeFiMSYtqkeVrEMGeHvwvhT2HSd7AU9cvTKZ6XLUVVBt7V7Zi5ifGEy7EZcGJA5o",
  "key35": "H7CBKLRYTc9WMR5nB8YCFE666tMNbk9VLC16oqyspkcod72irvBSZ3tTG5S1bVaXSWDq1gYchndDrvECgUoHzkL",
  "key36": "54bVmJFEZRBshCnhgktJaASo1j4TeZ2ezwWSkHxo5dc5RF4nT6uvJr2CZuqFMbC4otjHkwSjDodpdk8jNSLLubSe",
  "key37": "G348Jgr9ZUBWbTt7zP6DZRGz3YtYxmDzJdr6xAyKFJiDYUPUVjatbKGEiNeviqvhLgQ96iLsBqVkpLAY6Ews2bg",
  "key38": "4doiRAh2s6V6wySQG8oVwULZtnwwwbVxEfptvtbWhLCHoYQdvK2MtbX114HX1o4yjchXzKyPDCBL4wZJf76pVitw",
  "key39": "4K8odGeTHF6LezftoEFXeS1ZtGq6opkreA8ym9KgvhRwYBeUfRJEFQZaxRXsQNDUVExu5oiZfe11nwKoRse2V5Zv",
  "key40": "3wxmeivqU49DowYprYDPt2g6BVrbJXkV5ToWsj2Ri9749SeEmwiYK7NADjoE7yKRCLXH3CEJzzZSJE7R82SDEqDX"
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
