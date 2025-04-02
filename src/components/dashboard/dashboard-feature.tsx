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
    "5KP358G5dzogekTeFGidfJG5kd6GHkqzbh5gRiYRZgPh8xDNUCWjP4rG4rPMA2NArzZ6VkLEDRWuKRpKgXT1Ac7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FB8a2795c9LfVWuCYLZGHA8MUuDnREFsssmN31dTaKfVthpHfGL18YgKp3ZYJesRK2QLjmmzaABd9tVW8ofxbph",
  "key1": "566ft3rTy9u7HsDn2fgsNUKwRVsrVbJVMAbmFQGJqvE1E86B1DjVad5TdmV3tT5RazgFhLTeW11Y8Gs4xjQpafFL",
  "key2": "tJKjXaRpu9ZLwrVoWo5fjBN2XuPte1wakzuyTwqs4b1b8ffhWre4C7tMoiMZ68bbYaRo5yETVwnffdEQ3Xzcvxt",
  "key3": "5QGHGmsiosywqLXVMBwZXb9ntGoQwehmG1ydNCtT44LRX1u1N3HZE6eh49Vy1sczvTr4QzU2doFUmWvFN9teTPUN",
  "key4": "2SNVphERMSj5KwNxUNdi2oNsWyZ4QLbwX8RKeyLiQ6UcrnhUHA3fuN9xUqtL4HTJx2LQFAPEJDaLeB6fwpNoMUxJ",
  "key5": "56DfF5zNeyDhwxYeFcaRuwvFTdn4jhKktrez9cN9XiTGUkDuexPxTGTrJcQUeSh3TAsGaZ3aNNHebGPFn2okhcL7",
  "key6": "2CM3iEedqUNMJuSjtVE4zpVTPMDj1h1uX3KpR1FLpLjyKLQGYfD7HH8gV5Cqe3YxE1WXD7Ff1Wv6SNJi1cQ8NU5H",
  "key7": "5jdf3YDce94UazbHu68WFrdoidT9hrsZkcnqAmZYNTu5vwRLJdg9evxcfMTzU5K76iokcQ6W7wAS36bod2JjxPmF",
  "key8": "3JBgnYAEBa9Rg2AHoSvf1Tsg6mLfgDuRb34QpwHY7RuE8eKcTaiV4gGWsPtz7PbZfHDMQ9JGfBmGRjD5zxWUN1DP",
  "key9": "2LwmJNRMvyrtKtuxSk4Ri8iAPqwMkH7WYF8GieWgdGbeJVRwLYBr3hvF3CZDt7zNKZ4ezD7vhTm57W6gmjkk5qoE",
  "key10": "45LRcJxNpDnEpHKenUVAm413gt8Dohvke4xNiXXABXtqyPZUqTpSCdkHQop3tL9xh7P8CTarARgqZr2wuz8a8F7k",
  "key11": "2Evo8UnNhVudnWHLZNBJK1ammqCyMpvgA5dqoB65grUwUFPgE4ZMzvzvqaqeNoPQ2WUcni3yfZTYq1UQQDGR1GbU",
  "key12": "36bua4EDUwUYbQBDM8zT4kaKGcbVDoeovpm6GwRGP97pJ2HempzUDiMeKKf5JMg1JSjcJuzvuC2wCuYmMWkrDqrJ",
  "key13": "3R3soMWuhUUkFvhxuTM8DriGTua5F11xaxDj3nNxxfHAU51a67WG6ssxD3Cza3AGEg5X5KF9zm1EhpjycMwJKjEN",
  "key14": "5qsqVzuXkmjxRmPYc6ZLARcKpFhHhhfmFbw3R4g19QconNciSuZ8tFZwuaR9gjJ7sErFvzy1z7B3CkQ79WQGFCjE",
  "key15": "3tjbW1B8zbsLuoEURxhnwddbJbrANYTW35FF9P4LZftV6L8h9J1PvUT8MQAzNdqGNvmNBc6zEAsij3HXF4yojbAY",
  "key16": "32cetTMtXM1ayRno2h1pHUQxk9suyfH3bzDKsMPism8oZdv42SHoTMTKXh1zckysPnRwz8qXZhY3HRkgjFQN6jsv",
  "key17": "4SVsP2N39Ps491dwXkrc1yc7NmEsZNw5DV4LEVMr47stZqtXGK9XDHiou3oFkp3dAdFsBLu58FMWgpwV7ostGrkr",
  "key18": "3iUKF88emTH1to7n6vrWQ5hKmppauR1gqg8nfhywS8cJiJ7pNWVHDqJozywtVVWCDXrrQBGPhQjkWmgbqAJFU6g8",
  "key19": "3F12m3baVGJnRcSU7yA4SDf5WrTUx7QNwPN9pyNfp49JYEcie4Mva3bxLtasbchiLTeqY4xKSgYsnBtsbHxsyC93",
  "key20": "5iqRp9JEit1EgroCfhLS74u3HpXYB6JX81UsncNSS6VfrnEHXh8GCCGo2gZAmANpGTY1tGaAb1WsX2QXfYoNnK1U",
  "key21": "27AFmCC7kepxvmusBduhaETw4k9QSjzhWtxRnWrHEFpz2K46bKpmardzLdf3jSfxs5FyDFvBPeayN11hVuug8tLQ",
  "key22": "4hYDmYfoYYtAymUXP9cRRjDHgWMvH1JXxpbgEov9jcsUw6R3XJfZnc7v71ePDKmg2RSmQmXF1fnyMLdBdqdDfgTr",
  "key23": "uwU83M6euwCCidh6q6GQkvUHBjfZVjerSrdrqnhBA7nkAmu7mdVT49Q8UC6VHQ6j1CZx3e5rNwyzWEiJjuGXS91",
  "key24": "5DqZSoQW6rMpimNx4g1941YkbxTywFPZToLT33JFchbRKLB836bF2afbSx9cxtbzkJywHToRx8DZQiEx6hNosMHx",
  "key25": "41P7wjvt46LwQ9k91UhFQutT2mxcGB6X1cXYZbF9fWAVwe5qrBm48LUpvLTwtEFJL3dPVfmaBuwmdTLeVSwKH1cD",
  "key26": "2mtzCaf5H3Gw5es5pAkmSL1XbAdZfY3UZjczZJdsQa1DrN3CqXX8BfniK5Tvs5STdZrRRELMhFWytqRfJeb7v5Qx",
  "key27": "BHuwiATua9wp2P9qMrYLBCdXhsqM2yv4Ng1SUHgzLwGck3E3dbVm8xRgGXzFTKzvq4tXx6um2htC746naWSBzMm",
  "key28": "zxd7UHiSxnpsBwaBhoaDGj73TpmEWG9nbXBofmmKdzwQQZZ6CoEApVf1MfeLwHsGWuzCPVDQC4tzPX32LTdp3c7",
  "key29": "4nSwXpzDovqueyRXT1VTE42jKfJLtEmNFq7hZT1cFRnopzWnBWH65NKRVkHEiZLxJSX9KGmjciQU9KoE6vWuEKHr",
  "key30": "3eELaJUNaPPxUkZuT4MJN6ofJeCNpogzjxbRqVYHQpgsJTMpKBk9qrDfUGmNHqAECoy955VoFrqB8VjETdMA5HKC",
  "key31": "41WMZ2jfBWHc4WJFY4fBqkHmz47ZGwNf5Wh8LwCiFBXq9BKeLgjV8u32kBexT5nbTy2Etv7TxjuXcpBEi9Vd79gH"
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
