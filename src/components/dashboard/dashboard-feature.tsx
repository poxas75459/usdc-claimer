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
    "1u1ZyLpZ2ykdNhhvN7XRJW5cNohd1rMg48cXA3jnU1u3xok7udsP5cBM98DWCqeeDDhTojS2a4DWgF6u3tCk4rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WREhKYML7cdoBQEV9919nGhGdp13YjWQpUCvQfNSWG7mFwXBMSYiuBpAPQ8AeMoSkL3vMcMTkr2cFWxqZvRBpHx",
  "key1": "2cePuWPmKPfXDKWiGN87LGn8z1S7jV5aVWbqb8RTrj2eUtfqxDvcro4wAtrigo2KCiW6ci1A9tzCm8kRMtdRQLG3",
  "key2": "2mXYG3K3njr8wnpCNgf2aDWQcfED6dQkUKUJ8CfP3hDS4ppXkNR1nhQvVXKaCZncuey55QUNCRMsAgSqPosJFg4D",
  "key3": "3Aa64HtS1bJSpgPMbkfttekrshfMsASxZZdzHx5FBNasftXFsDEtpv9R5cGjHQevWkU8Wkv4xVBVd79kMBPkShww",
  "key4": "1MVZiaQBATqqV7mvzSWGJ3V5s8X4SBkTH6Kn2ubB5sWAa4xnosVeViohwtbfgw3YZ6GqNT1YJGmLwi4MhEkvuGK",
  "key5": "4J3MGUy2pEzeoGAfBURqcEvhvUj6bMhW6gS4EjKPmYS6jEPRWMsqC1teqiU8PU8ysqRR2GG2cm2duLtUEcg8ydyq",
  "key6": "5noJSVoYwNx5scchmQqCMY3qYdsWP9V35ex6WZ61kWfReNFLXm5bqZNQ97ZLh9sJgPGsQJd2BjPwByTbKheJkL5f",
  "key7": "2DG4XquPGRiHgRDuFzMBCkUGwcEUzdc4kwLB2heiFFZDNn8f997AsWz5C4snoMdbicYscHTMSSnKrEBRGu6n6h9L",
  "key8": "VqxbxGErvC3M84dWydznBP1v9Di8oZS7WeUH5GT5iNZ8NBWLSBm6iUvoGn1wDqFLnr3JfPUnYcvQeANS5a4Fj72",
  "key9": "4zi8a7Zg7yG1a13kEDJcyyzdV4gV4PiUCxLsdxEufVWjZVUETZqQDCeadxKu11jJYq3vGyRBWXR2L4qT63mdUmJk",
  "key10": "4qTKPszUW7vhAokKSXYStFxtGiXGUSCikWz7Ts4mZp96THtSXHGg78yXtdKNgFHsn2yCiKNvbFZYzMmTwR8JMh5t",
  "key11": "49cnsNQZhdY9uBH56qfetL7p1ioSLfoRNnn6rGn3KMWnCVGGXka34AM7m8ut8P7nzfV7hQUafzhRCv7mqfC8XPt9",
  "key12": "4Q7njgPAYyvm2TJbsqxUvhGjistSismqMssdUGUMezP3sS5SGijEDk4xpQhc3wXeHD67TtiNJiSxjqmGwjgVJ39",
  "key13": "5hG6bmQ1Aw7DqkNDSb3rtwgi5k9BKab3f2ZMCMGre4nHrjtwwd6HxF1DtvKzvez58MX6XYsCtJUtkX4uZXQ8dS3d",
  "key14": "2uxtModixKhaJSVnx938apc3GJU5guyCNpZbQiM8hxzBeRM8ZzEtq718ZWdqNE845KTmwpmwMKLEf4T3uWSXi6KK",
  "key15": "5Y46e2QM29hszm27exMkTgfqYtzTEE8sgQF8tXLfW95rxAkkuCAdKz8Ca7g4CgLn2k8JxQPQiamubFzkqoCdvLjy",
  "key16": "56JtLg9h1Zsf56KvPQNVZmkqvStswjUhoXjZbumvnavWKkSEaTFyoySunmuocVGwXEq7TAUPKwJbz9m4Ld4NgTQz",
  "key17": "4TTPApHtRXyNNKFUdiTrcDp8x7zjd4H7vbMDVcuzJHoWzLqRhmvVB6LuHGE5iKbSwraRn27aAwQyZbnCWnGDMeyn",
  "key18": "4nWq6rPMpfc1Zq8dRJwLmHQXkt85tUXxbL3nJqFw9nW5S7Mk1CJVby9WVp3e6YwVei4EpmkDS7geRgUVcU3mabEW",
  "key19": "Cd3438mukC7F5zJKC7dSnTcd3Tjd5VBxxruBVwpmMBDReVEcNse98QbpnrfVJ859rnM9VZ4Zx1h8Z5h3AwAcQwU",
  "key20": "57qUfRoKq1dWTPE27AuMpRRWZDkPVJRrzEYJh1hHGtYrt3yhfjj9dTmZ2DPTfmJBrjNtzgoQvUVozD42tG6xEMRm",
  "key21": "4CEVNhah8FQct4sf9Eez7jik9TqiYjEq4QPxex3qhAB712Ef21xMZ2eLkPzaFnJHw2ZSXKhxXJnwHP86DMM2PgWj",
  "key22": "33etptSoXBc5tEVdB8Ap6AbM84htnBnMwP3NxMjCjgVwojYazvYoHfpwGZKWNTzE9zBj8Vz5dEU7Cn5hvKknNHhg",
  "key23": "59hsqSZMHBw2bECLP4yc8tSUMaSfU9qKwhnb7XKP3Y2hEmyXq3ucBfPhkpMmZgxHkfXCfYdfG3z8ZZ8pbMECuVbL",
  "key24": "4Pv7RW4JfHUELzGLHwZW2QSZXoCEZx756TDhaNtDyiffrcKQFfCuuEMAo6649jf1gXTLTdmG1fnyhQbPjj8THnqC",
  "key25": "g6RPaHHzLmuW7GWz8cyAXcptdCXKQaVeLrbBFg83fFQ7fY38YpN8sZGX71dcSYzU8fpZaURczTSFDjA31zgCFhy",
  "key26": "5LVtMfG3T32rbmrA8TGVekwQwnz1fphz2FmCYMxVSkzHZLaPzPyaiGi8cHJyWcFu3SaTrRdVDg11yaCMvSp12RAq",
  "key27": "2F4JihG5smRUBS5eB25ZSgP7zAmXBjxsF6Synap5x32tpeSyPBfR5tJqdpBb756mNaPLSYfFgTnbynPkvHPYtmWz",
  "key28": "2Nx9zHLY8x42KRzgxcTijmwbVKkZtLKtGM4XPKb4RUTLtd94hWz6AwBJVKjUeCNyGYV2UZ7BxUr16uckJLK8KMPT",
  "key29": "5Zi8h8KhCjMksNWvw5X9UmSVN41CpLgoiwQQkWZ58sPvZnKiAUr9BJWaUUVmNv2AiSD8h132Chv9CEgy11JjND9E",
  "key30": "2Dv1iHhPbLVEsL6jdcLeg2KW7Qzm3CqjwUnEPgJ4kGf3w4wB7iu61reayeuw4skrUcJ5MrcMP7yinFDu5R4StguJ",
  "key31": "3oyqucP8hPDm2RUgtTXXzXFCuKgUpY8NeWSA8qymYdnGr4noaCSrGVZ7pLbdyZ94jMVSCvoEEkav3kiJcA5H1dsS",
  "key32": "2EyjWaFPMZS7nHWnkj3mpciXZjoENzzYKttQEXwodf2fjrKeL6RoEXFfieMgoTSeANdNKYuFeNw6wWNQHNp6bqS",
  "key33": "2qLUYdTS5DAr7WDA8NtCNh7D4LimoDUeMyRAtVJGkTHWYyTa419BQ1nBjq4QzvbMGBCZW6y7YiAro19o2r8ESn4U"
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
