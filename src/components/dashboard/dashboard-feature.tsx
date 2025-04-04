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
    "37SZVvqLXBEh1bbggMadF1m6T3vaSLqUVFBRbcoxzxLhvSzJAnuHLJu7KgFqBLZ18pSGernTsqSxkb2uYRSdZEtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmtpWE2ToGiDFK58gK3W3ga8qsGE8pvJgk4p7uexT5cfjM1AtbcE6ppRjMFqKLffGH3DZFFa1WDQYrxp42g1NV4",
  "key1": "3EVRMUQQ8Hc7z72AMY9ZQaj6Bwdih3Qih5rmziCkNv6L6TFyY5gBVTmotUFtHD4VNG34PYdxVt8BBKnymBgx4NPv",
  "key2": "2Aa538sokStz44Q97vxgar7r6qhmPmY8kpt1aUxzqYquAEftYN9GSKbBqryhmCoWiUWm3P74HVCfj1pu18iikrqn",
  "key3": "4a67rHANMLZv2pWUEJB1EYesY7L871Afak2RSBmN9cnEgqeZPcfU5Y1t4vLomwuLYbjMACykwNxfot96GGPb7rGL",
  "key4": "4EkdqfeFGSuqCCqxsqAvKMEHe2np9pzZtbezEYkHuddXrhhxaJuVbbBWaVPehxeYpeFotDP1BMDWmDKmb9io7fNZ",
  "key5": "2Vfgi1q84bHRyScM93XnqFHUhNELkpfzS72mwVVTwDZ5dBggCqfsGC99fqLVitGw4JKDTZndiWwajgBiiGwohHvF",
  "key6": "558eBGsf9pYXaQoHqk41mKAgcxnYD4iCigyahsGcMk6zYyvyCRBygmit9jz8TNNEwAjAjGRKACminbFrQQ2nneVy",
  "key7": "2GV6g6gv4f6UhgJidUu3Tir6zJeraFQ8cHVR6xGq4hbSxeT2VZi5YmDDvkoF7mHeXkoVfsBJqFu6RCWFRHHy5DwE",
  "key8": "3dQ2CeXYMgcge4TgV5hRScdG4b2RrEk9Kpo9BGEQAzPW9DLB1ggvqDu9QUkvYmD1oSZoLNjgagydPNBcJYVRNtPn",
  "key9": "27TzDXcxTGvm1LtH836zTAXbptGRtxdcwDHYYGgK7k8xA3huu3gDfmEaeeSoUuZ1sGNtoq7UrhMxmMKDw89BECW3",
  "key10": "pZk6zzobRa7gyF4mneEUbRcKS8pGNVwUgpeiULC4mJMsG2ejMKBy1nfvemCRLTqjvRyiSC93EsNL7o8gH6NiqBM",
  "key11": "5iU4GBdyHRGvzdqbuUuEWE5FuUK5a7PAqsLxX48LA2GSNABcytHr8otQ8tzLZfRofRg2EmbnzK8SQ6ySKH511iRK",
  "key12": "4R7RLHNZXaag2o8qDjD9ScapqHksJxrx29gw9XFXFdb26uxG2RGPrFBvYKaGzwiz6rKw4DbQonUpexP2MahQiE4Q",
  "key13": "4vvxEfzv88MT3Tb6BVChWXT7ukrs3hxdrSrWSfnkV3fxB8ZmwdpcVGF3CmZvLEavu6KwSpi6TWJ16xyUW1yjscu7",
  "key14": "2JYxedAyXVXhPJDAA4ogrSaPZdtSJtP19yWeGd38Lt6b3B35bVqTtXvYRpaDyvRfo6ruF4tTepsCrTjQzuce9JzX",
  "key15": "TjkzPbeKGiFjH2Nn3bZfvMw9o75PZ5FSG6zHS5vevhcrReUpfhsCuneUUu93vixDtrAFRMH6nN7YLtZxkKooWkA",
  "key16": "RmSanNQqsPJ4Ji4RTnefg4NqunxKXm1FAWKkDWWnYj9rYUynPkpHAw4vDJEcdLMbdPfbmkHgQEJ6JQcQ9pmRd6R",
  "key17": "qH5ZaCYPfkhcBepTLozHwN4fVtrsQ5ATumhQjyGqvoPH7ztPhKyq9okzTEKPnNnC25PAHG8QZPwLcNZ6Y4euiSg",
  "key18": "4adjY38M7FHxbJvDGcujcRr1Z5HB2pRhzdn3H2tcQCNev1xGtHrubHiETqCk2p1ou9rZMrK1Cz17zqcubeimhWP3",
  "key19": "NjX8VcjwGuCVB1XfD8TtVnWGZEk6Nyzo8L8LRSFuKcptcE1PUis3pJiqcZA45o6DyEyY3VZzEme4WZ81mBLDhk5",
  "key20": "4EHDX5uDgof9P3QhkqE5HRYGAfwRnWSeJH2BWoYX12XJPB6CMFNJZXwXLTDPPuzLpzn2EFgoi4DsGjvaw1iBQsGp",
  "key21": "5FYtSkzLrwHc7Ec3r5xrMmvPyCRtiEC4cVZm5CBDs9kyRhkCLz4citzQxuLiCbYWA3LfA1S95NqBs5qGJ57JuMGi",
  "key22": "2Uioht431So4U9pcDL6kzdnJB8ZMLvJH8xXuj2eS9bqU5a9qiNdKbyTjFqxMd5QeT5FLYpQ34C3UJkZeEFVX1Pq",
  "key23": "4f2DzodCwaXVWUpU1um9LG1CYkU5xJ7yfpnwNSJtDBa6wibWDDtNEhQmzPNq7WanjBiTaJcjYXyikPNszKRa1VBN",
  "key24": "64dgWr8wFiPH9zJkTMJNLyo9s6ceVryrF3ZanwRZFBF4G52j4mvG7bc9NJsUtviu2mLuSVNuMMh27Km9YBWcTxn2",
  "key25": "4jtngAQGw3FgfYd7SheCVDGyU2S1oo6nQr3Ly2PvgNtL8xqbVRkdbrYifERLGNEypJDx7oK11t3XEKFszSptaCBQ",
  "key26": "2GEbTaddxnmNaC1wQD2VEi3EfE55a3Cfyr6vTW9bU535c7nxhUx12HCWPL6zeRqypcJsEEMutj1vYJPP8Hqr5Wmt",
  "key27": "4UzAfgYawXmNPTGU5RLKekpZk2JcEDxfmi1YcFd2ZF3RBKXt1hAJ5FKKkDhbpdRCCECG4U9yAciRWhDCsSwRthHT",
  "key28": "hf2PrwFAKQdPmzCuYgVdYXh3T1ZLPY3dGYganrH6r2bsdGite4PNMDqmksdVs1t3GTbdi3UYp2aTHpNPgYGxHiN",
  "key29": "2Z2UxsKPmcFQibB14bBf9TKoaC48nkPgZEXbUjxxeuZLHa6FzN6C4jg9TWanShEzyLFmp23yh8C57MAxK5ZBGE1V",
  "key30": "3J3QiiYn2SpLRZdbdm8oUShdV6x8jEDmi17sbWUZ48V8WoPCWju6nYM6zyCuUenF3QSbbMs2MAV7yYxxTYaF6F8j",
  "key31": "2gmnp8bAjJxT5V66sgYMGv1Nih7aU2DVvp32ckda7BUsqQK8nf25DzcUtaeUeoGENBoQ1prC2HK3VFwiFFaqbdtN",
  "key32": "cceERN5wCe8idiW3HWUUTBKWWRhUzszakmyCErAE7iF9TA9EN9MPKefxGg5iiVUMah3neyTjAmptgakvfEFuqz1",
  "key33": "28FNquSXETcJPXtWXAGt69ZGQ1HR3ZKZLTbFbE7Ze1euhNwy8mM26rRukkUcipp5aeKFaj3QX7amAVV1AP2VBqZD",
  "key34": "7D8kh9yzRwM7h6Lz2TrgfaCmywvWfTxD3wytDSjSayWMM41T6FvtCnXq7YRkFGj7CL2JEYGy47KWHj9NHWecN8h",
  "key35": "3WAGucKZu1iFBF4fHd56B7kV9UoTMRNriqjzco9hotUz99bFaM8yXNn56rgRf1BT9zGyuekwFDUiXHVzvKNuvSjn",
  "key36": "5iKYCetVdzcp1cpzWg2C5KtiEHQF6vsVaHtw3cTKZjBv77zcXQfXCNvoKYBi4kzREpzeJiH16TPsQUVUafg3UL6r",
  "key37": "5qjQQdC48Rpy3LcvSru8DBjGMNEpTUUjVbdptsKsfRVciBkRz5HE3qVVSfCFR9HjQ81Qoq6CVmtDgLZDKXTQ1Db",
  "key38": "5TriEiq5f6RA7QD9pi8qGs1tyBnFjF8CoEWytnebq2nuRKcLjMzYzVZ5tQ9iREX99ixGQYHEsn9zAZmMGuLivLvm",
  "key39": "34VRVGs1yiWNMMTzB1sj5BPgDn3KANQDbcE6HQLsQyuZmgTuLfNp5oiSJtMY7fX94nQ9acK4ehMq1nGMvqVurxgw",
  "key40": "5HJMpRbHSwKBj5sSL3sAohQt9qhzMoUgAedrip62o49YJZdVJBopokXc4fGML5Uqe5h5oAZLuTM4NsvgYu2YXU9U",
  "key41": "37QtRJq7k8CVcvZBzXkJUdbkUsV3S2pCcuRv5N5hFCRDgBzzuj3yWVa6wHosCYPxnkj9zFWKyqJfsU3WasmYAF6R",
  "key42": "quvR5hCixb9ubMPyN8guFuaLwtztHEiAZCNbSTVkqcbTGKUnSYetNLnhdrUpjbs4rGbFk3BAqxaEhbuQZzRk9r6",
  "key43": "4M4SoW1sMKF46gM23skDXqasZwBLvtnK2Eycsvut16uJKb3eHSArAhVPHpKTS2MXtRaEoNLvUA4nDbMTz8keD7hb",
  "key44": "GRxiLquKNjMAXDbZyaibuVQSZW8yhv6WFZh9ZHRre6cND4MkjXHBJ3X1tpLV6DHFxpGg6hJiapDf617XiEBpX8f",
  "key45": "26iRpEzdUs6LkFx2kWdCSbzY9LHqCmEqVE1weeZquub22UcNi6M5gDNJ9t284oPt3UMF6VFqUSihGQwsV5sT6ReT",
  "key46": "54LeSriR86LBxVHYqJKN45BoxxBfjJCjoHitLP8pwVLUSuLcL3iZWGp7KjRp8Y82mc9fyH2QrTNvvqKLXrSaK2Uq",
  "key47": "3VTxFhCZQacDiiGRjHEoxTMgxi8k6JhK18GSCaBaJrVpj7yjDq47jeyeqWzXjrjRwi1tb21AZPcRTR6vPEEbs2XH",
  "key48": "2XxXJxJAEp9Syv4fZFpgTu5p8XFQqkoCVDe14R4o2bD7z8wDkmnoURhdDz7iYag5Q66AwNr3HFPpwmi4Ey4rXfPZ"
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
