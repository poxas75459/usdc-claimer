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
    "3fre3bNxjKzdjMZDTiLgBUsRq94HaRUd66NovDaCPzBMqJrX5gTEQj4A8tL4oVj8ZbMyb3o3gbuPd34BbeG5dZNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPuH8GXw4cvwPzejFY88DKXVUorwv5C8QFV87hma93moB7VoFJLigGbEGvoQCyHe3TfyDw6ph2Pbq7sFKf3sh9j",
  "key1": "3xAi7BXVPeSYJPY7oTs9AUE27cWeYoyYVtrqKZSHHyexkPrKbCFNMShDJsGHJEbmBTQ6a4bXwLHK9LYWKCXE4uQx",
  "key2": "2hVyBGHy5ctmZTjwgh3j9b2LH9ugn1S6fHzEdwNveWdzJkbjRau5iBibbhVi4z2ickvYvfpUGXibW3iwpmPTWYuK",
  "key3": "5dGZmJHMHNnTHCEjBCWM5YMmC8HEFf5msrGF71ZYRn9zKVA6dFxDwzFAqXGxrXbyLkTvxNhLnNLdHwuxbQENqFgr",
  "key4": "2HQtnXZNDavAoabw3Pxf5zR9KkkovcEZ3LEDMsWC1xryHgShZZ7QERQjuSjWsx7MizQxjdTBUo3iHGhzXyD8dGGL",
  "key5": "3x6Gg5FX8jHU54pwPkdecEPjz8zDv2GpKf9Np2WohRuCMfUxTkvVvMWKx3JDsVkTFrFdP5AdsFM7A37d4nGfihfn",
  "key6": "SyHfWYrTz8x4rRqC2xNGD1CHoJNnyNmk3pX3YegZm6mG6xgvkrZ3kSo3K6mzAppTbse7CtKbkfJ8eeTYwRSua69",
  "key7": "5C64Lhe9WGXdjug6tnwiinANDRe7M5XPNvBRZ4nmSfbG6RbFLFXcUetWw6uG8P5NR12aVCYGWcWGpTtvXsa167F6",
  "key8": "4SbeP7pFs6zd9wiNsmSMtEAt4mvVLFWnb1FxgscGoTi2FQoqHGHUcFWRYuFnhM3N1FHdmyviteTSscoW68sD97wf",
  "key9": "4YpwD2eUnXTyhsSDMzyRza3qC3zFHxZCSabmKpYpm3v2E2ADjbSrnXDNRRupnQwSLoTrP1KrovaWaUqLQbidULwF",
  "key10": "6sa4CHmGmG6iQgxrLr8ddZhg2p8Hjx35ucdBTDyvCYYdvhjCx83m9HJzia1pMbuYsp6bHS4SdbdPjxv8qBWyAEL",
  "key11": "5wWRJc3SMdjaKR9nvBUBcz52T6a5Jg4uWiuEJGxhujqpphs9JrncdkNKnvjGsGgMgtg2Hp4TUpxLeNMJJcjhPEM2",
  "key12": "2VnvSoeQ7QU3qz2su45Hn73MR545AYjtXdPBhYjLeJzJWqdQJmBzoFnjqActKErz5nKHg5XXkSikvSnjQ9kL9SAR",
  "key13": "EG6WUqi3Z9ApmZP3hmWzpfUpWhdN1NR8jbRk4FmSPNP1i427ris6g9Y9nUts8nPuoxhJsFmPeNChT1ENmvs4LcG",
  "key14": "5vqLxEH2kGXuMgkrV9wJXd3kyxxzkQnycbMVtdwH9wx74qgJs44cDuiLV7Md8NHpu3DPeNQ66dfzJi58t4F17b16",
  "key15": "2ZriHKewKhSC1BUF6QavrhHgRW8h5AauV3RwSxm99fs726RgE7ARLMU2ojoYCHj1ttTiCExbeqyBK9yxkHPCaK3a",
  "key16": "4P7D89C8gmTLFvT6e97TomPLb5JNfTMr45NxF6oTYXPKbRAFsMyqj18KVoHH3DS2ovKTjMNDe5u2CUZQKQTCjAyZ",
  "key17": "49vu5ZjxM6HryMssreSuf9ytXpJsoQFemGxjBFdfedoqQwWrbKhE83MVJxxKFZvuTvm3EVsSSWHFUjh1z8V2QjgW",
  "key18": "5wfRVqMXWsedMoycWHqK6MVLJzUsrqz8GeTqWCqpQBHJrhfazLNxgr2TJQx9BCjkX4CLV6HBybqMCccBjnGHEhen",
  "key19": "5yfK2cbHQ6y8RGHqtTkFsxjNVEQW2CLhk93j3LRnJrkReizQdzwce2rffEujet8bAUKyeSVjfva3rPutEwnQdVpX",
  "key20": "j3pEBtkS5KkSoZh3kVo9smKudxYhJCdwubDmSY9ekYaTsT3xZzRk1paddAYMbPBqx64exRWsywDZUkDv5X16eYy",
  "key21": "snJBom3ZBJZBrKKpHRWTRYuukBr9LDe6ebqTvPjweg6XozJxoussGJBQ9RvVhvha9bGHE851w1WCdx4JNRRRy71",
  "key22": "2cEbXb3h74esxkSfP7SYS9GBaRgiK5N9D8X4ywnhxSBvQSyS2qw7tbZzJA4WB5DHB2bKitDpH9cfzuTHvYkYkNns",
  "key23": "2435P8J1SAvjrP61E1vB6TnYG383A9vfvuzsbp8u8QLqW9VFB92bcfiFTRRQ13YccQ3bWe4J2eMHw9JGRcPiiacY",
  "key24": "54Cc9g8CN5eUYdj66Hq2fCXLWfnEwXR8thzZ9uLVAttVr39crEeHp7Wg5yK2TcPe4s5UxbMC13DK1NLxooUJfpo",
  "key25": "5BL2MvP9xCKHscizwuuUAdvK1F9Tmgxwg2UPYXxYutUuZXXePNTYnLUCS73VaNvXKFW2wHasmx6jhZxxg2szmo7",
  "key26": "4bpCpBUaMzWSqpVMNip8ESZWa86mK4v6tzmhTEcywYTrE6Aotm3Wpj1S1opnXsenPW3bN8FhrakGYkYU9x31w63N",
  "key27": "2aC8RqC2mE7wdjDKe4Zomy3oKG3HDVF3azPR6YoX1EoEVV9yexRJuYkzi7ZAUDf7kB1TWnhjYb6DTP1uFUpB3i8y",
  "key28": "4oD58uroG62kNFXLDPWf2h7ALnTWfHEeFSEZ8287YwG4cM3wgV1AWrBSYxN4eEpsQ3FQzp8mDNyjqWXA6t8yb4Vi",
  "key29": "4v2Bbgb8mByLH4oofg9Cdg5Gxse5aaQ7xJFh655Qz5A6jumUmd3TWdTggZB9zgV4Q2sJRA7B2QbwwYD8BrpUWmjF",
  "key30": "5u75zPGAASmWv8yFjjcFiXCjiJwvQ5SBRsiQTkLfESJuhFAfHDsBMpgUBMy3ZskxSpeWtKJrTx4iBuj7XPapRGL3",
  "key31": "3fxp66opPz9bpYcp7Xu98Ri4TJn2XEFX7EB2sRYgCxSHQoD1BYScsJsN396RV9fy77wiAQmdp4CfmxM4AFhk4RLK",
  "key32": "2tGKTWBT4bPbaDWt9qiFsXm9HtNrKzA3nTKcWTRgzATvPmEoccLDze6xVBotik4DrkhgAGLgbdBhVwxzSnayqmEM",
  "key33": "3rDEfGJqqkgjakQ2y8zsnRYrVN1RUESQScdPYjxwPf3D9Kchkh7U2uVz7CpZkLPUun3rWmPWqzwMsM7fwkgeLJJy",
  "key34": "2iD48QBfQd3sLZoqpV4dDJTcwf2EfCQD7gNYN7TBLNwwntJFoVcBmL11gQtmW6FF9DkZ6UGWUhRdyUSWZvapj5Tr",
  "key35": "Feqhn4AKK141wJxpu7n4mN3QacGmtJj18HPLGKTdRau42XLMaevRxmkNvdhcMc54dzZa8tKzxqJX841ozg7ARJh",
  "key36": "xidZX98k2gDtBhemAHZeQBxSuNoA8NKS8MoqxPf5Pm2UzyhyFBnZRgfphTjHn7Yexmmr9DPVy9aJ6yzikk5Cy9Q",
  "key37": "58vMPPSxdVxLTBYCC4RDuYtVwu99XbLbQKkUqjh9AcuTnvpFeRCVVTcPMnsYHZYX54wJQ9aHPgjQzMgdoaTAf2gx",
  "key38": "2vvkWSCrUDq6brdD3xJDEUt9i2tfg16bnGVQ6rxUBUuH3eGc8u2L2JtbSWh8BNuiHmxWcq82B4K1yqXffrWGzyv6",
  "key39": "3YjwWEHhuUbKSgfi93B3VVAi5zYPr3LEBvfJBAMgVnRHcVEB2nxAuF6dAPBRvmpbZGJ4MRCv5MTJY8Y1xd1BU6RY",
  "key40": "3dfpsZ5PP2AANNV5WW3JQXypzq7Amr8jEQiPufAbuygwQ7cCLsz27tygdXJrGNDG1DTiePu1QPKczauSUQNWHGYe",
  "key41": "kSvBzoVUu7yAt5qhRUSFFseT32JZs8knPZ73aP7ouEfq8is5EeSAJ3d6zfqfYhNEfyp8dXb4VnUyEhnd7BFScth",
  "key42": "3ZYtZVW3bGoEjRdRHYP7Dnm4GaFxnnUzfV3jkMesYvgNhHLSVEWztKgdDJCQzMCyVvaBGVxhVZUo5x6XiHX4hUMy"
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
