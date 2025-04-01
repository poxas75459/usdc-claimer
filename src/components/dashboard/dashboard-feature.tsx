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
    "5oNN2CyaFfkDMLnaxBXWboVesqcV8Lf7LER8Qxpevho59KdTKUeEWpr6hxLZccshUvKVygjE2Bo9uRraYU21shoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWQHCAPnEqo27qSSPRURK6iQTB5PQ6ATF1eyueN5VNnKxtCbNoqpM2AewCmfjiDwdwGfA1CW9w22V7i2Rch7vAf",
  "key1": "5wcSHjRpZEKHtiSFzWo1yaR7B8mWEMK9d9Vs1qrHa9F7TLZteV1xA24EACu2LREBbnzxKLpqXtvuTShe7oPYgUMR",
  "key2": "53ahGaw9RBWXy66MQFiB8WaJsHKjMUNixkcmhXDkHAKcweWxG3r9e6SqR8TJJZzQciX36zh6KDG9rkHVxBfM7WgS",
  "key3": "26vVjhm8tbC1wgvDRNK5zbRfWJjSDmg2Yv6qo8drNe2QMCn4k4pAR6s6YGdaaaZfYxoFbZmQEwTDv9ThfuAasv6K",
  "key4": "3E5EYmxv27diiYtfSdKtJivH6ZGNXwjFN7qjX8NXKwXNBV6dg4hFdNt1hHo6sTMDynbktR5zXj8pG5M88FHbaX9g",
  "key5": "1tL9tcWA6T5dKpecan2EA92gCUGoaagixbe84rWopH2gdiXtij2JgYh5CTyrqQSkRN2CNQcU8BpKFnKUNiVpcdc",
  "key6": "4rypqi4dG41pQtGuUmGqp5rTpKieKwbzfLvWYsBhxkiUT19bn7Q4Wfzx4qCPJ9yMRfUWS12DzRWborz7Ws3149A5",
  "key7": "bacrx6tagk3WzUzSDC6LguQV8m9wGrQFKqVjpfWHjtGhBA8nfat1E7zJ3rXS8d7jwdnj8He7D12F4PA2XnA1p63",
  "key8": "45SPST7GUTeNKEqc2aaHuPRoFcvMR4VR1HKx8UT7kVG6uwiHKyhvkY9NEhXavZdK3wUtLZBtBySuj1447NrESXf",
  "key9": "5XeDggWufChrV2s6U2nqeDMcqjPhbRBExBt3rRwAFffMkCk8VPEkQvqmW6Ppp8yWSXrAaCvwYJFBSDSFAMh7vcnc",
  "key10": "5hH8M5EsJXd3Yue4JmWppPTTcMfBkzU82cNKomnxnWpWtP6KhRDVhJVyULcN9ZM9BPbLMZiV4mBG6vuDnjmk9tAr",
  "key11": "4icJNSx57UthD51GEVb48AWr5vzVr7K1nMjrQbJNmvKkUV7K3UW28d7CgmdLYa2Bkgb4eEjrK8Bqt1Gah24vwtVe",
  "key12": "4GL6CvLRHXYS3h6L785W5bbqFEDWrtgkeauD73eRpn5vk8u1CSiuoWaHVmpmb2QiDSTnwY56a7HMdM2LCbLxnhqP",
  "key13": "Uhb1cZDAZyNnHq5Z3YEWNSJdHqF6BKYDbQwuBoPFKZNoWcZLbuRYCoNrQyMiXDvDnEa6rXtstoJDTiRzhWKYboM",
  "key14": "3xEEfCug8QAFemvRe6wSCtjFdabqwKz4JHhub8cmXgUkd7uSFXa4PMBSPeCrJjsJKPNSgvTijnjyWybWK2LwgGLa",
  "key15": "5pTXGpDNvFhaQL1vrtQ3u31JptMicPZx921btCA5RBpzLTpWWUUTbvRLF5Vzcb2F9bawyhiHoRnX6HFwzgecRwpa",
  "key16": "4gDrbMY9UWgeNdZS6aknhxymeUeZwo8ReXyR8qZ4TNXXtKkmd7ybX3r6npsmPzyCfTJ2RrfZhPLX57e7Hg4cQX8j",
  "key17": "5cNqDdTH6zqdiiVhsYYpAjBYJKPYD6NqwUztiX5CPXkxoVSjPs3nVWQky5scVDsLvWuf3GTUARsG9DKcixjvenCP",
  "key18": "ysZNixKXUaFcQLgsopXi8ZJE3Kq4AdrFXtwSqTUEqbiLLuoN2dtoTW1wMhwq8MVFa2MzZcBRdq5Xa5N9Hb3UQoa",
  "key19": "56R7QpPwLeHLQaMxzNYNaXRDeiwNV1wwwmAEgDxCxHnAj9CQuggb2DFhzRKznzBMNUCcgojECAPAKMDUe7ztBp15",
  "key20": "5vmW9SPUWpuWxxqoxYZ9xRB8HAyVkYwBHcV4e4MWWG7iqRpwNJGZKtkhBA2k3VNpmtGrBJzMhwa2ihpWp14pAN2M",
  "key21": "2hZF5PxzS5iZ6K2RR4Qpw9U3nRgbsSJH3zVMjqA67sFPTrTH8S7R53yjHrNAqawWp6Fhiq5RLbSEwkSWRDYLzj92",
  "key22": "3WswQ64jQP8Fq5YWppCWAiySPhyWatTBjJM79tZyUffGBrjubT3xMPYhNM4WWS9CydSvW4SmYFzwYJ3LSW1Cy1Wr",
  "key23": "Mc25hCgjTvYemhXp71tsMnNfJhrGoZBQ6i6Pu3DYwCUBgR4feyTavLHtC3r5Mh7xos7cSkiAGHHZ8DLy3kU4Xx9",
  "key24": "4g8pbhxgio78BF82QivBG56EuDhbyQTJjxNWBPRuKY6YEfCZJVqamewJVtPLbjbjfPTUQeq5eZyvU1pQzYEZtbMk",
  "key25": "65S8VNfbvywBanj72hFvgBiRHp3VMBfk7eFzxfMv43rgmn784aY16vmMC1ndCQw52bM8tvh53i3ZNEPs7xxpJmmd",
  "key26": "zgXKZXApXvMfQxEGRqACgwFY2P5qHtQGJYaVs2rGfZBXzMG4RxTohruoVW6LUidTaTFhUPzuaH536cLev7xCkx8",
  "key27": "3vTLensYx7xPteiJ2BSJ714TdMNg1PqqTpzZtWWMixtVGW3fLWEcENrhTEAHcKCyjmDEY7vA887BywUTRV6edCx5",
  "key28": "5ExZMTpe5sLo5zXyWWMZeiCb3edAyvAhUkcJqumHXfrHF5oXt55sdP6CkF25STMsfpF5dKYFYTdsRTUwUvbquQbC",
  "key29": "4aPD3YJTrCRXn7jCyMBTUDSk6sQDbKoSVjkZCeNYnf1m6xiGjeKP1aXozSgnqQqA2VKABJJJ4iFhv4Q9AjJhyGWX",
  "key30": "4nxdUMpzsYtp9bUJrWhD8r9QNJkAfELeZNzWEQLbMcoJZ59r1dN2N4jG1wKVPdQHHmsC8cCYv5Yaz7ExpeF4YddW",
  "key31": "LCVtbmcVcKUWk12uYhLtc6uJVx16Z8VXAV4FCGNq66M4EozMKeChVJdt21FmRJ1MFJt6fZK3FttraJydm24NzKV",
  "key32": "3wSs4WQjJuMJd2YcNoUrN3m85R4sXJiYnYcTV9DSdULvSBusUbA5JzsXNoeb5GdkH5kbM4uKgMyGrXnV1r3CMTiB",
  "key33": "59hMvHPUbyQxYzYGCR5r8hoq5WjKXAEkswLQghgjqt89far4jvryT1jbKHFbBuTy2f6LZADKeHyLBaaDgqA1Goqn",
  "key34": "5syUF9yQXWVLitV389pDVozttXM5uBt7zS2N94JvX4ybxDUBR2xREHm2Ue51UNyG6UR1BMpk81Mf1YoDTV7jKEu",
  "key35": "566KcW4fkhe9T2qKcgbe63t9sKiUw3A6o3e6WMPZ7KeP9Cig59gqFt6pb9bGzPkDf71tXgaLdYdgQ8DXqZSgaZDs",
  "key36": "3ZiuNpB9LSsTv8D4y8wZ1Y9raVjA6aDBNokYDQLN5fZ6H2eQji3XszgeSMy9GafJidZUwf7yPQMhTvdJxGWqE2hW",
  "key37": "3yzqCKRBjYzwJjWqGahPHLQJcSP7HbTDZy43aQV47qaDPLbbZ5JCNKAMLALEgCAXrEaQBr31UpLypNAPTvtacmbV"
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
