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
    "5p3i4NB5ruCU5ZwxeVRgkR2K2KWe41WD8xCaU5NxhDxR94xV4NqbUyNii4v93o2MjZRsYTHh4bvHmkM4xvb4Bfg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxLcPJt7ZFgRTYVjsfQsgqAmd1gkH8a1jup2n61iiseyXNNVqFw5258R5qynydWmQwHPyhL3wDmx8Q4FGWDryRz",
  "key1": "3nrRYPyiFSBdSdLUk6tuRx3kvZkDi5iMiQsAEUKtPLPpwrfEmWkLaeKm4hvs4KEjbMwvPAboQtc5jdzL5Tj4Lte",
  "key2": "3jiLExGbJgiqBcrcSgaYvgDVSu4WABqwutj3J52y8EYnTiiNh8sysNW4zUPqumvzg9toYHaBnuBGQgSRnWDgdxAi",
  "key3": "2Df3JZ6Xn6rtmZZdHD3dB7GVXu91uueriBXNnSyA57UxMw4SYHuok2Mkyu4f41TEw2cpAbjL8ZhYcrzWL24coJCD",
  "key4": "5Qw8YWUWpGS81L4xRxQok6CQLBck9oqWdqbXvLf2yLrrk7CYy96FDsNQbZPY4EBNiRFoEecrXRZXvvdGp3iejvZH",
  "key5": "2uN1m8WeYKmoH5htdBvfECRaqqJFz75BigRu12kioS1L4Y2fux2cLnrpFsSHPuqcc7D7HpWDF7VaCCdKjSoMSNXu",
  "key6": "MVfVAzwJpuWVywx8dups6HNksLcA5yiYdW71GiFmvtmeejS52qzXaTV1rnTQH5gfNMGQcabNoVKG5LSK42axQdY",
  "key7": "5xvgxT75G9w6Vyy9g73Yx8WRSh5RajLRrkVgJLu9hbwXbFwjtopq8x7KRkccBWKca5v497Dvm24v9MDB283etSor",
  "key8": "2b7CYMQhEpFYyoad8fAapYnbz4fSFLpvu836xgr5etSV5nw19qhiiumzUpDMHjPGPzvWTfketysBc6Q6vpiYpMzk",
  "key9": "5bzEit7Phiq3LHB1ha3XULfBN5XiiYMAJB19obqKttZoLjNLoRRR4eZmURdwERJJNiLU3MX9cwiiwZgRtmjp9ypr",
  "key10": "3pEVxr1UHa3vdTLoe1ohE2oagPfWHAk1pNzwq669D4ubXGAUatAJgL32CM4Z49k9sfYhk285eAWfWJcbJBCmW81U",
  "key11": "2xXZxN4pE8sTq6EE2xeC6zFKhHjwFBFkNCk46Q89CsEsttjjw3RKKt5xK6ga2bNtqWmtRpfxQKd55pyVBCzfPk1a",
  "key12": "2DsUtTN2siWPfa5pmv5aKyBvKeVbYHcp2pRgKRnY3HgsShag71uSVGPfXQzKworDmXqLHsFd2Dk49oyb87tK2YJd",
  "key13": "2LjkaektTuwffHHcvgzU4FocuVaogHd13MsYPpFSF3nqHKNGwtWzeHQB9wLTmWmtTdJcUDzaita8Q1w4SXbZkzJL",
  "key14": "PW7wW5FXKaki4AtqwsnMfrsSYqv8cECWPvkWaScX9AqfLRP3V45ugXAbFQTFSmiTzmmwyArsrs6Bo4UDvHtVEEV",
  "key15": "2tnWYP9GVSVy12ZJiXmjyzfW3vKT2yh6rGdSJoXJFwwQBxFR3Q8GwwyYd4WZNzDTHpSgdx7HVZobbfQMTdzSPqXs",
  "key16": "3AZ9xP7KxGQ8k7wUsAEUHQxFSvD9j17oUpfjoF7dyyFVxkYiJg7AtFYqHb1kZqvtReFpHrAC5LP8RvyqfUXtw11H",
  "key17": "hokxUnnYXKPZZncKKaP4FEgMhckBs6WQgfUdyskdRfE17mFwtvHj1DmkBGuiTiU8RRydV4boZibBE1L4WbfPDXd",
  "key18": "5omz9DcPiu3VZaQuXYK5yzLuEVo9w41C7cJiMTmPf4JdFtXuoBvJGStBWUcRMHczrQETgFem7ywxrnkHcb6HZBka",
  "key19": "5kF2kEuAEuvbCM9fzZHLKN9736ELCwyy4LicHMoTLuoxKig69j7UCHA42pqZDs8gpUWNTRHpqs1ZiTpa45JYdfJG",
  "key20": "2cQLh9MTyuGmCjStXxAFoGNJ5REGsATSt25aRya9wnr9EdSBpRbic3dnfjZaH6fXogHXjKehPKcgmV4csaScHLRT",
  "key21": "5SMgNWi6QuDm5PqpunC8sDKBCyMwTikN3fwmVuRpLNcJWqESTBRnggVEdCwcmCZKRr4v7DmrPx7hvs5rfRv7zm6q",
  "key22": "4Rc6ghp5czK93LVWRP2YTekbKuQzRTwdh4TotbxhQ2cWnCBBDt95nhLrQ7qfmGu5kkDWyn2kAQB2xXKxcNXzfqjR",
  "key23": "YxYaawc62dCQoBx7aPpSLyD6Sr4R4mrHUcrTst4gjJ9eNQkXZWtUsDQud6RtkXCpQakxu848StJB5BWYNSwbLBY",
  "key24": "CGmGUiqDBvMMhaiM37ztRqVgconnLFHTTBLQ7dmvDsYrVPoy7NeWJrP7sRtcZFpcYq8mrudtm7gp5FAxq3H8qe7",
  "key25": "w8kdPnkb9hFkXvq4X5s2bSJ31ek8Fwh4Wb8fX2BSwEW3fcCTTS7ng3Y7D5nyZNwrATGRAkJHp6F1v9nwqFTam2u",
  "key26": "63GYNwVQhPakfxX5iwVCX9pD2R7nnxv52mh4WNgGN7jvGiAusuf5Rt1xTMw8t9steNwJ6p8QLLoWppTuHNN7p4jn",
  "key27": "5V2B5Ekim7zLu1h4CHv3Mgf5qhCf3BzxhRabeCzfQpopS8qdGjsDwxnrwsoTRDk9NJ7yRLLCvNk3A92KV5n8ei3J",
  "key28": "2Q31sYoGC4a5LC8A4Hiccg9PbD1zMCPPSFfKT1tAHvTD5drAJUeEMTvBoQBJZWEyeyDS6xKmAnVePuUtqKwnK69S",
  "key29": "2WQ96WWJgyGSNs2H34XgATRub3qUkFoSKoYPnGHhHatPn1tBaZfkn5YmVWCBXSCCLthxb2srrMPx6Uh7REwSN2wd",
  "key30": "4SBpb2ZnVvxxd2Pm7pNftnDmngRZ2kB9nQ1cs8J3SrY8mXiBdv5VrNKtiqtd2rvdPKqJ4s9U6YwNCefsmh8P6XkW",
  "key31": "35i1TBNkNo8VGSd989P2tfzH3Q8ET2hcKCgfcXP4GdmNvu6hhm6MujBu7xE6hTBJ5oiiC6wfgPj2nGZA28Y3KMMG",
  "key32": "2XGHHPxgREU5t8cF6GVmYbZu6eFpYD4tfbD5e2DnQWRqQnA7zR8MrNLWVjqstU18euDb52gT7Lrk5tPjPa7fcxpm",
  "key33": "3MmFDDu6Dve3ijmUnSM6D8eRPqq4iwkHEmjUzrnus8R9AQf6jGaMmUkMj66F2xG27aLSZrUKt8ZB11VmkhT6kS5c",
  "key34": "2YZRqcjUkhpM5udMpEF46hdCT9VTxsLwKtzBxeMAwdehdyJbj8EVHYApnfuKL4MZeX6Cxcv1mEMXG1AVuKnDLied",
  "key35": "5YZE7CE3PZSLedRR8AFkvxCoL4nAvPeUiVWBP1Fk8depmfqxHiqTS7CJtW6m2fAmXPvzkuCFj4CJ9DjDLzxQVzSS",
  "key36": "4mZerc3YjrCwyHYUTV8hRiaskv76bAxhKfRRUzKHiN3191M5vmF3eSCBssJ7cV2f3yvFcKf3DyznWfj4Pg8reFTZ",
  "key37": "4iwnz1BtUSx6B8AukzXRnasKJyinA3LEwXC2YWVU86sW5NnqRPMuHfoVTPMiJgFC2PBc8JvYBwuLo6RhGcW3TXUe",
  "key38": "2VuCSfsJ9Awhzr1XU1eLyBCgLceKWVbCjnbuy9rjNic8byHXZqECynkNzKM4mXHDaSYJtJ8rKAoPVfGsLkwDKs7S",
  "key39": "eQko6TMUeR56Y1p9j1HGnmrajH5iqHg3tvbgUvx3rpyJW5se96nkfyTncEzJLFu2QDAqscmXGTT8YzHjgeHgrqT",
  "key40": "xvrPEdPsVUTrmVccUXDDxpnK2yBd3VA9WN42sA7EVMCPbtwtQTL5NJS1MkXozCE4HCjTF6WqiW3d6CSooqgEck8",
  "key41": "3PZZQjTbQVeo7dAaFT9R3eJ69ms9FkNZgypBZ7o8y5kkNWYs4DKmpwWXZQnU8fjW3GRv6wUyWZKkqPLqtrmEsyfo",
  "key42": "2acC2rTdHhaReDMG3NPvetr6HfPJEWvKGBnuKeALjqsA7VZpsrd5C8LDZ1yq6oFuvhztqkLnsxB35RpLsPAzZBKU",
  "key43": "2CMySpFAxjtzvHExVUYte2U9P7TQsju6Rx5ocQgaSoZCSFXgNGmcSCrZ45GTmakH3wa6bZV9KeQSavNH9sbmdb6q",
  "key44": "3LggCCgoTqXtPyZCBhmeQKfrNt9nr9pC9xR35ea5Lrvntxvjhm2veaKMTeUTRRmvgm3iHSuyGV3kmda1ycjyZHSr",
  "key45": "asBQMLRme3xn3NiDXgAKWAg4x5WPegd7e3RNfErMYFVQ7bCV4gkJ4EMPggj7L2G4LoaNjVaLQgixEcdRwWM3Gmu"
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
