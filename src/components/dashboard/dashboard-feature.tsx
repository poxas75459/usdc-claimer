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
    "oJDNes6bTMzG1iATdcTWRyv4h4FsG4zFC9xcPdHDBU3RvATuodmJmXwTq22zw8axHQf6gVXhiCAU7okN4eUs5zR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vs2B41FZEhTmCcKfheoCESY3jGSVZFcatTBbLSCuMp29pF3jNsh2txuBF2oNma2PSmcbtx3UcspFQi9zwJWX7pF",
  "key1": "4sBBdtbwfwDixiRotBkfAHaQ452cAf36wG3nFtDhivMEHHM3HU6T2B7pt2eTvskKhwpMAowmnQQdyohoZt3L42ym",
  "key2": "Pwnr9wDGcEBoSoinWdAkpfqDKhaHSZoRFXPwjJE7o6Ta5oWAbZyZhZhYgXJj3AGcDGqp3ixDmSnPYZ7cr2mffZE",
  "key3": "4mMzD3GYuZQj6BSmcFdu2eCAnphT28iaEr6D8KnpyxnwZMoXCjHr4UTiMzUFcbDtmgVTcXDFMgU7R1vs1ZveE7s3",
  "key4": "QZCCVzLqycRbEWuBMsxGfnSCLYqhcMFJfN2kUtcbofDmDtFepv1SesBfpvmdPU8PFoTGzbyaPDqxP4V3y2yESmN",
  "key5": "5MW5BoqSdtmSmBABYng81rJzzNLjKHS2kfjBHri8werF71VhVNLvcdyA4UEq6EgaJGfK4DR9yE1egLNLDcTW7C2D",
  "key6": "n9UQnX4NTRc353oYDRoktSXv85WpiB8pTSfM9wJDSj9tPTiNSawRzRza8LEpfUmeiyyshF1AZak8hWWLCMPvdm7",
  "key7": "4WSNot8U1c16h51SDq7KVtMmsd1MWV5mxEZRkHJEQ8nZbEjhe1DK86xQZPbJ1NBsd9eWBzoxg2CXjdBKs9qBnZMt",
  "key8": "2eDWtqfCg82R1ULSzAxNcjc8T58dAcnStQH3dkFix6rxrtmifaCSHqbM5jGS3ddxdTWjUtnUnof8HHbbf8t4g2Fn",
  "key9": "2ngis5kaafdw4wFqK4tAmEFebaekBdUQcgbZa4523qnmdrrf8WSRUyJquVw32MbL3AUNFrvZHmdKHrJQL1RFRLhe",
  "key10": "3Rqhrihr5z8iKahNrqcT1RDwJvS2Jd1zkQthKrGikMifDr1DBMpjNAgtrVyQAidkMthHatVuK51PMpp6BB6h9EgD",
  "key11": "4YYfBJ6GtV9wDRTEQQh1v3AbfMDvM1YhkLPsB8irEFMjwj2X99Jc991nfASXJGM4yN2xYD1gvvpgGrDQ9sLwtwNZ",
  "key12": "4Gx6AVMBe4HUQXSbMWf76f3Lo9dedhCtTaA3dYG5mTNEZhPSZnWmF8Vr8VA8dmb6RwG7dBda4qMTDcMAgDHnjnKV",
  "key13": "3he5YJWuYUmMkuTKRyBNiiQQCHHGgYEX5qwVrtvBPiBK9m7VJFprib2kxi1npEXFTfVCNv5f5DbSnmfo9rWxMSPc",
  "key14": "4GY3Wk8Yx8fu2TsA8dnVWWCsRrnUqRfUV8Ne8g2G895ZJaZUDssWMttCCffduLJFPCQKPw32kNDWMvmuncb4sDvr",
  "key15": "4hPHEJ2aoRoCGN2u4QEDyu6CT4FEajJxzdCR81mAr8rJL7YEVdJnJ6Bf2NQsDEY2uoB3fB8W6s9CNDgt7zEnrkrF",
  "key16": "3Usu7PdHRFWiV6tzrBaafZpZFJKW24orowPcpkbbYzh6L5eMFu5bCa5N5DwzXojxbFCcjm5aZsQcCWS4hNgUjFP",
  "key17": "3QsMUsWDeNMuBGCnksLKmoX7d2PX6zG333eY4XZEvh9UXPZ7s85Njw3mnA9GPgL7xo7E6iTRwyGBKUFdrhyFvi12",
  "key18": "2QhEddFQ5qRoq8EEW82VkDeuDdSfjT3FKtAMabMkfp811QTNebL4f7PXxWPTGKsqwaKQ2ZoK2SMfzhnwKzvSK9tZ",
  "key19": "qeaQKxHs8CSjeYVPS5WqxEX7Gq3TfFHQ3nzRhXwZnDi4goq4bAN6C6JAau2CdexgRyCkZMiZ5ULeQegebcgNPsV",
  "key20": "4x2jYfY77MfhmfPTWdtZFXusVmN92pabmKxVDaKzxa1TY1NmYCsqugcEax5gyqAH9eDYbvb2tigig1kstM7LMKtk",
  "key21": "2c7Yqmt3qfjBvuphUuqDqxWpbb7Aop5jQGwzF8hv52PwRg8EyXjQWbHrsYL4mqbRtTi2DTzYySSPX5kVxqgCtsja",
  "key22": "4nwGnhVgRdXi9XPCdEAWS3Wqb8YnPTyoSrnLE5a36y4GKVreYbtLGJofD1zUMRKabG4zQ7BQzxAzncBxDwszPpq",
  "key23": "47u4t5gtCBLxNWB3iawyzLSDwSkWgpys4GBWm4vYUkzEKxo3v82hzwCqdrgCdvE1zSoiFc4MqzLy9oMjYeqTYB16",
  "key24": "61KhzGmfq4E6sxBGnV7d8zn7TBEgbXBLzDB9mRkCwcF5CxuyJtZagCbiP3GxZbNFtKkhyg9sMtWHjoA1NvrmuFHJ",
  "key25": "CXNfDzxFedB4xzD3qERVLBcAbVjsGJMQqMuCC63ePH5wJ2Z4XXNEknaXzZbhCY9tNiRJ51BZA28vRQGj3Gta3nx",
  "key26": "2sEaiyKchPdL4Y2q3miC1whXTSjwNVLBHsz57ukTiYPAj5xgbpJK82ooT66ca91hLAYzWK8PZq6N51Ka1SrbPpjs",
  "key27": "5Y1otA4h5wvzkLgQURnPEGRRY1J6TYt29AxhpHMj1L1kjJ4ZDKbyJFSy26bP3tmNbiUzmtKRopFV3QeyYwYkD1j1",
  "key28": "K6E3WFZiXH5P4xTnqtbzgnEqXdRcw515mc8kKujnFdn2wppxwiFqraP6rjJLsizMdm8Pn964wJkg7t9dV3iEATW"
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
