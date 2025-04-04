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
    "59Fe8U8fGcxr62DwbkNpm7SWC98jDfM2Gf5EqGjR8NJZUUKJ43PviCDupUTeg4QHtnQr4E3WmmUZqY7oErPxvk9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCYzPH7MhCWzJXCfTRMYQYyi5nEdYEQbSNvy5Mspyk3sA3B4A2LWDXdaBJr558HMuYPcGvieBo2TbxUGy98SHxt",
  "key1": "e8w8EUM1royWh6cQ99AFhkVjvwLFPCpcNkdVHvLyFHMLQ4QFd4ZCwMmSoCwXJhwT6C97LBk1dCfxQ3fSUm2Gg4N",
  "key2": "5w5fH24nnLK1J2bS5CweHdQLo9AbjjfFeGu5tac4RhBNQZWLqATh3gjopXyzGZsjKUxBjtBp5SxQ5PejSTvTMjzo",
  "key3": "2dQZHAG4SbGFYo7c16yKcoMXVu6UFk8SD2nsjrLQZNa1xJ6eSq1R5LRqUuyaQ9uff7uohSzquc7QdtFQXyEpov11",
  "key4": "62vmK91Gm67m4ADUS1MQP8RZRaKuYBKbQV9Prb2eqnM8naHKW96Xr7T1m6XnhXXhpQ5paQUnCV9pxxUTKsn7uWre",
  "key5": "4Yc52cTJDur7mWiPedb31rdtW5BgDccZW1YBk1rQFLHUzRLza2uzqZCno9kTPVfS41YucfS8maHf3uJhWQeS3Mq8",
  "key6": "2SgP4MmmmUw8RBdksExZxr2PZBKtW5MfiGBfzCHZiSBKAaAerauDGwWgnCMbJ9y1v2ChmQfbri8zpfXkt2Cvq3go",
  "key7": "5YtHCxyjAckjVgfHQ1nBtBzsEj3AK5hGr5cm4rPvTaFKsEvJuj7QCUdTCUKRYcrCke24gxtGdDo3JvMDMzJqUCe4",
  "key8": "31pqTyAksDZE28pF6Vh9hEBLdouN2ZFaaCzscSx5wUz21JTHcBBoCBt1ePKkiqHB2imBmA31uRcpVPQtoAEDgAtG",
  "key9": "2bzp9R6ShXhwjp7LX4JkZwtUwawx742SrfhcJubCHDNcPFoyJVBb79NZupjUSExUwVGrKLpkb4E2qvChZCVJx14n",
  "key10": "5AAJafY33zrULpLPTAGSwGhccMQvZTjofChEjnL1CVSErzesXmkP3Hm829zNoDZeswcLm71UkmK3T6SATz4dvvFv",
  "key11": "64VbcGnFeS1pjw6PFMgzssdbPhABUqeaWhAhtafry7negCAVXFh6vkypFjnbbmBJ7TH1PakQgKHnS6uu9QQZbCzR",
  "key12": "4eZsUDVEDyc6bnuNFLjcAEHtuEUnUGgF4261XW6A6jhg8vAfdrjvNXDEj3AeE51CP68ZtPi7wDWF2Fqrdawx78Ub",
  "key13": "2UE8dhXhcM8sqy1AttAdnUhUcSxqj7SVqcKtcSSZuipQeDPVDSxCE73mLyzHJFYx3gMKTVy9SNPH8u3PRvPJLYp7",
  "key14": "34Q7dH1k1Y4GsPRDuqWYV9oTe7gogd6ucbzk7fE4GwnbiEm2retN5WqJVNyELaRvNh658V4JP4zyTpy8jDe2shLW",
  "key15": "5EUWBPZp6j7m78ydeQzsjcVpNhB9mKMcrTG4sJQJenfghgzUDc1AJ9p24RX1ag2mFrSv73MXc9rdFV1sE63MR5g1",
  "key16": "246a9q1ByfxYKgHxLQbYYkeFwYuz3TCVJdXDx3y2sgpxHbYhRYFv6ECSgo1GaPqFzhPKa4sVLSTKprULcKF2zDGA",
  "key17": "2x6znWqzZBmgm1VF94ttDyiXsv7V8HcB9ZeAJtXoB2ebPcwVuBgo7mzW51dnkSP8vWMLxDMK9ECXHDa5wcQbZNEv",
  "key18": "5hxBFuAHN1wtBDMfZA9QgkBE82X838iRFvpMHq9HJ6UYnkD8nZnkoevxtAMkyoMs36qjFhp7pTCNmc5HDKTaGJHF",
  "key19": "2xfqj158JzHQ6FAfJurhqxFDMdSnaVjMecnf3fUwK59qY9x1gePuxJS1NRKAMD9x3dcoJ3eRzXi1pxFhiRG4tLEU",
  "key20": "5qFH9WD5HX4Pk8viP6qLxFcFLtwb6pAEHubKW7oxcbju1azh6ZJc2CUsc7DtLSqQJiUi4cwRb4qqDSpasoWz5zNi",
  "key21": "3XDKEEdoPcFNuQ4LmJu83onJkKZfQKHqaXfWZHgbS1E37cWqvCivUUUwZemR5HN6WuzNJYeq1r2V8oN2BJxHCtnr",
  "key22": "5ruvXWsv4VVHkmXMjCdKUBawSDCEgr5jUSQ8G6h3k7MRmZxbxKxkWLJwwiKtmPhhc1xp51kD1hk9BNrPNwLW8SD1",
  "key23": "2f3RHpGnEUSZFt1GUo3pu65N9pmnE1ZNSRGCDJD9hCkYifLq1sj7DWq1BhRb8ksHEktaHpy38Z3ynqDn7sJsL77e",
  "key24": "5ZZvZeBRmYjmYoAQeYY2qq2xCuyt61LoqyPYg1BJCEHAZFLVBAj4pWC9WLHZYoHSi3GQudnvr3dtXMv56P63DGhi",
  "key25": "5tv34WsFMnknnf2WVRTaJ3R6zM1RV4EdtupE2MTiUuDD51wC8MJDzijykHHi4xW78QFyWU4NDofWgzVA3qnj3Btk",
  "key26": "NP2bohtoeqDAq6XsKKdKUzssSY4XsBkQGB5zPb98rNQWUvEXwpPHdDwGZLxwyoNppYdcH2qoeqo2cH66AvtGFwm",
  "key27": "53n5aG9ge6CxDpbjbvamC9x7TCXrCnWpxH23B1efcCY6Tpk3mZ45B9GxPNzhVcWctaMKesGu2tQhssWNszd9TZed",
  "key28": "e663SL9hTB56RAJhw97MAoAvNaq7DStrd1G6Ga4TdYa738yC91ZRumoKhtzd3pse4CC9S5PPQXLTBUwEUhX8UL7",
  "key29": "33p1QffwV8um8ZEfgm2jkTa9MpXyKkn8Lj3i4eb1H8XL2TmieemyZSEw1LSWFVbzYbcayQZa2rBErKephPDBWEBn",
  "key30": "CiwR8J9pL5HeVTwTc1KEYNgVxgCkepPusgLazzunbjW48LvzEmTJYjenqKUuZSXPEPoUjYWVVfTFGs3PbchC9rN",
  "key31": "5vUAGeXEZJx6ebBjxB4Bso4MJ4dCmbLkaprxaAWFEnPYgWDNoSTvykoMXMyXqbEC9B6o9gGCdzbjaeYxeNqVnHJk",
  "key32": "5JFJVmx34mh7WP63zb4MKd2hZbLwR9eh7yLVNr8pWjyHjUjZhmT3ZSdK72k3WSXcqqBa91jAUTZfTYAadkZ2Z8eL",
  "key33": "2RGLphpwt1KJXUPKpxc8hi1NBRSfkwVALKPvGVizStEfSt1WoJjBJtmBgRt2mx1NvPLExDJzsUwuUh45oohfZqLn",
  "key34": "5iPjR7M6FvBBDxfrit8nMPfFM5g8pgosgFHmTpA1F2DCFgMzngsDujUccEVj2PKeBQeotLMaE2dEGNPFydpDpCuz"
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
