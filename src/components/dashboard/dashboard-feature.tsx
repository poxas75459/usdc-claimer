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
    "5tNStxspdYm8mpDiDuyLjEa5S9J4kUVdbRSVQR9nk7iukYBQqbw3JRPxWDAxH621V87PfvHFX5thJWvdKVDU75NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwHZ5uSKRBJZt7L11rWQRXjkEzmf9wR5AHUD4vxV6vxagyniE8don7gXEnd8JLB3L6PuMUhpps6rQkymGSe9w6y",
  "key1": "DBWyU1EGX6RfYs6dbTL5CV4gXz6Prbp7P12gy2e9oKDPpQAbvURZcE4JMzxHNyggUteUj7rxoyN6h3GzqtPNta6",
  "key2": "4LY7LMN3ahxAdf2RvB3MjzBiVFYbiqqePa5tkdighjBp8A7y252AiSqNxVFPRhmAMARPBQsK2rbrB9nfj4KL2mnv",
  "key3": "5THX7nZb9VkyiAHsqfWADGYKrznFU9aALW1Nshu2knygxbDxWCmNWj4X5ozqheKv4MBmMCcS9EAX9T2jvra1mWMk",
  "key4": "5DpY22Ti3VGTsA2bJuKjJPRHzvTAgUzcy1bvDQc9ihGNDVycdEz4ce1aJfuhYDwSqiUFTrJSGHqiLzVwCubVTdV8",
  "key5": "4b37k2E2QjKveX3QN9Ks8r8boxtPt3mG6n9GhUcuKtzuQigoUFyNVTe9W3LhUuczyZhroXxZB75BawpdCppMRywM",
  "key6": "5pXdL1m3PdoSoQrXJEeuhGpbK3Ef7fk2C216x7FyCWMKznyHPktabaB9q6gzamuBXUinCfqgSMpnyuPheLfGQHuY",
  "key7": "3Va35fRFiGHUeHmjiuWYAqaFH7FAPvP9jffEz15iUr9HG4EaE4BaYGHgqM3efo324S7cUGj7VKHrJm2Ngu2EhD2N",
  "key8": "wWZ7VPyjt2a3rmx2DfwgG5pEAvRg6Ck37NZRuaRo3vm71QqnDQysxCFjeBYCUB3Hx66g5vLmXcqp89jsQNCGLyd",
  "key9": "diiZZdeKZdocYfCi6hxHmbDXA3eyBy8AvMfEfZfxL5GTRZCcJnwaxBuzN3xkhH7zqKAsBDAXuKA1yiKZTLM26s8",
  "key10": "2WkjgjWnpxeGLwF9LtVc2EXCQ9JBjyw1gpjPR1RecEvWptNQamxhqy56QSk2VSvFTd8LbmWKV4MEZRuhZWZDPGwi",
  "key11": "3877Qe3TyUBqRhbZM5tmvuUBHq8AbpNoJ5VsdxWPq33Fjqmw4rxd99vyePL4jz6eg6N4xxCm2Yd5nnZkvxMBkY9B",
  "key12": "2i6drrKhGE1epJN5pcvRZ1MdV1XfEnCdsVLoSf2SLbh3fzuo9bsRhkVx5cm8LrmrbiuBRXD7zX5u4kidJSNvtuL1",
  "key13": "4ngLw7CwPCP5wAgy49ofwwLpFNX3YavqKT9r87ReCU4C1kcRvrLBuwGS1228DtjwXuBUJJgRpEZzFjBG4Gpu4Efe",
  "key14": "493VjNJJVDYVtV68vNxjGEjYoENV8YLm1idPqq1EyzQNGUN5EQFCtPDsNLNuc6z2b5t58Rp2H3UubrPNPgxffi5k",
  "key15": "5Cd1z6fnALrk6VSFEDCn8sgyubCGsoqyoa8ofjYcvEyYGwn2ga8mtF6gE4Bw5dKwYPGPTyMMUz64YyBTMM8zcxr6",
  "key16": "23Z1ZmpqkAWbRhdTYZGbihXPgTx4dygKpEb42rvkoyxYfMY8MoJG1CChnJLX8WxNcd6cmA5LjYmHKXdkDpaYuZTN",
  "key17": "3ksWpPrYJvwyyWeVvkf4UrGiZRvKyiXqzB39UXVmu7pKtzS8vPK2m1t6GfCTyJQ342F6XuUdz3epM1LUgTRhtJeX",
  "key18": "2YKgz4DZ6xEX2gyp6CPVKo8UH5h5hHMR7fFE3PZrft4z6JM7Bx2jNvBTpdGAN7ykjHcYBibkX1ocwVABWzKqcHmf",
  "key19": "53cHy9JYyJgQDHvaAZp8DoWKm3HT1tF6iubiz2WCm2VEa9PE92amPPg2CeUZNJCujKUAsscLmqRFWxMtxKwhZLUf",
  "key20": "22bgY9kNQ2iLa6ty27L1QSN9ZxK96DoCUk6rq4By84gUwKmDUS2HFdU5en7bFjic6A5GuiT4j7FRZUUMDdor2B72",
  "key21": "3rB1mwT3YQpRPSzMaEnrSMVicS4vioi6BXQzWsSasPLrTwN8YN66CeGtVKG7zsrh9pxGdw4DXQPnuhxLcT2zxyom",
  "key22": "4sk9Lx72J2su4Yf4yXfX4PGaVxan56njPB7DxRNGovULy4tShjjSr23q55KVVZZQj6h7sTzJ2NcnoVvnCYrWRgSZ",
  "key23": "ZbzTjF56HeNsY1BgdLTV3JpaRzYp9nihA4fUs72K31cqDH1qHZKC3RaeGQZNV42kPFRhtMccwLm6cGM8Jwrj76q",
  "key24": "5v8aFfPCgECrUW7pDo6BHgipdCFW5hy8iz1FpVugetuoNHzK3Zs1sye7FBXeP1jdmAXQ65Pjhd7E9uJtgQMqJe7S",
  "key25": "3s1c51vGMKntEPjXAGBHa6bRMBvNLconZ1N474ToLf8CCA1W8kiZT6krJjECcxnqbzQUAtYMZHC6jm7Gd6NJxyFT",
  "key26": "2eLa6Eu6NzzvWhhU2em29FhVGuxjzYX2rMEgRHuRK6BfeW4euErLk67VJwauNiNMAhqhkGF6RDNHqWirMPd8wK9i",
  "key27": "fm8pParD5qRhd68madEJsDJmKKj5EWvUKwiq6Xm3imcgkFnejT59rTaVJbuvJ1iFqZH97RLEoQ7bSnQ9JuyXoiU",
  "key28": "xTzcXhQXUS1QWVEw5yfhX7zXPaM2hhLjuBbsEVX6PnARK3faA2QGBZFfUJxByyDa7gxPPrSbgmnGnZL9hSdWsyd",
  "key29": "38ZPPxeWJNzfg1G7nwKUhgvxoR9eDLD8CCTybm8xoriTAYDH14oRoVdSZkHpqtEEJbRF8jw2qDPyxgE48wmdTMmE",
  "key30": "5DhQ6m9xP8z2r5K71P4BJWQziXsybS2qrTrHa69qhHcrM9EtVTxaXsb2j5UDY455Gw3ofPchmFcMaS6iEjxkCdsP",
  "key31": "EH6emSgJ7a2HQMUb4jrcZr8VFCvUUR5p9bfkBizMBNthgireSP4a6r18FdtJQkggo3HDh3Eube9UMnMsLWfnmiB",
  "key32": "H61FLjfUvt3SPPqVZCkx9ezLhWFbEevc75WDicURs3k1r8XkcVAgEq1rsbLL4M7G2snRrNKCL5bVZ19SmH6SiVD",
  "key33": "qF5rQ8e3M4ikxSVa45hYyEPwHxCBia7gHuU9ppWN2DtugxVFWgJkXd4PXrGqpqYndDyVgP6Jb8V9poZ2dkHR3mH",
  "key34": "3ti4VUXQr7MY4oEBNrV3c5uDGiD6ugdVpgVj1hWVaoXmRKPenGv16g9PYyDnd2Z1eXonpftpy1eEDhub1vju9x6z",
  "key35": "5UAxSjRi8r7ku5bvz1FkdAZeGAPFpSiuBsgLtMkgfKWjVXREfn65wdrAzs49JrAkhqah32f3TassLXqYnmK2VK8A",
  "key36": "3Cy9PX94YkZZYDkjtq35dvV1kvxvM8vqvCL7yFwpjZjzgmVUnYmzo1BqyRSMYXNuoKBy558t6mtWrv8g2Z3LPWHw"
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
