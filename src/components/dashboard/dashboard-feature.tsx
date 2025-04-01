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
    "5NuNDTfFZLXGk9AddHbj9y5rajBEG14y87xvqC5W4PQPSHJrRq1Mwy1v7EpnU1XuMjMZAJqmAUvtBuFzTZZmoAFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EijbAfy2cAzNjV7oHtM78akRgd2GKTdkVwkuuz1zTbQ9ytSwBaXFUNvX95wzaZrckbxdxxvCHdPrdjvETo8KqD7",
  "key1": "3ApR3tRUXqKCi9oaREg5x5dC6eWPqMgupmADQ6HG1Nmz5UHKUsbqhC9eLJGoqChzxt8um4iGNo93w3ciRi4Ybk7i",
  "key2": "5JFiQBdkyEp2Hyq8Bg3gUrzD36D2cLs72HGXwrSMhTkuJZRi5xLXWTk4euGr5quEn11JVkhckK8cZG46h2ek36oT",
  "key3": "86sXitwguYTYsLjf9CSpTDfUQWm4aNiapH7QoZSN2grFixboZbnU96PGJdJ7FVYyX4VeaHBTkDzTEnR5Gzb5y7G",
  "key4": "2hP1w9PQ82U3XyQ2SeJiyAg5a8EfKBjLShCr947yD18ohpeMcA698C85xFFY8maAUj5uSCoHrMyUHeJbciZe8MpL",
  "key5": "1qPGnvMhtY6KA2nNFj4DpRmCHxaVwdnk8g7ESrLhmj9oJQpskVTFC3mRCtpJXmjjJ6dy53AvhuGztNLDFTPb7SY",
  "key6": "hk7PFajMnL6zSGQgKs7n6nxh8935fT34TG3iCN1U3yD4jR34FKPK9a9QVvttZmPEXa3veocX8uYjw94xmH7G3D9",
  "key7": "B33dWnPBx5XvwJEPZF2bBDUsTr6gTYiCm34VBwdiaUEQMt1rc7DWVecfsuTvV48bUwsMuQaGJ8WtVzmy6cixWZ2",
  "key8": "3Jo7Y1WWJmK4HmvSsP2zEF6BNw3TCukuK6ousjXNoJxkxwx4GtYQ19rsbABSkh5Xs9fcyJJbiNB6uSc8eDqh5VxY",
  "key9": "2GoPCuLUi1gqW8XMGGYZcysHCCdrXXsLmxd74Huo83WtVXcirHr2ChgKE6KTibGkG2uMAFGivxQv5xvwvawxiAXe",
  "key10": "3S2fM55g6bNXgyhzTqqTa8hNZDBrz3TgZL1YM9EfVjGDMrvhHoBaN7uYw6NJ3pLpmo49jqx49mZ81Q2YBUQrrHkY",
  "key11": "ix6m8F4Eknqg9fnvxnH9c1zUVWGFhsF5JArPb5tQ7xADCrvdoEj2j4e6KwxUH5gjf9QaNJxaxsHTPSZiitftGgT",
  "key12": "4DRnvUnYXv7xz2EZEvzFvpt6x3232hKn4tEYuxvCzqPu1RvrEuQJbNowtPM9vGAJAKhhbugTkYdQbseg6Ma76Kg8",
  "key13": "5GJUskVxw2ypXP7wWcxfx3wVCtgS7963PRcwveGt9m2RmAhqfgXzpnaJXmcfmvSHDBtjqsVWMj6dDKgJBLR4m11r",
  "key14": "3ejZ2GzYwDt3xvUrfLM7PVyVpE659rS5ccDMymoaDA9KetRbRi65Wa2hGbBJtzcXxgbbTBYt5WLUeqoKUkrVd7gB",
  "key15": "iUAdGWBmKacX6UqBAQuaxWXjfvoKg2yNBPAzjqzH3KPWpLytA5u5qgT5wMnLoN9abkDeR4g9DnnGmtfynMSVMe1",
  "key16": "5su6Agw2D68hxfpE7YqjaZbn4XihjrmSZHhnZey8bm3P2x7W2sUtQBR3juEvm84Hhi4Ton8sQki5DsAi5kmuoXTQ",
  "key17": "3v66RG1eGVWg7uK88dd2KZRu1Yw8kWBcwj89FMNP5fptyZ69weoGLbEn18t3aCYJTSwov4V6o1dNPXNJYxPosJrD",
  "key18": "4TWsKqcJid9N7Tzt13Sr64pu2cXXZbZTAesuf33yU5N7SEEPr6ERxahH2qrUUdAWMFSqjZBt8Zc1h4ZSphATKCEo",
  "key19": "UX29JFNXKLMFAGNNVEGELoYGN5dwnQPAc2Sj4vtzVKUQ5WRV3NV6kyMAJqdfhPS7kmn3pQcF7snbzdvUCh7PF6R",
  "key20": "3fxnMYyJzzU42XnZrNd7PVNZvWqsqgDQtdJSZ65PHB94A2mFiBq4TuVwbE4kh7brFRt9a3gghya21wfJmTkpay2h",
  "key21": "5GauZcVfmnjUxRumMN1ePmPbfvdsWNFgmGkacgnx1xSRNHyrYzKRhE4ZqQHYakSCwyr7p41iQW9sPJFojnJpMJf3",
  "key22": "2gpdjYv6JXBxwPhPomwRkbrpj1RoTw5kM7FA21aF8w3dpqDFucvSjq1m9tLV9x1nz48LNrNhXanZ63k1sZHD2LPS",
  "key23": "5Z48Fio46vRQUMdrpt6q2jqz5t1yhSBfTRFWEc472amKU4UiSMBxdSiFobFNgNr1N94QG6oEsN1becdf5R5Ecfva",
  "key24": "4p18c8QU36syb3wHVo8MXmNqXhZy4Rvnk9nK6SpEY21Twt33riKsW6LGdfMbMKF4bQ53HF1ACcERvnnBLm8KZYKx",
  "key25": "5fL36WedMbDoaceC9BuFn3F58YpZ53ajvF6Wci9sVVMjtobGfos8GNqZKApvhLkwx54F5LvQ1e8JewynwiMT4Eck",
  "key26": "6297WUHkiN2TtAGUmiBmUgFQw5sAZ2fGAWeWMvEGDuLMspi8TFn1wCvjDDD5e1nN5fLoxzrtgq9dcpzhGAYwZS3F",
  "key27": "2GqiB7L2RHTg537rhP2XFvgVLUwGdcoDV7EPqVjxfCmvjfenrxre8jPyJt5dpx1FFseC6RcUtZD4vqKYPLtGKWq4",
  "key28": "2pQTGCQW56fbrexAJVKRmj8TyczJ6YsZrgbmY9bAmMuStWin2otj5oDSGxYdbc878HALvVAfcSR9tmJD6ZsJsSAh",
  "key29": "3NeNxkpHU1puyc4PdHCXELpHh5Fx7csQjgKZisRK1VhyKg5hDN7d35e3okdWVT6aMxXJVBXzrrFP9XJNXUU75sMx",
  "key30": "5bDbuW14F1NFe7bnYHDv5ATQ1NN2kVB8ve78VK24HZ8M782seM5BXe1bQcGZPPtLiKidPMRyK6nMJrhSb58GpnwX",
  "key31": "2mXAwcMCkKyR99fGfYn98z2JLVqtzzcTft6ziREihqHhjqu38GKjG9QHLirBoKzDt5k68Q7cTpFBJzDDXYb9GvC",
  "key32": "A3pPjVKDWqde6fLq722u7YYfjKbnJ3udA39hQVdBEkHauEWg3LtoYsmpkoRTneRRTWSV393HnB2eemoFuUFh4ZY",
  "key33": "ieVkHHQqqPAHuCZkqrv3gsRjfVPoZ9fJAJLiVCz6DAeND1rDMin1e5KrHzE5XGVkwtyEJb6hUspW8B6dEkQnJhm",
  "key34": "4phsuyYnT7oQVowcCm2d1UbGx3qcB3M8TKeUR3t44bytUBaaFQ79yRK5ZjWwHnmE4Doto6DSbNr1THdrRFn9n6d5",
  "key35": "gWbeQExgmUnmYAxWWyTWzaW4k6c9WDxhoaC52yjEL6XAuc4VcbsKE45tQCqk2gJkgvKyFW8cQ8V8UXFiSoZxnTF",
  "key36": "4zC78bm2DWZS29E8oe223RqtowuvW6D3YT1gJLsqrtoQKvymCJi2qgyoFnjwFmgR6gahxjGH1FKdpP2dWXCmbw1F",
  "key37": "2VVGgstYmivu5Hif6sDXEqMuvK2Lw1J5gq4jpRMU2YqVr3J1KyH2p4ixP4FvqfVV4fXbUo9aohfpsq9HUV7LL5hq",
  "key38": "2f88S9iA4YZ8FVYHpELBPND47JpsbjYSN8HvGgboqCGeC5tqZFWWPKegDFxaXKX43XVqbBRz6MG6Ft4uBjQxG2mA",
  "key39": "3qVNCnr4MoJ3jR75Tog1GK7aCibrW2112rnUnDZb5vL8acGBJvJ6PBLVmRkF3rg9yaYpK6DsfGaoSUd5StbvAaYC",
  "key40": "3txBqp3H6Vi9ZgBPar9vzSYiHvR1MH5ac3ftmCPwuzZ7bvpu8WScSBGEBjZbEkuHA4T8K3VADE5Gz5WrVTmyTmv3",
  "key41": "4MtpoARwgKZUyuJ45SXHQLEToHNpRszbQ8RG3gcaB6ZK5jX3v1jeyF1NdFHucd5tbgRvP75a76VQfKRcUkN3BkyN"
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
