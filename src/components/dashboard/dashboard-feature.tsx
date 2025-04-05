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
    "2ojdyWUJi6HxMVSMcd9sKjHaVacxBkwobtcyW9mhqXvmYTLkVf9vCQ9DG2mKkSq8vPDLN1chXjPKo3ETi6DmJDgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zp5suYaTbU4D6n689gso1MEvp5KRodhUFL8pm9Zfipci42LKbm5HURcHSoMSRAvq8B9LhpBo9ErwHjwW4eN3TSf",
  "key1": "2fX7jTLi1uXxKsdQD3W2hJbq4Q6NRE1pcqNwhWTHPpEUP1W98ELwryGb5KiYTM6oVKcuzgnPjXLvdPMZrW3ygimJ",
  "key2": "3XJfv369BkBetGBdDM9h13fHKy6uUpo67ys5vni1PPRkDWcNmMkb4i7Tbe1YSbNRFxQsXMbSw6wht3qhVi33Afrn",
  "key3": "4y3bNYcowN9qAMwFuWt3D3EyPBsS1SzuPoL2DjyUzEhR3pDzCf5R5ochR9ewFkgPi89EjXuPWsHLnvUq57auSEAT",
  "key4": "2kXvJ6vTvQtKf7va7sFxgiWpkmY7DH9y4zTJBCUT5vtCxHBtEXVCHooRwKsZQHwQNrStCxuUMsEY5vnpq99XLQFp",
  "key5": "4pXLBaz7LC1MamoykfYgWKUm1eJHUzbSdUp9kEcTrkk2vodakoi4uGjNibEj6aaPcR8U5WZs4U31atKxpzxHQThZ",
  "key6": "51y4qG89Yn3tF35Poy6MLDcJvQoVNeGXPwFHuYozNBUsFqoYm9KbmmWAFAsUDnVdm5eiQbPh9bhFz79dGXHy6Vb3",
  "key7": "424TMwRTHC5FRdd2MLnXv9mXvTWcSyGw83UJm7DiYfbCqVRdSZLXXFN1q629WgKmVLqQau6jhENUUXFKQ4HFBGqa",
  "key8": "2aEeV9aSTJnL331agv2WjvhBTWJncGo87bnePVKd6ZVmVRPNdqBNFHohXvPWF9mUy8gqpKh5KNrXrTLa1v4iDsvF",
  "key9": "39h6FsKj3D3DJWJL5ofbZseCMf1gYB2RsNThxtsZGGEFwrC2NByTd2BVYVSdQJNrTwdoWrpYCgWAhdWo5Lvbv3tA",
  "key10": "2eXLh8z84tpPQhspsg5pmtUAdwtLDhBuK1MmN6m1FKbcRXmnZ5UnUFh4tLJSbPo7vz4oLtuDvQudzwfbBXNqNVS3",
  "key11": "RmoCfjrfFZ5iQ7SVXMf13SsfG2QFdp9HX5wLK7zSEVqUUcPfj93RSi7Dg5HGYws9HWyYfy9ubECNke8xrGq1ksd",
  "key12": "4nkdkAneM93TU23DYqXC5KG8v2HJXRvacdZLvJvJZ9QFSDPXVfihRWrsSjPLYJdNQTRjEvqwRZyBvmjpdJPK1tXZ",
  "key13": "JJWc3J9cb1s7E66EZBBb2pN2UFrqzh6Y7zvNGKeQYD2Jgo7154w8vdBkqVtKEpKJ4ZzRiLQnKtYR1PRmZgSXneX",
  "key14": "3UR51CnFPLS5chq9jTGvn1gsM6VmPz1M1imR5aqZ6qqjRAcfLvhDqEZBvhx8B3unCwEhp6zcKVbm7noDcZ2hwYxp",
  "key15": "448LzvTv2xRHhbyPVzUw7VPwJQ1RGDJeyD5YvXFLDd73mK9CNHuo42drpxp7wYG7sXcnMi4YCoDMp8XhYZPePc3F",
  "key16": "3dE3jvV97JgdD7uyBhkLkPGvUPxaMuWLS4DzmcHh2NYk8fRvBWMPU2GMKTttGzqMpZwAWeaAqwmQFgjXhfk2Rpku",
  "key17": "3RpsaG85SwnuhzXCUjnCSQWovLwYTZ6khJMPnLLGxgEeiUqLbxSPJE5PNo8MXtofpBSgTq6FLcFhm1yT3FS21FMN",
  "key18": "4CGwqAJLJwvVAcoVGpLaMQMByRxpB59oLgCzqGKYW6jR4QLRec6WcoiCvysxiGHxQuv2DNTW7gjiGb8SnKWY5rdM",
  "key19": "tiJcxXURaWEnMfkzwE8SQfKnmMvwkcdxp4MsLUJZCBNPALQs23C69e758deBjTJkkfy9Mp7NGXtjJarDV42oyCo",
  "key20": "61pmXJ5G64AGA5tehyuXWxzrKTZBvMbF95rFdqZxQiiaMsWWxXBLz5EZmMxfhYK8EUKsCrhQJzGJkjqC1koqejsC",
  "key21": "3ctRA4TsLXuuJLezmhVhPr4gsPh14Dbq9w9FhRkwDTkcxQYiaDFh9rA3Aa4bntidkuYdR34h52DpMPtXiTUtNi1Y",
  "key22": "5tKRz79tp5URY5ANbmdk32ac3Cd66tjGXidyM8bvEg8WiDEDeKLQzUH67S2fzGHVX9s7ErviXng53xtYfZJVBg7",
  "key23": "4qHez6BH6EMjfYmfC3zcTmgtp5xNynHc3MQiTTWgwS719ybkZ1tTTBxJdnvTWtd1EMzawzeNa7va7kz7civ5u3xd",
  "key24": "293vMABtr8f1uHH2pqaqQJwfdaXoecJSzwcCU2hoj8ZrJAQ9na8iov75MKfPu2z1dLkKwD79n4FCR3wiU2L4mxPA",
  "key25": "d5Wa6aYoLqB5fMSvfezUNRNCtGkhwXRtRFqsL4pAAB9daJ7uLgDYXgHwVw62Au6YZjHFm6LHFzDfPdhyJ2LbeVz",
  "key26": "3L9mn79KnBAEwss4Lr614NRCfJuAMtQWZHCUAMk7kHnXiuxJVVxk7ccSJDG3ibLLR8rxiLq9J43dpoUJ8MG8hmvp",
  "key27": "9GWV3djRW8tjZptWmXNr3UFUdtMxWC4TGeUa5oxuurASPygMGjHVoxpYYeq8cM1vn3GkLpKYthttpkQrPGpPi3X",
  "key28": "657ume3TAmTauwdFMq7mV3HGnWvHPViE1Bpm9SfKdREMJcBwN14kM1ri6QGyRCXjEAM4SB7KNL1cBha9wXBoaSZ2",
  "key29": "3sMhEdiFq5AgyjuUViMieVuNXbzM69hGmoqVySC5iR5Fqam22ShKomihPLSNUCqR2Ccbf8i8eKY1cRXyLUoWWJCJ",
  "key30": "59Dk1QvWBoiDcCcMBZntmU78yhuYr94Fa4jntT35chNMZsu3icovzypDzBypEpgVon8pLp81un3dcVhqjTXTsFxZ",
  "key31": "5c5pSMhHKmh57N1Z6aFfp9URA3WPM9iaZ2T6E4mz9zBh9i1Qe8nHmUGwr9F2y1ztWLiXbooBFTyfZmyRpFxDjSa4",
  "key32": "5hZ1jrqqNu8hR86EynzdydAQDuDqcsCxXnfi7zCXPy6u3WKhA52StMadLP18Ckyy94Kav3EzkTjqHattiDUDgNS1",
  "key33": "5ZfBw4xggMoMFTmfaZA6mytXRukZ8V5XrTRBudBZESPuNMBMS2p8kNPWQHs6KVCcWQktSJBGBepgJLZDkxgbg1UD",
  "key34": "26RQgLqJj4UFwLj9r6QrZYuhCycYnpePoxbW4WU25EP28vK5EnAjtuU56XqvAjnoQgmNxxbGAsk6v1w9zLZQ1ywP",
  "key35": "u1ELCdhGTRVb3y3gm7QNXPG3896yMbBWPdB6iLFnjmKRVr7CaNAytF1sgrJFNCoMywr7QaaVbmJbfq7rHPiHZBd",
  "key36": "42vWMCSqBQYMpfoucwZ53XtMPCfUnjVqYtsQGNW2V3vzaq4N8AZ3xbt59aofWfortpySPbuNe1UcYnFTpGdXQe1p",
  "key37": "cUFM1FTcFa4Fx8vBymcHRDcLBtE9bv6HP3kZNiTG9gHABuY96Cbd2q9PS6yecxD2wz1dehUqUsEUSWfiUxcw81o",
  "key38": "2d8Wk4cWDRi2gu4DmTQJMFWGMc5zyKPZgusywYpCFeuSUpWY5gkxw84VnTLrDnjwDcth6dkoBw3JGkRhvG7vYqqg",
  "key39": "5ZYUGGg6Rws72pP3s9Y9tqc5wZxti7VPbgsZWqWnVkY19KsTtgknM9cjX1RyTrpzLaopDCfniEb1Uk89EDfHaCts",
  "key40": "frMG43nnwui3ebUqP2QGNDDMpvtJJJYv22c2tjGJ2oxrp9WyEJy1gVCr4qsTFcyYdo1Cm3PR7p8cRSZ3kQRfQSw",
  "key41": "6wNzyhkDiBzqzNfW56z8JhrV3auDd665si4KLgGptsPfhSyEM4mZQwrmsJ4UYegU6hUxUC4pmgJckP4JhRj9JzY",
  "key42": "5qDcRomU7As21dm8V8wmpTGumEDQgHqUtXDJNxQUsrgbi2ieMuvvduHE6TkD65nqs9kLTgV49UbE6Hk2CbmnoVsx"
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
