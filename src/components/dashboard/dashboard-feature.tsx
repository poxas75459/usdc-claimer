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
    "5jC84N7R5kBPkcJGWsw7WSp2u1kTLkU2YGYefWWdkzpp9pUpGJNbGBVxmKhWsrU5wNdrxTN8wsDU282Tbt8CZfup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39kpA5QCNQetqejLBYmyLkEhA8QWRQmQtPuihUHhcSqX3rmu74ak7AbqTDmJyFb17PnGFQ557bMhP1AvbLHj6SDS",
  "key1": "5wg49Sqm2QViWkCJjWEyxgdUZGyXjpMuj3dMm8SUXWgoASSPPD3Y1nPJnuFBiapKev18AETdPmizb2QfZGwJMykh",
  "key2": "M4SwuZNSVucu7AaGZt9h58dPTJqGv4AmHVnGY2ZyKaU1iQx3zP2ypeGXtJWbRtbUUHHubnF5RD2y2W7NZzZmnVW",
  "key3": "6UP9TmudFn3gVQ6LUzyC3HvN44MfGW9HW6U7944tUm6zMxdMAf5YHaRqimSBqBJbvRCUUoweUj9kQ7zzTq4NbFo",
  "key4": "411cLDERyKaMpBnWUi6Ng8Q7tVWN21fSZQnsogtrPbVLfTZStYnS3qxcZyeGVTgEypi8ukp9wyNpF6NRx6N7pcKF",
  "key5": "47DLxudc5KBM5UC1QM8g23kiDyCZvLeCGfcWZsdrkcWqfyjhs1dHfE2Gw9CgM1JubxQBj88hCVFs67H5c3b5Fhi5",
  "key6": "4c163yc658zpP7RVdaEgjGZ6FnG75SACwCS6pnNBLV3Y6YWBe1ZizEpWnd1s5mZYpQi9tSW9KLiFXYstm3qBibxS",
  "key7": "4Mfvp5SHDVDpUNc7VRoAounAUnAHgoRsiHQy5sjQzE9wt12KNknMhDQCPDGNYu1JAJnxe9CdZLdvDTD8AV3ujdHK",
  "key8": "4Pq9AGBJSFPJDV9eVMPjuL9yFBMnKVAi64wkiTqVGXXUmfVKcjBud5JvWGymtAgDvtwdD6a8pQskCG9ZBM3Piuqi",
  "key9": "uQrwy9UoUhKtudUvwy8yoJGV1e2jQZS8ZvErELHi2EzdrBonQ8LsH84d8XKSPqd5vMWtsdpjpFrT9Y3UMfBhXnE",
  "key10": "55cKJhXvxQEMnwsMbKUpKVd2DzC2RR2tL9K6NHCWQWDmVAyvBBogeYAM8mHEokq4zLnKA5ybTn6HNJ5JsaiPkmaf",
  "key11": "2wRjNFiQcQbrzjgnHEg9JUtDmkQYxm7Xtbr66cC4vVSQjA76UnsP1xfF7SVpnp9JZwAzBkp49cXEGociio1CRm2j",
  "key12": "3yTDYq5Af4vW9CAiadJvRgmsf3SD7U3NDM2ui9VnfsEwxPvFtmbmwWbwfGqkCfWwff3XjabcF85jr3CFyfEBaWqa",
  "key13": "2yB1hwLu6ycj9MZv3A8icyu2W2rSnFxQZmX66ubzRxWPNppKCGYxhA8mcWPhahQnNicK5n8G58vHJeXXkrxn8ykM",
  "key14": "121P4LmB85N5VG5T38ypt4YNjzg7FPy7MCiknV4CiCP4bShwgTpXvTaPLAWUU6rH8N9xp9pCjDWHs5b7tpcAzmpU",
  "key15": "fsj7QLj4Zfk4zFKnZ6M8uYgVfQLaRndRntLsv64Cu6pWjbuoaDFuHRyPYUbdBFccoWcSxa96dKBPhz5W8s2vHJC",
  "key16": "4qrTMxqLSdKXL71Q1rpTe4P92vrnkwy8qpVvZvAJPAS4idNwmTy2vkeNjDpjYBrMQLAC43gLrAC8Yb7tDTSorpCf",
  "key17": "3uqNEycsYP9ZK1o2UsRDLQk4oAxXeRhCRmvnmghmvQy1b3qYGxtkKtb3qGJv39b6maYHcdQbH1qCobuxEF3gUDVE",
  "key18": "3YUerbUFZqxcq8xftLMFkw64UUHnrriybm4RUieH9Ct4tRSNGazPwPpnXZ56Qqz5JbZbsfruFgBgm1uConZ9GkZ5",
  "key19": "rVcbn8tQxamdyxDjSUFiWt69rVfPJgWjQAWEAbeJDb3nWdtXLxq3D1iPP2EwCGmj8nyEzguU71bNJ36oHwfoYS7",
  "key20": "43uGnx7tyum9orb8XgRfzPHkST7Msu3t3oRjDeE1vrqKbSf1tPNjbu1Fuhf6qmN9Y5bNDSKqruMduWGmWAjCWFvg",
  "key21": "XoyYHbuHf62TFRAbX66gPE6Htj4a4SH4x8EmpR5tn8szuRv31oXX3D6hLHrkDqck5xzQAqTgFtPY3RwjejG9VfN",
  "key22": "5V4v1xBwuAafUJH9wqjwjSSphnuKWEPz9sQu9LcqDvYSoF7B5Dt79NipDHeiiwE9pHaYhch8SZnzeTZ6MTJeY6tk",
  "key23": "2dtg7fyEnBfSbWbgLfiP2EWZT5NeKwMFNgMRoUjvgkaPf9UnZgZLHV8ZA9BSJB56d2FrS5GtmudKSvYoAvujFWE4",
  "key24": "NhHgueiHyGEoJVExUQPUfEtX85gWq6Hf94oomKevunmd6DHDaNGr6oe8icnzP894aQh7sNWgJZj5Dvv5WHf5113",
  "key25": "4K6VwUvErrmA4YXzmaToMavkVmQkEqNwYkkcUfxzTGbMk6RWiDMDmc5nV7LBDRTBn4PmTTskdsjqHDrCvsKC5UN7",
  "key26": "5KvKo3wMSNKMewvycA3hQXadEjGk6cPteoPNWJzeNaHmbHHXfM5styotFgfZXTqqwQsV7LFdNssUxN7XK1WZR69j",
  "key27": "4xRrdtFrjcjMFTfkNhmbdxdbJn18y1udrQaZQngn3FfLxwiZHxtbMtAWTh9AgwDpFWTYepyAuNfM7fm3cCf7fTNy",
  "key28": "2kTNsNkfrMKhpMDeArjCGKw7nRYY7it2FFD3HdChTpXxANCukjhnsZHK5veA9TGjubH6xV31seeohb6225mc9o3z",
  "key29": "2n6egeJ6RmWFDJUhrrpr29X2wzp5YgDiV2fGz1VBizXY6fuvvaenPeRwrBa55yDwDRk92EXQQyF5GgoSKxGQS7Vi",
  "key30": "3RPKYEYTixqAWL7gJ4gEqe7x8wegKr1S1SbJ2e9zwtwEtoiwuYXmRj9VYVhWdFVNpMcGdHsBDTfiBev23MvxVyxR",
  "key31": "4mKQGagegTrMEx6zjxt9RxiZGvV3HQpURQQmwi47GN8EV6MusFXFZpMsTTL95cfMqxo7CXcqqSmAaPTLREbi3r7N",
  "key32": "9oGq2x4JBv9oKCjf5Qz5wn83tg3vXwQEs4amb3gNxCPsDPwkhKva1vo83c2orj4yk5LvZzoa5rRwxPefmMMcHJS",
  "key33": "599CQn8z355gL6ZSWFoke8fLgWMoPVB4ch6cxAahFWf25RmggEfLv6i2PpBTEXLF7gqwek4XhCkhtNvjqZ3VdSWv",
  "key34": "5mzFpSXpUTnYjwbUENZkexuCLwNS7kLsbA4ayR5Tgmv14p8CRmwbg5p1BSAoej5WugVnyTdhYtbzTzicoTDj3qkp",
  "key35": "55otScCtDF7UvXDn6FuMajghPFt2hgrdixPa8HbRimzJDTB1V9u22r1ihPf4mneenjdACc9ZHkGvrWpuw1RJ7rar",
  "key36": "4kbTnMjeKt1Znfupv3G2e8QZy8UVoCLjmVdM3fkNsd6MSkhsnRE4TwG2XrFWuE9f9oDNQifg67N1Qr6T3EiSypRX",
  "key37": "4kMUo5hS1opz5MoA52STxviY3zCYVXuumCMbQ9xrkgYAiKGQ575hjpuEPg2aMf1KPg8nLZdLS3fvUtV7MWZWsaS5",
  "key38": "3bKajQfMogF7UPvf4z5oahVdkNYcDzNSoHRQrTLiKKNd5zAnbGMFxng7CRrvy5mmk265oxwHnKGgAM7Ro27tF7kQ",
  "key39": "5eCeQmnEwJwzmmBii5qhDXZ67Ryg8CVBzAgYzpYKMikGBKbSbD3Fj8Co1jn42KiQ3HL1Hx5Z9bjickKwY6qUbQc6",
  "key40": "W7AdkhDVmx3puYVatwMYp8EKtjdMKuAJBh9pDAAdhNhGvn3yCaHNLac3uB5vuYriS82HDpuWtHjr4RNz3wAKgQZ",
  "key41": "5MYCiqFbEHiFd7RxAPiLbL6t5CzaeVu4QzNYgdfYrrQ4fU42LhsfR23gz9Ek4YSGh3t5kPi5GMGEp3bXwr4epop4",
  "key42": "4P3cEZJjma8zyG42U6zS3s4xh4v61u5x5GRem5wdZwvuGqNE1o4UApspPBbRjoQ9SfUuzWwsRfrkYsAd6EyCAvVS",
  "key43": "2m7fWpnppSnotjDK1Aip4Trep9kaRnrZhAAiUkoHs1E6TzGR7iHWAWuRchviHRG71qpmroGfZVfSYkKXYYqaSbui",
  "key44": "S52GCk9SpBpUBdCYzk8jQbKaz8zfSyLLpNMNRgzz6TvDayDYSJJTzVpZuhN73wcPyxoEtfY4j6QM83ErCxhYEPc",
  "key45": "yR17yAvczH629FSNkvxCQbRxLNKLo7rvrnk65fwyoDbXYe1kezbZDYiwr8BsEY2c4PbeH7YKZzgmAKsSnpkZnj3",
  "key46": "5qy5iWgDWsrbzDCkqrRwr19TNtqCgBZG8x1H7heo3WLmkEPG9jDPPEEEgzyxE13DMf8irVSvPBhgLh4Eyhn7V5H9",
  "key47": "56u9MLjy7QKVBUMfPsTbnkQVwfYmTNGUPoePGswx4rTyQXBRgtzkvFny9KUzMRcEzro6h71PpUxFQHh3YkwgE4r6"
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
