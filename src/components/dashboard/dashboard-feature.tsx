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
    "51CC8xrtTndUk5eZ8WncWqwVntkisx1t3gjM9otDA9zdKsjjFFoD8skU7iMo7yovczUacJFf8jeeA9ha7dWCwVfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzidwcnygbVGNr2vXLsoY75A8S8kkyuQcxsHehBh83foSM9gBA5r7YCDkzG635UcEZe4X9ncLFDS592qPnMd2Ff",
  "key1": "5C7sY3WY8G8HFVHBN2bHkL9AJWDPT4DRGgUKEXTnm54doBfoC3o6ao69Pi9B8q7FAKJFUzjdoZVmGLXPmdVauy2B",
  "key2": "48YoTiueB8N4jr8FmyBZbgs3qswgXxYfBz8tpYu7awwaktkjJqxavTddSGL7XCWzoWiUv6QhhJ5oSzqncTsXqLHR",
  "key3": "511oUYiW7zee6LjFVWy4peyvQwv72jGssz1wTubkoxjMat49tHRMNfJh3yTmSw4ST8pjGBTxSarCjg98VyLxR3fi",
  "key4": "47NFDVqYXKstb5MS3nFjzLJJkkxY71LC56D9FjV8pRLje1gtwSjrxnvqqTuv7TsxoQjgrRrecx1fyJhVkZz4yk9R",
  "key5": "eowdjgPht3D1P6sgGuZT9Gv5uRJGbnvCASeZ3PJCwWyXXhEonV7SGFNUGPbTf2svfRvbRsCeFdm6YZHNgonWVik",
  "key6": "451D5dw7vhPSAkSkArQCfqtqEarMePRkicNPbyLsEbbibAwrtSPetEk1e41jFfjUwXBdo7mhWh1vDpT1HN3U9cU3",
  "key7": "21G43o2J6opoakPWeH7ySVm8RF9CQ8PWXXdU6577cryfE6iiZ8YuryWAmuMgNQqwFQtusw5AudLf1rrciAU5sUy7",
  "key8": "3D49z7DZLxGNa5FyiKmRtAekpBrBsktTtFeudj9bPrbDfZLVsS5w8tFLSVcdfMd6xabtZfYyjNAbyTo6URHVgELd",
  "key9": "3Q85jnkStwsh9NaJuVn2gqEkVkFiHmGde1GQeNyYQdNU19LMMTnomqvPYc5oTtAFQAYrcmwSchMpt2pxNVaFzQoU",
  "key10": "5AAiAVeC8oyDn4umpZZuENd4LfrxFs5svXpokgSDo51HSR7qDj77oqgMiXhVFJGYqbWuJF3EkdhvAwHK6EBzmjho",
  "key11": "jtUkgjw9UqTtfTdTiEARStkgdUBRKBRhdD8wpwWawk1RcNRQ5zCtnAfStxzne1yt2d3uhekaDAZwnRaoTt7Kd7X",
  "key12": "ha4yQiAREJLd7doro4ktiMiihXbVWvxG4z3rJvMuM8o6jiUyeoqCnMfGycfJH1DwVnjBPm4HajpW9toiPdnq3pw",
  "key13": "3kdidRRdcRtdPcAiPkBJg52KiJR5aZiFk78tKAwLU7mQV1wXXZUHkbiyvzPuHN39Ny1Dx8VGEHmmAiV4zpLBWsHb",
  "key14": "5i4KosKwL6qH7arGsMrXkzQKBPeSodpMwyQenRyw3f7BJvur4hQaK6DUdQuXkmSYkLwT3qWKdNxE6Z9BsJjhDABS",
  "key15": "3A7MiuojGwPKoQY88VTJiZ5Zg8UR5LuXVxSh9TdoxadKwSBWzU5X7t5bSJLqB6c1Ch9xesBzMYT7R38QoaE2C9R3",
  "key16": "SLNRupb63Tptee771nabr8yS2AwBK5Lv7Hcg8HjQxC3zavxy8whUq8debUgYen8TUf7dS9vuKMpPS6Fun5ZgXGY",
  "key17": "3LRfXHt7i4o1mCCQHYk7zJmArF9XmioDF2DprJESUgu6xdbZ2zwN17yBt5QvmZ9W8NyZUTiRNmMtxgBZtVPo64N2",
  "key18": "FxiU7C3tNN1C7ctaXU94DkYbMcNfoi7Cu5bAs1KF5fepPhNpyRrt6pwbDFVm6TkvAjhMmP9S9wLt5B9ym5c6cgw",
  "key19": "3QXAKYGs5LZC95b9z5Ujqbf5RuyJDwsQvDfoxvDeGBTeVQbS8xsd3W5VMYgERsAXxS9s74j1nVWTMLXRucfqjVLg",
  "key20": "4H1Y8oQNDjWQWnsVYho7NNjTwBt2Nu11xhbPyC8vF2MWH9Nx7PNh5j4t4avi5r8AjXe3jChsnXWBv9E2ZkMDMtUb",
  "key21": "4fiBjp2whSiuRdUP3k3GDQrGAMtGFkT7XyQq3e1txF15r6BFTagedszTvmXEZX2ULMsbZUq6hB14Bq3TaqcdhRrE",
  "key22": "49NhYs88EPpY18iH1FZHshYHMLbFvDET2Tg8c32WAsdtedVJbiUnt3AoALjPaMfoDkgcxwXv13HSRfnr5iL67KRk",
  "key23": "3hBXysUmdw7LPBo8BXr7FGJhqxjhucHB2EHAUsE7s9HMpi3fWxVr8xpS8tR7XvZgHcCgSpwkgtyPwR2TtmHjGoHk",
  "key24": "4TsrnY8CpNmw4rswyzc3nNWARjokF3yFbca29Jv5Y3oLfcqMb5634DZL6B94tYAMB2xk5GacQNQe4W4w2RaWW9m2",
  "key25": "47mgE8fTVeyZQFuYVDSxDx3DNut1d1VZZUenCBq2VtP5zydnDAQkquroEHUbEXyvRwVsTLmZdxGmwszP4oo7shRU",
  "key26": "2LQDvqtQ27GzyfbMdFU5ZtHPVnuHAuGuRZUjtgWUHpMphWkaFve9KPCAGXd2Uz81QnpNXPD4irYAGncuzF4PBFCG",
  "key27": "2CqkRBMhA18ZEh7bH1A6uER3zHcxN4s2mcQWuJ8gUd6FShnhNmbfencA4JJo6F2FM5Xum6AyTdJvbLSdgXicUR7H",
  "key28": "5CHjvvq9YTxhpizy3N583zz1rQzXaL8zUsrkZeSjJPtrgmQDoJmUHYQ5qFGDpX9mhTiDQk2RNSW7XoaYJR51fyfy",
  "key29": "3KLVsAKwVCocAKH5NPtv37pEpjD6qDmyKBRcyxBRNft2QpqD5gSqG1MRxCE4rub6kawdbMHNcBknUFiUYiXmjGc5",
  "key30": "5qWJSvo7sunYn5PYtik86x1dnG1uxtM3UKv55HZqAVtt6pjLpJfxTNqDbsJUnGZR6A5pBHXeNG3V4Z9wbMwpvxn7",
  "key31": "2bEjthLUgcBK66swtoAxo597xgx6wQaUu3m2bCRB4TG8DEsewRc3okvNxZa529QgtiWbxLvMLHpuypyjSGS8G8jc",
  "key32": "4vE58rtNRc8rT8KG57UZ5fUJvkMcQJH9tP56xJnncPzAQuY6mk2RoHdjMogP1XGTQKiJ3aXSqQKMAoSLvsMGTD4Q",
  "key33": "4no6WFC2Gc8zmYqwpaVM9ZAW6EzeJz6AmK29iqjMKxDpTUYckmXG7dqLfFnbCgEuSRg7BFxkquVQyvzkndyG7d9u",
  "key34": "4zpzfrQkQpD9BoU2tphR1JyySDuJ12zxDLX74NNoLzMYycpNDDShGdEck8Tny7kQZEP3rL1jXAGVQeY7ud8oM8vx",
  "key35": "3hisbJUWt3WSKWTbNwgati7dFN9XR2CeapgcnVDxbRnnKQAHBmdri4EfzKxuukGSoZm8NbNJ6HfwqcxangKa4Uut",
  "key36": "4ZweN2hLwbzJqnjrrUrLURENp317538g4A4ejZVYEhQJkmUGD8VmXDKoKtau5ab4u9TD5RzsmYPQRZJjBttAqyW",
  "key37": "4PbozsPKfwu8J1rNUFJ7T6bbdtimMwvcaU9qfk4C2rsUCLbLskGao7FDH3vx1duu9NnmugwmSnybtgnSaF5wbvWA",
  "key38": "5pRGhhqPzbQz4qFSv9J8FcL7CmWe5Mv8yTNp78zbEdxN73uuKLqpNCaVsFWGLs6HggU9bq7UmP5w1o1iVgcmjqLr",
  "key39": "aNs1XkEmQJnAdRGh5jbQopBhu4HEvyqKZikri8qmpNUUSNeLFSPPUwTYWPpZrkyRhD7xuzcgCEqri4BJdXarH4z",
  "key40": "41WUA1nUrTKUGDbj3E6pjhfGnkikifJ4DGENAULuVo8hsuD9Zq9Rvyzh4StUZxamZXPopDVoJpYkS1CW1xmphG2",
  "key41": "2AT5EQm2dU5CL99Ss3ETNFecjrzgE7N4YMRxqs9fRiE3c44zxqPYD8mL6P9rBPk2oPn2sE8FfNipwUbMpMajHmCG",
  "key42": "36q9KrG3pKaUf374EEFcSGzcSAvgyt2hxz56zQKmr15Tn1QmZrCx3zMmFSAPbmSP2KdSPp9oxKdNsqEPaN1dsgyn"
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
