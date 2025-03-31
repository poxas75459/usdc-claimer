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
    "5vU53q2xZ7TYHPeQWye1GZhvhvtFbG84WpW2MoKkJCCSXb2s9tfdxVVT8rrzP6XgijDtYkVRmybBntwUqLwSPmDv"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4DYNJkDWbr732W53KbDzf6PhScaKqaAFURNd5Gaz384uDyDuaFcH7i5wcTKqRLhbYog2PvUPLVPwAnsPbFNBvNEM",
  "decoyKey1": "3Lgox8x9D7RyXJnGjt2PbNvJD48cqBCZKnMbRwREJQnHaTs6A3fPKgP5r3o3Ks4w5E6EEX2oyx4evv3wPMsHi6Qm",
  "decoyKey2": "5RbKV3m3qkMK6wPqvvmCbk3D2Qx3qXEaATcxWuRkPQy98NVYr9kEGXhEtQY6G4soasa8bXW4rPTGGuB9BwCAbpYm",
  "decoyKey3": "4Wxuy9z9LBSx7kKmHDfzayn2XLqbXQj2B6V5vsvPVUrtmy73BpDATQdyz8FdKYWWBuXjQ51wnMudfVSbGvuoGFYk",
  "decoyKey4": "2J6k2ntfCLKY26sGs947qHUhVR9VAxq5D8JSxLtn4gfMJgUA351pmyx4AnS5MK1V4eRyVkK7B3q7zEa57LkF69sh",
  "decoyKey5": "igNU7ajzKYNPCSn62evzLTMtCqt7cewEmjyY2is4mnXC5nLkXJgBgmR3q4EFKwcm4Sc6EVATpPKvbx9cVMAyEdm",
  "decoyKey6": "45xiH2NsDwwXm1Goj6aA7FdAuMNMcvjM9ERUUJVK9eMdUyPYczQ3ea83A5uiaCYVk3n2mytRiuSYsUjuyrV6mCYj",
  "decoyKey7": "4LMJsLEb936iNhGhA2Xxv4CrbBEcbLsvrNmSyedpmRAS4LpTKqSc3An1NAscDWpf8faABbgxAug4EsXsn3XSqnAC",
  "decoyKey8": "63gSu9WJqReALEhkMY8i2gC7a9d1bKwLxR7ByUMnod6VQtsicfmTark6cnpaMCWwR4VJsUkBc7wvEX3SFr79rn8w",
  "decoyKey9": "4dZvNyU3NfLnFEBQwqqdZ9orBfgkz72MZXNm6JoPmtabuhc5aAxs3RL9buS456YFAV9R6dqkEUPmCHCFgLKzY9bR",
  "decoyKey10": "2p1Ug78fZtDu9xE9pGr9MeJZBpn3H1X3zdMhvuNzA4hYfWf9Szvd9B1ue36ZjvbSv7YrE3wGRQMauWmNjEt3dYHt",
  "decoyKey11": "5KQffGPKbp2pKsVtY9npTPZ7XU9yw1BKtHoB7i8YpuNHZ2GCLaFef8wjed1NWC3LdC2aq93MXYd42w4YiN1ff33W",
  "decoyKey12": "usQbk6CwUwxYyoWhqMn3bmqUkKamFtfDB2Nt4d6CpeaKHLBCLDXPwTgDVBkSEMYkLigBeTYmBZ65RspNXGezxhi",
  "decoyKey13": "4nz8Zz3kWCwXtp7MF8pXBHBuWsdUT7kDyKsuofYYqzsH994yDxkvBDmZmik8JCgy5SkytNYRyxCTANsxw3iwHkJk",
  "decoyKey14": "67DUyNs1a3tu6yoBAnoCus9bGAJqSTYZ2duTSnDsnA3de6oEoqHiuKV9NUeCpTQakAyKsEgPYL1keZZjSFhGxKJJ",
  "decoyKey15": "5AQgaUVtBvnii7KYnjKjwfLduGGNxecmfNxW5bLAk7vsqXee6jkfi7FD4qTsUygRpUDtyg6bhTZmfCAS72yVSaEe",
  "decoyKey16": "RqxyJY9Cj3P3ncT7rUEHF7bAnbU5vKqzefgtQ5A4nDSFYAvFABEDyBbF4817i5qZNRnJhZr6jVXJ2VoTQs2NEdx",
  "decoyKey17": "29gUXwDe2P76H2MGehBohDAGryR2DTcLN1dYuMm8HyxmDtYkhE8HSNckFC8UmodQRN9nJzWrmh5J2fJaENtBy9nu",
  "decoyKey18": "46oiB7ZKLguvr32qRe2qKQ7hCA62QtaPTf7bWb1r4RXQ3fmQFKU9fykSwxu1vXzDdMcZ5ag3tD3sra7yB8RTskPC",
  "decoyKey19": "8RZS1aTUvjxzJb6XMC9TmBJfUPis35qQ87Rwt2CN78ALwduneCbji9MfvsXwThb1MAC5TKKRTYa99GUthRQW91E",
  "decoyKey20": "2ZRSsJM2iApaxY8f6y47Uz7ngUDL9ohxydftk7SvcAruoSpbxKFfGGyAkj9ndLF54WDE9RrkoKuxHrNBr1mFpDKe",
  "decoyKey21": "2wMwQAnMKDjxPcD5uJemrP7w5kvXCCJUvcYco955RTZDbSoFedCGwkivkCijYsL2m95acehnL8hBd8QexXPnbFpn",
  "decoyKey22": "35fi9uZiDgAHb2wmTuVzKdt6rDwjaHNjEYFqwTaCAHGPptaa6P1wGvdiYLNUmcF9RjcutFZU52hUaRybv45giSGm",
  "decoyKey23": "2z49g67pqb4QSLg96ovjkj1YeCPP3gLE6B87WrxWGwmqC29av6QmaikTkEEKq5enycmvdh82a3NNyiSPDN6ypH5L",
  "decoyKey24": "T1fJrAihfRrmrtaxH4c7vxjhqB1L2VsZFGXXXcsTFD7GfscbEKWa5cqtpkfHaieBmwwojtC1avbpPdjWP6toTPN",
  "decoyKey25": "2hLysfkjfUWJx5mLQzhSDYGfjsRMZqzfHEpjwUJbREv5Q3jm6hi7mwxqXeYTan32KTMeFLvDFALgFu8vtLxgBjsx",
  "decoyKey26": "2TpRQgTo8q5Udn3VsXTEEXye4xummGy99f3LcMhHVUiykPLhUB4T4uXDJsxqbFtUDiHwwL5XbavGyV1vYPT1e1Ve",
  "decoyKey27": "5gXhyMs5kK8WWLCdgQAjjFR3mfGJedTeGSdL3T9Z3Ei6NxEG1MB7F6MmbjEmsYfRCWvhAiL3sNKxyzd6uMAuZe5v",
  "decoyKey28": "3fdKKZFQCXu1HDPjqZRaBptXL7WZKzhJWLcmer8cpXAcAZjP5fksqniEhLgYGZoW26VK75jq2NTSeHwWibuNDCNz",
  "decoyKey29": "2dVGj5qcbxJ2tptKosELSgHCbWqnRHdWK2zPbeUNix16TV4y3zgACPnLRg4fHjX3aVf8PQvE2T3ZGPtKahUK6BtF",
  "decoyKey30": "2JQfTytR9FDDdDk5pRUfB8Yn7yCmM1ovP7c6PxzjbXDEHBgMRqNMRAkMSAM1GezsPfcVvHDtBXPs31eRg7Rvi9h8",
  "decoyKey31": "2T8Nidks8yKJTQEMrSY7FSUAJQCyDHFJtJzFBYinESbDtyNu5k4DUjohrGCxyNz5ueom4B7VmQy3FKRVanhduA9P",
  "decoyKey32": "3hAS6v3uALJKv9DRzXT2na26rKQhEEU71TY8ZiE16AojauwqyoYQTLTHVHyqqkX5yNCAtf9c2w4SS5iGrdJdzawj",
  "decoyKey33": "4F3caG9kufi5Rkf4eHX5W6e3mouxegU8FS6YW64YUmn66R15g3StoCiYXZSSmhaoz21YB3V9W6LNUzv8P3c3JwYP",
  "decoyKey34": "26Q4YhnLxw8areqNuAHkfmQTbnn5YwwcCV79noFNFq8G9K5BcuRh9kirN5XMWdhrzQYG1CYuGGjBj1n2Kqm9uDwm",
  "decoyKey35": "3o2cddBycw1yfkhxFvi8BmJfC5MQJQFffrqXYkFE8CiJGySsZ8soXssPVrLVzZ9mBB4jrKm3UNkuP7yZq1nkwqKC",
  "decoyKey36": "ZQVHMvX7hycLuA4CTgfAWWRfqDpeAKeNHpKpSYwUWZP5Mv9fpCi8GM3x29bJARjDJz7VZU2EaaG4Hcu3FTkoBCW",
  "decoyKey37": "4xZUZfMEiZtARzKX2ax64CZ6boS4M1Sm2FUNYQL1xY2T3BHdHpWHnb4YigiGQxo3sLBAxRasQk53cXKgLs22sRSt",
  "decoyKey38": "54MdhjMCYNGT6jMnsQYbifmbHdhYgnWbhwxucmUVUzMhfpXNd5CQ1ZSqfuswX4556wjducMt9HrXFBGJYemJuTep",
  "decoyKey39": "3sZmBQoXbtopN5iBGQHUv8phB5MCKJWpuTyzsyQjwwrEMGh3wyg2s6wZwL9bhZBfADQQEC2u6xCe9vAhPoGWnRAS",
  "decoyKey40": "koRKhyLtGqZsXE3pvUigG7s2k6n3uG9qcEFogfNDix3rdRy7VDk5DxwytcC1wnY9Dnx6n8tWsFWEdgmZ3nKNfc1",
  "decoyKey41": "37xZg7HincgLj6NS2Hm1718KTVfUuvjnpUFwLZU14pi35q1AbWNVsr3uPJMmuhNsjJPzvfYyatNHr4BYb6WJGAxF",
  "decoyKey42": "jCxinUvvZRnhHNn4AheSnVgGmRtY4KJndXATSMKNg2HRzChHH4PKpcfyD1FD3kYc8eyd4JckFkfqN4QozH2Y6Ev",
  "decoyKey43": "4no5m3HnPk3ng8nRJyyj7UaAuto81ffmibWFsmEe3tBvoqnoZKdXaLjdWAmVdjvAdvoDLHZGGWCfygauSR9BGkCs",
  "decoyKey44": "PaHZUhBrS64hAAC6qt23rR8hFg4wBTu8AKVhEhcwtbPoFBAuMbkjpGQCFnz1tHLCGvufTbZfVNvDTTfvGgAmZcd",
  "decoyKey45": "ZiNfmWNxTioxa5bJTMj2FEDccCzJXPv9746WHme1XoXYJg6zNDBpkkcT8gEgsNgk17ZPm6bbvmnz6k9gvpqpD68",
  "decoyKey46": "5pfrufSGvdne4guUxzWCGnCrj1JpzxJg25bc6peyDe7vnKmmAJazeK3BewF7xM5G1TxymjmvtzzNGZcqPk6EnGAq",
  "decoyKey47": "2zTekbtm9ghYuCvyK98c8hQVsK7iTPkHy4qmfqN8e9viVw2irqNn6FLx5i5ka7gmJYRijAfKVzCWHLXRNuN6A2rN",
  "decoyKey48": "pHq9PH9HQ6WkyTokCP3BQqcQkoYBaSLEKKKY4dJW32SWuTKF3N8wTAiMxA5QMTaqNEx82khrCxkE6yLEFYFD8EW",
  "decoyKey49": "5AwThfDeqTVWSMH6UTeUszYmf62bvgcGoBxRt7UArv9ga5tS43SFramFBTYN7xgiEtq4Kq24vM5LE4RiWDjggS4f"
};
// DECOY_KEYS_END
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