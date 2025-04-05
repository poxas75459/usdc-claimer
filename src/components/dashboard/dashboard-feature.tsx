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
    "GKhtejNNfGzTzun1X9Jp1JR87EZdo2X5UL9FqkStB54kG55QxDpCPnSfDgdEWetzeQzJkS5s2YLSmKnNWEZLHpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71dcNLo89zUowTWLb5N3mJyAt79fTzJ7R2F4WaZYMz6djBRL712WrhM6sbLxXMutTEPF3Eehg7ZttjcExPgVJ8n",
  "key1": "2Xwxetu7YcSgiPDdQH93TzvitDDfQSvULWNJ7LxucJ32W9g63vUprMvCmzpdgp8LNmA1hdKPGAGrBxsWUZgkjDBP",
  "key2": "4sR5AMXXr1j3vRQqNEcN2LeSTqsCqjyMayNtenxb3CHRSKjVkTLiDGdrCFxphtXDKeVdSi6e5Rwhcx8dDeUWASTw",
  "key3": "3vg7asL9155fqDnSv3jF7xDwkE4v2G8RegW9JJdXVWYAEyaNDbP9f4a7e9kHvgn3or5Moh7uJSdR8RDzztYbhHUo",
  "key4": "3df33fyDjiXMB8tgfZzie2FotnNwmCZihSpxJM7RFnRAq15Amgpbq7PxwkHATLKrcvWrkc2bfyVhHRg6iLW5AuTP",
  "key5": "3RZdB4Nx5BMyz9o7BTK7VUnXLQ6rmRSxC2zV5W5EaDVdbvfyPL3NxpxwPQHMu7BjNy4GvUtiCeK5QmbCk6mRimyE",
  "key6": "3tUXKmUdMjQiRD8YviwdFPRx7Bz4vi65KTHPG3BXQrqWgy9Vbr7nnVGnBAt82jDCVKXbipPJ1HCVEKfxVVpVDPTt",
  "key7": "5AZ47Y7pBmzZbLS9cgAB5kjeWJBNtgrBvxHEK7NLCbqh3JT8G7qX3T7K9xkJHMkJmY9XGcwmeKM2d47fZFhUGJLB",
  "key8": "5X9GR6ArDvJAo9vV67vzXb5Pf6TERtBpciRrKDHU63qcHC8QQeEAgfFSozg8dj8o5F9hqQf6xFovCVN7RfYpHR8C",
  "key9": "2j99utKu9pafoJZSYhmcqPwX2fyUwFrd1U7Wu5AiChAWZ1z14muEY7tcwXbtUUrW7PFk75dWMnHTBrgkGyH1FPuy",
  "key10": "5LRgm1yW8dMAzWnwqaYbmfihWKaWJ9rqEBEgQvsX4Qxsi4ZJpRibosXXyDgPZjxT2svRwixUW63CSFA6Ed8SuFpd",
  "key11": "ZCb2pPJiq7zEoGoC9f1V6fnYAqArMt9gm6rHUnCU8Mvz45XnjmTw87RZj4xRSTM1VPUJHcLR9jQ3zBw4ETUX1NC",
  "key12": "2UG5e2f93ToMnbkXoqe3hbM8DR5JHK1ajvcATnYtNpxm1Xdgiu4uVFw3a4e4DuwCEJEXCj12e2e2yRtJ4TrHLDvb",
  "key13": "4qyuUG3SZhmdFhVvExj3tYUeSQuP1fm5shjKtnhWY1eW2Hqu5URGpnhK8ZadwmtvN89Z4y1r2JTtYUmLoCRcpYSn",
  "key14": "4o1pA4HrHi8owqzbmv81HfA1R2EtcVB5CSZu83kokppALA8ZhoaC56Ar17XTfLd68s5Go6uZuYwQVZh7PSoqf1M9",
  "key15": "51UBfeG1uFU56hVvALEgNqKJxCYkA7USRhEmy6i6sPCjG3CG6sZeoxk2fmTEkPF5WCH9ycCWhcrizeR8EUB8vKVX",
  "key16": "31kJuGi4osdHyj2NQ22bZ38RJTULeVtVEvbPMPYN27snrXTac6M2PsEsR9mHVQdDEJaNoxPobJLxAR6Hy2SiZnjn",
  "key17": "4fCFHXHrmqtxkRmxHG6kSrQmA1aub9aT9iCKkQUcB7y5dAL7p2L6SrQd4HTTDCx3JT83E1eKDnPNt72UoM1BWFFa",
  "key18": "3twM2dTLvvwj6Lo26WiwxZXhFj4dfcp6MdzvoGBjxeYhcDALJmAXYrFLByD7zfNCiD4zFP9TWLSMDDZe2ArR8Dpa",
  "key19": "2AGYbAJT1ewFDgDvnkzWuf5bNNuCw2VYn3ghj18b5CmJCYEz8Ncs8GkSDRSyVj41mL8euNofAVgDz4YfK1QgNWMz",
  "key20": "3seqXay9jXKcReVGKinVNnapHkzwwLeqXsPY8teH6LWfqhjKoBxijJjSYCriC934qt3S3YUhJEBfb7seLEdRgGLh",
  "key21": "2Y4Eu7Zug7FF4hn33JCgZuMqKPnbEcGApccqMJZMhjscJzTaRHWCKyzAXhW2sgtqywikqeXvpBYd14yNQHNQsWXK",
  "key22": "55e4ooZQw84jXtogZtRFmMktrVfShQpwPowaJjUk76UF6v2MopGWuxH9L1iskxHy3e3kMb3USz7nnqVaPrLTbwST",
  "key23": "6nNjMzrFDkPyXoDJBTz7kEw21PyJcAhzNwrXu5azNsRDZf3RXcdsJVkBVuvxeMo1atrfrKUgRAcEYEUrpudTet5",
  "key24": "63cyW56RBMBx9zbHpNFdNFCcJb512NXyPGeQScYiv7DHa4U8z4oEkvofdkJ2Tks9yYwhsPUVd4GkRSUoE8diZLY7",
  "key25": "2GDunU9dBmPtAg17jSyB2mGFWScFde7jcG3cgnYnB4D6GRWHmQ1UyVAKXsZtPF8eEXj9NoBuLwCVSu2TybqvjSrb",
  "key26": "469Tdn169NSMSmzz4ffyRHfqKhAeWSR18g5sJ7RBimVgUbPFccnmZdbwiKJLNZN2AKToxBLEavLbyZQkVYcstnpf",
  "key27": "4ZxU9hcwH84RWnPXrTvPfCw3PM2eEDLXApRvewnqKmyjQzWtsQXfXyARX2uM75zzzkPwfDBJpG2qdTsfjy21B2iy",
  "key28": "5qrW3SUrEyxNzBchbYdeV4FZjyk6SPhAf61dWjNd47sajgkfqfJ3gwctZoJNK73Rkutk1Rp93HidgQwYqVHdYN7A",
  "key29": "4ptaz2N9AJ4wo2R86QQMBXfb3j6jrEuw1GU7KCaNKSrNBoi5sEMeV8pppcnMGtD6Aj5mvXzHcygxcenazh8CQRLJ",
  "key30": "47ATLDF8L3J9kdpVeseLgMdQdL1abHoazPn4qZE7dPRxK1vHsALPvMYuEuUWGfCoaiDfCScSNnjDNzx4FpNwZDVE",
  "key31": "5JT12aJLZgmjWKsohazFh7obgpxwmbvS2vKGBaq21qqHtd2jviv3wgBSC1ikdYC6wZZtCYjNUL6J4jZoTaD6Eg6V",
  "key32": "2yT6DjU3MdvicUvS722fPdWGPEFUzfxjubzyH12CgivtCppSjdR7E8yvnSEaatX96uMA4h233jfaVuNnDfCLtECF",
  "key33": "5YAE4cAdoDtajKU3DRGH1HquNp4cSkfk139xmPJ2wPMkE2kzJ9uUjv66DtF1Q8X6CTBRy3NTPaARfvGaT8AnJJkk",
  "key34": "4HriAtEUc6H4GWcy8WCyzhnhzZ1HY73HG4eSE7UuapJ2UFRmpqZnH7gZiCm5eDVD5Ra4DBY9FcN4gd6d7Fk8womv",
  "key35": "5jvxbrVhe2pdw54qMm3AYGRNTuWFXqQzzGbVrUePJGxuLw4gwSntTZErUk8YJCW3uSddGRxga9Mt68N815nCVn7"
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
