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
    "2v9kx9qY98tZULx6bKARc6VaXEwA4NUTX77bB6za8fnamhpLx3kFsQyCyZJ9ZDiUHpy55t62DN4sJ8kZEDpjSdB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tkLb2S9SYJjrtWuH9hXP8WvNwKj7geDHG2h3aiq4ptLkkWs5x9bp8pNCt68k9EfZEEi5yUrc1PkJ1qYg4iegAJ7",
  "key1": "njJvJA3TxjWmfgU8AFM7whQ4H1qHRJcgjxioLCBS9WKStv2tcgjTwALK6wDJ7LtMaYLEDE1SJTmdYaXMX65B7WR",
  "key2": "B5C22aNwQ6jgqJab5JWaXVDkhwdTiJvbQtLUPeME4WFuWXRWzvbhfVBNwirBRruTELNQgbG1REfZVwCALbyW5Bt",
  "key3": "2Li9tpLURBuZTorzuLrhs72zYv31BkN8KFdp2r5TDTC9P8DZvNYftJCPs9E2QyaXeFfYh7kXprcKas8Wzw5N9jdg",
  "key4": "5NMzYT9bTkgbECBUzceXWDp6BFhLsAkm6u4SkrnKbe9sReW4PC3x3aox1SP127RbdyCdD2dDNcE5G3crwqW8Wit6",
  "key5": "5TC5SPFKWQsK1TBeM46HCj7KZT8Vj3X7ngR9sLH6BkYUecW1KCV7DuZLcJiJSzNE854SDNRCQZR8bJrZUfo1cK2m",
  "key6": "2RW47xNZWYBMQ9rCUqtnW4YLeXwi6k6vabyWcBi3o8qxMHrd7hPYDrVcsRKeNuTQ6267eB7iTcST1gA3xHhBc8mL",
  "key7": "31vXQPiyTAm5YEKm5VkJEDVuQk7kgczAeCk9xNmTJ2Kjj55gKZnMsEfvadG1fcvBb8wBkLWZqAsrNag31rQkQ93d",
  "key8": "3tW6bgnKnqr1y1b9uA61TVxb1ZQF9hSeEML2KaM3he8higqdykyYzeKEsSiwvuVoL7HQM6kf2RzSzCbrVYLkzmKp",
  "key9": "3kdjMQHshkZ94KE94Q23SN7JvfpeFJcPtv4r23ysVNw2bYnkfRH9zZTqE4e5wDR9jac3tvXaqP62fDwAJmDPUvv9",
  "key10": "3QrNGDkvPEFDfcSKGYnzJ1ZYE2kEmkvp7cH1xehWiNsZmcuHmFJTL2nPtZYWs5sjaGexgRDNm5tgUQNBvSoh7fvD",
  "key11": "2V9X4YCARhiYBCtZfuqTcXzcVeFqFBYLQsVKPsjQP2qZvemeqwK8yvRG43d4RoEoKLSrCbpgN7XVYkne1Jegq1bb",
  "key12": "5S6EQxRnP7nGkbqnEAAhPwsHmpRkok2CUFRec59ZuSWwH32vNV2qntEx86PhuTSn9zwBTBCuoRcckRvDTiajUVeU",
  "key13": "kwCFv6pwox92WSTYmBWiW9NXK5yPJrZriuqhGf9cypXjLDcPKpyx3La3138PRaFK8n8w4WJbkubCKnw6x54f59y",
  "key14": "4teGE4g97yyirotzbkYTcG9ptBHMvk6cX2QcrLR6DrcH2qcG9nuBajyKRRGMGjGXkUgoPkG8nG2kq83GTCCgef4S",
  "key15": "66tYzRBpA6Rg7WU2G4dFTsazdupTiLDDArYyEiuTZTkdD5KSoGHgYe8SDTeS2j45W5QkxR8cUgUwXyvno2kdapjL",
  "key16": "3Rb8YUs5JTFEmfpMq1M6kMsweeZNLj36Go8TVLApMsGFqtBWQEkt2vTubeL7gD4GAps1bTepCFwqnhxog618pb6V",
  "key17": "8y1Eb1DP93US3QcLKYGx5S73SGXJ9HXr3FDWEqjzDU3myjfsiAkUybeBKfBAeXLbWLtPtc9eUMNQdvCBNaPB7xm",
  "key18": "5SEBKS4UfuXULhDUtA5GYkxCNNYYdohrYaU8NHxUXQXEVWBViKrfsiSP8pLuptXvHWXUyzUoQ9eGpWxm6w9A4sdz",
  "key19": "XceS2eE8pjAG8WdTQB43Vz6UC3DvpzjYwb2VuNgBCTDkYkMR477oWwiCQyFzHhmBKWsytnvNzLthqkKqDm1M5Ah",
  "key20": "34RmzNYqEUWv6nkhX95RabsMEyfCrvtavMpHTCCeyFtZpiwCVH4Jwes9uRyEhsxz7dk34ZUjLnSHJqGFtngKvirC",
  "key21": "2iNQycYEQFAteK2KQTJHZz6y1DNd1Ns6hLtNeiYSiqfFczteJtAhhiibgwQFvZXaKwiUY2BkEdCgkLK8dnX1yn5U",
  "key22": "3LdoVCobD47AYFw2A6ioqhr5G4nyN2yufxLPuE1g2LacZKHEcBmCV2AQBU42CWsAjvZ9wz3MA821a2ZBL11kp1WM",
  "key23": "5pydgcQMrcTaxaghRnds4mEe4ErDonZmdUeRUi54NZfNwmf44u6oYd3KZqu5Y6QRE6hVesfHgMqKWdyaXzQJhzSE",
  "key24": "3JSqD6sUp5Nf5zoVpssCSvyeKPi8hSPtm5hjSiPG5YnKMgaKWNY9Ea3BbHR6BYwT7DbQB2a9fBdqLao5gpubUK4t",
  "key25": "HZUmELZntDFMseFcoCn7df9PcF8ksvETUDzev88PfW2rydNKfmiS6dbussedbKv2THM2L8g69dGrdf6PBm2opHA",
  "key26": "64F3xmXf2w9NdwJnLuX8xBz3WjxAZzScviNTE59TvQbMXd3emKbugWRsHTW2NheiQL6XMWcU3xKWt7sBM4g6YpEF",
  "key27": "26NPCim5WKgcwAJNqu9i97MwVTP6tsjqVGYs1VTkbny9YoKKaxTWGUwAmFxs6rgK9oWZ2F1MnjLCnYKDoXbLFVE9"
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
