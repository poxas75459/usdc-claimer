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
    "qcp5ddJTjvoDeTmEKxR6JwjFCa72q9YwZHPfHn1shxhDd8k86KCSCy9Tyf5QcLU1DJ9TABs1a3NY5Diu2pqfU5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAiGDHD99T9T3c4F4bvFLG2QZK7p5UdzLkDHoTd3rVDjMDZbSKW9aXLLCPyJDep9LhM2zdTuugdzYCTXYeTbKVD",
  "key1": "5gBjTKDDBc2CfE3XmRJxUB5oZWc9ybQMGpub9ynMwYthdMbpYmb4dEV1sKsVdnpEqfvLAQckAjNRjc7S2QWMCciz",
  "key2": "4LJYkuQfnppeikQP3GZrAre7zpieLpGxbNLmhM9kG9waSAHaS9uXmuiQZ3TXhUEnqVxLYM95PCUYU1zyRg9AY9JX",
  "key3": "5rPUPU2f9uS6kp52mVjhS97cAyGd7xtnYYKFTDRGb5AytY6D2VgCWky6v1sVGVWTa5DBwXoZfPdMFNqoTwg2d7u4",
  "key4": "4Hk6zfj54xQDKjGsNFixWu2kvmdacEkjGEPreBACP7L5SgWyduLo6ykPBW2ZHJjnzuubYruZ6hK7seGma5VBSSfM",
  "key5": "2FWcsV9Dx5L4hg2yH9mSy2YEx32Whd2ySk7MWH9DTZ94mck9n8oWXZrGx9FDz4PsNAkngv8rvLsvbUd852dFE7zA",
  "key6": "29YDCcNrSaCjGEBktFK3TeUJufHjZHFHo44Mg4zn5YAN4BQostgTEj5rpHHWyKPXXqRvrikf2WTrTVbXzkbdDBfi",
  "key7": "EeU2oT6mKWQ1PxExvAoV3Y83XmZ1A8p8bucTVEGjBq1cvwoJgLnaYuR1bBApmRk1Lvm4P3ta7S6mDvgdEQjvRKH",
  "key8": "3Nq4iLQ3KEPPktvwsusHuVNq92nE8zavkUJjP5E564o9j7zPi6QQZUYGRZzzK5hCNMQEaHLmmhCSyNcX1FsFkRDn",
  "key9": "5iJoHBMtDeifjGw4bowcSoHBTomERjmGxrkCH94iwcPLuv7VouSdyjRhMzeti7czYeGHXeefBBG2sGCeaeJCNtCh",
  "key10": "2dUtiEe9W4b1uCw1nJQULX8NFrsVajshESeqSwyRScKYUCvES9rSyqyb9qQrVRUnMYyPUhci8JrGm77dp7gqqfpW",
  "key11": "3pa9nf9oyWXkoRnoj9wuZMMsU9kXSRy3xDc5ec7xj2T6sVj8bQ2UNrfsnp7kymFsgZpy6d66J4PCY4D6S5tsJ2L2",
  "key12": "VGK2y87mk529ogT4Pvp5NTk82GNJcx8GSf4REjiAhMqmzK93PiLWArZCT4EzzUQpYewGPhPK8F4j4usF3kQgG51",
  "key13": "3aWxYeRjeKF7mVo4aewTkQmWiq4ocXoSUbxe9kB4h6bDy2xQet4RCNge2Rg2jFg4fC6kdPL3pivWUwLxPwDxTJkS",
  "key14": "66pzjjyGFYexXb7r8ADQL8m47Dz9tzFGZU8b4kjR1dxG5TbJCHDtEAu7HwShyAP4xzJvPCPEwPMeNJAjvoqKCb3m",
  "key15": "3pXXDQSB9UUCu1kyBZEfs2hJsq7Mg1PcudXwT1WvCSzfrEkEdLH7PThqwedpCaTVmqGoCd7pQatvdChR3LQVXKG4",
  "key16": "5VY3aLp3a1iBwc7URcNeEqNiWKZQN4f75b1DJxXEqLNda8W6QSkYvmNCW6PSZGS3JkfURF3KN57bgkrLQA5egg93",
  "key17": "Pde53pEf8NHr25dRBd3t2yySXD1mLQTMzuw3LgkigQZgHkEXBRqQYQMBQiR5My92jZ5NWYX9rnsKmdpTM7Ja2Bz",
  "key18": "3RexK3U3jFtR5WUMYRbCdfx1gA869w7MnQWxAsS6chNWsYb8DZBtoYA69jRyieY7ug4ePYtu6qNpW65mACapzfZJ",
  "key19": "4K2QoFEpHvX2AeZ1n2UE4qAy9qFRhi2sMtAQgyNSxWGBeXew59Ah5tXxaJkM5zizNc4ystF7aS5wG5pidPAJsRT4",
  "key20": "2o2ZSuakCbUJYftjQAVSziThRqNGiycPjsHxX2jyWB72PLJYcK7nA7nEN6shz4EthkBWjB8aHtKAKEAcb85prAsP",
  "key21": "3Nr6gaNSGorhEiWyU2qd4FzWsSrZfiJ5CRL3bkUDme9befSQJUjun17hpYGdUEvwQd1YFwZZFF7CBTDEWkMDk6bq",
  "key22": "5NrsKUP6ZrRFpc5vxcEiyqqY85SxvQgGC5MAaMXduWSK7yYpfuwygxjW5mF3xvoHwfoNfuEwGThrkoGKovV2JAM9",
  "key23": "4uCpjpaSTVfrYhoA7tvDwu5xdFjdUVvcmf5iZj9g5VAnkAqL8DLxUcBDjggBhfKPWiEVomrZbBT4CBhKNasNNLPs",
  "key24": "4EjpcN5KTCdsRC3nFMURivxkYx11afD5CT5jD13P75MsREtuSrt7siefqxffaEG6QkVLYbH2ZRg39hH6CmVoQyub",
  "key25": "7Z2pJxfv4D4ysMBzNyK1U9cfMJ5AZ9qZNCM9vchE43UZdM33Fm3PFnj2MFxEVe33VX7whsV59QHehBn6ixxmfH3",
  "key26": "4cVFCGvzZQCWBRdDTPJbGD4ExcFyL5E132X2UFL9XP5bftcK9jXF4D4Bwau7DxL9NMvx5ANwfBePxvBhziziHoW3",
  "key27": "61qUaopZjV1rvYAiiepNNNrr32EHKtm76h2suMetJ6QjUJogfkNaBjHgRbmskLZPggRGWfojtC4XtEgXR1T3FpAr",
  "key28": "21Q2FZYxin7xswVx1HoLs3YSQqdwBX4HVA85qhgZyXfsrZMF9mcDbPuiQ1oB58QVcev6L9KXQThAyDoX7EJJAY2E",
  "key29": "3JWYpWGs55wL28JySwbaLzzYiwWavc8m3pJ55FkLweioEm12epcymNktHa3BRuNSGfgpxm4qVEWAQxTmFvTPegi8",
  "key30": "5QUzMJePdDyhw6Nu2TLK3NQkqacKB2TANjEeRFYj9AmaxABVJRVjfJJng4n8EDvR7S5ayFJxKt1rCPkfS7Sa6GmA",
  "key31": "3gjRZNBbE71zaoriAfJfq3KuxK44LDzG1CF9AKabS5DQeCPH2deuno6rB9s5YPLLmcvE5oZeazbpEJgXPgB6HL4p",
  "key32": "3TpFpwxP5FsVTMrPfvTaSaUxkbhD6AhfsPev4Rk4tZqhjPyobg97xb8qP1tfQxji1Gs2ra1iqCTwMAFn3fA9NT2g",
  "key33": "K2wNeW9wv7bNJ3yHBvoQLe8tx9BZV6MXhvpPXHXVx6nfmFk1QCfCTbw7oTHZpgWaNSMGjdGAZjKxmGCuQ48aHdB",
  "key34": "5iwVjYrDhDEAqqPeE4Pfefftbg8oSgxp2JwBKmW95UGmxdC4krdSdfwputsoq7r8DdR7dJK5PYWWMaFehcitQFzt",
  "key35": "4nCaMy6bhCrddA2GzNLzmBMi6PuaVfxGY1d2a8m9QeAAUiAAjbowNPLbrHL4kY2Crre4hWmjNvBetPmstjzPm7XN",
  "key36": "5yPCFQ8ShqdXXs3cGR1j5LcnVcCvABBQND77r1g82EsfKxpqXY7A5dpBcY9oersyPvwXRt1uJD9mtMMAZLf4HWgF"
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
