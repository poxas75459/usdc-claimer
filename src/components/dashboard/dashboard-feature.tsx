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
    "wSpcsthtkF6KmFTPZ6zh2MYz5vbu7BUCCt8CFzL9p8u47ZXpz1u4e5FGMYnbotwdegYS2gSx1C5jH5j5MrXwNsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjoPj357RTYPYVTvJZaNDGjrKoj9VmavxHkyGC3PK2hWmEbz2QdwoNj5BbdtHoW4J1P3Pr4MRT7b4DoV4Q4JjEb",
  "key1": "4oCGU3jtF5qg2E1Y1o61xQXJ1LxvSqAmVYixKaQvT7DwupJtrYjGjbQhYgxbP5HvcpytCyQhsAgFN6jttx2m8SyP",
  "key2": "4JfJv5dMXciCEM97zSAXHLCbBh3mNPNA4eBjaDcp9TUJ5tCpNzfVVMMG489wzFq5BYcF93XA7BvdxK1Wttjg61Uf",
  "key3": "5BoP6yC7iiyKsBvaa8aVdnmQ8EXsmiqaoTtqQXRX4mtXLU4SFbNhEQgTz28mfhBxXSoAiQ94E8r7S1vTYf2T47Pm",
  "key4": "4SifDcuWocnSkHbPjJkwE1eadVuFvp4ZpJdww6tL3xGFzGVYZohM7afzjvhG1QNt6QJANm74FuNUXzPnv59j1tjw",
  "key5": "5uKQZT17ukrmWxn9cwocaLWxvsChz7jZZKuDJ4LHVmdYWtBmRzaSeq7kx9gQeQVjm2fkJ1N9C3AKyrPHY1kiPXB8",
  "key6": "2PTMbv5JUxBWTFjYDHTWY8ux2sZrEYb9s4Ksi745pEis64r5EUYYVPFP7JyWjAywBzAPSQ42Gg1fnB558CkJi5cf",
  "key7": "4wv5CxDBdhTuWWgpZ9iGKEJmpckzPEUbPUg4eDQJxzUhjUEzNKx8BMUsLaiT2tYZvX1sCBknB5ci7RYbWaRD7kVe",
  "key8": "3NXQ28p4nkfRwm87jVVMm6Ph7bgiPs8PqSQJEda1shpiR1TzC8YPeeK45imNz7Mp5ZJDDaeWt2namaiwjNkmRvuM",
  "key9": "fvqmmoY81rsY3hAMbR7mvQnBBiQUP8Sz7xeUDE5q9wdmUx5HWpZz82V2pQUa3p6LSWhsxb2fNAXEe9axkkE8ZHg",
  "key10": "5P4Xm7NgyHnvYE5rYEtZsm7b97usJ9vyWsWEaAtX6wDucEMTYo78UhZKhNbzKkSCcuECQoVVwzhhMuefft2fv9ME",
  "key11": "55iQVRCoArJjGBfvuRd7GQ4oPJx6yQMNEgarE8AMdyWjnoMnGN6hkR4kq7DgvUNXtF33vk3LqD5kNVsPhpjVN5vY",
  "key12": "3ypaWZdqRoYG1KE4wwwk8dxNrpzs5D59qxseHLcXVGs8UQvfHP3CtuZA7m24YrSkVeseC53xrmgqDbSh8pjsGMy1",
  "key13": "2sJRt8pVg5Y7zUZUpv6rxnDUBRpRsv3HjRphDLcJa1cqJw9i9ZCgPuGMZBao2wqehaK7NvhPuTFCD39ijTweF9Vf",
  "key14": "4SzzDmemFJtGWJA7xMk8LR2mshVaz9X9MBfoTDosbdBqiGDgQFadbm29jTWpgSm9vZNiXY3Uy4UXiNrhc5q3TZ8m",
  "key15": "5L63WZ9Fw8E3xuDQ3GyhiyYHjngfuK96dhCueHTMXHd1Do1uZ9X3DaJzWEzvVgzSoafURbYkPWKnDqw2ic4zjHuw",
  "key16": "Hhindy6pbEaw1r8rQ5d3ycT4fFviBTtgRc6D2VdyAjAb3bMiFkZVXjTJ7TdWNhsuWHFiwcQA6Egd5Gyedo4YPHV",
  "key17": "3uDZ75ZYAJN1UFwz95QwkdaBtMkUv5TaoNxNrttLxrE1ufUnG2F8A6GHW7bTJYDMq1RRKPicrQYmyuGKwHRNFMgy",
  "key18": "3mtYL2eKVhbhsiMiV2EckHKGAAGJtD4h49DgLPw2pMGwj2bNynRzvMo9xfE2YBzVug9F2eJvZbmiVapdCuurGm5c",
  "key19": "2mydEPcN8nHtZeHbZuXxfByCCPA3xFyRuo3Y82HmPBEEFVLnd4PoHPBYM5Dz6fdtQgpv8WzugzxCv1n5vzjbw69V",
  "key20": "xL8LdoKt5PmweHGjv4C84qWHxtXV7hgtLTuzDVSz7jEkhgtev6Hr51DUdaTvkTCrxsAxARYJSNkFmmisPzktmhV",
  "key21": "4tYbrgSYngKdcNpsoCBDhU3A76K5ZSyJmyN6ocp1XWDBcxznMsEpjBdadd6MTZGGsVAXYAhYxmtzqPQ41dE2oU7b",
  "key22": "Tr9e791Mv2dL95FXt2zmLYCS4SNAXZQCKTpctk882YRsJYzLSEBGx3KDuV6G6keSkvAMyXCDARrHKCwgGFNLxN1",
  "key23": "3yQW29NySAzJEDqcFvLzThJne1xBqHGxWa32Y1bEKU3DKMok7cT8CG3CSCKTCe5UzwAiow7RPFHzVfVsnFvqyesw",
  "key24": "5A5SAhbsoAcbiWTvMXq52iofWDYdzkQi49yY6wiAM1JedAj6RiqpmH2fdDRf6PQQbLL5n6g261wz2yraJVpRQZt3",
  "key25": "RiAo2JB2Ftjx4dfjxLXxUgD2juVYiRY4jMBSg2dGgH7mddYueaQvPqHncUTyqvahDwbV9Pa3TdMtmuMLWNgN8fQ",
  "key26": "58KDsjH2WxMQy7qJAwC4Sfdm9zEbL7BHAaS2ycoQaV4PDnZLmQC64RsfcgBddGmYJyaiRVxqH5nNmm5Ux6nsi2jv",
  "key27": "3AjvDoGFbhi5uyAAL8Yh9tgdKcLhzaAvRqtJDFJHRRK4n6tgEhMGVUyTSveVggpPRmrwXeNZDLVjWSz5EJ24m5zq",
  "key28": "ed1kUzUrEwwNzgJ5qCYHH7FoDNQVBoMKgxtvuuG8TqM8uqpsstganFF8DVfPn21VBy9iacM25ucM7xML3pL75Kp",
  "key29": "4Ea998KtVCKFEWa1DUZNdE1Sr1LqTQQdGv96FJK41o4cyz84YBYD3fv3fuAdcUButfJf573JBHYqy4jKebnMxpCf",
  "key30": "3e4tvK7Nk41Pg5t4VSSXagTPh7vv7nsa6CPyL7qnwTP5DWjpLXwijNvgj5FRRfxZFfnfXt5w2LEqvCUoxeJJ8JHc",
  "key31": "Uyf3UUtwYC4BMrxcCzZhatmCEz9qhyhFzZEwEz7rDBZNZ1z6zxdrXoWEbmkvoEKLLGEUajsMsGFMU55TAv2rRqF",
  "key32": "5h8pJZ3weUGu5V7ra1SJ3BkyHmuuH4NyWyFpPivYDthCp6m2W5dqgf2RAYW6bVAdiDSwQ3udJqgvKdCbDTKExoJ",
  "key33": "5Wsj8E1xZ76hmsdp9wY9vVRgmvKXFw14tAd85rTPWwiuPk2fPy42p8bupfcda4iYi8PzJr49mwhLG1A7mnHAVmz7",
  "key34": "5rNgVWLC6SWkGEyqA61SZNteGPPcYWyQuRitccbwyRQbjtGTfmQGAnzXk14wjCPs2mvKz7GcPrjyyCSpGAYuRbma",
  "key35": "5FCx2hELFP7UWutQAGvgYtfLkbxzphMd9yhri2pQZQA3pixDo68MCy7afZ5wat9YYvVSWzZFsALyVuxKLPQMehiW",
  "key36": "5gQxYV7CVEkqMTJ9nJ1bDBvcGmjp5FiuyeCRNMw91NFrinov87q6Et3fsHgn32fJ6dRgLhEtFmy3hTT45zGvufWK",
  "key37": "3GNqTCH6qJZmvYDpDhV4LV6e8qnYDM7Qs9nM5UwiPdtsv4BNNDXiuz84ej97GJv125mUh4Yhqkg7GgnLUgHge8SN",
  "key38": "2qXg2SMwxTM1dJ3nhaCHVwAR1f1hCFWFVzU86N5CXRM8W9xaxsthSjsN3Zu7qJwEqy75oxZDpoCcfYemcSFAcBUi",
  "key39": "Uw69iHBgxxw3s6U9tcpS6hvRa4LQkUsCBS7yKQHJjtk8rYSwSp31Czk5ZxJVnLSqEdwoi1rckN82hjzDyAi4nup",
  "key40": "39emQYCD5fmFirDfTR9ReCMygsakLXL4ouyC8uRfiReBWUUcSC7zcXNCAQDdXpV8YX3jNCRsa1tYCDickYU7QVxe",
  "key41": "5qBPpekVaG3AhPBogYpaGmL9mUpJ1P8AYZqRwwz2abwMUeHCvhsxuv66KuTVg5P5N1qTabvtMp8i5LqygFkhcGUq",
  "key42": "5qg2iwE2MK5SVYAYNLKAqTWhPkJswnnc6oFJRrYjgcwYnBtQ8PM7SXB5MBvUt3GSixiFM3tNLVSG6XrEK6WFYPC6",
  "key43": "619UjAdAnTHF3BVgFyG95xSzAB5tA1KmKEdA5WWe5SA8yxL5EF2hWmRQh2GzsZ2E19gciMvRKbJfHLHgrxk1zgX9",
  "key44": "is8tKhFaK7BULES7hBFZF2WnEsTTUeYpd5jk3W9ZQYJQq9iKNeMFK1AxnjZgo7xesRFcRSTPGa9pHX4EbFLXxVG",
  "key45": "2uNry1JTkxF3vZ6wUSNf5zsqUh1ATEYBXTsr5j164DeetAyaP79yd8X1S24M6cJLWxupQ7BC9C1krFq9Wx88iWBE"
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
