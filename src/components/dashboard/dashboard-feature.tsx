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
    "5fgAtEoeHNJH8mbpMyQ9HBJ2WEJnSMXGA9w4WNSa3ag6oaCkhsk8F5975TLwpa5yc3H7WnaLeevyXrBeX8PVQmuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U99FBtXfbMc5Rz1qinSuXN3F7CbkCdwGrpHvQ54nm5HtJQvAg6PUjVJUaf7sLdfKFzue2tettM1CM8JAH7XAemj",
  "key1": "5egksHq2dGbxrirCxC9ZkGS3TAGHHMLLkGzW7UBPTS19xYzAD9mWBh3GG4Lw3KxBQCPvubDyZPepKGPxjjjCkkPH",
  "key2": "3n8CtZ6UiLNKVJwZLcaAT44H178NqmXfDz3BuETive1mEdwwyTYMHEjZ4GanvSaTB4m5DVPR3kSqzcDMm6kSxzYE",
  "key3": "2CCg4pAcuu4Jfzhrovg5UHEUjbAdZeitGap7imewUERAWUGd54xcrLMLmHyrTVNkNnSjaEiDSTir6WtL7wVCMeg6",
  "key4": "41DyuZkgHXsttGHd1MeebbcnikW2oP3Td34Xeb9vbaByMoiyVAsxZV4PsTPTTKdsKYAysUxZWd6Dsu4zmFCrYYEA",
  "key5": "tytfMukCCwD1SW2HmDmStYdHb2G6F9EdruBGzEVrCB6Sjohberqesewd4sKzdwjhcxUTudxHfMMvZWbFpr3E6Cb",
  "key6": "X2dKnqzf2t3SuPwpGt5cWivQm9DoiRVY6vEUPLQiJuFLMd7Lhfpj8cgGBj8Z3CkWcj4g9tMoSnuTPfeUuLbf41e",
  "key7": "24GLyRVs45LYY99UKHfVnHRyM5cugkwyTBtMHwtT3JVgY1TJJTds64LiNbm47PCv1UZt2qgZbAcQLr3JRKW615nR",
  "key8": "5Vo5F2PN81MDRQo8jpSnUaaLQEqoqPS5dLwFDSMBkZ3ytSsoeVit3Q11NVSYt4KVAPSvAxovVFxfquMMdRWmXAub",
  "key9": "5LdvYXN1dc1dhpP9zkgy7jdBcEEZycEJZwiVmZuyrJ89mos6HMRpqeyybvQmpiyPCGE5u83QUS5CkAnw7DXE4Ve4",
  "key10": "5LsvxFA4ySTZyvrLhxqnPkiziC8JPARr43EhWTaZVEEgc1SjNDyJ4MRXVXD2oCQK5YxUbs3HPjbykDtJyFLunF29",
  "key11": "2HdjL9938ARBPTPZW5anSgkvnL3ytooby8zzPRGDMaJu5o9TUHZyzeCKDZ87fWVSkobLs34boSf3ARbc2PfLFAmr",
  "key12": "48haJombxEw5AxEZ5xtZj2B9GwjsDg2dtVzRcQBiDnpcjfFveyzMiqhRWWHYMSrLvccz9RuvKGEcALCXZbwPzcWf",
  "key13": "4vhVKpUf1Sj6ZixPQFqENS51TFB3LrsVTEjLeUnkBxqJLCVmco7rJxgvpeSRaAPfRdChfkgsAFvtMe7rjXam9588",
  "key14": "4AngP2Qum3xMe6rT8JairUXZS1sCxg1LBim4WvAghFa8sa8hizrzix6e2GwNmx5Z4dmzjLUuuJQdeBW5d2u4Yspp",
  "key15": "XYk8tAnnTpX7JnvV2Rh4wNqzSSAJ3i4KjnM3JAc9DXr1iDLMVRif9iRLCgeA9wS22ke5yxQV9znhbeUmDjeawnE",
  "key16": "5XXuiK4XwKB11QGRRhPACzikM2g3ngxpSsZLyCRwvSxrjrdtwG5eyooddHYsXHPMNyBETVRojjSY94K98i9R8LR4",
  "key17": "2SonXisqnwgDJp3Qd84tzYUzBthcto6UCx6G4YW3K2EAqxWFkfvKFL3AMM31H8YzKUfgZcCnNvBVD67tLjAsE6hc",
  "key18": "662Za1vztrFThnYoJeqL3UqNNwPrrwQuMPhQqsAUtkUAFByoiAHL3PSrk7CQ1nRzxGQ83T2wy9wh1SGY8Vc2Qwa7",
  "key19": "2AKcAnLhVpRiMkRyBeERSbyqy5uuN1HdMf9q1Zz15dNpnsP8VsriNkmUiM9Ru9YB73kGRzjmwo35LDgdbZ6jbrqv",
  "key20": "5bGD64w23iwft7a7eoQXGsGhavehpuYqXzfS4WtFu91q9jtVXnvfWDgSQrV1gtPhvyQLRBmUEhBC2RJpozwrNjSH",
  "key21": "2oG9BfoG29zAXmhMVzmB1A5LKWHArZ5WNHHtHhQAgmfjtJM7jMrUiBSG1aaMe3968kK213SZXqBPfFhuXPUMdxUy",
  "key22": "4mNqYxk2pmEnKGWePMGU744JV4TTa5WkanDMBD1ywwHGRBNXaCgH4RFkZqiRQcNbikQZG8YVdVztiAGA4sZWbDJ9",
  "key23": "2akDyJ2EeqCk5QJw9LWRZNQqwEJcVMUzGYJSPdyqc8jGbw2MBu694ftYwyiETZGS6uYiWxGgHnDxC1n3wb6SzCeF",
  "key24": "64FwspFodmqoEVF86BGGE5FDE6QC6Mb5MK1svYsYjbWL2Bifg6NAojyHFEPp54mScsWG9jeGd84puJkDv2Z4ndPw",
  "key25": "S7EcLorBaSYjqssPdXKxfNHMBN4WJT4WN7WUz8x13ihsBKPDfTE5P6jxxhWLdbwRG123QkBiY6wUTNgNCWeZSTr",
  "key26": "3TK2snp2JgLVEmQ666x9dxw8ZPNQ2KcnsmLiXA1fcwYD5CdU2LjM382xzRr8K7XYHVzp8npWeKeU6auBSTDi6h47",
  "key27": "2FiqvL7UeQDcZCBsiqcja4PxhcqqjYx3g4AkyMhQxPikh4RN7vo6rDjnMC4XbVbXCfkqGFPxhPoDydKaYYuV6qSR",
  "key28": "bvC7qoqPJ9V52zqNrG1gdfdLKDfg3HazmWGCdayLhYEYDqchgnCBjoBmzTaQfCM2nucVy9CYubG7RLy1Vy8PbZ8",
  "key29": "mb17PVM41t6GAQCJbcMGGAQvPhvpCyGuf6kVk8KtjYtKAWCsog3oSKJMfGP3yUBJm83bHxCD1uMDGxVWpybKmbF",
  "key30": "32osCp4s3kGCev1mrpkUZXwMt8MeRgWV5uU5zjSVefqRUbwemXG9CfBAgp5Mzoym41xqtz1Y1r9xURFPBYihHXQb",
  "key31": "5ZBy9b85KZgbi4xVDPqKFwYjpQceVoHsChpNSFqFDrWVpeYyAFDs8onMCXKZb1DFHeoEEw4R7mgN3b4KW3Kxp7XM",
  "key32": "3BbMwFzD7sSVbS7xQdXR5iy3YRPEEXhnQCts4RA7SRXM49cHbTTb1zy18kNbuhkyGfryj2yd6PVDLuZWfhiozV9y",
  "key33": "2EyKhA4wBVpw34XMuRecAyyJw3hhbmeTNmKQdwRp4zKyMTNmC4CAALR59WsJXCxq3Rr2pv9DkDiZ582HUFTUMSpb",
  "key34": "Pn1JPH5CgHUwf1Jk3Zd3GxaCryS9f1nS5nuWAqrgkupkVdWiKkeRM2Lb3ziu94UmzXRxYBhNTvFQYcfqeeMMCVQ",
  "key35": "62Vu1uJ9w97A3FqoAwxdBC3mwsbs1zfQoPEZ2xUHRW2JH9SCnsLbFbY5P8mYqw8YsLiu8FMo3wYMtWFZAqTwG2c",
  "key36": "5M6GSk1FQj6up2QpTvbFV8o17V3pDm4jHg297C37mmqfth4uKsvPZpu6Ciphfw8MuCGhHCWuSYFfU3CV7uTa8Z94",
  "key37": "5pQpjgFze83kphvf8oPzhMdC5xjMKAhk3voWYZTrMK6ajKRDDXWqNJrux7RoreQxAa9tAW1hR3LZpwZtz9wLNdpE",
  "key38": "41QBezaiNrird2gsdPjzYHpJegP2NR4qmeeDYLZhV2W4rZwPwkp7MR8TfM2QSJh5JnPg2ys5FR8V2Qw4XFK5yRXg",
  "key39": "mDCMCEKoN6KshRyD2d6XxH6YpXnyMCptFMiJXdS9QUNsZjhc38rT5H43ESDCSdM5j8duo4gzAEnPkKkCVm2cPGR",
  "key40": "AdGuYeiDQFMoTVEXgH46mqWuKdEJDttQAW46q4MqLE7FYZhK8gKd9CfiM46MPiyWHocQagG6TcGCoR7CV8s5xYo",
  "key41": "5JtHXfn4fT3SwRijqbwagjuByYx8FFtWdZ6fsWTcdY9sb2hLRMK7nohpcXk1q3SD4B3VUPWAYk8NLUqKZHGxqB14",
  "key42": "pwpKMQhmoNQCfTT5FH6DjeDM4rinAap8nTvsHfSRe2TCRi94fjvna7An3TNzgg2oMqv98EbgWQxbt9LpqW4SjnC",
  "key43": "3eNBdokrscntZHMzbZDceZs1AZasu8oi2KpeVTugXXStfiA7U6ScFNSkMhAs2SnX5LPde8pL5gX8Kc971rDDQR64",
  "key44": "4h1du2fbxxUjDByUA55isD9NV5J7TMMKGGD8TLpB6ddBWDAPufD77SgtJhQye39SJMAYMAjzugKpW1fKW8Q2o9Pe",
  "key45": "2Ni8CVopf4VNbcKycMDX3tXN7V47mpeSF9nFS31crCMLgUZbYtbCjWwah4s5taZEg4LKFLA8DVZB5q2LaAcWmK6s"
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
