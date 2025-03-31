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
    "3fFDxmvNbcm9BxVuhar2grhYvegNnxaSaYhukzbBTQ1F8zz1nJ9VmNqnT59NLMP7AU2TKBre8pXnUeN6ifxw4HmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gX6CXzcCd2GVNbanxgUhKVLqwWiBYftG2BGTEhuekyXoZNLEbHc62iJVwdVANmygbMm8p8nZ4fGq3No5m9rTerv",
  "key1": "5cLnDbYWn8BZ4gw62jeADrwNrXYmVWLMbYEWeEfmjfWanWDT6ho86Jh2CMBGFgZeqL32qwQjUJT9GYRCkTZ4m9pL",
  "key2": "43LsWmbmFT2rPtw1BeoVji18ruh2XRB5x5Mq75SVPYUDWR4tFojgtiRx93MZiQ4HGSYqCyumMQyhvy3vDr3iWEJE",
  "key3": "3mL8EJfv3GaBaxnCkEWW1AS8BNp6gMkbGX1gRa6QxGPnzwT7TYJFJCRBubpjazuKf6RgsT8HHVWh4rCFXSm7M3RE",
  "key4": "3XMmD4tALHeq9QvKoVrM2QL2vVyJvjB9QNdi5AePpNqL8XWUa14Ckdtw6hKaKcJj7sSzLqsdSCw7rYEgtJWwwm5C",
  "key5": "5B1dwSCcrgGk5B3HvZxnbEqdQnn3FDTJhJrZYLpJAgNo8uw181Kfq21DS8YpT9URTFntjXC12nv9uhvAuzoYdtKg",
  "key6": "UCZmEthY5PsSsWZfUDemZJ3eQE6wVixNdXMPqGATNS8q3sn2zPYFUkZ6ZTGoEYoQjBpCXFDghgrnNFPi3GiJxSB",
  "key7": "3BcQqSGcjy2getB3a2tbKTV9PpYgVgax6gWuidqmRg8ToASgMfE58aD6hAWrpVkFErKBs5FoZu9THTMY4x47Jx3a",
  "key8": "2ym14dXezqnef1P3vsVpfWiPrKpwwepWTkLNfVWPprdV5WdyKCqhzNen5mBpbri54hp39pWtFprUQnE8qQFzSz1S",
  "key9": "3CZLg8MX98hzaGgKYgER28qqPwfwdaeUgfbYpMW3mLafy6XYMuwaAZRjaENUAZWnW89nei51CTnpGLthnwF6Q5bD",
  "key10": "4KqEvYpspCg917kthhydKBeaLt8XQtjCj6gChiNVVQAjTsL844wwYvL8J5eMRBHJzCPq3aHLESwTUref3RaDpJpD",
  "key11": "67ZQJLCKDz7wWdmSpGFVe32A5jamxRZyhTqv6TmBygwrWBWrkbuz58kJwzNoAiptATgL8y5UUtSrqCCwk2mNHMK3",
  "key12": "32uDuEjuUeUJ6eXrvdhahakibPz5qqiJ2PMfjbgDYHehErkP14E9nLRZeVyy4NtqLjrb1ffZAC2YvbH5oHED6Cqv",
  "key13": "2peoeaJXwnxzmSv7bJAjWN4pZTCBC6Jr4auTEoKucfDfhCYPWAoXYNrdFJ6m9ZW3A4cf1obuSgsMoYLqAACyN2mi",
  "key14": "4Ps5FE7Eqntk2BqTjL7qBChhChitjEuYp7NbfLANXar5sthphYjGEjus6zhijcXY8aZrGpptvzWXBU43hyrcg6Ms",
  "key15": "5E2HZvNEXnzyaN1yee1DxnoviWap4CpZ1xrukxF2wtvEe7gNeZKEipc7nZdTiSppm1LXVmpaoGonc8CiUxb9CB4m",
  "key16": "3xaZsuqdUfNyFk4EnqUE3mtiB6MsmLAisFEaCbfX7f4RJokbXD2J4VrxLbEYMP2VNoiWjKZXj6ooGxWuQxt8Pdig",
  "key17": "4vcD1MPbpVgwqvd7UoNCVAVJvXtzzkhCqabGGzUdGF42uPyAfPuP22B3fvCUjLgMddiqFTRHPbNSsj6BQ84n3NhJ",
  "key18": "3yUpsFFytqQFm9Z7CxuNZzSund3F4tWfhMrisRCUiP3CmjCSDpmPNL1x8atf5WYH5YB2CjPukcnuSBzvzATBYZpF",
  "key19": "48BqbH8oQSx37A7x2tKjZemQAJ7TBELsRqNaJkDUHVXZoHiF8zHyZWj4Dc9XGAuzdh8wvoW7BXz48Fhq2B72VRtE",
  "key20": "3U81nkcmjXovkAb2rmDwfWR9cCayaA3L18JhZMVW95NtaZM9R1VFjUH4oWStydAy9cDKy2KY7DygjY7EycN8De2W",
  "key21": "JM8C4EFUwWa4xkXdE8j5cWr1bvHBAecNADAL8iyytAdBsgUCQha7r5wcXnEqoh9PfbuJhxsC2AMFo5DQpb45ZyD",
  "key22": "4bTPPBvUZFfhsgd6NV8UWiHsjMG1dCDzUBcH7awVFGMHoUrnSWKZAAE6SSZstJhbP2wAeu412B9bcPv2BpQ99rDi",
  "key23": "2GkKg9dhC3GsZjDEz7GUaFRje5ciEQ1ZTL45UbmHgV34JEomFCJ77K6S8YXbQzQ1EPJwWEYdDy8YL4swoGhcQoYL",
  "key24": "38HPBNevtfGZHbU77ZkHr5RtjSJ3URqYEmeyDWAc3vp6WKDjMe3cv1bGka8uGgwFPen5qCs6BLfnCy7fiJApoWmf",
  "key25": "5j2e94o5i15GecDju7mnCGAiC7sjLQ9owebTuArsx9ihqkDF2p3CBKR9fWBxmjRSsXPBS5RcPRTu9aZ1RtKVv9G8",
  "key26": "4sZmcMVTuiCUwPNZxRKKJWJkvMSwc1MFsBGxX3A1wYKDL4J1iP5uLNkUVtoaaLtuFKMfY7iLMzRFp9mZzcLNEtCw",
  "key27": "Gjv746gjRf4np1eUiD2NWpGBxUdeDKT6R83Mey1nbWZGrznT4MoT7RaNTk7R85xKDxJ93ga6e4GMUbJqZJoXM6w",
  "key28": "6eGmZGCgisAi4TAk3iGNtYKf32App6dkP2NFY9MdXA7mrtuL3tdvfPYYXgSEPciZA6TMB4ggTbMN6wdtGG6JbXi",
  "key29": "TPwUcN8TuziRjq3VgRkJD36rxUFR23UW29iGKiGrLqUre6qHVCfebSY5iBipHTGH6Kh4HfuRLu1ojcuVoHMsUUm",
  "key30": "48PwTPSMq6C8BmjVWW9NVkVaEMwjZ8ifCTtctgjgaqWG3bG75KqoHec1fCVXgWzFEhYmX2rpBY7GXMU6ctx3Zy67",
  "key31": "57sf4AdRknu9YhUaJTUTWWR79evxCuqNZuwcsqiBE6vAYvPZVocutHXfAdJ7bYcugrYhQBTemEG8hqnv5XQkHseV",
  "key32": "5W7pzjb2gW1k2wtnBDguoBunhKM9PhvvRgvJ8GYtVNFeX9xGQdTqzYFVNkkffWVFBTWp6oiqytbY1WXd7eN5KRVE",
  "key33": "5ha3JZ9i2i17UjpQxhaDP9KjzkHCAHrXxQwEz6epbDTNXxkfQ9fWGymoTUKyvMZ9HS5myYqvqq2TpL1j46DeNaPT",
  "key34": "zuX4GwGRD8xfnqkosMx2278b3uYzBFNeN1EZKfHmg8MBi6AmXqFzDLLUvQxpqZvV52BGQ1CieLhv5GikZQx92HC",
  "key35": "3RVVDL9XcPyWfQZ7upZoBf4CmWXeniZpNc5Gh5CQ7Ye3MRTxUUJqYi991woQK5kezr2um2Am5XjtiR6cRQ2qjy2w",
  "key36": "5Y67dmogZ1TLeeLrFYSFfo4RAMGFZV9S8oNwSHdHkxwmhDB4TExVPD6fbD9bennr4HbXsqaYyPFvPKSsuRyJA3FB",
  "key37": "2rNjPbYhaQkkqtvhS9jW2Tyv9sK1TnA37CUqa6kKfLUdkDJE9s9NsDUAfukPsxnjPZ6W3gTURDnc32K7idS8YQEV",
  "key38": "2ci9vMnrQYAJesrzibrhNLTE2vn9B6BVuf9iUX8GEWV7yFMyyR1wKTfhzke4nYQUvqNoWkC8PgkHX6kuHXf6hKMK",
  "key39": "34PgBhbcZveJArURLyqyi9ET8tE3DiEqLTFJT5nFJimDsrbSxXUyJLHREUxRNsHNfqYHfbEseKc57HJbMxNeUJC5",
  "key40": "4592tSQVGhk5ENNpbKrnmcoqgEQAcLmEDNg59GCdZzpkXPGbeYAta8AHSLEddvh5hDZ7tFxsnMePhhDHbzEqnvTf",
  "key41": "58za8CwLuCKHXud3dzJNfQEJC8aHiNgEYyyUx1bCnf97GsfNAuBFAS5Pygyjeq82BpLtCVDeDZZvV29zR8rzrJFT",
  "key42": "3AjUetYu3Td3USkEaeiWD7RwCdskLvnX84UQEUbNk7zAHkWTKopS9mWvEaFb3tyouRueT59dstJR2a28xxQaaRvT"
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
