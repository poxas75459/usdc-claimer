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
    "2PLAbENNQQHynEeYsHTumpNxmdiZfH8oDREgriEeTeWpnVoTv3odtWXUb9Lh3BDTHWYe2JeH9vAbvyndrbDoFdhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHq3PvNLnjXQrZCAicvzKUB5M8WD6cx5tkWSfr8Qd8fGwLuj8ziXvFBeKXzRQXizLs8QEGAQnVmtFunpqGsBRw6",
  "key1": "4YSf5yiKMLJVzbSC4UKVCvbYaBpZiYnu3FFiNHiNG8Fgstag8XzGuRfZ1oKHh76z93Z6bzaA662BSEovxMaWP5zP",
  "key2": "4preahReuYpkSXj7Z6FXwYaDu4VcBQ6EqLu3KPaf3KtaEk9C4oKhczqdfxMS9zktdU53ATXiHpQPMvYgCt69MuKR",
  "key3": "52aUHNim3heBmtgzfD8pJMDX2VLPnwGMJfXbR5e89V5e3ByhLraAxjCpRCtgX7Fmk6kY3ccL6X9tuqoEmxx9R6kH",
  "key4": "4WMWyJKAYNU1RPg8195XrTexicALyeNokLAzvg1tyveR8nQisdrNXUamRQWgpTP5tBAR1ZrzVy55UEfahHFKDYKc",
  "key5": "4f4jh8nrNRzYdjNSTEAA8FMTF9FvMFX6u9SDWfnNTFm3opaoVnMo1eZaWQRSBhKC2HQoHZuPY9VtaVnQRNap9D15",
  "key6": "3EzYdgdweFHE4EETVnBwx8xSYb1U4pkgZdPSdpq1a5jrvUFSBywsnB5c5U1x7MNHFDcbPfZhSr7XYcqYALWHM85B",
  "key7": "5xc7LynL3vmLyBcmakSA3QeRtt92Dqwysy5t895cCsYgeCMSEtGr55extEwGL1HVX1VysaiiYtLFimgqcRTGnRCi",
  "key8": "2KZqDJtncgULnRP3LQT9c9zTqjJMAe9pCgVYetAYskmJmdAzZND3GPbmhk2N2ySGsTdtPU67W2fQJ1ohBH5qyZPR",
  "key9": "amnjHhuY8jYS3gaQyebrDdb4rQAvfrCJhBzAeCfFhrv1oPgndLhZosDi2eiJgN6paGALn9iqiD3SJvAomNbQRXP",
  "key10": "4CW3SEbae4UVVde98jcaTTjWnBmuYG1kE37waPrx4oxCF54n3kNGN12C4Mj82ccKNQfaQPowgra4fwV6UWc1JhTW",
  "key11": "4NXj47jVcCnyTV4YewoXbYzcCpcfx7w8QCGpJ4WEehryA5m41RzhkyXZKfaRydHa18mzeCJA9wBxTAHKPDG51MZ3",
  "key12": "4YTznQDYWScvskaq7GtwZne9ixwWxaeCHWW1Qt91psS5sx5dMGuzbN9KbUQu5xHjjLsHq6uM5TmrpoJ3U2Z48qtx",
  "key13": "3z6dCHALjYzLxbRpYXiBDw5Ci7nhmLzbiJ32Tzgd6pH1xcdmSk7VrP2FpU5roRTNeJJnCkMrJDdx4QXHof7EuLUr",
  "key14": "3UfMAUPRHfxnwZr36dd68o3xGCnW2pcbBpL4WomGt6j9mvyWRWTqDQD18CLLk2ssjJcCwHCrHm7piViuxZqvWvox",
  "key15": "3J9Xx2aPx3dMSLNZD8ZoVcH7NdHjbWE5ZhtfrQpo4fkR9Hv4B4gUWCiZ2YbbHpTABL1HTRD6ZXC8WpaVqpuh1zx8",
  "key16": "qJuZLTTZ9FT1DwcmCNWH34ZHGWZQ36KRdgYZG1o4KPiMC4v7x2AeVFLnZwCg7PLy63hpA5GkTWvSkesJjfLtcgf",
  "key17": "csbZvGaDtsEzWuGqqBnXPacmt4PuLWqTAcyUnWj9wgNnvttXv7rgRj4MYuyBgWcpzMnjz2wnNofMX5tjnsgqXoY",
  "key18": "57xRf3YaAUbohevKxBx734TCYUDku3EpvkR1NtkvY6dncZrU3Wgx7K2ZRFEgDeNxqa7P6yK2BDGNHSjCRkqayfwX",
  "key19": "43dfy4D8QTMkuteMMvDGhKJD6BkuSCEGRnkEZ4HRnLrtYZM8p1wmBJi9h3AYnGhvJeoX44z3AkHBMDxsEGnpR6GL",
  "key20": "oXSVxgNLLG5AWp1BeSoCDPs7CmWiwz1Qt2xzNv8cScb1i3jugqKNDGbnzc9ADoHiPWaGwy4i2GWAXkfF4eVXNA1",
  "key21": "5AKAEAmFko4LcPfceoVhgNBnLDe5PM4zVwBamuxKYeNzZn8hQhRodS6kW69kQS4MXm959fvBQvce7qoKgmRuRR1x",
  "key22": "25rbepMFUfou2kyQALq1HSpuwGYjqPUbQ5MoTic5L1LGBbmK4dzdWHhT2F9TaUBgykR1ArsvVM1KFCLemKguymGa",
  "key23": "wMwpooHD9toWrnX8HVz8Sk9zsE2smXRcAX8gyc7xvyapHWz11i5P2VhmDUfKiUhCvXojCcC8sQ42YJtCSsG1rPA",
  "key24": "3GVxvoSP7nDzwn45oJRLT7zQ39zCbh9bRf3682iXx99rhQSTVyVmgnv3KBcmVEzeUKGqeRWWA369BEgxdoqj81fA",
  "key25": "2ZQ7V1iDo8JPVTS31WxHdy9wpmMWsa6bLhF4d1gJKHigNSfMTQJvpVyvD2eFc2LsKLLEBMHuGYKeWUsdZN4WdGhZ",
  "key26": "rSFGHQk3zq8PfX9LZQHRGUjmcUqStv4ppmpX1xtB2rN1hTQ6Gg38yLsAucLSAQ3gfPKJ2bFmPwaKH1hAwkr881K",
  "key27": "3z5ae8gVvaWszmAw8CuRBzWjjAf353e8qJKtHjLyp9RRXQqtAoWq9UYQhb78KgMgXQWqczYCvhWCRqAKTwXhC2V1",
  "key28": "49phuXyRvybLSozqq8gVAexAHdC52maCW5KB7m6pkUn8RrDezapAbYcJgsEwgGYh1n4HWsnf19331LwHrHwtcytn",
  "key29": "3jfkq5CFmNWFpwVFHCh4NAQJxZFPU4PHEskN4WGYZtLYvHYWoUzc3bJb8cBXaFLHDFG8N6oB1K5bynXuWv18ZTsi",
  "key30": "4N9ge4FyQpQbvxyEN5PUXse9QgmhRNLLNpNRBJVSkFL2Yhn44U1RzDXEJsEnaf64izFKrGtCrXwLTS9zjKeHKWoE",
  "key31": "4FU6QBaLqqtcyuHEJejCPDMAciqaCjwWcHkrYZMNcA19eVWnNvBj9q6Cb6eDgpWgFQpTUYSrEuREmTgGosDoH8TV",
  "key32": "4Pm1cb1gw1vZn4uyZanUgC12NDq22ssCdYGra9Hmx8aMsVeXaJHnXqDXz4G3WRT5ZUDEcm44VPEiJ43sG4P67hoq",
  "key33": "2HKiTMNuGDHQYPgGe5FfxLxaY4GtfZv5RGiaioLcdSU6rtLiGP75q3kjmyFfmg4vUk4LLeDbPMJDERBFcKiZUGi6",
  "key34": "3oJm47KBAXq2ykybyGLNfWjwZDpThAEV3aPHNdEXt8gqTTjCrjtMn4bo48zfePmB5DzYgVd5i7uBSJo5RYJWpiR",
  "key35": "J9LLnFyZEWGP7GUs1mzNHXKjfyYy9hDYZ1XAzSyP6YTWYcWXh7sVcX5wcrken4KsXboNQiyqgLDypcwWqJEqCyx",
  "key36": "2rsqRWjxXGqR9pNqbgCHS3DFvaLAh7NXhx2XKmnTHUULzY7kAzqod67NDR9PpcJSQAV4236AjDw9n16oyA8rvibB"
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
