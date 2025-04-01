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
    "3GZF7BetmwhgFL37HVdxTFUyKJ7GDkY2iBihZAXtEQKBuK9cNZ86hYHamniu2vsjWkjDptD43PmBuLvdNpLqaVQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwXv2YipQWya4eRsAQFNRAqV1GAi4k1tX6oCTpEaigGv1Pf4HSrCrMWvhoJu4FqEZgDX7bcQEEuXy28rV1gdK3n",
  "key1": "2aD9jXEYLSGkBSg5cgv9LMYo9NZFESbGZrEw7b24WuGKErMNV3tqg4THqQsz2viUSYPeSjSUeepR2DaopkyKP4Jo",
  "key2": "4oQthrPjrycRv1DBuUXsjoW6fNpS493dqD9he11ivnd34esMef8RmJCxbiD3h2CmsX3smuyvFYXvs9TZmZiZsPNt",
  "key3": "5CSmmBNwsJUdxEALTpLHSffxkq58Ki3JxSuxdPXgvK6w74a1r8ZCggAKEoiqTx9UtEDKQ3AcQ7dBwgbJLaCJSF4",
  "key4": "RHtbgRpNwY9yMjTsgmGhqR8wfiAATiz4hYvztiHKXQpe77hTYYQGYTm9vvPJs6zRszDmNyfpTwXdRpLifpfksgR",
  "key5": "2b8jDbBDrrhci5p1pdn8KjVYiUUVnejbCfb7W2Xbn8AZetzsGmuzZ1HtKQu6R8usMFizEnt69ssqqwHrxp4UKRCR",
  "key6": "4PNE38UQDKkjwiD2F61EFMz3XHVv4asugSbbu9CK1JL44UkND4AMHLHXVhE7udcGUnmgT4fv7NZVVPeVmBksYGrj",
  "key7": "5Mwna2zaJtj1U1mnzJkBfnBTmiiSEVfsYvJKGPVnghHxWdSJ8ZZW9FgwtudUZTxYeBoMiAddqzLwa8P9Kojnt6DN",
  "key8": "4XReQrRih87hMLphE4upupxjkoFZ6zy2sbwJappDfs6yFZXVMKDaF4pujwy3eJuygsAtczsxNCq5SpaK6uGEifqx",
  "key9": "2NByc3nJE9cPkEbLffRzgfAscLGymnMf7xHPMvsQhG6ZcwNQP3EL1RuJpCD7cS7BuPkhiZ63H6hnZPgaJLNrcwP4",
  "key10": "3a1ZwryzCjkRoD4M8ocQ1KKbHEQpMJ86sLiLyZtKqniZ2kXNT37tLft7BPmcmVa84j3xNZiC5HdSmqUh8nrXGB4b",
  "key11": "KvjeTZb3qAeRcUHkNxPcTmg8dAy7qdW1uXUqZgGSVuzzRBUa6pqdQm2EfwPG7nidyqKwrW8qXvHxcQzh3mDgVv6",
  "key12": "RPinBR38zkUFY8NEKNsaNGXJpug4ou7UCjAvkfvgR5S49ZuC1pVD8Gm33wRvMCKdaBWXKR4yLHUiACMWP4u6HYt",
  "key13": "5VTb3yQYWVVdEVKoZ9jh3poaZLTqikYWuxVfCQRLhK91BjpCnZ7xcYRR6owZDpRwDurwJHYH7KkxSzjoV6kGSnTZ",
  "key14": "411rpgr3DcLpAf9U6mt982H1zgvHUfU7mEjUHMuFab46EpEhZkiJrNKE2bjAUYEFy8ESstRXM8JexGgjpBeXgmKc",
  "key15": "3pWtEBH1XYCYqfvkjeLzbdobeQ6se3T4qMQWvBWiFxagJaJ6gpNhBrcwLUsyjPus1Ugs8jEH3V2ieConJ5AW8K9Q",
  "key16": "2PAsiUZe6xcRPBNGa2ZHXfkZzxsNQkTgtWFtahMPErm8whnPgMLashbucTQaJNUdrTASTxnPB9CMhGHaLtJzZo9Y",
  "key17": "w3GpYWP4yQrqCSHm5w486XBHDtLpABqCi7oxLEbuPfygDJieu9hCTwhNjFa6QjdcpKUWnwkSMNcvFFdLydu3qNk",
  "key18": "414yMBCWCrf9JETUd1LT9DWpQDmGTaNjqFr5QdukNRkLpJVZ95Hy68UNZdvXYtwBXbkdNv79wdHjjrS9AGCCcckx",
  "key19": "2FPPrvk8K5pmxa9kP6fccHTdiPhiegDCyvdnb3ptLFv5sGkD9hjcuZyNBz2zVDgSBruDiqXcF8Lfh6onL2HaicR1",
  "key20": "KQEqcn4pTrbar4EBK7jeiBn196BgVNF31ipiAwHTVcsU8mrkP3Zgbw4zvkk1TQdn6t3HxiWyzYKWb3cCpGk1EfC",
  "key21": "2D8NoFqXafaom9hvoTq7vucSikpKZwbo7nFTvH1F1jtHY2VXdoYfbed9jVjYPv8fMAwpYLdmQvRY4w2X2LAyrPGb",
  "key22": "4NPf8zPnmo6Z2KXrfwyNvFW78YSYNdBBjk5jVtsXN6XPBy5892NaDRovfDDax8csT7g7sFWjjpyDbanT8v7HqbRc",
  "key23": "5Kq4VrL9Hda3g9BU5W5FvcsrJ5d6EV2peicWa5XFo5iptArTxAcqgwUTkGtmNzpQURnpw2imxJexTfpFn1QG6LQu",
  "key24": "27JL6PanTdY5qgmEP2hM1MypndYMn9zMk3tuoRQJcMjsgPYctzuoeH6Nh7MCKereGzJbeSqffL3VVZBgCN1CrhvC",
  "key25": "4sm96oeQvTKVWwu9LyDzfKvTgH9CH4qr59hwx3dLmyKePdXKaAr8AQjuSLKenMiTRYhyCLfxUaGMrx6N7Lak1qzD",
  "key26": "qHxRkzLJY9Zf9Z82DmHwbxY4GfgBwU6nnpc2eSnZRkvYUWENH2hJYvNoydt9Q8xBqG62vi6wEsPefC9YCucP5Sd",
  "key27": "556eJ4Hh8iJ84ZDaz5d4qPSdQogBUcov8ZSu5Ju6hC5jHJoMQrXhT2AVK3gi4oaUrufNRezGLEWecaePvDHgRKK7",
  "key28": "5F9ruCbgvg4tpbp8FPCgZZE6mCudExG3CXBvXsLDq5BQ9EzGifi1TNyKHfmrEKSbMzHwXJWWTU3hTH24EWuyqJSm",
  "key29": "26bio4y3BW2v3WuiPhypGphfDTmWmboYJ55dQzNaTuACrjpVoNMhf1qrmLn3h87pTwwpvJ7pgtPCdKgtzJjpaL4e",
  "key30": "5Q4d7JrRnGcmZto5uHHYPVZYHUmyQY229vwDyMAkdZ1x2brRSmyPXobL72wCVYtnoBifcXMqiCvv6tPor6SC121X"
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
