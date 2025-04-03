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
    "vFUDbyqaUjoEHAjQxyL9MzyuuVGsVCRjhKgA3dD35YBWCiYL52VcZsH6ZcW7UBk3drWUmwTbQx2X1cFxmA7wmGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mzdz1Zx7d9DNSmwGRKQUzWD3SfNiYzNKcrM3YZBFfvfneBm9vfyxmsfSv5Q17SZuftHzMtrartD3fBKbVD7Wic7",
  "key1": "uy9LMUfPWN69MrYKfYUFtHdnPPHdEHnSuSb23Sj561sKz1GSNBRgVXvqu8rQQTSoyT1yr5Y9Q4vNJH4qcu8zjbX",
  "key2": "5LHxY8UousmscNPJp36XMSj52GPPQpq1dTD1NZ3Ha6rWPGEGNUNTt1LwrTV1dLNVCwY842dRPVvdB4mjmqsEnDJ6",
  "key3": "4aJKFk1VmkxJjtj4Td6VUJ2T1nGVuYHHSPRCPsSEazvmo5yPFgZ4H6TBre3bY5hpDLcRkdW2NRYTYw29KwFJDthU",
  "key4": "dDQwD25ptwym6Y1BxPLm4Bdrk3neFhEUzYu6QXdbvwsuVGzQNUAg7Ck6ogn1r41to1jSxdoPBw468PKa6U83iPU",
  "key5": "4qoBC53JFSNMGhkZrqyVfq7RieaimvwtNUzjyDzCn2wTkX7LGbNwC5yyVEE5GZ1qUB37EbgDVJe1kHN5yEuCaQQ2",
  "key6": "UgDQTZTwokY6Yk8zcu8eXph1rMjc17aM7z9vXVLsP2tYEmeqWGq6CFKPp3AoDqvhpqkoiFGXn7k5JgTR9FPHSYo",
  "key7": "4WPncCd89UMahu9oSkDLszeY6zvhtNsqQk1msgqTtTH6P1efLbG7tdmxSYwoNxeLskhMB7USgpCsp6t591kMxBPA",
  "key8": "3L3yUBJuJHw8XMDqAY2d65iPpW71pK8aJ8JUYR8eLEXZ4LzGhRwNyATpiC5RmA984US15Ny5Vc8kPp47jXSSLwLE",
  "key9": "5fxwQNa9asmubRuJ8gsyVPepWRP5FXDB5hSXbC3URd8YYCRUYffjoNaiXApMy12teuxQh6EaTjiAK8QMdMmvUHHM",
  "key10": "1ZABnkqCVEoY6SnyG99DwTLEviypTKK8GYmRJrSXZJxeps1FZQTXyorJzzznfHxNy3giDmDVYpiNta6psEPwvCZ",
  "key11": "3o5Ft4ZaNcCKsRvuaguVgxioN2jLFqT4j2n6GgAyYatwMzJg13JiCNRpEfjk5Qx5hgSubKFNde991QHKqHxT7WBf",
  "key12": "5wjsSgRYGo3F5uo3UhZy9kn3VhUn2fcDRp19CsD27uPqGacDayzL3tVGpcNVS8Eb1mtNdCbaqXEPznFMrPScjxoz",
  "key13": "JBKkW69UENxCT687uzc8ZHXipbBzk6bWdk8WEaxx39eHzeHu6PumKAuYhRjRPLBeYagxTsfAB7VKUedjhUHxstN",
  "key14": "3DBXdvfq63T3ghQuuBvSfEettEvaTqVR6PZ6NVPa9nRdqxgotfyNmAKjUsaqRopGCdgiGS4i9FSgynJouV1TeGH8",
  "key15": "2r5VNUTYPM7otobG2P2FjVg4VBYP2fadG5dAoAA1vgvHXuCHpck1PZkEdQrpR4EPPve8EVjhP4zGmyL9FuBMD3Zj",
  "key16": "2fzK7paDocSAaBLVqtFkua4ZHQrGYMpjV6KvFACtbACiPEJmU8xD15ornKxcUJm8x29ECYMmdZzyv1xXWgRcbrvm",
  "key17": "MzpufnVHpG6MM9rD6bzjc8B82hBiS1wEG8Zk9LyEBjcXp6DQZqdp6x8weGX6qWhjkhMY4zQ2y37KJ8UHBAamR2R",
  "key18": "2BHHuFzndfnnz3gisT3Eb1EL5BX3FKWzNWgFWpockcdpUdtAVB3zecM1uHGMmESucq7sJVHJrn68bDHpKALUx8VZ",
  "key19": "3QpdovgWmJQPXyKusmD78aCknzXte9yGQkiLK7qAZHNZsF6Hx51LUcbcRkcaVFB5bRHFsyvSNBn3CQuUyCYK9ZCi",
  "key20": "67UoJtJxmDxWPBSb9dHXPVAembJHk6ejxv8gdAoY5s5dZ6jRUrVP9PhfBR9nM8NLkmH8YFidkvaymGH8rM55mjnR",
  "key21": "4rRksr8YmfcbfVRoKM4R1L5q6jrkgH2UWQfMwkoWqBDsFn4g5xTAyDZq8kZHRo3WYbdodk5Md8m6sGPUWsHrMPt6",
  "key22": "BPBhwMiiCnjggVszAvoPhvdpbhcupumB2NkiUDEwYx9zDUPbHN2e5bff8Cf6YMeumCRkqnYi8cyaHtFNTmpjL2B",
  "key23": "4TmFYJSvyYqLc53RKv7KZZ3H2q2LVfT7EPmJGewxc59uqoSLi5983kYYPneP2thRvDgz131HbGP9D82YmvcwTZ5D",
  "key24": "5sqEgHAL4x1vSkSbM5yPDrUMWBdpLVj3qeWifpdYW6yez9EejJY1D65UC9neLhffcv12TxLD9MDPUEkEsb9jGnvS",
  "key25": "5yMWQ3KftRuBeEn1bQpCTo1RMUwKsP4aENWjv5TA5xfS4mDjLQdnGbbMZuo9aWnE3XjTbFjvmumJiyZYZVBt7X3K",
  "key26": "5TYuaabT1Dx7LFQWWubWZUzCE1iC7Ex7sT9nTisjTjfg3oUZh7tXE1JDubGpVEyJtKtLV4A6pPHwvAhB37cG1eWH",
  "key27": "2YrmZ6dQ3ktfSTRJEQ8hfyjmrGSv5zkZGicQPRSxKE52r3haEUWF372aGTrbbWc96NWgs7t7QUSYbhspb9Azebr1",
  "key28": "3NCM1TkeRRDNmGDaqGqrtjeJq376o91fRrhZkGUqaMGLaAdVZuHCYavJzSBCSfyFACdstPEWukGVYnG5R5Ehbx75",
  "key29": "aDZwQvww5mfNj7Jk7LgNKPhYhn4qM2w4hbCNNmDBCC1sm8t3PCaK7ah1cNwt76JDLzDrqB3PVpx7su8Z7VxPFPY",
  "key30": "3vpbHZom3YKWucZKqopqgF6JX897jyegVY38y4ktFtj1KaYdLvRqU9nTmA6yeifAUivBXfEj31GAc5wQttLFaYoY",
  "key31": "2RUMwt8vvaEa8ci3AjxvmsZkfThih3f5KcL17ypGMYSydwq5u3ed2eeQapEPdTngiCqzdYYaam3SQneypceMiUQH",
  "key32": "2m4cJiziJ7dcsv13htXvyVYPECmyosThuio43XgSngLdgLwSHXdHdVQQ4egnXzVQcbm4YSZxuYN2uVYLK3YaYZS7",
  "key33": "3NLmX8no9GQpQVaCzX5aNwWfMUSViMfFfmnH47JLU6jprrz1jNB27h4mTL2UiEQwiQmEW2z5zHjEWGBXnpkTDMJH",
  "key34": "5hPE189Hctdq7sQ9nqk2FSTJZbFiXvnLsV6YsPD46hofnESCX3y7Qmb25EezKNedxvz8JWHibxeTyMasqNgNA7Ft",
  "key35": "hD3WHNQ8AtPRvsuCqsMhbXEF3qrtnaPKTdj9fgcsmNSxKbmYKKYTUpHqLHEQyvvLX8rXe4fB5rSQRLFt7tmbCt4",
  "key36": "2qX5ZM9uKaeCc8KWG4XfJt5hhXWb3L4njvuqC8W7gtNz8TdmrCFxXxvUsCn8eFFhMr9BXN7J1ZR2woX5E8LnYWSe",
  "key37": "2VQCRhCaU9D4RcUmxETudwdZozsgmod9Mk3X3F5KG66k72WgVe1i1d2wpAEhns7Bo4hRwWkuQEFQ99PS1L8zbywa",
  "key38": "3kyJQKL2BQjRoh5BYpk9jqafdQRXB6KGRLkhgNjUWHcEiQSAmxmdx3q1GSjms7SHLPg3W1zuL3AKWkDfd9GgJqEQ",
  "key39": "5YRwaKVWcGyrQ6SBDURQo9Bo8TDpaMieKNDWcKauPDnpC77EDVcCz79smAWe48roKm7QTS9gth7V6z6Yv5ppFhiu",
  "key40": "2HhFCp4xrcojQXH6nYvKLy9zKeXnWXYi5fczXzV6wQ5BySNbd4wBnAaJiRUDi9Y5sqGk8wXRS9415VWfcbfuEpFE",
  "key41": "2A3DsBg4JYonMDwjoeiMXCJQdgAW4gVKf3i6F223ZvM156Z43CsvGpURbHBafa9pamW9NF11j42kJ34yFYeLCtD7",
  "key42": "2MJEShiNmjJpVRJ6hQfS3VQPpTU5owRJUvjPxtVjSBFoFaYNsRvjaAXHvp2kQ6bwDes77HNT6wiCbyxLDR6rjEkJ",
  "key43": "2nVVe8K44AyMaw7nPGowotmBahhGUD4Gx62fGRQF7UJku2RHLtuYEhto89e3CMiTjAEzwEmvGCKwWR7yWh4nQvc9",
  "key44": "5jAfoQJXHRwYtHyRwcFx4o3VKvcpgVic1QEBfotX3kYDqP5bhQumKJAyxBBgtVKrRQ2s2ik7W2ycZLZuaKSvc2kT",
  "key45": "2eztXcQSWAEUiYuwWQEiw57eMKni6L31rZJAhZVUw9AML7BySGub7WvFFCkK4kDxQxJ1LQw4WSw24C5YijoYLKUu",
  "key46": "3ar4MHrdQqhKrztuaKs7V1JTkmvuEcbE8FKtsr3Y47q7zVDX4KZBmSTogLx85NDrwiu8dHESUCmMPX3Fiot8CxSz",
  "key47": "3Mp1WukGGnDhf2qmH4tnqSePfoQ67PLr8jGapc9M2fYMhjvTR74FUhSFaw3BM2cS4Hp7BHigA4CVEXEsEhrrtQKe",
  "key48": "3NmckZAzpTDQ9gBbBxdVDswSGmfnm5bNit5wYZtRWAwvr6g7tR1LwSaEVd2aatGRdaS4tLZDTxWincgCy7vhFumN"
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
