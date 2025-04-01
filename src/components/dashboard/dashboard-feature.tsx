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
    "5XiJrc4meZg7X7R6X3puyqYmLZwpqEGW3wpNh5Tr9esaPwno6jZb4d7cUpHEgkAjhkBBwtR2eLkNPn1y1tXswemg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9TgJy8Wszd2ovWN7NuFtEpW8yQgEfMGsCF2r1S7C3PpQtzG49Su1VdAZ4JeWCkzfRnwdc6rycyTSSXEQagx2R2",
  "key1": "3r1XyET6FTemP5t4RzKxRfGSeEME4UjeB5pMrDeNLJdAtfrPKv29Be3aUXR2ov3qRwSWhHi6N4AMSwAQkKqWHYvv",
  "key2": "3A3TaCki89h7mfgP1XfQycZARFdBqAxPNUFSM3f1ptV7n4g6vNNB8fR3EagiFiRnzVcpmJPzLwWdf3kuFmsMvgNy",
  "key3": "4Ug6xWQ6V7oicUwD6ypcKAoz4Gv8vX9LciXXdEPQ3SE3c7VvcHmVagQoAeAMAWgZmK9Zb9N2C59PSw5ch7dqodWj",
  "key4": "5aG4dFJN6CoZaxrV5GxjppQeg68DTx8712U3L4cXzwjV3HjmswVHQwS1stPLRaUyzYP16ddXwmahL6Stb1jpK215",
  "key5": "3KANwD82y8gC288HMmnUQLg38Yw34e777N2fWApaqgHBKhvdoCehGPs3zWMP3sugtvkc6oF9HbsRSVWDeVdsCwdE",
  "key6": "4W4v1ZTKLxZK84roEwDEYgfpnxGuJ6ECuACGXDVDcw7xAxwEXQeLSdSKv8Fqv3GQUJqU9oAav9z8vWpj1R2nwotc",
  "key7": "26vMxPo6VY4v9XsnGuF58nyAcAdAmHNUFZk89wySaEnebAK7ZoWiz22VYE4WVr1XLnyzCBQvehL8x1ipwgVDs5tw",
  "key8": "2aBsvvs1nLQ9DND4SpPFPhxy3ds339TW31hg6MFd2iNh3yxHqnAZgvKaqWQ2V8QEjnudxPmcE41p2TmA5RdurtEX",
  "key9": "3BDqKETkL3Cw3SMxTKhKQbsjuPiPCnXweTJV7ENtQhtYrK9vLeHagHVxBKiC62QQD2Qrr4kvTFBMmFjWyfrXAwF4",
  "key10": "uvWv2unFsNaTxaySQQ583tkGy39q8YQfDdVvn2tEeACGtcxwHhthbjqYwbMocBSM1gaS3E3t8Fhq4Xp73xmKtxQ",
  "key11": "5nPZz6Dy41SPCV6gWH8ha62C9CdZiPQTtJ5BcLkHCHauw8gZJHpA7wva5nziL3MMoTu4eRXWzNnSVGfzYJ8SXhTB",
  "key12": "XGxG3TaJaA8UfETjbYyboeZXJRPCQmbq6dZLEyzaPDxmCPEUttzDFyRXuWVDTJJewnrk8YJBkivM9TNL4wdd6ex",
  "key13": "6xifFwDZE2WotWeb3CDruVU9UnTjm28fZchaXGMsMkKG22zFNpE7NB8Avb5pKjqk532QHSZMe5Q8Ert2zW258Tm",
  "key14": "UdySGhUWa4Qf5MnJ8JSFMG3iaKbjWLU9socpjTguzepTs6w4Z3qqKafBT6v21AgHfgPrTu4MCWCih4uM8BmaCht",
  "key15": "4QADdgNVMaj9k5MTVAEKRKhbNpswZGvEgFaKSzKct9JraKmdyHTaiLbwVKWsQNqXnMpb8iEiZhcwnnVkiBxxtHN4",
  "key16": "3vVnUTKjx8rk45KoWhZcZrE1C1rhoQQjYFSFpjjiSMnAi7a48M8LDWVbGZhhB44cWHqNg3vjJrjqt6i9FUfpGFbF",
  "key17": "JHnbZUpb1Z6R2XYpJxRcxoRnws5p8LKuLxr6A7fqrRZ1pMvaKPhumgGf9CMoGvbLDD43o129k3fKaJKr1hqyJG7",
  "key18": "55TmmV6WfBsJnjZ1J2yJtBqAqgebmgsc3pL3y1JVrps22jYphKHfiZWXX98hs2bsPgGayHtH8EQ7pEa38QKnM9Aa",
  "key19": "258zcdt1rhG4RuA8coD2X66xpD8rk6JBYkDpDdbofYAnrG4jbLw6pX4oPMdGAA6aV3iLxRC1CBTbtmZy5AwjiJx4",
  "key20": "HLaamt5DRWcpK5ejZtZp8xtPgRXgLQoHcxiguK1kiK8XXMk2b5Nc16nXMn1fpbKgYAKBQojoAkUfHV5MefH8Gkd",
  "key21": "4vNoykMtmqAVj2VmqQ2UUtU7WVwJRNs5U8FuGswoKxo6VmFHnSEtP3VjgkrtXQGTQ82VgaE9xpA3kDpsmn2HrYEx",
  "key22": "3tLDMcfcno5Ajn72sC7kH1hvKx3dWiYMsh6m4hk8ctjg4boEexZweTnfLGrgz73LZtX9dNP46kokJYrpvQSa94MP",
  "key23": "2pM9fBCs23MPzhbLKG5iKUCjboFcWve6RUiCNhR94uAuodxi2kzbNRn8funzJC95GX8HDEvZTzVgvr7M9LAdWwtw",
  "key24": "TDgnxVrYgkpUo1ykNp3dD6SGaptLpFSQpyE2m7DvMRcq96wjb7Y2bEjnZbXou7JJUGsSW2SkStkw9yghtUbLJmU",
  "key25": "2YdG36Dd9ryNtkUd3YcPSSwfrRrHvBdQ1bnQkPXrCrL1pMycAtR179UhtbJV2TTXNYTDcgFb7uoBRAgFyrn5zSvp",
  "key26": "4qpuoqHCpvzKmmZNJ1XzwMWTReSpxCLpoUKjUYgyPmsG6t6J9rqH5r8mXUXWbG4bAoZGhCwx5LRwGUm9H4RwcmGx",
  "key27": "4px7SPAiWTQFBrNWRpDkoHCLgx2v1GDGV3JYMuEYHBWjDYbfpi1DiaYmQwE1uvL7hsfWFZHUFEDRbXAUuFoWQww3",
  "key28": "Bss62Y2EEFA6J1EJhx8FG9h9k6Guq88UqiJZrU1bCdNyngfb8ywf6nrqAb34MsYbURmHCfxkdysALW18PvFLHh4",
  "key29": "5o56AjV3zzDUhaT63KSYMhGtxcCBX1d7eHZzZVTpLU6PMP9EpwjZi4XdeU9b6cFc6kM33SXrF4RgM4piHJRdHKCk",
  "key30": "47kK8PiQqToPkCTDPUE1evBbmLJBv5yFgC5ybkgHe5yvgmVYTNUoZSaH1ceUztx83ezDSkSEXqjgiVWNBJ3uazK9",
  "key31": "3ZMkpaLGqRfbXz6oMgcnnCGX5Cu2cGr48eqEdVw5xELVCjFUywH2k73GCz4TdBeKHa6rhhyHT36guwPu91vFG7pk",
  "key32": "4Hytvm7Tr3MfWswmcyeLNemT1CDLMbxmDbPxxCvtWbNh7HpwNfDV8XsdGHUzbjGoD9mg8eTSGbqjcW8nH25ZNJF",
  "key33": "2AVFC7FB8iDbGfrhAWDj6c3nD5KyaoaDPmAsnhxaizTG6GqB3vS2aq5gijiFSLsJ5Dg1GMTKPwAbPv2DtapdsYC8",
  "key34": "4isYRGgsNQi9sx3ts729yHjquRTyd798gwFN6JezXSkJ2agk5KeibF2LponaZf21nun3BBeK4oTPr7VvL7YGL4Qm",
  "key35": "5SrPKpjEv8vqa6AeQWViLrr85WNMgw8sNgjSFiV6zbnPuLTcdB4diEMYnfsLYLD7CiMeZW96dqQQW9cBpmMDRcac",
  "key36": "5B2RzcN6yohRFgJ9xdQ7KKrtGwM4FqMNxfE9P1SGwfiLY9pP6RDnVERy5EYXH36neZNjmE3fzNmNo9k14HwGv2kX",
  "key37": "3xZd8AmH2K3FdqAdRAVKnqYXyaXuJ9uDzbHDCWq6VKGq8gKY6fWGW38MjuFgdec8Wf4WkTsQazmKiTygwecrERPz",
  "key38": "WEVQ2Rdn8vWnjrymFX8iffdVmC2RGYkR69xw97ru2UJ1HpZ7EEP9rAHcoPzPfhawMXebutnn7PUzWQ4rdSj2dSr",
  "key39": "2VQ4F7vV1CxfoByF7z8TUJaFiqbYcd6cpJNnT8xuXBArwPXBMdz8X5J4M2GrtbpT6779UEGJywiV35VZPGAwmFFy",
  "key40": "YRNHnPcjAKd4t5ebSEGmnNzFkY5FntdeNUY7eDcnYNQV8mWNU6KwHLvUTtLQqD8HXDUD1keRDeRy13GYM4USQCm",
  "key41": "4S9DLPxMGVh8nFEDBpfnv18midX84vjUgM9sKFKA7QkYJphDio5KSXeufW3LNcwoNj2UwGHKnmFPNNnHRJqjbHBi"
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
