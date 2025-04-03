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
    "2t7LsucAaETfpiHXHvrca8uSVUs1zFjo28ACjQ7Y35uQRcBg2eb2WuND5uYAz1JPUrs6Nakc2VSkbSERvbfN48n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cxtoRk7Cdbz3C5rFkidbeYpQPY5VSn8LxopgSkYMEDPmtRhSXPn2Bqhn6fvPr5hSj54MfKcXhLCzEncfXBdEW4",
  "key1": "4sJsdNZre87u81PX4S3kpeeQvJVXWv7YGAmLGWbxzBCkJTbAZxag2UZ847YB7GLE7UpCrXmF4PtVmCrkdrMoLHzu",
  "key2": "3dFyoDL9C9Dy74X1GPTvXegtVP7PahPtzSHiLCRPRXzTqEw3yZEuh2JuPZ69FxGg6iXXmKtvpSiTtMq8Yun9D6T8",
  "key3": "2i52qxD2LvGXU4T2BvnQNDYo1ucdT4G92r2FwjHcRP6c4gXuqh98G3bHWH8gW4DnvFVzfwcNZj5J4p7BdAc1iCp7",
  "key4": "iPMu7Ga6Jxiy9UptA1EKapZjSm2CoCeg2RPwiSAFTr5gp6gHD1TCeqcS8ZLV7hAGvzeJ25dyBp19vazUdAdbJQ2",
  "key5": "5rL6Pj94yJ3tD6PPC22ijSFf3AZ5f15Ax72fyH2mPyh17W5urymGahDU3vBrduWYd45A8tQEyZ7qPNQuHi9f1Bgw",
  "key6": "5N5fju5TXyaY7SsJ33sDokqx4xb8Xq2NSQdEkwpgnGX67eHTQg9fdBiwWmKvmqBjrSroF3XusuS6uTSA8j6XwMdf",
  "key7": "2J3QEP2rqeniJ8JV7yt9okfXHzxy3mAM1rs4TGCg9KpqRHzt2ygExXKYqGcdYeKxSxiwE2zYWwcGnMJeRuoLdVBF",
  "key8": "38HzKHjdSSkw3aPDyBsYpE3hfCekSfF8CT5AFJCYrgcGm1mr49hzJXTUfaXYWQYxZYvc9dBcBu38UjfFV6Pw8NrM",
  "key9": "5u7Wnd2GfukDX4hTSHTvq9bSYko5K81cioNvfcGM3Gymzh5nBWycswZuBtsBKxcHNojd5gUkHR8KNHG15kL64BTF",
  "key10": "3qJnpALfd1RdW7eXZ4Ns8cmR6QsR177SH2czttKdChA6CCByaFeRBQrbGRMDtF4ESXLCQfeyW3QpfJeDJeu2bwkc",
  "key11": "5jbZwBzTJ13buQq2vyBne29iXufMX9sMWhVagJ4fshNPikcv3YUAQLHLd85woLUmnTtse4WNgEkSeXFTGWLA6kj3",
  "key12": "2CQAu6NNUUeWuV4G9x1TyEFU15izYV97bHTwNH1gwUddsTQFbjkWArY9pYpUwNDYgpD1Y5FPnF8fNFwfZo9cdvJ",
  "key13": "59VHr7aAWqw4ccrTK8acA98wpHZP8oTAzxDJnnnHEoHDJWHGBLnV8bobWY6c9zsJw9f6UVcvwWegZzpe8CLDu4Tw",
  "key14": "3d52fMVwVYsiG6mKLAqHPD8fdLXXzkg6KaP3zNg2cvZPCqFAoNS93BMwUAgdbt7pEqAiXenVqNZrYgBcA97LXqNz",
  "key15": "4tnPixd2DeVAr3ocmS7iN84xeFNQkG8W64DFj4xaYhdYGjHfLt3yDBn4yndJS8FUsuco78hJ5ou9eiRJzFrJmxjT",
  "key16": "3LppEWjwyZeMmoG9ebcpXGQqpfT1WYi2jXwi5obEvSWXYZDMCVo7i2eZLb1DAL5HQa7Cr9WrvLVirPjCXrytvpQr",
  "key17": "3oKg6KitbLcZzXhoxw1ZPVkyqCs58Z4nNmtquoHzZ584UR3Qz5yGjombmgJ6YDJo1so5pbbEvsBk2cdXJyLi3pHJ",
  "key18": "9YDcFttXeKT6zDU7rZc81GnkZeE7jUFzMzsrviY3JXHbsgx9y1fTTDj9ADQfrcUvwkydp3S2VouyZemeLrSpHyu",
  "key19": "4YYFUKRjNyf3gz6FuvE2zjkF6M8ox7DaGNxMvXbNE2uUGjb11kgLNdk2KMSNv7d9iM8NndGTrPiiefyaMFpbaLpP",
  "key20": "5DZyNXbxd7KxS7SBdz956S2Prj7UEk6TtkQDdWj5DaWLrkz5deiw9X7jkGH3DbmXVW34PJZZeK8nuPu47AVreHg1",
  "key21": "paed4GcFniDHDcbn3zgcVEzVzQfeQa4VNfh5mzfbjbEU2MDVg2ZthumBXLi7YE6SngKEYHDifuGSskqVjZF1Kbp",
  "key22": "4dwUCgi84cn5qRNkoXKa8UMZPcesbMmAME5rV2jjr6gHecW8dQL9YFopMveuFc5ahY4497mcftp3LcA789SCyvq7",
  "key23": "3ApPAdChpHLwZ2xZdaHuS94By7M2Vj64jBeHXnoyNpx4q6PTjQfG8ppwCS7Fi71GXJqSTt1yd8Tvtuend7YkggUx",
  "key24": "2khgVgrEvkznjS4bEMXs8CXDA17crfn6t9JMhDVNU1q2mVRdHKkduDqLT8a6JLoeyHyL2H82vPuNrzQZ2ek8RvEW",
  "key25": "5ToPAV6xMvX8CQdX4Yduqn1DnSQ2EWanUjY9NTm6PX48pR2GRAFgY89huxYY27WcFyQenhRDM6LpkKtovaZSWYF4",
  "key26": "2d8ZSMpTUwYLHGTFanb889Kamo9aDJGJrsAB4JqVS8vdWW8GZGSZe3SZmGLwFXTzpSvgLFzJjCLwAkY7mbQek43c",
  "key27": "2Z3MaNu2dp6ymG2hMubzbtcUZnqJqMF7tLD4fHUzitSxiZuP6RMw4sbKPFWh3cd3nsBYPLF1hDq8DRCY8Rx9VQWc",
  "key28": "2xDhhu6a1sMsky7AMXB1VPA3u7tMLept5b6HRUXEj8kc47zD3WH7qrtfn1GPEywJCnC9odzS31uBmEJb3p3oDHhA",
  "key29": "3kGJkxLBRz9srduDeRtM9xQW55rZrxvXLJwCzfWQTSbyzmh4izxDEcg9WsWGT1ThwQRVw6FxfzctPfrtDnz4AZZD",
  "key30": "57fVeMNtPfFrE1rRy9tUmb3LggXnUUAAduKZR5t9GAaWxHazP4oygWKLGkSBPbLCKAtCetFkGQn2zaBgMrBbCoAD",
  "key31": "XdfFWVsTfxKZwC4ApSMAYpbi1axV4of5mGXhaFDuendxZK4RV2ep9L3WgTTWd5fwXShtMBUJ6d5yeo9CAczdo2r",
  "key32": "4maWP2ofbyHVo9HS3qrSMm1nEokdqkuVByHnJjEhtqmSVDHNEFm7VEj31CXsfkVLFrsD3aGaBpwWrrwBUiWzVNDQ",
  "key33": "3psMJyjdN5CD1zE52dBUussJeNtEZVDuTUgWGJQ5W3iysJrwwUaze62GJEyGmrHeoXzQttEby5964jNeeddE89ZF",
  "key34": "4oGzFi4nwXoqzZEmJZxpKEvpeAeWubVrp2tWgC3fe1p7hjfDryHxyaaTr1fAh7qXW79FSR6SraSJWjLEkpvnDbCc",
  "key35": "4MxZHhGWTjuXwtbL7ekotHdXor4dKQ45fpeFKqTMoWRbfquxyMiyvNVEo2nRf9mYAfYniW2sX8TnGATqohynJubq",
  "key36": "5B3ME7n8964Ze4ubTcmdw6AJG3DGpmNveXvxx4SwHwwPmTACqxR2jgepiS1NyEYAkCWXPTvdq41nAxdQ6vEJE6gN",
  "key37": "2ZkFgm9ueJtqPmSj91jdaCVsdznyNUuu9pUBqdgx2kYutcjvZeYnw9buS8RZ8dwcSCLmmoEBuQcgk4pSVCL6oRwh",
  "key38": "2YJnyEbwDvVAb5BbqzL45oGCCorvFTZZ2Mm3tKLLVLmpyei7i8CLzEXiCM9EB6ZBfc11vuXY8Jxz9FPjmFwBoE2d",
  "key39": "2LXJec4ALV7HjhjdiYHvyUA9uvKBC23ttttkuBz1ZtrCYtTBQv6pjyAci9yM9xyyjNGitG7Cmaqw4hZjNsrqRyL6",
  "key40": "4A5mm1qLJ6jHGabUjrx1XbE1oWZcaN4MUTCBDVSKKsxUL1W8AasJ5vaBivnZEaPV1ckvomj67pmzU44Z9K7mPywe",
  "key41": "DeBCVdd8hVfAD1csFnj7sMPufBTx1ZFk9E4prZ6oECWscgBno7EQeKAXvhH3uhc7K7A5R4VU6Tiu37eA3HoBN16",
  "key42": "3p8NGvjEgy2i8LAvTX7z4uvMQeD1BXjry7YjHwNUcbf1mrSX4eueLKPJ4GAKow8qvRWcn6LkZkNPnjuJwJCpqRjE",
  "key43": "5m1NMAg2eZZCCjYPKHhdz3FGZLGGDCKVPaHxL1qrvKNPtw3VmZPDVgKzH3u9ih9yxBNqZF94n2NfMDUEusPpe41o"
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
