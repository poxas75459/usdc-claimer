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
    "APpw4GG1dg9kD73pZj5uQMygA5ykyPHkVr12EoZ1kQ3fAx4wmUduaLFYGtQ62CCtxfTPvoZSELrS1gSHRVfaQvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qexEuZiKPF2SAehbYPKnQCHwW15ym5zr48e1LjZRUXQVgu9hti8dm4woU5cxBsotwbaurYZGMp4GsENZQrN6QGt",
  "key1": "4ZSzCGnRJbwP6nqQRCvNwKjNQJiTkMEqrCn7ywQNkAEv22QyzjnxBMmfyTjtjvNGtmPfqeJ8JYxighVzrdE5YBrf",
  "key2": "bK11E3kb2nhAZdNuLuqcJeJvduxFe3ar4RrhusYT8qMdEvk44xFuuYnwqNdP3pJqw9siETCcFsBex8orQxuqg1S",
  "key3": "3NvxDdF8NKhw2BRWEFc2fMvBLJzsCH7N5QJW39U1ucv4S5QWw1LUJAZqgmFeVR9bco2Y12NSTTeD4UnWnLoYN286",
  "key4": "66BebJEfUy3o2GQj9kZXUyEkKtjMKdWjom6C7U59D6d1R8ypYHXiJPRtwNAk3nAsYVsT9rEFRJjdX4eDnsHWTFCi",
  "key5": "4KubLbm3YBypwYsTPGP54JmUrwhJsKFsvBbSfd4z8gV87RD5vfvyMWEKNPcUAvbpX2qqA48sHay5wVEZjrdMtsYt",
  "key6": "2hSvGnonEBq2oALwHXej3ZgsXoaFn5icuyYQmaLQyXgyE2PRmFkgaDdCT4qCzQ5WkVAx7gpvNhugfx41bDTEptM2",
  "key7": "2L3hjgP5cMUGD8PAg3RMgfFL5QyT3Us9zZ2Zvh1j5FtYLLGccjL3RzprWiM2EnNxYaZZpqsDizjwxCXB2herp7yw",
  "key8": "2nWFrqRrgZHUGRDYpcJd8J8VfRuLAdWTpeaR79n4XhhFT6a1f2GTAazZsSXBni2VJU7uvLVBuANfcka9KjdMANMg",
  "key9": "2Z24h2MPD6NsMy4LBUFp7fcQW4saDXbhx1RG3aTEc72WwX1aJNAq2Kzh7SRw436XivF1Cega1fdT1icHoR2DGxwC",
  "key10": "2v9z3RKKwQnd7NX2ufrxYhoy2JCdGHbEmB9yKpE1sWPRdNptioioQGho15STtCQZGjgqw1sVk3iPMjvwJvJF6Fo7",
  "key11": "2YcstStYticE4jBsJBJPB2txdLr8haBht3QJvYsNmDEvWCK3LJJ2Kgan9b14bD5qo1ivQo8qC8RTMtBAoQUfsC3M",
  "key12": "3Sx4tsBCvw4rhtzpuCYYe1QwgVnpeq2ZjptVtYHQRsKwYztjYhprR3Xb8SJ4b7ZpMppQABNHL2v698z87qontpnn",
  "key13": "nyYxtckid1oDE5oGsaHY8ZCgeu27k5yrfzXcMcwCN8avzY5pwAVH7w3pEwgtNFmCjwvmUkZHaRiVzuPAFTNpBJZ",
  "key14": "2KS86GijSXNrhrhzTh4FWdAedniYcHbfYyYRizGPjk5a6X9XgumEDioPzvoWgh2F8jomGcgjgmAnhdBUHAkcMx4J",
  "key15": "5yQVc9pkRPHghB4g2kaTDQGtCc3CkeYHvjJ6JtWra95jkN9CtbcwHVdEZZTNPb1GFucNhynFk7orLTqZ6ZQwUQRm",
  "key16": "4a2NazvWyK7p8JRic7oJpsRzFKLXeZxg63W28gdWUA6iWcJxk94ZQ1MZHwXxEMtatsCiCEU4Xo5YBFYgghCtyAGr",
  "key17": "2NWeXUWW13b7Ra3xCmbathbPcNWtZLCJgPpmnZJQ6dapwf2TaNKk1VU4bkd7Wp6y1KkWBgq4KN1UrrTrL6CYy2sM",
  "key18": "5DQQbMUnD4woLaBC9Da9JhUE9BQccfvUo9Jd5HzxfXoKBriAgzBVu6KFXU26bgYFJxiUY2EsaNbh1BTA4BMQEP3x",
  "key19": "pr2ds8b7B52JUxHotQffAcm3HnTnCJH97kWCajy7rEd1g5DBB5ZDd8Ecm5Aa5JxbzPuVtjSZoxyPDZ5CBnMnJbc",
  "key20": "4gH1yaMb293bhauCuqfxvAKHurFZHgZsFf7NStJS4Ns47hmJ81KXjhAQwQ5DtJKxwuZzoH6rhey7vvTPD2YQnsZW",
  "key21": "65PD9vWrtoP419Jd4JFoDLt47EyRA3hxuUMr9ov9YtjbZxTSui1rSwdFjm13fYKsSAdJDdguMTRPpgfsKw2wDQL2",
  "key22": "4A11pE8CutMUmKxjEUPfBRq4aNVkko9uznrqheN4a2VcrKy5gFi383dtp5MQZY6S2xDXQsNis5TVQmkBLuWMfXVA",
  "key23": "3h3y8nBzFZzuU7DTavcbKgfkTresKw6ippKQdbQkCAJk9PEVy4cemHGDRFRANqxAvRuMfcUdEksce4tUkagUqDvy",
  "key24": "5z6YyaNbHhd6Frr8THHiMW8tMuLXQA1nEkW4UMapcp9mWz4NG3HjbX4inLCYceg7mbaoAcXMR7qoh34em8Ly9k4A",
  "key25": "39FBECTDt9rhnLD9faRSiqeiAK5ersdiWTopFcC25ZHxq7GwxqFUAGCsDCpY7JUiirYTDhXgpTjBeApjPDajYzSo",
  "key26": "21G9FD6tpPeovbcHFK8aY4VGaT84F4ZLLzUFawMtu3tQ4dUKqp172e15Mog5md3j2qfVV6hhjsLXoMdy8qLJwJ7e",
  "key27": "37jsk4vN5WW5EsfTcMp9w8WoF4QaHwgzqJ8nrbt28s9TkWW29hgFsRaceYTrekp6f7v2stjBu1pf5wrLq1141rL5",
  "key28": "34GWAbpBkU64YeZFHYHTTSp2JDVRhzJntpDgxQJdVdi1ggCd66vMwqiurn2WK1CvqoqEDGJGYUeCidKS8sj6RXqD",
  "key29": "5y3RDfG3Qmmzh1ZFiUYcdU8NAskXQUvj9snLN2B56AncqzmdkvV5cetKGyabPTRA79PDfTppfWNht7Zid8ae4S1w"
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
