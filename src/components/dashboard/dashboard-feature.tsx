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
    "2ReaaBU9vQfGpPzF2KjNaZao6m3qvrK1mMyvfEzmsYo3vBbuW2SET2GjZxJ6hY6eJmAC2d1f7YoZmGzufXy11RUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Sm7jHJgmdzK4o1KXyh7Joc1j51EVub1DX2QSHNbsxL8z7aqqyh69iYKLFd5i57KdxwKw5ro1AYy6SrFaKuAbhN",
  "key1": "5utqFNNzUWZSDnJrvSSRSAVs36T4rs6PenAf68KAg5e83HNYBJTfhj48KoZt9ivQ2BKr8JLfCHHpNHsJxwMcd3ND",
  "key2": "3KvecDbpG3UXFfpmwKZw43Ga7qehdcDUmtH48xs9JsffNDWtnZVdDRABGncRpMHdTuFuLAZg6jgYpCujrTNiMG2P",
  "key3": "41Ami65ZhZM3Xxt52PnzHJZKNkqLttWcXJAbW36n9mU8c4YdqAqP8zsmX4uTMC4kocE4qtsqdFTqTbYXvkuZppEZ",
  "key4": "2JHDwpmD6V7zLcXB6c7EJVtSk1FVMgCsz7TerVr1F8L8NUstq2fzX9r2LemVuJ4zjZkggWZv2WiWgsQfXc8jnhDq",
  "key5": "3hKJNS27WXC1f7RXajC4PUDdEJcgyiZkbWzddve7Gd17SutGCqFLcwPSJ33XaTWwuNhLePvPec4Yr7pMy7DFbe34",
  "key6": "5RTbzhuCpg1fQrChmsWoRab5JsAXtJAgtXnkzxYskNvSd3Q5pLJKsEA5i3YZGdGTgS5kfB9dKNZtFZt1CYRvfZCQ",
  "key7": "4Kivsrf2bApvytA54NHVpR9AC41Q2J2B8TpcTbobc6qMhwswexeqwFd15uQUieyGMp7vQ18HNk1HfYbCr13nRcTQ",
  "key8": "42mbtEVqSYk6312g7MCeX1Hm7WEZ8FBApzCmTwCnPeZBrKspyu48wFvtkvkte15r4TGMPNp3wMae3a7SKa7Etic5",
  "key9": "3XPiHmmC9L3eW2VQ2FagJjUD5djJxL4t43v52pyzY3sSwUjNqSK9ETrnZruzDCiLqLFbsa5Xs21nn2ZAjbeHu2v1",
  "key10": "qHAcQhCbigNL1wcSQG8vKDwngFksHUF8B78tSZo1E3KjPsTQY7sN5X3qMEfuZSTZdi3MaAB6w41Eke4uiK8Cxcz",
  "key11": "4LezBSFmtCWkyPh8kugysxY5N4NPb5Tg5umFSyLFzLJmvBUT5d43yMPZacqRmjL4f2PmK6zc61FZizVcSBmc2tJG",
  "key12": "31n8VcwajfpM1MBpZ1zytNroQRKLNyp3bmP3kvkeWn8dnbaYJjzpwuKDHdMifdMCNqcAXPPWrVH6c5QUcQWsWsYU",
  "key13": "MEicUqtGmnR144yC4owe4PkgW7rdpP2PxYr2eznG3F3GqB93biw4futt3AUZDPpDsHQXkKzm15akps5Y5rc64NK",
  "key14": "2SenDWMtktMTEFeuFnp5gWnqgH3naxrUt48dHWgswi1sYNxFMMLigshLrnByS3MjuKSMommjMDMfameSVYmdPgG5",
  "key15": "Q9vSqxoei6k7xYQt9axGEz1ebXUkLapDGu7B646F8WapuaDgW82WhMtKMtgsbEmMUvcxmfT7XuZVvKeWZgvJVSY",
  "key16": "2fAvzqhcNXKcBDvEWhYcubt9Q9dyAvB4VhNt2TFwv1FnTtrSEMEAXyNmKNs7yDSUtBjZse95daQtmvEBW5DtihWV",
  "key17": "3MvAJkxseBAHyiJWQWaFcEXdC1gwV3t7b9RgpbfwEF4BJGsdy7NCaaq8xREhATv9kqLV2VVKNbdwYLUSghkWq81T",
  "key18": "3G7Ry5L1BbBfLNr6hi5R8xTUot2JMneRYxfuShhoKf44to3oALuVN6iKcT3CfEd3jqBwx1XAc5JMUX65Zn2mPLFd",
  "key19": "4G4fG8DzmCXaxzsdQL4MtNG3Vo5dkXUom9XpSbXHsq5MmMx3pNUFzzaoMMYNfT8jXqraFmvtJL7b8PqPGRTibvXq",
  "key20": "H5x2dLNokkV14eg2RN3mjmxaxGL8pDmxZ6oQ1Ar9KameQvhwxzACEoYjQh9CfubMk84bg2MEdPZSFAJb9devouk",
  "key21": "3U4JbwrhEtvkcJRe44kCzkFs6DwS5h53U3NiMRNG2QKBZbHvZsm5Y6q3kNo5wr5v2N5K4okYEvAQezzNY78MYMrF",
  "key22": "4Fkv3AUQULSC1a5dUyqvw7J3dNHEagwSijgJ8DZxwkD2FPsQEKZrWCBcH6bVawQuofxDGqUMcpdianiwTpHF4DFc",
  "key23": "3jRdNnShfPJJ82ABJUzyC6hWku6C3TbyYLY2avEV7YRjy3YPDoXV5x4HRoodpaGk87ZyTqugZpWpwLndvtBYuSA4",
  "key24": "2XoHxR9ffmxxzANnSSDiSGjK2LkY9E3FMhQaR6A5v96oa8fbiGyxqrCUjYvu9tzqzZtMLfFV9uB6Dgbrve9bi7G9",
  "key25": "4hJR1Xc958RKhdz9xRxxMh57gATvpMLFjrEupA1FKoTJ2kPptxduw2ougjBRPUHjfnkdyFjtBqmVgp28igKe9Zj7",
  "key26": "4YjoJZuUPfhVh32bADnqAJ3knSaNARREAoyvYzzK8C4EHw67XZ5sbbhgGamABa15zGuR3BfviQt3Z4KoYGNzB5Dj",
  "key27": "5GhVoFF5nUPLi4Jz1cDd7Y1LhVJ4aMd4FggcJjmRoHucLssdippX4GGD5PeFNeB5ZeaiCmPNrcgntkjMgidnJMCc",
  "key28": "5JEAvx1yBJszA7FUEJKFGEsWMFrK9BiH935KFuAGnoh1BujoNaqXoDPS3hNgd1aM29L794YAmbm2pH7zQ7ZpAwft",
  "key29": "26LVeTm9xES9Y9UC4KrAZJhxzK5ciwrWdqHWSpTi5FApmCGywXcBp6jURpvGCTNSjQGtUsGkFoGocWjXBUthyBUs",
  "key30": "59Zkz3qHf1JXYDtunR8wi7oWGrj8fnBnzZXe18d4c4vWA3iKtGNxi9T8bEKcSdh3VbodBV714oXDfmFy3dLYDG1i",
  "key31": "GokPCtaUBNd1Zp1tuT3mFxunW8bH2C4coAjh17fPpTCbWEfzX6U48aSjrXzFx5Kwdh5bJ9eg433d1BVdqT6rCQk",
  "key32": "4FiJWMbsir4T29PMAVYv96GtX2XMr6uZXh94EBeb7vCAa7vxs4BbjajJfsshvN2yLCihnaU4An1bbKNXkiRigzFc",
  "key33": "LZF36JftJsurb4JFi9xvNFLogK7mqjv8JDYNBaJWb73Zdwu15YZyYD5F3h9J1veXFn45d5RPLMANQ2n9q1BEiY6",
  "key34": "3pLXPCzjVEi7kqmGcPNvaA2MxdzKj9LFErqztJ15ZVQ5ocUwWcozDCShsBwT3ADBLRzdy1pojDArHENVmX3KRNR1",
  "key35": "4VChHRmAZct9EPjVDpCTvN4q3ZRZs86XrVrESaw1nuyhRURqvkpmuWXxkKZXrPtWmGDPpKJkrQGjc6u6EmC5CCdr",
  "key36": "4cbgfozAPrQrfXRoSgkkfxLMgA1QGtAkDMz8aXWPxRGTACzsuxPJuCHh6M5L3Pha5zBfjZfKkAC1VxoQd7tAm6cW",
  "key37": "3sr7v64oHT2eLs73XxMSer49LMEjGGqWF9pzBQrCM2tESkRxvX94eFA1Dvz2nDzmRSq5L8b84hJpkjvZHazGmRkf",
  "key38": "5JyGGfcarjBg4Gs3ew1tQqyHWxQqrpNzaM8qgEG4z5p4HEybGA1y97ZtwsWPPPANaAxwYFRBi1iPchWf5dTcNGCy",
  "key39": "2mZzEbvBZqLpZciHv2zZYEmUXkGorfayTFmGuqYfPikyQqgWPTsQcnPUW4y6Gxq6w5oTdLjCFoBrZjyTvRtxVmSH",
  "key40": "5d2wciPt7rbSLiUScWsmhnuP5puomucMCVWFhqVsnB2bpUC3UesdYqaAod1BSA3BQED8QvnQv4KBaR7gbQiAW3LX",
  "key41": "38FzF2Z8FSxB2QvdmHZK3HUWac1MevuXNPefrQ5ig4c8hjExxSjBZP3QQJANnWZrXitFYXdD2SvAzoSbbnQZ1fR5",
  "key42": "4aKKNTPGHgspdZRSUiBNYJ9nHNtYrLR42jVhpX4qPc9a3PPe49rnTFeQNqydeQAgSAHo3YkqVe52LZhTQUdzogNv",
  "key43": "3AZayHC3MQkHJJLMQ7U2ZQgaSR6MWixRn3UJyEoEp73dgkdxgLikZtn3rXFtyr9s6i2LSRdMUkU757W1AKWNjxWb"
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
