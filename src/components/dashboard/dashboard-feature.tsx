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
    "6ehzBMJws8ayDyxaDh6Usj4QNK3LUYTPVbs6RmMHPPHVfeYkQArtLkHJJ5vxB1mkRgJiX99gfguBD8BkgkX1dCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJSsYj5gfTai4ks53AyW4vMWrUztKR8TZCr6kf4fk1MYRUEuerJQ7AczzLjruCsgxjd9XhPYayKvTziLhCwUdJH",
  "key1": "4DLxqnRkAxkTTH9QSgns3hhZP6h8nqu1pk3mFH4SLMxUkoBsidUqsrRF71WUdz8wXZtxDoFTqc4ioexor1EKyEfp",
  "key2": "2voRN7zDyfSvV65iKVzjZmy8Zo9fwyxmBUS2JdsAqfM2QNYJHQ2cjJ3CLLBmRfQeNeefqFutEGsawcAMoktKyhDk",
  "key3": "52sn4Fm9t4D5ibjYbfSRojPv1TbUWDh26hxd9M7hKkjj93tf98F3UmWLMHNJCMa2zK2zV5QVzHTtwGEfNP4XyVEH",
  "key4": "271e5uyw54xb2xxKnwzVF5aRTC96uC1iRyyy9yrPLr9hS6QodomQLNQD8drrLv1EsAh6expgm9sraoSPCsK3q6r3",
  "key5": "GoNsEBpXjdiFibfBAQToxsjUPBm3LxPuPwpSb7yUjb37AYPLrUKnZop9LrDr9kXCT1MZnnwgihwvKFsRuGJoEgB",
  "key6": "5xYEsw8BuJpuGqKK6pSHUo4ud4TUf99QNkEscCVJrBsdTG7cbenRQmVSJWxiQsxHdnh9ZPKV2kEKLTQnZ17zY9Dd",
  "key7": "yHaXNsKcwQ7VEE5BXTCkCuSme5jTwyKQppHbNLFdHPw647RBAH6uRaQFdF9xreakYzZv8BzcNdpzgkh7WZiKf2X",
  "key8": "38YaMdB6v3KywbYrpfHWaSqxB3rVucUf6C1hjH8R43yPo67zxqn4kdyW9EtUVpPD25TmBqY9Nk95fp6Q6JSxNP19",
  "key9": "3L77wzW8C2pMLVFsoiKbhyg5JMLYFi3KTHbP9U3m2yxh4EWtiqBpxpKJznxBVwrg7qwZAo9xKh77BzjJQrygU86j",
  "key10": "YoHACC6Yj65UXu62hF4GnLwjDcxu74UaRfX12UAt9cui4UPFQfuc9YYgyZgLQ6rzVcoMwRDdp1D18MNgqrp7NX7",
  "key11": "2qvePezY4MGmsme4RnDk2eYoJoXoJrNNqUUy7CL4vUpM32tQSp7HCrHdVuVcDNrVtbXyUC22SmS4Cv5pmLbFRJNo",
  "key12": "JskAS8x2q37ZCVHQoBTrApi95GcDwFx8D85eGBkuPE3UHpwcWcaSGs5jNBhUAAgjnwMGw7QfNfyGuB9w3eLimct",
  "key13": "3guPnzurfjbg53pgA1msuknr6CbQm8NNn74JUdNMrn92kXbeHGQhFPyqqRQGsmnjEtBt3gyJfNyHX1u2tnZVp3Fe",
  "key14": "2j6viL1sgan16jMJC2rTt7UTNayW7kai9DshWbq3vnBRewDkKvJCWpcyv3urgkRUoSjh5G4rgSicEWumEGZmJJEG",
  "key15": "3t3MmPs6KKaCj2kTYbeEfVNo2JogX1GxojYsJszrWKTsMT5DBdHWyyp1fxW4BRRW69oArhtdWD33q73VahjmpSd5",
  "key16": "3SAyEYavZNQNPYqT1CsSV6oiZpe1B41e1vP8iAoGnM6UzLKt5eNEZif3vw2byZEoh4zK1fhz9gHch1EgnbHe9yuq",
  "key17": "3cfqPzRo3eDzKAuKYM5mnw4Kjw1L8PRNqkSmY76m5oR42uEivTnt7YzHAJfumoWUkQUC6NEo8PuP2z36Aa4uMqRP",
  "key18": "4rEqRpb8zu9gUKNLRw3ASGNEbn1N6bL7rfUZL8k9VUvgqGHis62WMz2dr31fagNdnVZhsuajNKGcjctnZtrpuET",
  "key19": "54XWVRpRtjMSkXunDSyo8H8F9HrvLzFLtzJE4113BQK9jDV6LYt6SQAMcYfGSAJkVuF4UKpkMEyRudC3skyXLTZm",
  "key20": "4qpKvDvLyP7BEx4p925CtLmizCirHePwbQfwSLvucHQV1XaucaULX2HkCssWcEq1Sn87vTdqrD1wc24shqAggvZy",
  "key21": "3QdZXdSUQdwfrFNpvgnTJhziRyMW1Bebmtz4yHZ5H9nHVsCgCHJ78KsMD8yFAgZeFMAEJFULkrWJ71aHh4YwRC3N",
  "key22": "5NhoY5i8dd6P8Ww8vJR4g52BmksrYURQG8JkDy9jujFbaaX7sY6RP8Hakm1Nuwx7Ud5fL9RyzRhL1CfiL16ikjVd",
  "key23": "FCFkP78Uphv9VLmyT73C22UbB7uT7SuDW3zdaA43UZTeHC1CitwZm6vDBxPNKsUmtQ5xR9wSGtbKG5B5kCXPnbU",
  "key24": "33KboKNfk9tXCvXYe112XHdKxDUHDxuDRLzJTLR11LG8438jcwUqbNGk7Cr3H62s8u8um9mW5ybTz5eAdnrGwvW9",
  "key25": "2bpm64DaZxkifPhSxKenKzhNg14VwRJzqbtM1tNPKhWxZPYC8smLto1RgyeYDpr37Ghh11dcJ5tEvzJp9V6oqShh",
  "key26": "4JjPdqk4jCPnpwksK7p8evjNvM2FHqMJyfP3gUD1YgoJmQWbtHsjjtvH1R1xTftWgW8BgMy89g4YSd5PypSETSin",
  "key27": "5aC6RM5fdU5DtjPf82X2W8s9yH5hUyJqgJR3Kma2QmDbAUcFySZ4FpeVJMpJ9XEjsTjAwH2G8egkjwiqwFVVR4gB",
  "key28": "2TR29QxjPD5gtETy2AjhKFGMpTqt35E4XddXwimuwyg8Sri4VnkQdfgE5wFLfVmRCu8AvPSyRqCNuQWJ4kDkbVof",
  "key29": "22SoMtgUcBhqypd5N8D54fzUj3Gh1Zb1in8DhUHd4h8a6Dkvjetzgi8SchDEVvszkj4zVn3ANypnAj7e78EokTcX",
  "key30": "HQYbx8kLsmCpK4S5YDdhoqXFyLPmjxR7Nbfc7rPgyjhKTXn7pxXXPy5HR5YRHBDRdi8wnNRNcRp9VAfYz5iVA1n",
  "key31": "4AgTUqmYB7f6XECrw6Fu1vV1ow6cQsRXEnjYkepFqbfemdAb2in6NWNgyEeBr6bbPpwjUTDdd75yd8fpiZ9ny8TV",
  "key32": "48ZYoZqHTSRs5XWTP74mTocZ6YzF83FX7281N7Lxk8nB2EczHyetKJRzsxKeMdY92GRyxvEsg7XnLbdnSGT82PNh",
  "key33": "2Gn8zxWBjeJHzwciTovKwexxxUKsdZW1eRbzbbfBMUyRVGhbj8SfJxvT8Er6zBgGLQ5kJ3ViU7287FDVzyfpVVzF",
  "key34": "4nYSBzWC2yCL16kCog9jT6uvBUoGQrQhq37o1YMTDd9BLE2uQXGLsBN4hnsgYZYctDtJFgLF3VVuqGe7KqyNq3mv",
  "key35": "3Y3xdGfoXZAmimFTndLEFVHSKoKBsgMPyiz8YXaoRh6vTBEbaVngriimhSNtCi9R8tRzDDCmUyvKgKQjBjVnr2Zs",
  "key36": "2ax5D9NbYtVkdA4xipcuqPoSquVWHMip9cM1UprWcr9GxjPyp9HmUgkap7mKVj2Agyzt44u4Nd5T4NnXZGLgJu8A",
  "key37": "3KKfjFkPNnvHZSsiPHQuXX3vgoRaVu9kJ7xP1aTXh1Xf3dDbAdaYbT4xZjoajbEYcXEVnR1YDMne67MZizsQERRQ",
  "key38": "3ePzzWvxuvVXSWU6tmAHtWE6vJ2am4WsPuwjsznbA9ce8dZXTKuQVAdMFQR1e6NNdNGg79FnqqH4z8gMZFaJZJ2f",
  "key39": "5SGMcs8wzk2nUh3q5QMe3CbwgFEuk2a9iquEbCnZY1Gqaby9bPu2GM8voN1TXio8MAAW432qArSc6LukoiLGjzni",
  "key40": "3qtaiAvvjnuo1iMA3xhaGykYnCt6pBrXHzH2fQuPcDDjarcCwSMHetEsTT7VELYC49D8xMCJCr7yeVwpKtkh26bM",
  "key41": "354QrrLFtiH8K9F7h3fGgquiyDJgx2axunJNR8bbFWmTCCLKBJ7GPfyHYfSamfEjCw9jFuyp2PQ8bzfbbW9R2pUK",
  "key42": "47n1enjWyiPqHbUt19Gks19rQrQ1Qp3rsGJ6hpQxHjxzayQdyVLEfr8zKe6hnzF5QKRhnjpjdWYJ86icb1vYkyXt",
  "key43": "58M1RdEWysTy3a9MB51MmRcBC4vjdNqi3UCe3zAgWShCUhC6XwEJcjqeibkim9vJASHihrRTs3KfvCbA2LReE3Wj",
  "key44": "4a1rMmdvWB2W9icywDSHeHMt36myo33cuUDxnDr7eTrCohtoDgVcKYYzU6XCKGYwj8LtBQRgmM6cuHrrTfonNRvb",
  "key45": "5VW8RdkG5MC8SUM1jaVXqsafvErh2CsQgHGu8YFHjzjaUQ7WrWQp1cCrog2UVB8U3HQX9mRoMCptcRvFWHjQf5su",
  "key46": "213ZA22oKpofKTfkbv3fqzTAXqWeCCe1WCfjB5tPVvKLeoc7ga4qiUsQtDHQpf8JbPBciidPB7kV6CGLchMih9Cp",
  "key47": "2PEVTtRjo8WsvALdaDbSxxeGZBeAsfgGbPBzDMQKtnAVHMb6nokVwuqfRUWpsQEQ2UEwAD5as1ydc9LR7ACXZGzA",
  "key48": "HgiqwQK5HRqSjjsgexNtF2uyEygXpwicLNZkJhTbE95doC27LUoXHZiH4xsNkm3A9EQmkgKNAfSyLhsHhgziMh2",
  "key49": "XXrSUETuXFD3CzYWyj6ZYfjRvTu1G8CwYYo2rdXR1xeQ6UvmtQMbHQxmDzhAcBUbPDoa18VEp56ykTsQMRLMmDz"
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
