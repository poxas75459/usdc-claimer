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
    "WfHhZkBUhPK9KpPnS8Qq9RyoU5kUf5ZeBbBrgsvDt34m68WuDcaTfZwMEoaf4rKUz2PKbNcTKgT5zfuHdDGyReW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNKPYEVu9A85oimSHQD4ckxd5HTW8yEvwXYFVbv6wy3Aja6Y74BNwVQ8zGBEAAvhykwD1LSLEeJwQsioDREFDNg",
  "key1": "47dna7EvjZy1xXkKeTjTy1SMAue5VzWoftoghNKg1vdMSnmGewJFbzNEVpivpPiVrZ9U5xXNyWQDw47KZz9htmQE",
  "key2": "4eWjda7GJyQzVtj1havZ4viR8ri4LpPoabypB4euAMA23rCvy1DEYM5cuR3d1sG7CfxE7nLwxmY12u1RcLPVnQTs",
  "key3": "3S7zQ9mSjsFVjCh6DhBWpLwcbUnc4RJF4qdwvy91LwS9UDv4qBXATq7zUSEjG9DbSHPKpcqQqaH71wFkxuMrbAuU",
  "key4": "3XmSqhJFrYhQvzU91KkhqP6wofVHsRnmKhDsDXZ2H2CiYRAVdgE2ftFfBoAhMBdgCKrPxBQibSo5AN8Dk8rt2hwP",
  "key5": "48Ksuk9omQUKEuKTz9ipcDWiFSej3hc3Ch19dKPDg8CFumDkrMgFus7iMCns5bfX4JeXquwTpxQubb4JYSEZzF4p",
  "key6": "4wUrP2YTsqwsXgCmPmw8WPZLdFtTSq4pBh4ck7RMRZCJnBRB78jEkduH5ozLocgBsZhWREpLUmbnwsgD4QJAQoQY",
  "key7": "3kZLdGfZZNJGA6VkBqrn5rfhbhVUoCidwe49f4rAowvVojkB84ymZBkepvHDRzg38SRosb5gWCG6SZ99Fg5MY9DP",
  "key8": "2n5prSmsWFwRrMYn1v64HFd6zAsJv9BdyjFnQmf5ELByitRxBpGNK7c613yWLty56swuyhWnCkez3qnpFJnmKxGs",
  "key9": "3x45LicbTEp7BCYGymNbnfN2fRomCVrqXsT4ncgf4niGE4t4hD1pfNMAw2XKU7a2dkNAnD7KLe9Ty4MvRzGk2SsR",
  "key10": "4SshC4qucdZLvSvvtGiMfzPc8QacZv96xaNqdbeJ1BZY93sXkniQo4CdYc3emiBVsN49Gmsbzgp8wVufb7KuHGoZ",
  "key11": "2U9WnNrfFLZGhP5zPqWV94tAAf4aDWPPZ77eGRZv78GuxTzDNHWvikGZUVCTiQqBLcZmA8K26jF7FghSdtYrEscd",
  "key12": "3UdkXTGpgZ8gdH7SyD4RMxCTc2E2AruN8MW37XuKnJy2ztkLxqLLgRKSfmh2dXtHYuNCyhpkdnG2dMg8iPnr5hEr",
  "key13": "62UGCtU8B67xtj23934vtVvcbXn9GAFo9oDS8CAVu9L7FmPWj9EiuV1JQEXrxEUM2VLtTEH2DfahneSYPm9pmchi",
  "key14": "4d8MgsdCF8TM2BCQW1XVUonnqknAZhPDFJcMAoxUzXJuMf2VSgBP4FL88Q95FxALDtKofu6skxhwxKVNVupywtU6",
  "key15": "53GbTuB4AS3eCgTx34ziLpQGASKze1S5m6Wb4uQSwFn7z9xuQfpCM3DzKX2n3YiBHd8du9FgorN1zibphPkPcjW6",
  "key16": "5bpxQEtoq7N7fmL5emzi6SWb42TxusDnufDUTXoEwKNAJXUUr8ZZtE4R9Ywh9NyYgp6tcfPB3WciCSrFT1kRHF7q",
  "key17": "2TZaJbSCqEQd2qzkzKWZM4eJJqjGLmVYqxGogi1kZt6rDgsxBZKpDon3bgte4kRJEdPoQLKiVJxqc9VZKbmEXTTh",
  "key18": "5sQ9EETAkWASkmkJMB2uN1z5t2ZxFPyCsAAuds82c2HkV9AZrN3HbBGxC6jiaX2s1Rh43b6RgFyGrFgabaoZeV7f",
  "key19": "3ncMKtJgAhP8HUQPqcCxESZoSrekgsfD5hdwvqF5pdRXgfprSgAzrFoCYZ287CrjxxsLuAfBdvFW2hXzUrCZq2hF",
  "key20": "LrZezBBTTsQBZogJevVSATs3BbbMJ2ZrVgsigiFt2kBGKq9xYM2yGya1uUcFhUdUnvCFN7SMErovrGF3V7So1JP",
  "key21": "2UPepagKd5FDDxiuUNrQtwJqv7N3M6ytPwQp4fo6GAAMD7TED8YH2NUy7hcgqVHvxxWFJNtz7dvhnb6o8uLrdvLu",
  "key22": "4nhXizWB55zazPtpWKwkGH7E5KJzqh5S8zoGVGvzJPsMhgZxxRGCSymrJ3hPWQnR2ZZugsjH3Zgfiz5uFPHtxa4a",
  "key23": "2PfPF3yCBE79kC5N6pzkz32aLD3vzLMmPsoS3EezGH6qFwnnbXqwAA4Qj39RtUTeac34Xpt7TeLFWEFAXSXoa2WB",
  "key24": "4oSazxtSPBbYrDdC7HPbtcmxG7SQrWs27hxLNof3eXpNPqYqLhy3rFBfhmamQejeYERziw4E5rbPqox5YjjyrPkg",
  "key25": "2RDKP9TKsV7UZM88fPU89JPTtaUBhLkU7SHg9eH1L1fLCWrEPXHynLPsDQh8vHjzF48twFV9myWmGap4ccmKH21x",
  "key26": "5R9ktpDbMoFQzGvKb1qzDFRitEzgNYfJ4pDrQ1S3e3WSLFNw2T8h9vNGzfH7iEFi6odGXrV65b2srgyKSjFkTSbh",
  "key27": "ZfK4fHfjiVaybcrSrsBC2rNXtVpUViQPwypYEuVp1EaADm1VDg47R6vR8as387fWPDQXNuxiNskiWLP1hEooiA9",
  "key28": "7dXHHVkspJV9F5gS3AR5bXqumZf1kZdCmXGy6vuSRMz5onuNZQokP8wLNMt6fXKeapXXch7c8AzGbKMuyHzRM41",
  "key29": "3ahHAoPBQHd8kN32acKmDx4NBLELfFTZQj9myKLd9XYi9mRs5HX2rvaWj52NKprrxKGyAS7wUT5U3EmTD3YhwW9P",
  "key30": "46bcJrGdcHtCGTw9ypfz2vRcBxydkWdUHmEQ3fysceT9MJxZNWJtT9ZizhXMw7PmPkUGciETJqx4ZcwRGtSJpAqo",
  "key31": "3J5e7mxHaVxwvFNwhiEbLExTUHw5yTmp6vKPqt6LbZfxJW53oMuaBmarNgubsPXGycXjzo8E2r3MsZhZqavruVV6",
  "key32": "3ZJk2naG3sdmymVhF7XKUQD1nvj5Szgm32xenuXw16dYnTn8qpZag41y5qv5Ca63VhbLi2XTqDu2HwHYogVLqAwe",
  "key33": "2cvi6facZ8DQ1AC9GNHpFZZXcmLkbTYvhwgsiWVSic6jUTyTgkD51ongrTzGSmMFqHr5qtYB4GyuytLgVpig4hRZ",
  "key34": "57SXVFEidGeh4ZeyxmyoVHdJeoVNoo6h653EhNs8yorga2b1emHK4mWmGskQKjCyeqykSSNy1efjHiapp2Q4g9vb",
  "key35": "4Dq2dqWCSAjyEwCcWBgSWptftyX5gHE7FU7JFG5P1MHWtsdSLjKQJqEkpVqJ7iHNAgyADyBo1syQ5JWKReHLz5PE",
  "key36": "2FuGkaDMU8SPGrbwi8HRZmkdCuDonxK7YCa1rpa1WFrwWSRNuRW5nWtnbfSQkZdaz7e9e7H9iwPZDpJHFhJkvxvC",
  "key37": "2UBUcfA7aA8LqEbDuk8nKSPXRQvR3VLYRNwxCmo9u7hRrGCZgASrh1eFwHpvUqH9XfeonTXwmJ9845UiDsDVwEJR"
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
