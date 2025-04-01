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
    "2n7HPkHqaeb85e35eUNTKMqMzR6Ev2hz5HCfEu8HPqW3ACsq5mHD83oqtgVciih7oXbbqdqGM6Xq9jMqx2KMnonw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1X4ojLWSd2juiPEMuEbEpSXFJKCoCguRdqtfDs6iS916rgkbAyEZmXNV7oJLhWDdDYqVtsL9f1bod4dUzNbcNiP",
  "key1": "2Rbisi3RVVsJsW6bMPukC7Hbv82CJKWxLGgD8vXSCPPoWPpss8iyhEU5haVXeR6Wz5otSGwgq4nsYtbTDEWe6hc9",
  "key2": "NEV5tVBtQ6kWdwpH33XNMmd4pa7NEM7aWkbVeKTSHAAxbCAvNQoqgkvuSidK4x6SCQcsZMHLoh8LGnSAw4b58bA",
  "key3": "2pATYFGbCJ9Ar6MwshRXRUiGw2RJceYdGM9zwyopCk8RX42t4CanZGuvXx6GkyNfqXkohACyicj2idpAvzkaMChM",
  "key4": "5jpjfTeWHbrBm36gS2MwixjZEqTHaRVBcRd64jARWcDVFGQ2vCesHfPVY4h4sev3UfpVoRigNcfyR2WSFbF3xyhK",
  "key5": "3YVtDUKfAuMgstrZNmJdgu71TUpRFN9yoBPba8ynaHgE5CYUCv6PoKpev7ofghRH8Jsb23fmziKUZ8UXNZBML1qf",
  "key6": "3JTjrPgnxvp2r9XrzCCJv6ufhfAHDh7pSPfwesVbkCwRbqFMQJd19F1RLJz6c8JVf2MQZwZfYC4STdYnBjPR6M6c",
  "key7": "2x6PdESbzStJVfqqpZi9ZMyxsWrF9JUSAfc9WRUuXvPiLpd3dRMBYgqu4nyaR8unLPey2YG6WHSTeNMnhwofWA5U",
  "key8": "3wEWcEhrbK9KEHgffbVC4LChQNLNdKd9kZA4iHgfMPDVZwbWUknqz6dTGXUyrMLp3UiMjgq5JXytPKV9K5mKpdqm",
  "key9": "4rw9JyTM1yFxxCJ7ujLyefdwMMT6wbsUDTyKhDEyLiCgh7hufm9uVb3aVZjURXVVUBEwuBfVhgXC12FhjHho23Sz",
  "key10": "1ZHwHKiGCycMsBytH7hYAsKLCcPzCkBR3EQoPJNH327jFXto49s51Ex5MF4hpM6JQNb6XP6ZowaqUDkjMRXDWs7",
  "key11": "CBHVpfA9ZJNQcH9yL8v5wLFXXvJ5Mi99jYvcMsCmTCN5HGDQh8LoHCxRk79tSKWAWXfWCT4VUEjnRkMi6cqYdC5",
  "key12": "F3FLTkzYmLSRMT6E5fka3rJdbgfreSq6DscJMCSRnZnQDqG4ghnpK2pBdaNunTnWxFVgLzyjLEBYznEfbzsv3tb",
  "key13": "2FbRMRqJgLC16CbG9gjo5H62VzuEmhRL7o7JzgE9Jq5RLaBFWB4vCZ2M9bAhxZaT7GQwEB7JGTsF6W6dGtUZSB3h",
  "key14": "3yDGZfYePDEtCK6FtA9AyJQjx59GapVrNP6RdexMehBxsHM4NX9zugD1UVrgsbZBoDkoW5nWAEdMXvedkeGx2gE7",
  "key15": "5SjfovBvc2ELKvZC6jxXiLjTodcvnH16pkHWtk5RrcpJ3c9MyEbSh7pe5pmLwGGY4oU1FjTKQwdHw9w1sos8yXni",
  "key16": "5KaDMgJEkEj4X4M68QQmNJkXje8GtKWZDVWav2Zbjb36UhFUCtJc89teskT85psFChu96Vy6QaB3WxMaQEHWXtBd",
  "key17": "5HFsmVYGGQ86CdULoTcrUjtmSTrhittdDn5SDFEExHbwrkyAPiEKhydwi1488ZaFthBVTMv8iM3RPvvGusMAC9Wb",
  "key18": "2vQQxA83ytqgHnwito29hFwgX2tQCQb1SdK28mdxgNTAA4qfjT9DmhGJkJCWpAMvZfTtTT7U2rshMaoTnuLKqgQN",
  "key19": "Po4kFikcj2oRHHtEaYQofg52MBasdVT5JV3JJ3oCk6iFHAQm4R2pcdsN5qPXEk1rk1bdnBJDPeb7WWPGeTwVvGL",
  "key20": "3o4XknH3rNg42XN6mfBmQE2KpdKJSsyaxiUrxYeCmkKL7nVN5sgBscXB3qtt4gmWLyR5L3BoJ5wqZZSAXDSqs42F",
  "key21": "5bv7GJfJ2QZ5nzStMhmJKSeSQGnSL2QrKYZZG7imkfCoQ8Zx72eN7JTRHXziQBhBJeyUAhHkzcirZ9NM6MFvkkaT",
  "key22": "43MET2nme6RW97t2a1JRxKkVgDA6c75YS6UBKwhNfykmpz5HsgDRL1wZB28QcGX32Yy7RenaFcPXxLp5NNpwDibg",
  "key23": "i9wnwUjhVSVqXss7VQHzcBFj9HMYYAHRPNFjb6krR6UFA1X3JibUnQDRctNdK4cGwxeAuiuTFWqGSf3LgC6btPa",
  "key24": "5mreH22JT7eH75MKtH3q1VzPQjmTb3YUMreA1NHZsQHExp6UhbopvyPYowZc9rYWfK9C5VThqJCpTuYZ5ytHS2Wq",
  "key25": "4EuFrkSXca9ob959tu7MebCZGVzLMf2KPNwqjZfPB8CPmXcSK6QUb3dHsR9QmuhofabJa4rkrarG1NjAXtsT7j7s",
  "key26": "3wGF94PRcRtkMCTqFHUULocgAntdiNGEBi3Zw3145GuZu1ChHFRghU7YTFNe1iKWPfbWnCcH5hwyFBFzvWaft3ij",
  "key27": "5WY9kKCrYL2BnmtvEW9M4XtbDNvoc4Ncg8Ry2nzLj6YuTP1Ea4jxnq6BDZ4EDDeB6UkbNHgu9fLgUPfZBDnMn34K",
  "key28": "54rMjWAA4GLaHFuZWDD24JdqYTZ1iamxgH3w3D6CgMdNxuheMojc58gzUDPheXbJPC79fsd6MWbZNro4wAAk9My5",
  "key29": "5RriKWonhbxHecKTY7D8dDixYBuhyXogbDNkbiWnoy4NLfmx4VS6m5nfmMPznFNuv491ezPmrSfTD4CmgozKcFfY",
  "key30": "65P89u3eA95CGvH1ur4DjBYvPQrLFPL9fKs3uyfeAwX2BYfsB6RnJgQT3RFaPgAkPtfiweFJuedg6UcXz6o7jNuL",
  "key31": "26vu6h5Q1SbkAsYMsNmXBLCWraKx6wSEfeoFMkDiwBahoZ2yMByALqZEzxMEDRpTMkFq8PQECRTqiij2bTFuxfSq",
  "key32": "aCBUFuXDjUvzr6hfSCekoABTGt9u7aymMLbWrdkn7R483GxtU276xg51ucRVr13kovgRh8hCLyaCJMow336neJD",
  "key33": "5eZ1t2fUafRr28aKg3sWYu5h1URq36KBhHaP3DE2wPgFQ8FKnEYZ4Ks4kF7CKQmW2GAmzdRrBdFBbuXoMknY2mC6",
  "key34": "55mFDbabgm9FnPWiSPNMQUgoQTZraFto15Yo5gCTXPNcBL3n7V5eRk155qm31ebVSttE6Yza1H1zn1bTstS4aECa",
  "key35": "nenmUY5X8Hd4uGSyjxJPM3yZGzDxpa2x3NYNZp1UCF3dsTU2hWe6qGAz3znZ8qaw7mnFuXUfhNne7Su27bxrXgD",
  "key36": "571osrTSAkdV9vFbKDoGs8yPefpazWKBuGXyKKJytgu5gZDgSnXTV9G2E4rEBg8PpcAMAniirEKGWp7M3WDvjr5w",
  "key37": "NChXFoL6yKjx3gbvQPdmZLu7jm5yW5DJoCSL93sDHkg4eTsVK3B5Bi4pHfPGeQ5tpgGcigMsUsH6BxyUTXxSYt5",
  "key38": "5emAp2q2Ykvi4JCJarR5fvd6dsBcFW4uy59rZVSha2ZxoxyZecgrsqmG8q7avhrHw7H3B3inQGvnz56ruLhyDmma",
  "key39": "2E2PNsxaqeqcCqy82cVJMDS3FoCUeSzF47mmF1gk5fXJq9CuSuKbf5my4qPxByxjc6fXTiNA19d4FudDPynPiEm8",
  "key40": "4ZgfFvBdnDEzaTZJotVboqwAWizm3bGx5X4aT7znbUQXnpXm2RHWVVCwY77ZNH8w2GosEZHuGA87UUt2EaWJ8M66",
  "key41": "KfwDPHv8bYEE7eMrfVfwBxLZEveN8jvoFy9jdif3goP56FkynroDCNSMTzssdmAC9TdkNvswvFrxojCAy8aXKVK",
  "key42": "261X5PZDjuFrj6tfi4nye2iLG1MFW7x2x4LpHfS7kDAFroR2wJhW1kvpH7Cg1KmB4ZGXy2Hk5SkQsobgko5Hr9Jz",
  "key43": "2ru9SyD8hLmrVGonBmBTpPrgN4M78kqMyfFypAVF8dKSL79Pet2DSuNfw6V237XhgyVsvdZ3rJidnT1eojvbhJKS",
  "key44": "5GcpXmCGA3DYGvkfUpFsm8jEeoEw4Ex5qSthVuYCcxRumSsaemtqjY6tooCu2GFjRtwpewW78JyWXEQnNsRJmUVm",
  "key45": "4UrjxW2PxerxaCt1PpSczm1WFSfxfd47DRWnWb83VMaLSQ5cZrbFrRxR9787hZhSmiDzhmk3L22CMWLqozvyyBGF",
  "key46": "3FQ1TYpkDaM7APhG716V35fJuA5LKLiTk8tKuTFTiPLp7MXvj3nc4DWuxAGSr3g2hxiV2VVrRGV56NJVXCSiGe96",
  "key47": "4s4EPVXiHNrCEFh3zpRhwivLgsWvUPnPPxvJfmkjMK6PnT5pCGasjXnKP7pZ48kagTFsKDqXFjN2AznCeWd7JF8A",
  "key48": "4LnsMTenPxhjrPp7gJ7kszwGqg9iPZDQoVKvLfh6xYcPSB19UjL4azEBn2SENQq7RWXqVUhT7h9mc7vZpDCF74Wx"
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
