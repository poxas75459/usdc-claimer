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
    "2ogRoaMhVqBj6jWNEQNXfxgqPRp5AQUDYJ6BJpkczi3yVgCVHJ4AxXCKidKft1U1ncVnp8PEqFKPFsGhcJFHefz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRDchExEnz7RJKsY3k5jyGf9rbFPXoz4WSZetNVcfmAGHVndwKdy5G9LdtRL8N2gA1r55T3Qet7EXErfNitMcuF",
  "key1": "56yHFkUK5mX7qgJZTPCUVnmmYQzJ8dxMDwewt6gRwQFDhQdqC1nEmiRESRu9HrwT2MYeaoCtikKBUhXGqiDVWKSh",
  "key2": "snfpWDbRA9JRTniXGrkwmmpLvRRLWd1Yde7i24yD3kGLHFb3cXFJBAJzDk9C8rbTqPDBR4hVgghTMb2HiJdKLWV",
  "key3": "2HfaanUn7b9uR9gyWteSr8dqjihjAx1cRW3fS3Jt4iFG3mmDoxiw7owxTT5rSErd63noL6zN2hhwixz8SEMiTYUp",
  "key4": "3sYyvktRYcQKGunD2hDcaME2HJbxjyXWP1VK3X2byDenp697GUfBKR9C94G8ZvEvt2XUaSu4hQSo3v2EPRYbcteo",
  "key5": "35JFPFnPEPuehsibqGm1zZBsCNBck5oHuqLb2GeqP9iPbJBeoryNtwEbx6EAbuqMnSeBw9ds86YAUtqze8mi7Hy4",
  "key6": "29NsqgyyutaNoPti55qtYJVDW44782BwkN9wWYmPxWuBCFNynExyGjcctx4qKYJUyPUseBVqc9axSDPLcSqvtLXQ",
  "key7": "5q7zVQZTC2hr539CFHsUFfqtbAfFGY9fQmwk8iqKXeHpBq2R11TdXphBJHPun1mcZ1bxZPmt3ETs5Z2T1fdfuvAS",
  "key8": "4f5xEyfyu44Rj4hVppo28STxaHdSntwrWhMdrMqUV2Qzz8aBwZrwwGfPdFJ6BhPp7gVRAoi9uyNz7EzHeMkZLyL8",
  "key9": "3nVCGJwumcDKqEBE1s3MYmnCitKRxTxtRrBjWVrwBxoYfqcA193ceuUhq5EAPcQ286wA7i6eRt1vAYJQAb1u4yi",
  "key10": "5dgS9MEhJg74mNQSmYLUmog3ekZtYZYJDSqEcheenWTc2hJVYSbycZCjKwqmJEKMYJZcARFi96uGKEGwf88sMiWy",
  "key11": "54KTqcGGs5wBjjxvyEEnSq6Do8bu51KaJiNEPbfKvRNrv71H5b11Dku9mrZfjitHHMrRf5ekwZV3uYRQKjMaaAZf",
  "key12": "5xDHCNwq1kYM41jPjBT5ArPTKveCb1684qK22i2Gz96MauVueZxoPUnBksLkex4sdHoM7oGSNjqv5TxyT1MnWpXG",
  "key13": "57tFhAfsegBZh7Joj2n1ko53gUgnzj64Got1ypeqnAUYJXQ6pbyjYq32JwebQdgne5KW9pVtXdcUdxvpPtppRygs",
  "key14": "xKZUSGcYVND31H6NNaoYJV3FVipeo9pjEn8EcgQqmdTM6Ude6SDhUkz1fF6NkbQNRxYvzFLqEFham6Fuwwg86DE",
  "key15": "GeEyoBSb31DJ5cc9v2kxkz1c9C1nENN8BbUPXooHxKqSoAmYdscw1mM2gwxFuU11d8r5rMZNZ423pfxC3iFzycB",
  "key16": "2H7dZcBF1NcaMvw1Zimfq8W9SdDo67U9dPMBbWXFgDc85eCAwywKgQEKscJW9MAxx2XyQSZ5ZCKQrXgqzT1MZHBy",
  "key17": "3VRV7fC8x66WHoK75XfM3HwcT9AwrF48jPiCmBa2xTxTdVcKb5kXwyks7ce2sACEuTY9Hbik5YzR8MwhRuEWuWKe",
  "key18": "3zmbAwkXiKs2DTwDRzVZrwYNNT1ECDvZKkX2yo7MNFP1KFQovdqTijL18yS3r9wrHBJY8YpVJTTShxmJikjxf6EC",
  "key19": "4gybsBL7kEvnnR4Bc2SUN12HY38kLz5jWa3vxtYeesDntChNMYUJmuUk7mZEkPs7bormfg6saMLFauffdeENsXTb",
  "key20": "32nVo8v3TdDySNam6KYNRAQvWFNeRVWNsK6XMfJfCGpYYXLZnPXNBrJRru8Hri1CgSVeL5MHiLaG27To6enfmmvH",
  "key21": "5t9gT3rW6ivVSjzoqy4z1ENLovctixKoP9hknuSB6yWCEeGZGdhVUzuePw3saLNPrudfXqRitJBbbY3uwRjmmBFZ",
  "key22": "45ys2Gd6HCtFfb7wQNN24AnDTVozx15i1emLBjStifu9QhCpCFT1QA9T4f3truGXGYCGufNbfWoH9LDVRSCkRNj4",
  "key23": "24D6BDx1A5kEpVk8Eo2k67wLhBF5AcfxmHUWZ1Lx2BdWSDn8PQuBaMFk6xgFzDL1pZZbJucYUDemUbYt8xF1B5Ub",
  "key24": "3KcvCKFnB1xC24XjLHLgC8VuKkgEcrqwYmk1J9KTfgN3ixMyzowyyBg2tZQwGeWugAvWXEwYwwDTV2ye1ZwoTT9u",
  "key25": "3WLM2cXhwozME4xdEDrEewC7P58irnDWEw8DpDiK7CLXDs2vxyf8dsGprRcv9pznNzkQ6CqEQjYN65SGpbkBQwzz",
  "key26": "aMM4Rcnocd7FLdm4QNuxXKHWmGDHndNmMRGsN2VdQGSw88Pgzb1yuwChycprhza8CVCNkxgJE3Rrianvr7JS2z4",
  "key27": "3R5zgLtmUz98u2ASYL1ie2Ypz2xDxqoNwVbBjxmEJ3BXKjzGhHZoYVpQYLE3LynKY4d7cyiQfDFgHzuiP2ZEK8RE",
  "key28": "4AfKZYr3mcTB1qFzWPpH1Huw5ZFC3gydELaLr1u1VaHD4HE16APdUWpK4TAEUQ44CMYw8YkoJ5zQw22eFhY8RxnM",
  "key29": "4R3TJAsdx7rAipGGAqZAKdY9PZV2HYa24oXivC6YNVaSb66t3fbJd453EjRvQ9cqt6KHNWrFxBzj92W7g3ccBRTA",
  "key30": "34yiopzcgphZVeQ6CJAvCqWD6DRuHBSJ3Ve7cvbSVxcARWWnGerappuHkGYNMMh5KTNk8QdwQnJd1Jt2hscwRR9x",
  "key31": "p84HHUbiVNUf9twSB5qRatZWoixzgSUe7tt14HJngHzXrtiuuUxFtig1s5CwSLqfCpop9sAW4jUygVT1PrQqBqt",
  "key32": "fH6FDvid6hVwYbiYHsHyCmRbz7cNAE9VjfxqoCeBTvCz9aGZ1LuKmSFmFQs8B56fJ3tq9CGNXHWyZPKwtswfSb3",
  "key33": "M8w1X1qGUci5x4eymbYafDg7bFGaMtZzBMAxYJs8Nsr992E8tia5yfxzkANppDgAhtbLNB3Sw4N31zv5adDXhNb",
  "key34": "3ckX6omopeoFyYWBoHVUojwaqK8fPcKgp3kLzhpbMFQEFPrmGAw35bbG69Q8WEaUip8KrdzPDCvKo6iKyfuaFkcc",
  "key35": "5sM9duvU1Ym7z6kwdb2dohAZYXfu8mTWWLmZvmVKbn3XMHeqDbCiFTAJ69TJ58sEe54Nc6p91F2zrucST8qa1a7T",
  "key36": "4o7kyKvCCz2o2S81jwJUKtBbJz2aQiRPKjxTTZHu6uWdYstmn7UfwQEUxuisKApB7iLM9JwQhFLoYF4zXHSxUnum",
  "key37": "Y1kpMvXvqU1tRRpjg7Re8BY8NVYTw3vbLszwrAEQVKH9R1ALmxsBB4mPzsZWvyubb21Z12fALqYREPGC1ioaY5z",
  "key38": "jzuACRXew7BgrBVMvJtQHNTKwtczCr43Jy65mcSHaSZumbA85sdcgJfuDz1AEjCwoYzbWhiTPVJapejypZQpQac",
  "key39": "4n8iKFJJTLm2P9B6BqNEQBYkH7bMi6B4Mgw8Pw4LLF6sEsVUPyLmzYbLwuLHhwMpouNeZUDi4VfJXDo295qvEmg9"
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
