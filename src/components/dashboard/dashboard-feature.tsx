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
    "2thLPN8acYrTxBbgGAG7Epk8Gf1QosGfYtTmupDPxQjmfCkofiefaNi3bbwHHZke2r4mx3XEVNYG3hCNMJr99a1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFozq3P1iVSTzdFprTfVoTo653CcP2PDyubQJR2FRWgsJG7sEtYJsAnAhS5nCvCJZmV8C1dAa1C6iNtRThVsdtQ",
  "key1": "2epdfJ7XuHdgXYfDHWREfJg8X2JN3BKVwUm7uxcJ9j8u4DYjBxJDfZ2PAfKJ2TVr9gSvWEiJ3AsagEuR8oHJjxau",
  "key2": "48H72opNh1Jnkks5ZKKngzEVMoT3pSiiGKAYZNESgu27wKNc7dkAazPCexm51mu3VDBcJpbADckQL4bWgXwcC7K1",
  "key3": "4SipXgejEn8KA7VvwSqRi3DgPcauUdic8YpiZVRzxbvLNLePmqCRicc2aP4PTwGjDcNHH64bXvBEvBDB69hDL66S",
  "key4": "3kXG7WmgmNrgkT5wjMoNa4bNXay8fDFTNpMM8xXT7qVVYFNEjSVDHc7pZ1u4DJmpGMBP7YyhFtaeammV8tDsFELd",
  "key5": "3DiXuo42kvX5ZvtvdhRdJKJ4SJnG7BMVcw1cZBFQu4ycFAtGXXn682i9bL9gF89ifiXj94jXckzKtPjtbvvLbEs",
  "key6": "5GozzERRyH3y8RCfLW8kuW2UNHwdSKnZVNzC5oGUrXppSRSm7WGfErDbkA2CpPjFGNMgetHHxqbSfPRrgxBMzWv",
  "key7": "4iyWUDQpdsWVT8gGA28ncDKR34ATjuhGtRrz4iJw3wnFJ4hVQ8HVgf75EHtNJjTaWLYriMPRaUowLGgURkociQEH",
  "key8": "3RoyR9oGXZtvgShTBxABKmStzs73bX9mkHRDNRkFBpzu4gAdLwcUcwPYB3Pueg4yVNRZJf5AmPoHELNSNhejbKn9",
  "key9": "39GqiBTArWX1Jxx1hEt1cEv2f2Kg9emogMGB4e1PSUzMVjF1vsRCd64TWuUAAsRhtAkmCwhVSVzbeB5bUiXN3ksJ",
  "key10": "4h9AREasPekfGfFamxyRJX7LBnAXDwJBn1jq96E7Qwcwp4mFN286LCopBAMyxT7PuoZRgH8D9fNa7EL1buNdCShW",
  "key11": "P2SE2uspoT1fMkaNEoZm5ypEXq7L57wiv3yRgM5vsjZYsyW4xobgmw2Mkn5oMyURf6eXMfMXR3feBzBX2SiK73s",
  "key12": "yDHeg4pAQguJEzKemMhc9kwruVuicepW5hckjrcqk7GmcqM2fpbeedV3FrR9mmcUSBBq6sc2b7n18YSYX9iyBZn",
  "key13": "61kLGrH1kaavRCeH9tyP5ik372iuQ6azseZQAeiQf8vmAodJAJKzXsMqC5dibkFSUbQzDy7jwBZiThyu1JUx6akM",
  "key14": "2mrezi77NdvhuFWWgnNsgynNvfxWGJ8qSQH1NBezYgbaqSYg6HwXdosai1CSXjDeAathphT2MVK4iEzUgcay3Aci",
  "key15": "3oCqAMJfsr8yuDX3QjwWRm3HbqdzT8zs4djC3Ndj5TDWc7sKtm8LFHkubkduu3LfTYGgTzgKNH2wtHy5cmd3bqjr",
  "key16": "3eLx9CNc8hc4oXiVabaeUpD3vaQiLR8tipVmSw4S8TtpCWpGm7PwxoJqv1czp2mzZBqE2CeuvVzpchBPeRZpxC3v",
  "key17": "3jdV4XBZh2QQrX2ZoQZJdeQWeQpiX2zYHy6nx4ct9qwnSKLohgezfTcmuKfx2Lg6zYpSKLTfv53DriCAncKGwyzv",
  "key18": "2pmpamaCxN8rLLbvraakgEE1BF2zeHQG6pTSCVAvrjPZSrmMRWhMNYva85uS3ioFf6gdk955t2x59oK2myfdZZqA",
  "key19": "3FQunPETYcWFM3LYX9HZTYX4jsjrmi5YZKKZ9kRsdLMqBnuzAGAM8U2yrRksBWnQm1YQtkJfNPv2oiWQiPWfiaWm",
  "key20": "bMVudG98NkJBmrsrM612mjZ6WU4AJmEBrFYwZcTGV1D1ZX8vzSBNPAHDQJr8XDPb7DxgWvnP6zPi1DyQnnh6GXe",
  "key21": "3KKAvKtLbbth49L86DKC9iTsHZCYw2cAcimhKBdMt64R25HGss9kLUhWRvmMwhVGV5TG6z1jaBsRsWGhj2XyTQ8S",
  "key22": "5xLAdXsAueCjzjoBhNyq4t1oov83deoY1zjD9hJum1JrUZwRAdSFa2YeKRi1cX1MDUL8RtAuBok1JmvJXpwQdbXW",
  "key23": "5aT1YGP4reRf8bS6ckkaLjtrk3De8ZxH7VHhp3dpkLtBLEQnaAiejMTnDbYMFJAN4SmiCnHStDfumFR32FVWafZg",
  "key24": "3bG16rntAMfQArze8nb6dGYiQWsUeJEdP9CZR5AVYiDikUWvNdMY2UNGDvQRtjUwNbxNgG8R2M1pFZDZD47LtXJJ",
  "key25": "5hYA8qbxpHX9DBPYNuhEpfERQvGqqeFMoiUaN4Y9mkVpa45C8VfaPcPJyzJDBtHBiX3Ttyrk2mQX6Gm1hPMXATsb",
  "key26": "5DPKYZKg3WV35BdyhKaWdGBDN51FVEgssJFwRy3oFV1JVuAfeJNi1wN9c9rMiEzLD3guEDByce7JBYTpMeewqoPp",
  "key27": "3bBsK85s6Ch78PGi2rpWJkkf1rsk1JnAQYoow4ccTqYhoce2d87RgksvZSn27SwZYA8djBiLR8WseEpmWBhmbEfM",
  "key28": "2dKvipeFZNH8yXZcr7uAmspfJLCB8TXUkgESQzff2Mtwq5DM8Xd1Mqiyfmrfc9UJaYUeFRrnTuS4y1LhWF27ak9N",
  "key29": "31XTTEjBZ7tHrmuZcoAjn9qBogDDLYvAYHhUgaTGh3ThANPeTEZZHAKLkp2oySWLMnEUTLhjLUhQK8WRjrouXeTq",
  "key30": "5QqY2TY2T1TVQnyr8BTWw7A95jmdu8kN2gaDwezcmoiLtKoryAGrnKQYxxaha1paq7fh2agcU8aPS6vv1nPW4XhQ",
  "key31": "2sMQztiRWckzLAT2TMgycjFMe3p3fV7tU6jfTRTwmKvN6waG6xVGmWY4JfjteqCNkfiJCUsghfUsNwJusN8YqHBe"
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
