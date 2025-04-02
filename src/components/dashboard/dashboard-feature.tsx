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
    "4royuQYWRhKVR1WPxkVXq5qDQLcd2w6iVMgHT7ZQ6b4GEuNBX9x8Ezo2H67bPSyTwqKh8ufkUGU57y4tJw5MSJQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFwdzinq31DLMhc8ykCCNip111NeVpWRFjevAEwmtvnP8gbaZZohMhjGcNHKRAtSGxWCjojzS6NjqCXVyfKL9Q4",
  "key1": "5eUqCTqHmRdgNwbB1wDaxuTN4BwpC2SJpKUZVyQkjNvuF9iSGU6ncxFk3GchbUynsiz3B2zdEo5Jer5Sva9KkREo",
  "key2": "uNzovA2Ec3hppRzKtBUy4EhiukfwVr2PwKqierF894cSyvMoskLRUpChnxUm4bmNHcugUNqaFAxRzzWNUk1ip2T",
  "key3": "FVuzYBXPkcxywWoRhUDcXX4ZqsVLP7d5PYfTKM3r2eoHmmFDeHWLL95QbwtkUay15YsaZeNo1cJYf78g2KxxG7P",
  "key4": "4u5rngoo8k7YFq5B3JtYGqJaDS75bWoVYa9nUB5odw9vsYMTii2Vmxv4AhVWF5en5amHFzg172SyqFEA1Yo1Do6t",
  "key5": "3Hi3HnGSSwiXYwH8B9sePGuKMqShKAJy37bMBxr3cVCnv9G5bA9pjrqfvuAJRy2yYKefciCpVoATrY6PeP8iqMKv",
  "key6": "4VZmnMCBHn2q7Fu85LBeQMqXnEQRaW3eyuzEfQhtYgmSZCfvbPu79JqircYonWfh7C836KD5yT82U2TgEWPDZ4hK",
  "key7": "o45PYfnZdK3nVfasP9k65PiMhr5HZNY1fmRxHixJJUAZrX45V6nX5sgP2cKPYvG7xpJMcoGCdy63jbfctqUdaiZ",
  "key8": "57WwANRd4a4g5JQ1w8AQL25H2wdWZo7qwwjNqY1PGUMWS9WaLnKhhCHNcQcTvPuemgSjZge7FeMgr8cCwYmAs4mZ",
  "key9": "dSqBrisuYgAxV83XZgerQGP4BSbb9D13YHWy4TTQvar9NhCEwKvu5ZvK3eKZp2k3jomvN1jDx4zLeAPRyCg7HLd",
  "key10": "4M8yBDxsjbX25DbqeAMjKajvmRsR5t1oBcj4qCvnCQosRMUS9ysu7Bi98mrnD1MRuMNVGZbzLjpyGUxfA2ZTpN88",
  "key11": "MBpgyWr2n34cuTup5YXsGQ7JRPTXW9Sfg8sDyzbyrWyVNKwfMBh3sR8BcL8ATkqSDvDjgC2dNCE8UEwyxFTHWNp",
  "key12": "2ExEvMK5ZBfh1xPwJbUvrEfd9RCFniwP9ZfuZbWNavxdsJ6bPoBGAtS8QW9C6vVHaHnRjeW3FMGcCPGQVsZxJ6bz",
  "key13": "3BhqmSN6qpPrGmb5JZorqKMfxGy5bXTMeKaKv5M35bJR22BBpq1nMPRKc2nRWYZQdxL8cYboSZP2iwZGeARtjJSX",
  "key14": "3R8G8gBj8GhR9KNbHVYCZXJTDEmYctRpsVTgjdw7j3phtdFdKtW2H4myBNuSQZ3p8G3hKY3ybEtiYn3Gxvk4zu5g",
  "key15": "2NBRxy13sKy2zewXoin88H7EeVGcFvTJZWGqNn3JcEbTM3BDsGRJAV7wQiRW8YuRm9JCUyJWz2FN3EYzVWhYF5rQ",
  "key16": "3ZU2nXndkVKBPEFjgjcurTT3XfU4mTqymYdebGH5oAUMpMhGoBWA7VSz3hzLLbbuX43PfnnHEncr7nW348uSU32f",
  "key17": "4ZmTq9sB2ChcZcCXm7PJamiPDLyx5mLu1FNGmdDT8AvmHerGz4nakAevAdmRGPS7oCrx7aVKh3cqfEUyeTEbuhVu",
  "key18": "3eZgcttEkYTp7nLYCBH7gfdG22WyrcfrYJacJ5XK1HdryEqn5TQcutNVJVuD7ZPs1YNS9BkBp7rPYefuUznAT4co",
  "key19": "LpMsPkjFoFvVSPTtYJaeUaB6tWX5KvD3QWPNKdTpFw4cE2gybpWwMWDKsvunHxUARcapNTukjMfCXBGuyoFcEU9",
  "key20": "4L19A1YG7vktfh1TY7bLVwbMWabtBqEtmWZ4oBmiGE4DHAwBW7aLkdeRoSgLnHQyosaW1UJXfnvns8vn7HR7veAv",
  "key21": "4QydVZrM3hrr5sXMdcbYFToNgLjvbSBAGMNg82MxwMZx46zjx9Zr5zDZ8AwyshUSzeMWKtKkjQzSLkoZNYeWAWDk",
  "key22": "5f9HET8iqaHruZqp6xzDqGHfsCCD9Hjch1ndXFQcFghfaWH3LTPAcRa5VV3Vf7U5UdZaanbDsZAYDa2MkJGd1DRo",
  "key23": "TzXF6UL22LxstiaLXBxzYHssw2Z1WyWiYo3hCxjZRaCNaH1VPqUAoZhQ1vxKWS9yUFgdoMzbCyPxwmwdAFXNuWX",
  "key24": "2RM4wNcjx2KZgbsQMGNua7ugypfCGVZy1gPW5bpxr2J2EhbVpUDLuxKhHVby6MszR5pK6b15qhyDLu8sFSo9Gsi3",
  "key25": "5rxtwPnvSg3pXCn1SNbwHpTqacV9JQEyuvcF4oLrBbZVp6ePRc9DyfJMWJZnbWjgCQGEwsF5EzXpHDpTcXCEXibB",
  "key26": "3evoK7GXRDjnNvGEs9P4C7n4ES6CM8mANco5gamqjWQKmwhi9zmmNcTgQ1Vs5Q9dhze3PSXzkZzkKVpKQexgFhZB",
  "key27": "3vgR8XW55QJxZZSvvWQ5z5RGKPfQkXXEobSLZSf9LbSs7o7v1hKQ2MmDxNzUE3mxqFTPKUcMnGKrhEP2m8mWAxKz",
  "key28": "Ugf82YHwfFYk9Y3oJWBBwoYbsYuW9EbCFMP1XijDxzC2KcAeuJqTSUHEoQS9aUjhJz7LtFsT7U3eZcshvo7PcYW",
  "key29": "4SGrMWsyVynXjE47DrGCrG2NTsnv9NQWx2d43QvhTjyhc6HyajDiW7ocTYWE8BatmpmUyDmMxx4Rea9bJ7fhWmnT",
  "key30": "4Bm6hsdnLVx6uLBRiPHfsBPhdAb2s5GtZgpVBBDD3KeZa838AUyxqg5ChcddNaxp4KPUYysnBLcYZGXEFGxUycV4",
  "key31": "3oG3dJHuGpLRtEUeEujX8qZwfrpgdv38WsiYh7zvvDTqDoFgEaFVYEwqyE7AJeroEzZf2qyGQjRXQwj82F9an6jS",
  "key32": "5U3sQE7AEpCysjVP9RD4hTG831iPeDgCatq8UhnRE9NfK4dgo4hX8PhPCmhDvCNKkYumgXgGtpuBdtr5H53mkb4C",
  "key33": "26tPcdFSFSjCybHbjj3QDtQnNpmMkmPfyYBeKYE1irdRx8EvVTD9cVzWPxRHgPucmCQHUiGrKAhwh9Cb3DpGY6LT",
  "key34": "4aA1zg85nktNmd1W9bovmDQKmoij2MCAzrw7yeq1dgbtHh9kckMmE7nsjpkefd42HwAyQWAFnwD69KgMwL6bLEt7",
  "key35": "56tYzYC6J3GNq5Q4oim41kAKQoC5KbHfZHuhMZxmaZfz6dPQgx9hXywe2LXCNvh8hazKqJAWTVMtnLRB2XPcGHAd",
  "key36": "4rDUBLyXhkNuAqvbf7NrLrkmwRErdidxA8vC2Svdyd3KMpYNuxzVBvu79DnGTxDaGN7Vqd7b8cKs9ffrHfvkgRTe",
  "key37": "EARCb6ohAVm4P6hjERNAgCiQqs2n3XiAtCS9PUE4X6gYALsGV36NJ7BfegT9i2VMaVgAhM3Su6AxoBVhUrh4nE1",
  "key38": "2VQA738m1HEWceY5oE2AXNuXuH8dgwgZuKsPi1CJZwn5gKPMEVfGinvvXKemoqrh8C36NpFB23DHTdf3reckXvu1",
  "key39": "3d9Z3tgn8i2aV7sPjQUi9kpBFyx1DstKibVLhVZdjfyxEV4ssjBVBj51kY3dmzi5Q7etpR9FoSDXtkTTwuDn82Kn",
  "key40": "2bYYciCt3C8sXqq56CiMUBpATkL3uQhBJ2wmuh5wi2bUS9SxJTCsBQGQ1BNoEv9JiGaa8Pf9ibp43eosHaVSWGXi",
  "key41": "3AXMFwA4ELwGP2bLUwC5c2BGRbJWhBNVJRgEPhSo3x53xAeExzZPNJycsSuGQgYu3AGfY3WrMngvZ1PWoMeVeQrH",
  "key42": "5K3H1qzKnVbFzm7umJtm6n4ogwvBZb144XDnZwNSwG7QksnhhBgNGyfRzLfDTXctVuwaLR3B6PuCdNyLv2EF2Gen",
  "key43": "4zVQHBPuW6WZwGoDxS7S6Y8Q4T9Cc4AzBpix1vYJ3NoqcZixcYzFMMKvhfun9qYE9QKNp43p6DqvsukCKePC5HEK",
  "key44": "4LsriTd98rV1nmihkYvgYKyrSyG4wSeqPK6VVtjfG5emCN3Dqe5dH2owdqL2iM9zTMhEU3VowTcEDWQL5wz2hALi",
  "key45": "2dYM9Wo2wUterU9oouBJ9NgYmtqnsSjJo21FSmAekHyPJddN6Qw6d6M9zd7P14VvudxVtGwRpkTVFu8wz8MzGLnb"
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
