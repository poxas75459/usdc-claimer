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
    "j8mE9pkF5ASqvGEygpm6VfCfJMJ9wvsQf8XTytHqX5ZjFQ7s3hzx7p4PTaaU4Sa5UMMDyHaRxwdCecW3t6q8t3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFqjQCTpPaAEdrcWZt1wwYHkDEUYzNPEfqCGaVnQwLXjLA8GMrgTWP9dUy8f8J8QG6uVpD7z8fRjfDknXn3hgTr",
  "key1": "5gduNWT6d2ZAKzaWzuniKn5WZ2B6qdPhRMojmwCKnoWoeJmx2Vyamwavnqb2JGCZ5s8cjbfL6BS5yBxXFAScvxWk",
  "key2": "WJt4EUwsXwQ75zogZPVcHHKVnhJVYQGRJW1hhr1FLv1Z8LYngyoqnsKD2EWj9Yeq425Vj2fA2yz9bGMjk7YNvb2",
  "key3": "59SW2P75vvgPMu18BJ9LvLL3x4LQgQizkeRmNDJqHSHUipsLGDTcMUqLt7RsSXmj8uDWVbR4WjNByLdH9RMxJGb7",
  "key4": "5NuuuQwsCKBbiJwRBoHeUqFAVRTeJRm89R62roqvzQuUjizUJ94k6GgvkpfrsvvVAn9zkWxCEUva2HMV4UK7HBBV",
  "key5": "5GF76y3vEwpDgmppa8VFEgLU7f4DdPn2qQRcrHacom1R16GdDxub3bJM5GL5LkKXBWHG15TokvjmerGFpFDX7RbU",
  "key6": "5o5TkfQsj5ARjvQRrce5YVespW4EqznPPcUFpWH5faUSVR7yUzy66hAEeJAHThsxjn4JVcqMUzj3DzhuoCZFaYSM",
  "key7": "4JNEFVWiJ1bDjjRdh3tzBMWudXwCC8Yys97aRZhb3hp4nKBt8HntyP9NYwp1dngnUMPJAfV5Av3e4ZHPAGaduYtY",
  "key8": "H5ZBWUasF7RYmujQUsoHrr3r25MUAMpXMSugxz6KgqMCYmoxDGY2qQKj6ektQsiFeEgb3o1ikCrVLYjM83uMThv",
  "key9": "4j2desjwLgWSeLNn8fVCDfQHsX8dASeQ1sukcfX8gaMnYZ54GnuLSAR285wU4AwrkPaMqGn7fz66C4udqkDSmt1V",
  "key10": "5ZC58HsReje53a61WqkvTtNFiXBPNF4RNX3EmmTeLChkfqA5rZRB2jyhmrHtkwL1iLXvtki5qNhnFe1cGpUPwcRx",
  "key11": "55TmDVU6WNDmP651vkXfZSHBfDQDTi3JVqRwUrNFkVyGPAyvwRZLHCzMDf8QRDmo8Jjh8ZfMpsDmzqkGcewNZHKX",
  "key12": "5BUWzeshhJ1F7YQE6LRMZdLFoZQVDRZFJ63vFB2oyAhZedYwVk1kmWQkYSi1AiGyMYySztiRLjtZVymbsJxtg5tg",
  "key13": "3X4SZWTervtiGnoYFBqLAojpcoMDQkvQX1bHNjNH5Cg1vFPe482fueeo39uHGxbw6zC1isdczgN8VZ2EF8y3EKg8",
  "key14": "5mbqNGpQgMyZKoXcshuuSE5C2qCLRK4tCqdhmkDrVcwPLSaut4SYHWabQWgm68G7MwbU79gHtg3LmnMdv2grUd5w",
  "key15": "tdmLoP7YPtVsw4pXC97XLb24R9cg7L4Kve3NDsrXWUpHLg8fvTRw5fL11VDSDCSKJdfGwyraVXRTcpbd6dNHHFu",
  "key16": "2comdm3VrNphtNp9QWdQ8PKxT6zWrg77kvZD1iq85bficw1S7TkGYr5UEvBjVaCGMJaLtVneaBYZkjntnnxhHpmC",
  "key17": "4f36PDkUxNKrqRkDVARkHHQnWHYVrp8M8oPaLq4LNmCDC9Um21E4vdMyT1ST8m28csnCVtQXLD68i98TSJJgPm6S",
  "key18": "fCN7KrDBvMRPzZBmdz7YskPcAGJzPx5UMWqD9KTEhmGWBUTsLirSbabx9o1N4Q5du3BtNBzMhcaUBU9WdaW75Jk",
  "key19": "NTKLVsX5H3Pt2FCpwGESfabh9jNTxCJNUsuvjinrB3TsS5NLvZLXmBNvpVbC9BmfgzsWWcoUkzh2kQ7AoaXh4xm",
  "key20": "2DpFaP9A5TxdNoANTgMeGFZE4oZXHZ8yRzkquxqbEt4s1QquqsBm4PSuDvojUXynJLT7RvMFtusMpsd1gX6WHaJE",
  "key21": "416LBJwKn2Nn6Z3fo7RgrQLxs4kNmJQCiDtUX4Kc1gKBd23TfiMyZhzfJqVyLsmw5b2E1vMrfQtHEVPqE4qVR3mh",
  "key22": "3ovkrg4cTAN3qZbDmJdeCdziRft4wEL892VquoYZWD3yA1bAqL8HU3TxqoRfdbV276wgGk6yGh9e6apkZdBhkiWV",
  "key23": "2cpF9nT9ij7geNN4ueppH7zMPDBkFVwKvC6yKJvjbnki44CrRDduZsT8fxuFnzu6ymwXxRvLjr6jHYcN9B1r7RsT",
  "key24": "3zHtapNHbc54MfqXFrzfYjc9BGZoSAzWaiuEipBjTTBmd1TSH8zY3Ehn94c6mAvqRQYUQC4pfwcaRTxU5hgn9idd",
  "key25": "3F6K335F7iM8bbHi5gmCn2PAVwfHV8ADCFXkeRZNz4zUYhTKAqNtT9k2qmqjXuXVZqBYsG6WuYEeuAuKQAqkkm2B",
  "key26": "4QxYM2cJyxpJdZytM5dGGUjum59YqmLguF1nzcsxRvjMzKvHAhDCbAnFiWEFtwMifg2GDQ1ByVeDoeQxrSxbDRE1",
  "key27": "2PLrtSbiXt64p17k9ZwkCUCab8qhsW7LqRfrwXgSaiGV63oHbV2zFtHfxpQiZC4SD2iX8uWQx8f4udoSEB2qkGeP",
  "key28": "JnwFp2KyGogQVYzKn38nnHPBSGDBPifVQ4QhhP7gYo1vF62VN2Zy7KpTTcvqdZBByBTf6TyNP7oSgoyrc9Eveju",
  "key29": "2Ju11K3KLXh6T7WqvgBMnANiGwagdQmyvUYDGtj3sXT9zHxrvvVspj7zAF7Jed4weHexSjFWH1DXBN8e2Bhm8A44",
  "key30": "2anbNSxZLS3vaBZ85QF37nwvioSeFoq8NLevyERmwW7aV1Vk9VK8i7RBixn76nTF8MLV1pc4mz8h4TRFaABWCfWx",
  "key31": "5gTUtkvws2Wp2GHqFSYv6WzqYj5BU8uis6pgss3oRNsK4hHkAW54HMXpGJK8unmPfM2HKBpyCoLRq6n8LiiMeqRn",
  "key32": "4MUUkikR9WYnP5xo2yYuUfFtsQTyTZVEPWsVXLBJKoxS7TQQEveUtymLBZYgSrZSNiDebupPWxuJBeVdxCuTgVjz",
  "key33": "3h4va8NNSj1ZXt3HtSwTaMek6oiTs7kjXD31nGmZBseaRYVikUuyioesrwbHkjeZmijvXYasYDQdRHQdqDNmFjrH",
  "key34": "6644DZ7a1BGeVCNTnMNJBqP5DFf8GyGCFiWJ9i2k6JZ5E3kLfv9bJbS8iXofUdT5jKmTYRC9ymaxLEa1Q1EnqEmR",
  "key35": "B5UDwTB81f5MnBHLDsTnHFyJeazgmsjR1Xoq4KWEwZ2qyhbtem68Ywp37ZK2eQV49CR1xzsYnpWgFMN9pb9qnMK",
  "key36": "38oxjEzu1JmZPUSdHiLeMfT8Li3gH6QnpGSm21xf3ZWfEe7Fkj6B6YmGcQdtJKFnmUPC9qpFc3KFudQSbfoGNRbi",
  "key37": "2cLoLbaoFGk7QSmMGoU4zW8oLuaKzXDWgrQ6GTVSMqqZUdGvPEmYfmFx7rK9ZJQD22D8xUYrLnSGiXWHNdc3YFnn",
  "key38": "YcJSfrQumKcAavTFv9sr7HAoWzCmAtxN8Kvyq6ywWSsFYWeUCsiYNQTkWhCLohQ2Xuv87ufg6XX8bUXviRmnNp7",
  "key39": "3WdGQzsdjmDarPM139cWASxiniKEfcbU9aQti8UbcuabmLm57Qr6jKoySSCPioMvyzYK8CN2qYcCakmx64S6vYCA",
  "key40": "3Mb4rh4QpVcqZFunE7T5r8YTenCMUQwhT25HCCUCkmNPYExR6MAxjbjZD2C4LKdNE6766BvTWYccjREHeZL6doFX",
  "key41": "7hwBSDfaZqzP755BwR9axT4VZSPsG8cFU65wfSrGgZfXn9NPuSPAwwGKnLMJsHq1iRmG9NF7UnXdMj4RftB6dgk",
  "key42": "2CirQePFfGBqjaLjF81seUreK2LnRqsd4w4edcqMfKySk2xHUaYqzWBUYoYnrVeUUKJmyKDAzAV1WrFXyoVH1nND",
  "key43": "3MXmF3hqEZKb2p2hvrD6UDGUYANL7UqHADrJcfjYDwxN3LJ2rppPhPjyf8ztwUBiEfZNVC1XCdA4ocsyrvoVqJeg",
  "key44": "5b3Firzmp7K7wKzpwQUvACtc8gsSRueGGWkYspJeJWjC2esv1Fp25btFP2Jq9kTkic4Thus5r7kiaeeKvuz3LXa5",
  "key45": "siSx9hoS2MoJpySg86Xtom1aWCPUkto1iWXb5H69YNZyvLtLcpMWdBXvPmCpRsuT5r2gEusVtXRmeA8z6WZCPVB",
  "key46": "2Eyj6HvJ1EkrsHDMDWKGB4KqkgFcVCH5XrW1iFobyGJRTZJUtJfBxaAr8hdLGrT7SCQUewrzNsXJAqqBLKAWCjRv"
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
